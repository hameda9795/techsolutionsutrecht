import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken Woerden | Freelance Webdeveloper | TechSolutions",
  description: "Website laten maken in Woerden? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/woerden" },
  openGraph: {
    title: "Website Laten Maken Woerden | Freelance Webdeveloper | TechSolutions",
    description: "Website laten maken in Woerden? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/woerden",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Woerden | Freelance Webdeveloper | TechSolutions",
    description: "Website laten maken in Woerden? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken.",
  },
};

export default function WoerdenPage() {
  return (
    <CityPageLayout
      city="Woerden"
      slug="woerden"
      intro={[
        "Woerden, de hoofdstad van het Groene Hart, heeft een verrassend veelzijdige economie: van de historische binnenstad met haar bekende kaasmarkt tot moderne dienstverleners en het bedrijvige Middelland. Ondernemers hier bedienen klanten uit de wijde omgeving — en die klanten zoeken online.",
        "Ik bouw websites voor ondernemers in Woerden die lokaal sterk willen staan: een snelle, professionele site die vertrouwen uitstraalt en nieuwe klanten oplevert. Persoonlijk contact, transparante prijzen en binnen een week online.",
      ]}
      neighbourhoods={["de binnenstad", "Snel en Polanen", "Molenvliet", "bedrijventerrein Middelland", "Harmelen"]}
      whyLocal={[
        "Woerden ligt precies tussen Utrecht en het Groene Hart, en dat zie je terug in het klantgedrag: mensen zoeken bewust naar lokale ondernemers die ze kunnen vertrouwen. Een website die dat lokale karakter uitstraalt én technisch goed vindbaar is, geeft je een voorsprong.",
        "Ik richt je website in op lokale zoekopdrachten zoals 'webdesign Woerden' en koppel hem aan je Google Bedrijfsprofiel, zodat je zichtbaar bent voor klanten uit Woerden, Harmelen en het hele Groene Hart.",
      ]}
      approach={[
        "We starten met een gesprek over je doelen en de klanten die je in Woerden en omgeving wilt bereiken.",
        "Je krijgt een transparante offerte op maat, zonder verborgen kosten.",
        "Tijdens de bouw kijk je mee via previews, zodat de website precies wordt wat je voor ogen had.",
        "Na livegang blijf ik beschikbaar voor onderhoud, updates en lokaal SEO-advies.",
      ]}
      localHighlight={{
        title: "Woerden: nuchter ondernemen in het Groene Hart",
        content: [
          "Woerden combineert historie met bedrijvigheid. De binnenstad met het Kasteel en de kaasmarkt trekt bezoekers, terwijl Middelland en de omliggende kernen plaats bieden aan honderden mkb-bedrijven: bouwbedrijven, adviseurs, zorgpraktijken en ambachtelijke ondernemers. Nuchterheid en betrouwbaarheid staan hier centraal — precies wat je website ook moet uitstralen.",
          "Als freelance webdeveloper uit de regio Utrecht ben ik snel in Woerden voor een kennismaking. Je krijgt geen anoniem bureau maar één aanspreekpunt: iemand die je website bouwt, onderhoudt en helpt groeien.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook voor ondernemers in Woerden?",
          answer: "Zeker. Woerden ligt op een kwartier van Utrecht en ik werk regelmatig voor ondernemers in het Groene Hart. Voor een kennismaking kom ik graag langs; het traject verloopt verder soepel via WhatsApp en e-mail.",
        },
        {
          question: "Hoe snel staat mijn website in Woerden online?",
          answer: "Een standaard website is doorgaans binnen 1 week online. Voor een webshop of maatwerkproject reken je op 2 tot 3 weken, afhankelijk van de wensen.",
        },
        {
          question: "Krijg ik ook hulp met vindbaarheid in Google?",
          answer: "Ja. Technische SEO is standaard inbegrepen en ik adviseer je over lokale SEO voor Woerden, zodat klanten uit je eigen omgeving je makkelijker vinden.",
        },
      ]}
    />
  );
}
