import type { Metadata } from "next";
import Link from "next/link";
import CityPageLayout from "@/components/CityPageLayout";

const title = "Webdesign Culemborg | Website laten maken, direct contact";
const description =
  "Webdesign in Culemborg: een WordPress website of webshop die lokaal goed vindbaar is. Direct contact met de developer en vooraf heldere afspraken over prijs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://techsolutionsutrecht.nl/culemborg" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/culemborg",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function CulemborgPage() {
  return (
    <CityPageLayout
      afterServices={
        <section className="py-16" aria-labelledby="webdesign-culemborg">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="webdesign-culemborg" className="text-3xl font-bold text-[var(--color-ink)] mb-4">Webdesign en webshops in Culemborg</h2>
            <p className="max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4">
              Voor ondernemers in Culemborg bouw ik WordPress websites op een bewezen ontwerpbasis die ik aanpas aan je huisstijl. Je krijgt een snelle, mobielvriendelijke website die je zelf kunt bijwerken, met pagina’s voor je diensten, je werk en een duidelijke manier om contact op te nemen.
            </p>
            <p className="max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4">
              Wil je ook online verkopen? Dan maak ik een WooCommerce-webshop met iDEAL, verzendopties en een bestelproces dat we vóór de oplevering samen testen. Voor de vindbaarheid in Culemborg zorg ik voor een heldere paginastructuur, lokale zoekwoorden en een koppeling met je Google Bedrijfsprofiel.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/diensten/wordpress" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">WordPress website laten maken</Link>
              <Link href="/diensten/webshop" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Webshop laten maken</Link>
              <Link href="/diensten/seo" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Beter vindbaar in Google</Link>
            </div>
          </div>
        </section>
      }
      city="Culemborg"
      slug="culemborg"
      intro={[
        "Culemborg, de historische vrijstad aan de Lek, heeft een eigenzinnig ondernemersklimaat: veel creatieve zelfstandigen, ambachtelijke bedrijven en een gezellige binnenstad met lokale winkels en horeca. Klanten vinden je hier via mond-tot-mondreclame — én steeds vaker via Google.",
        "Ik bouw websites voor ondernemers in Culemborg die hun persoonlijke aanpak ook online willen laten zien: een snelle, professionele site die past bij het karakter van je bedrijf en nieuwe klanten oplevert.",
      ]}
      neighbourhoods={["de binnenstad", "Parijsch", "Terweijde", "bedrijventerrein Pavijen", "de omgeving van de Lek"]}
      whyLocal={[
        "Culemborg heeft een hechte lokale gemeenschap: mensen gunnen elkaar wat en kiezen graag voor een ondernemer uit de buurt. Een website die dat lokale vertrouwen versterkt en goed vindbaar is in Culemborg en het Rivierenland, helpt je om van die gunfactor te profiteren.",
        "Ik richt je website in op lokale zoekopdrachten zoals 'webdesign Culemborg' en koppel hem aan je Google Bedrijfsprofiel, zodat je zowel in de zoekresultaten als op de kaart zichtbaar bent.",
      ]}
      approach={[
        "We starten met een gesprek over je doelen en de klanten die je in Culemborg en omgeving wilt bereiken.",
        "Je krijgt een transparante offerte op maat, zonder verborgen kosten.",
        "Tijdens de bouw kijk je mee via previews, zodat de website precies wordt wat je voor ogen had.",
        "Na livegang blijf ik beschikbaar voor onderhoud, updates en lokaal SEO-advies.",
      ]}
      localHighlight={{
        title: "Culemborg: vrijstad met ondernemersgeest",
        content: [
          "De historie als vrijstad zit Culemborg in het bloed: hier doen ondernemers het graag nét even anders. Van de speciaalzaken in de binnenstad tot de maakbedrijven op Pavijen en de vele zzp'ers in Parijsch en Terweijde — de stad barst van het zelfstandig ondernemerschap. Een goede website is voor deze ondernemers het verlengstuk van hun vakmanschap.",
          "Als freelance webdeveloper uit de regio Utrecht ben ik via de A2 zo in Culemborg voor een kennismaking. Je werkt met één vast aanspreekpunt dat je website bouwt, onderhoudt en laat meegroeien met je bedrijf.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook voor ondernemers in Culemborg?",
          answer: "Zeker. Culemborg ligt op korte afstand van Utrecht en ik werk graag voor ondernemers in het Rivierenland. Voor een kennismaking kom ik langs; het traject verloopt verder soepel via WhatsApp en e-mail.",
        },
        {
          question: "Hoe snel staat mijn website in Culemborg online?",
          answer: "De doorlooptijd hangt af van de omvang, functies en beschikbaarheid van de content. Na een korte intake ontvang je een duidelijke planning en spreken we vooraf een opleverdatum af.",
        },
        {
          question: "Krijg ik ook hulp met vindbaarheid in Google?",
          answer: "Ja. Technische SEO is standaard inbegrepen en ik adviseer je over lokale SEO voor Culemborg, zodat klanten uit je eigen omgeving je makkelijker vinden.",
        },
        {
          question: "Kun je ook een webshop maken voor mijn bedrijf in Culemborg?",
          answer: "Ja. Ik bouw WooCommerce-webshops met iDEAL, verzendopties en voorraadbeheer. We spreken vooraf af hoeveel producten ik invoer en welke functies nodig zijn, en je krijgt uitleg over het zelf verwerken van bestellingen.",
        },
      ]}
    />
  );
}
