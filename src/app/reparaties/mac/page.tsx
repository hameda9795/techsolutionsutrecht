import { Metadata } from "next";
import RepairPageLayout from "@/components/RepairPageLayout";

export const metadata: Metadata = {
  title: "Mac & MacBook Reparatie Utrecht | Vanaf €55 | Snel & Betrouwbaar",
  description:
    "MacBook, iMac en Mac mini reparatie in Utrecht vanaf €55: scherm, batterij, vloeistofschade, opslag en macOS-problemen. 6 maanden garantie. WhatsApp +31 6 25518708.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/reparaties/mac" },
};

export default function MacRepairPage() {
  return (
    <RepairPageLayout
      device="Mac & MacBook"
      slug="mac"
      icon="mac"
      heading="Mac & MacBook Reparatie Utrecht"
      priceFrom="€55"
      intro={[
        "Hapert je MacBook, iMac of Mac mini? In Utrecht repareer ik Apple-computers zonder de lange wachttijden en hoge tarieven van een Apple Store. Je krijgt vooraf een eerlijke prijs en persoonlijk advies van een ervaren developer.",
        "Van een MacBook die niet meer opstart na een macOS-update tot vloeistofschade of een opgezwollen batterij: ik werk zorgvuldig met Apple-hardware en gebruik kwalitatief hoogwaardige onderdelen.",
      ]}
      commonIssues={[
        { title: "MacBook batterij vervangen", text: "Een opgezwollen of snel lege accu (vaak met een 'Service aanbevolen'-melding) vervang ik, zodat je MacBook weer veilig en lang meegaat." },
        { title: "Scherm en display", text: "Een gebarsten Retina-scherm, vlekken of flikkering los ik op met een passende schermvervanging voor MacBook en iMac." },
        { title: "Vloeistofschade", text: "Drank over je MacBook? Snel handelen voorkomt corrosie op het logic board. Ik reinig de componenten en herstel waar mogelijk." },
        { title: "macOS-problemen", text: "Vastlopers, een Mac die niet opstart of problemen na een update verhelp ik met een nette herinstallatie of herstel, met behoud van je bestanden waar mogelijk." },
        { title: "Trage Mac of volle opslag", text: "Een oudere Mac of een volle schijf knapt op van opschoning, optimalisatie of een grotere SSD waar dat mogelijk is." },
        { title: "Toetsenbord en poorten", text: "Niet-werkende toetsen, een kapotte trackpad of een defecte oplaadpoort herstel ik zodat alles weer soepel werkt." },
      ]}
      brands={["MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio"]}
      faqs={[
        { question: "Wat kost een MacBook reparatie?", answer: "Mac-reparaties starten vanaf €55, afhankelijk van het probleem en de onderdelen. Je krijgt vooraf een offerte, vaak voordeliger dan bij de Apple Store." },
        { question: "Gebruiken jullie originele onderdelen?", answer: "Ik werk met originele of kwalitatief gelijkwaardige onderdelen en bespreek vooraf welke optie het beste past bij jouw budget en wensen." },
        { question: "Mijn MacBook heeft vloeistofschade. Wat nu?", answer: "Zet hem direct uit, laad niet op en neem snel contact op. Hoe sneller ik de componenten kan reinigen, hoe groter de kans op volledig herstel." },
        { question: "Blijft mijn data behouden bij een macOS-reparatie?", answer: "Meestal wel. Bij ingrijpende problemen adviseer ik vooraf over een back-up of data recovery, zodat je niets belangrijks verliest." },
        { question: "Hoe lang duurt een Mac-reparatie?", answer: "Veel reparaties zijn binnen enkele werkdagen klaar. Voor specifieke Apple-onderdelen hoor je vooraf de verwachte levertijd." },
      ]}
    />
  );
}
