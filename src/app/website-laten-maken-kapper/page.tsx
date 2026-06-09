import type { Metadata } from "next";
import NichePageLayout from "@/components/NichePageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken voor Kappers | Online Afspraken | TechSolutions",
  description: "Website laten maken voor je kapsalon? Een professionele site met online afsprakenmodule, prijzen en reviews. Meer boekingen, minder telefoontjes. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/website-laten-maken-kapper" },
  openGraph: {
    title: "Website Laten Maken voor Kappers | Online Afspraken | TechSolutions",
    description: "Website laten maken voor je kapsalon? Een professionele site met online afsprakenmodule, prijzen en reviews. Meer boekingen, minder telefoontjes.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/website-laten-maken-kapper",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken voor Kappers | Online Afspraken | TechSolutions",
    description: "Website laten maken voor je kapsalon? Een professionele site met online afsprakenmodule, prijzen en reviews. Meer boekingen, minder telefoontjes.",
  },
};

export default function KapperPage() {
  return (
    <NichePageLayout
      niche="kappers"
      nicheTitle="Kapper"
      slug="website-laten-maken-kapper"
      tagline="Een kapsalonwebsite die de telefoon laat rusten en je agenda vult — met online afspraken, een duidelijke prijslijst en sfeervolle foto's van je werk."
      intro={[
        "Voor een kapper draait alles om vertrouwen en gemak. Klanten willen snel zien wat je doet, wat het kost en wanneer ze terechtkunnen. Een verouderde of ontbrekende website betekent gemiste boekingen — zeker nu bijna iedereen eerst op zijn telefoon kijkt voordat hij een salon kiest.",
        "Ik bouw kapsalonwebsites die er strak uitzien én praktisch zijn: een online afsprakenmodule, je openingstijden, je prijzen en een galerij met je beste resultaten. Zo verlies je minder tijd aan telefoontjes en win je meer klanten.",
      ]}
      problems={[
        "Klanten bellen voor een afspraak terwijl je net iemand aan het knippen bent.",
        "Je staat niet of nauwelijks in Google als mensen 'kapper in de buurt' zoeken.",
        "Je hebt geen plek om je prijzen en openingstijden te tonen.",
        "Mooie resultaten deel je alleen op social media, niet op een eigen site.",
      ]}
      solutions={[
        "Een online afsprakenmodule waarmee klanten 24/7 zelf boeken.",
        "Lokale SEO zodat je opvalt bij zoekopdrachten in jouw stad of wijk.",
        "Een heldere prijslijst en openingstijden, altijd up-to-date.",
        "Een sfeervolle galerij die jouw stijl en vakmanschap laat zien.",
      ]}
      mustHaves={[
        "Online afspraken maken (koppeling met je agenda of een boekingssysteem).",
        "Mobiel-first design — de meeste klanten boeken vanaf hun telefoon.",
        "Duidelijke prijslijst voor knippen, kleuren en behandelingen.",
        "Foto's van je salon en je beste resultaten in een nette galerij.",
        "Reviews of een koppeling met je Google-beoordelingen voor vertrouwen.",
        "Lokale SEO en een gekoppeld Google Bedrijfsprofiel voor de kaart.",
      ]}
      faqs={[
        {
          question: "Kan ik klanten online een afspraak laten maken?",
          answer: "Ja. Ik integreer een afsprakenmodule of koppel je website aan een bestaand boekingssysteem, zodat klanten 24/7 zelf een afspraak kunnen inplannen en jij minder gebeld wordt.",
        },
        {
          question: "Word ik dan beter gevonden door klanten in de buurt?",
          answer: "Daar richt ik je site op in. Met lokale SEO en een correct ingericht Google Bedrijfsprofiel vergroot je de kans dat je opduikt wanneer iemand in jouw omgeving een kapper zoekt.",
        },
        {
          question: "Hoe snel is mijn kapsalonwebsite klaar?",
          answer: "Een nette salonwebsite is doorgaans binnen 1 tot 2 weken online, afhankelijk van de afsprakenfunctie en hoe snel je foto's en teksten aanlevert.",
        },
      ]}
    />
  );
}
