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
  MousePointer2,
  Smartphone,
  Database,
  Sparkles as SparklesIcon
} from "lucide-react";

// Categories with subcategories
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

// Default features for all subcategories
const defaultFeatures = [
  { icon: Zap, title: "Webapplicatie op maat", desc: "Snel, schaalbaar en interactief" },
  { icon: Layout, title: "Website met CMS", desc: "Zelf content aanpassen, geen technische kennis nodig" },
  { icon: Smartphone, title: "Mobiel-vriendelijk design", desc: "Perfect op telefoon, tablet en desktop" },
  { icon: Database, title: "Koppelingen met systemen", desc: "Koppeling met CRM, betaalsystemen of database" },
  { icon: SparklesIcon, title: "Interactieve gebruikerservaring", desc: "Moderne animaties die converteren" }
];

// Aannemer specific data
const aannemerData = {
  title: "Bouwbedrijf Van den Berg",
  description: "Professionele aannemer website met industriële uitstraling voor renovatie en nieuwbouw in Utrecht regio. Focus op offerte-aanvraag en projectshowcase.",
  image: "/images/portfolio/aannemer.webp",
  demoUrl: "https://aannemer.techsolutionsutrecht.nl/",
  features: [
    { icon: Layout, title: "Uniek Design", desc: "Navigatie aan zijkant & diagonale vormen" },
    { icon: Zap, title: "Before/After", desc: "Vergelijking slider voor projecten" },
    { icon: CheckCircle2, title: "Offerte Wizard", desc: "4-stappen formulier" },
    { icon: MousePointer2, title: "Interactief", desc: "3D tilt effects & magnetische knoppen" }
  ]
};

export default function PortfolioPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["bouw"]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    if (!expandedCategories.includes(categoryId)) {
      toggleCategory(categoryId);
    }
  };

  const handleSubcategoryClick = (categoryId: string, subcategory: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategory);
  };

  const getCategoryIcon = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.icon : Building2;
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 min-h-screen">
        <div className="container-custom">
          {/* Header */}
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
              Klik op een categorie om de details te zien.
            </p>
          </div>

          {/* Dynamic Project Detail Section */}
          {selectedSubcategory && (
            <section className="mb-16">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left - Concept Image */}
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
                          src={selectedSubcategory === "Aannemer" ? aannemerData.image : "/images/portfolio/aannemer-concept.jpg"}
                          alt={`${selectedSubcategory} - Website Concept`}
                          width={415}
                          height={500}
                          className="w-full h-auto object-cover"
                          priority
                        />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/70 backdrop-blur-md rounded-xl p-4 border border-white/10">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                                {(() => {
                                  const IconComponent = getCategoryIcon(selectedCategory || "");
                                  return <IconComponent className="w-5 h-5 text-white" />;
                                })()}
                              </div>
                              <div>
                                <p className="text-white font-semibold text-sm">{selectedSubcategory}</p>
                                <p className="text-white/60 text-xs">Website Concept</p>
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

                  {/* Right - Project Details */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {categories.find(c => c.id === selectedCategory)?.name}
                      </span>
                      <span className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-muted)] rounded-full text-xs">
                        {selectedSubcategory}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                      {selectedSubcategory === "Aannemer" ? aannemerData.title : `${selectedSubcategory} Website`}
                    </h2>

                    <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
                      {selectedSubcategory === "Aannemer" 
                        ? aannemerData.description 
                        : `Professionele website voor ${selectedSubcategory?.toLowerCase()}. Modern design met focus op klantcontact en conversie.`}
                    </p>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {(selectedSubcategory === "Aannemer" ? aannemerData.features : defaultFeatures).map((feature: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-[var(--bg-tertiary)] rounded-xl">
                          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-orange-500" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[var(--text-primary)] text-sm">{feature.title}</h4>
                            <p className="text-[var(--text-muted)] text-xs mt-1">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={selectedSubcategory === "Aannemer" ? aannemerData.demoUrl : "#"}
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
          )}

          {/* Main Layout: Sidebar + Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar */}
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
                  <span className="font-medium">Alle categorieën</span>
                </button>

                <div className="h-px bg-[var(--border)] my-4" />

                <div className="space-y-1">
                  {categories.map((category: any) => {
                    const isExpanded = expandedCategories.includes(category.id);
                    const isSelected = selectedCategory === category.id;
                    const Icon = category.icon;

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
                            {category.subcategories.map((sub: string) => {
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

            {/* Main Content */}
            <div className="flex-1">
              {!selectedSubcategory && (
                <div className="text-center py-20 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl">
                  <div className="text-6xl mb-4">👆</div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    Selecteer een categorie
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    Klik op een subcategorie aan de linkerkant om de projectdetails te bekijken.
                  </p>
                </div>
              )}

              {/* CTA Section */}
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

