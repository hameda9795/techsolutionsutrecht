import Link from "next/link";
import { MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityPageProps {
  city: string;
  slug: string;
  /** Unique intro paragraphs shown in the hero / first section */
  intro: string[];
  /** Local neighbourhoods or landmarks for genuine local relevance */
  neighbourhoods: string[];
  /** Unique paragraph explaining why a local developer near this city helps */
  whyLocal: string[];
  /** Unique paragraphs about the way of working for this city */
  approach: string[];
  faqs: CityFaq[];
}

const baseUrl = "https://techsolutionsutrecht.nl";

export default function CityPageLayout({
  city,
  slug,
  intro,
  neighbourhoods,
  whyLocal,
  approach,
  faqs,
}: CityPageProps) {
  const url = `${baseUrl}/${slug}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `TechSolutionsUtrecht — Website laten maken ${city}`,
    "description": `Professionele website laten maken in ${city} door een ervaren freelance webdeveloper uit de regio Utrecht.`,
    "image": `${baseUrl}/profile.webp`,
    "url": url,
    "telephone": "+31625518708",
    "email": "info@techsolutionsutrecht.nl",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Utrecht",
      "addressRegion": "Utrecht",
      "addressCountry": "NL",
    },
    "areaServed": { "@type": "City", "name": city },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00",
    },
    "founder": { "@type": "Person", "name": "Max", "jobTitle": "Webdeveloper" },
  };

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: `Website laten maken ${city}`, url },
  ]);

  const faqSchema = faqPageSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white">
        {/* Breadcrumb */}
        <nav className="py-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-500 hover:text-[#0f766e]">Home</Link></li>
              <li className="text-slate-400">/</li>
              <li><span className="text-slate-900">Website laten maken {city}</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f766e]/10 text-[#0f766e] text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                {city}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Website Laten Maken in{" "}
                <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">{city}</span>
              </h1>
              {intro.map((p, i) => (
                <p key={i} className="text-lg text-slate-600 mb-5 leading-relaxed">{p}</p>
              ))}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                  <Phone className="w-5 h-5" />
                  Gratis advies via WhatsApp
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Diensten voor ondernemers in {city}</h2>
            <p className="text-slate-600 mb-10 max-w-2xl">{approach[0]}</p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/diensten/wordpress" className="group bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">WordPress website <ArrowRight className="w-4 h-4 text-[#0f766e] opacity-0 group-hover:opacity-100 transition-opacity" /></h3>
                <p className="text-slate-600 text-sm">Een professionele, zelf te beheren website die snel laadt en goed scoort in Google.</p>
              </Link>
              <Link href="/diensten/webshop" className="group bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">Webshop <ArrowRight className="w-4 h-4 text-[#0f766e] opacity-0 group-hover:opacity-100 transition-opacity" /></h3>
                <p className="text-slate-600 text-sm">Een complete WooCommerce-webshop met iDEAL en voorraadbeheer, klaar om te verkopen.</p>
              </Link>
              <Link href="/diensten/maatwerk" className="group bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">Maatwerk <ArrowRight className="w-4 h-4 text-[#0f766e] opacity-0 group-hover:opacity-100 transition-opacity" /></h3>
                <p className="text-slate-600 text-sm">Webapplicaties, dashboards en portals op maat, gebouwd met React en Next.js.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Why local */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Waarom een webdeveloper dicht bij {city}?</h2>
              {whyLocal.map((p, i) => (
                <p key={i} className="text-slate-600 mb-4 leading-relaxed">{p}</p>
              ))}
              <p className="text-slate-600 leading-relaxed">
                Ik werk regelmatig voor ondernemers in {neighbourhoods.join(", ")} en de rest van de regio.
                Korte lijnen, snelle reactie en geen anonieme helpdesk.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Zo werken we samen</h2>
              <ul className="space-y-4">
                {approach.slice(1).map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-1" />
                    <span className="text-slate-600 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Veelgestelde vragen — {city}</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Klaar voor een nieuwe website in {city}?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Stuur een appje of vraag vrijblijvend een offerte aan. Je krijgt binnen één werkdag een reactie,
              direct van de developer die je project bouwt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                Bekijk portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
