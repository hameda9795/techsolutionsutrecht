import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, Check, ArrowRight, Search, MapPin, FileText, Link2, BarChart3, Phone } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/seo";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "SEO Specialist", url: pageUrl },
]);

const service = serviceSchema({
  name: "SEO optimalisatie Utrecht",
  description:
    "SEO specialist in Utrecht voor technische SEO, contentoptimalisatie, local SEO en linkbuilding. Hoger in Google met meetbare resultaten voor ondernemers in Utrecht en omgeving.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Wat kost SEO in Utrecht?",
    answer:
      "SEO bij TechSolutionsUtrecht start vanaf €200 per maand en is maandelijks opzegbaar. Je betaalt geen lange contracten of opstartkosten zoals bij veel grote bureaus. Het exacte bedrag hangt af van je branche, de concurrentie op je belangrijkste zoekwoorden en hoeveel pagina's we optimaliseren. In een gratis adviesgesprek bepalen we samen een realistisch budget en de verwachte opbrengst.",
  },
  {
    question: "Hoe lang duurt het voordat ik resultaat zie van SEO?",
    answer:
      "De eerste verbeteringen in technische SEO en posities zijn vaak na 4 tot 8 weken zichtbaar in Google Search Console. Echte groei in organische bezoekers en aanvragen kost meestal 3 tot 6 maanden, omdat Google tijd nodig heeft om nieuwe content en signalen te verwerken. SEO is een investering die zich opstapelt: het verkeer dat je opbouwt blijft maand na maand binnenkomen, zonder dat je per klik betaalt.",
  },
  {
    question: "Wat is het verschil tussen SEO en Google Ads?",
    answer:
      "Met Google Ads betaal je per klik en stopt je zichtbaarheid zodra je budget op is. Met SEO bouw je organische posities op die blijven staan, ook als je even niets uitgeeft. Ads is ideaal voor snelle resultaten en campagnes; SEO is de duurzame basis die op lange termijn de voordeligste bezoeker oplevert. Voor de meeste ondernemers in Utrecht is een combinatie het sterkst, met SEO als fundament.",
  },
  {
    question: "Doen jullie ook local SEO voor mijn vestiging in Utrecht?",
    answer:
      "Ja. Local SEO is een kernonderdeel van mijn aanpak. Ik optimaliseer je Google Bedrijfsprofiel, zorg voor consistente NAW-gegevens (naam, adres, telefoon) op je website en in belangrijke bedrijvengidsen, en bouw lokale landingspagina's voor plaatsen als Nieuwegein, Zeist, Houten en Amersfoort. Zo word je gevonden door klanten die specifiek in jouw regio zoeken.",
  },
  {
    question: "Kan ik SEO uitbesteden en zelf de regie houden?",
    answer:
      "Zeker. Je hebt direct contact met de developer die het werk doet, geen accountmanager ertussen. Je ontvangt elke maand een heldere rapportage met posities, verkeer en de uitgevoerde acties, en je beslist zelf mee over de prioriteiten. Geen vakjargon en geen verrassingen, gewoon transparante samenwerking.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "SEO Specialist Utrecht | Hoger in Google | TechSolutions",
  description:
    "SEO specialist in Utrecht voor technische SEO, content en local SEO. Hoger in Google met meetbare resultaten. Direct contact met de developer, vanaf €200 per maand.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "SEO Specialist Utrecht | Hoger in Google | TechSolutionsUtrecht",
    description:
      "SEO specialist in Utrecht voor technische SEO, content en local SEO. Hoger in Google met meetbare resultaten. Direct contact met de developer.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const features = [
  "Technische SEO analyse",
  "Keyword onderzoek",
  "Content optimalisatie",
  "Linkbuilding strategie",
  "Local SEO (Google Bedrijfsprofiel)",
  "Maandelijkse rapportage",
];

const pillars = [
  {
    icon: Search,
    title: "Technische SEO",
    text: "Een snelle, foutloze website is de basis voor goede posities. Ik controleer laadtijden (Core Web Vitals), crawlbaarheid, indexering, mobiele weergave, structured data en interne links. Technische problemen die Google tegenhouden los ik op, zodat elke pagina de beste kans krijgt om te ranken.",
  },
  {
    icon: FileText,
    title: "Content & zoekwoorden",
    text: "Ik onderzoek waar jouw klanten écht op zoeken en vertaal dat naar pagina's die die vragen beantwoorden. Bestaande teksten optimaliseer ik op zoekintentie, koppenstructuur en leesbaarheid, en samen bouwen we de content uit die ontbreekt om hoger te komen.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    text: "Voor ondernemers in Utrecht en omgeving is lokale vindbaarheid goud waard. Ik optimaliseer je Google Bedrijfsprofiel, zorg voor consistente NAW-gegevens en bouw lokale landingspagina's, zodat je verschijnt bij zoekopdrachten met 'in de buurt' of een plaatsnaam.",
  },
  {
    icon: Link2,
    title: "Linkbuilding & autoriteit",
    text: "Relevante, kwalitatieve links vertellen Google dat jouw site te vertrouwen is. Ik focus op natuurlijke, lokaal en thematisch relevante links in plaats van massa-tactieken die op de lange termijn schade doen.",
  },
];

export default function SEOPage() {
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
            <li><span className="text-[var(--color-ink)] font-medium">SEO</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                SEO Specialist <span className="text-[var(--color-primary)]">Utrecht</span>
              </h1>

              <p className="text-lg text-[var(--color-muted)] mb-8">
                <strong className="text-[var(--color-ink)]">Hoger in Google</strong> met technische SEO,
                sterke content en lokale optimalisatie. Meetbaar resultaat voor ondernemers in Utrecht en omgeving,
                met <strong className="text-primary">direct contact met de developer</strong> en transparante prijzen
                vanaf €200 per maand.
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
                <div className="text-3xl font-bold text-primary">€200/maand</div>
                <div className="text-[var(--color-muted)]">Maandelijks opzegbaar</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Vraag een gratis SEO-advies aan
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-[var(--color-primary)] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--color-ink)]">SEO</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">€200/maand</div>
                  <div className="text-[var(--color-muted)] mt-1">Maandelijks opzegbaar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro / Waarom SEO */}
          <section className="mt-24 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">
              Waarom SEO belangrijk is voor ondernemers in Utrecht
            </h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              De meeste mensen die op zoek zijn naar een product of dienst beginnen bij Google. Wie op de eerste
              pagina staat, krijgt het overgrote deel van de klikken; wie op pagina twee of verder staat, wordt
              nauwelijks gevonden. Zoekmachineoptimalisatie (SEO) zorgt ervoor dat jouw website juist wél bovenaan
              verschijnt voor de zoekwoorden waar jouw klanten op zoeken, zoals “webshop laten maken Utrecht” of
              “SEO specialist Utrecht”.
            </p>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Anders dan advertenties, waarbij je per klik betaalt en je zichtbaarheid verdwijnt zodra je budget op
              is, bouw je met SEO een blijvende stroom van gratis, organisch verkeer op. Het is een investering die
              zich maand na maand opstapelt: de posities die je verdient, blijven bezoekers en aanvragen opleveren.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Als developer én SEO-specialist kijk ik niet alleen naar teksten en zoekwoorden, maar ook naar de
              techniek onder je website. Die combinatie is precies wat veel losse tekstschrijvers of klassieke
              bureaus missen, en wat het verschil maakt tussen wat ranken en écht ranken.
            </p>
          </section>

          {/* Aanpak / pillars */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Mijn SEO-aanpak</h2>
            <p className="text-[var(--color-muted)] mb-10 max-w-3xl leading-relaxed">
              Goede SEO rust op vier pijlers. Ik werk ze stap voor stap af, met je eigen doelen en branche als
              uitgangspunt, en houd je elke maand op de hoogte van de voortgang.
            </p>
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

          {/* Resultaten / rapportage */}
          <section className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">Wat SEO jou oplevert</h2>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Het doel is nooit “hoger in Google” op zich, maar méér klanten. Daarom stuur ik op cijfers die er
                echt toe doen: organisch verkeer, posities op je belangrijkste zoekwoorden en het aantal aanvragen
                via je website. Elke maand ontvang je een begrijpelijke rapportage met de stand van zaken en de
                acties die ik heb uitgevoerd.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Geen vage beloftes als “nummer 1 in Google” en geen langlopende contracten. Je betaalt per maand,
                bent maandelijks opzegbaar, en kunt aan de resultaten zelf zien of het werkt.
              </p>
            </div>
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-ink)] mb-4">Inbegrepen bij elk SEO-traject</h3>
              <ul className="space-y-3">
                {[
                  "Maandelijkse rapportage met posities en verkeer",
                  "Doorlopende technische optimalisatie",
                  "Content- en zoekwoordadvies",
                  "Local SEO en Google Bedrijfsprofiel",
                  "Direct contact met de developer",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Interne links */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Meer weten?</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-3xl leading-relaxed">
              SEO werkt het best in combinatie met een snelle, goed gebouwde website. Bekijk ook deze pagina&apos;s,
              of lees mijn blog over lokale vindbaarheid.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/diensten/wordpress" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">WordPress website laten maken</h3>
                <p className="text-[var(--color-muted)] text-sm">Een snelle, SEO-klare website die je zelf kunt beheren.</p>
              </Link>
              <Link href="/blog/lokale-seo-utrecht" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Blog: Lokale SEO in Utrecht</h3>
                <p className="text-[var(--color-muted)] text-sm">Zo word je gevonden door klanten in jouw regio.</p>
              </Link>
              <Link href="/blog/website-niet-in-google" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Blog: Website niet in Google?</h3>
                <p className="text-[var(--color-muted)] text-sm">De meest voorkomende oorzaken en oplossingen.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen over SEO</h2>
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
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Klaar om hoger in Google te komen?</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Vraag vrijblijvend een gratis SEO-advies aan. Je krijgt binnen één werkdag een eerlijke analyse van je
              kansen, direct van de developer die ermee aan de slag gaat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Offerte aanvragen
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
