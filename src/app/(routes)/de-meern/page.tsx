import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken De Meern | Webdeveloper Leidsche Rijn",
  description:
    "Website laten maken in De Meern door een freelance webdeveloper uit de regio Utrecht. Snel, responsive en lokaal vindbaar in Google. Direct contact met de developer, binnen 1 week online. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/de-meern" },
};

export default function DeMeernPage() {
  return (
    <CityPageLayout
      city="De Meern"
      slug="de-meern"
      intro={[
        "De Meern is in twintig jaar tijd uitgegroeid van een dorp aan de Leidsche Rijn tot een van de drukste ondernemersplekken aan de westkant van Utrecht. Tussen het oude centrum rond de Meerndijk en de nieuwe wijken van Leidsche Rijn zitten honderden zzp'ers, winkeliers en dienstverleners die het vooral van lokale klanten moeten hebben. Een professionele website die snel laadt en goed gevonden wordt, is daarbij geen luxe maar je belangrijkste visitekaartje.",
        "Ik bouw websites voor ondernemers in De Meern die meer willen dan een online folder: een site die bezoekers omzet in aanvragen. Technisch sterk, persoonlijk en zonder lange wachttijden — je hebt direct contact met de developer die je website daadwerkelijk maakt.",
      ]}
      neighbourhoods={[
        "het centrum rond de Meerndijk",
        "Veldhuizen",
        "Rijnvliet",
        "Oudenrijn",
        "Strijkviertel",
        "de Hoge Woerd",
      ]}
      whyLocal={[
        "Een ondernemer in De Meern concurreert online niet alleen met de buurman, maar met heel webdesign-Utrecht. Wie lokaal gezocht wordt — denk aan 'kapper De Meern' of 'hovenier Leidsche Rijn' — heeft een website nodig die precies op dat soort zoekopdrachten is afgestemd. Daar richt ik je teksten, structuur en techniek op in.",
        "Omdat ik zelf in de regio Utrecht werk, ken ik de markt en zijn de lijnen kort. Of je nu een zaak hebt aan de Castellumlaan of vanuit huis in Rijnvliet werkt: ik kom langs voor een kennismaking en je houdt één vast aanspreekpunt in plaats van een anonieme helpdesk.",
      ]}
      approach={[
        "Of je nu een eenvoudige presentatiewebsite, een complete webshop of een maatwerkoplossing nodig hebt — we kiezen samen wat past bij jouw bedrijf in De Meern en bij je budget.",
        "We starten met een kort gesprek over je doelen, je doelgroep in De Meern en wat je website concreet moet opleveren.",
        "Je krijgt vooraf een heldere offerte met een vaste prijs — geen nacalculatie of verrassingen achteraf.",
        "Tijdens de bouw kijk je mee via previews, zodat ontwerp en teksten precies kloppen voordat we live gaan.",
        "Na livegang blijf ik bereikbaar voor onderhoud, updates en lokaal SEO-advies voor De Meern.",
      ]}
      faqs={[
        {
          question: "Werk je voor ondernemers in heel De Meern en Leidsche Rijn?",
          answer:
            "Ja. Ik bouw websites voor zzp'ers en bedrijven in heel De Meern, van het centrum rond de Meerndijk tot Veldhuizen, Rijnvliet en de bedrijvigheid rond Oudenrijn en Strijkviertel. De rest van Leidsche Rijn en Vleuten bedien ik net zo goed.",
        },
        {
          question: "Hoe snel staat mijn website in De Meern online?",
          answer:
            "Een standaard website is meestal binnen 1 week online. Voor een WooCommerce-webshop of een maatwerkproject reken je op 2 tot 3 weken, afhankelijk van de functionaliteiten die je nodig hebt.",
        },
        {
          question: "Wat kost een website laten maken in De Meern?",
          answer:
            "Een verzorgde WordPress-website begint bij €250 en een webshop bij €350. De uiteindelijke prijs hangt af van het aantal pagina's, de functionaliteiten en of je zelf teksten en beeld aanlevert. Je krijgt altijd vooraf een vaste prijs.",
        },
        {
          question: "Zorg je ook dat ik lokaal gevonden word in Google?",
          answer:
            "Ja. Technische SEO is standaard inbegrepen en ik richt je website en Google Bedrijfsprofiel zo in dat je opvalt bij klanten die in De Meern en omgeving zoeken.",
        },
      ]}
    />
  );
}
