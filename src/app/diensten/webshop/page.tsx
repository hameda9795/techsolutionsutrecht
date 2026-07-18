import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Phone,
  ShoppingCart,
} from "lucide-react";
import Footer from "@/components/Footer";
import LatestProjects from "@/components/LatestProjects";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/webshop";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "Webshop", url: pageUrl },
]);

const service = serviceSchema({
  name: "Webshop laten maken Utrecht",
  description:
    "Complete WooCommerce-webshop laten maken in Utrecht met iDEAL, voorraadbeheer en verzendintegraties. Snel, SEO-klaar en klaar om te verkopen. Direct contact met de developer.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Wat kost een webshop laten maken in Utrecht?",
    answer:
      "Een professionele webshop begint bij €795. De meeste webshops kosten €1.000–€2.000, afhankelijk van het aantal producten, productvariaties, betaalmethoden, verzendregels en gewenste koppelingen. Je ontvangt vooraf een duidelijke offerte met een vaste totaalprijs.",
  },
  {
    question: "Welke betaalmethoden kan mijn webshop accepteren?",
    answer:
      "Via Mollie kan je webshop onder andere iDEAL, creditcard, PayPal en Bancontact accepteren. Tijdens de intake bepalen we welke betaalmethoden bij jouw klanten en verkoopgebied passen.",
  },
  {
    question: "Hoe lang duurt het om een webshop te bouwen?",
    answer:
      "De planning wordt na de intake vastgesteld. De gemiddelde doorlooptijd is 1–3 weken, afhankelijk van het aantal producten, de gewenste betaalmethoden, verzendinstellingen en koppelingen. Dit is een indicatie en geen vaste oplevergarantie.",
  },
  {
    question: "Kan ik mijn producten en voorraad zelf beheren?",
    answer:
      "Ja. Je krijgt een gebruiksvriendelijke beheeromgeving waarin je producten, prijzen, voorraad en bestellingen zelf kunt beheren. Bij de oplevering leggen we uit hoe alles werkt.",
  },
  {
    question: "Is mijn webshop ook goed vindbaar in Google?",
    answer:
      "De webshop wordt opgeleverd met een technische SEO-basis voor producten en categorieën, een logische URL-structuur, snelle pagina’s en een responsive ontwerp. Voor structurele groei kan dit later worden uitgebreid met doorlopende SEO-optimalisatie.",
  },
];

