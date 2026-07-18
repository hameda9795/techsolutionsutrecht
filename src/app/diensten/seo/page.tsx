import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  FileText,
  Link2,
  MapPin,
  Phone,
  Search,
  TrendingUp,
} from "lucide-react";
import Footer from "@/components/Footer";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/seo";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "Hoger in Google met SEO", url: pageUrl },
]);

const service = {
  ...serviceSchema({
    name: "Hoger in Google met SEO",
    description:
      "Praktisch SEO-traject vanaf €200 per maand voor technische verbeteringen, optimalisatie van belangrijke pagina’s, lokale vindbaarheid en maandelijkse monitoring.",
    url: pageUrl,
  }),
  offers: {
    "@type": "Offer",
    price: "200",
    priceCurrency: "EUR",
    description:
      "Vanaf €200 per maand. De prijs hangt af van de website, concurrentie en gewenste werkzaamheden.",
  },
};

const faqs = [
  {
    question: "Wat kost SEO?",
    answer:
      "Een SEO-traject start vanaf €200 per maand. De uiteindelijke prijs hangt af van de omvang en technische staat van je website, de concurrentie en de afgesproken werkzaamheden.",
  },
  {
    question: "Hoe lang duurt het voordat SEO resultaat geeft?",
    answer:
      "SEO is een langetermijntraject. Technische verbeteringen kunnen snel zichtbaar zijn, maar groei in posities en bezoekers kost meestal meer tijd. De snelheid verschilt per website en markt.",
  },
  {
    question: "Kun je een eerste positie in Google garanderen?",
    answer:
      "Nee. Niemand kan een specifieke positie in Google garanderen. We werken transparant, meten de voortgang en laten iedere maand zien welke werkzaamheden zijn uitgevoerd.",
  },
  {
    question: "Wat gebeurt er iedere maand?",
    answer:
      "We controleren technische aandachtspunten, optimaliseren de afgesproken pagina’s, verbeteren waar nodig de sitestructuur en volgen vindbaarheid en verkeer. Je ontvangt een overzicht van het uitgevoerde werk en de vervolgstappen.",
  },
  {
    question: "Is SEO geschikt voor een klein bedrijf?",
    answer:
      "Ja, wanneer potentiële klanten online naar jouw diensten zoeken. We stemmen de prioriteiten en werkzaamheden af op je doelen, markt en beschikbare budget.",
  },
  {
    question: "Kan ik het SEO-traject stoppen?",
    answer:
      "De looptijd en opzegvoorwaarden worden vooraf duidelijk in het voorstel vastgelegd.",
  },
];

export const metadata: Metadata = {
  title: "Hoger in Google met SEO | SEO Specialist Utrecht",
  description:
    "Hoger in Google met praktische SEO van een SEO specialist in Utrecht. Technische SEO, pagina-optimalisatie en lokale vindbaarheid vanaf €200 per maand.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Hoger in Google met SEO | SEO Specialist Utrecht",
    description:
      "Praktisch SEO-traject voor technische SEO, belangrijke pagina’s en lokale vindbaarheid, met duidelijke maandelijkse rapportage.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const heroFeatures = [
  "Technische SEO-controle",
  "Zoekwoordenonderzoek",
  "Optimalisatie van belangrijke pagina’s",
  "Lokale SEO voor Utrecht en omgeving",
  "Monitoring en maandelijkse rapportage",
];

const approach = [
  {
    icon: Search,
    title: "Technische SEO",
    text: "We controleren indexering, snelheid, mobiele werking, metadata, sitemap, canonical en belangrijke technische problemen.",
  },
  {
    icon: FileText,
    title: "Content en zoekwoorden",
    text: "We onderzoeken wat echte klanten zoeken en optimaliseren de belangrijkste pagina’s op zoekintentie, inhoud en leesbaarheid.",
  },
  {
    icon: MapPin,
    title: "Lokale SEO",
    text: "We verbeteren lokale signalen, relevante regiopagina’s en, wanneer afgesproken, je Google Bedrijfsprofiel.",
  },
  {
    icon: Link2,
    title: "Interne links en structuur",
    text: "We versterken de sitestructuur, headings en interne links, zodat bezoekers en zoekmachines pagina’s beter begrijpen.",
  },
];

const monthlyWork = [
  "Controle van technische SEO-problemen",
  "Optimalisatie van afgesproken pagina’s",
  "Monitoring van vindbaarheid en verkeer",
  "Verbetering van interne links en paginastructuur",
  "Duidelijk overzicht van uitgevoerde werkzaamheden",
  "Maandelijkse rapportage met aandachtspunten en vervolgstappen",
];

const priceFactors = [
  "Omvang en technische staat van de website",
  "Concurrentie binnen de branche",
  "Aantal pagina’s en zoekgebieden",
  "Benodigde content en technische aanpassingen",
];

const processSteps = [
  {
    title: "Website-analyse",
    text: "We bekijken de techniek, belangrijkste pagina’s, huidige vindbaarheid en lokale uitgangspositie.",
  },
  {
    title: "Prioriteiten en voorstel",
    text: "Je ontvangt een helder voorstel met de belangrijkste verbeterpunten, scope en maandprijs.",
  },
  {
    title: "Optimalisatie en uitvoering",
    text: "We voeren de afgesproken technische, inhoudelijke en lokale verbeteringen stap voor stap uit.",
  },
  {
    title: "Monitoring en rapportage",
    text: "We volgen de ontwikkeling en delen maandelijks het uitgevoerde werk, aandachtspunten en vervolgstappen.",
  },
];

