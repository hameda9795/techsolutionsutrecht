import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Laten Maken Houten | Vanaf €250 | TechSolutionsUtrecht",
  description: "Laat je professionele website maken in Houten. 12+ jaar ervaring, moderne technologie, scherpe prijzen. WordPress, Next.js, SEO-geoptimaliseerd. Gratis offerte!",
  keywords: ["website laten maken houten", "webdesign houten", "wordpress houten"],
  alternates: { canonical: "https://techsolutionsutrecht.nl/houten" },
};

export default function HoutenPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TechSolutionsUtrecht - Houten",
    "description": "Website laten maken in Houten door ervaren webdeveloper",
    "url": "https://techsolutionsutrecht.nl/houten",
    "telephone": "+31625518708",
    "address": { "@type": "PostalAddress", "addressLocality": "Houten", "addressRegion": "Utrecht", "addressCountry": "NL" },
    "serviceArea": { "@type": "City", "name": "Houten" },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="pt-24 bg-white">
        <nav className="py-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-500 hover:text-[#0f766e]">Home</Link></li>
              <li className="text-slate-400">/</li>
              <li><span className="text-slate-900">Houten</span></li>
            </ol>
          </div>
        </nav>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f766e]/10 text-[#0f766e] text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Houten
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Website Laten Maken{" "}
                <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">Houten</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                Professionele webdevelopment services in Houten. Moderne websites, SEO-optimalisatie 
                en persoonlijke service door een ervaren developer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/31625518708"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E]"
                >
                  <Phone className="w-5 h-5" />
                  Gratis offerte
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Waarom kiezen voor mij?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-[#0f766e]/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#0f766e]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Scherpe prijzen</h3>
                <p className="text-slate-600">Vanaf €250 voor een professionele website. Geen dure overhead, wel premium kwaliteit.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-[#0f766e]/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#0f766e]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Snelle oplevering</h3>
                <p className="text-slate-600">Binnen 1 week online. Moderne tools maken het verschil.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-[#0f766e]/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#0f766e]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">SEO geoptimaliseerd</h3>
                <p className="text-slate-600">Technische SEO inclusief. Jouw website gevonden worden in Google.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
