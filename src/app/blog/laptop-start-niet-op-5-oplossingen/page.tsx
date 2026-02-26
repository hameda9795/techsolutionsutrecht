import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, AlertTriangle, CheckCircle, Power, Battery, Monitor, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Laptop Start Niet Op? 5 Oplossingen die Wél Werken | TechSolutionsUtrecht",
  description: "Laptop doet niets meer? Probeer deze 5 oplossingen voordat je naar de reparateur gaat. Werkt het niet? Wij helpen in Utrecht. Bel of WhatsApp!",
  keywords: ["laptop start niet op", "laptop doet niets", "laptop start niet", "laptop probleem", "laptop reparatie utrecht"],
};

const solutions = [
  {
    step: 1,
    icon: Power,
    title: "Hard Reset (Force Shutdown)",
    description: "Houd de power-knop 30 seconden ingedrukt. Laat los, wacht 10 seconden, en start opnieuw op. Dit reset de hardware en lost vaak tijdelijke problemen op.",
  },
  {
    step: 2,
    icon: Battery,
    title: "Check de Oplader",
    description: "Controleer of de oplader goed is aangesloten. Probeer een ander stopcontact. Als het lampje niet brandt, is mogelijk de adapter of kabel defect.",
  },
  {
    step: 3,
    icon: Monitor,
    title: "Externe Monitor Test",
    description: "Sluit je laptop aan op een externe monitor (via HDMI). Werkt die wel? Dan is waarschijnlijk alleen het scherm kapot, niet de hele laptop.",
  },
  {
    step: 4,
    icon: RotateCcw,
    title: "RAM Modules Resetten",
    description: "Voor gevorderde gebruikers: open de laptop en haal de RAM modules eruit en weer erin. Slecht contact met geheugen kan startproblemen veroorzaken.",
  },
  {
    step: 5,
    icon: AlertTriangle,
    title: "Wacht en Probeer Opnieuw",
    description: "Soms is de laptop oververhit of heeft een interne bescherming geactiveerd. Laat de laptop 1-2 uur rusten op een koele plek zonder aan te zetten.",
  },
];

export default function LaptopStartNietOpPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-[var(--text-secondary)] hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar blog
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Reparaties
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Laptop Start Niet Op?{" "}
              <span className="gradient-text">5 Oplossingen</span>{" "}
              die Wél Werken
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-[var(--text-muted)] mb-12 pb-12 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>TechSolutionsUtrecht</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>25 februari 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min leestijd</span>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                Paniek is niet nodig. Voordat je naar de reparateur rent, probeer deze 
                <strong className="text-[var(--text-primary)]">5 oplossingen</strong>. 
                Ze lossen 70% van de startproblemen op — zonder kosten.
              </p>
            </div>

            {/* Warning Box */}
            <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Belangrijk</h3>
                  <p className="text-[var(--text-secondary)]">
                    Heb je recent <strong>vloeistof gemorst</strong> op je laptop? 
                    Doe dan <strong>NIET</strong> proberen op te starten. 
                    Neem direct contact op met een reparateur voor waterschade behandeling.
                  </p>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-8 mb-12">
              {solutions.map((solution) => (
                <div key={solution.step} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                          {solution.step}
                        </span>
                        <h2 className="text-xl font-bold text-[var(--text-primary)]">
                          {solution.title}
                        </h2>
                      </div>
                      <p className="text-[var(--text-secondary)]">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* When to Call Pro */}
            <div className="p-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Wanneer naar de reparateur?
              </h2>
              
              <p className="text-[var(--text-secondary)] mb-4">
                Geen van de oplossingen geholpen? Dan is er mogelijk sprake van:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">Defect moederbord</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">Kapotte voedingscircuit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">Beschadigde schermkabel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">Harde schijf defect</span>
                </li>
              </ul>

              <div className="p-4 bg-primary/10 rounded-xl">
                <p className="text-[var(--text-primary)] font-medium mb-4">
                  Wij repareren laptops in Utrecht. Vaak binnen 24 uur.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Afspraak maken
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
            </div>

            {/* Related Posts */}
            <div className="border-t border-[var(--border)] pt-12">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                Gerelateerde artikelen
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/blog/macbook-waterschade-wat-te-doen"
                  className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">Reparaties</span>
                  <h4 className="font-semibold text-[var(--text-primary)] mt-2">
                    MacBook Waterschade? Dit Moet je NU Doen
                  </h4>
                </Link>
                
                <Link 
                  href="/blog/wat-kost-een-website-laten-maken"
                  className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">Websites</span>
                  <h4 className="font-semibold text-[var(--text-primary)] mt-2">
                    Wat Kost een Website Laten Maken?
                  </h4>
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
