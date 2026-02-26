import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Wrench, Check, ArrowRight, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Goedkoop Website Onderhoud Utrecht | Vanaf €50/maand | TechSolutionsUtrecht",
  description: "Voordelig website onderhoud vanaf €50/maand. Updates, beveiliging, backups. Betaalbaar en professioneel in Utrecht. Gratis consultatie!",
  keywords: ["goedkoop website onderhoud", "voordelig website beheer", "betaalbare website onderhoud", "lage prijs onderhoud"],
};

const features = [
  {
    icon: Shield,
    title: "Beveiliging",
    description: "Reguliere security scans, malware verwijdering, en bescherming tegen hacks."
  },
  {
    icon: Clock,
    title: "Updates",
    description: "WordPress core, plugins en themes worden up-to-date gehouden."
  },
  {
    icon: Wrench,
    title: "Backups",
    description: "Dagelijkse backups naar veilige cloud opslag. Snel herstel mogelijk."
  },
];

const packages = [
  {
    name: "Basic",
    price: "€50",
    period: "/maand",
    features: [
      "Wekelijkse backups",
      "Maandelijkse updates",
      "Security monitoring",
      "E-mail support",
      "99.9% uptime garantie"
    ],
    recommended: false
  },
  {
    name: "Pro",
    price: "€100",
    period: "/maand",
    features: [
      "Dagelijkse backups",
      "Wekelijkse updates",
      "Advanced security",
      "Performance optimalisatie",
      "Priority support",
      "Maandelijks rapport"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "€150",
    period: "/maand",
    features: [
      "Real-time backups",
      "Directe updates",
      "Premium security suite",
      "CDN integratie",
      "24/7 support",
      "Custom development",
      "Dedicated account manager"
    ],
    recommended: false
  },
];

export default function WebsiteOnderhoudPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:text-primary">Diensten</Link>
            <span className="mx-2">/</span>
            <span>Onderhoud</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Goedkoop Website{" "}
                <span className="gradient-text">Onderhoud</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                <strong className="text-[var(--text-primary)]">Voordelig website onderhoud</strong> vanaf slechts 
                <strong className="text-primary">€50 per maand</strong>. 
                Updates, beveiliging, backups — wij zorgen dat je site veilig en snel blijft, 
                zonder hoge kosten.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">{feature.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Gratis consultatie
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Wrench className="w-32 h-32 text-green-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">Onderhoud</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €50/maand</div>
                  <div className="text-[var(--text-muted)] mt-1">Scherpe prijs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Packages */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                Voordelige{" "}<span className="gradient-text">Onderhouds Pakketten</span>
              </h2>
              <p className="text-[var(--text-secondary)]">
                Kies het pakket dat bij jou past. Alle pakketten zijn maandelijks opzegbaar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div 
                  key={pkg.name}
                  className={`relative p-6 rounded-2xl border ${
                    pkg.recommended 
                      ? 'bg-[var(--bg-card)] border-primary' 
                      : 'bg-[var(--bg-secondary)] border-[var(--border)]'
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm rounded-full">
                      Aanbevolen
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{pkg.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-[var(--text-muted)]">{pkg.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                      pkg.recommended
                        ? 'btn-primary'
                        : 'bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-primary hover:text-white'
                    }`}
                  >
                    Kies {pkg.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
