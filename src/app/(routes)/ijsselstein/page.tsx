import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken IJsselstein | Freelance Webdeveloper | TechSolutions",
  description: "Website laten maken in IJsselstein? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/ijsselstein" },
  openGraph: {
    title: "Website Laten Maken IJsselstein | Freelance Webdeveloper | TechSolutions",
    description: "Website laten maken in IJsselstein? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/ijsselstein",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken IJsselstein | Freelance Webdeveloper | TechSolutions",
    description: "Website laten maken in IJsselstein? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken.",
  },
};

export default function IJsselsteinPage() {
  return (
    <CityPageLayout
      city="IJsselstein"
      slug="ijsselstein"
      intro={[
        "IJsselstein is een stad met karakter: van de sfeervolle binnenstad rond de Sint-Nicolaaskerk tot de moderne woonwijken en bedrijventerreinen aan de rand. Ondernemers hier — of het nu gaat om de winkels in het centrum, de horeca aan de Hollandse IJssel of de zelfstandige professionals in de nieuwbouwwijken — hebben allemaal één ding gemeen: ze willen gevonden worden door lokale klanten.",
        "Ik bouw websites voor ondernemers in IJsselstein die willen opvallen in een markt die steeds digitaler wordt. Geen standaard templates, maar maatwerk dat past bij jouw bedrijf en bij de mensen die je wilt bereiken. Snel, vindbaar en betaalbaar.",
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
          answer: "Een standaard website is doorgaans binnen 1 week online. Voor een webshop of maatwerkproject reken je op 2 tot 3 weken, afhankelijk van de functionaliteiten.",
        },
        {
          question: "Is SEO inbegrepen voor IJsselstein?",
          answer: "Ja, technische SEO-optimalisatie is standaard inbegrepen. Daarnaast adviseer ik je over lokale SEO voor IJsselstein, zodat je beter gevonden wordt door klanten uit je eigen omgeving.",
        },
      ]}
    />
  );
}
