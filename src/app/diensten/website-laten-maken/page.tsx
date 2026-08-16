import { Metadata } from "next";
import Footer from "@/components/Footer";
import LatestProjects from "@/components/LatestProjects";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import Link from "next/link";
import {
  Globe,
  Check,
  ArrowRight,
  Zap,
  Settings,
  Smartphone,
  Search,
  Phone,
} from "lucide-react";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { cities } from "@/lib/cities";

export const dynamic = "force-dynamic";

const pageUrl =
  "https://techsolutionsutrecht.nl/diensten/website-laten-maken";
// Bewust zonder "Utrecht" in de title. De homepage is de pagina die op
// "website laten maken utrecht" moet ranken: daar wijzen alle 51 externe
// backlinks naartoe. Toen beide pagina's dezelfde term claimden, koos Google
// deze pagina op positie 66 en het blogoverzicht op 32 — klassieke
// kannibalisatie. Deze pagina richt zich nu op de landelijke, prijsgedreven
// zoekvraag ("wat kost een website laten maken", "professionele website laten
// maken"), waar hij inhoudelijk ook het beste bij past.
const pageTitle = "Website Laten Maken | Prijzen, Aanpak en Voorbeelden | TechSolutions";
const pageDescription =
  "Wat kost een website laten maken en hoe verloopt het traject? Prijsvoorbeelden vanaf €250, een duidelijke planning en direct contact met de developer die hem bouwt.";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "Website laten maken", url: pageUrl },
]);

const service = serviceSchema({
  name: "Professionele website laten maken",
  description: pageDescription,
  url: pageUrl,
});

