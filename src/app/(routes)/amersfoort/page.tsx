import type { Metadata } from "next";
import Link from "next/link";
import CityPageLayout from "@/components/CityPageLayout";

const title = "Website laten maken Amersfoort | Webdesign & webshops";
const description =
  "Website of webshop laten maken in Amersfoort? Webdesigner Max bouwt je WordPress website of WooCommerce webshop. Direct contact en vooraf een vaste prijs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://techsolutionsutrecht.nl/amersfoort" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/amersfoort",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
};

const linkClass = "font-semibold text-[var(--color-primary)] underline underline-offset-4";
const paragraphClass = "max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4";

export default function AmersfoortPage() {
  return (
    <CityPageLayout
      afterServices={
        <section className="py-16" aria-labelledby="webdesign-amersfoort">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="webdesign-amersfoort" className="text-3xl font-bold text-[var(--color-ink)] mb-4">
              Webdesign en webshops in Amersfoort
            </h2>
            <p className={paragraphClass}>
              Voor ondernemers in Amersfoort bouw ik WordPress websites op een bewezen ontwerpbasis die ik aanpas aan je huisstijl. Je krijgt een snelle, mobielvriendelijke website die je zelf kunt bijwerken, met duidelijke pagina’s voor je diensten en een eenvoudige manier om contact op te nemen.
            </p>
            <p className={paragraphClass}>
              Wil je online verkopen? Dan bouw ik een WooCommerce-webshop met iDEAL, verzendopties en productcategorieën die logisch zijn voor je klanten. Vóór de livegang doen we samen een testbestelling en je krijgt uitleg over het verwerken van bestellingen, zodat je de webshop daarna zelf beheert.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              <Link href="/diensten/wordpress" className={linkClass}>WordPress website laten maken</Link>
              <Link href="/diensten/webshop" className={linkClass}>Webshop laten maken</Link>
              <Link href="/prijzen" className={linkClass}>Pakketten en prijzen</Link>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Beter vindbaar in Amersfoort</h3>
            <p className={paragraphClass}>
              Elke website krijgt een technische SEO-basis: snelle laadtijd, een heldere paginastructuur en per pagina een duidelijk zoekthema. Wil je daarna gericht werken aan je vindbaarheid in Amersfoort, Leusden of Hoogland? Dan onderzoek ik welke zoekopdrachten je klanten gebruiken, verbeter ik je belangrijkste pagina’s en richt ik je Google Bedrijfsprofiel in.
            </p>
            <Link href="/diensten/seo" className={linkClass}>
              Bekijk de gratis SEO-scan en de SEO-pakketten
            </Link>
          </div>
        </section>
      }
      city="Amersfoort"
      slug="amersfoort"
      intro={[
        "Wil je een website of webshop laten maken voor je bedrijf in Amersfoort? Ik ben Max, freelance webdesigner en developer. Ik bouw WordPress-websites en WooCommerce-webshops die snel laden, goed werken op je telefoon en die je zelf kunt bijwerken.",
        "Je hebt direct contact met mij, van het eerste gesprek tot de oplevering. Er zit geen accountmanager tussen, je kijkt tijdens de bouw mee via previews en je krijgt vooraf een vaste offerte.",
      ]}
      neighbourhoods={["de binnenstad", "Vathorst", "Nieuwland", "Schothorst", "Kattenbroek", "Hoogland", "Hooglanderveen", "Leusden"]}
      whyLocal={[
        "Een website voor Amersfoort moet laten zien wat je doet en waar je werkt. Ik richt je pagina’s op de zoekopdrachten van klanten uit Amersfoort en omgeving, zoals je dienst met de plaatsnaam erbij, en noem duidelijk in welke wijken en plaatsen je actief bent.",
        "Werk je ook in Leusden, Hoogland of Stoutenburg? Dan nemen we die plaatsen op in de inhoud van je website en in je Google Bedrijfsprofiel, zodat je ook daar gevonden wordt.",
      ]}
      approach={[
        "Van een compacte bedrijfswebsite tot een webshop met tientallen producten: we kiezen samen wat past bij je bedrijf in Amersfoort.",
        "We bespreken eerst je diensten, je klanten en wat bezoekers op je website moeten doen.",
        "Je ontvangt een vaste offerte waarin staat welke pagina’s en functies je krijgt.",
        "Tijdens de bouw kijk je mee via previews en geef je feedback in vaste correctierondes.",
        "Na de livegang kan ik het onderhoud verzorgen: updates, back-ups en controle van je contactformulier of webshop.",
      ]}
      localHighlight={{
        title: "Werken met een webdesigner uit Utrecht",
        content: [
          "Ik werk vanuit Utrecht-Zuilen, ongeveer een half uur van Amersfoort. Het grootste deel van een websiteproject verloopt online: we overleggen via videobellen, WhatsApp en e-mail, en je bekijkt de voortgang via een previewlink. Zo kan het project snel doorlopen zonder dat je steeds afspraken hoeft te plannen.",
          "Wil je liever eerst persoonlijk kennismaken? Dan plannen we een afspraak in Amersfoort of in de omgeving. Ook voor ondernemers in Leusden, Hoogland en Hooglanderveen werk ik op dezelfde manier.",
        ],
      }}
      faqs={[
        {
          question: "Kun je een afspraak in Amersfoort inplannen?",
          answer: "Ja. Voor een kennismaking kom ik graag naar Amersfoort of de omgeving. De rest van het traject verloopt op afstand via videobellen, WhatsApp en e-mail, zodat het project snel doorloopt.",
        },
        {
          question: "Wat kost een website laten maken in Amersfoort?",
          answer: "Een WordPress website kost bij mij €300, €500 of €700 excl. btw, afhankelijk van het aantal pagina’s en functies. Een webshop begint bij €950 excl. btw. Hosting en domein komen daar los bij. Je krijgt vooraf een vaste offerte, zodat je precies weet wat je betaalt.",
        },
        {
          question: "Kun je ook een webshop maken voor mijn bedrijf in Amersfoort?",
          answer: "Ja. Ik bouw WooCommerce-webshops met iDEAL, verzendopties en productcategorieën. Vooraf spreken we af hoeveel producten ik invoer en welke functies je nodig hebt. Vóór de livegang doen we samen een testbestelling.",
        },
        {
          question: "Werk je ook voor ondernemers in Leusden en Hoogland?",
          answer: "Ja. Ik werk op dezelfde manier voor ondernemers in Leusden, Hoogland, Hooglanderveen en Stoutenburg. We overleggen online en plannen een afspraak op locatie als je dat prettig vindt.",
        },
        {
          question: "Zorg je ook dat ik in Amersfoort beter gevonden word?",
          answer: "Elke website krijgt een technische SEO-basis en een duidelijk zoekthema per pagina. Wil je daarna gericht werken aan je vindbaarheid in Amersfoort, dan kan dat met een van de SEO-pakketten of eerst met een gratis SEO-scan.",
        },
      ]}
    />
  );
}
