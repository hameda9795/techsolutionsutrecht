import type { Metadata } from "next";
import Link from "next/link";
import CityPageLayout from "@/components/CityPageLayout";

const title = "Website laten maken Houten | Webdesigner, direct contact";
const description =
  "Website laten maken in Houten? Webdesigner en webbouwer Max bouwt je WordPress website of webshop. Direct contact met de developer en vooraf een vaste prijs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://techsolutionsutrecht.nl/houten" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/houten",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
};

const linkClass = "font-semibold text-[var(--color-primary)] underline underline-offset-4";
const paragraphClass = "max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4";

export default function HoutenPage() {
  return (
    <CityPageLayout
      afterServices={
        <section className="py-16" aria-labelledby="webdesign-houten">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="webdesign-houten" className="text-3xl font-bold text-[var(--color-ink)] mb-4">
              Webdesign en webshops in Houten
            </h2>
            <p className={paragraphClass}>
              Als webdesigner en webbouwer voor Houten maak ik WordPress websites op een bewezen ontwerpbasis die ik aanpas aan je huisstijl. Je krijgt een snelle, mobielvriendelijke website met duidelijke pagina’s voor je diensten, die je daarna zelf kunt bijwerken.
            </p>
            <p className={paragraphClass}>
              Verkoop je producten? Dan bouw ik een WooCommerce-webshop met iDEAL en verzendopties. Vóór de livegang doen we samen een testbestelling, en je krijgt uitleg over het verwerken van bestellingen.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/diensten/wordpress" className={linkClass}>WordPress website laten maken</Link>
              <Link href="/diensten/webshop" className={linkClass}>Webshop laten maken</Link>
              <Link href="/prijzen" className={linkClass}>Pakketten en prijzen</Link>
            </div>
          </div>
        </section>
      }
      city="Houten"
      slug="houten"
      intro={[
        "Wil je een website laten maken voor je bedrijf in Houten? Ik ben Max, freelance webdesigner en developer uit Utrecht. Ik bouw WordPress-websites en webshops die snel laden, goed werken op je telefoon en die je zelf kunt bijwerken.",
        "Je hebt direct contact met mij, van het eerste gesprek tot de oplevering. Je kijkt tijdens de bouw mee via previews en je krijgt vooraf een vaste offerte.",
      ]}
      neighbourhoods={["Het Rond en het centrum", "Houten-Zuid", "De Slagen", "Schonauwen", "het Castellum"]}
      whyLocal={[
        "Klanten in Houten zoeken vaak op je dienst met de plaatsnaam erbij, zoals ‘hovenier Houten’ of ‘fysiotherapie Houten’. Ik richt je pagina’s op die zoekopdrachten en laat duidelijk zien in welke wijken en plaatsen je werkt.",
        "Daarnaast koppel ik je website aan je Google Bedrijfsprofiel, zodat je ook op de kaart beter zichtbaar bent voor klanten uit Houten en omgeving.",
      ]}
      approach={[
        "Van een compacte bedrijfswebsite tot een webshop: we kiezen samen wat past bij je bedrijf in Houten.",
        "We bespreken eerst je diensten, je klanten en wat bezoekers op je website moeten doen.",
        "Je ontvangt een vaste offerte waarin staat welke pagina’s en functies je krijgt.",
        "Tijdens de bouw kijk je mee via previews en geef je feedback in vaste correctierondes.",
        "Na de livegang kan ik het onderhoud verzorgen: updates, back-ups en controle van je formulieren.",
      ]}
      localHighlight={{
        title: "Werken met een webdesigner uit Utrecht",
        content: [
          "Ik werk vanuit Utrecht-Zuilen, ongeveer twintig minuten van Houten. Het grootste deel van een websiteproject verloopt online: we overleggen via videobellen, WhatsApp en e-mail, en je bekijkt de voortgang via een previewlink.",
          "Wil je liever eerst persoonlijk kennismaken? Dan plannen we een afspraak in Houten. Daarna kan het project snel doorlopen zonder dat je steeds afspraken hoeft te plannen.",
        ],
      }}
      faqs={[
        {
          question: "Wat kost een website laten maken in Houten?",
          answer: "Een WordPress website kost bij mij €300, €500 of €700 excl. btw, afhankelijk van het aantal pagina’s en functies. Een webshop begint bij €950 excl. btw. Hosting en domein komen daar los bij. Je krijgt vooraf een vaste offerte.",
        },
        {
          question: "Werk je ook voor kleine bedrijven en zzp'ers in Houten?",
          answer: "Ja. Ik bouw websites voor zzp'ers en kleine bedrijven, zonder de overhead van een groot bureau. Je hebt direct contact met de developer die je website bouwt.",
        },
        {
          question: "Kun je ook een webshop maken voor mijn bedrijf in Houten?",
          answer: "Ja. Ik bouw WooCommerce-webshops met iDEAL, verzendopties en productcategorieën. Vooraf spreken we af hoeveel producten ik invoer en welke functies je nodig hebt.",
        },
        {
          question: "Krijg ik ook hulp met vindbaarheid in Google?",
          answer: "Ja. Elke website krijgt een technische SEO-basis en een duidelijk zoekthema per pagina. Wil je daarna gericht werken aan je vindbaarheid in Houten, dan kan dat met een van de SEO-pakketten.",
        },
      ]}
    />
  );
}
