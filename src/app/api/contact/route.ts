import type { NextRequest } from "next/server";
import { isContactSubject } from "@/lib/contact-subjects";
import { deliverLead } from "@/lib/leads";
import { findPackage } from "@/lib/packages";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, page, packageId } = body;

    if (!name || !email || !message || !subject) {
      return Response.json(
        { error: "Naam, email, onderwerp en bericht zijn verplicht" },
        { status: 400 }
      );
    }

    if (!isContactSubject(subject)) {
      return Response.json({ error: "Selecteer een geldig onderwerp" }, { status: 400 });
    }

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return Response.json({ error: "Vul een geldig e-mailadres in" }, { status: 400 });
    }

    const selectedPackage = typeof packageId === "string" ? findPackage(packageId) : undefined;
    const packageNote = selectedPackage && selectedPackage.subject === subject
      ? `Pakket: ${selectedPackage.name} (${selectedPackage.priceLabel})\n\n`
      : "";
    const result = await deliverLead({
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      phone: phone ? String(phone).slice(0, 64) : undefined,
      subject: String(subject).slice(0, 200),
      message: `${packageNote}${String(message).slice(0, 4500)}`,
      page: typeof page === "string" ? page.slice(0, 500) : undefined,
      referrer: request.headers.get("referer") || undefined,
    });

    if (!result.ok) {
      return Response.json(
        {
          error:
            "Verzenden lukte niet. Bel of WhatsApp gerust direct: 06 25518708, of mail naar info@techsolutionsutrecht.nl.",
        },
        { status: 500 }
      );
    }

    return Response.json({ success: true, message: "Bericht verzonden!" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      {
        error:
          "Er ging iets mis. Bel of WhatsApp gerust direct: 06 25518708, of mail naar info@techsolutionsutrecht.nl.",
      },
      { status: 500 }
    );
  }
}
