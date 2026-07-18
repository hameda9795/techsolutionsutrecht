import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Cable,
  CalendarDays,
  Check,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Workflow,
} from "lucide-react";
import Footer from "@/components/Footer";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

const pageUrl =
  "https://techsolutionsutrecht.nl/diensten/whatsapp-automatisering";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "WhatsApp & automatisering", url: pageUrl },
]);

const service = {
  ...serviceSchema({
    name: "WhatsApp en bedrijfsautomatisering op maat",
    description:
      "Automatiseer WhatsApp-berichten en terugkerende bedrijfstaken vanaf €450. Koppel je website, e-mail en bestaande systemen in één praktische workflow.",
    url: pageUrl,
  }),
  offers: {
    "@type": "Offer",
    price: "450",
    priceCurrency: "EUR",
    description:
      "Vanaf €450 voor een eenvoudige automatisering. De definitieve prijs hangt af van de workflow, systemen en benodigde koppelingen.",
  },
};

const faqs = [
  {
    question: "Wat kost WhatsApp-automatisering?",
    answer:
      "Een eenvoudige automatisering start vanaf €450. De definitieve prijs hangt af van het aantal stappen, de gebruikte systemen, beschikbare koppelingen en benodigde configuratie.",
  },
  {
    question: "Welke systemen kunnen gekoppeld worden?",
    answer:
      "Bijvoorbeeld een website, e-mail, agenda of CRM. Welke koppeling mogelijk is, hangt af van de API’s, toegangsrechten en technische mogelijkheden van de betreffende systemen.",
  },
  {
    question: "Heb ik WhatsApp Business nodig?",
    answer:
      "Voor sommige automatiseringen is WhatsApp Business Platform en mogelijk goedkeuring van Meta nodig. We controleren vooraf wat voor jouw workflow vereist is.",
  },
  {
    question: "Zijn abonnementskosten van externe diensten inbegrepen?",
    answer:
      "Nee, eventuele abonnementskosten van WhatsApp, Meta of andere externe software zijn niet standaard inbegrepen. We bespreken deze kosten vooraf.",
  },
  {
    question: "Hoe lang duurt het om een automatisering te bouwen?",
    answer:
      "De planning hangt af van de workflow, beschikbare koppelingen en eventuele goedkeuring van externe platformen. Je ontvangt vooraf een duidelijke planning.",
  },
  {
    question: "Kunnen jullie ieder systeem koppelen?",
    answer:
      "Nee. Niet ieder systeem heeft een geschikte API of staat externe koppelingen toe. Daarom controleren we de technische haalbaarheid vóór de definitieve offerte.",
  },
  {
    question: "Wat gebeurt er na de oplevering?",
    answer:
      "We testen de afgesproken workflow, geven uitleg over de werking en leggen vooraf vast welke ondersteuning tijdens de opleverperiode is inbegrepen.",
  },
];

export const metadata: Metadata = {
  title: "WhatsApp Automatisering Utrecht vanaf €450 | TechSolutions",
  description:
    "Automatiseer WhatsApp-berichten en terugkerende bedrijfstaken vanaf €450. Koppel je website, e-mail en bestaande systemen in één praktische workflow.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "WhatsApp Automatisering Utrecht vanaf €450 | TechSolutions",
    description:
      "Automatiseer WhatsApp-berichten en terugkerende bedrijfstaken in een praktische workflow die aansluit op je bestaande systemen.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const heroFeatures = [
  "Eenvoudige automatisering op maat",
  "Koppeling tussen maximaal twee systemen",
  "Volledige installatie en testen",
  "Uitleg en ondersteuning na oplevering",
];

const automationOptions = [
  {
    icon: Send,
    title: "Website naar WhatsApp",
    text: "Stuur een aanvraag van je website automatisch door naar WhatsApp en verstuur direct een ontvangstbevestiging.",
  },
  {
    icon: Bell,
    title: "Bevestigingen en herinneringen",
    text: "Verstuur automatisch een bevestiging of herinnering na een aanvraag, bestelling of afspraak.",
  },
  {
    icon: Mail,
    title: "WhatsApp en e-mail",
    text: "Laat informatie uit WhatsApp automatisch doorsturen naar een medewerker of centraal e-mailadres.",
  },
  {
    icon: CalendarDays,
    title: "Agenda en afspraken",
    text: "Koppel aanvragen aan een agenda of afsprakenproces wanneer de gebruikte systemen dit technisch ondersteunen.",
  },
  {
    icon: MessageCircle,
    title: "Interne meldingen",
    text: "Breng de juiste medewerker automatisch op de hoogte wanneer een nieuwe aanvraag binnenkomt.",
  },
  {
    icon: Cable,
    title: "Systemen koppelen",
    text: "Verbind twee bestaande systemen zodat informatie niet steeds handmatig hoeft te worden overgenomen.",
  },
];

const baseScope = [
  "Analyse van één eenvoudige workflow",
  "Koppeling tussen maximaal twee systemen",
  "Inrichting van de afgesproken automatisering",
  "Testen van de volledige workflow",
  "Uitleg bij de oplevering",
  "Ondersteuning tijdens de afgesproken opleverperiode",
];

const practicalExamples = [
  {
    title: "Nieuwe websiteaanvraag",
    text: "Een klant vult een formulier in, ontvangt automatisch een WhatsApp-bevestiging en de aanvraag wordt doorgestuurd naar het bedrijf.",
  },
  {
    title: "Afspraakherinnering",
    text: "Een klant ontvangt vóór een afspraak automatisch een herinnering via WhatsApp, wanneer het agendasysteem dit ondersteunt.",
  },
  {
    title: "Interne opvolging",
    text: "Een nieuwe aanvraag wordt automatisch naar de juiste medewerker of afdeling gestuurd.",
  },
];

