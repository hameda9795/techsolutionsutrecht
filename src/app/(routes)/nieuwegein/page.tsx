import type { Metadata } from "next";
import Link from "next/link";
import CityPageLayout from "@/components/CityPageLayout";

const title = "Website laten maken Nieuwegein | Webdesign & webshops";
const description =
  "Website of webshop laten maken in Nieuwegein? Webdesigner Max bouwt je WordPress website of WooCommerce webshop. Direct contact en vooraf een vaste prijs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://techsolutionsutrecht.nl/nieuwegein" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/nieuwegein",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
};

const linkClass = "font-semibold text-[var(--color-primary)] underline underline-offset-4";
const paragraphClass = "max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4";

export default function NieuwegeinPage() {
  return (
    <CityPageLayout
      afterServices={
        <section className="py-16" aria-labelledby="webdesign-nieuwegein">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="webdesign-nieuwegein" className="text-3xl font-bold text-[var(--color-ink)] mb-4">
              Webdesign en webshops in Nieuwegein
            </h2>
            <p className={paragraphClass}>
              Voor ondernemers in Nieuwegein bouw ik WordPress websites op een bewezen ontwerpbasis die ik aanpas aan je huisstijl. Je krijgt een snelle, mobielvriendelijke website met duidelijke pagina’s voor je diensten, die je daarna zelf kunt bijwerken.
            </p>
            <p className={paragraphClass}>
              Wil je online verkopen? Dan bouw ik een WooCommerce-webshop met iDEAL en verzendopties. Vóór de livegang doen we samen een testbestelling en je krijgt uitleg over het verwerken van bestellingen.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              <Link href="/diensten/wordpress" className={linkClass}>WordPress website laten maken</Link>
              <Link href="/diensten/webshop" className={linkClass}>Webshop laten maken</Link>
              <Link href="/prijzen" className={linkClass}>Pakketten en prijzen</Link>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Beter vindbaar in Nieuwegein</h3>
            <p className={paragraphClass}>
              Elke website krijgt een technische SEO-basis: snelle laadtijd, een heldere paginastructuur en per pagina een duidelijk zoekthema. Wil je daarna gericht werken aan je vindbaarheid in Nieuwegein, dan onderzoek ik welke zoekopdrachten je klanten gebruiken, verbeter ik je belangrijkste pagina’s en richt ik je Google Bedrijfsprofiel in.
            </p>
            <Link href="/diensten/seo" className={linkClass}>
              Bekijk de gratis SEO-scan en de SEO-pakketten
            </Link>
          </div>
        </section>
      }
      city="Nieuwegein"
      slug="nieuwegein"
      intro={[
        "Wil je een website of webshop laten maken voor je bedrijf in Nieuwegein? Ik ben Max, freelance webdesigner en developer uit Utrecht. Ik bouw WordPress-websites en WooCommerce-webshops die snel laden, goed werken op je telefoon en die je zelf kunt bijwerken.",
        "Je hebt direct contact met mij, van het eerste gesprek tot de oplevering. Er zit geen accountmanager tussen, je kijkt tijdens de bouw mee via previews en je krijgt vooraf een vaste offerte.",
      ]}
      neighbourhoods={["City Plaza en het stadscentrum", "Jutphaas", "Galecop", "Doorslag", "Fokkesteeg", "Batau"]}
      whyLocal={[
        "Iemand die een kapper, hovenier of adviseur in Nieuwegein zoekt, typt meestal de dienst met de plaatsnaam erbij. Ik richt je pagina’s op die zoekopdrachten en laat duidelijk zien in welke wijken je werkt.",
        "Daarnaast koppel ik je website aan je Google Bedrijfsprofiel, zodat je ook op de kaart beter zichtbaar bent voor klanten uit Nieuwegein.",
      ]}
      approach={[
        "Van een compacte bedrijfswebsite tot een webshop: we kiezen samen wat het beste werkt voor jouw bedrijf in Nieuwegein.",
        "We beginnen met een kort gesprek over je diensten, je klanten en wat bezoekers op je website moeten doen.",
        "Je krijgt een vaste offerte waarin staat welke pagina’s en functies je krijgt.",
        "Tijdens de bouw kijk je mee via previews en geef je feedback in vaste correctierondes.",
        "Na livegang kan ik het onderhoud verzorgen: updates, back-ups en controle van je formulieren of webshop.",
      ]}
      localHighlight={{
        title: "Werken met een webdesigner uit Utrecht",
        content: [
          "Ik werk vanuit Utrecht-Zuilen, ongeveer een kwartier van Nieuwegein. Het grootste deel van een websiteproject verloopt online: we overleggen via videobellen, WhatsApp en e-mail, en je bekijkt de voortgang via een previewlink.",
          "Wil je liever eerst persoonlijk kennismaken? Dan plannen we een afspraak in Nieuwegein. Of je nu een winkel hebt bij City Plaza, een praktijk in Jutphaas of een adviesbureau in Batau: je spreekt steeds met dezelfde persoon.",
        ],
      }}
      faqs={[
        {
          question: "Kom je ook langs in Nieuwegein?",
          answer: "Voor een kennismaking kom ik graag naar Nieuwegein. De rest van het traject regelen we via videobellen, WhatsApp en e-mail, zodat het project snel doorloopt.",
        },
        {
          question: "Wat kost een website laten maken in Nieuwegein?",
          answer: "Een WordPress website kost bij mij €300, €500 of €700 excl. btw, afhankelijk van het aantal pagina’s en functies. Een webshop begint bij €950 excl. btw. Hosting en domein komen daar los bij. Je krijgt vooraf een vaste offerte.",
        },
        {
          question: "Kun je ook een webshop maken voor mijn bedrijf in Nieuwegein?",
          answer: "Ja. Ik bouw WooCommerce-webshops met iDEAL, verzendopties en productcategorieën. Vooraf spreken we af hoeveel producten ik invoer en welke functies je nodig hebt. Vóór de livegang doen we samen een testbestelling.",
        },
        {
          question: "Is SEO inbegrepen?",
          answer: "Elke website krijgt een technische SEO-basis en een duidelijk zoekthema per pagina. Wil je daarna gericht werken aan je vindbaarheid in Nieuwegein, dan kan dat met een van de SEO-pakketten of eerst met een gratis SEO-scan.",
        },
      ]}
    />
  );
}
