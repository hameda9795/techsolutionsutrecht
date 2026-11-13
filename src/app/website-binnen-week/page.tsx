import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { packageGroups, formatPrice } from "@/lib/packages";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const url = "https://techsolutionsutrecht.nl/website-binnen-week";
const description = "Website binnen één week nodig? Controleer scope, content, toegang en feedback. Max beoordeelt de haalbaarheid; een startdatum of oplevering is niet automatisch beschikbaar.";
export const metadata: Metadata = {
  title: "Website binnen één week? Controleer de haalbaarheid | TechSolutions",
  description, alternates: { canonical: url },
};
const checks = [
  ["Pagina’s en functies staan vast", "Je weet welke pagina’s nodig zijn en wat bezoekers moeten kunnen doen. Betalen, reserveren, meertaligheid en koppelingen vragen een aparte beoordeling."],
  ["Inhoud is klaar voor plaatsing", "Je levert gecontroleerde teksten, logo en bruikbare foto’s per pagina aan. Nog te schrijven teksten of ontbrekende beelden horen eerst op de planning."],
  ["Toegang en bestaande website zijn gecontroleerd", "Domein, hosting en eventuele beheeraccounts zijn beschikbaar. Een verhuizing, e-mailmigratie of herstel van een bestaande site kan extra werk vragen."],
  ["Eén persoon kan beslissen", "Je kunt op de afgesproken momenten feedback bundelen en het ontwerp en de inhoud goedkeuren. We spreken die momenten af vóór de start."],
  ["Er is ruimte om te bouwen én te testen", "Ik controleer mijn beschikbaarheid en plan tijd voor mobiel gebruik, formulieren, links en correcties. Zonder die ruimte spreken we een latere oplevering af."],
];
const faqs = [
  { question: "Is oplevering binnen zeven dagen gegarandeerd?", answer: "Nee. Deze pagina helpt beoordelen of een korte planning haalbaar is. Pas na controle van de inhoud, scope en mijn beschikbaarheid spreken we een start- en opleverdatum af. Bij ontbrekend materiaal of extra werk kan een ruimere planning nodig zijn." },
  { question: "Welk pakket past bij een compact project?", answer: `WordPress Start kost ${formatPrice(packageGroups.wordpress.packages[0].price)} eenmalig exclusief btw voor één pagina met maximaal zes secties. Voor maximaal drie of vijf inhoudspagina’s zijn er Business en Lokaal Compleet. De pakketkeuze bepaalt niet automatisch de levertijd.` },
  { question: "Kost een versnelde planning extra?", answer: "Een spoedtoeslag is niet standaard in de pakketprijs opgenomen. Eventuele extra werkzaamheden of kosten worden vooraf afzonderlijk geoffreerd. Hosting, domein, onderhoud en betaalde licenties blijven apart." },
  { question: "Wat gebeurt er als mijn materiaal nog niet klaar is?", answer: "We leggen vast wat ontbreekt en wie het aanlevert. Daarna plannen we de bouw. Een tijdelijke compacte versie kan alleen met een eigen afgesproken inhoud en oplevering; we slaan controles niet over om een datum te halen." },
];

export default function WebsiteBinnenWeekPage() {
  const schemas = [
    serviceSchema({ name: "Haalbaarheid van een versneld websiteproject", description, url }),
    breadcrumbSchema([{ name: "Home", url: "https://techsolutionsutrecht.nl/" }, { name: "Versneld websiteproject", url }]),
    faqPageSchema(faqs),
  ];
  return <>
    {schemas.map((schema, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}
    <main className="package-surface">
      <header className="package-container package-page-hero">
        <nav className="package-breadcrumb" aria-label="Kruimelpad"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Versneld websiteproject</span></nav>
        <h1 className="package-page-title">Een website binnen één week? Eerst de haalbaarheid.</h1>
        <p className="package-page-intro">Een compacte website kan soms snel klaar zijn. De echte planning hangt af van wat er gebouwd moet worden, wat jij al klaar hebt en mijn beschikbaarheid. Met deze vijf punten bereiden we een haalbare afspraak voor.</p>
        <div className="package-page-actions"><Link href="/contact?dienst=Website%20laten%20maken&van=%2Fwebsite-binnen-week" className="package-button">Bespreek je gewenste deadline</Link><a href="#voorbereiding" className="package-button package-button--outline">Controleer je voorbereiding</a></div>
      </header>
      <section id="voorbereiding" className="package-container service-faq scroll-mt-28" aria-labelledby="voorbereiding-title">
        <h2 id="voorbereiding-title">Wat moet klaar zijn vóór een versnelde start?</h2>
        <ol className="space-y-6">{checks.map(([title, text], i) => <li key={title} className="rounded-xl border border-[var(--color-border)] p-5"><h3 className="font-semibold text-[var(--color-ink)]">{i + 1}. {title}</h3><p className="mt-3 leading-relaxed text-[var(--color-muted)]">{text}</p></li>)}</ol>
      </section>
      <section className="package-container service-story"><h2>Wat gebeurt er na je aanvraag?</h2><div><p>Stuur de gewenste datum, de pagina’s en functies, wat er al aan inhoud beschikbaar is en of er een bestaande website is. Ik beoordeel het werk en de beschikbare tijd. Een aanvraag reserveert nog geen plek in de planning.</p><p>Bij een haalbaar traject leggen we scope, prijs, feedbackmomenten, testwerk en oplevering vast. Als het niet past, bespreken we een latere datum of een kleinere eerste oplevering. Een schema van zeven dagen is geen standaardbelofte voor ieder project.</p><Link href="/blog/website-binnen-week-hoe-wij-dat-doen">Lees de fasen van een versneld websiteproject</Link></div></section>
      <section className="package-container service-story"><h2>Prijs en planning zijn twee verschillende afspraken</h2><div><p>De WordPress-pakketten kosten {packageGroups.wordpress.packages.map(p => formatPrice(p.price)).join(", ")} eenmalig exclusief btw. Je levert de inhoud aan; de ontwerpbasis wordt aangepast aan je huisstijl. Online boekingen en andere koppelingen horen niet automatisch bij die bedragen.</p><p>Domein, hosting, onderhoud, licenties en eventueel extra werk komen apart. We bevestigen de werkzaamheden én de planning voordat de opdracht begint.</p><div className="service-related"><Link href="/diensten/website-laten-maken">Vergelijk de WordPress-pakketten en voorwaarden</Link><Link href="/blog/hoe-lang-duurt-website-maken">Wat bepaalt de doorlooptijd van een website?</Link><Link href="/blog/wat-kost-website-laten-maken">Begroot bouw en terugkerende kosten</Link></div></div></section>
      <section className="package-container service-faq"><h2>Veelgestelde vragen over snel opleveren</h2>{faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
      <section className="service-consult"><div className="package-container"><h2>Leg je deadline en voorbereiding naast elkaar</h2><p>Je spreekt rechtstreeks met Max vanuit Utrecht-Zuilen. Vertel wat al klaar is en wat nog moet gebeuren, dan kan ik de haalbaarheid beoordelen.</p><Link href="/contact?dienst=Website%20laten%20maken&van=%2Fwebsite-binnen-week" className="package-button">Bespreek je websiteproject</Link></div></section>
    </main><Footer />
  </>;
}