export const metadata: Metadata = {
  title: "Webshop Laten Maken Utrecht | WooCommerce | TechSolutions",
  description:
    "Complete WooCommerce-webshop laten maken in Utrecht met iDEAL, voorraadbeheer en verzending. Snel, SEO-klaar en klaar om te verkopen. Vraag een offerte aan.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Webshop Laten Maken Utrecht | WooCommerce | TechSolutionsUtrecht",
    description:
      "Complete WooCommerce-webshop laten maken in Utrecht met iDEAL, voorraadbeheer en verzending. Snel, SEO-klaar en klaar om te verkopen.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

export const dynamic = "force-dynamic";

const heroFeatures = [
  "Complete responsive webshop",
  "iDEAL-betalingen via Mollie",
  "Product-, voorraad- en orderbeheer",
  "Verzendinstellingen en basis-SEO",
];

const deliverables = [
  "Complete responsive webshop",
  "Product- en categoriepagina’s",
  "Winkelwagen en checkout",
  "iDEAL-betalingen via Mollie",
  "Voorraadbeheer",
  "Verzendmethoden en verzendkosten",
  "Automatische bestelbevestigingen",
  "Basis-SEO voor producten en categorieën",
  "Gebruiksvriendelijke beheeromgeving",
  "Uitleg bij de oplevering",
  "Volledig eigendom van de webshop",
];

const priceExamples = [
  {
    price: "Vanaf €795",
    text: "Voor een professionele webshop met de belangrijkste verkoopfuncties.",
  },
  {
    price: "Meestal €1.000–€2.000",
    text: "Voor webshops met meerdere categorieën, productvariaties, uitgebreide verzendinstellingen of extra functionaliteiten.",
  },
  {
    price: "Maatwerk en koppelingen — op aanvraag",
    text: "Voor koppelingen met externe voorraad-, boekhoud-, reserverings- of andere bedrijfssystemen.",
  },
];

const processSteps = [
  {
    title: "Kennismaking en webshopplan",
    text: "We bespreken je assortiment, klanten, betaalmethoden, verzending en gewenste koppelingen. Daarna ontvang je een heldere offerte.",
  },
  {
    title: "Ontwerp en inrichting",
    text: "We bouwen de structuur, productpagina’s, winkelwagen en checkout in de stijl van jouw bedrijf.",
  },
  {
    title: "Betaling, verzending en producten",
    text: "We richten Mollie, verzendregels en het productbeheer in en leggen vooraf vast welke producten wij invoeren.",
  },
  {
    title: "Controle en oplevering",
    text: "We testen het volledige bestelproces, verwerken je feedback en geven uitleg voordat de webshop livegaat.",
  },
];

export default function WebshopPage() {
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
                Webshop
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
              <ShoppingCart className="h-8 w-8 text-white" aria-hidden="true" />
            </div>

            <h1 className="mb-6 max-w-3xl text-balance text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
              Webshop laten maken in{" "}
              <span className="text-[var(--color-primary)]">Utrecht</span>
            </h1>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">
                Planning na intake
              </span>
            </div>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
              Laat een{" "}
              <strong className="text-[var(--color-ink)]">
                complete professionele webshop
              </strong>{" "}
              maken die past bij je producten, klanten en manier van werken. Je
              krijgt een snelle en gebruiksvriendelijke webshop met online
              betalingen, voorraadbeheer en een overzichtelijke beheeromgeving.
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

            <div className="mb-8">
              <div className="text-3xl font-bold text-primary">Vanaf €795</div>
              <div className="mt-1 text-[var(--color-muted)]">
                Meestal €1.000–€2.000
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary group">
                Vraag een vaste prijs aan
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#voorbeelden" className="btn-secondary">
                Bekijk voorbeelden
              </Link>
            </div>
            </div>

            <ServiceHeroVisual
              src="/images/webshop-laten-maken-hero.webp"
              alt="Illustratie van een professionele webshop met producten, bestellingen en voorraadbeheer"
            />
          </section>

          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
            <section className="max-w-3xl">
              <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Online verkopen met een professionele webshop
              </h2>
              <div className="space-y-4 leading-relaxed text-[var(--color-muted)]">
                <p>
                  Je ontvangt een complete webshop waarmee klanten producten kunnen
                  bekijken, veilig betalen en hun bestelling afronden. De inrichting
                  sluit aan op jouw assortiment, merk en dagelijkse werkwijze.
                </p>
                <p>
                  We kiezen de technische oplossing die bij je bedrijf past.
                  WooCommerce kan daarbij een geschikte keuze zijn vanwege de
                  flexibiliteit, het gebruiksvriendelijke beheer en de vele
                  uitbreidingsmogelijkheden, maar de webshop zelf staat centraal.
                </p>
                <p>
                  De gemiddelde doorlooptijd is 1–3 weken, afhankelijk van het aantal
                  producten, de gewenste betaalmethoden, verzendinstellingen en
                  koppelingen. Na de intake ontvang je een realistische planning.
                </p>
              </div>
            </section>

            <section id="voorbeelden" className="scroll-mt-28">
              <h2 className="text-balance text-3xl font-bold text-[var(--color-ink)]">
                Bekijk websites die we hebben gemaakt
              </h2>
              <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                <LatestProjects />
              </div>
            </section>

            <section>
              <h2 className="mb-8 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat je krijgt
              </h2>
              <ul className="grid gap-x-10 gap-y-4 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-3">
                {deliverables.map((item) => (
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
            </section>

            <section>
              <h2 className="mb-4 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat kost een webshop laten maken?
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                De prijs hangt af van het aantal producten, productvariaties,
                betaalmethoden, verzendregels en benodigde koppelingen. Het aantal
                producten dat wij voor je invoeren, wordt vooraf in de offerte
                vastgelegd.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {priceExamples.map((example) => (
                  <article
                    key={example.price}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                  >
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">
                      {example.price}
                    </h3>
                    <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                      {example.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-8 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Zo bouwen we je webshop
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
              <h2 className="mb-6 text-3xl font-bold text-[var(--color-ink)]">
                Bekijk ook
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Link
                  href="/diensten/website-laten-maken"
                  className="card-service block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    Website laten maken
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    Een complete professionele bedrijfswebsite die bij jouw bedrijf
                    past.
                  </p>
                </Link>
                <Link
                  href="/diensten/seo"
                  className="card-service block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    SEO optimalisatie
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    Werk na de lancering structureel aan meer relevante bezoekers uit
                    Google.
                  </p>
                </Link>
                <Link
                  href="/projecten"
                  className="card-service block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="mb-2 text-lg font-bold text-[var(--color-ink)]">
                    Projecten
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    Bekijk eerder opgeleverde websites en webapplicaties.
                  </p>
                </Link>
              </div>
            </section>

            <section className="max-w-3xl">
              <h2 className="mb-10 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Veelgestelde vragen over webshops
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
                Klaar om online te verkopen?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[var(--color-muted)]">
                Vertel ons wat je wilt verkopen en welke functies je nodig hebt. Na
                een korte intake ontvang je een duidelijke offerte met een vaste
                totaalprijs.
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
                  Vraag een vaste prijs aan
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
