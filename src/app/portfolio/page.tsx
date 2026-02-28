"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ExternalLink, 
  ChevronRight, 
  ChevronDown,
  Building2,
  UtensilsCrossed,
  Calculator,
  Home,
  HeartPulse,
  Car,
  GraduationCap,
  Sparkles,
  ShoppingBag,
  Scale,
  PartyPopper,
  ArrowRight,
  Eye,
  CheckCircle2,
  Layout,
  Palette,
  Zap,
  MousePointer2
} from "lucide-react";

const categories = [
  {
    id: "bouw",
    name: "Bouw & Vakmensen",
    icon: Building2,
    subcategories: ["Aannemer", "Loodgieter", "Elektricien", "Schilder", "Hovenier", "Dakdekker", "Timmerman", "Stukadoor"]
  },
  {
    id: "horeca",
    name: "Horeca & Catering",
    icon: UtensilsCrossed,
    subcategories: ["Restaurant", "Café", "Lunchroom", "Cateringbedrijf", "Hotel", "B&B", "Eetcafé"]
  },
  {
    id: "financieel",
    name: "Financieel & Administratie",
    icon: Calculator,
    subcategories: ["Boekhouder", "Accountant", "Belastingadviseur", "Payroll specialist", "Administratiekantoor"]
  },
  {
    id: "vastgoed",
    name: "Vastgoed & Makelaardij",
    icon: Home,
    subcategories: ["Makelaar", "Vakantiewoning verhuur", "B&B Verhuur", "Taxateur", "Vastgoedbeheer"]
  },
  {
    id: "gezondheid",
    name: "Gezondheidszorg",
    icon: HeartPulse,
    subcategories: ["Fysiotherapie", "Tandarts", "Psycholoog", "Praktijk voor Psychotherapie", "Huisarts", "Diëtist"]
  },
  {
    id: "auto",
    name: "Auto & Mobiliteit",
    icon: Car,
    subcategories: ["Garage", "Autobedrijf", "APK Keuring", "Autoverhuur", "Occasion dealer", "Leasebedrijf"]
  },
  {
    id: "onderwijs",
    name: "Onderwijs & Training",
    icon: GraduationCap,
    subcategories: ["Rijschool", "Taalschool", "Bijles", "Opleidingscentrum", "Training & Coaching"]
  },
  {
    id: "schoonheid",
    name: "Schoonheidsverzorging",
    icon: Sparkles,
    subcategories: ["Kapsalon", "Nagelstudio", "Beautysalon", "Pedicure", "Massagepraktijk", "Wimperextensions"]
  },
  {
    id: "retail",
    name: "Detailhandel & Retail",
    icon: ShoppingBag,
    subcategories: ["Kledingwinkel", "Bloemist", "Juwelier", "Fietsenwinkel", "Opticien", "Drogisterij"]
  },
  {
    id: "juridisch",
    name: "Juridische Dienstverlening",
    icon: Scale,
    subcategories: ["Advocaat", "Notaris", "Mediator", "Juridisch Adviesbureau", "Incassobureau"]
  },
  {
    id: "evenementen",
    name: "Evenementen & Entertainment",
    icon: PartyPopper,
    subcategories: ["Fotograaf", "Trouwfotograaf", "DJ", "Trouwlocatie", "Eventlocatie", "Cateraar", "Weddingplanner"]
  }
];

