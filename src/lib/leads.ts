// Lead capture met meerdere onafhankelijke kanalen.
//
// Achtergrond: het contactformulier stuurde uitsluitend naar Telegram. Ontbrak
// een van de Telegram-env-vars, of gaf de Telegram-API een fout, dan kreeg de
// bezoeker een foutmelding en was de aanvraag definitief verloren. Bij weinig
// verkeer is elke gemiste aanvraag direct gemiste omzet.
//
// Nieuwe opzet: de lead gaat naar alle beschikbare kanalen tegelijk. Zolang
// minstens één kanaal slaagt, is de aanvraag veiliggesteld en krijgt de
// bezoeker een bevestiging. Slaagt geen enkel kanaal, dan wordt de volledige
// lead alsnog naar de serverlog geschreven zodat hij terug te vinden is.

import { neon } from "@neondatabase/serverless";

export type Lead = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  page?: string;
  referrer?: string;
};

export type DeliveryResult = {
  ok: boolean;
  channels: Record<string, "ok" | "skipped" | "failed">;
};

function formatLead(lead: Lead): string {
  return [
    "Nieuwe aanvraag via techsolutionsutrecht.nl",
    "",
    `Naam:      ${lead.name}`,
    `E-mail:    ${lead.email}`,
    `Telefoon:  ${lead.phone || "niet opgegeven"}`,
    `Onderwerp: ${lead.subject}`,
    `Pagina:    ${lead.page || "onbekend"}`,
    `Herkomst:  ${lead.referrer || "direct"}`,
    "",
    "Bericht:",
    lead.message,
    "",
    `Tijd: ${new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" })}`,
  ].join("\n");
}

/** Kanaal 1 — permanente opslag in Neon Postgres. */
async function saveToDatabase(lead: Lead): Promise<"ok" | "skipped" | "failed"> {
  if (!process.env.DATABASE_URL) return "skipped";

  try {
    const sql = neon(process.env.DATABASE_URL);

    await sql`
      CREATE TABLE IF NOT EXISTS contact_leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(64),
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        page VARCHAR(500),
        referrer VARCHAR(500),
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO contact_leads (name, email, phone, subject, message, page, referrer)
      VALUES (
        ${lead.name}, ${lead.email}, ${lead.phone || null}, ${lead.subject},
        ${lead.message}, ${lead.page || null}, ${lead.referrer || null}
      )
    `;

    return "ok";
  } catch (error) {
    console.error("[lead] database opslaan mislukt:", error);
    return "failed";
  }
}

/** Kanaal 2 — Telegram-melding (zoals voorheen, maar niet langer kritiek). */
async function sendToTelegram(lead: Lead): Promise<"ok" | "skipped" | "failed"> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return "skipped";

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Bewust geen parse_mode: Markdown brak eerder op namen met _ of * erin,
      // waardoor Telegram de melding weigerde en de lead verloren ging.
      body: JSON.stringify({ chat_id: chatId, text: formatLead(lead) }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok || data?.ok === false) {
      console.error("[lead] telegram fout:", data);
      return "failed";
    }
    return "ok";
  } catch (error) {
    console.error("[lead] telegram mislukt:", error);
    return "failed";
  }
}

/**
 * Kanaal 3 — e-mail via Resend.
 * Zet RESEND_API_KEY en LEAD_EMAIL_TO in de omgevingsvariabelen om dit te
 * activeren. Geen extra npm-pakket nodig, dit is een gewone HTTP-aanroep.
 */
async function sendEmail(lead: Lead): Promise<"ok" | "skipped" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO || "info@techsolutionsutrecht.nl";
  const from = process.env.LEAD_EMAIL_FROM;
  if (!apiKey || !from) return "skipped";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject: `Nieuwe aanvraag: ${lead.subject} — ${lead.name}`,
        text: formatLead(lead),
      }),
    });

    if (!response.ok) {
      console.error("[lead] e-mail fout:", await response.text());
      return "failed";
    }
    return "ok";
  } catch (error) {
    console.error("[lead] e-mail mislukt:", error);
    return "failed";
  }
}

export async function deliverLead(lead: Lead): Promise<DeliveryResult> {
  const [database, telegram, email] = await Promise.all([
    saveToDatabase(lead),
    sendToTelegram(lead),
    sendEmail(lead),
  ]);

  const channels = { database, telegram, email };
  const ok = Object.values(channels).includes("ok");

  if (!ok) {
    // Laatste redmiddel: de volledige aanvraag in de serverlog, zodat hij
    // terug te vinden is in de Vercel-logs in plaats van definitief weg.
    console.error("[lead] GEEN ENKEL KANAAL GESLAAGD — lead volgt:", channels);
    console.error(formatLead(lead));
  }

  return { ok, channels };
}
