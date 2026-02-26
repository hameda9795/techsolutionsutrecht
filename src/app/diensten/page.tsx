import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Goedkope Website Laten Maken Utrecht | Voordelig & Snel | TechSolutionsUtrecht",
  description: "Goedkope website laten maken vanaf €250. Snelle oplevering binnen 3-10 dagen. WordPress, webshop, maatwerk tegen scherpe prijzen in Utrecht. Gratis offerte!",
  keywords: ["goedkope website laten maken utrecht", "voordelige website", "betaalbare website", "snelle website", "lage prijs webdesign"],
};

const services = [
  {
    icon: "wordpress",
    title: "WordPress Websites",
    description: "Goedkope WordPress website laten maken? Vanaf €250 al binnen 3 dagen online. Professioneel, snel en betaalbaar. Perfect voor starters en MKB.",
    features: [
      "Professioneel design op maat",
      "SEO-optimalisatie standaard",
      "Mobiel-vriendelijk (responsive)",
      "CMS zodat je zelf kunt beheren",
      "Snelle laadtijden",
      "Voordelige prijs",
    ],
    price: "€250 - €800",
    time: "3-10 dagen",
    href: "/diensten/wordpress",
    color: "blue",
  },
  {
    icon: "webshop",
    title: "WooCommerce Webshops",
    description: "Betaalbare webshop laten maken vanaf €350. Verkoop online met een professionele webshop tegen scherpe prijzen. Snel online en klaar voor groei.",
    features: [
      "Professioneel design",
      "Betalingen (iDEAL, creditcard, PayPal)",
      "Voorraadbeheer",
      "Verzendintegraties",
      "BTW-rapportages",
      "SEO voor producten",
    ],
    price: "€350 - €1.200",
    time: "5-12 dagen",
    href: "/diensten/webshop",
    color: "orange",
  },
  {
    icon: "maatwerk",
    title: "Maatwerk Webapplicaties",
    description: "Snelle maatwerk webapplicatie laten bouwen vanaf €400. Express oplevering mogelijk. Moderne technologie tegen voordelige prijzen.",
    features: [
      "Next.js & React",
      "Node.js backend",
      "Database architectuur",
      "API integraties",
      "Real-time features",
      "Schaalbare hosting",
    ],
    price: "€400 - €2.000",
    time: "5-12 dagen",
    href: "/diensten/maatwerk",
    color: "purple",
  },
  {
    icon: "seo",
    title: "SEO Optimalisatie",
    description: "Goedkope SEO optimalisatie vanaf €200 per maand. Hoger in Google tegen een betaalbare prijs. Direct resultaat.",
    features: [
      "Technische SEO analyse",
      "Keyword onderzoek",
      "Content optimalisatie",
      "Linkbuilding strategie",
      "Local SEO (Google Business)",
      "Maandelijkse rapportage",
    ],
    price: "Vanaf €200/maand",
    time: "Doorlopend",
    href: "/diensten/seo",
    color: "green",
  },
];

export default function DienstenPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Onze Diensten
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Jouw Online Succes{" "}
              <span className="gradient-text">Begint Hier</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Of je nu een eenvoudige website nodig hebt of een complexe 
              webapplicatie — wij bouwen wat jij nodig hebt. 
              Met 12 jaar ervaring en 500+ succesvolle projecten zijn wij 
              jouw betrouwbare partner in Utrecht.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceDetail key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
