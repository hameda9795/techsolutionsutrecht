import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code, Check, ArrowRight, Building, Lightbulb, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Webapplicatie Laten Bouwen Klein Bedrijf | Vanaf €400 | TechSolutionsUtrecht",
  description: "Webapplicatie laten bouwen voor klein bedrijf? Betaalbare maatwerk oplossingen vanaf €400. Snel, schaalbaar en professioneel in Utrecht.",
  keywords: ["webapplicatie laten bouwen klein bedrijf", "maatwerk webapplicatie mkb", "goedkope webapplicatie", "webapplicatie kleine onderneming", "betaalbare webapplicatie utrecht"],
};

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
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>Klein Bedrijf Webapplicatie</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-purple-500 mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Webapplicatie Laten Bouwen{" "}
                <span className="gradient-text">Klein Bedrijf</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                <strong className="text-[var(--text-primary)]">Webapplicatie laten bouwen voor uw klein bedrijf?</strong> 
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
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-3xl font-bold text-primary">€400 - €2.000</div>
                <div className="text-[var(--text-muted)]">Oplevering: 5-12 dagen</div>
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-24 h-24 text-secondary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">Maatwerk</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">€400</div>
                  <div className="text-[var(--text-muted)] mt-1">Vanaf prijs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-secondary)]">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 mb-20">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Voorbeelden van Webapplicaties voor Kleine Bedrijven
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-[var(--bg-tertiary)] rounded-xl">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Klantportaal</h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Een portal waar klanten hun documenten kunnen inzien, 
                    afspraken maken en communiceren met uw bedrijf.
                  </p>
                </div>
                
                <div className="p-4 bg-[var(--bg-tertiary)] rounded-xl">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Reserveringssysteem</h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Laat klanten direct online afspraken boeken, 
                    beschikbaarheid zien en bevestigingen ontvangen.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-[var(--bg-tertiary)] rounded-xl">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Interne Tool</h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Automatiseer interne processen zoals facturatie, 
                    projectmanagement of voorraadbeheer.
                  </p>
                </div>
                
                <div className="p-4 bg-[var(--bg-tertiary)] rounded-xl">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Dashboard</h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Visualiseer bedrijfsdata, track KPI's en maak 
                    data-gedreven beslissingen met een custom dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Us */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Waarom Kiezen voor Onze Webapplicatie Service?
                </h2>
                
                <p className="text-[var(--text-secondary)] mb-4">
                  Grote softwarebedrijven rekenen vaak €10.000+ voor een webapplicatie. 
                  Dat is voor veel kleine bedrijven niet haalbaar. Wij bieden een 
                  <strong className="text-primary">betaalbaar alternatief</strong> 
                  zonder in te leveren op kwaliteit.
                </p>
                
                <ul className="space-y-2 text-[var(--text-secondary)]">
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
                <div className="text-[var(--text-secondary)] mb-6">Vanafprijs voor MKB</div>
                
                <Link href="/contact" className="btn-primary inline-flex">
                  Start uw project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
