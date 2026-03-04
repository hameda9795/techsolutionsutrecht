import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RepairDetail from "@/components/RepairDetail";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Goedkope Computer & Laptop Reparatie Utrecht | Vanaf €40 | TechSolutionsUtrecht",
  description: "Voordelige laptop en computer reparatie in Utrecht vanaf €40. Scherpe prijzen, snelle service. iPhone, MacBook, iPad. WhatsApp +31 6 25518708",
  keywords: ["goedkope laptop reparatie utrecht", "voordelige computer reparatie", "scherpe prijs reparatie", "betaalbare laptop reparatie", "lage prijs computer"],
};

const trustSignals = [
  { icon: Award, text: "4.9/5 beoordeling" },
  { icon: Clock, text: "12 jaar ervaring" },
  { icon: Shield, text: "6 maanden garantie" },
  { icon: CheckCircle, text: "No cure, no pay" },
];

const repairs = [
  {
    icon: "laptop",
    title: "Laptop Reparatie",
    description: "Goedkope laptop reparatie. Scherm, batterij, waterschade — wij fixen het voordelig.",
    repairs: [
      "Scherm reparatie",
      "Batterij vervangen",
      "Toetsenbord vervangen",
      "Waterschade behandeling",
      "Virus & malware removal",
      "Snelheidsoptimalisatie",
    ],
    brands: ["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "MSI"],
    price: "Vanaf €40",
  },
  {
    icon: "computer",
    title: "Computer Reparatie",
    description: "Voordelige computer reparatie. Van virusremoval tot hardware upgrades.",
    repairs: [
      "Niet opstarten",
      "Traagheid / freezes",
      "Virus & malware",
      "Hardware upgrades",
      "Data recovery",
      "Netwerk problemen",
    ],
    brands: ["Alle merken"],
    price: "Vanaf €40",
  },
  {
    icon: "mac",
    title: "Mac & MacBook Reparatie",
    description: "Betaalbare Apple reparaties. MacBook, iMac met originele of hoogwaardige onderdelen.",
    repairs: [
      "MacBook scherm reparatie",
      "MacBook batterij vervangen",
      "iMac reparaties",
      "Mac mini upgrades",
      "macOS problemen",
      "Data herstel",
    ],
    brands: ["MacBook", "MacBook Air", "MacBook Pro", "iMac", "Mac mini"],
    price: "Vanaf €55",
  },
  {
    icon: "phone",
    title: "Telefoon & Tablet",
    description: "Goedkope iPhone, iPad, Samsung reparaties. Scherpe prijzen, snel gerepareerd.",
    repairs: [
      "Scherm reparatie",
      "Batterij vervangen",
      "Laadpoort reparatie",
      "Waterschade",
      "Camera reparatie",
      "Back cover vervangen",
    ],
    brands: ["iPhone", "iPad", "Samsung", "Huawei", "OnePlus", "Xiaomi"],
    price: "Vanaf €35",
  },
];

export default function ReparatiesPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: "Reparaties", href: "/reparaties" }]} />
      <main className="pt-24 pb-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Reparaties
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Goedkope Reparatie{" "}
              <span className="gradient-text">Utrecht</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Laptop, computer, telefoon of tablet kapot? 
              <strong className="text-primary">Vanaf €35</strong> repareren wij je device snel en voordelig. 
              De scherpste prijzen in Utrecht met garantie.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {trustSignals.map((signal) => (
              <div 
                key={signal.text}
                className="flex items-center gap-3 p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl"
              >
                <signal.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-[var(--text-primary)] font-medium text-sm">{signal.text}</span>
              </div>
            ))}
          </div>

          {/* Repairs */}
          <div className="grid md:grid-cols-2 gap-8">
            {repairs.map((repair) => (
              <RepairDetail key={repair.title} repair={repair} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
