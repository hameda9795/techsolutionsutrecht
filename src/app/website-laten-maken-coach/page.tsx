import type { Metadata } from "next";
import NichePageLayout from "@/components/NichePageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken voor Coaches | Vertrouwen & Aanmeldingen | TechSolutions",
  description: "Website laten maken als coach of therapeut? Een persoonlijke site die vertrouwen wekt, je aanpak uitlegt en aanmeldingen oplevert. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/website-laten-maken-coach" },
};

export default function CoachPage() {
  return (
    <NichePageLayout
      niche="coaches"
      nicheTitle="Coach"
      slug="website-laten-maken-coach"
      tagline="Een coachwebsite die vertrouwen wekt: jouw verhaal, je aanpak en concrete resultaten — zo overtuig je bezoekers om de eerste stap te zetten en zich aan te melden."
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
      faqs={[
        {
          question: "Ik wil persoonlijk overkomen, kan dat met een website?",
          answer: "Juist daar ligt de kracht. We besteden veel aandacht aan je verhaal, toon en beeldgebruik, zodat bezoekers het gevoel krijgen dat ze jou al een beetje kennen voordat ze contact opnemen.",
        },
        {
          question: "Kan ik een kennismakingsgesprek laten inplannen via de site?",
          answer: "Ja. Ik voeg een aanmeld- of planformulier toe, eventueel gekoppeld aan je agenda, zodat geïnteresseerden direct een (gratis) kennismaking kunnen boeken.",
        },
        {
          question: "Helpt een blog mij als coach?",
          answer: "Zeker. Met goede, relevante artikelen laat je je expertise zien en word je beter gevonden in Google op de onderwerpen waar jouw doelgroep naar zoekt. Ik kan de blog technisch en qua SEO voor je inrichten.",
        },
      ]}
    />
  );
}
