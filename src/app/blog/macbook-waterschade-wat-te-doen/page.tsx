import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, AlertTriangle, Droplets, Power, Wind, Ban, Clock as ClockIcon, MapPin, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "MacBook Waterschade? Dit Moet je NU Doen [Stap-voor-Stap] | TechSolutionsUtrecht",
  description: "MacBook nat geworden? Snelheid is essentieel. Volg deze stappen om schade te beperken. Reparatie in Utrecht nodig? Bel of WhatsApp!",
  keywords: ["macbook waterschade", "laptop waterschade", "mac nat geworden", "macbook reparatie utrecht", "waterschade laptop"],
};

const steps = [
  {
    step: 1,
    icon: Power,
    title: "DIRECT Uitschakelen",
    description: "Zet de MacBook ONMIDDELLIJK uit. Houd de power-knop ingedrukt tot het scherm zwart wordt. Elke seconde telt — stroom + water = corrosie.",
    critical: true,
  },
  {
    step: 2,
    icon: Droplets,
    title: "Stroom Loskoppelen",
    description: "Haal de oplader eruit. Als je MacBook in een docking station zit, haal hem eruit. Zorg dat er geen stroom meer door het apparaat loopt.",
    critical: true,
  },
  {
    step: 3,
    icon: Wind,
    title: "Drainen (NIET Schudden!)",
    description: "Open het scherm en zet de MacBook op zijn kant (als een tent) met het toetsenbord naar beneden. Laat water eruit lopen. Schudden duwt water juist dieper naar binnen!",
    critical: false,
  },
  {
    step: 4,
    icon: Wind,
    title: "Drogen (Wat Werkt, Wat Niet)",
    description: "Gebruik een ventilator op koele stand. Laat de MacBook 48-72 uur drogen. NIET gebruiken: haardroger (te heet), rijst (werkt niet), direct zonlicht (schade aan scherm).",
    critical: false,
  },
  {
    step: 5,
    icon: Ban,
    title: "NIET Aanzetten",
    description: "De grootste fout: na een dag drogen proberen op te starten. Corrosie is al begonnen. Ook als het lijkt te werken, breng hem naar een specialist voor cleaning.",
    critical: true,
  },
  {
    step: 6,
    icon: MapPin,
    title: "Naar Specialist Brengen",
    description: "Na 48-72 uur (of direct als je hem snel nodig hebt), breng je MacBook naar een Apple specialist. Wij openen de MacBook, reinigen corrosie, en vervangen beschadigde onderdelen.",
    critical: false,
  },
];

export default function MacBookWaterschadePage() {
  return (
    <>
      <main className="pb-24">
        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><Link href="/blog" className="text-[var(--text-muted)] hover:text-primary transition-colors">Blog</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><span className="text-[var(--text-primary)] font-medium">Artikel</span></li>
            </ol>
          </div>
        </nav>

        <div className="container-custom pt-8">
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
            <span className="inline-block px-4 py-1 bg-red-500/10 text-red-500 rounded-full text-sm font-medium mb-4">
              Reparaties
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
              MacBook Waterschade?{" "}
              <span className="gradient-text">Dit Moet je NU Doen</span>
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-[var(--text-muted)] mb-12 pb-12 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>TechSolutionsUtrecht</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>24 februari 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min leestijd</span>
              </div>
            </div>

            {/* Emergency Alert */}
            <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    ⚠️ Tijd is Cruciaal!
                  </h2>
                  <p className="text-[var(--text-secondary)]">
                    Elke seconde telt bij waterschade. Corrosie begint binnen 
                    <strong className="text-red-400">en uur</strong>. 
                    Volg deze stappen <strong className="text-[var(--text-primary)]">NU</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                Koffie gemorst? In de regen laten liggen? MacBook in het water laten vallen? 
                Paniek is normaal, maar <strong className="text-[var(--text-primary)]">snel handelen</strong>{" "}
                kan het verschil maken tussen een werkende MacBook en een dure papiergewicht.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6 mb-12">
              {steps.map((step) => (
                <div 
                  key={step.step} 
                  className={`bg-[var(--bg-card)] border rounded-2xl p-6 md:p-8 ${
                    step.critical ? 'border-red-500/30' : 'border-[var(--border)]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      step.critical ? 'bg-red-500/10' : 'bg-primary/10'
                    }`}
                    >
                      <step.icon className={`w-6 h-6 ${
                        step.critical ? 'text-red-500' : 'text-primary'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          step.critical ? 'bg-red-500 text-white' : 'bg-primary text-white'
                        }`}
                        >
                          {step.step}
                        </span>
                        <h2 className="text-xl font-bold text-[var(--text-primary)]">
                          {step.title}
                        </h2>
                        {step.critical && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                            CRITICAL
                          </span>
                        )}
                      </div>
                      <p className="text-[var(--text-secondary)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cost Section */}
            <div className="p-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                Wat Kost Waterschade Reparatie?
              </h2>
              
              <p className="text-[var(--text-secondary)] mb-6">
                De kosten hangen af van de ernst:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-[var(--bg-tertiary)] rounded-xl">
                  <div className="text-lg font-bold text-[var(--text-primary)] mb-2">Licht</div>
                  <div className="text-2xl font-bold text-primary mb-2">€99-149</div>
                  <div className="text-sm text-[var(--text-muted)]">Cleaning + inspectie</div>
                </div>
                
                <div className="p-4 bg-[var(--bg-tertiary)] rounded-xl">
                  <div className="text-lg font-bold text-[var(--text-primary)] mb-2">Gemiddeld</div>
                  <div className="text-2xl font-bold text-primary mb-2">€150-299</div>
                  <div className="text-sm text-[var(--text-muted)]">+ Onderdelen vervangen</div>
                </div>
                
                <div className="p-4 bg-[var(--bg-tertiary)] rounded-xl">
                  <div className="text-lg font-bold text-[var(--text-primary)] mb-2">Ernstig</div>
                  <div className="text-2xl font-bold text-primary mb-2">€300+</div>
                  <div className="text-sm text-[var(--text-muted)]">Moederbord schade</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-xl">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Goed nieuws:</strong>{" "}
                  Met snelle actie is 70% van MacBooks met waterschade te redden. 
                  Wacht niet te lang!
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl mb-12">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                MacBook Nat Geworden? Wij Helpen in Utrecht
              </h3>
              
              <p className="text-[var(--text-secondary)] mb-6">
                Specialist in Apple reparaties. Snelle diagnose. Originele onderdelen. 
                6 maanden garantie.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Direct Afspraak
                </Link>
                <a 
                  href="https://wa.me/31625518708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  WhatsApp Nu
                </a>
              </div>
            </div>

            {/* Related Posts */}
            <div className="border-t border-[var(--border)] pt-12">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                Gerelateerde artikelen
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/blog/laptop-start-niet-op-5-oplossingen"
                  className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">Reparaties</span>
                  <h4 className="font-semibold text-[var(--text-primary)] mt-2">
                    Laptop Start Niet Op? 5 Oplossingen
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