const projects = [
  {
    id: "aannemer-demo",
    title: "Bouwbedrijf Van Dijk",
    category: "bouw",
    subcategory: "Aannemer",
    description: "Professionele website voor een aannemer met projectgalerij, offerte aanvraag en contactformulier.",
    image: "/images/portfolio/aannemer.jpg",
    demoUrl: "/demo/aannemer",
    technologies: ["Next.js", "Tailwind CSS", "Responsive"],
    features: ["Projectgalerij", "Offerte formulier", "Google Maps", "Reviews"],
    color: "from-orange-500 to-red-500"
  },
  {
    id: "restaurant-demo",
    title: "Restaurant De Gouden Lepel",
    category: "horeca",
    subcategory: "Restaurant",
    description: "Elegante website voor restaurant met online reservering, menukaart en fotogalerij.",
    image: "/images/portfolio/restaurant.jpg",
    demoUrl: "/demo/restaurant",
    technologies: ["Next.js", "Tailwind CSS", "Animations"],
    features: ["Online reserveren", "Menukaart", "Foto galerij", "Openingstijden"],
    color: "from-red-500 to-pink-500"
  },
  {
    id: "kapsalon-demo",
    title: "Kapsalon Hair & Style",
    category: "schoonheid",
    subcategory: "Kapsalon",
    description: "Stijlvolle website voor kapsalon met online afspraken, prijslijst en team presentatie.",
    image: "/images/portfolio/kapsalon.jpg",
    demoUrl: "/demo/kapsalon",
    technologies: ["Next.js", "Tailwind CSS", "Responsive"],
    features: ["Online afspraken", "Prijzen", "Team", "Gallery"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "fysio-demo",
    title: "Fysiotherapie Centrum Utrecht",
    category: "gezondheid",
    subcategory: "Fysiotherapie",
    description: "Moderne website voor fysiotherapie praktijk met online boeking en behandelingen overzicht.",
    image: "/images/portfolio/fysio.jpg",
    demoUrl: "/demo/fysiotherapie",
    technologies: ["Next.js", "Tailwind CSS", "SEO"],
    features: ["Online boeking", "Behandelingen", "Verzekeringen", "Team"],
    color: "from-green-500 to-teal-500"
  },
  {
    id: "makelaar-demo",
    title: "Makelaardij Jansen",
    category: "vastgoed",
    subcategory: "Makelaar",
    description: "Complete website voor makelaar met woningaanbod, taxatie aanvraag en nieuws.",
    image: "/images/portfolio/makelaar.jpg",
    demoUrl: "/demo/makelaar",
    technologies: ["Next.js", "Tailwind CSS", "Maps"],
    features: ["Woningaanbod", "Taxatie", "Nieuws", "Contact"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "garage-demo",
    title: "Autoservice Peters",
    category: "auto",
    subcategory: "Garage",
    description: "Professionele website voor garage met APK informatie, prijzen en online afspraak.",
    image: "/images/portfolio/garage.jpg",
    demoUrl: "/demo/garage",
    technologies: ["Next.js", "Tailwind CSS", "Responsive"],
    features: ["APK info", "Prijzen", "Afspraak", "Route"],
    color: "from-yellow-500 to-orange-500"
  }
];

export default function PortfolioPage() {
  const [expandedCategories, setExpandedCategories] = useState(["bouw"]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    if (!expandedCategories.includes(categoryId)) {
      toggleCategory(categoryId);
    }
  };

  const handleSubcategoryClick = (categoryId, subcategory) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategory);
  };

  const filteredProjects = projects.filter(project => {
    if (selectedSubcategory) {
      return project.subcategory === selectedSubcategory;
    }
    if (selectedCategory) {
      return project.category === selectedCategory;
    }
    return true;
  });

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 min-h-screen">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Onze{" "}
              <span className="gradient-text">Demo Projecten</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Bekijk voorbeeld websites voor verschillende branches. 
              Klik op een project om de live demo te zien.
            </p>
          </div>

          <section className="mb-16">
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 p-8 lg:p-12 flex items-center justify-center min-h-[500px]">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: "40px 40px"
                    }} />
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/20 to-transparent" style={{
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)"
                  }} />
                  <div className="relative z-10 w-full max-w-[415px]">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                      <Image
                        src="/images/portfolio/aannemer-concept.webp"
                        alt="Bouwbedrijf Van den Berg - Website Concept"
                        width={415}
                        height={500}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/70 backdrop-blur-md rounded-xl p-4 border border-white/10">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-semibold text-sm">Bouwbedrijf Van den Berg</p>
                              <p className="text-white/60 text-xs">Aannemer Website</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      POPULAIR
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs font-semibold uppercase tracking-wider">
                      Bouw & Vakmensen
                    </span>
                    <span className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-muted)] rounded-full text-xs">
                      Aannemer
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                    Bouwbedrijf Van den Berg
                  </h2>

                  <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
                    Professionele aannemer website met industriële uitstraling voor renovatie en nieuwbouw in Utrecht regio. Focus op offerte-aanvraag en projectshowcase.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start gap-3 p-4 bg-[var(--bg-tertiary)] rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Layout className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">Uniek Design</h4>
                        <p className="text-[var(--text-muted)] text-xs mt-1">Navigatie aan zijkant & diagonale vormen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[var(--bg-tertiary)] rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">Before/After</h4>
                        <p className="text-[var(--text-muted)] text-xs mt-1">Vergelijking slider voor projecten</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[var(--bg-tertiary)] rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">Offerte Wizard</h4>
                        <p className="text-[var(--text-muted)] text-xs mt-1">4-stappen formulier</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-[var(--bg-tertiary)] rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <MousePointer2 className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text-primary)] text-sm">Interactief</h4>
                        <p className="text-[var(--text-muted)] text-xs mt-1">3D tilt effects & magnetische knoppen</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-lg text-sm font-medium">Next.js</span>
                    <span className="px-3 py-1.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-lg text-sm font-medium">Tailwind CSS</span>
                    <span className="px-3 py-1.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-lg text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-lg text-sm font-medium">Parallax</span>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://aannemer.techsolutionsutrecht.nl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                    >
                      <Eye className="w-5 h-5" />
                      Bekijk Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--border)] text-[var(--text-primary)] rounded-xl font-semibold hover:bg-[var(--bg-tertiary)] transition-all duration-300"
                    >
                      <Palette className="w-5 h-5" />
                      Vergelijkbaar Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 sticky top-28">
                <h2 className="text-lg font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  Categorieën
                </h2>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubcategory(null);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition-all duration-200 flex items-center gap-3 ${
                    selectedCategory === null 
                      ? "bg-primary text-white" 
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
                  }`}
                >
                  <span className="font-medium">Alle projecten</span>
                  <span className="ml-auto text-sm opacity-70">{projects.length}</span>
                </button>
                <div className="h-px bg-[var(--border)] my-4" />
                <div className="space-y-1">
                  {categories.map((category) => {
                    const isExpanded = expandedCategories.includes(category.id);
                    const isSelected = selectedCategory === category.id;
                    const Icon = category.icon;
                    const projectCount = projects.filter(p => p.category === category.id).length;
                    return (
                      <div key={category.id}>
                        <button
                          onClick={() => handleCategoryClick(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                            isSelected && !selectedSubcategory
                              ? "bg-primary/10 text-primary border border-primary/20" 
                              : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
                          }`}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium text-sm">{category.name}</span>
                          {projectCount > 0 && (
                            <span className="ml-auto text-xs opacity-50">{projectCount}</span>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCategory(category.id);
                            }}
                            className="ml-2 p-1 hover:bg-[var(--bg-primary)] rounded transition-colors"
                          >
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </button>
                        </button>
                        {isExpanded && (
                          <div className="ml-4 mt-1 space-y-1">
                            {category.subcategories.map((sub) => {
                              const subProjectCount = projects.filter(p => p.subcategory === sub).length;
                              const isSubSelected = selectedSubcategory === sub;
                              return (
                                <button
                                  key={sub}
                                  onClick={() => handleSubcategoryClick(category.id, sub)}
                                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-between text-sm ${
                                    isSubSelected
                                      ? "bg-primary text-white" 
                                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
                                  }`}
                                >
                                  <span>{sub}</span>
                                  {subProjectCount > 0 && (
                                    <span className={`text-xs ${isSubSelected ? "text-white/70" : "opacity-50"}`}>
                                      {subProjectCount}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <div className="text-[var(--text-secondary)]">
                  {selectedSubcategory ? (
                    <span>
                      Gefilterd op: <span className="text-primary font-semibold">{selectedSubcategory}</span>
                    </span>
                  ) : selectedCategory ? (
                    <span>
                      Gefilterd op: <span className="text-primary font-semibold">
                        {categories.find(c => c.id === selectedCategory)?.name}
                      </span>
                    </span>
                  ) : (
                    <span>Alle projecten</span>
                  )}
                </div>
                <span className="text-[var(--text-muted)] text-sm">
                  {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projecten"}
                </span>
              </div>

              {filteredProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                    <div 
                      key={project.id}
                      className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                            backgroundSize: "24px 24px"
                          }} />
                        </div>
                        <div className="relative z-10 text-center">
                          <div className="text-5xl mb-3">🚀</div>
                          <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                            {project.subcategory}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Link 
                            href={project.demoUrl}
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          >
                            <Eye className="w-5 h-5" />
                            Bekijk Demo
                          </Link>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2.5 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.features.map((feature) => (
                              <span 
                                key={feature}
                                className="flex items-center gap-1 text-xs text-[var(--text-muted)]"
                              >
                                <span className="w-1 h-1 bg-primary rounded-full"></span>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <Link 
                          href={project.demoUrl}
                          className="flex items-center justify-center gap-2 w-full py-3 border border-[var(--border)] rounded-xl text-[var(--text-primary)] font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo Bekijken
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    Geen projecten gevonden
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    Er zijn nog geen demo&apos;s beschikbaar voor deze categorie.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedSubcategory(null);
                    }}
                    className="btn-primary"
                  >
                    Bekijk alle projecten
                  </button>
                </div>
              )}

              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
                  Ook een Website Nodig?
                </h2>
                <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                  Laat ons je helpen met een professionele website voor jouw branche. 
                  We maken een op maat gemaakte website die perfect bij jou past.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="btn-primary">
                    Gratis offerte aanvragen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a 
                    href="https://wa.me/31625518708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    WhatsApp ons
                  </a>
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

