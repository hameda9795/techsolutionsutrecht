import type { Metadata } from "next";
import NichePageLayout from "@/components/NichePageLayout";

export const metadata: Metadata = {
  title: "Website voor coaches | Vertrouwen & aanmeldingen",
  description: "Website voor coaches: leg je aanbod en werkwijze uit en kies een passende contactroute. Vergelijk basispakketten en eventuele agenda-integratie.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/website-laten-maken-coach" },
  openGraph: {
    title: "Website voor coaches | Vertrouwen & aanmeldingen",
    description: "Website voor coaches: leg je aanbod en werkwijze uit en kies een passende contactroute. Vergelijk basispakketten en eventuele agenda-integratie.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/website-laten-maken-coach",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website voor coaches | Vertrouwen & aanmeldingen",
    description: "Website voor coaches: leg je aanbod en werkwijze uit en kies een passende contactroute. Vergelijk basispakketten en eventuele agenda-integratie.",
  },
};

export default function CoachPage() {
  return (
    <NichePageLayout
      niche="coaches"
      nicheTitle="Coach"
      h1={{ pre: "Website voor", highlight: "Coaches" }}
      heroImage={{
        src: "/images/website-voor-coaches-hero.webp",
        alt: "Website voor coaches: laptop met persoonlijke coachwebsite in een lichte, rustige praktijkruimte",
        width: 1344,
        height: 768,
      }}
      slug="website-laten-maken-coach"
      tagline="Een coachwebsite waarop bezoekers je aanbod en werkwijze kunnen beoordelen. Met een persoonlijke introductie, duidelijke trajecten en een passende manier om kennis te maken."
      intro={[
        "Als coach, therapeut of trainer verkoop je geen product, maar vertrouwen. Een potentiële klant moet voelen dat jij hem begrijpt voordat hij contact opneemt. Een website die dat vertrouwen niet uitstraalt, kost je waardevolle aanmeldingen — hoe goed je werk ook is.",
        "Ik bouw coachwebsites die persoonlijk en professioneel tegelijk zijn: een sterk verhaal, een heldere uitleg van je traject, ruimte voor ervaringen van klanten en een eenvoudige manier om een kennismaking in te plannen.",
      ]}
      problems={[
        "Bezoekers begrijpen niet precies wat je aanbiedt of voor wie.",
        "Je site voelt onpersoonlijk waardoor het klikt-gevoel ontbreekt.",
        "Er is geen makkelijke manier om een (gratis) kennismaking te plannen.",
        "Je wordt niet gevonden door mensen die zoeken op jouw specialisme.",
      ]}
      solutions={[
        "Een duidelijke positionering: wat doe je, voor wie en met welk resultaat.",
        "Een persoonlijke 'over mij'-pagina die vertrouwen en autoriteit opbouwt.",
        "Een eenvoudig aanmeld- of planformulier voor een kennismakingsgesprek.",
        "SEO gericht op jouw specialisme en regio, zodat de juiste mensen je vinden.",
      ]}
      mustHaves={[
        "Een sterke 'over mij'-pagina met jouw verhaal en expertise.",
        "Heldere uitleg van je trajecten, werkwijze en voor wie het bedoeld is.",
        "Ervaringen of testimonials van eerdere klanten (waar mogelijk).",
        "Een eenvoudig contact- of aanmeldformulier voor een kennismaking.",
        "Eventueel een blog om je expertise te laten zien en beter te scoren in Google.",
        "Rustig, professioneel design dat vertrouwen uitstraalt.",
      ]}
      scopeNote="De WordPress-pakketten bieden ruimte aan je afgesproken inhoud en een gewone contactmogelijkheid. Agenda-integratie, betalingen, een klantomgeving of meerdere talen zijn aparte functies. Een intake of boeking wordt niet automatisch onderdeel van de pakketprijs."
      preparation={[
        { title: "Voor wie is je traject?", detail: "Beschrijf je doelgroep, werkwijze, duur en wat iemand tijdens een kennismaking kan verwachten. Gebruik concrete uitleg en controleerbare ervaring in plaats van gegarandeerde resultaten." },
        { title: "Een passende eerste stap", detail: "Kies tussen een contactaanvraag, een duidelijke link naar je agenda of een extra boekingsintegratie. Bespreek of de afspraak direct vaststaat of eerst door jou wordt bevestigd." },
        { title: "Inhoud die je mag gebruiken", detail: "Verzamel je eigen foto, achtergrond en voorbeelden. Gebruik klantreacties alleen als je ze mag publiceren. Een eerste contactformulier hoeft geen uitgebreid persoonlijk dossier te verzamelen." },
      ]}
      faqs={[
        {
          question: "Ik wil persoonlijk overkomen, kan dat met een website?",
          answer: "Juist daar ligt de kracht. We besteden veel aandacht aan je verhaal, toon en beeldgebruik, zodat bezoekers het gevoel krijgen dat ze jou al een beetje kennen voordat ze contact opnemen.",
        },
        {
          question: "Kan ik een kennismakingsgesprek laten inplannen via de site?",
          answer: "Een gewoon contactformulier kan een aanvraag doorgeven. Voor direct boeken kiezen we apart een agenda-oplossing of koppeling, met een eigen scope en eventuele licentiekosten. We spreken ook af hoe en door wie de afspraak wordt bevestigd.",
        },
        {
          question: "Helpt een blog mij als coach?",
          answer: "Zeker. Met goede, relevante artikelen laat je je expertise zien en word je beter gevonden in Google op de onderwerpen waar jouw doelgroep naar zoekt. Ik kan de blog technisch en qua SEO voor je inrichten.",
        },
      ]}
    />
  );
}
