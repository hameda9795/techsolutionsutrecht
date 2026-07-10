import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken Veenendaal | Freelance Webdeveloper | TechSolutions",
  description: "Website laten maken in Veenendaal? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/veenendaal" },
  openGraph: {
    title: "Website Laten Maken Veenendaal | Freelance Webdeveloper | TechSolutions",
    description: "Website laten maken in Veenendaal? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/veenendaal",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Veenendaal | Freelance Webdeveloper | TechSolutions",
    description: "Website laten maken in Veenendaal? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken.",
  },
};

export default function VeenendaalPage() {
  return (
    <CityPageLayout
      city="Veenendaal"
      slug="veenendaal"
      intro={[
        "Veenendaal is een van de ondernemendste plaatsen van de regio: een bruisend winkelhart dat meerdere keren is uitgeroepen tot beste binnenstad van Nederland, en tegelijk een serieuze ICT-hub met honderden digitale bedrijven. Wie hier onderneemt, weet dat online zichtbaarheid geen luxe is maar noodzaak.",
        "Ik bouw websites voor ondernemers in Veenendaal die meer willen dan een digitaal visitekaartje: een snelle, professionele site die klanten oplevert. Direct contact met de developer, transparante prijzen en binnen een week online.",
      ]}
      neighbourhoods={["het centrum en de Hoofdstraat", "Veenendaal-Oost", "Veenendaal-West", "bedrijventerrein De Batterijen", "bedrijventerrein Nijverkamp"]}
      whyLocal={[
        "In een stad met zoveel digitale bedrijvigheid als Veenendaal is de concurrentie online groot. Een website die technisch uitblinkt — snel, mobielvriendelijk en goed vindbaar — maakt hier het verschil tussen gevonden worden en overgeslagen worden.",
        "Ik richt je website in op lokale zoekopdrachten zoals 'webdesign Veenendaal' en koppel hem aan je Google Bedrijfsprofiel, zodat je zowel in de zoekresultaten als op de kaart zichtbaar bent voor klanten uit Veenendaal en de Gelderse Vallei.",
      ]}
      approach={[
        "We starten met een gesprek over je doelen en de klanten die je in Veenendaal en omgeving wilt bereiken.",
        "Je krijgt een transparante offerte op maat, zonder verborgen kosten.",
        "Tijdens de bouw kijk je mee via previews, zodat de website precies wordt wat je voor ogen had.",
        "Na livegang blijf ik beschikbaar voor onderhoud, updates en lokaal SEO-advies.",
      ]}
      localHighlight={{
        title: "Veenendaal: winkelstad én ICT-hub van de regio",
        content: [
          "Veenendaal combineert een sterk mkb-profiel met een opvallend digitale economie. De binnenstad trekt bezoekers uit de hele Gelderse Vallei, terwijl bedrijventerreinen als De Batterijen en Nijverkamp plaats bieden aan honderden bedrijven — van installateurs en bouwbedrijven tot softwarehuizen. Die mix maakt Veenendaal tot een plek waar een goede website zich snel terugverdient.",
          "Als freelance webdeveloper uit de regio Utrecht werk ik graag voor Veenendaalse ondernemers: de lijnen zijn kort, ik ben binnen twintig minuten ter plaatse voor een kennismaking, en je krijgt een website die past bij het ambitieuze karakter van deze stad.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook voor ondernemers in Veenendaal?",
          answer: "Zeker. Veenendaal ligt op korte afstand van Utrecht en ik werk regelmatig voor ondernemers in de Gelderse Vallei. Voor een kennismaking kom ik graag langs; het traject verloopt verder soepel via WhatsApp en e-mail.",
        },
        {
          question: "Hoe snel staat mijn website in Veenendaal online?",
          answer: "Een standaard website is doorgaans binnen 1 week online. Voor een webshop of maatwerkproject reken je op 2 tot 3 weken, afhankelijk van de wensen.",
        },
        {
          question: "Krijg ik ook hulp met vindbaarheid in Google?",
          answer: "Ja. Technische SEO is standaard inbegrepen en ik adviseer je over lokale SEO voor Veenendaal, zodat klanten uit je eigen omgeving je makkelijker vinden.",
        },
      ]}
    />
  );
}
