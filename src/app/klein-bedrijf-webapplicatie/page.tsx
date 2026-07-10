import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code, Check, ArrowRight, Building, Lightbulb, Shield } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/klein-bedrijf-webapplicatie";

export const metadata: Metadata = {
  title: "Webapplicatie Laten Bouwen voor Klein Bedrijf | React & Next.js | TechSolutions",
  description: "Webapplicatie laten bouwen voor je kleine bedrijf of MKB? Schaalbaar maatwerk met React en Next.js, gebouwd door een ervaren developer in Utrecht. Vraag een offerte aan.",
  alternates: { canonical: pageUrl },
};

const service = serviceSchema({
  name: "Webapplicatie laten bouwen voor klein bedrijf Utrecht",
  description:
    "Schaalbare maatwerk webapplicaties voor MKB en kleine bedrijven in Utrecht, gebouwd met React en Next.js. Klantportalen, dashboards en interne tools vanaf €400.",
  url: pageUrl,
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Webapplicatie voor Klein Bedrijf", url: pageUrl },
]);

const faqs = [
  {
    question: "Wat kost een webapplicatie voor een klein bedrijf?",
    answer:
      "Maatwerk webapplicaties starten vanaf €400 en lopen op afhankelijk van de complexiteit en het aantal functies. Waar grote softwarebedrijven al snel €10.000+ rekenen, bied ik een betaalbaar alternatief voor MKB, met een heldere offerte vooraf.",
  },
  {
    question: "Welke soorten webapplicaties bouw je voor MKB?",
    answer:
      "Denk aan klantportalen, reserverings- en boekingssystemen, interne tools voor facturatie of voorraadbeheer en dashboards die je bedrijfsdata visualiseren. Alles wordt op maat gemaakt rond jouw proces.",
  },
  {
    question: "Kan de applicatie meegroeien met mijn bedrijf?",
    answer:
      "Ja. Ik bouw met schaalbare technologie (React, Next.js en Node.js), zodat je applicatie probleemloos meegroeit met meer gebruikers en nieuwe functies, zonder dat je later opnieuw moet beginnen.",
  },
  {
    question: "Hoe lang duurt het bouwen van een webapplicatie?",
    answer:
      "Een afgebakend project lever ik vaak binnen 5 tot 12 werkdagen op. Grotere applicaties pakken we gefaseerd aan: eerst een werkende eerste versie, daarna stap voor stap uitbreiden.",
  },
];

const faqSchema = faqPageSchema(faqs);

const features = [
  "Next.js & React",
  "Node.js backend",
  "Database architectuur",
  "API integraties",
  "Real-time features",
  "Schaalbare hosting",
  "Veilige authenticatie",
  "Responsive design",
];

const benefits = [
  {
    icon: Building,
    title: "Voor MKB",
    description: "Speciaal ontwikkeld voor kleine bedrijven. Geen overbodige functies, wel alles wat u nodig heeft."
  },
  {
    icon: Lightbulb,
    title: "Slimme Oplossingen",
    description: "Automatiseer processen, bespaar tijd en verhoog de efficiëntie van uw bedrijf."
  },
  {
    icon: Shield,
    title: "Veilig & Betrouwbaar",
    description: "Moderne beveiligingstechnieken. Uw data is veilig en de applicatie werkt altijd."
  },
];

export default function KleinBedrijfWebapplicatiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <nav className="text-sm text-[var(--color-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>Klein Bedrijf Webapplicatie</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                Webapplicatie Laten Bouwen{" "}
                <span className="text-[var(--color-primary)]">Klein Bedrijf</span>
              </h1>
              
              <p className="text-lg text-[var(--color-muted)] mb-6">
                <strong className="text-[var(--color-ink)]">Webapplicatie laten bouwen voor uw klein bedrijf?</strong> 
                Wij bieden <strong className="text-primary">betaalbare maatwerk oplossingen</strong> vanaf 
                <strong className="text-primary">€400</strong>. 
                Perfect voor MKB dat een professionele webapplicatie nodig heeft zonder het budget van een groot bedrijf.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[var(--color-muted)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-3xl font-bold text-primary">€400 - €2.000</div>
                <div className="text-[var(--color-muted)]">Oplevering: 5-12 dagen</div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary group">
                  Bespreek uw project
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <a 
                  href="https://wa.me/31625518708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  WhatsApp direct
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-24 h-24 text-[var(--color-primary)] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--color-ink)]">Maatwerk</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">€400</div>
                  <div className="text-[var(--color-muted)] mt-1">Vanaf prijs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--color-muted)]">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8 mb-20">
            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">
              Voorbeelden van Webapplicaties voor Kleine Bedrijven
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-[var(--color-surface)] rounded-xl">
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Klantportaal</h3>
                  <p className="text-[var(--color-muted)] text-sm">
                    Een portal waar klanten hun documenten kunnen inzien, 
                    afspraken maken en communiceren met uw bedrijf.
                  </p>
                </div>
                
                <div className="p-4 bg-[var(--color-surface)] rounded-xl">
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Reserveringssysteem</h3>
                  <p className="text-[var(--color-muted)] text-sm">
                    Laat klanten direct online afspraken boeken, 
                    beschikbaarheid zien en bevestigingen ontvangen.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-[var(--color-surface)] rounded-xl">
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Interne Tool</h3>
                  <p className="text-[var(--color-muted)] text-sm">
                    Automatiseer interne processen zoals facturatie, 
                    projectmanagement of voorraadbeheer.
                  </p>
                </div>
                
                <div className="p-4 bg-[var(--color-surface)] rounded-xl">
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Dashboard</h3>
                  <p className="text-[var(--color-muted)] text-sm">
                    Visualiseer bedrijfsdata, track KPI's en maak 
                    data-gedreven beslissingen met een custom dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Us */}
          <div className="bg-[var(--color-primary)]/10 border border-primary/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">
                  Waarom Kiezen voor Onze Webapplicatie Service?
                </h2>
                
                <p className="text-[var(--color-muted)] mb-4">
                  Grote softwarebedrijven rekenen vaak €10.000+ voor een webapplicatie. 
                  Dat is voor veel kleine bedrijven niet haalbaar. Wij bieden een 
                  <strong className="text-primary">betaalbaar alternatief</strong> 
                  zonder in te leveren op kwaliteit.
                </p>
                
                <ul className="space-y-2 text-[var(--color-muted)]">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Scherpe prijs: vanaf €400</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Snelle oplevering: 5-12 dagen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Moderne technologie (Next.js, React)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Schaalbaar: groei mee met uw bedrijf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Persoonlijk contact, geen accountmanagers</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-extrabold text-primary mb-2">€400</div>
                <div className="text-[var(--color-muted)] mb-6">Vanafprijs voor MKB</div>
                
                <Link href="/contact" className="btn-primary inline-flex">
                  Start uw project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen — webapplicatie voor MKB</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
