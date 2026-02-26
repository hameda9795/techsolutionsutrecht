import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Diensten | Website Laten Maken & Webshop Bouwen Utrecht",
  description: "Alle webdiensten onder één dak: WordPress, WooCommerce, maatwerk en SEO. Bekijk wat wij voor jou kunnen betekenen.",
};

const services = [
  {
    icon: "wordpress",
    title: "WordPress Websites",
    description: "WordPress is 's werelds meest gebruikte CMS — en dat is niet voor niks. Het is gebruiksvriendelijk, SEO-vriendelijk en endless expandable.",
    features: [
      "Professioneel design op maat",
      "SEO-optimalisatie standaard",
      "Mobiel-vriendelijk (responsive)",
      "CMS zodat je zelf kunt beheren",
      "Snelle laadtijden",
      "Veiligheid updates",
    ],
    price: "Vanaf €1.499",
    time: "2-4 weken",
    href: "/diensten/wordpress",
    color: "blue",
  },
  {
    icon: "webshop",
    title: "WooCommerce Webshops",
    description: "Met WooCommerce bouwen we een webshop die meegroeit met je business. Van startup tot enterprise.",
    features: [
      "Professioneel design",
      "Betalingen (iDEAL, creditcard, PayPal)",
      "Voorraadbeheer",
      "Verzendintegraties",
      "BTW-rapportages",
      "SEO voor producten",
    ],
    price: "Vanaf €2.499",
    time: "3-6 weken",
    href: "/diensten/webshop",
    color: "orange",
  },
  {
    icon: "maatwerk",
    title: "Maatwerk Webapplicaties",
    description: "Soms heb je meer dan een standaard website nodig. Wij bouwen custom webapplicaties met moderne technologie.",
    features: [
      "Next.js & React",
      "Node.js backend",
      "Database architectuur",
      "API integraties",
      "Real-time features",
      "Schaalbare hosting",
    ],
    price: "Vanaf €5.000",
    time: "Projectafhankelijk",
    href: "/diensten/maatwerk",
    color: "purple",
  },
  {
    icon: "seo",
    title: "SEO Optimalisatie",
    description: "Een mooie website is niets waard als niemand 'm vindt. Wij zorgen dat je gevonden wordt.",
    features: [
      "Technische SEO analyse",
      "Keyword onderzoek",
      "Content optimalisatie",
      "Linkbuilding strategie",
      "Local SEO (Google Business)",
      "Maandelijkse rapportage",
    ],
    price: "Vanaf €499/maand",
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
