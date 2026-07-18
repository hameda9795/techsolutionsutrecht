import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken De Meern | Webdeveloper Leidsche Rijn",
  description:
    "Website laten maken in De Meern vanaf €250. Responsive, met een goede SEO-basis, duidelijke planning en direct contact met de developer uit de regio Utrecht.",
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
      localHighlight={{
        title: "De Meern: van dorp aan de Rijn tot ondernemershotspot",
        content: [
          "De Meern is in twintig jaar tijd getransformeerd van een rustig dorp aan de Leidsche Rijn tot een van de belangrijkste woon- en werkplekken aan de westkant van Utrecht. Met wijken als Veldhuizen, Rijnvliet en de Hoge Woerd, en bedrijventerreinen rond Oudenrijn en Strijkviertel, is De Meern een echte ondernemersgemeente geworden. Winkeliers aan de Meerndijk, zzp'ers in de nieuwbouwwijken en dienstverleners in het hele gebied hebben allemaal behoefte aan een sterke online aanwezigheid.",
          "Als webdeveloper in de regio Utrecht ken ik De Meern goed. Ik weet dat ondernemers hier waarde hechten aan snelheid, helderheid en persoonlijk contact — precies wat ik lever. Of je nu een lokaal bedrijf hebt aan de Castellumlaan of vanuit huis werkt in Rijnvliet: ik bouw een website die jouw doelgroep in De Meern en Leidsche Rijn bereikt. Met lokale SEO zorg ik dat je gevonden wordt door klanten die echt in de buurt zijn.",
        ],
      }}
      faqs={[
        {
          question: "Werk je voor ondernemers in heel De Meern en Leidsche Rijn?",
          answer:
            "Ja. Ik bouw websites voor zzp'ers en bedrijven in heel De Meern, van het centrum rond de Meerndijk tot Veldhuizen, Rijnvliet en de bedrijvigheid rond Oudenrijn en Strijkviertel. De rest van Leidsche Rijn en Vleuten bedien ik net zo goed.",
        },
        {
          question: "Hoe snel staat mijn website in De Meern online?",
          answer:
            "De doorlooptijd hangt af van de omvang, functies en beschikbaarheid van de content. Na een korte intake ontvang je een duidelijke planning en spreken we vooraf een opleverdatum af.",
        },
        {
          question: "Wat kost een website laten maken in De Meern?",
          answer:
            "Een complete professionele website start vanaf €250 en kost meestal €350–€650. Een webshop start vanaf €795 en kost meestal €1.000–€2.000. De uiteindelijke prijs hangt af van inhoud, functies en koppelingen. Je krijgt altijd vooraf een vaste prijs.",
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
