import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock, CheckCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Laten Maken Nieuwegein | Vanaf €250 | TechSolutionsUtrecht",
  description: "Website laten maken in Nieuwegein? Professionele WordPress websites vanaf €250. Snelle oplevering binnen 1 week. Ook laptop & telefoon reparatie. Gratis offerte!",
  keywords: ["website laten maken nieuwegein", "webdesign nieuwegein", "wordpress nieuwegein", "goedkope website nieuwegein", "website bouwen nieuwegein"],
  alternates: {
    canonical: "https://techsolutionsutrecht.nl/nieuwegein",
  },
  openGraph: {
    title: "Website Laten Maken Nieuwegein | Vanaf €250",
    description: "Professionele WordPress websites in Nieuwegein. Snel, goedkoop en betrouwbaar. Vanaf €250 binnen 1 week online.",
    url: "https://techsolutionsutrecht.nl/nieuwegein",
    type: "website",
  },
};

export default function NieuwegeinPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TechSolutionsUtrecht - Nieuwegein",
    "description": "Website laten maken en tech reparaties in Nieuwegein",
    "url": "https://techsolutionsutrecht.nl/nieuwegein",
    "telephone": "+31625518708",
    "email": "info@techsolutionsutrecht.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nieuwegein",
      "addressRegion": "Utrecht",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.0292",
      "longitude": "5.0886"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Nieuwegein"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  const services = [
    {
      title: "WordPress Websites",
      price: "€250 - €800",
      description: "Professionele websites voor ZZP'ers en kleine bedrijven in Nieuwegein. SEO-geoptimaliseerd en mobiel-vriendelijk.",
      features: ["Responsive design", "SEO basis inclusief", "Zelf te beheren"],
      link: "/diensten/wordpress"
    },
    {
      title: "WooCommerce Webshops",
      price: "€350 - €1.200",
      description: "Verkoop online met een professionele webshop. iDEAL, voorraadbeheer, en alle functies die je nodig hebt.",
      features: ["iDEAL & creditcard", "Voorraadbeheer", "Verzendintegratie"],
      link: "/diensten/webshop"
    },
    {
      title: "Tech Reparaties",
      price: "Vanaf €35",
      description: "Laptop, telefoon of tablet kapot? Wij repareren snel en voordelig. 6 maanden garantie op alle reparaties.",
      features: ["Scherm reparatie", "Batterij vervangen", "Waterschade"],
      link: "/reparaties"
    }
  ];

  const faqs = [
    {
      q: "Wat kost een website laten maken in Nieuwegein?",
      a: "Onze WordPress websites beginnen vanaf €250. Dit is inclusief design, ontwikkeling, SEO-basis en oplevering. Voor webshops liggen de prijzen tussen €350 en €1.200."
    },
    {
      q: "Hoe snel kan mijn website online zijn?",
      a: "Een standaard website is binnen 3-10 dagen online. Voor spoedgevallen hebben we een express-service waarbij je website binnen 1 week live kan zijn."
    },
    {
      q: "Kom je ook langs in Nieuwegein?",
      a: "Ja, we bedienen de hele regio Utrecht inclusief Nieuwegein. Afhankelijk van het project kunnen we langs komen of werken we op afstand."
    },
    {
      q: "Is SEO inclusief bij de website?",
      a: "Ja, basis SEO-optimalisatie is standaard inclusief. Dit betekent: technisch correcte opbouw, snelle laadtijden, mobiel-vriendelijk design."
    },
    {
      q: "Kan ik zelf mijn website beheren?",
      a: "Absoluut! We werken met WordPress, het meest gebruiksvriendelijke CMS. We geven je een korte instructie."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><span className="text-[var(--text-primary)] font-medium capitalize">nieuwegein</span></li>
            </ol>
          </div>
        </nav>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[var(--bg-primary)] relative overflow-hidden">
          <div className="absolute inset-0 hero-bg opacity-30" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                <span>Nieuwegein & Omgeving</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Website Laten Maken{" "}
                <span className="gradient-text">Nieuwegein</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                Professionele WordPress websites voor ondernemers in Nieuwegein. 
                Vanaf <strong className="text-primary">€250</strong>, binnen <strong className="text-primary">1 week</strong> online.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-[var(--bg-card)] px-4 py-2 rounded-full border border-[var(--border)]">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm">4.9/5 beoordeling</span>
                </div>
                <div className="flex items-center gap-2 bg-[var(--bg-card)] px-4 py-2 rounded-full border border-[var(--border)]">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">20+ tevreden klanten</span>
                </div>
                <div className="flex items-center gap-2 bg-[var(--bg-card)] px-4 py-2 rounded-full border border-[var(--border)]">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span className="text-sm">12+ jaar ervaring</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary group">
                  Gratis offerte aanvragen
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="https://wa.me/31625518708" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp direct
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Onze Diensten in Nieuwegein
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Van eenvoudige websites tot complete webshops. Wij bouwen wat jij nodig hebt.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card-hover bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{service.title}</h3>
                  <p className="text-primary font-bold text-lg mb-4">{service.price}</p>
                  <p className="text-[var(--text-secondary)] mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link} className="btn-secondary w-full text-center">
                    Meer info
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Nieuwegein */}
        <section className="py-20 bg-[var(--bg-primary)]">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                  Website Laten Maken in Nieuwegein
                </h2>
                <p className="text-[var(--text-secondary)] mb-4">
                  Nieuwegein is een dynamische gemeente met een sterke ondernemersgeest. 
                  Van het winkelcentrum City Plaza tot de vele bedrijven in de wijken als 
                  De Wiers, Huis ter Heide, en Zuilenstein.
                </p>
                <p className="text-[var(--text-secondary)] mb-6">
                  Als tech-partner helpen wij ondernemers in Nieuwegein met een professionele 
                  online presence. Eén aanspreekpunt voor al je tech-vragen.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["City Plaza", "De Wiers", "Huis ter Heide", "Zuilenstein", "Vreeswijk"].map((area) => (
                    <span key={area} className="bg-[var(--bg-tertiary)] px-3 py-1 rounded-full text-sm text-[var(--text-secondary)]">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border)]">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Wij Bedienen Ook:</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Utrecht", link: "/utrecht" },
                    { name: "Houten", link: "/houten" },
                    { name: "De Meern", link: "/de-meern" },
                    { name: "Vleuten", link: "/vleuten" },
                    { name: "IJsselstein", link: "/ijsselstein" },
                  ].map((location) => (
                    <li key={location.name}>
                      <Link href={location.link} className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-primary transition-colors">
                        <MapPin className="w-4 h-4" />
                        Website laten maken {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
                Veelgestelde Vragen
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)]">
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                    <p className="text-[var(--text-secondary)]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
          <div className="absolute inset-0 hero-bg opacity-30" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Klaar voor Jouw Nieuwe Website in Nieuwegein?
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Vraag een gratis offerte aan. Binnen 4 uur reactie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary group">
                  Start je project
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="https://wa.me/31625518708" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp: +31 6 25518708
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
