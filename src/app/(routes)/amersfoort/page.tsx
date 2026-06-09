import type { Metadata } from "next";
import CityPageLayout from "@/components/CityPageLayout";

export const metadata: Metadata = {
  title: "Website Laten Maken Amersfoort | Freelance Webdeveloper | TechSolutions",
  description: "Website laten maken in Amersfoort? Een ervaren freelance webdeveloper bouwt je responsive, SEO-klare website. Persoonlijk contact en snelle oplevering. Vraag een offerte aan.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/amersfoort" },
};

export default function AmersfoortPage() {
  return (
    <CityPageLayout
      city="Amersfoort"
      slug="amersfoort"
      intro={[
        "Amersfoort is een snelgroeiende stad met een levendige ondernemerscultuur — van de creatieve bedrijfjes in de binnenstad tot de techbedrijven en ZZP'ers in Vathorst en De Hoef. Die groei betekent ook meer concurrentie online. Een website die snel laadt, er strak uitziet en goed scoort in Google is daarom geen luxe maar noodzaak.",
        "Ik help ondernemers in Amersfoort aan een website die niet alleen mooi is, maar ook werkt: bezoekers die contact opnemen, offertes aanvragen of een aankoop doen. Techniek en marketing in één, gebouwd door één aanspreekpunt.",
      ]}
      neighbourhoods={["de historische binnenstad", "Vathorst", "Kattenbroek", "Schothorst", "De Hoef", "Nieuwland"]}
      whyLocal={[
        "Amersfoort heeft een eigen, gevarieerde markt: van horeca en retail in het centrum tot zakelijke dienstverleners in de nieuwere wijken. Ik stem de inhoud en structuur van je website af op de manier waarop jouw doelgroep in Amersfoort online zoekt.",
        "Door je site technisch goed in te richten en lokale signalen correct te zetten, vergroot je de kans dat je opduikt wanneer iemand in Amersfoort zoekt naar precies wat jij aanbiedt — inclusief koppeling met je Google Bedrijfsprofiel.",
      ]}
      approach={[
        "Van een eenvoudige presentatiesite tot een complete webshop of maatwerkapplicatie: we kiezen de oplossing die bij jouw bedrijf in Amersfoort past.",
        "We bespreken eerst je doelen en doelgroep, zodat de website daadwerkelijk bijdraagt aan je omzet.",
        "Je ontvangt een heldere offerte op maat, zonder verborgen kosten.",
        "Tijdens de bouw kijk je mee via previews, zodat het eindresultaat precies klopt met wat je voor ogen had.",
        "Na de lancering bied ik onderhoud, updates en SEO-ondersteuning aan, zodat je site veilig en vindbaar blijft.",
      ]}
      localHighlight={{
        title: "Amersfoort: waar geschiedenis en innovatie samenkomen",
        content: [
          "Amersfoort is een van de snelst groeiende steden van Nederland — en dat zie je terug in het ondernemersklimaat. De historische binnenstad met zijn grachten en monumentale panden trekt toeristen en lokale shoppers, terwijl Vathorst en Nieuwland booming zijn met techbedrijven, ZZP'ers en startups. Die diversiteit vraagt om webdesign dat flexibel is: van een sfeervolle horecasite tot een strakke zakelijke portal.",
          "Ik werk regelmatig voor klanten in Amersfoort en ken de dynamiek van de stad. Of je nu een winkel hebt in de Langestraat, een praktijk in Schothorst of een techbedrijf in Vathorst: ik zorg voor een website die aansluit bij jouw doelgroep én bij het karakter van Amersfoort. Met lokale SEO richt ik je site zo in dat je ook echt gevonden wordt door mensen die in Amersfoort zoeken — niet alleen in de regio.",
        ],
      }}
      faqs={[
        {
          question: "Kun je een afspraak in Amersfoort inplannen?",
          answer: "Zeker. Voor een kennismaking kom ik graag naar Amersfoort. De rest van het traject verloopt soepel op afstand via WhatsApp, e-mail en videobellen, zodat we geen tijd verliezen.",
        },
        {
          question: "Wat kost een website laten maken in Amersfoort?",
          answer: "Dat hangt af van wat je nodig hebt. Een presentatiewebsite ligt in een ander segment dan een webshop of maatwerk. Je krijgt vooraf een transparante offerte op maat, zodat je nooit voor verrassingen komt te staan.",
        },
        {
          question: "Zorg je ook dat ik in Amersfoort beter gevonden word?",
          answer: "Ja. Elke website is technisch SEO-klaar en ik geef je concreet advies over lokale SEO voor Amersfoort, zodat klanten uit je eigen stad je makkelijker vinden.",
        },
      ]}
    />
  );
}
