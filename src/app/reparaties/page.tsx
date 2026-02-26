import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RepairDetail from "@/components/RepairDetail";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Reparaties | Computer & Laptop Reparatie Utrecht",
  description: "Snelle en betrouwbare tech reparaties in Utrecht. Laptop, computer, Mac, telefoon & tablet. Vaak binnen 24 uur gerepareerd.",
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
    description: "Snel en vakkundig. Scherm, batterij, waterschade — wij fixen het.",
    repairs: [
      "Scherm reparatie",
      "Batterij vervangen",
      "Toetsenbord vervangen",
      "Waterschade behandeling",
      "Virus & malware removal",
      "Snelheidsoptimalisatie",
    ],
    brands: ["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "MSI"],
    price: "Vanaf €79",
  },
  {
    icon: "computer",
    title: "Computer Reparatie",
    description: "Van virusremoval tot hardware upgrades. Weer als nieuw.",
    repairs: [
      "Niet opstarten",
      "Traagheid / freezes",
      "Virus & malware",
      "Hardware upgrades",
      "Data recovery",
      "Netwerk problemen",
    ],
    brands: ["Alle merken"],
    price: "Vanaf €59",
  },
  {
    icon: "mac",
    title: "Mac & MacBook Reparatie",
    description: "Specialist in Apple reparaties met originele onderdelen.",
    repairs: [
      "MacBook scherm reparatie",
      "MacBook batterij vervangen",
      "iMac reparaties",
      "Mac mini upgrades",
      "macOS problemen",
      "Data herstel",
    ],
    brands: ["MacBook", "MacBook Air", "MacBook Pro", "iMac", "Mac mini"],
    price: "Vanaf €99",
  },
  {
    icon: "phone",
    title: "Telefoon & Tablet",
    description: "iPhone, iPad, Samsung — originele onderdelen, garantie inbegrepen.",
    repairs: [
      "Scherm reparatie",
      "Batterij vervangen",
      "Laadpoort reparatie",
      "Waterschade",
      "Camera reparatie",
      "Back cover vervangen",
    ],
    brands: ["iPhone", "iPad", "Samsung", "Huawei", "OnePlus", "Xiaomi"],
    price: "Vanaf €49",
  },
];

export default function ReparatiesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Reparaties
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Je Tech Weer{" "}
              <span className="gradient-text">als Nieuw</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Laptop die niet start? iPhone met een gebarsten scherm? 
              Geen paniek. Wij repareren snel, vakkundig en tegen 
              concurrerende prijzen. Met garantie, uiteraard.
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
