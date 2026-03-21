import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, CheckCircle, AlertCircle } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Wat Kost een Website Laten Maken in 2026? [Prijzen & Gids]",
  description: "Wat kost een website laten maken in 2026? Bekijk actuele prijzen: vanaf €250 voor een eenvoudige site tot €8.000+ voor een webshop. Gratis offerte via TechSolutionsUtrecht Utrecht.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat kost een website laten maken in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De kosten voor een website laten maken in 2026 variëren van €250 voor een eenvoudige website tot €8.000+ voor een professionele webshop. Een gemiddelde WordPress website kost tussen de €1.500 en €3.500."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost een WordPress website laten maken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een professionele WordPress website kost bij TechSolutionsUtrecht vanaf €1.500. Dit inclusief design, installatie, SEO-basis en 3 maanden gratis onderhoud."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost een webshop laten maken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een WooCommerce webshop kost gemiddeld tussen de €2.500 en €8.000, afhankelijk van het aantal producten, betaalopties en maatwerk functionaliteit."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe lang duurt het om een website te laten maken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bij TechSolutionsUtrecht is een standaard website al binnen 1 week online. Een complexe webshop of maatwerk applicatie duurt 3-6 weken."
      }
    },
    {
      "@type": "Question",
      "name": "Wat zijn de maandelijkse kosten van een website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rekening houden met hosting (€10-50/maand), domeinnaam (~€15/jaar) en optioneel onderhoud (€50-150/maand). Bij TechSolutionsUtrecht zijn de eerste 3 maanden onderhoud gratis inbegrepen."
      }
    },
    {
      "@type": "Question",
      "name": "Is een goedkope website van €250 de moeite waard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voor startende zzp'ers en kleine bedrijven kan een website vanaf €250 een uitstekend startpunt zijn. Je krijgt een professionele online aanwezigheid met je eigen domeinnaam en een mobiel-vriendelijk design."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Wat Kost een Website Laten Maken in 2026? [Prijzen & Gids]",
  "description": "Actuele prijzen voor het laten maken van een website in 2026. Van €250 voor een eenvoudige site tot €8.000 voor een webshop.",
  "author": {
    "@type": "Organization",
    "name": "TechSolutionsUtrecht",
    "url": "https://techsolutionsutrecht.nl"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TechSolutionsUtrecht",
    "logo": {
      "@type": "ImageObject",
      "url": "https://techsolutionsutrecht.nl/logo.png"
    }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-03-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://techsolutionsutrecht.nl/blog/wat-kost-een-website-laten-maken"
  }
};

