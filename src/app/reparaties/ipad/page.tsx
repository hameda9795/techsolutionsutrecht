import { Metadata } from "next";
import RepairPageLayout from "@/components/RepairPageLayout";

export const metadata: Metadata = {
  title: "iPad Reparatie Utrecht | Vanaf €40 | Snel & Betrouwbaar",
  description:
    "iPad reparatie in Utrecht vanaf €40: scherm, glas, accu, oplaadpoort en iPadOS-problemen. Alle iPad-modellen, 6 maanden garantie. WhatsApp +31 6 25518708.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/reparaties/ipad" },
};

export default function IpadRepairPage() {
  return (
    <RepairPageLayout
      device="iPad"
      slug="ipad"
      icon="tablet"
      priceFrom="€40"
      intro={[
        "Is het scherm van je iPad gebarsten of doet de accu het niet meer? In Utrecht repareer ik alle iPad-modellen, van de instap-iPad tot iPad Air, Mini en Pro. Vooraf een eerlijke prijs, geen onnodige kosten.",
        "iPad-reparaties zijn precisiewerk: het glas en de display zitten dicht op elkaar en de behuizing is kwetsbaar. Ik werk zorgvuldig en met passende onderdelen, zodat je iPad er weer als nieuw uitziet en werkt.",
      ]}
      commonIssues={[
        { title: "Gebarsten glas of scherm", text: "Een gevallen iPad met scheuren of een niet-reagerend touchscreen krijgt een passende glas- of schermvervanging, uitgevoerd met zorg voor de kwetsbare behuizing." },
        { title: "Accu die snel leegloopt", text: "Houdt je iPad nauwelijks meer lading vast of laadt hij traag op? Een nieuwe accu geeft je tablet zijn werkdag terug." },
        { title: "Oplaadpoort werkt niet", text: "Laadt je iPad niet meer of alleen in een bepaalde stand? Vaak zit de poort vol stof of is hij beschadigd; ik reinig of vervang hem." },
        { title: "Knoppen en camera", text: "Een kapotte home- of volumeknop of een wazige camera herstel ik, zodat je iPad weer volledig functioneert." },
        { title: "iPadOS-problemen", text: "Een iPad die vastloopt, niet opstart of hapert na een update krijgt een nette software-reset, met behoud van je data waar mogelijk." },
        { title: "Waterschade", text: "In aanraking geweest met vocht? Zet de iPad uit en laad niet op. Ik reinig de binnenkant en herstel waar mogelijk." },
      ]}
      brands={["iPad", "iPad Air", "iPad Mini", "iPad Pro"]}
      faqs={[
        { question: "Wat kost een iPad reparatie?", answer: "iPad-reparaties starten vanaf €40, afhankelijk van het model en het probleem. Een gebarsten Pro-scherm kost meer dan een instap-iPad. Je krijgt altijd vooraf een offerte." },
        { question: "Repareren jullie alle iPad-modellen?", answer: "Ja, van de gewone iPad tot iPad Air, iPad Mini en iPad Pro. Geef bij je aanvraag het model door, dan geef ik je een gerichte prijsindicatie." },
        { question: "Is een iPad-scherm lastiger te vervangen dan een telefoonscherm?", answer: "iPads zijn gevoeliger door de grote glasplaat en lijmverbindingen. Daarom werk ik extra zorgvuldig; dat is ook waarom de levertijd soms iets langer is." },
        { question: "Blijft mijn data behouden?", answer: "Bij de meeste reparaties blijft je data staan. Bij softwareproblemen adviseer ik vooraf over een back-up via iCloud of computer." },
        { question: "Krijg ik garantie?", answer: "Op de reparatie geldt 6 maanden garantie en ik werk met no cure no pay: lukt het niet, dan betaal je niets." },
      ]}
    />
  );
}
