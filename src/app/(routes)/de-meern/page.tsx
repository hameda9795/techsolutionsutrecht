import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock, CheckCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Laten Maken De Meern | Vanaf €250 | TechSolutionsUtrecht",
  description: "Laat je professionele website maken in De Meern. 12+ jaar ervaring, moderne technologie, scherpe prijzen. WordPress, Next.js, SEO-geoptimaliseerd. Gratis offerte!",
  keywords: ["website laten maken de meern", "webdesign de meern", "wordpress de meern"],
  alternates: { canonical: "https://techsolutionsutrecht.nl/de-meern" },
};

export default function DeMeernPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TechSolutionsUtrecht - De Meern",
    "description": "Website laten maken in De Meern door ervaren webdeveloper",
    "url": "https://techsolutionsutrecht.nl/de-meern",
    "telephone": "+31625518708",
    "address": { "@type": "PostalAddress", "addressLocality": "De Meern", "addressRegion": "Utrecht", "addressCountry": "NL" },
    "geo": { "@type": "GeoCoordinates", "latitude": "52.0800", "longitude": "5.0167" },
    "serviceArea": { "@type": "City", "name": "De Meern" },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  const services = [
    { title: "WordPress Websites", price: "€250 - €800", description: "Professionele websites voor ZZP'ers en kleine bedrijven in De Meern. Modern design, snel en SEO-geoptimaliseerd.", features: ["Responsive design", "SEO basis inclusief", "Zelf te beheren"], link: "/diensten/wordpress" },
    { title: "WooCommerce Webshops", price: "€350 - €1.200", description: "Verkoop online met een professionele webshop die converteert.", features: ["iDEAL & creditcard", "Voorraadbeheer", "Verzendintegratie"], link: "/diensten/webshop" },
    { title: "Maatwerk Webapplicaties", price: "€400 - €2.000", description: "Complexere oplossingen met React, Next.js of Angular voor jouw specifieke noden.", features: ["React & Next.js", "API integraties", "Schaalbaar"], link: "/diensten/maatwerk" }
  ];

  const faqs = [
    { q: "Wat kost een website laten maken in De Meern?", a: "Websites beginnen vanaf €250. Dit is inclusief design, ontwikkeling, SEO-basis en oplevering. Geen verborgen kosten, scherpe prijzen door efficiënte werkwijze met moderne tools." },
    { q: "Hoe snel kan mijn website online zijn?", a: "Dankzij moderne frameworks zoals Next.js en WordPress is je website binnen 1 week online. Geen maanden wachten zoals bij traditionele bureaus." },
    { q: "Kom je ook langs in De Meern?", a: "Ja, ik bedien de hele regio Utrecht inclusief De Meern. We kunnen afspreken voor een vrijblijvend gesprek over jouw project." },
    { q: "Is SEO inclusief bij de website?", a: "Ja, technische SEO-optimalisatie is standaard inclusief. Ik zorg dat je website goed gevonden wordt in Google." },
    { q: "Waarom zijn jouw prijzen lager dan andere?", a: "Ik werk als freelancer zonder dure overhead. Daarnaast gebruik ik moderne tools die sneller werken. Dezelfde kwaliteit, scherpere prijs." }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="pt-24 bg-white">
        {/* Breadcrumb */}
        <nav className="py-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-500 hover:text-[#0f766e]">Home</Link></li>
              <li className="text-slate-400">/</li>
              <li><span className="text-slate-900">De Meern</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f766e]/10 text-[#0f766e] text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                De Meern
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Website Laten Maken{" "}
                <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">De Meern</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                Professionele websites voor ondernemers in De Meern. Modern, snel en SEO-geoptimaliseerd. 
                Met 12+ jaar ervaring bouw ik websites die jouw bedrijf laten groeien.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/31625518708"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Gratis offerte aanvragen
                </a>
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50"
                >
                  Bekijk werk
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Diensten in De Meern
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <div className="text-[#0f766e] font-bold text-lg mb-3">{service.price}</div>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="text-[#0f766e] font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Meer info <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">12+</div>
                  <div className="text-white/80">Jaar ervaring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <div className="text-white/80">Tevreden klanten</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1 week</div>
                  <div className="text-white/80">Levertijd</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Veelgestelde vragen</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
