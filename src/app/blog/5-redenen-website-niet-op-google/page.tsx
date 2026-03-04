import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, AlertTriangle, FileText, Shield, Clock as ClockIcon, Link as LinkIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "5 Redenen Waarom je Website Niet op Google Verschijnt | TechSolutionsUtrecht",
  description: "Is je website niet zichtbaar in Google? Ontdek de 5 meest voorkomende redenen en hoe je dit eenvoudig oplost. Met praktische tips voor betere vindbaarheid.",
  keywords: ["website niet gevonden google", "wordpress niet zichtbaar", "website staat niet in google", "waarom wordt mijn website niet gevonden", "google indexeren"],
  alternates: {
    canonical: "https://techsolutionsutrecht.nl/blog/5-redenen-website-niet-op-google",
  },
};

export default function BlogPost() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "5 Redenen Waarom je Website Niet op Google Verschijnt",
    "description": "Is je website niet zichtbaar in Google? Ontdek de 5 meest voorkomende redenen en hoe je dit eenvoudig oplost.",
    "image": "https://techsolutionsutrecht.nl/images/blog/website-niet-google.jpg",
    "datePublished": "2025-03-04",
    "dateModified": "2025-03-04",
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
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />

      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
            <li className="text-[var(--text-muted)]">/</li>
            <li><Link href="/blog" className="text-[var(--text-muted)] hover:text-primary transition-colors">Blog</Link></li>
            <li className="text-[var(--text-muted)]">/</li>
            <li><span className="text-[var(--text-primary)] font-medium">SEO Tips</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-8 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Category */}
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              SEO Tips
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
              5 Redenen Waarom je Website Niet op Google Verschijnt
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-[var(--text-muted)] mb-12 pb-12 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>4 maart 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min leestijd</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                Je hebt een mooie website laten maken, maar als je je bedrijfsnaam googelt, 
                verschijnt je website nergens. Herkenbaar? Je bent niet de enige. 
                Veel ondernemers worstelen met de vraag: <strong className="text-[var(--text-primary)]">
                "Waarom staat mijn website niet in Google?"</strong>
              </p>

              <p className="text-[var(--text-secondary)] mb-8">
                In dit artikel behandelen we de <strong className="text-[var(--text-primary)]">
                5 meest voorkomende redenen</strong> waarom je website niet gevonden wordt 
                in Google én geven we je concrete oplossingen om dit te fixen.
              </p>

              {/* Reden 1 */}
              <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)] mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                      1. Google Heeft je Website Nog Gevonden
                    </h2>
                    
                    <p className="text-[var(--text-secondary)] mb-4">
                      Heb je net een nieuwe website? Dan kan het <strong>2 tot 6 weken</strong> duren 
                      voordat Google je website indexeert. Google moet je website eerst ontdekken, 
                      crawlen en verwerken.
                    </p>
                    
                    <p className="text-[var(--text-primary)] font-semibold mb-2"><Search className="w-4 h-4 inline mr-2" />Oplossing:</p>
                    
                    <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
                      <li>• Verstuur je sitemap naar <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Search Console</a></li>
                      <li>• Vraag handmatig indexering aan via Search Console</li>
                      <li>• Zorg voor backlinks van andere websites naar jouw site</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Reden 2 */}
              <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)] mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                      2. Je Website is Technisch Niet in Orde
                    </h2>
                    
                    <p className="text-[var(--text-secondary)] mb-4">
                      Technische problemen kunnen Google beletten om je website te crawlen. 
                      Denk aan een verkeerde <code className="bg-[var(--bg-tertiary)] px-2 py-1 rounded">robots.txt</code>, 
                      ontbrekende <code className="bg-[var(--bg-tertiary)] px-2 py-1 rounded">sitemap.xml</code>, 
                      of een "noindex" tag die per ongeluk is ingesteld.
                    </p>
                    
                    <p className="text-[var(--text-primary)] font-semibold mb-2"><Search className="w-4 h-4 inline mr-2" />Oplossing:</p>
                    
                    <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
                      <li>• Controleer je robots.txt op "Disallow: /"</li>
                      <li>• Verwijder onnodige noindex meta tags</li>
                      <li>• Zorg voor een XML sitemap</li>
                      <li>• Check of je website HTTPS gebruikt</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Reden 3 */}
              <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)] mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                      3. Je Hebt Te Weinig of Dunne Content
                    </h2>
                    
                    <p className="text-[var(--text-secondary)] mb-4">
                      Google waardeert websites met <strong>diepgaande, unieke content</strong>. 
                      Een website met alleen een contactpagina en wat korte tekstjes wordt moeilijk gevonden.
                    </p>
                    
                    <p className="text-[var(--text-primary)] font-semibold mb-2"><Search className="w-4 h-4 inline mr-2" />Oplossing:</p>
                    
                    <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
                      <li>• Schrijf minimaal 300-500 woorden per pagina</li>
                      <li>• Start een blog met relevante artikelen</li>
                      <li>• Gebruik je belangrijkste zoekwoorden natuurlijk in de tekst</li>
                      <li>• Voeg regelmatig nieuwe content toe</li>
                    </ul>                  
                  </div>
                </div>
              </div>

              {/* Reden 4 */}
              <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)] mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <LinkIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                      4. Je Hebt Geen Backlinks
                    </h2>
                    
                    <p className="text-[var(--text-secondary)] mb-4">
                      Backlinks (links van andere websites naar jou) zijn een belangrijke 
                      <strong>rangschikkingsfactor</strong> voor Google. Zonder backlinks is het moeilijk 
                      om hoger te ranken.
                    </p>
                    
                    <p className="text-[var(--text-primary)] font-semibold mb-2"><Search className="w-4 h-4 inline mr-2" />Oplossing:</p>
                    
                    <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
                      <li>• Registreer je in lokale bedrijvengidsen (KvK, Google Bedrijf)</li>
                      <li>• Vraag leveranciers en partners om een link</li>
                      <li>• Schrijf gastblogs voor andere websites</li>
                      <li>• Creëer content die mensen willen delen</li>
                    </ul>                  
                  </div>
                </div>
              </div>

              {/* Reden 5 */}
              <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)] mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                      5. Je Website is te Traag of Niet Mobiel-vriendelijk
                    </h2>
                    
                    <p className="text-[var(--text-secondary)] mb-4">
                      Google hecht steeds meer waarde aan <strong>Core Web Vitals</strong>. 
                      Een trage website of een site die niet goed werkt op mobiel, wordt lager gerankt.
                    </p>
                    
                    <p className="text-[var(--text-primary)] font-semibold mb-2"><Search className="w-4 h-4 inline mr-2" />Oplossing:</p>
                    
                    <ul className="space-y-2 text-[var(--text-secondary)] mb-4">
                      <li>• Test je websitesnelheid met <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google PageSpeed Insights</a></li>
                      <li>• Comprimeer afbeeldingen voor het web</li>
                      <li>• Gebruik een goede hosting provider</li>
                      <li>• Zorg voor een responsive design</li>
                    </ul>                  
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl mt-12">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Wil je Professionele Hulp met SEO?
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-6">
                  Bij TechSolutionsUtrecht helpen we je graag om beter vindbaar te worden in Google. 
                  Van technische SEO tot content optimalisatie — wij regelen het voor je.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/diensten/seo" className="btn-secondary text-center">
                    Bekijk onze SEO dienst
                  </Link>
                  
                  <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                    Gratis offerte aanvragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>              
              </div>

              {/* FAQ Section */}
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-6">
                Veelgestelde Vragen
              </h2>

              <div className="space-y-4">
                <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Hoe lang duurt het voordat mijn website in Google staat?</h3>
                  <p className="text-[var(--text-secondary)]">
                    Dit duurt meestal tussen de 2 en 6 weken. Als je een nieuwe domeinnaam hebt, 
                    kan dit soms wat langer duren. Gebruik Google Search Console om het proces te versnellen.
                  </p>
                </div>

                <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Waarom sta ik niet op pagina 1 van Google?</h3>
                  <p className="text-[var(--text-secondary)]">
                    Pagina 1 van Google is erg competitief. Je moet niet alleen technisch in orde zijn, 
                    maar ook betere content hebben dan je concurrenten én meer autoriteit (backlinks) opbouwen.
                  </p>
                </div>

                <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Kan ik zelf SEO doen of moet ik een expert inhuren?</h3>
                  <p className="text-[var(--text-secondary)]">
                    Je kunt zeker veel zelf doen! Maar voor technische SEO en strategie helpt een expert 
                    vaak om sneller resultaat te boeken. Wil je advies? <Link href="/contact" className="text-primary hover:underline">Neem contact op</Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t border-[var(--border)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Gerelateerde artikelen</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/wat-kost-een-website-laten-maken" className="card-hover bg-[var(--bg-card)] rounded-xl p-4 border border-[var(--border)]">
                  <p className="text-primary text-sm mb-2">Websites</p>
                  <h4 className="font-semibold text-[var(--text-primary)]">Wat Kost een Website Laten Maken in 2025?</h4>
                </Link>

                <Link href="/diensten/seo" className="card-hover bg-[var(--bg-card)] rounded-xl p-4 border border-[var(--border)]">
                  <p className="text-primary text-sm mb-2">Diensten</p>
                  <h4 className="font-semibold text-[var(--text-primary)]">SEO Optimalisatie</h4>
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
