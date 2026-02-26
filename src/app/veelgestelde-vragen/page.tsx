import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen | TechSolutionsUtrecht - Utrecht",
  description: "Antwoorden op de meest gestelde vragen over websites, webshops, reparaties en meer. Niet gevonden wat je zocht? Neem contact op!",
};

const faqs = [
  {
    category: "Websites",
    questions: [
      {
        q: "Wat kost een website laten maken?",
        a: "De kosten hangen af van je wensen. Een eenvoudige WordPress website start vanaf €1.499. Een professionele webshop vanaf €2.499. Voor maatwerk projecten beginnen we vanaf €5.000. Vraag een gratis offerte aan voor een exacte prijs."
      },
      {
        q: "Hoe lang duurt het om een website te maken?",
        a: "Een standaard WordPress website duurt 2-4 weken. Een webshop 3-6 weken. De exacte tijd hangt af van de complexiteit en hoe snel je content aanlevert."
      },
      {
        q: "Kan ik zelf mijn website beheren?",
        a: "Ja! We werken met WordPress, het meest gebruiksvriendelijke CMS. Je krijgt een training zodat je zelf teksten en foto's kunt aanpassen."
      },
      {
        q: "Is mijn website geschikt voor mobiel?",
        a: "Absoluut. Alle websites die wij maken zijn 'responsive', wat betekent dat ze perfect werken op desktop, tablet én smartphone."
      },
      {
        q: "Wat is het verschil tussen WordPress en maatwerk?",
        a: "WordPress is ideaal voor de meeste websites: snel, flexibel en betaalbaar. Maatwerk (Next.js/React) is nodig voor complexe webapplicaties, platforms of specifieke functionaliteit die standaard CMS'en niet bieden."
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
        a: "Laptop scherm reparaties starten vanaf €79 (exclusief onderdeel). MacBook schermen vanaf €299. De exacte prijs hangt af van het model."
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
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Veelgestelde{" "}
              <span className="gradient-text">Vragen</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)]">
              Antwoorden op de meest gestelde vragen. Niet gevonden wat je zocht?{" "}
              <Link href="/contact" className="text-primary hover:underline">Neem contact op</Link>.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg">
                    {section.category[0]}
                  </span>
                  {section.category}
                </h2>
                
                <div className="space-y-4">
                  {section.questions.map((faq, index) => (
                    <div 
                      key={index}
                      className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden"
                    >
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          {faq.q}
                        </h3>
                        <p className="text-[var(--text-secondary)] pl-8">
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
          <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Nog vragen?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
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
