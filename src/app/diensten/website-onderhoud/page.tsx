import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Wrench, Check, ArrowRight, Shield, Clock } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/website-onderhoud";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "Website Onderhoud", url: pageUrl },
]);

const service = serviceSchema({
  name: "Website onderhoud Utrecht",
  description:
    "Zorgeloos WordPress website onderhoud in Utrecht: updates, beveiliging, dagelijkse backups en snelle support. Vanaf €50 per maand, maandelijks opzegbaar.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Waarom is website onderhoud belangrijk?",
    answer:
      "Een website is nooit 'af'. WordPress, plugins en themes krijgen voortdurend updates die beveiligingslekken dichten en de site snel houden. Zonder onderhoud loop je risico op hacks, witte schermen na een mislukte update en dataverlies. Met een onderhoudsabonnement blijft je site veilig, snel en up-to-date zonder dat jij ernaar om hoeft te kijken.",
  },
  {
    question: "Wat kost website onderhoud?",
    answer:
      "Onderhoud start vanaf €50 per maand voor het Basic-pakket en is maandelijks opzegbaar. Het Pro-pakket (€100) voegt dagelijkse backups, performance-optimalisatie en priority support toe. Voor zwaardere sites is er een Enterprise-pakket. Je kiest het niveau dat bij jouw website past.",
  },
  {
    question: "Maken jullie backups van mijn website?",
    answer:
      "Ja. Afhankelijk van je pakket maak ik wekelijkse, dagelijkse of real-time backups naar veilige cloudopslag. Gaat er iets mis, dan zet ik je website snel terug naar een werkende versie.",
  },
  {
    question: "Werkt onderhoud ook als jullie mijn site niet hebben gebouwd?",
    answer:
      "Meestal wel. Ik neem bestaande WordPress-websites graag in onderhoud. Ik doe eerst een korte controle van de staat van je site en bespreek daarna welk pakket het beste past.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "Website Onderhoud Utrecht | Updates, Beveiliging & Backups | TechSolutions",
  description: "Zorgeloos website onderhoud in Utrecht: updates, beveiliging, dagelijkse backups en snelle support. Houd je WordPress-website veilig en up-to-date.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/diensten/website-onderhoud" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><Link href="/diensten" className="text-[var(--text-muted)] hover:text-primary transition-colors">Diensten</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><span className="text-[var(--text-primary)] font-medium capitalize">website-onderhoud</span></li>
            </ol>
          </div>
        </nav>

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
                Website{" "}
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

          {/* Intro */}
          <section className="mb-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
              Waarom doorlopend onderhoud loont
            </h2>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              Een website is geen eenmalig product maar levende software. WordPress, plugins en themes krijgen
              regelmatig updates die beveiligingslekken dichten en je site snel en stabiel houden. Sla je die over,
              dan groeit het risico op hacks, een trage website of een wit scherm na een mislukte update.
            </p>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              Met een onderhoudsabonnement neem ik dat werk uit handen. Ik houd je website up-to-date, maak
              regelmatig backups, bewaak de beveiliging en grijp in als er iets misgaat, zodat jij je kunt richten
              op je bedrijf in plaats van op je website.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Je hebt direct contact met de developer die je site beheert, en alle pakketten zijn maandelijks
              opzegbaar. Geen lange contracten, gewoon een veilige en snelle website.
            </p>
          </section>

          {/* Packages */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                Onderhouds<span className="gradient-text">pakketten</span>
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

          {/* FAQ */}
          <section className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10">Veelgestelde vragen over website onderhoud</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
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
