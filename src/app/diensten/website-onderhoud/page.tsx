import { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  ClipboardList,
  DatabaseBackup,
  LifeBuoy,
  Phone,
  RefreshCw,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Footer from "@/components/Footer";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const pageUrl =
  "https://techsolutionsutrecht.nl/diensten/website-onderhoud";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "Website onderhoud", url: pageUrl },
]);

const service = {
  ...serviceSchema({
    name: "Website onderhoud Utrecht",
    description:
      "Websiteonderhoud vanaf €29 per maand voor technische updates, regelmatige back-ups, beveiligings- en uptimecontrole en technische ondersteuning.",
    url: pageUrl,
  }),
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "EUR",
    description:
      "Vanaf €29 per maand. De exacte prijs hangt af van de website en het gewenste onderhoud.",
  },
};

const faqs = [
  {
    question: "Waarom is websiteonderhoud belangrijk?",
    answer:
      "Updates, verouderde software, beveiligingsproblemen of mislukte back-ups kunnen onderdelen van een website verstoren. Periodiek onderhoud helpt om aandachtspunten eerder te ontdekken en de website betrouwbaarder te houden.",
  },
  {
    question: "Wat kost websiteonderhoud?",
    answer:
      "Websiteonderhoud start vanaf €29 per maand. De exacte prijs hangt af van de techniek, omvang en huidige staat van de website en van de gewenste controles, back-ups en ondersteuning.",
  },
  {
    question: "Hoe vaak worden back-ups gemaakt?",
    answer:
      "De back-upfrequentie wordt afgestemd op je website en vooraf vastgelegd in het onderhoudsvoorstel. We controleren ook of de afgesproken back-ups correct worden uitgevoerd.",
  },
  {
    question: "Onderhouden jullie ook websites die jullie niet hebben gebouwd?",
    answer:
      "Dat is soms mogelijk. Voor andere websites voeren we eerst een technische controle uit om te bepalen of we het onderhoud verantwoord kunnen overnemen.",
  },
  {
    question: "Wat valt niet onder het onderhoud?",
    answer:
      "Nieuwe pagina’s, grote inhoudelijke wijzigingen, redesigns en maatwerkontwikkeling vallen niet standaard onder onderhoud. Extra werkzaamheden bespreken we altijd vooraf.",
  },
  {
    question: "Wat gebeurt er als mijn website een technisch probleem heeft?",
    answer:
      "We onderzoeken het probleem en helpen wanneer dit binnen de afgesproken onderhoudswerkzaamheden valt. Werk buiten de scope of problemen bij externe diensten worden eerst besproken.",
  },
  {
    question: "Kan ik het onderhoud stopzetten?",
    answer:
      "De looptijd en opzegvoorwaarden worden vooraf duidelijk in het onderhoudsvoorstel vastgelegd.",
  },
];

export const metadata: Metadata = {
  title: "Websiteonderhoud zonder zorgen | Vanaf €29 per maand",
  description:
    "Websiteonderhoud in Utrecht vanaf €29 per maand voor technische updates, back-ups en controles. Eerst beoordelen we de techniek en huidige staat van je website.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Websiteonderhoud zonder zorgen | TechSolutionsUtrecht",
    description:
      "Technisch websiteonderhoud vanaf €29 per maand met updates, back-ups en controles, afgestemd op je website.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const heroFeatures = [
  "Technische updates en controles",
  "Regelmatige back-ups",
  "Beveiligings- en uptimecontrole",
  "Hulp bij technische problemen",
];

const includedServices = [
  {
    icon: RefreshCw,
    title: "Technische updates",
    text: "Updates van het CMS, plugins, thema’s of andere onderdelen wanneer dit veilig en technisch mogelijk is.",
  },
  {
    icon: DatabaseBackup,
    title: "Regelmatige back-ups",
    text: "Back-ups volgens de afgesproken frequentie en controle of deze correct worden uitgevoerd.",
  },
  {
    icon: ShieldCheck,
    title: "Beveiligingscontrole",
    text: "Controle op opvallende beveiligingsproblemen, verdachte wijzigingen en verouderde onderdelen.",
  },
  {
    icon: Activity,
    title: "Uptimecontrole",
    text: "Monitoring om sneller te signaleren wanneer de website niet bereikbaar is.",
  },
  {
    icon: LifeBuoy,
    title: "Technische ondersteuning",
    text: "Hulp bij technische problemen die binnen de afgesproken onderhoudswerkzaamheden vallen.",
  },
  {
    icon: ClipboardList,
    title: "Onderhoudsrapportage",
    text: "Een duidelijk overzicht van uitgevoerde controles, updates en aandachtspunten.",
  },
];

const excludedServices = [
  "Nieuwe pagina’s of functionaliteiten",
  "Volledig redesign",
  "Grote inhoudelijke wijzigingen",
  "Nieuwe functies en grote inhoudelijke wijzigingen",
  "Problemen veroorzaakt door externe diensten of hostingpartijen",
  "Herstel van bestaande ernstige problemen vóór de start van het abonnement",
];

const priceFactors = [
  "Type website en gebruikte techniek",
  "Aantal plugins, koppelingen of maatwerkonderdelen",
  "Gewenste back-upfrequentie",
  "Benodigde monitoring en ondersteuning",
  "Huidige technische staat van de website",
];

