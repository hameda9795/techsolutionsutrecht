import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken Vleuten | Freelance Webdeveloper | TechSolutions",
  description: "Website laten maken in Vleuten? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/vleuten" },
  openGraph: {
    title: "Website Laten Maken Vleuten | Freelance Webdeveloper | TechSolutions",
    description: "Website laten maken in Vleuten? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/vleuten",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Vleuten | Freelance Webdeveloper | TechSolutions",
    description: "Website laten maken in Vleuten? Een ervaren freelance webdeveloper bouwt je responsive, snelle en SEO-klare website. Persoonlijk contact en heldere afspraken.",
  },
};

export default function VleutenPage() {
  return (
    <CityPageLayout
      city="Vleuten"
      slug="vleuten"
      intro={[
        "Vleuten is meer dan alleen een wijk van Utrecht: het is een dorp met een eigen identiteit en een bloeiende lokale economie. Van de winkels en horeca rond het centrum tot de talloze zzp'ers en kleine bedrijven in de woonwijken: ondernemers in Vleuten weten dat persoonlijk contact en betrouwbaarheid hun grootste troef zijn.",
        "Ik bouw websites voor ondernemers in Vleuten die die persoonlijke aanpak ook online willen uitstralen. Geen ingewikkelde trajecten of anonieme processen, maar een site die bijdraagt aan je omzet en past bij het karakter van jouw bedrijf.",
      ]}
      neighbourhoods={["het dorpcentrum", "Vleuterweide", "De Meern (aangrenzend)", "Haarzuilens", "Rijnhuizen"]}
      whyLocal={[
        "Vleuten heeft een sterke lokale binding. Mensen die hier wonen, kopen en werken graag in de buurt. Een website die dat lokale gevoel uitstraalt en technisch goed vindbaar is in Vleuten en omgeving, helpt je om die klanten te bereiken.",
        "Ik richt je website in op lokale zoekopdrachten zoals 'webdesign Vleuten' of 'zzp'er Vleuten', en koppel hem aan je Google Bedrijfsprofiel zodat je ook op de kaart zichtbaar bent.",
      ]}
      approach={[
        "We starten met een gesprek over je doelen en de doelgroep die je in Vleuten en omgeving wilt bereiken.",
        "Je krijgt een transparante offerte op maat, zonder verborgen kosten.",
        "Tijdens de bouw kijk je mee via previews, zodat je website precies wordt wat je voor ogen had.",
        "Na livegang blijf ik beschikbaar voor onderhoud, updates en lokaal SEO-advies.",
      ]}
      localHighlight={{
        title: "Vleuten: dorpse charme met ondernemersdrive",
        content: [
          "Vleuten combineert het beste van twee werelden: de rust en het dorpse gevoel van een eigen centrum, met de voordelen van de nabijheid van Utrecht. Die combinatie trekt niet alleen gezinnen, maar ook steeds meer ondernemers die een balans zoeken tussen stadse bereikbaarheid en lokale betrokkenheid. De winkelstraat, de weekmarkt en de vele lokale initiatieven maken Vleuten tot een plek waar ondernemerschap gedijt.",
          "Als webdeveloper werk ik graag voor ondernemers in Vleuten omdat ik weet wat hier telt: betrouwbaarheid, snelheid en persoonlijk contact. Of je nu een lokale winkel hebt, een zzp-praktijk runt vanuit Vleuterweide of een dienstverlener bent die de hele regio bedient: ik bouw een website die je lokale identiteit versterkt en je helpt om nieuwe klanten te bereiken.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook voor ondernemers in Vleuten?",
          answer: "Zeker. Ik bouw websites voor zzp'ers en kleine bedrijven in Vleuten en de omliggende wijken. Voor een kennismaking kom ik graag langs, en het traject verloopt verder soepel via WhatsApp en e-mail.",
        },
        {
          question: "Hoe snel staat mijn website in Vleuten online?",
          answer: "Een standaard website is doorgaans binnen 1 week online. Voor een webshop of maatwerkproject reken je op 2 tot 3 weken, afhankelijk van de wensen.",
        },
        {
          question: "Krijg ik ook hulp met vindbaarheid in Google?",
          answer: "Ja. Technische SEO is standaard inbegrepen en ik adviseer je over lokale SEO voor Vleuten, zodat klanten uit je eigen omgeving je makkelijker vinden.",
        },
      ]}
    />
  );
}
