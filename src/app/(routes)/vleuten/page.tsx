import type { Metadata } from "next";
import Link from "next/link";
import CityPageLayout from "@/components/CityPageLayout";

const title = "Website laten maken Vleuten | Webdesigner, direct contact";
const description =
  "Website laten maken in Vleuten? Webdesigner Max uit Utrecht bouwt je snelle WordPress website of webshop. Direct contact en vooraf heldere afspraken.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://techsolutionsutrecht.nl/vleuten" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/vleuten",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
};

const linkClass = "font-semibold text-[var(--color-primary)] underline underline-offset-4";
const paragraphClass = "max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4";

export default function VleutenPage() {
  return (
    <CityPageLayout
      afterServices={
        <section className="py-16" aria-labelledby="webdesign-vleuten">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="webdesign-vleuten" className="text-3xl font-bold text-[var(--color-ink)] mb-4">
              Webdesign en webshops in Vleuten
            </h2>
            <p className={paragraphClass}>
              Voor ondernemers in Vleuten bouw ik WordPress websites die snel laden, goed werken op je telefoon en die je zelf kunt bijwerken. Verkoop je producten, dan bouw ik een WooCommerce-webshop met iDEAL en verzendopties.
            </p>
            <p className={paragraphClass}>
              Zit je bedrijf in De Meern of Leidsche Rijn? Lees dan ook mijn pagina over{" "}
              <Link href="/de-meern" className={linkClass}>website laten maken in De Meern</Link>.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/diensten/wordpress" className={linkClass}>WordPress website laten maken</Link>
              <Link href="/diensten/webshop" className={linkClass}>Webshop laten maken</Link>
              <Link href="/prijzen" className={linkClass}>Pakketten en prijzen</Link>
            </div>
          </div>
        </section>
      }
      city="Vleuten"
      slug="vleuten"
      intro={[
        "Vleuten is een dorp met een eigen identiteit binnen de gemeente Utrecht. Van de winkels en horeca rond het centrum tot de zzp'ers en kleine bedrijven in de woonwijken: ondernemers in Vleuten draaien vaak op persoonlijk contact en betrouwbaarheid.",
        "Ik bouw websites voor ondernemers in Vleuten die die persoonlijke aanpak ook online willen laten zien. Je hebt direct contact met mij, je kijkt mee tijdens de bouw en je krijgt vooraf een vaste offerte.",
      ]}
      neighbourhoods={["het dorpscentrum", "Vleuterweide", "Haarzuilens", "Rijnhuizen"]}
      whyLocal={[
        "Mensen in Vleuten kopen en werken graag in de buurt. Een website die laat zien dat je lokaal actief bent en technisch goed vindbaar is in Vleuten en omgeving, helpt je om die klanten te bereiken.",
        "Ik richt je website in op lokale zoekopdrachten, zoals je dienst met ‘Vleuten’ erbij, en koppel hem aan je Google Bedrijfsprofiel zodat je ook op de kaart zichtbaar bent.",
      ]}
      approach={[
        "We starten met een gesprek over je doelen en de klanten die je in Vleuten en omgeving wilt bereiken.",
        "Je krijgt een vaste offerte waarin staat welke pagina’s en functies je krijgt.",
        "Tijdens de bouw kijk je mee via previews, zodat je website precies wordt wat je voor ogen had.",
        "Na livegang kan ik het onderhoud verzorgen: updates, back-ups en lokaal SEO-advies.",
      ]}
      localHighlight={{
        title: "Vleuten: dorps ondernemen dicht bij Utrecht",
        content: [
          "Vleuten combineert een eigen dorpscentrum met de nabijheid van Utrecht. De winkelstraat, de weekmarkt en de lokale initiatieven maken het een plek waar veel kleine ondernemers actief zijn, van winkels tot zzp'ers die vanuit Vleuterweide werken.",
          "Ik werk vanuit Utrecht-Zuilen, ongeveer een kwartier van Vleuten. We overleggen online en via WhatsApp, en voor een kennismaking kom ik graag langs.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook voor ondernemers in Vleuten?",
          answer: "Ja. Ik bouw websites voor zzp'ers en kleine bedrijven in Vleuten en de omliggende wijken. Voor een kennismaking kom ik graag langs, en het traject verloopt verder via videobellen, WhatsApp en e-mail.",
        },
        {
          question: "Wat kost een website laten maken in Vleuten?",
          answer: "Een WordPress website kost bij mij €300, €500 of €700 excl. btw, afhankelijk van het aantal pagina’s en functies. Een webshop begint bij €950 excl. btw. Hosting en domein komen daar los bij.",
        },
        {
          question: "Hoe snel staat mijn website in Vleuten online?",
          answer: "De doorlooptijd hangt af van de omvang, functies en beschikbaarheid van de content. Na een korte intake ontvang je een duidelijke planning en spreken we vooraf een opleverdatum af.",
        },
        {
          question: "Krijg ik ook hulp met vindbaarheid in Google?",
          answer: "Ja. Technische SEO is standaard inbegrepen en ik adviseer je over lokale SEO voor Vleuten, zodat klanten uit je eigen omgeving je makkelijker vinden.",
        },
      ]}
    />
  );
}
