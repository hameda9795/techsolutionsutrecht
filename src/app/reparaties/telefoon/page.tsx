import { Metadata } from "next";
import RepairPageLayout from "@/components/RepairPageLayout";

export const metadata: Metadata = {
  title: "Telefoon Reparatie Utrecht | Vanaf €35 | Snel & Betrouwbaar",
  description:
    "Telefoon reparatie in Utrecht vanaf €35: scherm, accu, oplaadpoort en waterschade. iPhone en Android, 6 maanden garantie, vaak klaar terwijl je wacht. WhatsApp +31 6 25518708.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/reparaties/telefoon" },
};

export default function TelefoonRepairPage() {
  return (
    <RepairPageLayout
      device="Telefoon"
      slug="telefoon"
      icon="phone"
      priceFrom="€35"
      intro={[
        "Scherm gebarsten of accu binnen een halve dag leeg? In Utrecht repareer ik smartphones van alle grote merken, vaak nog dezelfde dag. Veel reparaties zijn zelfs klaar terwijl je wacht.",
        "Je krijgt vooraf een eerlijke prijs en ik gebruik kwalitatief hoogwaardige onderdelen. Geen dure verzekeringstrajecten of wekenlang wachten, gewoon snel je telefoon weer werkend.",
      ]}
      commonIssues={[
        { title: "Gebarsten scherm of glas", text: "Een gevallen telefoon met scheuren, dode plekken of een niet-reagerende touchscreen krijgt een passend nieuw scherm, zodat hij er weer als nieuw uitziet en werkt." },
        { title: "Accu die snel leegloopt", text: "Gaat je telefoon halverwege de dag uit of schakelt hij plots uit bij kou? Een nieuwe accu geeft je toestel zijn volledige dag terug." },
        { title: "Oplaadpoort defect", text: "Laadt je telefoon alleen nog in een bepaalde hoek of helemaal niet meer? Vaak zit de poort vol vuil of is hij versleten; ik reinig of vervang hem." },
        { title: "Waterschade", text: "In het water gevallen? Zet hem uit en laad niet op. Ik reinig de binnenkant en herstel waar mogelijk de schade." },
        { title: "Camera of speaker", text: "Een wazige camera, gebarsten lens of slechte geluidskwaliteit bij bellen herstel ik met een passende onderdeelvervanging." },
        { title: "Softwareproblemen", text: "Een telefoon die vastloopt, niet opstart of vol zit met problemen na een update krijgt een nette software-reset met behoud van je data waar mogelijk." },
      ]}
      brands={["Apple iPhone", "Samsung", "Google Pixel", "OnePlus", "Xiaomi", "Huawei", "Oppo"]}
      faqs={[
        { question: "Wat kost een telefoon reparatie?", answer: "Telefoonreparaties starten vanaf €35. De prijs hangt af van het model en het onderdeel. Je krijgt altijd vooraf een duidelijke offerte." },
        { question: "Kan ik wachten tijdens de reparatie?", answer: "Voor veel voorkomende reparaties zoals scherm of accu kan dat vaak. Stuur even een berichtje met je model, dan plan ik het zo in dat je snel weer weg kunt." },
        { question: "Repareren jullie zowel iPhone als Android?", answer: "Ja, ik repareer iPhones en Android-toestellen van alle grote merken zoals Samsung, Google Pixel, OnePlus en Xiaomi." },
        { question: "Blijven mijn foto's en contacten behouden?", answer: "Bij de meeste reparaties blijft je data gewoon staan. Bij softwareproblemen adviseer ik vooraf over een back-up zodat je niets kwijtraakt." },
        { question: "Zit er garantie op?", answer: "Op de reparatie en het geplaatste onderdeel geldt 6 maanden garantie, en met no cure no pay betaal je niets als reparatie niet lukt." },
      ]}
    />
  );
}
