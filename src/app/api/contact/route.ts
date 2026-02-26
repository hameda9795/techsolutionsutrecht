import type { NextRequest } from "next/server";

// Simple email API using a service like EmailJS or can be replaced with nodemailer
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

    // Here you would typically send an email using a service like:
    // 1. Resend.com (recommended - free tier available)
    // 2. SendGrid
    // 3. AWS SES
    // 4. Nodemailer with SMTP
    
    // For now, we'll log it (in production, replace with actual email sending)
    console.log("📧 New Contact Form Submission:");
    console.log({
      name,
      email,
      phone: phone || "Niet opgegeven",
      subject: subject || "Geen onderwerp",
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace this with actual email sending
    // Example using Resend (you need to sign up at resend.com):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'contact@techsolutionsutrecht.nl',
      to: 'info@techsolutionsutrecht.nl',
      subject: `Nieuw bericht: ${subject || 'Contactformulier'}`,
      html: `
        <h2>Nieuw bericht van ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone || 'Niet opgegeven'}</p>
        <p><strong>Onderwerp:</strong> ${subject || 'Geen onderwerp'}</p>
        <hr/>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });
    */

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
