import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import { packageGroups, formatPrice } from "@/lib/packages";
import { getAllShowcaseProjects } from "@/lib/showcase-db";
import { getProjectPath } from "@/lib/projects-showcase";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/utrecht";
const wordpress = packageGroups.wordpress;
const startingPrice = formatPrice(wordpress.packages[0].price);
const contactHref = "/contact?" + new URLSearchParams({
  dienst: wordpress.subject,
  van: "/utrecht",
}).toString();
const title = "Webdesign vanuit Zuilen, Utrecht | TechSolutions";
const description = `Bespreek je website met Max in Utrecht-Zuilen. Kennismaken op afspraak of online, lokaal werk en WordPress-pakketten vanaf ${startingPrice} excl. btw.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title, description, type: "website", locale: "nl_NL",
    url: pageUrl, siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: pageUrl },
};

export const dynamic = "force-dynamic";

const faqs = [
  {
    question: "Moet ik voor mijn website naar Zuilen komen?",
    answer: "Dat hoeft niet. Je kunt kennismaken via telefoon of WhatsApp en we kunnen je website online bespreken. Wil je langskomen in Zuilen, maak dan vooraf een afspraak.",
  },
  {
    question: "Wat bereid ik voor op ons eerste gesprek?",
    answer: "Vertel wat je bedrijf doet, wie je klanten zijn en wat een bezoeker op je website moet kunnen doen. Een bestaande website, voorbeelden die je aanspreken en een overzicht van je diensten helpen bij het bepalen van de inhoud en omvang.",
  },
  {
    question: "Kan ik mijn WordPress website zelf aanpassen?",
    answer: "Ja. We spreken af welke inhoud je wilt beheren. Bij de oplevering krijg je uitleg om bijvoorbeeld teksten en foto's zelf te wijzigen. Extra functies en latere uitbreidingen bespreken we apart.",
  },
  {
    question: "Zijn hosting, een domeinnaam en onderhoud inbegrepen?",
    answer: wordpress.notes[0],
  },
];

const schemas = [
  {
    ...serviceSchema({
      name: "Webdesign vanuit Utrecht-Zuilen",
      description: "Websiteontwerp voor zzp'ers en kleine bedrijven, met rechtstreeks contact met Max vanuit Zuilen. Kennismaken op afspraak of online en een vooraf afgesproken offerte.",
      url: pageUrl,
      areaServed: "Utrecht",
    }),
    serviceType: "Webdesign",
    offers: wordpress.packages.map((plan) => ({
      "@type": "Offer",
      name: `WordPress ${plan.name}`,
      url: `https://techsolutionsutrecht.nl${wordpress.href}#${plan.id}`,
      description: `${plan.features[0]}. ${wordpress.notes[0]}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
        unitText: plan.period === "per maand" ? "maand" : "project",
      },
    })),
  },
  breadcrumbSchema([
    { name: "Home", url: "https://techsolutionsutrecht.nl" },
    { name: "Samenwerken in Utrecht", url: pageUrl },
  ]),
  faqPageSchema(faqs),
];

export default async function UtrechtPage() {
  const projects = await getAllShowcaseProjects();
  const localProject = projects.find((project) => project.type === "website"
    && /^https:\/\/(?:www\.)?tandartszuilenparkwijk\.nl\/?$/.test(project.liveUrl));

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      ))}
      <main className="bg-[var(--color-bg)] text-[var(--color-ink)]">
        <section className="py-12 sm:py-16">
          <div className="container-custom">
            <nav aria-label="Broodkruimel" className="mb-8 text-sm text-[var(--color-muted)]">
              <ol className="flex flex-wrap gap-2">
                <li><Link href="/" className="underline underline-offset-4">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Samenwerken in Utrecht</li>
              </ol>
            </nav>
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                <MapPin size={18} aria-hidden="true" /> Vanuit Zuilen, voor ondernemers in Utrecht
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Webdesign vanuit Utrecht-Zuilen</h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
                Ik ben Max. Vanuit Zuilen werk ik met zzp&apos;ers en kleine bedrijven aan hun website.
                Je bespreekt je aanbod, de inhoud en het ontwerp rechtstreeks met mij.
                Hier lees je hoe we kennismaken en wat je kunt voorbereiden.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                WordPress begint bij {startingPrice} eenmalig, exclusief btw, voor één pagina met basis-SEO.
                Op de <Link href="/" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">pagina over een website laten maken in Utrecht</Link> vind je het overzicht van mijn aanbod, werk en aanpak.
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href={contactHref} className="btn-primary">
                  Bespreek je website <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="tel:+31625518708" className="btn-ghost">
                  <Phone size={18} aria-hidden="true" /> Bel 06 25518708
                </a>
              </div>
              <nav aria-label="Op deze pagina" className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[var(--color-primary)]">
                <Link href="#kennismaken" className="underline underline-offset-4">Kennismaken in Zuilen</Link>
                <Link href="#websitekosten-utrecht" className="underline underline-offset-4">WordPress-prijzen</Link>
                {localProject && <Link href="#lokaal-voorbeeld" className="underline underline-offset-4">Een project in Utrecht</Link>}
              </nav>
            </div>
          </div>
        </section>

        <section id="kennismaken" className="scroll-mt-28 bg-[var(--color-surface)] py-14 sm:py-16" aria-labelledby="kennismaken-heading">
          <div className="container-custom">
            <h2 id="kennismaken-heading" className="text-3xl font-bold">Kennismaken en samenwerken</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div className="space-y-4 leading-relaxed text-[var(--color-muted)]">
                <p>Ik werk vanuit de Sint-Ludgerusstraat in Zuilen, Utrecht. Een bezoek is mogelijk op afspraak. Bel of stuur een WhatsAppbericht voordat je langskomt.</p>
                <p>Een online gesprek kan ook. We bespreken wat je website moet laten zien, welke pagina&apos;s nodig zijn en hoe bezoekers een aanvraag of afspraak kunnen maken.</p>
                <a href="https://wa.me/31625518708" className="inline-block font-semibold text-[var(--color-primary)] underline underline-offset-4">Maak een afspraak via WhatsApp</a>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
                <h3 className="text-xl font-bold">Dit helpt bij het eerste gesprek</h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-[var(--color-muted)]">
                  <li>Een overzicht van je diensten en de klanten die je wilt bereiken.</li>
                  <li>Je bestaande website, logo, foto&apos;s en teksten, als je die al hebt.</li>
                  <li>De taken die een bezoeker moet kunnen uitvoeren, zoals een offerte aanvragen of contact opnemen.</li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">Daarna spreken we de inhoud, functies, prijs en een haalbare planning af. Extra werk krijgt een aparte afspraak.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="websitekosten-utrecht" className="scroll-mt-28 py-14 sm:py-16" aria-labelledby="websitekosten-heading">
          <div className="container-custom">
            <h2 id="websitekosten-heading" className="text-3xl font-bold">WordPress-prijzen voor je bedrijfswebsite</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-muted)]">{wordpress.shared}</p>
            <p className="mt-3 font-semibold">Eenmalige bouwkosten · Alle prijzen exclusief btw</p>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {wordpress.packages.map((plan) => (
                <article key={plan.id} className="flex min-w-0 flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-3 text-3xl font-bold text-[var(--color-primary)]">{formatPrice(plan.price)}<span className="ml-2 text-sm font-normal text-[var(--color-muted)]">{plan.period}</span></p>
                  <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{plan.features[0]}</p>
                  <Link href={`/contact?${new URLSearchParams({ pakket: plan.id, van: "/utrecht" })}`} className="mt-6 inline-block font-semibold text-[var(--color-primary)] underline underline-offset-4">Bespreek {plan.name}</Link>
                </article>
              ))}
            </div>
            <div className="mt-5 max-w-3xl space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
              {wordpress.notes.map((note) => <p key={note}>{note}</p>)}
              <p>Voor een webshop of bijzondere functies bespreken we een andere uitvoering en offerte.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-semibold text-[var(--color-primary)]">
              <Link href={wordpress.href} className="underline underline-offset-4">Bekijk wat elk WordPress-pakket omvat</Link>
              <Link href="/prijzen" className="underline underline-offset-4">Vergelijk alle pakketten</Link>
              <Link href="/blog/wat-kost-website-laten-maken#websitekosten-berekenen" className="underline underline-offset-4">Bereken bouw en optioneel onderhoud</Link>
            </div>
          </div>
        </section>

        {localProject && (
          <section id="lokaal-voorbeeld" className="scroll-mt-28 bg-[var(--color-surface)] py-14 sm:py-16" aria-labelledby="lokaal-voorbeeld-heading">
            <div className="container-custom">
              <p className="text-sm font-semibold text-[var(--color-primary)]">Een voorbeeld uit Utrecht</p>
              <h2 id="lokaal-voorbeeld-heading" className="mt-3 text-3xl font-bold">{localProject.title}</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-muted)]">{localProject.tagline}</p>
              <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-5 leading-relaxed text-[var(--color-muted)]">
                {localProject.highlights.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)]">Dit project heeft een eigen omvang. De uitvoering en prijs van jouw website leggen we vooraf apart vast.</p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-semibold text-[var(--color-primary)]">
                <Link href={getProjectPath(localProject)} className="underline underline-offset-4">Bekijk het project en mijn werk</Link>
                <Link href="/projecten" className="underline underline-offset-4">Bekijk andere websitevoorbeelden</Link>
              </div>
            </div>
          </section>
        )}

        <section className="py-14 sm:py-16" aria-labelledby="utrecht-faq-heading">
          <div className="container-custom">
            <h2 id="utrecht-faq-heading" className="text-3xl font-bold">Vragen over samenwerken aan je website</h2>
            <div className="mt-7 max-w-3xl space-y-6">
              {faqs.map((faq) => <div key={faq.question}>
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{faq.answer}</p>
              </div>)}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-surface)] py-14 sm:py-16" aria-labelledby="utrecht-contact-heading">
          <div className="container-custom">
            <h2 id="utrecht-contact-heading" className="text-3xl font-bold">Vertel me wat je website nodig heeft</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-muted)]">Stuur je bestaande website of vertel kort over je bedrijf. Dan bespreken we de mogelijkheden, de omvang en de prijs.</p>
            <Link href={contactHref} className="btn-primary mt-6">Bespreek je website <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
