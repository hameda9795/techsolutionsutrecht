import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken Nieuwegein | Freelance Webdeveloper | TechSolutions",
  description: "Website laten maken in Nieuwegein? Een ervaren freelance webdeveloper bouwt je snelle, responsive en SEO-klare website. Direct contact met de developer. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/nieuwegein" },
};

export default function NieuwegeinPage() {
  return (
    <CityPageLayout
      city="Nieuwegein"
      slug="nieuwegein"
      intro={[
        "Nieuwegein is een echte ondernemersstad: van de winkels en horeca rond City Plaza tot de talloze ZZP'ers en kleine bedrijven in Jutphaas, Galecop en Doorslag. Met Utrecht om de hoek is de concurrentie online stevig. Een professionele website die snel laadt en goed vindbaar is, helpt je om juist die klanten uit Nieuwegein zelf binnen te halen.",
        "Ik bouw websites die bij Nieuwegeinse ondernemers passen: nuchter, duidelijk en gericht op resultaat. Geen overbodige toeters en bellen, maar een site die bezoekers omzet in aanvragen en klanten.",
      ]}
      neighbourhoods={["City Plaza en het stadscentrum", "Jutphaas", "Galecop", "Doorslag", "Fokkesteeg", "Batau"]}
      whyLocal={[
        "Een lokale developer begrijpt hoe klanten in Nieuwegein zoeken. Iemand die een kapper, hovenier of adviseur in de buurt zoekt, gebruikt andere zoekwoorden dan iemand in een grote stad. Daar stem ik je website en teksten op af.",
        "Door de techniek netjes in te richten en lokale signalen correct te zetten, vergroot ik de kans dat je opvalt in de zoekresultaten voor Nieuwegein — gekoppeld aan je Google Bedrijfsprofiel voor extra zichtbaarheid op de kaart.",
      ]}
      approach={[
        "Of je nu een presentatiewebsite, een webshop of een maatwerkoplossing zoekt: we kiezen samen wat het beste werkt voor jouw bedrijf in Nieuwegein.",
        "We beginnen met een kort gesprek over je doelen, doelgroep en wensen.",
        "Je krijgt een transparante offerte op maat — geen verborgen kosten.",
        "Tijdens de bouw kijk je mee via previews zodat het resultaat precies klopt.",
        "Na livegang blijf ik bereikbaar voor onderhoud, updates en SEO-advies.",
      ]}
      localHighlight={{
        title: "Nieuwegein: een stad in beweging voor ondernemers",
        content: [
          "Nieuwegein is meer dan alleen een forenzenstad. Met City Plaza als commercieel hart en wijken als Jutphaas, Galecop en Doorslag heeft de stad een eigen, groeiende ondernemerscommunity. Van de zelfstandigen in het stadscentrum tot de techbedrijven en adviseurs in de nieuwere wijken: Nieuwegein heeft behoefte aan websites die net zo dynamisch zijn als de stad zelf.",
          "Als webdeveloper werk ik regelmatig voor klanten in Nieuwegein en ken ik de lokale markt. Ik weet dat klanten hier waarde hechten aan persoonlijk contact, snelle service en heldere afspraken — precies wat ik lever. Of je nu een winkel hebt bij City Plaza, een praktijk in Jutphaas of een adviesbureau in Batau: ik zorg voor een website die aansluit bij jouw doelgroep in Nieuwegein.",
        ],
      }}
      faqs={[
        {
          question: "Kom je ook langs in Nieuwegein?",
          answer: "Voor een kennismaking kom ik graag naar Nieuwegein. Omdat ik in de regio Utrecht werk, zijn de lijnen kort. De rest van het traject regelen we efficiënt via WhatsApp, e-mail en videobellen.",
        },
        {
          question: "Hoe snel staat mijn website in Nieuwegein online?",
          answer: "De doorlooptijd hangt af van de omvang, functies en beschikbaarheid van de content. Na een korte intake ontvang je een duidelijke planning en spreken we vooraf een opleverdatum af.",
        },
        {
          question: "Is SEO inbegrepen?",
          answer: "Ja, technische SEO-optimalisatie is standaard inbegrepen. Daarnaast adviseer ik je over lokale SEO voor Nieuwegein, zodat je beter gevonden wordt door klanten uit je eigen omgeving.",
        },
      ]}
    />
  );
}
