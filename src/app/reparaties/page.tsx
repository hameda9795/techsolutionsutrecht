import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import RepairDetail from "@/components/RepairDetail";
import { Shield, Clock, Award, CheckCircle, Phone } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/reparaties";

export const metadata: Metadata = {
  title: "Computer & Laptop Reparatie Utrecht | Vanaf €35 | TechSolutionsUtrecht",
  description:
    "Laptop, computer, telefoon en tablet reparatie in Utrecht vanaf €35. Snelle service, 6 maanden garantie en no cure no pay. WhatsApp +31 6 25518708.",
  alternates: { canonical: pageUrl },
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
    description: "Scherm, batterij, waterschade en trage laptops — snel en betrouwbaar verholpen.",
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
    description: "Van virusverwijdering tot SSD-upgrades en data recovery voor desktop-pc's.",
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
    description: "MacBook, iMac en Mac mini met originele of hoogwaardige onderdelen.",
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
    description: "iPhone, iPad, Samsung en Android: scherm, accu en oplaadpoort snel hersteld.",
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

const deviceLinks = [
  { s: "laptop", l: "Laptop reparatie" },
  { s: "computer", l: "Computer reparatie" },
  { s: "mac", l: "Mac & MacBook reparatie" },
  { s: "telefoon", l: "Telefoon reparatie" },
  { s: "ipad", l: "iPad reparatie" },
  { s: "tablet", l: "Tablet reparatie" },
];

const faqs = [
  {
    question: "Wat kost een reparatie bij TechSolutionsUtrecht?",
    answer:
      "Reparaties starten vanaf €35 voor telefoons en €40 voor laptops en computers. De exacte prijs hangt af van het apparaat en het probleem. Je krijgt altijd een offerte vooraf en met no cure no pay betaal je niets als de reparatie niet lukt.",
  },
  {
    question: "Hoe snel is mijn apparaat gerepareerd?",
    answer:
      "Veel voorkomende reparaties zijn dezelfde dag of binnen enkele werkdagen klaar. Telefoonreparaties zoals scherm of accu zijn vaak klaar terwijl je wacht. Moet er een onderdeel besteld worden, dan hoor je vooraf de levertijd.",
  },
  {
    question: "Geven jullie garantie op reparaties?",
    answer:
      "Ja, op elke uitgevoerde reparatie geef ik 6 maanden garantie. Daarnaast werk ik met no cure no pay, dus lukt de reparatie onverhoopt niet, dan betaal je niets.",
  },
  {
    question: "In welke regio zijn jullie actief?",
    answer:
      "Ik help klanten in Utrecht en omgeving, waaronder Nieuwegein, Houten, Zeist, IJsselstein, De Meern en Vleuten. Neem contact op via WhatsApp om een afspraak in te plannen.",
  },
];

const service = serviceSchema({
  name: "Computer- en telefoonreparatie Utrecht",
  description:
    "Reparatie van laptops, computers, Macs, telefoons en tablets in Utrecht vanaf €35, met 6 maanden garantie en no cure no pay.",
  url: pageUrl,
});
const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Reparaties", url: pageUrl },
]);
const faqSchema = faqPageSchema(faqs);

export default function ReparatiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Breadcrumb items={[{ label: "Reparaties", href: "/reparaties" }]} />
      <main className="pt-24 pb-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Reparaties
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Reparatie <span className="gradient-text">Utrecht</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Laptop, computer, telefoon of tablet kapot? <strong className="text-primary">Vanaf €35</strong> repareer ik
              je apparaat snel en betrouwbaar, met een eerlijke prijs vooraf, 6 maanden garantie en no cure no pay.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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

          {/* Direct naar je apparaat */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Direct naar je apparaat</h2>
            <div className="flex flex-wrap gap-3">
              {deviceLinks.map((d) => (
                <Link key={d.s} href={`/reparaties/${d.s}`} className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-primary/40 transition-colors text-sm">
                  {d.l}
                </Link>
              ))}
            </div>
          </section>

          {/* Waarom kiezen */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Waarom je reparatie bij mij in goede handen is</h2>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              Een kapot apparaat is vervelend, zeker als je ervan afhankelijk bent voor werk of studie. Daarom werk ik
              snel, eerlijk en transparant: je krijgt vooraf te horen wat het probleem is en wat de reparatie kost,
              zonder verborgen kosten achteraf.
            </p>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              Met 12 jaar ervaring repareer ik laptops, desktops, Macs, telefoons en tablets van vrijwel elk merk. Je
              hebt direct contact met de technicus die je apparaat onder handen neemt, geen anonieme balie of
              wachtrij. En dankzij no cure no pay loop je geen risico.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Ik help klanten in heel Utrecht en omgeving, waaronder Nieuwegein, Houten, Zeist, IJsselstein, De Meern
              en Vleuten. Stuur een berichtje via WhatsApp met je klacht en je krijgt snel een eerlijke prijsindicatie.
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10">Veelgestelde vragen over reparaties</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 text-center bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Apparaat kapot? Ik help je snel verder.</h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Stuur een berichtje met je klacht en je krijgt snel een eerlijke prijsindicatie. No cure, no pay en 6 maanden garantie op de reparatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Afspraak maken
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
