import { Metadata } from "next";
import RepairPageLayout from "@/components/RepairPageLayout";

export const metadata: Metadata = {
  title: "Laptop Reparatie Utrecht | Vanaf €40 | Snel & Betrouwbaar",
  description:
    "Laptop reparatie in Utrecht vanaf €40: scherm, batterij, waterschade en trage laptops. 6 maanden garantie, no cure no pay. WhatsApp +31 6 25518708.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/reparaties/laptop" },
};

export default function LaptopRepairPage() {
  return (
    <RepairPageLayout
      device="Laptop"
      slug="laptop"
      icon="laptop"
      priceFrom="€40"
      intro={[
        "Is je laptop kapot, traag of start hij niet meer op? In Utrecht repareer ik laptops van vrijwel elk merk, vaak nog dezelfde week. Je krijgt vooraf een eerlijke prijs en hoeft niet weken op je apparaat te wachten.",
        "Of het nu om een gebarsten scherm, een lege batterij of waterschade gaat: ik kijk eerst wat er écht aan de hand is en bespreek pas daarna de kosten. Bij no cure no pay betaal je niets als de reparatie niet lukt.",
      ]}
      commonIssues={[
        { title: "Gebarsten of zwart scherm", text: "Een gevallen laptop of een doffe, gebarsten of flikkerende display vervang ik door een passend nieuw scherm, zodat je laptop er weer als nieuw uitziet." },
        { title: "Batterij die snel leegloopt", text: "Gaat je laptop alleen aan de oplader nog aan of is de accu binnen een uur leeg? Een nieuwe batterij geeft je laptop zijn mobiliteit terug." },
        { title: "Waterschade", text: "Koffie of water over je laptop? Snel handelen is cruciaal. Ik reinig en droog de componenten en herstel waar mogelijk de schade voordat corrosie toeslaat." },
        { title: "Trage laptop of virussen", text: "Een laptop die traag opstart of vastloopt knapt vaak enorm op van een SSD-upgrade, een schone installatie of het verwijderen van malware." },
        { title: "Kapot toetsenbord", text: "Plakkende, niet-werkende of beschadigde toetsen vervang ik, of ik plaats een compleet nieuw toetsenbord." },
        { title: "Oververhitting en lawaai", text: "Een luidruchtige of hete laptop heeft vaak stof in de ventilator of droge koelpasta. Een reinigingsbeurt lost dat meestal op." },
      ]}
      brands={["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "MSI", "Microsoft Surface"]}
      faqs={[
        { question: "Wat kost een laptop reparatie?", answer: "Laptop reparaties starten vanaf €40. De exacte prijs hangt af van het probleem en de benodigde onderdelen. Je krijgt altijd een offerte vooraf, zodat je nooit voor verrassingen komt te staan." },
        { question: "Hoe lang duurt de reparatie?", answer: "Veel reparaties zijn dezelfde dag of binnen enkele werkdagen klaar. Moet er een specifiek onderdeel besteld worden, dan laat ik je vooraf weten hoe lang dat duurt." },
        { question: "Repareren jullie ook waterschade?", answer: "Ja. Bij waterschade is snel handelen belangrijk. Zet je laptop uit, gebruik hem niet en neem zo snel mogelijk contact op. Ik reinig de componenten en herstel waar mogelijk." },
        { question: "Krijg ik garantie op de reparatie?", answer: "Op uitgevoerde reparaties geef ik 6 maanden garantie. En dankzij no cure no pay betaal je niets als de reparatie onverhoopt niet lukt." },
        { question: "Blijven mijn bestanden behouden?", answer: "In de meeste gevallen blijven je bestanden gewoon staan. Bij ernstige schade adviseer ik vooraf over data recovery, zodat je belangrijke bestanden veilig blijven." },
      ]}
    />
  );
}
