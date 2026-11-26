import type { Metadata } from "next";
import Link from "next/link";
import CityPageLayout from "@/components/CityPageLayout";

const title = "Website laten maken Woerden | Webdesign, ook in Harmelen";
const description =
  "Website laten maken in Woerden of Harmelen? Webdesigner Max bouwt je WordPress website of webshop en zorgt voor lokale SEO. Direct contact en een vaste prijs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://techsolutionsutrecht.nl/woerden" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/woerden",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
};

const linkClass = "font-semibold text-[var(--color-primary)] underline underline-offset-4";
const paragraphClass = "max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4";

export default function WoerdenPage() {
  return (
    <CityPageLayout
      afterServices={
        <section className="py-16" aria-labelledby="webdesign-woerden">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="webdesign-woerden" className="text-3xl font-bold text-[var(--color-ink)] mb-4">
              Webdesign en WordPress in Woerden
            </h2>
            <p className={paragraphClass}>
              Voor ondernemers in Woerden bouw ik WordPress websites op een bewezen ontwerpbasis die ik aanpas aan je huisstijl. Je kunt de teksten en foto’s daarna zelf bijwerken. Verkoop je producten, dan bouw ik een WooCommerce-webshop met iDEAL en verzendopties.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              <Link href="/diensten/wordpress" className={linkClass}>WordPress website laten maken</Link>
              <Link href="/diensten/webshop" className={linkClass}>Webshop laten maken</Link>
              <Link href="/prijzen" className={linkClass}>Pakketten en prijzen</Link>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Ook voor Harmelen, Kamerik en Waarder</h3>
            <p className={paragraphClass}>
              Werk je vanuit Harmelen, Kamerik, Zegveld of Waarder? Dan werk ik op dezelfde manier: we overleggen online en plannen een afspraak op locatie als je dat prettig vindt. Bedien je klanten in meerdere kernen, dan nemen we die plaatsen op in je website en je Google Bedrijfsprofiel.
            </p>
            <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4 mt-8">Beter vindbaar in Woerden</h3>
            <p className={paragraphClass}>
              Elke website krijgt een technische SEO-basis: snelle laadtijd, een heldere paginastructuur en per pagina een duidelijk zoekthema. Wil je daarna gericht werken aan je vindbaarheid in Woerden, dan onderzoek ik welke zoekopdrachten je klanten gebruiken en verbeter ik je belangrijkste pagina’s.
            </p>
            <Link href="/diensten/seo" className={linkClass}>
              Bekijk de gratis SEO-scan en de SEO-pakketten
            </Link>
          </div>
        </section>
      }
      city="Woerden"
      slug="woerden"
      intro={[
        "Wil je een website laten maken voor je bedrijf in Woerden? Ik ben Max, freelance webdesigner en developer uit Utrecht. Ik bouw WordPress-websites en webshops die snel laden, goed werken op je telefoon en die je zelf kunt bijwerken.",
        "Je hebt direct contact met mij, van het eerste gesprek tot de oplevering. Je kijkt tijdens de bouw mee via previews en je krijgt vooraf een vaste offerte.",
      ]}
      neighbourhoods={["de binnenstad", "Snel en Polanen", "Molenvliet", "bedrijventerrein Middelland", "Harmelen", "Kamerik"]}
      whyLocal={[
        "Ondernemers in Woerden bedienen vaak klanten uit de hele omgeving, van Harmelen tot Kamerik. Ik richt je pagina’s op de zoekopdrachten van die klanten, zoals je dienst met de plaatsnaam erbij.",
        "Daarnaast koppel ik je website aan je Google Bedrijfsprofiel, zodat je zichtbaar bent voor klanten uit Woerden en de omliggende kernen.",
      ]}
      approach={[
        "We starten met een gesprek over je doelen en de klanten die je in Woerden en omgeving wilt bereiken.",
        "Je krijgt een vaste offerte waarin staat welke pagina’s en functies je krijgt.",
        "Tijdens de bouw kijk je mee via previews, zodat de website precies wordt wat je voor ogen had.",
        "Na livegang kan ik het onderhoud verzorgen: updates, back-ups en lokaal SEO-advies.",
      ]}
      localHighlight={{
        title: "Werken met een webdesigner uit Utrecht",
        content: [
          "Ik werk vanuit Utrecht-Zuilen, ongeveer 25 minuten van Woerden. Het grootste deel van een websiteproject verloopt online: we overleggen via videobellen, WhatsApp en e-mail, en je bekijkt de voortgang via een previewlink.",
          "Wil je liever eerst persoonlijk kennismaken? Dan plannen we een afspraak in Woerden of in de omgeving. Je krijgt geen anoniem bureau maar één aanspreekpunt, die je website bouwt en daarna kan onderhouden.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook voor ondernemers in Woerden?",
          answer: "Ja. Woerden ligt op korte afstand van Utrecht en ik werk ook voor ondernemers in het Groene Hart. Voor een kennismaking kom ik graag langs; het traject verloopt verder via videobellen, WhatsApp en e-mail.",
        },
        {
          question: "Wat kost een website laten maken in Woerden?",
          answer: "Een WordPress website kost bij mij €300, €500 of €700 excl. btw, afhankelijk van het aantal pagina’s en functies. Een webshop begint bij €950 excl. btw. Hosting en domein komen daar los bij. Je krijgt vooraf een vaste offerte.",
        },
        {
          question: "Maak je ook websites voor bedrijven in Harmelen en Kamerik?",
          answer: "Ja. Ik werk op dezelfde manier voor ondernemers in Harmelen, Kamerik, Zegveld en Waarder. We overleggen online en plannen een afspraak op locatie als je dat prettig vindt.",
        },
        {
          question: "Krijg ik ook hulp met vindbaarheid in Google?",
          answer: "Ja. Elke website krijgt een technische SEO-basis en een duidelijk zoekthema per pagina. Wil je daarna gericht werken aan je vindbaarheid in Woerden, dan kan dat met een van de SEO-pakketten of eerst met een gratis SEO-scan.",
        },
      ]}
    />
  );
}
