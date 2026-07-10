import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code, Check, ArrowRight, Zap, Clock, Database, Plug, LayoutDashboard, Phone } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/maatwerk";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "Maatwerk Webapplicaties", url: pageUrl },
]);

const service = serviceSchema({
  name: "Maatwerk webapplicatie laten maken Utrecht",
  description:
    "Maatwerk webapplicaties, dashboards en portals laten bouwen in Utrecht met React, Next.js en Node.js. Schaalbaar, snel en op maat van jouw bedrijfsproces. Direct contact met de developer.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Wat is een maatwerk webapplicatie precies?",
    answer:
      "Een maatwerk webapplicatie is software die volledig op jouw bedrijfsproces is afgestemd, in plaats van een standaardoplossing. Denk aan een klantenportaal, reserveringssysteem, dashboard, planningstool of een interne applicatie die taken automatiseert. Alles wordt gebouwd rond hoe jij werkt, niet andersom.",
  },
  {
    question: "Wat kost een maatwerk webapplicatie?",
    answer:
      "Maatwerk start bij TechSolutionsUtrecht rond €400 en loopt op tot €2.000 of meer, afhankelijk van de complexiteit, het aantal functies en de benodigde koppelingen. Omdat elk project anders is, begin ik altijd met een gratis gesprek en een heldere offerte, zodat je vooraf precies weet waar je aan toe bent.",
  },
  {
    question: "Welke technologie gebruik je voor maatwerk?",
    answer:
      "Ik bouw met moderne, bewezen technologie: React en Next.js voor de frontend, Node.js voor de backend, en een passende database. Deze stack is snel, veilig en schaalbaar, en wordt door grote bedrijven wereldwijd gebruikt. Daardoor groeit je applicatie probleemloos mee als je bedrijf groeit.",
  },
  {
    question: "Kan een webapplicatie koppelen met andere systemen?",
    answer:
      "Ja. Ik koppel je applicatie aan externe systemen en API's, zoals betaalproviders, boekhoudpakketten, CRM's, e-mailmarketing of verzendpartijen. Zo wisselen je tools automatisch gegevens uit en bespaar je veel handmatig werk.",
  },
  {
    question: "Hoe lang duurt het bouwen van maatwerk?",
    answer:
      "Een afgebakend maatwerkproject lever ik vaak binnen 5 tot 12 werkdagen op. Grotere applicaties met meer functies pakken we gefaseerd aan, zodat je snel een werkende eerste versie hebt en we daarna stap voor stap uitbreiden.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "Maatwerk Webapplicatie Laten Maken Utrecht | React & Next.js",
  description:
    "Maatwerk webapplicaties, dashboards en portals laten bouwen in Utrecht met React, Next.js en Node.js. Schaalbaar en op maat. Direct contact met de developer.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Maatwerk Webapplicatie Laten Maken Utrecht | React & Next.js",
    description:
      "Maatwerk webapplicaties, dashboards en portals laten bouwen in Utrecht met React, Next.js en Node.js. Schaalbaar en op maat.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const features = [
  "Next.js & React",
  "Node.js backend",
  "Database architectuur",
  "API integraties",
  "Real-time features",
  "Schaalbare hosting",
];

const pillars = [
  {
    icon: LayoutDashboard,
    title: "Dashboards & portals",
    text: "Klantportalen, beheerdashboards en interne tools die jouw processen overzichtelijk maken. Gebruiksvriendelijk ontworpen, zodat je team er meteen mee aan de slag kan.",
  },
  {
    icon: Database,
    title: "Solide architectuur",
    text: "Een doordachte database- en applicatiestructuur als fundament, gebouwd voor betrouwbaarheid en groei. Je applicatie blijft snel en stabiel, ook als het aantal gebruikers toeneemt.",
  },
  {
    icon: Plug,
    title: "Koppelingen & automatisering",
    text: "Integraties met betaalproviders, boekhoudpakketten, CRM's en andere API's. Repeterende taken automatiseer ik, zodat jij tijd overhoudt voor je klanten.",
  },
  {
    icon: Zap,
    title: "Modern en schaalbaar",
    text: "Gebouwd met React, Next.js en Node.js: dezelfde technologie als grote techbedrijven. Snel, veilig en klaar om mee te groeien met je ambities.",
  },
];

export default function MaatwerkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-[var(--color-muted)] hover:text-primary transition-colors">Home</Link></li>
            <li className="text-[var(--color-muted)]">/</li>
            <li><Link href="/diensten" className="text-[var(--color-muted)] hover:text-primary transition-colors">Diensten</Link></li>
            <li className="text-[var(--color-muted)]">/</li>
            <li><span className="text-[var(--color-ink)] font-medium capitalize">maatwerk</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                Maatwerk Webapplicatie Laten Maken in{" "}
                <span className="text-[var(--color-primary)]">Utrecht</span>
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">5-12 dagen oplevering</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[var(--color-primary)]/10 rounded-full">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="text-sm text-[var(--color-primary)] font-medium">Scherpe prijs</span>
                </div>
              </div>

              <p className="text-lg text-[var(--color-muted)] mb-8">
                <strong className="text-[var(--color-ink)]">Een maatwerk webapplicatie</strong> laten bouwen?
                Ik bouw custom webapplicaties, dashboards en portals met moderne technologie zoals React en Next.js —
                scherp geprijsd, schaalbaar en met <strong className="text-primary">direct contact met de developer</strong>.
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

              <Link href="/contact" className="btn-primary group inline-flex">
                Bespreek je project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-24 h-24 text-[var(--color-primary)] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--color-ink)]">Maatwerk</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €400</div>
                  <div className="text-[var(--color-muted)] mt-1">5-12 dagen</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <section className="mt-24 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">
              Wanneer kies je voor maatwerk?
            </h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Standaardsoftware en kant-en-klare templates brengen je een eind, maar soms lopen ze vast op precies
              dat ene proces dat jouw bedrijf uniek maakt. Op dat moment is een maatwerk webapplicatie de oplossing:
              software die exact doet wat jij nodig hebt, zonder onnodige functies en zonder de beperkingen van een
              gesloten systeem.
            </p>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Denk aan een klantenportaal waar je klanten hun gegevens en bestellingen beheren, een planningstool voor
              je team, een reserveringssysteem, of een dashboard dat data uit verschillende bronnen samenbrengt.
              Maatwerk bespaart tijd, voorkomt fouten en geeft je een voorsprong op concurrenten die met algemene
              tools blijven werken.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Ik bouw je applicatie met moderne, schaalbare technologie en je werkt rechtstreeks met de developer.
              Geen tussenlagen, gewoon heldere afspraken en software die meegroeit met je bedrijf.
            </p>
          </section>

          {/* Pillars */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Wat ik voor je bouw</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((p) => (
                <div key={p.title} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{p.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Proces */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">Zo pakken we je project aan</h2>
            <ul className="space-y-4">
              {[
                "Analyse: we brengen samen je proces en wensen in kaart en bepalen welke functies écht waarde toevoegen.",
                "Offerte en plan: je ontvangt een heldere offerte en een gefaseerd plan, zodat je snel een werkende eerste versie hebt.",
                "Bouw: ik ontwikkel de applicatie met React, Next.js en Node.js, met tussentijdse opleveringen om feedback te verwerken.",
                "Lancering en doorontwikkeling: na livegang blijven we de applicatie verbeteren en uitbreiden waar nodig.",
              ].map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-[var(--color-muted)] leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Interne links */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Bekijk ook</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/diensten/wordpress" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">WordPress website</h3>
                <p className="text-[var(--color-muted)] text-sm">Een professionele website die je zelf beheert.</p>
              </Link>
              <Link href="/diensten/webshop" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Webshop laten maken</h3>
                <p className="text-[var(--color-muted)] text-sm">Een complete WooCommerce-webshop, klaar om te verkopen.</p>
              </Link>
              <Link href="/portfolio" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Portfolio</h3>
                <p className="text-[var(--color-muted)] text-sm">Bekijk eerder gebouwde projecten en applicaties.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen over maatwerk</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 text-center bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Een idee voor maatwerk?</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Bespreek vrijblijvend je project. Je krijgt binnen één werkdag een eerlijke inschatting, direct van de
              developer die je applicatie bouwt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Bespreek je project
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