const processSteps = [
  {
    title: "Technische controle",
    text: "We bekijken de huidige staat, techniek, updates en mogelijke problemen.",
  },
  {
    title: "Onderhoudsvoorstel",
    text: "Je ontvangt een duidelijk voorstel met werkzaamheden, prijs en afspraken.",
  },
  {
    title: "Back-up en inrichting",
    text: "We maken of controleren eerst een back-up en richten de afgesproken controles in.",
  },
  {
    title: "Periodiek onderhoud",
    text: "We voeren het onderhoud uit en houden je op de hoogte van belangrijke aandachtspunten.",
  },
];

export default function WebsiteOnderhoudPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />

      <nav className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-4">
        <div className="container-custom">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-[var(--color-muted)] transition-colors hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li className="text-[var(--color-muted)]">/</li>
            <li>
              <Link
                href="/diensten"
                className="text-[var(--color-muted)] transition-colors hover:text-primary"
              >
                Diensten
              </Link>
            </li>
            <li className="text-[var(--color-muted)]">/</li>
            <li>
              <span className="font-medium text-[var(--color-ink)]">
                Website onderhoud
              </span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="pb-24 pt-16 sm:pt-20">
        <div className="container-custom">
          <section className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.95fr)] lg:items-center xl:gap-14">
            <div className="min-w-0">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)]">
              <Wrench className="h-8 w-8 text-white" aria-hidden="true" />
            </div>

            <h1 className="mb-6 max-w-3xl text-balance text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
              Websiteonderhoud <span className="text-primary">zonder zorgen</span>
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
              Houd je website veilig, snel en betrouwbaar met technisch onderhoud
              vanaf €29 per maand. We verzorgen updates, back-ups en controles,
              zodat problemen sneller worden ontdekt en je website goed blijft
              werken.
            </p>

            <div className="mb-8 grid max-w-3xl gap-3 sm:grid-cols-2">
              {heroFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-[var(--color-muted)]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-8 max-w-2xl">
              <div className="text-3xl font-bold text-primary">
                Vanaf €29 per maand
              </div>
              <div className="mt-2 leading-relaxed text-[var(--color-muted)]">
                De exacte prijs hangt af van je website en het gewenste onderhoud.
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary group">
                Laat je website controleren
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#inbegrepen" className="btn-secondary">
                Bekijk wat inbegrepen is
              </Link>
            </div>
            </div>

            <ServiceHeroVisual
              src="/images/website-onderhoud-hero.webp"
              alt="Illustratie van websiteonderhoud met updates, beveiliging en back-ups"
            />
          </section>

          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
            <section className="max-w-3xl">
              <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Waarom is websiteonderhoud belangrijk?
              </h2>
              <div className="space-y-4 leading-relaxed text-[var(--color-muted)]">
                <p>
                  Een website heeft regelmatig technische aandacht nodig. Updates,
                  verouderde software, beveiligingsproblemen of mislukte back-ups
                  kunnen ervoor zorgen dat onderdelen niet meer goed werken. Met
                  periodiek onderhoud worden problemen eerder ontdekt en blijft je
                  website betrouwbaarder.
                </p>
                <p>
                  Onderhoud is mogelijk voor WordPress-websites en websites die door
                  ons zijn gebouwd. Voor andere websites voeren we eerst een
                  technische controle uit om te bepalen of we het onderhoud kunnen
                  overnemen.
                </p>
              </div>
            </section>

            <section id="inbegrepen" className="scroll-mt-28">
              <h2 className="mb-4 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat is inbegrepen?
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                De precieze frequentie en omvang van het onderhoud worden in het
                voorstel vastgelegd. Deze onderdelen vormen de basis.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {includedServices.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat valt niet standaard onder onderhoud?
              </h2>
              <ul className="grid gap-x-10 gap-y-4 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8 md:grid-cols-2">
                {excludedServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed text-[var(--color-ink)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                Extra werkzaamheden worden altijd vooraf besproken en pas na akkoord
                uitgevoerd.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat kost websiteonderhoud?
              </h2>
              <div className="grid gap-8 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                <div>
                  <div className="text-3xl font-bold text-primary">
                    Vanaf €29 per maand
                  </div>
                  <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                    De exacte prijs hangt af van de techniek, omvang en huidige staat
                    van je website en van de gewenste frequentie van back-ups,
                    controles en ondersteuning.
                  </p>
                  <Link href="/contact" className="btn-primary mt-6">
                    Vraag een passend onderhoudsvoorstel aan
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-ink)]">
                    Waar hangt de prijs van af?
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {priceFactors.map((factor) => (
                      <li key={factor} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed text-[var(--color-ink)]">
                          {factor}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-8 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Zo starten we met het onderhoud
              </h2>
              <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="max-w-3xl">
              <h2 className="mb-10 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Veelgestelde vragen over websiteonderhoud
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-[var(--color-ink)]">
                      {faq.question}
                    </h3>
                    <p className="leading-relaxed text-[var(--color-muted)]">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8 text-center sm:p-10">
              <h2 className="mb-4 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Websiteonderhoud nodig?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[var(--color-muted)]">
                Laat je website eerst controleren. Daarna ontvang je een duidelijk
                voorstel dat past bij de techniek, omvang en huidige staat van je
                website.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/31625518708"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#128C7E]"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" /> WhatsApp direct
                </a>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Vraag onderhoud aan
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
