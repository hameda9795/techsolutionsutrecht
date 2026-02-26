import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ExternalLink, Code, Palette, ShoppingCart, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | Website & Webapplicatie Projecten | TechSolutionsUtrecht",
  description: "Bekijk onze portfolio van websites en webapplicaties. Projecten voor kappers, restaurants, webshops en meer. Bekijk demo's en laat je inspireren!",
  keywords: ["portfolio website", "voorbeeld website", "website projecten", "webapplicatie demo"],
};

const projects = [
  {
    id: "barbershop",
    title: "The Gentleman's Cut",
    category: "WordPress",
    description: "Een stijlvolle website voor een herenkapper in Utrecht. Donker thema met gouden accenten, online afsprakensysteem en prijslijst.",
    image: "/demo/barbershop/preview.jpg",
    demoUrl: "/demo/barbershop/index.html",
    technologies: ["HTML5", "CSS3", "Responsive", "SEO"],
    features: ["Online afspraken", "Prijscalculator", "Google Maps", "Contactformulier"],
    client: "Herenkapper Utrecht",
    completionDate: "2025",
  },
  {
    id: "restaurant",
    title: "La Bella Italia",
    category: "WordPress",
    description: "Elegante website voor een Italiaans restaurant. Met online reservering, menukaart en foto-galerij.",
    image: "/demo/restaurant/preview.jpg",
    demoUrl: "#",
    technologies: ["WordPress", "WooCommerce", "Reservation System"],
    features: ["Online reserveren", "Menukaart", "Foto galerij", "Reviews"],
    client: "Restaurant Amsterdam",
    completionDate: "2024",
  },
  {
    id: "webshop",
    title: "Fashion Forward",
    category: "Webshop",
    description: "Moderne webshop voor kleding met geavanceerde filters, wishlist en betalingssysteem.",
    image: "/demo/webshop/preview.jpg",
    demoUrl: "#",
    technologies: ["WooCommerce", "Stripe", "React"],
    features: ["Product filters", "Wishlist", "Betaalmethoden", "Voorraadbeheer"],
    client: "Fashion Store",
    completionDate: "2024",
  },
  {
    id: "dashboard",
    title: "Kliniek Management",
    category: "Maatwerk",
    description: "Custom dashboard voor een medische kliniek met patiëntbeheer, agenda en rapportages.",
    image: "/demo/dashboard/preview.jpg",
    demoUrl: "#",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    features: ["Patiëntbeheer", "Agenda systeem", "Rapportages", "Notificaties"],
    client: "Medische Kliniek",
    completionDate: "2024",
  },
];

const categories = [
  { name: "Alle", icon: Palette },
  { name: "WordPress", icon: Code },
  { name: "Webshop", icon: ShoppingCart },
  { name: "Maatwerk", icon: Smartphone },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Onze{" "}
              <span className="gradient-text">Projecten</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Bekijk een selectie van onze recente websites en webapplicaties. 
              Van stijlvolle WordPress websites tot complexe maatwerk applicaties.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-full hover:border-primary transition-colors"
              >
                <cat.icon className="w-5 h-5 text-primary" />
                <span className="text-[var(--text-primary)]">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-primary transition-all duration-300"
              >
                {/* Preview Image */}
                <div className="aspect-video bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] flex items-center justify-center relative"
                >
                  <div className="text-center"
003e
                    <div className="text-6xl mb-4">{project.category === "WordPress" ? "🌐" : project.category === "Webshop" ? "🛒" : "⚙️"}</div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{project.category}</span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Link 
                      href={project.demoUrl}
                      target="_blank"
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">{project.title}</h2>
                  
                  <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Technologieën:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Features:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-[var(--text-secondary)] text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                    <div className="text-sm text-[var(--text-muted)]">
                      Client: <span className="text-[var(--text-secondary)]">{project.client}</span>
                    </div>
                    <Link 
                      href={project.demoUrl}
                      target="_blank"
                      className="btn-primary text-sm"
                    >
                      Bekijk Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
              Ook een Project in Gedachten?
            </h2>
            
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Laat ons je helpen met een professionele website of webapplicatie. 
              We bespreken graag je ideeën en maken een vrijblijvende offerte.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Start je project
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
      </main>
      <Footer />
    </>
  );
}