export default function SEOPage() {
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
              <span className="font-medium text-[var(--color-ink)]">SEO</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="pb-24 pt-16 sm:pt-20">
        <div className="container-custom">
          <section className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.95fr)] lg:items-center xl:gap-14">
            <div className="min-w-0">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)]">
              <TrendingUp className="h-8 w-8 text-white" aria-hidden="true" />
            </div>

            <h1 className="mb-6 max-w-3xl text-balance text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
              Hoger in Google met <span className="text-primary">SEO</span>
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
              Verbeter de vindbaarheid van je website met een praktisch SEO-traject.
              We optimaliseren de techniek, belangrijke pagina’s en lokale
              vindbaarheid en laten iedere maand duidelijk zien wat er is uitgevoerd.
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
                Vanaf €200 per maand
              </div>
              <div className="mt-2 leading-relaxed text-[var(--color-muted)]">
                Prijs afhankelijk van de website, concurrentie en gewenste
                werkzaamheden.
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary group">
                Vraag een SEO-voorstel aan
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#seo-aanpak" className="btn-secondary">
                Bekijk de aanpak
              </Link>
            </div>
            </div>

            <ServiceHeroVisual
              src="/images/hoger-in-google-hero.webp"
              alt="Illustratie van zoekmachineoptimalisatie, lokale vindbaarheid en groei"
            />
          </section>

          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
            <section className="max-w-3xl">
              <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Beter vindbaar voor de juiste klanten
              </h2>
              <div className="space-y-4 leading-relaxed text-[var(--color-muted)]">
                <p>
                  SEO gaat niet alleen om meer bezoekers, maar vooral om gevonden
                  worden door mensen die daadwerkelijk naar jouw diensten zoeken. We
                  verbeteren stap voor stap de technische basis, inhoud en lokale
                  vindbaarheid van je website.
                </p>
                <p>
                  Als SEO specialist in Utrecht combineren we technische kennis met
                  begrijpelijke optimalisaties. Je weet vooraf wat de prioriteiten
                  zijn en ziet iedere maand welke werkzaamheden zijn uitgevoerd.
                </p>
              </div>
            </section>

            <section id="seo-aanpak" className="scroll-mt-28">
              <h2 className="mb-4 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Mijn SEO-aanpak
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                We bepalen de prioriteiten op basis van je website, markt en doelen.
                Deze vier onderdelen vormen de basis van het traject.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {approach.map((item) => (
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
              <h2 className="mb-8 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat krijg je iedere maand?
              </h2>
              <ul className="grid gap-x-10 gap-y-4 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8 md:grid-cols-2">
                {monthlyWork.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" aria-hidden="true" />
                    </div>
                    <span className="leading-relaxed text-[var(--color-ink)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                De exacte werkzaamheden worden vooraf afgestemd op je website, doelen
                en beschikbare budget.
              </p>
            </section>

            <section>
              <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat kost SEO?
              </h2>
              <div className="grid gap-8 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                <div>
                  <div className="text-3xl font-bold text-primary">
                    Vanaf €200 per maand
                  </div>
                  <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                    Een praktisch SEO-traject voor technische verbeteringen,
                    optimalisatie van belangrijke pagina’s, lokale vindbaarheid en
                    maandelijkse monitoring.
                  </p>
                  <Link href="/contact" className="btn-primary mt-6">
                    Vraag een passend SEO-voorstel aan
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

            <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.65fr)] lg:items-start">
              <div className="max-w-3xl">
                <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                  Wanneer kun je resultaat verwachten?
                </h2>
                <div className="space-y-4 leading-relaxed text-[var(--color-muted)]">
                  <p>
                    SEO is een langetermijntraject. Kleine technische verbeteringen
                    kunnen snel zichtbaar zijn, maar groei in posities en bezoekers
                    kost meestal meer tijd. De snelheid hangt onder andere af van de
                    concurrentie, de huidige website en de hoeveelheid benodigde
                    verbeteringen.
                  </p>
                  <p>
                    We kunnen geen specifieke positie in Google garanderen. Wel werken
                    we transparant, meten we de voortgang en laten we zien welke
                    werkzaamheden zijn uitgevoerd.
                  </p>
                </div>
              </div>
              <aside className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-ink)]">
                  Transparante voortgang
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                  Je ziet wat er is aangepast, welke aandachtspunten er zijn en welke
                  vervolgstappen we adviseren.
                </p>
              </aside>
            </section>

            <section>
              <h2 className="mb-8 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Zo werken we
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

            <section>
              <h2 className="mb-4 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Verdiep je in mijn SEO-diensten
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                Lees meer over de twee gespecialiseerde SEO-diensten die momenteel
                beschikbaar zijn.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Link
                  href="/diensten/seo/teksten"
                  className="card-service block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    SEO Teksten Laten Schrijven
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    Webteksten en artikelen op basis van zoekwoordonderzoek en de
                    vragen van je doelgroep.
                  </p>
                </Link>
                <Link
                  href="/diensten/seo/lokale-seo"
                  className="card-service block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    Lokale SEO
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    Verbeter je lokale vindbaarheid voor klanten in Utrecht en de
                    regio’s waarop je bedrijf zich richt.
                  </p>
                </Link>
              </div>
            </section>

            <section className="max-w-3xl">
              <h2 className="mb-10 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Veelgestelde vragen over SEO
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
                Klaar om beter gevonden te worden?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[var(--color-muted)]">
                Vraag een vrijblijvend SEO-voorstel aan. Na een eerste controle
                bespreken we welke verbeteringen voor jouw website het belangrijkst
                zijn.
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
                  Vraag een SEO-voorstel aan
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
