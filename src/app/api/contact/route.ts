import type { NextRequest } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Naam, email en bericht zijn verplicht" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if Telegram is configured
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram not configured");
      return new Response(
        JSON.stringify({ error: "Service not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Format message for Telegram
    const telegramMessage = `
🆕 *Nieuw Contactformulier*

👤 *Naam:* ${name}
📧 *Email:* ${email}
📱 *Telefoon:* ${phone || "Niet opgegeven"}
📝 *Onderwerp:* ${subject || "Geen onderwerp"}

💬 *Bericht:*
${message}

⏰ *Tijd:* ${new Date().toLocaleString("nl-NL")}
🌐 *Bron:* techsolutionsutrecht.nl
    `.trim();

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramData.ok) {
      console.error("Telegram API error:", telegramData);
      return new Response(
        JSON.stringify({ error: "Kon bericht niet verzenden. Probeer later opnieuw." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Bericht verzonden!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Er is iets misgegaan. Probeer het later opnieuw." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
