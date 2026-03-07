"use client";

import { useState, useEffect } from "react";
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
  Code2,
  Globe,
  Monitor,
  Settings,
  Loader2,
  X,
  Filter
} from "lucide-react";
import {
  getCategories,
  getCategoryById,
  CategoryData
} from "@/lib/portfolio-data";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
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
  PartyPopper
};

interface Project {
  id: string;
  title: string;
  short_desc: string;
  features: string[];
  image: string;
  demo_url: string;
  category_id: string;
  subcategory_name: string;
}

// Default empty project for coming soon
function createEmptyProject(subcategoryName: string): Project {
  return {
    id: `placeholder-${Date.now()}`,
    title: `${subcategoryName} Website`,
    short_desc: `Professionele website voor ${subcategoryName.toLowerCase()} met modern design, klantgerichte functionaliteit en focus op conversie. Inclusief contactformulier en dienstenoverzicht.`,
    features: [
      "Modern en professioneel design",
      "Contactformulier met validatie",
      "Google Maps integratie",
      "SEO geoptimaliseerd",
      "Snelle laadtijden"
    ],
    image: "",
    demo_url: "",
    category_id: "",
    subcategory_name: subcategoryName
  };
}

export default function PortfolioContent() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["bouw"]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>("bouw");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>("Aannemer");
  const [projects, setProjects] = useState<Project[]>([]);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize data
  useEffect(() => {
    setCategories(getCategories());
    loadAllProjects();
  }, []);

  // Load projects when category/subcategory changes
  useEffect(() => {
    if (selectedCategory && selectedSubcategory) {
      loadProjectsForSubcategory(selectedCategory, selectedSubcategory);
    }
  }, [selectedCategory, selectedSubcategory]);

  const loadAllProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setAllProjects(data);
    } catch (error) {
      console.error('Failed to load projects:', error);
    }
  };

  const loadProjectsForSubcategory = async (categoryId: string, subcategoryName: string) => {
    setIsLoading(true);
    try {
      // Fetch all projects first
      const res = await fetch('/api/projects');
      const allData = await res.json();
      setAllProjects(allData);
      
      // Then filter
      const filtered = allData.filter((p: Project) => 
        p.category_id === categoryId && p.subcategory_name === subcategoryName
      );
      setProjects(filtered);
    } catch (error) {
      console.error('Failed to load projects:', error);
      setProjects([]);
    }
    setIsLoading(false);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const category = categories.find(c => c.id === categoryId);
    if (category && category.subcategories.length > 0) {
      setSelectedSubcategory(category.subcategories[0].name);
    }
    if (!expandedCategories.includes(categoryId)) {
      setExpandedCategories(prev => [...prev, categoryId]);
    }
  };

  const handleSubcategoryClick = (categoryId: string, subcategoryName: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryName);
  };

  const getCategoryIcon = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? iconMap[cat.icon] || Building2 : Building2;
  };

  const getCategoryName = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : "";
  };

  // Get projects to display
  const getProjectsForSubcategory = (): Project[] => {
    if (!selectedSubcategory) return [];
    
    if (projects.length > 0) {
      return projects;
    }
    
    // Return placeholder if no projects
    return [createEmptyProject(selectedSubcategory)];
  };

  const projectsToDisplay = getProjectsForSubcategory();
  const hasRealProjects = projectsToDisplay.length > 0 && projectsToDisplay[0].demo_url !== "";

  // Check if subcategory has projects (for sidebar indicator)
  const subcategoryHasProjects = (categoryId: string, subcategoryName: string): boolean => {
    return allProjects.some(p => 
      p.category_id === categoryId && p.subcategory_name === subcategoryName
    );
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 min-h-screen bg-[var(--bg-secondary)]">
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
              Klik op een subcategorie om de projecten te zien.
            </p>
            
            {/* Admin Link */}
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--text-muted)] hover:text-primary transition-colors"
            >
              <Settings className="w-4 h-4" />
              Admin Panel
            </Link>
          </div>

          {/* Main Layout - Mobile: Projects first, Desktop: Sidebar first */}
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            
            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all"
              >
                <Filter className="w-5 h-5" />
                <span className="font-medium">Categorieën</span>
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
              <div className="lg:hidden fixed inset-0 z-50">
                <div 
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[var(--bg-card)] shadow-2xl">
                  <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
                    <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Categorieën
                    </h2>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-[var(--text-secondary)]" />
                    </button>
                  </div>
                  <div className="overflow-y-auto h-[calc(100vh-70px)]">
                    {categories.map((category) => {
                      const isExpanded = expandedCategories.includes(category.id);
                      const isSelected = selectedCategory === category.id;
                      const Icon = iconMap[category.icon] || Building2;

                      return (
                        <div key={category.id} className="border-b border-[var(--border)] last:border-b-0">
                          <button
                            onClick={() => handleCategoryClick(category.id)}
                            className={`w-full text-left px-4 py-3 transition-all duration-200 flex items-center gap-3 ${
                              isSelected
                                ? "bg-primary/5 text-primary" 
                                : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
                            }`}
                          >
                            <Icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-primary" : ""}`} />
                            <span className="font-medium text-sm flex-1">{category.name}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCategory(category.id);
                              }}
                              className="p-1 hover:bg-[var(--bg-primary)] rounded transition-colors"
                            >
                              {isExpanded ? (
                                <ChevronDown className="w-4 h-4" />
                              ) : (
                                <ChevronRight className="w-4 h-4" />
                              )}
                            </button>
                          </button>

                          {isExpanded && (
                            <div className="bg-[var(--bg-tertiary)]">
                              {category.subcategories.map((sub) => {
                                const isSubSelected = selectedSubcategory === sub.name;
                                const hasProjects = subcategoryHasProjects(category.id, sub.name);
                                
                                return (
                                  <button
                                    key={sub.slug}
                                    onClick={() => {
                                      handleSubcategoryClick(category.id, sub.name);
                                      setIsMobileMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 pl-12 transition-all duration-200 flex items-center justify-between text-sm border-l-2 ${
                                      isSubSelected
                                        ? "bg-primary/10 text-primary border-primary" 
                                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border-transparent"
                                    }`}
                                  >
                                    <span>{sub.name}</span>
                                    {hasProjects && (
                                      <span className="w-2 h-2 rounded-full bg-green-500" title="Projecten beschikbaar" />
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
              </div>
            )}

            {/* Left Sidebar - Desktop Only */}
            <aside className="hidden lg:block lg:w-80 flex-shrink-0">
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden sticky top-28">
                <div className="p-5 border-b border-[var(--border)]">
                  <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Categorieën
                  </h2>
                </div>

                <div className="max-h-[calc(100vh-250px)] overflow-y-auto">
                  {categories.map((category) => {
                    const isExpanded = expandedCategories.includes(category.id);
                    const isSelected = selectedCategory === category.id;
                    const Icon = iconMap[category.icon] || Building2;

                    return (
                      <div key={category.id} className="border-b border-[var(--border)] last:border-b-0">
                        <button
                          onClick={() => handleCategoryClick(category.id)}
                          className={`w-full text-left px-5 py-4 transition-all duration-200 flex items-center gap-3 ${
                            isSelected
                              ? "bg-primary/5 text-primary" 
                              : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
                          }`}
                        >
                          <Icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? "text-primary" : ""}`} />
                          <span className="font-medium text-sm flex-1">{category.name}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCategory(category.id);
                            }}
                            className="p-1 hover:bg-[var(--bg-primary)] rounded transition-colors"
                          >
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </button>
                        </button>

                        {isExpanded && (
                          <div className="bg-[var(--bg-tertiary)]">
                            {category.subcategories.map((sub) => {
                              const isSubSelected = selectedSubcategory === sub.name;
                              const hasProjects = subcategoryHasProjects(category.id, sub.name);
                              
                              return (
                                <button
                                  key={sub.slug}
                                  onClick={() => handleSubcategoryClick(category.id, sub.name)}
                                  className={`w-full text-left px-5 py-3 pl-14 transition-all duration-200 flex items-center justify-between text-sm border-l-2 ${
                                    isSubSelected
                                      ? "bg-primary/10 text-primary border-primary" 
                                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border-transparent"
                                  }`}
                                >
                                  <span>{sub.name}</span>
                                  {hasProjects && (
                                    <span className="w-2 h-2 rounded-full bg-green-500" title="Projecten beschikbaar" />
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

            {/* Right Content - Projects Section (First on mobile) */}
            <div className="flex-1">
              {/* Mobile Selected Category Info */}
              <div className="lg:hidden mb-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-3">
                  <span>{getCategoryName(selectedCategory || "")}</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-primary font-medium">{selectedSubcategory}</span>
                </div>
              </div>

              {selectedSubcategory ? (
                <div className="space-y-8">
                  {/* Breadcrumb - Desktop Only */}
                  <div className="hidden lg:flex items-center gap-2 text-sm text-[var(--text-muted)]">
                    <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span>{getCategoryName(selectedCategory || "")}</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-primary font-medium">{selectedSubcategory}</span>
                  </div>

                  {/* Section Title */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                      {selectedSubcategory} Websites
                    </h2>
                    <p className="text-[var(--text-secondary)] mt-2">
                      Bekijk onze demo projecten voor {selectedSubcategory.toLowerCase()}.
                      {hasRealProjects 
                        ? ` ${projectsToDisplay.length} project${projectsToDisplay.length > 1 ? 'en' : ''} gevonden.`
                        : " Binnenkort beschikbaar - vraag een voorbeeld aan!"
                      }
                    </p>
                  </div>

                  {/* Loading State */}
                  {isLoading ? (
                    <div className="flex items-center justify-center py-20">
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    </div>
                  ) : (
                    <>
                      {/* Project Rows */}
                      <div className="space-y-8">
                        {projectsToDisplay.map((project, index) => (
                          <div 
                            key={project.id || index}
                            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                          >
                            <div className="grid lg:grid-cols-2 gap-0">
                              {/* Left Side - Project Info */}
                              <div className="p-6 lg:p-8 flex flex-col">
                                <div className="mb-6">
                                  <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider">
                                      {selectedSubcategory}
                                    </span>
                                    {hasRealProjects && (
                                      <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-semibold">
                                        LIVE DEMO
                                      </span>
                                    )}
                                  </div>
                                  
                                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                                    {project.title}
                                  </h3>
                                  
                                  <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {project.short_desc}
                                  </p>
                                </div>

                                <div className="flex-1">
                                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                                    <Code2 className="w-4 h-4 text-primary" />
                                    Kenmerken
                                  </h4>
                                  <ul className="space-y-2">
                                    {project.features.slice(0, 6).map((feature, fIdx) => (
                                      <li key={fIdx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="mt-6 pt-6 border-t border-[var(--border)] flex flex-wrap gap-3">
                                  {hasRealProjects && project.demo_url ? (
                                    <>
                                      <a
                                        href={project.demo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 text-sm"
                                      >
                                        <Eye className="w-4 h-4" />
                                        Bekijk Demo
                                        <ExternalLink className="w-3.5 h-3.5" />
                                      </a>
                                      <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] text-[var(--text-primary)] rounded-xl font-semibold hover:bg-[var(--bg-tertiary)] transition-all duration-300 text-sm"
                                      >
                                        <Globe className="w-4 h-4" />
                                        Vraag offerte aan
                                      </Link>
                                    </>
                                  ) : (
                                    <>
                                      <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 text-sm"
                                      >
                                        <Monitor className="w-4 h-4" />
                                        Vraag voorbeeld aan
                                      </Link>
                                      <span className="inline-flex items-center gap-2 px-5 py-2.5 text-[var(--text-muted)] text-sm">
                                        🎨 Binnenkort live
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>

                              {/* Right Side - Project Image */}
                              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[300px] lg:min-h-full">
                                <div className="absolute inset-0 opacity-10">
                                  <div className="absolute inset-0" style={{
                                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                    backgroundSize: "40px 40px"
                                  }} />
                                </div>

                                <div className="relative p-4 lg:p-6 h-full flex flex-col">
                                  {hasRealProjects && project.image ? (
                                    <div className="w-full max-w-lg mx-auto">
                                      {/* URL Bar */}
                                      <div className="mb-3 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg">
                                        <div className="flex items-center gap-3">
                                          <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                          </div>
                                          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 rounded-md">
                                            <Globe className="w-3.5 h-3.5 text-slate-500" />
                                            <span className="text-xs text-slate-400 font-mono truncate">
                                              {project.demo_url.replace('https://', '')}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      {/* Browser Window */}
                                      <div className="relative bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
                                        <div className="bg-slate-800 border-b border-slate-700 px-3 py-2 flex items-center gap-2">
                                          <div className="flex gap-1">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                          </div>
                                        </div>
                                        <div className="relative aspect-[4/3]">
                                          <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex-1 flex items-center justify-center">
                                      <div className="text-center">
                                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 border border-primary/20">
                                          {(() => {
                                            const IconComponent = getCategoryIcon(selectedCategory || "");
                                            return <IconComponent className="w-12 h-12 text-primary/60" />;
                                          })()}
                                        </div>
                                        
                                        <h4 className="text-xl font-bold text-white mb-2">
                                          {selectedSubcategory} Website
                                        </h4>
                                        
                                        <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full inline-block">
                                          <span className="text-primary font-semibold text-sm">🎨 COMING SOON</span>
                                        </div>
                                        
                                        <p className="text-white/50 text-sm mt-4 max-w-xs mx-auto">
                                          We zijn bezig met een prachtig nieuw ontwerp voor deze branche
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent" style={{
                                  clipPath: "polygon(100% 0, 0 0, 100% 100%)"
                                }} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Section */}
                      <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl text-center">
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                          Ook een {selectedSubcategory.toLowerCase()} website nodig?
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                          Wij maken een op maat gemaakte website voor uw bedrijf. 
                          Neem contact met ons op voor een vrijblijvende offerte.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                          <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300"
                          >
                            Gratis offerte aanvragen
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                          <a 
                            href="https://wa.me/31625518708"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] text-[var(--text-primary)] rounded-xl font-semibold hover:bg-[var(--bg-tertiary)] transition-all duration-300"
                          >
                            WhatsApp ons
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="text-center py-20 bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Building2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      Selecteer een subcategorie
                    </h3>
                    <p className="text-[var(--text-secondary)] max-w-md mx-auto px-6">
                      Klik op een categorie aan de linkerkant om de projecten te bekijken.
                    </p>
                  </div>

                  <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
                      Ook een Website Nodig?
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
                      Laat ons je helpen met een professionele website voor jouw branche.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link href="/contact" className="btn-primary">
                        Gratis offerte aanvragen
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
