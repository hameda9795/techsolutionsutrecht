import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Wat Kost een Website Laten Maken in 2025? [Complete Gids]",
  description: "Benieuwd wat een website kost? Bekijk prijzen voor WordPress, webshops en maatwerk. Inclusief bespaartips. Gratis offerte bij TechSolutionsUtrecht.",
};

export default function BlogPost() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-[var(--text-secondary)] hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar blog
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Websites
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Wat Kost een Website Laten Maken in 2025?
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-[var(--text-muted)] mb-12 pb-12 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>TechSolutionsUtrecht</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>26 februari 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min leestijd</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                De kosten van een website variëren enorm. Van een paar honderd euro voor een eenvoudige 
                website tot tienduizenden euros voor complexe webapplicaties. In dit artikel geven we 
                je een realistisch beeld van wat je kunt verwachten in 2025.
              </p>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                Factoren die de prijs bepalen
              </h2>
              
              <p className="text-[var(--text-secondary)] mb-4">
                Voordat we naar concrete prijzen kijken, is het belangrijk om te begrijpen waarom 
                de ene website duurder is dan de andere:
              </p>

              <ul className="space-y-2 text-[var(--text-secondary)] mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Type website:</strong> Een simpele brochure-website is goedkoper dan een webshop of maatwerk applicatie.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Design:</strong> Een custom design kost meer dan een template.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Functionaliteit:</strong> Hoe meer features, hoe hoger de prijs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Content:</strong> Wil je dat wij teksten en foto's verzorgen?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">SEO:</strong> Wil je gevonden worden in Google?</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                Prijsindicaties per type
              </h2>

              <div className="space-y-6 my-8">
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Eenvoudige website</h3>
                  <div className="text-3xl font-bold text-primary mb-4">€1.000 - €2.500</div>
                  <p className="text-[var(--text-secondary)]">
                    Een simpele website met 3-5 pagina's, gebaseerd op een template. 
                    Geschikt voor zzp'ers en kleine bedrijven die online zichtbaar willen zijn.
                  </p>
                </div>

                <div className="p-6 bg-[var(--bg-card)] border border-primary/30 rounded-xl">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Professionele WordPress website</h3>
                  <div className="text-3xl font-bold text-primary mb-4">€2.500 - €5.000</div>
                  <p className="text-[var(--text-secondary)]">
                    Een professionele website met custom design, SEO-optimalisatie, 
                    en alle features die je nodig hebt. Dit is waar de meeste ondernemers voor kiezen.
                  </p>
                </div>

                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Webshop (WooCommerce)</h3>
                  <div className="text-3xl font-bold text-primary mb-4">€3.000 - €8.000</div>
                  <p className="text-[var(--text-secondary)]">
                    Een volledige webshop met betalingen, voorraadbeheer, en alle 
                    e-commerce functionaliteit die je nodig hebt.
                  </p>
                </div>

                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Maatwerk webapplicatie</h3>
                  <div className="text-3xl font-bold text-primary mb-4">€5.000+</div>
                  <p className="text-[var(--text-secondary)]">
                    Voor complexe projecten met unieke functionaliteit. Denk aan 
                    platforms, dashboards, of apps met specifieke requirements.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                Hidden costs waar je op moet letten
              </h2>
              
              <p className="text-[var(--text-secondary)] mb-4">
                De initiële bouw is niet het enige waar je rekening mee moet houden:
              </p>

              <ul className="space-y-2 text-[var(--text-secondary)] mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Hosting:</strong> €10-50/maand afhankelijk van je website.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Domeinnaam:</strong> ~€15/jaar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Onderhoud:</strong> Updates en beveiliging, €50-150/maand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">SSL certificaat:</strong> Vaak inbegrepen bij hosting, anders ~€50/jaar.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                Hoe kun je besparen?
              </h2>

              <ul className="space-y-2 text-[var(--text-secondary)] mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Zorg zelf voor content:</strong> Schrijf je eigen teksten en verzamel foto's.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Start simpel:</strong> Begin met een eenvoudige website en breid later uit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-[var(--text-primary)]">Vergelijk offertes:</strong> Vraag bij meerdere partijen een offerte aan.</span>
                </li>
              </ul>

              <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl mt-12">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  Wil je een concrete offerte?
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Ieder project is uniek. Neem contact met ons op voor een gratis, 
                  vrijblijvende offerte. We reageren binnen 4 uur.
                </p>
                <Link 
                  href="/contact"
                  className="btn-primary inline-flex"
                >
                  Gratis offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