const faqs = [
  {
    question: "Wat kost een professionele website laten maken?",
    answer:
      "Een complete bedrijfswebsite begint bij €250. De meeste websites vallen tussen €350 en €650, afhankelijk van het aantal pagina’s, de inhoud en de gewenste functies. Na een korte intake ontvang je een duidelijke offerte met een vaste totaalprijs.",
  },
  {
    question: "Hoe lang duurt het om een website te laten maken?",
    answer:
      "De doorlooptijd hangt af van de omvang van de website, de gewenste functies en de beschikbaarheid van teksten en beeldmateriaal. In de offerte spreken we vooraf een duidelijke planning en opleverdatum af.",
  },
  {
    question: "Kan ik mijn website daarna zelf beheren?",
    answer:
      "Ja, als zelf beheren belangrijk is kiezen we een passende oplossing waarmee je teksten, foto’s en pagina’s eenvoudig kunt aanpassen. Bij oplevering krijg je uitleg, en je kunt het technische onderhoud ook uitbesteden.",
  },
  {
    question: "Is de website geschikt voor SEO?",
    answer:
      "Ja. Elke website krijgt een goede technische basis met snelle laadtijden, een logische koppenstructuur, mobielvriendelijke pagina’s en schone code. Daarmee is de website klaar om verder te optimaliseren voor Google.",
  },
  {
    question: "WordPress of Next.js: wat past bij mijn website?",
    answer:
      "Dat hangt af van je doelen. WordPress is vaak geschikt wanneer je veel inhoud zelf wilt beheren. Next.js kan beter passen bij extra snelheid, maatwerk of specifieke koppelingen. We kiezen de technologie die het beste bij jouw website past.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const features = [
  "Complete bedrijfswebsite",
  "Geschikt voor mobiel, tablet en desktop",
  "Contactformulier en WhatsApp",
  "Basis-SEO en volledige eigendom",
  "Snelle laadtijden",
  "Technologie passend bij je project",
];

const pillars = [
  {
    icon: Settings,
    title: "Techniek die bij je past",
    text: "We kiezen de techniek op basis van jouw doelen en manier van werken. Dat kan bijvoorbeeld WordPress zijn voor eenvoudig contentbeheer of Next.js voor snelheid, maatwerk en specifieke koppelingen.",
  },
  {
    icon: Smartphone,
    title: "Responsive op elk scherm",
    text: "Het grootste deel van je bezoekers komt via mobiel. Elke website die ik bouw werkt vloeiend op telefoon, tablet en desktop, met een ontwerp dat er overal verzorgd uitziet en snel laadt.",
  },
  {
    icon: Search,
    title: "SEO-klaar opgeleverd",
    text: "Schone code, een logische koppenstructuur, snelle laadtijden en de juiste technische basis: je website is vanaf de start klaar om gevonden te worden in Google.",
  },
  {
    icon: Zap,
    title: "Volledig jouw eigendom",
    text: "Na oplevering is de website van jou. Je ontvangt de benodigde toegang en bent niet gebonden aan een gesloten platform of een verplicht abonnement voor het gebruik van je eigen website.",
  },
];

const priceExamples = [
  {
    title: "Eenvoudige bedrijfswebsite",
    price: "vanaf €250",
    text: "Een professionele website om je bedrijf, diensten en contactgegevens helder te presenteren.",
  },
  {
    title: "Complete website met meerdere pagina’s",
    price: "meestal €350–€650",
    text: "Voor bedrijven die pagina’s nodig hebben voor bijvoorbeeld diensten, over ons, projecten, een galerij en contact.",
  },
  {
    title: "Extra functies en koppelingen",
    price: "prijs op aanvraag",
    text: "Voor functies zoals online reserveren, een eigen beheeromgeving, meertaligheid of koppelingen met andere systemen.",
  },
];

const processSteps = [
  {
    title: "Kennismaking en offerte",
    text: "We bespreken je doelen, voorbeelden en budget. Daarna ontvang je een heldere offerte zonder verborgen kosten.",
  },
  {
    title: "Ontwerp en ontwikkeling",
    text: "Ik ontwerp en bouw een snelle, mobielvriendelijke website die past bij je merk en doelgroep.",
  },
  {
    title: "Controle en aanpassingen",
    text: "We controleren inhoud, werking en SEO-basis. Jouw feedback wordt verwerkt in de afgesproken aanpassingsronde.",
  },
  {
    title: "Oplevering en uitleg",
    text: "Na je akkoord gaat de website live en krijg je uitleg over het beheer, de toegang en het onderhoud.",
  },
];


export default function WebsiteLatenMakenPage() {
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

      <main className="pt-8 pb-20 sm:pt-10 sm:pb-24">
        <div className="container-custom">
          <nav className="mb-8 text-sm text-[var(--color-muted)]">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:text-primary">
              Diensten
            </Link>
            <span className="mx-2">/</span>
            <span>Website laten maken</span>
          </nav>

          <section className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.95fr)] lg:items-center xl:gap-14">
            <div className="min-w-0">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)]">
              <Globe className="h-8 w-8 text-white" aria-hidden="true" />
            </div>

            <h1 className="mb-4 text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
              Professionele website laten maken
            </h1>

            <div className="mb-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                <Smartphone className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-primary">
                  Geschikt voor ieder scherm
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1">
                <Check
                  className="h-4 w-4 text-[var(--color-primary)]"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-[var(--color-primary)]">
                  Volledig jouw eigendom
                </span>
              </div>
            </div>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
              Laat een{" "}
              <strong className="text-[var(--color-ink)]">
                complete professionele website
              </strong>{" "}
              maken die past bij jouw bedrijf en klanten. Je krijgt een snelle,
              responsive website met contactmogelijkheden, een goede SEO-basis en{" "}
              <strong className="text-primary">
                direct contact met de developer
              </strong>
              .
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-[var(--color-muted)]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <div className="text-3xl font-bold text-primary">Vanaf €250</div>
              <div className="mt-1 text-[var(--color-muted)]">
                Meestal €350–€650
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary group">
                Vraag gratis offerte aan
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#voorbeelden" className="btn-secondary">
                Bekijk voorbeelden
              </Link>
            </div>
            </div>

            <ServiceHeroVisual
              src="/images/website-laten-maken-hero.webp"
              alt="Illustratie van een professionele website op desktop, tablet en mobiel"
            />
          </section>

          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
            <section className="max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-[var(--color-ink)]">
                Een website die past bij jouw bedrijf
              </h2>
              <div className="space-y-4 leading-relaxed text-[var(--color-muted)]">
                <p>
                  Je ontvangt geen losse landingspagina, maar een complete
                  bedrijfswebsite met de pagina’s die jouw bedrijf nodig heeft, zoals
                  Home, Diensten, Over ons, Projecten en Contact. De precieze structuur
                  stemmen we af op jouw aanbod en klanten, zonder een vast maximum
                  aantal pagina’s als uitgangspunt te nemen.
                </p>
                <p>
                  Afhankelijk van je wensen kan de website worden gebouwd met
                  bijvoorbeeld WordPress of Next.js. De keuze volgt uit wat jij nodig
                  hebt: eenvoudig beheer, extra snelheid, specifieke koppelingen of
                  ruimte voor maatwerk.
                </p>
                <p>
                  Je werkt rechtstreeks met de developer. Daardoor zijn de lijnen kort
                  en weet je tijdens het hele traject precies waar je aan toe bent.
                </p>
              </div>
            </section>

            <section id="voorbeelden" className="scroll-mt-28">
              <h2 className="text-3xl font-bold text-[var(--color-ink)]">
                Bekijk websites die we hebben gemaakt
              </h2>
              <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                <LatestProjects />
              </div>
            </section>

            <section>
              <h2 className="mb-10 text-3xl font-bold text-[var(--color-ink)]">
                Wat je krijgt
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {pillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <pillar.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[var(--color-ink)]">
                      {pillar.title}
                    </h3>
                    <p className="leading-relaxed text-[var(--color-muted)]">
                      {pillar.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-bold text-[var(--color-ink)]">
                Wat kost een website laten maken?
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                De uiteindelijke prijs hangt af van de gewenste inhoud, functies en
                koppelingen. Deze voorbeelden geven een praktische indicatie.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {priceExamples.map((example) => (
                  <article
                    key={example.title}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                  >
                    <h3 className="text-xl font-bold text-[var(--color-ink)]">
                      {example.title}
                    </h3>
                    <div className="mt-3 font-bold text-[var(--color-primary)]">
                      {example.price}
                    </div>
                    <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                      {example.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 text-3xl font-bold text-[var(--color-ink)]">
                Zo verloopt het traject
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
              <h2 className="mb-4 text-3xl font-bold text-[var(--color-ink)]">
                Past dit bij jou?
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                Bekijk ook deze opties, of laat je website na de bouw structureel hoger
                in Google komen.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Link
                  href="/diensten/webshop"
                  className="card-service block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    Webshop laten maken
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    Een complete WooCommerce-webshop met iDEAL en voorraadbeheer.
                  </p>
                </Link>
                <Link
                  href="/diensten/website-onderhoud"
                  className="card-service block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    Website onderhoud
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    Updates, back-ups en technische controles vanaf €29 per maand.
                  </p>
                </Link>
                <Link
                  href="/diensten/seo"
                  className="card-service block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    SEO optimalisatie
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    Structureel hoger in Google na de lancering van je site.
                  </p>
                </Link>
              </div>
            </section>

            {/* Deze drie branchepagina's hadden nul contextuele interne links —
                ze waren alleen via de footer bereikbaar en staan daardoor niet
                in de index. Hier staan ze inhoudelijk precies op hun plek. */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-[var(--color-ink)]">
                Werk je in een specifieke branche?
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                Sommige branches hebben eigen wensen, zoals online afspraken, een menukaart
                of een aanmeldformulier. Voor deze drie schreef ik een aparte pagina.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Link
                  href="/website-laten-maken-kapper"
                  className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    Website laten maken voor kappers
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    Met online afspraken, prijslijst en een galerij van je werk.
                  </p>
                </Link>
                <Link
                  href="/website-laten-maken-restaurant"
                  className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    Website laten maken voor restaurants
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    Menukaart, openingstijden en reserveren, ook goed op mobiel.
                  </p>
                </Link>
                <Link
                  href="/website-laten-maken-coach"
                  className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    Website laten maken voor coaches
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    Je verhaal, je aanbod en een intakeformulier dat aanvragen oplevert.
                  </p>
                </Link>
              </div>
              <p className="mt-6 text-sm text-[var(--color-muted)]">
                Andere branche? Bekijk de{" "}
                <Link href="/veelgestelde-vragen" className="font-medium text-primary hover:underline">
                  veelgestelde vragen
                </Link>{" "}
                of vraag het gewoon even.
              </p>
            </section>

            <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <h2 className="mb-4 text-3xl font-bold text-[var(--color-ink)]">
                Website laten maken in de regio Utrecht
              </h2>
              <p className="max-w-3xl leading-relaxed text-[var(--color-muted)]">
                Ik werk rechtstreeks met ondernemers in Utrecht en omliggende plaatsen.
                Op de regionale pagina&apos;s lees je hoe de samenwerking en lokale aanpak
                per plaats aansluiten op jouw bedrijf.
              </p>
              {/* Linkte eerder maar naar 5 van de 11 plaatsen, met "Webdesign X"
                  als ankertekst. Nu alle plaatsen, met de zoekterm waarop deze
                  pagina's daadwerkelijk vertoningen krijgen. */}
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-medium text-[var(--color-ink)] transition-colors hover:border-primary hover:text-primary"
                    >
                      Website laten maken in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)]">
                Nog aan het vergelijken? Gebruik de{" "}
                <Link href="/blog/website-laten-maken" className="font-medium text-primary hover:underline">
                  checklist voor een nieuwe website
                </Link>{" "}
                en bekijk daarna de{" "}
                <Link href="/blog/wat-kost-website-laten-maken" className="font-medium text-primary hover:underline">
                  actuele uitleg over websitekosten
                </Link>
                .
              </p>
            </section>

            <section className="max-w-3xl">
              <h2 className="mb-10 text-3xl font-bold text-[var(--color-ink)]">
                Veelgestelde vragen over een website laten maken
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
              <h2 className="mb-4 text-3xl font-bold text-[var(--color-ink)]">
                Klaar voor een professionele website?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[var(--color-muted)]">
                Vraag vrijblijvend een offerte aan. Je krijgt binnen één werkdag een
                reactie, direct van de developer die je website bouwt.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/31625518708"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#128C7E]"
                >
                  <Phone className="h-5 w-5" /> WhatsApp direct
                </a>
                <Link
                  href="/projecten"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Bekijk portfolio
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