const priceFactors = [
  "Aantal stappen in de workflow",
  "Aantal systemen en koppelingen",
  "Beschikbare API’s en technische beperkingen",
  "Benodigde WhatsApp Business- of Meta-configuratie",
  "Maatwerklogica en gegevensverwerking",
  "Testen, documentatie en ondersteuning",
];

const processSteps = [
  {
    title: "Proces bespreken",
    text: "We bekijken welke handmatige taak tijd kost en welk resultaat je wilt bereiken.",
  },
  {
    title: "Systemen controleren",
    text: "We onderzoeken welke koppelingen en API’s beschikbaar zijn.",
  },
  {
    title: "Bouwen en testen",
    text: "We richten de workflow in en testen verschillende situaties.",
  },
  {
    title: "Oplevering en uitleg",
    text: "Je ontvangt uitleg over de werking en de gemaakte afspraken over ondersteuning.",
  },
];

const prerequisites = [
  "Niet ieder systeem biedt een geschikte API of koppeling.",
  "Voor sommige WhatsApp-functionaliteiten is WhatsApp Business Platform of goedkeuring van Meta nodig.",
  "Externe platformen kunnen eigen abonnementskosten en voorwaarden hebben.",
  "De haalbaarheid wordt daarom vóór de definitieve offerte gecontroleerd.",
];

export default function WhatsAppAutomatiseringPage() {
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
                WhatsApp &amp; automatisering
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
              <Workflow className="h-8 w-8 text-white" aria-hidden="true" />
            </div>

            <h1 className="mb-6 max-w-4xl break-words text-balance text-4xl font-bold text-[var(--color-ink)] sm:text-5xl">
              WhatsApp en bedrijfsautomatisering{" "}
              <span className="text-primary">op maat</span>
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
              Bespaar tijd door terugkerende berichten en handmatige taken te
              automatiseren. We koppelen WhatsApp, je website en bestaande
              bedrijfssystemen in een praktische workflow die past bij jouw manier
              van werken.
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

            <div className="mb-8 max-w-3xl">
              <div className="text-3xl font-bold text-primary">Vanaf €450</div>
              <div className="mt-2 leading-relaxed text-[var(--color-muted)]">
                Voor een eenvoudige automatisering. De definitieve prijs hangt af van
                de workflow, systemen en benodigde koppelingen.
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary group">
                Bespreek je automatisering
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#mogelijkheden" className="btn-secondary">
                Bekijk de mogelijkheden
              </Link>
            </div>
            </div>

            <ServiceHeroVisual
              src="/images/whatsapp-automatisering-hero.webp"
              alt="Illustratie van een workflow tussen berichten, website, e-mail en bedrijfssystemen"
            />
          </section>

          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
            <section className="max-w-3xl">
              <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Minder handmatig werk, snellere opvolging
              </h2>
              <p className="leading-relaxed text-[var(--color-muted)]">
                Veel bedrijven verwerken aanvragen, bevestigingen en terugkerende
                berichten nog handmatig. Met een slimme automatisering kunnen
                gegevens automatisch worden doorgestuurd, klanten sneller een
                bevestiging ontvangen en medewerkers minder tijd kwijt zijn aan
                herhalende taken.
              </p>
            </section>

            <section id="mogelijkheden" className="scroll-mt-28">
              <h2 className="mb-8 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat kunnen we automatiseren?
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {automationOptions.map((item) => (
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
                Wat krijg je vanaf €450?
              </h2>
              <ul className="grid gap-x-10 gap-y-4 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8 md:grid-cols-2">
                {baseScope.map((item) => (
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
                De exacte werkzaamheden en ondersteuning worden vooraf vastgelegd in
                een duidelijke offerte.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Praktische voorbeelden
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                Dit zijn voorbeelden van mogelijke workflows, geen resultaten of
                cases van bestaande klanten.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {practicalExamples.map((example) => (
                  <article
                    key={example.title}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
                  >
                    <h3 className="text-xl font-bold text-[var(--color-ink)]">
                      {example.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                      {example.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat kost WhatsApp-automatisering?
              </h2>
              <div className="grid gap-8 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                <div>
                  <div className="text-3xl font-bold text-primary">Vanaf €450</div>
                  <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                    Dit is bedoeld voor een eenvoudige automatisering met een
                    duidelijk proces en maximaal twee systemen.
                  </p>
                  <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                    Eventuele abonnementskosten van WhatsApp, Meta of externe software
                    zijn niet standaard inbegrepen en worden vooraf besproken.
                  </p>
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
                Zo bouwen we je automatisering
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
              <h2 className="mb-6 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Wat moet vooraf worden gecontroleerd?
              </h2>
              <ul className="grid gap-x-10 gap-y-4 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8 md:grid-cols-2">
                {prerequisites.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed text-[var(--color-ink)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="max-w-3xl">
              <h2 className="mb-10 text-balance text-3xl font-bold text-[var(--color-ink)]">
                Veelgestelde vragen over WhatsApp-automatisering
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
                Welke terugkerende taak wil je automatiseren?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[var(--color-muted)]">
                Vertel welke taak nu handmatig wordt uitgevoerd. We bekijken
                vrijblijvend of deze betrouwbaar gekoppeld en geautomatiseerd kan
                worden.
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
                  Bespreek je automatisering
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
