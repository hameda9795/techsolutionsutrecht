import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { User, Check, ArrowRight, Euro, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "ZZP Website Laten Maken Goedkoop | Vanaf €250 | Utrecht | TechSolutionsUtrecht",
  description: "ZZP website laten maken goedkoop? Vanaf €250 een professionele website. Binnen 1 week online. Perfect voor startende ondernemers en ZZP'ers in Utrecht.",
  keywords: ["zzp website laten maken goedkoop", "website zzp starter", "zzp website utrecht", "goedkope website zzp", "startende ondernemer website"],
};

const features = [
  "Professioneel design",
  "Mobiel-vriendelijk",
  "SEO-geoptimaliseerd",
  "CMS om zelf te beheren",
  "Contactformulier",
  "Google Maps integratie",
];

const benefits = [
  {
    icon: Euro,
    title: "Scherpe Prijs",
    description: "Vanaf €250 all-in. Geen verborgen kosten. Betaalbaar voor elke ZZP'er."
  },
  {
    icon: Clock,
    title: "Snel Online",
    description: "Binnen 1 week uw website live. Soms zelfs sneller bij spoed."
  },
  {
    icon: Star,
    title: "Professionaliteit",
    description: "Een professionele uitstraling die klanten aantrekt. Geen 'goedkoop' gevoel."
  },
];

export default function ZZPWebsitePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>ZZP Website</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                ZZP Website{" "}
                <span className="gradient-text">Laten Maken Goedkoop</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                <strong className="text-[var(--text-primary)]">ZZP website laten maken goedkoop?</strong> 
                Vanaf <strong className="text-primary">€250</strong> een professionele website die uw 
                bedrijf serieus neemt. Binnen <strong className="text-primary">1 week</strong> online. 
                Perfect voor <strong className="text-[var(--text-primary)]">startende ondernemers</strong> en ZZP'ers in Utrecht.
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
                <div className="text-3xl font-bold text-primary">Vanaf €250</div>
                <div className="text-[var(--text-muted)]">Binnen 1 week online</div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary group">
                  Direct starten
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <User className="w-24 h-24 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">ZZP Website</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">€250</div>
                  <div className="text-[var(--text-muted)] mt-1">All-in prijs</div>
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

          {/* Why ZZP */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Waarom Kiezen voor een Goedkope ZZP Website?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-[var(--text-secondary)]">
              <div>
                <p className="mb-4">
                  Als <strong className="text-[var(--text-primary)]">startende ondernemer</strong> of ZZP'er 
                  heeft u vaak een beperkt budget. Een dure website van €2.000+ is dan niet haalbaar. 
                  Toch heeft u een professionele online presentatie nodig om klanten te winnen.
                </p>
                <p>
                  Daarom bieden wij <strong className="text-primary">goedkope websites voor ZZP'ers</strong>. 
                  Vanaf €250 heeft u een complete website die er professioneel uitziet en goed werkt. 
                  Geen watermerken, geen beperkingen — gewoon een goede website.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-3">Wat krijgt u?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Een uniek design (geen templates)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mobiel-vriendelijk (responsive)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>SEO-vriendelijk voor Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Contactformulier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>CMS om zelf te beheren</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
