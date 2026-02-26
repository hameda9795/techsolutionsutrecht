import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Zap, Check, ArrowRight, Clock, Rocket, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Laten Maken Binnen 1 Week | Express Service | TechSolutionsUtrecht",
  description: "Website laten maken binnen 1 week? Express service mogelijk. Snelle oplevering 3-10 dagen. WordPress website goedkoop en snel in Utrecht.",
  keywords: ["website laten maken binnen week", "snelle website laten maken", "express website", "website binnen 1 week online", "snelle oplevering website"],
};

const timeline = [
  {
    day: "Dag 1",
    title: "Kennismaking",
    description: "We bespreken uw wensen, doelgroep en gewenste uitstraling."
  },
  {
    day: "Dag 2-3",
    title: "Design",
    description: "We maken een eerste ontwerp gebaseerd op uw huisstijl."
  },
  {
    day: "Dag 4-5",
    title: "Ontwikkeling",
    description: "We bouwen de website in WordPress met alle functionaliteit."
  },
  {
    day: "Dag 6-7",
    title: "Content & Test",
    description: "We plaatsen content en testen alles grondig."
  },
  {
    day: "Dag 7-10",
    title: "Livegang",
    description: "Na uw goedkeuring gaat de website live!"
  },
];

const features = [
  "WordPress CMS",
  "Responsive design",
  "SEO-optimaal",
  "Contactformulier",
  "Snelle laadtijd",
  "Gratis support",
];

export default function WebsiteBinnenWeekPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>Binnen 1 Week</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Website{" "}<span className="gradient-text">Binnen 1 Week</span>
              <br />
              <span className="text-2xl sm:text-3xl text-[var(--text-secondary)]">Laten Maken</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8">
              <strong className="text-[var(--text-primary)]">Website laten maken binnen 1 week?</strong> 
              Bij ons kan het! <strong className="text-primary">Snelle oplevering</strong> binnen 
              3-10 dagen. Soms zelfs sneller. Express service beschikbaar. 
              Geen lange wachtlijsten, direct aan de slag.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary group">
                Start direct
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href="https://wa.me/31625518708"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                WhatsApp voor spoed
              </a>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-12">
              Hoe Wij Uw Website{" "}<span className="gradient-text">Binnen 1 Week</span>{" "}
              Opleveren
            </h2>

            <div className="grid md:grid-cols-5 gap-4">
              {timeline.map((item, index) => (
                <div key={item.day} className="relative">
                  <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl h-full">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="text-primary font-semibold mb-2">{item.day}</div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                Wat Krijgt U Bij Onze{" "}<span className="gradient-text">Snelle Service?</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-[var(--text-primary)]">Onze Belofte</span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  We leveren altijd op tijd. Als we een deadline afspreken, houden we ons daaraan. 
                  Geen excuses, geen vertragingen. Uw website gaat live wanneer afgesproken.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">Snelle Oplevering</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">3-10 Dagen</div>
                  <div className="text-[var(--text-muted)] mt-1">Soms zelfs 1 week</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
              Klaar om Uw Website{" "}<span className="gradient-text">Snel Online</span>{" "}
              te Hebben?
            </h2>
            
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Neem vandaag nog contact op. We bespreken uw wensen en kunnen vaak 
              binnen enkele dagen al starten. Snelle oplevering gegarandeerd.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Vraag snelle offerte aan
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
