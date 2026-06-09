import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken Houten | Freelance Webdeveloper | TechSolutions",
  description: "Website laten maken in Houten? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/houten" },
};

export default function HoutenPage() {
  return (
    <CityPageLayout
      city="Houten"
      slug="houten"
      intro={[
        "Houten staat bekend als forensenstad én als plek met een verrassend groot aantal zelfstandigen en kleine bedrijven. Van de ondernemers rond Het Rond tot de vakmensen en adviseurs in Houten-Zuid: wie hier klanten zoekt, heeft baat bij een website die professioneel oogt en lokaal goed gevonden wordt.",
        "Ik bouw websites die passen bij de no-nonsense mentaliteit van Houten: helder, snel en betrouwbaar. Geen ingewikkelde trajecten, maar een site die doet wat hij moet doen — bezoekers omzetten in klanten.",
      ]}
      neighbourhoods={["Het Rond en het centrum", "Houten-Zuid", "De Slagen", "Schonauwen", "het Castellum"]}
      whyLocal={[
        "Houten heeft een eigen ritme en een hechte lokale economie. Veel ondernemers werken op aanbeveling, maar steeds meer klanten oriënteren zich eerst online. Een vindbare, overtuigende website zorgt dat je die zoekende klant in Houten ook daadwerkelijk bereikt.",
        "Ik richt je website technisch zo in dat Google snapt dat je actief bent in Houten en omgeving, en koppel hem aan je Google Bedrijfsprofiel zodat je ook op de kaart goed naar voren komt.",
      ]}
      approach={[
        "Een presentatiewebsite, een webshop of maatwerk — we kiezen de oplossing die het beste past bij jouw bedrijf in Houten.",
        "We starten met een gesprek over je doelen en doelgroep, zodat de website echt bijdraagt aan je omzet.",
        "Je krijgt een transparante offerte op maat, zonder verborgen kosten.",
        "Je kijkt tijdens de bouw mee via previews, zodat het eindresultaat precies klopt.",
        "Na de lancering verzorg ik desgewenst onderhoud, updates en SEO-ondersteuning.",
      ]}
      localHighlight={{
        title: "Houten: groeiende gemeente met ondernemersambitie",
        content: [
          "Houten is de afgelopen jaren enorm gegroeid — van een dorpse gemeente tot een volwaardige stad met een bloeiende economie. Het Rond vormt het sociale en commerciële middelpunt, terwijl wijken als Houten-Zuid, De Slagen en Schonauwen vol zitten met ZZP'ers, start-ups en gezinnen die hun eigen bedrijf runnen. Die groei vraagt om websites die meeschalen.",
          "Ik help ondernemers in Houten met webdesign dat past bij de no-nonsense cultuur van de stad: geen poespas, wel resultaat. Of je nu een lokale dienstverlener bent die klanten in Houten en omgeving wil bereiken, of een webshop hebt die verder wil groeien: ik bouw een site die technisch solide is en lokaal goed scoort. En omdat ik zelf in de regio werk, kan ik desgewenst snel ter plaatse zijn.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook voor kleine bedrijven en ZZP'ers in Houten?",
          answer: "Zeker. Een groot deel van mijn klanten zijn ZZP'ers en kleine ondernemers. Ik lever professionele websites zonder de overhead van een groot bureau, met direct contact met de developer.",
        },
        {
          question: "Hoe snel kan mijn website in Houten online staan?",
          answer: "Een standaard website is doorgaans binnen 1 week online. Webshops en maatwerkprojecten duren meestal 2 tot 3 weken, afhankelijk van de wensen.",
        },
        {
          question: "Krijg ik ook hulp met vindbaarheid in Google?",
          answer: "Ja. Technische SEO is standaard inbegrepen en ik adviseer je over lokale SEO voor Houten, zodat klanten uit je eigen omgeving je makkelijker vinden.",
        },
      ]}
    />
  );
}