export default function BlogPost() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pb-24">
        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-[var(--text-muted)]">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/blog" className="text-[var(--text-muted)] hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-[var(--text-muted)]">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-[var(--text-primary)] font-medium" itemProp="name">Wat kost een website laten maken</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <div className="container-custom pt-8">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-[var(--text-secondary)] hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar blog
            </Link>

            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Websites & Prijzen
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Wat Kost een Website Laten Maken in 2026?
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-[var(--text-muted)] mb-8 pb-8 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>TechSolutionsUtrecht</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Bijgewerkt: 1 maart 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min leestijd</span>
              </div>
            </div>

            {/* Quick Answer Box */}
            <div className="p-6 bg-primary/10 border border-primary/30 rounded-xl mb-10">
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">⚡ Snel antwoord</h2>
              <p className="text-[var(--text-secondary)]">
                Een website laten maken kost in 2026 tussen de <strong className="text-primary">€250 en €8.000+</strong>, afhankelijk van type en complexiteit:
              </p>
              <ul className="mt-3 space-y-1 text-[var(--text-secondary)]">
                <li>• <strong className="text-[var(--text-primary)]">Eenvoudige website:</strong> vanaf €250</li>
                <li>• <strong className="text-[var(--text-primary)]">WordPress website:</strong> €1.500 – €3.500</li>
                <li>• <strong className="text-[var(--text-primary)]">Webshop:</strong> €2.500 – €8.000</li>
                <li>• <strong className="text-[var(--text-primary)]">Maatwerk applicatie:</strong> €5.000+</li>
              </ul>
            </div>

            <div className="prose prose-invert max-w-none">

              <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                Je wilt een website laten maken, maar wat kost dat eigenlijk in 2026? De prijzen lopen sterk uiteen —
                van een paar honderd euro voor een eenvoudige site tot tienduizenden euro's voor een complexe webapplicatie.
                In dit artikel geven we je <strong className="text-[var(--text-primary)]">eerlijke, actuele prijzen</strong> en laten
                we je precies zien waar je op moet letten.
              </p>

              {/* Inhoudsopgave */}
              <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl mb-10">
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3">📋 Inhoudsopgave</h2>
                <ol className="space-y-1 text-primary">
                  <li><a href="#factoren" className="hover:underline">1. Factoren die de prijs bepalen</a></li>
                  <li><a href="#prijzen" className="hover:underline">2. Prijzen per type website in 2026</a></li>
                  <li><a href="#vergelijking" className="hover:underline">3. Vergelijking: goedkoop vs. professioneel</a></li>
                  <li><a href="#maandelijkse-kosten" className="hover:underline">4. Maandelijkse kosten (hosting, onderhoud)</a></li>
                  <li><a href="#besparen" className="hover:underline">5. Hoe kun je besparen zonder in te leveren?</a></li>
                  <li><a href="#utrecht" className="hover:underline">6. Website laten maken in Utrecht</a></li>
                  <li><a href="#faq" className="hover:underline">7. Veelgestelde vragen</a></li>
                </ol>
              </div>

              {/* Sectie 1 */}
              <h2 id="factoren" className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                1. Factoren die de prijs bepalen
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Voordat we naar concrete prijzen kijken, is het belangrijk te begrijpen waarom websites zo verschillend geprijsd zijn.
                De volgende factoren hebben de grootste invloed:
              </p>
              <ul className="space-y-3 text-[var(--text-secondary)] mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Type website:</strong> Een eenvoudige brochuresite is goedkoper dan een webshop of maatwerk platform.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Design:</strong> Een uniek custom design kost meer dan een kant-en-klaar template.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Functionaliteit:</strong> Reserveringssysteem, ledenomgeving, betaalkoppeling — elke feature kost tijd.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Content:</strong> Teksten en foto's aanleveren of laten verzorgen maakt een groot prijsverschil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">SEO-optimalisatie:</strong> Een SEO-vriendelijke website kost iets meer, maar levert op de lange termijn veel meer op.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Doorlooptijd:</strong> Spoedopdrachten kunnen meer kosten dan een regulier traject.</span>
                </li>
              </ul>

              {/* Sectie 2 */}
              <h2 id="prijzen" className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                2. Prijzen per type website in 2026
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Hieronder vind je een realistisch prijsoverzicht voor 2026. Deze prijzen zijn gebaseerd op
                wat Nederlandse webbouwers en freelancers vragen.
              </p>

              <div className="space-y-6 my-8">
                {/* Eenvoudig */}
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">Eenvoudige website (zzp / starter)</h3>
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium">Populair</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-4">€250 – €1.500</div>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Een professionele website met 3-5 pagina's op basis van een modern template.
                    Ideaal voor zzp'ers, startende ondernemers en lokale bedrijven die snel online willen.
                  </p>
                  <ul className="space-y-1 text-[var(--text-secondary)] text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Mobiel-vriendelijk (responsive)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Contactformulier</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Google Maps integratie</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Basis SEO-instellingen</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Binnen 1 week online</li>
                  </ul>
                </div>

                {/* WordPress */}
                <div className="p-6 bg-[var(--bg-card)] border-2 border-primary/50 rounded-xl relative">
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-white rounded-full text-sm font-bold">
                    Meest gekozen
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Professionele WordPress website</h3>
                  <div className="text-3xl font-bold text-primary mb-4">€1.500 – €3.500</div>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Een op maat gemaakte WordPress website met uniek design, uitgebreide SEO-optimalisatie
                    en alle functionaliteit die een groeiend bedrijf nodig heeft.
                  </p>
                  <ul className="space-y-1 text-[var(--text-secondary)] text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Custom design op maat</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Volledige SEO-optimalisatie</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Zelf content beheren (CMS)</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Blog / nieuwspagina</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 3 maanden gratis onderhoud</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> SSL-certificaat inbegrepen</li>
                  </ul>
                </div>

                {/* Webshop */}
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Webshop (WooCommerce / Shopify)</h3>
                  <div className="text-3xl font-bold text-primary mb-4">€2.500 – €8.000</div>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Een complete webshop met productpagina's, winkelwagen, betalingskoppeling (iDEAL, creditcard)
                    en voorraadbeheer. Geschikt voor webwinkels van elke omvang.
                  </p>
                  <ul className="space-y-1 text-[var(--text-secondary)] text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> iDEAL / Mollie betaalintegratie</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Producten en voorraadbeheer</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Automatische orderbevestiging</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> BTW en facturatie</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Koppeling PostNL / DHL</li>
                  </ul>
                </div>

                {/* Maatwerk */}
                <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Maatwerk webapplicatie</h3>
                  <div className="text-3xl font-bold text-primary mb-4">€5.000+</div>
                  <p className="text-[var(--text-secondary)] mb-4">
                    Voor bedrijven die unieke functionaliteit nodig hebben: een platform, dashboard,
                    boekingssysteem, ledenomgeving of interne bedrijfsapplicatie.
                  </p>
                  <ul className="space-y-1 text-[var(--text-secondary)] text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Volledig op maat gebouwd</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> API-koppelingen met andere systemen</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Gebruikersbeheer en rollen</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Schaalbaarheid voor groei</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Langdurige samenwerking en support</li>
                  </ul>
                </div>
              </div>

              {/* Sectie 3 */}
              <h2 id="vergelijking" className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                3. Goedkoop vs. professioneel: wat zijn de verschillen?
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Een goedkope website van €99 via een websitebouwer zoals Wix of Jimdo lijkt aantrekkelijk,
                maar er zijn belangrijke nadelen. Hier is de eerlijke vergelijking:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-3 pr-4 text-[var(--text-primary)] font-bold">Aspect</th>
                      <th className="text-left py-3 pr-4 text-red-400 font-bold">Websitebouwer (Wix/Jimdo)</th>
                      <th className="text-left py-3 text-green-400 font-bold">Professionele bouwer</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--text-secondary)]">
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 pr-4 font-medium text-[var(--text-primary)]">Eigen domeinnaam</td>
                      <td className="py-3 pr-4 text-red-400">❌ Alleen bij betaald plan</td>
                      <td className="py-3 text-green-400">✅ Altijd inbegrepen</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 pr-4 font-medium text-[var(--text-primary)]">SEO-mogelijkheden</td>
                      <td className="py-3 pr-4 text-red-400">❌ Beperkt</td>
                      <td className="py-3 text-green-400">✅ Volledig</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 pr-4 font-medium text-[var(--text-primary)]">Snelheid</td>
                      <td className="py-3 pr-4 text-red-400">❌ Vaak traag</td>
                      <td className="py-3 text-green-400">✅ Geoptimaliseerd</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 pr-4 font-medium text-[var(--text-primary)]">Maatwerk design</td>
                      <td className="py-3 pr-4 text-red-400">❌ Alleen templates</td>
                      <td className="py-3 text-green-400">✅ Volledig op maat</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]/50">
                      <td className="py-3 pr-4 font-medium text-[var(--text-primary)]">Eigenaar van website</td>
                      <td className="py-3 pr-4 text-red-400">❌ Platform is eigenaar</td>
                      <td className="py-3 text-green-400">✅ Jij bent eigenaar</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-[var(--text-primary)]">Support</td>
                      <td className="py-3 pr-4 text-red-400">❌ Alleen chat/email</td>
                      <td className="py-3 text-green-400">✅ Persoonlijk contact</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Sectie 4 */}
              <h2 id="maandelijkse-kosten" className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                4. Maandelijkse kosten: waar moet je rekening mee houden?
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Naast de eenmalige bouwkosten zijn er doorlopende kosten. Hier een volledig overzicht:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start justify-between p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                  <div>
                    <div className="font-bold text-[var(--text-primary)]">Hosting</div>
                    <div className="text-sm text-[var(--text-secondary)]">Opslagruimte voor je website op een server</div>
                  </div>
                  <div className="text-primary font-bold text-right">€10 – €50/mnd</div>
                </div>
                <div className="flex items-start justify-between p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                  <div>
                    <div className="font-bold text-[var(--text-primary)]">Domeinnaam</div>
                    <div className="text-sm text-[var(--text-secondary)]">Jouw .nl of .com adres</div>
                  </div>
                  <div className="text-primary font-bold text-right">~€15/jaar</div>
                </div>
                <div className="flex items-start justify-between p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                  <div>
                    <div className="font-bold text-[var(--text-primary)]">SSL-certificaat</div>
                    <div className="text-sm text-[var(--text-secondary)]">Beveiliging (https) — vaak inbegrepen bij hosting</div>
                  </div>
                  <div className="text-primary font-bold text-right">Gratis – €50/jaar</div>
                </div>
                <div className="flex items-start justify-between p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg">
                  <div>
                    <div className="font-bold text-[var(--text-primary)]">Onderhoud & updates</div>
                    <div className="text-sm text-[var(--text-secondary)]">WordPress updates, beveiligingspatches, backups</div>
                  </div>
                  <div className="text-primary font-bold text-right">€50 – €150/mnd</div>
                </div>
              </div>
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-start gap-3 mb-8">
                <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Let op:</strong> Bij TechSolutionsUtrecht zijn de eerste 3 maanden onderhoud gratis inbegrepen bij elk websiteproject. Zo ben je zeker dat alles goed blijft werken na de lancering.
                </p>
              </div>

              {/* Sectie 5 */}
              <h2 id="besparen" className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                5. Hoe kun je besparen zonder in te leveren op kwaliteit?
              </h2>
              <ul className="space-y-3 text-[var(--text-secondary)] mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Lever je eigen content aan:</strong> Schrijf je eigen teksten en verzamel foto's. Dit kan €500-€1.000 besparen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Begin klein en breid later uit:</strong> Start met een eenvoudige website en voeg functies toe naarmate je bedrijf groeit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Kies een lokale webbouwer:</strong> Lokale bureaus in Utrecht zijn vaak goedkoper dan grote agencies en bieden meer persoonlijke service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Vraag meerdere offertes aan:</strong> Vergelijk minimaal 3 offertes om een eerlijke prijs te krijgen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Kies voor vaste prijzen:</strong> Bij TechSolutionsUtrecht werken we met <Link href="/diensten" className="text-primary hover:underline">vaste, transparante tarieven</Link> — geen verrassingen achteraf.</span>
                </li>
              </ul>

              {/* Sectie 6 */}
              <h2 id="utrecht" className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4">
                6. Website laten maken in Utrecht
              </h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Ben je op zoek naar een betrouwbare <Link href="/utrecht" className="text-primary hover:underline">webbouwer in Utrecht</Link>?
                TechSolutionsUtrecht helpt ondernemers in de hele regio — van Utrecht-centrum tot
                <Link href="/nieuwegein" className="text-primary hover:underline"> Nieuwegein</Link>,{" "}
                <Link href="/houten" className="text-primary hover:underline">Houten</Link>,{" "}
                <Link href="/de-meern" className="text-primary hover:underline">De Meern</Link>,{" "}
                <Link href="/vleuten" className="text-primary hover:underline">Vleuten</Link> en{" "}
                <Link href="/ijsselstein" className="text-primary hover:underline">IJsselstein</Link>.
              </p>
              <p className="text-[var(--text-secondary)] mb-4">
                Wij zijn een <strong className="text-[var(--text-primary)]">full-service digitaal bureau</strong> — naast webdesign
                bieden we ook <Link href="/reparaties" className="text-primary hover:underline">laptop en computer reparatie</Link>,{" "}
                <Link href="/diensten/seo" className="text-primary hover:underline">SEO-optimalisatie</Link> en{" "}
                <Link href="/diensten/maatwerk" className="text-primary hover:underline">maatwerk software</Link> aan.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">€250</div>
                  <div className="text-sm text-[var(--text-secondary)]">Vanaf prijs website</div>
                </div>
                <div className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">1 week</div>
                  <div className="text-sm text-[var(--text-secondary)]">Gemiddelde doorlooptijd</div>
                </div>
                <div className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">4 uur</div>
                  <div className="text-sm text-[var(--text-secondary)]">Reactietijd op offertes</div>
                </div>
              </div>

              {/* FAQ Sectie */}
              <h2 id="faq" className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-6">
                7. Veelgestelde vragen
              </h2>
              <div className="space-y-4 mb-10">
                {[
                  {
                    q: "Wat kost een website laten maken in 2026?",
                    a: "De kosten variëren van €250 voor een eenvoudige website tot €8.000+ voor een professionele webshop. Een gemiddelde WordPress website kost tussen de €1.500 en €3.500."
                  },
                  {
                    q: "Wat kost een WordPress website laten maken?",
                    a: "Een professionele WordPress website bij TechSolutionsUtrecht kost vanaf €1.500, inclusief custom design, SEO-optimalisatie en 3 maanden gratis onderhoud."
                  },
                  {
                    q: "Wat kost een webshop laten maken?",
                    a: "Een WooCommerce webshop kost gemiddeld €2.500 tot €8.000, afhankelijk van het aantal producten, betaalopties en extra functionaliteit."
                  },
                  {
                    q: "Hoe lang duurt het om een website te laten maken?",
                    a: "Bij TechSolutionsUtrecht is een standaard website al binnen 1 week online. Een webshop of maatwerk applicatie duurt 3 tot 6 weken."
                  },
                  {
                    q: "Zijn er maandelijkse kosten na de bouw?",
                    a: "Ja, rekening houden met hosting (€10-50/maand), domeinnaam (~€15/jaar) en optioneel onderhoud (€50-150/maand). De eerste 3 maanden onderhoud zijn bij ons gratis inbegrepen."
                  },
                  {
                    q: "Is een website bouwen via Wix goedkoper?",
                    a: "Op korte termijn wel, maar je mist SEO-mogelijkheden, bent afhankelijk van het platform, en de website is moeilijker te verplaatsen. Een professionele website betaalt zich terug via meer klanten uit Google."
                  }
                ].map((item, i) => (
                  <details key={i} className="group p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl">
                    <summary className="font-bold text-[var(--text-primary)] cursor-pointer list-none flex items-center justify-between">
                      {item.q}
                      <span className="text-primary ml-2 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-3 text-[var(--text-secondary)]">{item.a}</p>
                  </details>
                ))}
              </div>

              {/* CTA */}
              <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl mt-12">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                  Klaar voor een website die écht werkt?
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Ieder project is uniek. Neem contact op voor een gratis, vrijblijvende offerte op maat.
                  We reageren binnen 4 uur — ook via WhatsApp.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary inline-flex">
                    Gratis offerte aanvragen
                  </Link>
                  <Link href="/diensten" className="btn-secondary inline-flex">
                    Bekijk onze diensten
                  </Link>
                </div>
              </div>

              {/* Related */}
              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Gerelateerde artikelen</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/blog/website-niet-in-google" className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-primary/50 transition-colors">
                    <div className="text-sm text-primary mb-1">SEO</div>
                    <div className="font-bold text-[var(--text-primary)]">Waarom is mijn website niet vindbaar in Google?</div>
                  </Link>
                  <Link href="/blog/laptop-start-niet-op-5-oplossingen" className="p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-primary/50 transition-colors">
                    <div className="text-sm text-primary mb-1">Reparatie</div>
                    <div className="font-bold text-[var(--text-primary)]">Laptop start niet op? 5 oplossingen</div>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
