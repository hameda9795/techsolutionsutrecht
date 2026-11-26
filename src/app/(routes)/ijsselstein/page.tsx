import type { Metadata } from "next";
import Link from "next/link";
import CityPageLayout from "@/components/CityPageLayout";

const title = "Website laten maken IJsselstein | Webdesigner & SEO";
const description =
  "Website laten maken in IJsselstein? Webdesigner Max bouwt je website, helpt met hosting en zorgt voor lokale SEO. Direct contact en vooraf heldere afspraken.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://techsolutionsutrecht.nl/ijsselstein" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/ijsselstein",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function IJsselsteinPage() {
  return (
    <CityPageLayout
      afterServices={
        <section className="py-16" aria-labelledby="webdesign-ijsselstein">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="webdesign-ijsselstein" className="text-3xl font-bold text-[var(--color-ink)] mb-4">Webdesign, hosting en SEO in IJsselstein</h2>
            <p className="max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4">
              Als webdesigner voor IJsselstein bouw ik je website van ontwerp tot livegang. Je spreekt direct met mij, niet met een accountmanager, en je kijkt tijdens de bouw mee via previews.
            </p>
            <p className="max-w-3xl text-[var(--color-muted)] leading-relaxed mb-4">
              Hosting en domein staan los van de bouwprijs. Ik help je een geschikte hosting te kiezen, zet de website daar live en kan het technische onderhoud daarna verzorgen. Voor SEO in IJsselstein richt ik de pagina’s op de zoekopdrachten van klanten uit IJsselstein en omgeving en koppel ik je Google Bedrijfsprofiel.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/diensten/website-laten-maken" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Website laten maken</Link>
              <Link href="/diensten/website-onderhoud" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Website onderhoud en beheer</Link>
              <Link href="/diensten/seo" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">SEO uitbesteden</Link>
            </div>
          </div>
        </section>
      }
      city="IJsselstein"
      slug="ijsselstein"
      intro={[
        "IJsselstein is een stad met karakter: van de sfeervolle binnenstad rond de Sint-Nicolaaskerk tot de moderne woonwijken en bedrijventerreinen aan de rand. Ondernemers hier — of het nu gaat om de winkels in het centrum, de horeca aan de Hollandse IJssel of de zelfstandige professionals in de nieuwbouwwijken — hebben allemaal één ding gemeen: ze willen gevonden worden door lokale klanten.",
        "Ik bouw websites voor ondernemers in IJsselstein die hun bedrijf online duidelijk willen presenteren. Je kiest een WordPress-pakket met een ontwerpbasis aangepast aan je huisstijl, of een apart maatwerktraject. Inhoud, functies en prijs spreken we vooraf af.",
      ]}
      neighbourhoods={["de historische binnenstad", "Achterveld", "Zenderpark", "Binnenstad-Oost", "Nieuwland", "Kromme Gouwe"]}
      whyLocal={[
        "IJsselstein heeft een hechte lokale gemeenschap waar mond-tot-mondreclame nog altijd belangrijk is. Tegelijkertijd zoeken steeds meer mensen online naar een kapper, hovenier of adviseur 'in de buurt'. Een professionele website zorgt dat je zichtbaar bent op het moment dat iemand je nodig heeft.",
        "Ik richt je website technisch zo in dat Google begrijpt dat je actief bent in IJsselstein. Door lokale zoekwoorden, een correct ingericht Google Bedrijfsprofiel en schone code vergroot je de kans dat je opduikt wanneer iemand in IJsselstein zoekt naar wat jij aanbiedt.",
      ]}
      approach={[
        "We beginnen met een kort gesprek over jouw doelen, je doelgroep in IJsselstein en wat je website moet opleveren.",
        "Je krijgt een transparante offerte op maat — geen verborgen kosten of verrassingen achteraf.",
        "Ik bouw de website en jij krijgt tussentijds previews, zodat het resultaat precies klopt.",
        "Na livegang blijf ik bereikbaar voor onderhoud, updates en SEO-advies gericht op IJsselstein.",
      ]}
      localHighlight={{
        title: "IJsselstein: karakteristiek ondernemerschap aan de Hollandse IJssel",
        content: [
          "IJsselstein mag dan relatief compact zijn, de ondernemerscommunity is er des te hechter. De binnenstad trekt bezoekers met zijn unieke mix van historische panden en moderne winkels, terwijl de wijken eromheen vol zitten met zelfstandigen die het grootste deel van hun werkzaamheden online regelen. Van de ondernemers aan de Benschopperpoort tot de dienstverleners in Zenderpark: ieder heeft een eigen verhaal dat verteld moet worden.",
          "Ik help ondernemers in IJsselstein met webdesign dat past bij die persoonlijke aanpak. Geen anonieme bureaus of lange wachttijden, maar direct contact met de developer die aan je site werkt. Of je nu een winkel hebt in het centrum of een zzp-praktijk runt vanuit huis: ik zorg voor een website die IJsselstein herkent en je klanten overtuigt.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook voor ondernemers in IJsselstein?",
          answer: "Zeker. Ik bouw websites voor zzp'ers en kleine bedrijven in heel IJsselstein en omgeving. De lijnen zijn kort omdat ik in de regio Utrecht werk, en voor een kennismaking kom ik graag langs.",
        },
        {
          question: "Hoe snel staat mijn website in IJsselstein online?",
          answer: "De doorlooptijd hangt af van de omvang, functies en beschikbaarheid van de content. Na een korte intake ontvang je een duidelijke planning en spreken we vooraf een opleverdatum af.",
        },
        {
          question: "Is SEO inbegrepen voor IJsselstein?",
          answer: "Ja, technische SEO-optimalisatie is standaard inbegrepen. Daarnaast adviseer ik je over lokale SEO voor IJsselstein, zodat je beter gevonden wordt door klanten uit je eigen omgeving.",
        },
        {
          question: "Regel je ook de hosting van mijn website in IJsselstein?",
          answer: "Hosting en domein staan los van de bouwprijs. Ik help je een geschikte hostingpartij en domeinnaam te kiezen, zet de website daar live en kan het technische onderhoud verzorgen met een onderhoudspakket.",
        },
      ]}
    />
  );
}
