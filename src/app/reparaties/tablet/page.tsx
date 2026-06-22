import { Metadata } from "next";
import RepairPageLayout from "@/components/RepairPageLayout";

export const metadata: Metadata = {
  title: "Tablet Reparatie Utrecht | Vanaf €40 | Snel & Betrouwbaar",
  description:
    "Tablet reparatie in Utrecht vanaf €40: scherm, accu, oplaadpoort en software. Samsung, Lenovo, Huawei en meer. 6 maanden garantie. WhatsApp +31 6 25518708.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/reparaties/tablet" },
};

export default function TabletRepairPage() {
  return (
    <RepairPageLayout
      device="Tablet"
      slug="tablet"
      icon="tablet"
      priceFrom="€40"
      intro={[
        "Is je Android-tablet kapot, traag of laadt hij niet meer op? In Utrecht repareer ik tablets van merken als Samsung, Lenovo en Huawei. Vooraf een eerlijke prijs en snel weer een werkend toestel.",
        "Of het nu om een gebarsten scherm, een uitgeputte accu of een hardnekkig softwareprobleem gaat: ik kijk eerst wat er aan de hand is en bespreek pas daarna de kosten. (Heb je een iPad? Bekijk dan de aparte iPad-pagina.)",
      ]}
      commonIssues={[
        { title: "Gebarsten scherm", text: "Een gevallen tablet met scheuren of een touchscreen dat niet meer reageert, voorzie ik van een passend nieuw scherm zodat hij weer prettig werkt." },
        { title: "Accu die snel leegloopt", text: "Houdt je tablet nauwelijks lading vast of laadt hij traag op? Een nieuwe accu maakt je tablet weer een hele dag bruikbaar." },
        { title: "Oplaadpoort defect", text: "Een tablet die niet meer of alleen in een bepaalde hoek laadt, heeft vaak een vervuilde of versleten poort. Ik reinig of vervang hem." },
        { title: "Trage prestaties", text: "Een tablet die hapert of vastloopt knapt vaak op van het opschonen van software, het verwijderen van overbodige apps of een reset." },
        { title: "Softwareproblemen", text: "Een tablet die niet opstart, blijft hangen of vol zit met fouten na een update krijgt een nette software-reset, met behoud van je data waar mogelijk." },
        { title: "Knoppen en speakers", text: "Niet-werkende volume- of aan-uitknoppen en slechte geluidskwaliteit herstel ik met een gerichte onderdeelvervanging." },
      ]}
      brands={["Samsung Galaxy Tab", "Lenovo", "Huawei", "Microsoft Surface", "Xiaomi", "Acer"]}
      faqs={[
        { question: "Wat kost een tablet reparatie?", answer: "Tabletreparaties starten vanaf €40, afhankelijk van het merk, model en probleem. Je krijgt altijd vooraf een heldere offerte." },
        { question: "Welke tablets repareren jullie?", answer: "Ik repareer Android- en Windows-tablets van merken als Samsung, Lenovo, Huawei, Xiaomi en Microsoft Surface. Voor Apple-tablets is er een aparte iPad-pagina." },
        { question: "Loont een reparatie nog bij een oudere tablet?", answer: "Dat hangt af van de reparatiekosten versus de waarde. Ik geef je hierin een eerlijk advies, ook als vervangen verstandiger is dan repareren." },
        { question: "Blijft mijn data behouden?", answer: "Bij de meeste reparaties blijft je data staan. Bij softwareproblemen adviseer ik vooraf over een back-up zodat je niets kwijtraakt." },
        { question: "Zit er garantie op?", answer: "Op de reparatie geldt 6 maanden garantie en ik werk met no cure no pay: lukt de reparatie niet, dan betaal je niets." },
      ]}
    />
  );
}
