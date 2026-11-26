import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, CheckCircle, Rocket } from "lucide-react";
import { articleSchema } from "@/lib/schema";

const canonicalUrl = "https://techsolutionsutrecht.nl/blog/website-binnen-week-hoe-wij-dat-doen";

export const metadata: Metadata = {
  title: "Website Binnen 1 Week: Wanneer Is Dat Haalbaar?",
  description: "Wanneer kan een website binnen een week online? Bekijk de voorwaarden, fasen en aandachtspunten van een versneld websiteproject.",
  keywords: ["website binnen 1 week online", "snel website laten maken", "express website", "snelle oplevering website", "website binnen week"],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Website Binnen 1 Week: Wanneer Is Dat Haalbaar?",
    description: "Bekijk de voorwaarden en fasen van een versneld websiteproject.",
    type: "article",
    url: canonicalUrl,
    locale: "nl_NL",
    publishedTime: "2025-02-26",
    modifiedTime: "2026-10-15",
    authors: ["Max"],
  },
};

const blogPostingSchema = articleSchema({
  title: "Website Binnen 1 Week: Wanneer Is Dat Haalbaar?",
  description: "Lees welke voorwaarden, fasen en aandachtspunten bepalen of een versneld websiteproject binnen een week haalbaar is.",
  url: canonicalUrl,
  datePublished: "2025-02-26",
  dateModified: "2026-10-15",
  author: "Max",
});

const processSteps = [
  {
    day: "Fase 1",
    title: "Kennismaking & Strategie",
    description: `We bespreken je doel, pagina's, functies en gewenste deadline. Voor een versnelde planning moeten teksten, foto's, logo en benodigde accounttoegang vóór de bouw beschikbaar zijn. We controleren de agenda en spreken de scope, feedbackmomenten en opleverdatum af.`,
    deliverable: "✓ Plan van aanpak ✓ Tijdlijn"
  },
  {
    day: "Fase 2",
    title: "Design & Concept",
    description: `Ik ga aan de slag met een eerste ontwerp. Bij een WordPress-pakket pas ik
    de ontwerpbasis aan jouw huisstijl aan; een eigen ontwerp hoort bij het maatwerktraject. Je ontvangt een concept waarmee
    je kunt visualiseren hoe je website eruit komt te zien. We plannen direct een feedbackronde 
    zodat we eventuele wijzigingen direct kunnen doorvoeren.`,
    deliverable: "✓ Design concept ✓ Feedbackronde"
  },
  {
    day: "Fase 3",
    title: "Ontwikkeling & Bouw",
    description: `Na akkoord op het concept bouw ik de afgesproken pagina's en functies met de vooraf gekozen techniek. De aangeleverde inhoud is daarbij het uitgangspunt. Nieuwe wensen beoordeel ik op gevolgen voor prijs en planning voordat ik ze toevoeg.`,
    deliverable: "✓ Website structuur ✓ Functionaliteit"
  },
  {
    day: "Fase 4",
    title: "Content & Testen",
    description: `We plaatsen de content op de website en optimaliseren deze voor zoekmachines (SEO). 
    Tegelijkertijd testen we grondig: werken alle links? Is de website mobiel-vriendelijk? 
    Laadt alles snel genoeg? We controleren ook of alle formulieren correct werken. 
    Je ontvangt een preview-link om zelf alles te bekijken.`,
    deliverable: "✓ Content geplaatst ✓ Getest"
  },
  {
    day: "Fase 5",
    title: "Lancering & Oplevering",
    description: `Na jouw goedkeuring zetten we de website live en controleren we HTTPS, links, formulieren en de afgesproken SEO-basis. Je ontvangt uitleg over het afgesproken beheer. Bij WordPress kun je zelf inhoud wijzigen; een maatwerkwebsite heeft alleen een CMS als dat in het pakket is opgenomen. Hosting en domein zijn apart.`,
    deliverable: "✓ Live ✓ Training"
  }
];

const whyFast = [
  {
    title: "Efficiënte Werkwijze",
    description: "Een afgebakende scope en vaste beslismomenten helpen voorkomen dat tijdens de bouw steeds nieuwe taken ontstaan."
  },
  {
    title: "Ervaren Developer",
    description: "Met meer dan 12 jaar ervaring werk ik met een duidelijke aanpak en heb je direct contact met de persoon die je website bouwt."
  },
  {
    title: "Passende ontwerpbasis",
    description: "Bij WordPress passen we een bestaande ontwerpbasis aan je huisstijl aan. Een volledig eigen ontwerp krijgt een afzonderlijke scope."
  },
  {
    title: "Direct contact",
    description: "Je bespreekt keuzes rechtstreeks met de developer. Gebundelde feedback en één beslisser helpen het tempo te bewaren."
  }
];

export default function WebsiteBinnenWeekBlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <main className="pb-24">
        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-[var(--color-muted)] hover:text-primary transition-colors">Home</Link></li>
              <li className="text-[var(--color-muted)]">/</li>
              <li><Link href="/blog" className="text-[var(--color-muted)] hover:text-primary transition-colors">Blog</Link></li>
              <li className="text-[var(--color-muted)]">/</li>
              <li><span className="text-[var(--color-ink)] font-medium">Artikel</span></li>
            </ol>
          </div>
        </nav>

        <div className="container-custom pt-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-[var(--color-muted)] hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar blog
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Websites
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-6">
              Website{" "}<span className="text-[var(--color-primary)]">Binnen 1 Week Online?</span>
              <br />
              <span className="text-2xl sm:text-3xl">Wanneer een Versneld Traject Haalbaar Is</span>
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-[var(--color-muted)] mb-12 pb-12 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>TechSolutionsUtrecht</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime="2026-10-15">Bijgewerkt op 15 oktober 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>4 min leestijd</span>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-[var(--color-muted)] leading-relaxed">
                &quot;Kan mijn website binnen één week online zijn?&quot; Dat kan in sommige situaties, maar het is geen standaardgarantie. In dit artikel lees je welke voorwaarden een versneld traject haalbaar maken en waarom de definitieve planning pas na de intake wordt vastgelegd.
              </p>
            </div>

            {/* Process */}
            <p className="mb-10 leading-relaxed text-[var(--color-muted)]">Dit artikel legt de werkfasen uit. Wil je een concrete deadline bespreken? Gebruik eerst de <Link href="/website-binnen-week" className="font-semibold text-primary underline underline-offset-4">haalbaarheidscheck voor een website binnen één week</Link>. Daar zie je wat aan scope, materiaal, toegang en feedback klaar moet zijn voordat ik een planning kan bevestigen.</p>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-8">
                De Fasen van een Versneld Traject
              </h2>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={step.day} className="relative">
                    {/* Timeline line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-6 top-14 w-0.5 h-full bg-primary/20" />
                    )}
                    
                    <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        {/* Day badge */}
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="text-primary font-semibold mb-1">{step.day}</div>
                          
                          <h3 className="text-xl font-bold text-[var(--color-ink)] mb-3">
                            {step.title}
                          </h3>
                          
                          <p className="text-[var(--color-muted)] mb-4">
                            {step.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {step.deliverable.split('✓').filter(Boolean).map((item, i) => (
                              <span key={i} className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                <CheckCircle className="w-4 h-4" />
                                {item.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why We Can Do This */}
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-8">
                Waarom Kunnen Wij Zo Snel Leveren?
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {whyFast.map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-3 mb-2">
                      <Rocket className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-[var(--color-ink)]">{item.title}</h3>
                    </div>
                    <p className="text-[var(--color-muted)] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Note */}
            <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl mb-12">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">Belangrijk: Snel betekent niet haastig</h3>
                  <p className="text-[var(--color-muted)]">
                    Onze snelle oplevering betekent niet dat we concessies doen aan kwaliteit. 
                    We werken efficiënt omdat we een bewezen proces hebben, niet omdat we hoeken afsnijden. 
                    Elke website wordt grondig getest voordat deze live gaat.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-[var(--color-primary)]/10 border border-primary/20 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">
                Een Snelle Planning Nodig?
              </h3>
              
              <p className="text-[var(--color-muted)] mb-6">
                Neem contact op voor een gratis intake. We beoordelen de inhoud, functies en beschikbaarheid en geven daarna een realistische planning. Als een oplevering binnen een week haalbaar is, leggen we de voorwaarden duidelijk vast in de offerte.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/diensten/website-laten-maken"
                  className="btn-primary inline-flex"
                  style={{"viewTransitionName": "button"} as React.CSSProperties}
                >
                  Bekijk de WordPress-pakketten
                </Link>
                
                <Link 
                  href="/contact"
                  className="btn-ghost inline-flex"
                >
                  Vraag offerte aan
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">
                Veelgestelde Vragen over Snelle Oplevering
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                    Kan elke website binnen 1 week?
                  </h3>
                  <p className="text-[var(--color-muted)]">
                    Nee. Het is alleen haalbaar wanneer de scope overzichtelijk is, teksten en beelden gereed zijn en feedback snel wordt gegeven. Complete websites, webshops en koppelingen kunnen meer tijd vragen. De planning wordt altijd vooraf afgesproken.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                    Wat heb ik zelf nodig voor een snelle oplevering?
                  </h3>
                  <p className="text-[var(--color-muted)]">
                    Hoe sneller je content (teksten, foto&apos;s) aanlevert, hoe sneller we kunnen starten.
                    We geven je een duidelijke checklist zodat je precies weet wat we nodig hebben.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                    Is een snelle website van mindere kwaliteit?
                  </h3>
                  <p className="text-[var(--color-muted)]">
                    Niet wanneer de scope realistisch is. We slaan controles op mobiel, formulieren, inhoud en SEO-basis niet over. Als de gewenste kwaliteit niet binnen de beschikbare tijd past, adviseren we een ruimere planning.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="border-t border-[var(--color-border)] pt-12">
              <h3 className="text-xl font-bold text-[var(--color-ink)] mb-6">
                Gerelateerde artikelen
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/blog/zzp-website-5-tips-geld-besparen"
                  className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">ZZP Tips</span>
                  <h4 className="font-semibold text-[var(--color-ink)] mt-2">
                    ZZP Website Laten Maken: 5 Tips om Geld te Besparen
                  </h4>
                </Link>
                
                <Link 
                  href="/blog/wat-kost-website-laten-maken"
                  className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">Kosten</span>
                  <h4 className="font-semibold text-[var(--color-ink)] mt-2">
                    Wat Kost een Website Laten Maken in 2026?
                  </h4>
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
