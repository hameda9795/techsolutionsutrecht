import { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { findPackage, packageGroups } from "@/lib/packages";
import { isContactSubject } from "@/lib/contact-subjects";

export const metadata: Metadata = {
  title: "Contact | TechSolutionsUtrecht - Utrecht",
  description: "Bespreek je nieuwe website met Max, webdesigner in Utrecht-Zuilen. Bel, stuur een WhatsApp-bericht of vraag een offerte aan. Bezoek op afspraak.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/contact" },
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Adres",
    value: "Sint-Ludgerusstraat, 3553 CW Utrecht-Zuilen",
    href: null,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+31 6 25518708",
    href: "https://wa.me/31625518708",
    isWhatsApp: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@techsolutionsutrecht.nl",
    href: "mailto:info@techsolutionsutrecht.nl",
  },
  {
    icon: Clock,
    label: "Openingstijden",
    value: "Ma-Vr: 09:00-18:00",
    href: null,
  },
];

const faqs = [
  {
    q: "Wat vertel ik over mijn website?",
    a: "Vertel wat je bedrijf doet, of je al een website hebt en wat je wilt verbeteren. Daarmee kunnen we je wensen en de aanpak bespreken.",
  },
  {
    q: "Waar zitten jullie?",
    a: "TechSolutionsUtrecht is gevestigd aan de Sint-Ludgerusstraat in Zuilen. Je bent welkom op afspraak.",
  },
  {
    q: "Kan ik langskomen?",
    a: "Ja, maar alleen op afspraak. Zo zorgen we dat we echt tijd voor je hebben.",
  },
];

export default async function ContactPage({ searchParams: query }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const searchParams = await query;
  const packageId = typeof searchParams.pakket === "string" ? searchParams.pakket : "";
  const selectedPackage = findPackage(packageId);
  const initialSubject = selectedPackage?.subject ?? (isContactSubject(searchParams.dienst) ? searchParams.dienst : "");
  const contactTopic = ({
    "Webshop laten maken": "webshop",
    "Maatwerk website laten maken": "maatwerk website",
    "Hoger in Google (SEO)": "vindbaarheid",
    "Chatbot laten maken": "chatbot",
    "Windows-applicatie laten maken": "Windows-applicatie",
    "Website onderhoud": "websiteonderhoud",
  } as Record<string, string>)[initialSubject] ?? "website";
  const sources = ["/", "/prijzen", "/diensten", "/zzp-website-laten-maken", ...Object.values(packageGroups).map((group) => group.href)];
  const sourcePage = typeof searchParams.van === "string" && sources.includes(searchParams.van) ? searchParams.van : "/contact";
  return (
    <>
      
      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-[var(--color-muted)] hover:text-primary transition-colors">Home</Link></li>
            <li className="text-[var(--color-muted)]">/</li>
            <li><span className="text-[var(--color-ink)] font-medium">Contact</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-8 pb-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-ink)] mt-4 mb-6">
              Bespreek je{" "}
              <span className="text-[var(--color-primary)]">{contactTopic}</span>
            </h1>
            <p className="text-[var(--color-muted)] text-lg">
              Vertel wat je wilt bereiken en welke hulp je nodig hebt. Je hebt
              direct contact met Max en krijgt vooraf een duidelijke offerte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="order-last lg:order-first lg:col-span-1 min-w-0 space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="card-hover bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="min-w-0 [overflow-wrap:anywhere]">
                      <p className="text-[var(--color-muted)] text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.isWhatsApp ? "_blank" : undefined}
                          rel={item.isWhatsApp ? "noopener noreferrer" : undefined}
                          className="text-[var(--color-ink)] font-semibold hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[var(--color-ink)] font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* FAQ */}
              <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mt-8">
                <h3 className="text-xl font-bold text-[var(--color-ink)] mb-6">
                  Veelgestelde vragen
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.q}>
                      <p className="font-semibold text-[var(--color-ink)] mb-1">{faq.q}</p>
                      <p className="text-[var(--color-muted)] text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 min-w-0">
              <ContactForm key={`${packageId}-${initialSubject}`} initialSubject={initialSubject} initialPackage={selectedPackage ? { ...selectedPackage, id: packageId } : undefined} sourcePage={sourcePage} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
