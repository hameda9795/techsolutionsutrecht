import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen | TechSolutionsUtrecht - Utrecht",
  description: "Antwoorden op de meest gestelde vragen over websites, webshops, reparaties en meer. Niet gevonden wat je zocht? Neem contact op!",
  alternates: { canonical: "https://techsolutionsutrecht.nl/veelgestelde-vragen" },
};

const faqs = [
  {
    category: "Websites",
    questions: [
      {
        q: "Wat kost een website laten maken?",
        a: "Een complete professionele website start vanaf €250 en kost meestal €350–€650. Een webshop start vanaf €795 en kost meestal €1.000–€2.000. SEO start vanaf €200 per maand, websiteonderhoud vanaf €29 per maand en een eenvoudige automatisering vanaf €450. Na de intake ontvang je een vaste totaalprijs of duidelijke maandprijs."
      },
      {
        q: "Hoe lang duurt het om een website te maken?",
        a: "De planning hangt af van inhoud, functies, koppelingen en hoe snel feedback wordt gegeven. Voor een webshop is 1–3 weken een gemiddelde indicatie. Voor websites en automatisering leggen we de planning na de intake vast in de offerte."
      },
      {
        q: "Kan ik zelf mijn website beheren?",
        a: "Ja, wanneer eigen beheer bij je wensen past. WordPress kan geschikt zijn voor uitgebreid contentbeheer; bij andere projecten kiezen we een andere passende techniek. Je krijgt uitleg over de afgesproken beheeromgeving."
      },
      {
        q: "Is mijn website geschikt voor mobiel?",
        a: "Absoluut. Alle websites die wij maken zijn 'responsive', wat betekent dat ze perfect werken op desktop, tablet én smartphone."
      },
      {
        q: "Bouwen jullie websites met WordPress of Next.js?",
        a: "Dat hangt af van je doelen. WordPress past vaak goed wanneer je veel inhoud zelf wilt beheren. Next.js kan beter passen wanneer snelheid of specifieke websitefuncties belangrijk zijn. Beide vallen onder de dienst Website laten maken."
      }
    ]
  },
  {
    category: "Webshops",
    questions: [
      {
        q: "Welke betaalmethoden kan ik aanbieden?",
        a: "Met WooCommerce kun je iDEAL, creditcard (Visa, Mastercard), PayPal, Apple Pay, en vele andere betaalmethoden aanbieden. We helpen je de juiste betaalprovider te kiezen."
      },
      {
        q: "Kan ik mijn bestaande webshop migreren?",
        a: "Ja, we kunnen je bestaande webshop migreren naar WooCommerce. We zorgen voor een veilige overdracht van producten, klanten en bestellingen."
      },
      {
        q: "Hoe werkt voorraadbeheer?",
        a: "WooCommerce heeft een ingebouwd voorraadbeheersysteem. Je krijgt automatisch meldingen als producten bijna op zijn, en je kunt eenvoudig bijbestellen."
      }
    ]
  },
  {
    category: "Reparaties",
    questions: [
      {
        q: "Hoe snel is mijn laptop gerepareerd?",
        a: "De meeste reparaties zijn binnen 24 uur klaar. Voor complexe reparaties of als onderdelen besteld moeten worden, kan het 2-3 werkdagen duren."
      },
      {
        q: "Wat kost een scherm reparatie?",
        a: "Reparaties starten vanaf €35 voor telefoons, €40 voor laptops en computers en €55 voor Macs. De prijs van een schermreparatie hangt af van het model en het benodigde onderdeel; je krijgt altijd vooraf een duidelijke offerte."
      },
      {
        q: "Geven jullie garantie op reparaties?",
        a: "Ja, we geven 6 maanden garantie op alle reparaties. Dit geldt voor zowel de onderdelen als het werk."
      },
      {
        q: "Wat moet ik doen bij waterschade?",
        a: "Zet het apparaat ONMIDDELLIJK uit, koppel de stroom los, en laat het drogen. Lees onze uitgebreide gids: MacBook Waterschade of neem direct contact op."
      },
      {
        q: "Repareren jullie ook iPhones en iPads?",
        a: "Ja! We repareren alle Apple apparaten: iPhone, iPad, MacBook, iMac en Mac mini. We gebruiken originele of hoogwaardige vervangende onderdelen."
      }
    ]
  },
  {
    category: "Algemeen",
    questions: [
      {
        q: "Waar zitten jullie?",
        a: "Onze werkplaats is in Utrecht. Je bent welkom op afspraak. We werken ook op locatie in Utrecht en omgeving voor bedrijven."
      },
      {
        q: "Hoe kan ik contact opnemen?",
        a: "Je kunt ons bereiken via WhatsApp (+31 6 25518708), email (info@techsolutionsutrecht.nl), of het contactformulier op de website. We reageren meestal binnen 4 uur."
      },
      {
        q: "Wat zijn jullie openingstijden?",
        a: "We zijn geopend van maandag tot en met vrijdag, van 09:00 tot 18:00. Voor urgente reparaties kun je ook buiten kantoortijden contact opnemen."
      },
      {
        q: "Werken jullie ook op locatie?",
        a: "Ja, voor bedrijven in Utrecht en omgeving kunnen we op locatie komen voor reparaties of IT-support. Vraag naar de mogelijkheden."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <>
      <main className="pt-32 pb-24">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-6">
              Veelgestelde{" "}
              <span className="text-[var(--color-primary)]">Vragen</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              Antwoorden op de meest gestelde vragen. Niet gevonden wat je zocht?{" "}
              <Link href="/contact" className="text-primary hover:underline">Neem contact op</Link>.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg">
                    {section.category[0]}
                  </span>
                  {section.category}
                </h2>
                
                <div className="space-y-4">
                  {section.questions.map((faq, index) => (
                    <div 
                      key={index}
                      className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl overflow-hidden"
                    >
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-3 flex items-start gap-3">
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          {faq.q}
                        </h3>
                        <p className="text-[var(--color-muted)] pl-8">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-[var(--color-primary)]/10 border border-primary/20 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">
              Nog vragen?
            </h3>
            <p className="text-[var(--color-muted)] mb-6">
              We helpen je graag persoonlijk. Stuur ons een bericht en we reageren binnen 4 uur.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Opnemen
              </Link>
              <a 
                href="https://wa.me/31625518708"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
