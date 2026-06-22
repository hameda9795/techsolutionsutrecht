import { Metadata } from "next";
import RepairPageLayout from "@/components/RepairPageLayout";

export const metadata: Metadata = {
  title: "Computer Reparatie Utrecht | Vanaf €40 | Snel & Betrouwbaar",
  description:
    "Computer reparatie in Utrecht vanaf €40: start niet op, traag, virus, hardware-upgrades en data recovery. 6 maanden garantie, no cure no pay. WhatsApp +31 6 25518708.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/reparaties/computer" },
};

export default function ComputerRepairPage() {
  return (
    <RepairPageLayout
      device="Computer"
      slug="computer"
      icon="computer"
      priceFrom="€40"
      intro={[
        "Doet je desktop-pc het niet meer, start hij niet op of is hij sloom geworden? In Utrecht repareer en upgrade ik computers van alle merken. Je krijgt een eerlijke diagnose en een prijs vooraf, geen onnodige onderdelen.",
        "Van een vastlopende Windows-installatie tot een complete SSD-upgrade: ik zoek de oorzaak en kies de oplossing die jouw computer weer snel en betrouwbaar maakt. Bij no cure no pay betaal je niets als reparatie niet lukt.",
      ]}
      commonIssues={[
        { title: "Computer start niet op", text: "Een pc die niet aangaat of blijft hangen op een zwart scherm heeft vaak een voeding-, opslag- of opstartprobleem. Ik spoor de oorzaak op en herstel de boot." },
        { title: "Traag en vastlopen", text: "Een oudere computer wordt vaak weer kwiek met een SSD, extra geheugen of een schone Windows-installatie. Een merkbaar verschil voor weinig geld." },
        { title: "Virussen en malware", text: "Pop-ups, kapers en verdacht gedrag verwijder ik grondig, en ik beveilig je systeem zodat het niet meteen weer misgaat." },
        { title: "Hardware-upgrades", text: "Meer opslag, meer RAM of een snellere SSD of videokaart: ik adviseer en installeer upgrades die passen bij hoe jij je pc gebruikt." },
        { title: "Data recovery", text: "Bestanden kwijt door een crash of kapotte schijf? Vaak kan ik je foto's en documenten alsnog veiligstellen." },
        { title: "Oververhitting en stof", text: "Een pc die uitvalt of luid blaast, zit vaak vol stof of heeft droge koelpasta. Een interne reinigingsbeurt lost dat op." },
      ]}
      brands={["HP", "Dell", "Lenovo", "Asus", "Acer", "MSI", "Zelfbouw / custom pc's", "Alle merken"]}
      faqs={[
        { question: "Wat kost een computer reparatie?", answer: "Computer reparaties starten vanaf €40. Wat je precies betaalt hangt af van het probleem en eventuele onderdelen. Je ontvangt altijd vooraf een heldere offerte." },
        { question: "Mijn pc is traag. Kan dat opgelost worden?", answer: "Vrijwel altijd. Een SSD-upgrade, extra RAM of een schone installatie maakt een groot verschil. Ik adviseer wat in jouw geval het meeste oplevert." },
        { question: "Kunnen jullie mijn bestanden redden?", answer: "In veel gevallen wel. Bij een kapotte schijf of crash probeer ik je data veilig te stellen. Neem snel contact op en blijf de schijf niet gebruiken." },
        { question: "Repareren jullie ook zelfbouw-pc's?", answer: "Ja, ik werk met zowel merkcomputers als zelfbouw- en gaming-pc's. Ook voor upgrades aan een custom systeem kun je terecht." },
        { question: "Krijg ik garantie?", answer: "Op uitgevoerde reparaties geldt 6 maanden garantie en werk ik met no cure no pay: lukt de reparatie niet, dan betaal je niets." },
      ]}
    />
  );
}
