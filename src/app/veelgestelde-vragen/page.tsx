import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { packageGroups, formatPrice } from "@/lib/packages";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

const url = "https://techsolutionsutrecht.nl/veelgestelde-vragen";
const wpPrices = packageGroups.wordpress.packages.map(p => formatPrice(p.price)).join(", ");
const maintenancePrice = formatPrice(packageGroups.onderhoud.packages.find(p => p.id === "onderhoud-wordpress")!.price);
export const metadata: Metadata = {
  title: "Vragen over je website: kosten, planning en beheer",
  description: "Antwoorden over WordPress-pakketten, extra kosten, planning, eigen beheer, onderhoud en vindbaarheid. Direct contact met Max in Utrecht-Zuilen.",
  alternates: { canonical: url },
};
const groups = [
  { id: "kosten", title: "Kosten en functies", questions: [
    { q: "Wat kost een website laten maken?", a: `WordPress Start, Business en Lokaal Compleet kosten ${wpPrices} eenmalig exclusief btw, voor één, maximaal drie of maximaal vijf inhoudspagina’s. De ontwerpbasis wordt aangepast aan je huisstijl; jij levert teksten, foto’s en logo aan.`, href: "/diensten/website-laten-maken", link: "Bekijk de exacte pakketinhoud" },
    { q: "Welke kosten komen naast de bouw?", a: "Domein, hosting, onderhoud, betaalde licenties en aanvullende werkzaamheden staan los van de bouwprijs. We leggen vast wat je zelf betaalt en wat apart wordt geoffreerd. Vergelijk ook de verlengingskosten in het tweede jaar.", href: "/blog/wat-kost-website-laten-maken", link: "Bereken en vergelijk je websitekosten" },
    { q: "Zijn een boekingssysteem of betalingen inbegrepen?", a: "Een gewone contactmogelijkheid is iets anders dan een koppeling met een agenda, reserveringssysteem of betaalprovider. Die extra functies krijgen vooraf een eigen scope en prijs. Voor productverkoop zijn er aparte WooCommerce-pakketten.", href: "/diensten/webshop", link: "Bekijk de webshopmogelijkheden" },
  ] },
  { id: "planning", title: "Voorbereiding en planning", questions: [
    { q: "Hoe snel kan mijn website klaar zijn?", a: "Dat hangt af van omvang, functies, aangeleverde inhoud, feedback en beschikbaarheid. We spreken een start- en opleverdatum af na beoordeling. Binnen een week is geen standaardgarantie.", href: "/website-binnen-week", link: "Controleer of een versnelde planning haalbaar is" },
    { q: "Wat lever ik zelf aan?", a: "Je verzamelt gecontroleerde teksten, logo, foto’s, contactgegevens en informatie per dienst. Bij de WordPress-pakketten hoort lichte redactie van aangeleverde inhoud binnen de beschreven grenzen; volledige copywriting en fotografie zijn aparte opdrachten.", href: "/blog/zzp-website-laten-maken", link: "Gebruik de checklist voor je eerste website" },
    { q: "Kan een bestaande website worden meegenomen?", a: "Eerst bekijken we inhoud, functies, URL’s en toegang. Een verhuizing, herontwerp en technisch herstel zijn verschillende werkzaamheden. Welke onderdelen we behouden en wat apart nodig is, staat in de offerte.", href: "/contact?dienst=Website%20laten%20maken&van=%2Fveelgestelde-vragen", link: "Bespreek je bestaande website" },
  ] },
  { id: "beheer", title: "Beheer en onderhoud", questions: [
    { q: "Kan ik teksten en foto’s zelf aanpassen?", a: "Bij WordPress kun je inhoud beheren en krijg je uitleg over de afgesproken onderdelen. Maatwerk Start heeft geen CMS; Maatwerk Business bevat eenvoudig inhoudsbeheer. We kiezen de techniek op basis van jouw beheerwensen.", href: "/diensten/maatwerk-website", link: "Vergelijk maatwerk met en zonder inhoudsbeheer" },
    { q: "Is een onderhoudsabonnement verplicht?", a: `Nee. Bouw en onderhoud zijn aparte diensten. Je kunt updates zelf organiseren of WordPress Onderhoud kiezen voor ${maintenancePrice} per maand exclusief btw. Spreek ook zonder abonnement af wie updates en back-ups verzorgt.`, href: "/diensten/website-onderhoud", link: "Lees de onderhoudsvoorwaarden" },
    { q: "Valt iedere wijziging of storing onder onderhoud?", a: "Nee. WordPress Onderhoud bevat maximaal vijftien minuten kleine wijzigingen per maand; WooCommerce Onderhoud dertig minuten. Ongebruikte tijd schuift niet door. Grote reparaties, extra ontwikkeling en uitgebreid herstel krijgen een aparte beoordeling en offerte.", href: "/prijzen#onderhoud-pakketten", link: "Vergelijk de onderhoudspakketten" },
  ] },
  { id: "vindbaarheid", title: "Vindbaarheid en samenwerken", questions: [
    { q: "Staat mijn nieuwe website automatisch bovenaan in Google?", a: "Nee. Basis-SEO omvat de afgesproken technische en inhoudelijke inrichting. Google bepaalt of en waar een pagina verschijnt. Search Console helpt indexstatus, zoekopdrachten en klikken te onderzoeken; een sitemap of goede testscore garandeert geen positie.", href: "/blog/website-niet-in-google", link: "Lees het verschil tussen indexeren en ranken" },
    { q: "Hoe zien we of de website aanvragen oplevert?", a: "We spreken af welke contactacties relevant zijn. Vanaf WordPress Business hoort GA4-inrichting met de beschreven contactmeting bij het pakket, met aandacht voor toestemming. Een klik op telefoon of WhatsApp is iets anders dan een bevestigde aanvraag of een klant.", href: "/diensten/seo", link: "Bekijk de aanpak voor SEO en meten" },
    { q: "Waar kunnen we kennismaken?", a: "Ik ben Max en werk vanuit Utrecht-Zuilen. We kunnen online overleggen of een afspraak maken. Bezoek is op afspraak; vertel vooraf waarover je wilt spreken en welke website je nu hebt.", href: "/", link: "Website laten maken in Utrecht: werk en aanpak" },
  ] },
];

