import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken Zeist | Freelance Webdeveloper | TechSolutions",
  description: "Website laten maken in Zeist? Een ervaren freelance webdeveloper uit de regio bouwt je snelle, SEO-klare website. Direct contact, geen tussenlagen. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/zeist" },
};

export default function ZeistPage() {
  return (
    <CityPageLayout
      city="Zeist"
      slug="zeist"
      intro={[
        "Zeist is een dorp met ambitie: van de zelfstandige adviseurs rond de Slotlaan tot de hoveniers, coaches en zorgprofessionals in de groene wijken eromheen. Wie hier onderneemt, concurreert vaak met bedrijven uit Utrecht én De Bilt. Een sterke, vindbare website maakt dan het verschil tussen gevonden worden of niet.",
        "Ik bouw websites die passen bij het type ondernemer dat Zeist kenmerkt: persoonlijk, betrouwbaar en met oog voor kwaliteit. Geen standaard sjabloon, maar een site die jouw verhaal vertelt en bezoekers omzet in klanten.",
      ]}
      neighbourhoods={["het centrum rond de Slotlaan", "Austerlitz", "Den Dolder", "Huis ter Heide", "Bosch en Duin"]}
      whyLocal={[
        "Zeist heeft een eigen karakter en een eigen publiek. Een website voor een coach in Den Dolder vraagt om een andere toon dan een webshop voor een speciaalzaak in het centrum. Omdat ik de regio ken, denk ik mee over hoe jouw doelgroep zoekt en wat hen overtuigt.",
        "Voor lokale vindbaarheid richt ik je website zo in dat Google begrijpt dat je actief bent in Zeist en omgeving: van een nette paginastructuur tot correcte lokale signalen en een gekoppeld Google Bedrijfsprofiel.",
      ]}
      approach={[
        "Of je nu een eenvoudige presentatiewebsite, een webshop of een maatwerkoplossing nodig hebt — we beginnen met jouw doel, niet met een prijslijst.",
        "We starten met een kort gesprek (telefonisch, WhatsApp of op locatie) om je wensen en doelgroep helder te krijgen.",
        "Je krijgt een transparante offerte op maat, zodat je vooraf precies weet wat je betaalt en oplevert.",
        "Ik bouw de website, jij krijgt tussentijds previews en kunt meekijken — geen verrassingen bij de oplevering.",
        "Na livegang blijf ik bereikbaar voor onderhoud, aanpassingen en SEO-advies.",
      ]}
      localHighlight={{
        title: "Zeist: groen, groeiend en vol ondernemerschap",
        content: [
          "Zeist staat bekend om zijn groene omgeving en rustige sfeer, maar de economie draait hier op volle toeren. Van de zelfstandige professionals rond de Slotlaan tot de coaches en therapeuten in Bosch en Duin, en van de hoveniers in Huis ter Heide tot de adviseurs in Den Dolder: Zeist heeft een rijk en gevarieerd ondernemerslandschap. Veel ondernemers hier werken op aanbeveling, maar een sterke online aanwezigheid wordt steeds crucialer.",
          "Ik bouw websites die passen bij het karakter van Zeist: persoonlijk, betrouwbaar en met oog voor detail. Of je nu een praktijk runt in een van de groene wijken of een winkel hebt in het centrum: ik zorg dat je website vertrouwen wekt en lokaal goed vindbaar is. Met een correct ingericht Google Bedrijfsprofiel en lokale SEO richt ik je site zo in dat klanten uit Zeist en omgeving jou het eerst vinden.",
        ],
      }}
      faqs={[
        {
          question: "Werk je ook op locatie in Zeist?",
          answer: "Voor een kennismaking of een belangrijk overleg kom ik graag langs in Zeist of omgeving. Veel afstemming doen we efficiënt via WhatsApp, e-mail en videobellen, zodat je project snel vooruitgaat.",
        },
        {
          question: "Hoe lang duurt het om mijn website in Zeist online te krijgen?",
          answer: "Een standaard website is doorgaans binnen 1 week online. Voor een webshop of maatwerk reken je op 2 tot 3 weken, afhankelijk van de functionaliteiten en hoe snel je content aanlevert.",
        },
        {
          question: "Help je ook met hoger in Google komen in Zeist?",
          answer: "Ja. Elke website lever ik technisch SEO-klaar op en ik adviseer je over lokale SEO voor Zeist, zodat je beter gevonden wordt door klanten uit je eigen omgeving.",
        },
      ]}
    />
  );
}
