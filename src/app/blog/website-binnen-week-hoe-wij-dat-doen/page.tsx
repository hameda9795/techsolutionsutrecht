import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, CheckCircle, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Binnen 1 Week Online: Zo Doen Wij Dat | TechSolutionsUtrecht",
  description: "Website binnen 1 week online? Lees hoe wij dat doen. Onze snelle oplevering proces uitgelegd. Express website laten maken in Utrecht.",
  keywords: ["website binnen 1 week online", "snel website laten maken", "express website", "snelle oplevering website", "website binnen week"],
};

const processSteps = [
  {
    day: "Dag 1",
    title: "Kennismaking & Strategie",
    description: `De eerste dag is cruciaal. We plannen direct een intakegesprek (telefonisch of via video) 
    waarin we je wensen, doelgroep en concurrenten bespreken. Je ontvangt een vragenlijst waarmee 
    we inzicht krijgen in je huisstijl, voorkeuren en benodigde functionaliteit. 
    Aan het einde van dag 1 hebben we een duidelijk plan en een tijdlijn.`,
    deliverable: "✓ Plan van aanpak ✓ Tijdlijn"
  },
  {
    day: "Dag 2-3",
    title: "Design & Concept",
    description: `Onze designer gaat aan de slag met een eerste ontwerp. Dit is geen standaard template, 
    maar een custom design gebaseerd op jouw huisstijl en wensen. Je ontvangt een concept waarmee 
    je kunt visualiseren hoe je website eruit komt te zien. We plannen direct een feedbackronde 
    zodat we eventuele wijzigingen direct kunnen doorvoeren.`,
    deliverable: "✓ Design concept ✓ Feedbackronde"
  },
  {
    day: "Dag 4-5",
    title: "Ontwikkeling & Bouw",
    description: `Zodra het design is goedgekeurd, starten we met de bouw. We werken met WordPress 
    als basis, wat ons in staat stelt snel en efficiënt te werken. Tegelijkertijd vraag je ons 
    om de content (teksten en afbeeldingen) die we hebben afgesproken. De website begint vorm te krijgen 
    met alle pagina's en functionaliteit.`,
    deliverable: "✓ Website structuur ✓ Functionaliteit"
  },
  {
    day: "Dag 6-7",
    title: "Content & Testen",
    description: `We plaatsen de content op de website en optimaliseren deze voor zoekmachines (SEO). 
    Tegelijkertijd testen we grondig: werken alle links? Is de website mobiel-vriendelijk? 
    Laadt alles snel genoeg? We controleren ook of alle formulieren correct werken. 
    Je ontvangt een preview-link om zelf alles te bekijken.`,
    deliverable: "✓ Content geplaatst ✓ Getest"
  },
  {
    day: "Dag 7-10",
    title: "Lancering & Oplevering",
    description: `Na jouw definitieve goedkeuring zetten we de website live. We configureren je domeinnaam, 
    zorgen voor SSL-beveiliging (het groene slotje), en testen nogmaals of alles correct werkt. 
    Je ontvangt een korte training zodat je zelf eenvoudige wijzigingen kunt doen. 
    Gefeliciteerd, je website is online!`,
    deliverable: "✓ Live ✓ Training"
  }
];

const whyFast = [
  {
    title: "Efficiënte Werkwijze",
    description: "We hebben een bewezen proces dat we keer op keer toepassen. Geen tijdverlies, direct aan de slag."
  },
  {
    title: "Ervaren Team",
    description: "Met meer dan 12 jaar ervaring weten we precies wat werkt. Geen experimenteren, maar direct resultaat."
  },
  {
    title: "Smart Templates",
    description: "We gebruiken bewezen fundamenten die we vervolgens volledig customizen naar jouw wensen."
  },
  {
    title: "Clear Communication",
    description: "Direct contact via WhatsApp of telefoon. Geen wachttijden, geen miscommunicatie."
  }
];

export default function WebsiteBinnenWeekBlogPost() {
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
              Snelle Oplevering
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Website{" "}<span className="gradient-text">Binnen 1 Week Online:</span>
              <br />
              <span className="text-2xl sm:text-3xl">Zo Doen Wij Dat</span>
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
                <span>7 min leestijd</span>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
                "Kan mijn website echt binnen 1 week online zijn?" Deze vraag krijgen we vaak. 
                Het antwoord is: <strong className="text-primary">ja, dat kan!</strong> In dit artikel nemen we je mee 
                in ons proces. Je leert <strong className="text-[var(--text-primary)]">hoe wij een professionele website 
                binnen 7-10 dagen opleveren</strong>, zonder in te leveren op kwaliteit.
              </p>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
                Ons 7-10 Dagen Proces
              </h2>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={step.day} className="relative">
                    {/* Timeline line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-6 top-14 w-0.5 h-full bg-primary/20" />
                    )}
                    
                    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        {/* Day badge */}
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-primary font-semibold mb-1">{step.day}</div>
                          
                          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                            {step.title}
                          </h3>
                          
                          <p className="text-[var(--text-secondary)] mb-4">
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
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
                Waarom Kunnen Wij Zo Snel Leveren?
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {whyFast.map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-3 mb-2">
                      <Rocket className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-[var(--text-primary)]">{item.title}</h3>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Note */}
            <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl mb-12">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Belangrijk: Snel betekent niet haastig</h3>
                  <p className="text-[var(--text-secondary)]">
                    Onze snelle oplevering betekent niet dat we concessies doen aan kwaliteit. 
                    We werken efficiënt omdat we een bewezen proces hebben, niet omdat we hoeken afsnijden. 
                    Elke website wordt grondig getest voordat deze live gaat.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                Ook Binnen 1 Week Online?
              </h3>
              
              <p className="text-[var(--text-secondary)] mb-6">
                Start vandaag nog! Neem contact met ons op voor een gratis offerte. 
                We bespreken je wensen en kunnen vaak direct aan de slag. 
                Jouw website kan al volgende week live zijn.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/website-binnen-week"
                  className="btn-primary inline-flex"
                  style={{"viewTransitionName": "button"} as React.CSSProperties}
                >
                  Lees meer over snelle oplevering
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
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Veelgestelde Vragen over Snelle Oplevering
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                    Kan elke website binnen 1 week?
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    De meeste standaard websites (ZZP, MKB) kunnen inderdaad binnen 1 week. 
                    Heel complexe websites of webshops met honderden producten nemen wat langer. 
                    We bespreken dit altijd vooraf.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                    Wat heb ik zelf nodig voor een snelle oplevering?
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Hoe sneller je content (teksten, foto's) aanlevert, hoe sneller we kunnen starten. 
                    We geven je een duidelijke checklist zodat je precies weet wat we nodig hebben.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                    Is een snelle website van mindere kwaliteit?
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Absoluut niet! We leveren dezelfde hoge kwaliteit, alleen efficiënter. 
                    Onze snelheid komt door ervaring en slimme processen, niet door haast.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="border-t border-[var(--border)] pt-12">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                Gerelateerde artikelen
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/blog/zzp-website-5-tips-geld-besparen"
                  className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">ZZP Tips</span>
                  <h4 className="font-semibold text-[var(--text-primary)] mt-2">
                    ZZP Website Laten Maken: 5 Tips om Geld te Besparen
                  </h4>
                </Link>
                
                <Link 
                  href="/blog/wat-kost-een-website-laten-maken"
                  className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">Kosten</span>
                  <h4 className="font-semibold text-[var(--text-primary)] mt-2">
                    Wat Kost een Website Laten Maken in 2025?
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