export default function FAQPage() {
  const schemas = [breadcrumbSchema([{ name: "Home", url: "https://techsolutionsutrecht.nl/" }, { name: "Veelgestelde vragen", url }]), faqPageSchema(groups.flatMap(g => g.questions.map(q => ({ question: q.q, answer: q.a }))))];
  return <>
    {schemas.map((schema, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}
    <main className="package-surface">
      <header className="package-container package-page-hero"><nav className="package-breadcrumb" aria-label="Kruimelpad"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Veelgestelde vragen</span></nav><h1 className="package-page-title">Vragen vóór en na je websiteproject</h1><p className="package-page-intro">Wat hoort bij de prijs, wat moet jij voorbereiden en wie regelt het beheer? Hier vind je de afspraken voor mijn websiteprojecten vanuit Utrecht-Zuilen, met links naar de volledige uitleg.</p></header>
      <nav className="package-container package-jump-links" aria-label="Kies een onderwerp">{groups.map(g => <a key={g.id} href={`#${g.id}`}>{g.title}</a>)}</nav>
      {groups.map(g => <section key={g.id} id={g.id} className="package-container service-faq scroll-mt-28"><h2>{g.title}</h2>{g.questions.map(q => <details key={q.q}><summary>{q.q}</summary><p>{q.a}</p><p><Link href={q.href} className="font-semibold text-[var(--color-primary)] underline underline-offset-4">{q.link}</Link></p></details>)}</section>)}
      <section className="service-consult"><div className="package-container"><h2>Staat jouw vraag er niet bij?</h2><p>Stuur je vraag en eventueel het adres van je huidige website. Je bespreekt het werk rechtstreeks met degene die de website bouwt.</p><Link href="/contact?van=%2Fveelgestelde-vragen" className="package-button">Neem contact op met Max</Link></div></section>
    </main><Footer />
  </>;
}
