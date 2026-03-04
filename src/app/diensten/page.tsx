import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Website Laten Maken Utrecht | Professioneel & Snel | TechSolutionsUtrecht",
  description: "Laat je professionele website maken in Utrecht. 12+ jaar ervaring, moderne technologie (Next.js, WordPress), SEO-geoptimaliseerd. Vanaf €250. Gratis offerte!",
  keywords: ["website laten maken utrecht", "professionele website", "webdesign utrecht", "wordpress utrecht", "nextjs developer"],
};

const services = [
  {
    icon: "🌐",
    title: "WordPress Websites",
    description: "Professionele WordPress website vanaf €250. Modern design, SEO-geoptimaliseerd, en snel online. Perfect voor ZZP'ers en startende ondernemers.",
    features: [
      "Responsive design op maat",
      "SEO-technische basis",
      "Snelle laadtijden",
      "CMS - zelf te beheren",
      "Binnen 1 week online",
      "12+ jaar ervaring",
    ],
    price: "€250 - €800",
    time: "1 week",
    href: "/diensten/wordpress",
  },
  {
    icon: "🛒",
    title: "WooCommerce Webshops",
    description: "Webshop die converteert vanaf €350. Professioneel design, veilige betalingen, en volledig geoptimaliseerd voor verkoop.",
    features: [
      "Professioneel design",
      "iDEAL, creditcard, PayPal",
      "Voorraadbeheer",
      "Verzendintegraties",
      "SEO voor producten",
      "Mobiel geoptimaliseerd",
    ],
    price: "€350 - €1.200",
    time: "1-2 weken",
    href: "/diensten/webshop",
  },
  {
    icon: "⚡",
    title: "Maatwerk Webapplicaties",
    description: "Complexere oplossingen met Next.js, React of Angular. Vanaf €400 voor applicaties die echt iets toevoegen voor jouw bedrijf.",
    features: [
      "Next.js & React",
      "Node.js backend",
      "Database architectuur",
      "API integraties",
      "Real-time features",
      "Schaalbaar & snel",
    ],
    price: "€400 - €2.000",
    time: "2-4 weken",
    href: "/diensten/maatwerk",
  },
  {
    icon: "📈",
    title: "SEO Optimalisatie",
    description: "Hoger in Google met technische SEO en content-optimalisatie. Niet alleen advies, maar ook implementatie.",
    features: [
      "Technische SEO analyse",
      "Keyword onderzoek",
      "Content optimalisatie",
      "Local SEO (Google Business)",
      "Maandelijkse rapportage",
      "Meetbare resultaten",
    ],
    price: "Vanaf €250/maand",
    time: "Doorlopend",
    href: "/diensten/seo",
  },
  {
    icon: "🤖",
    title: "AI Integraties",
    description: "Slimme chatbots en AI-tools die tijd besparen. Vanaf €500 voor technologie die jouw bedrijf vooruit helpt.",
    features: [
      "Slimme chatbots",
      "Automatisering",
      "AI-gestuurde analyses",
      "Integratie met je website",
      "Custom AI oplossingen",
      "Training & support",
    ],
    price: "Vanaf €500",
    time: "Projectafhankelijk",
    href: "/diensten/ai",
  },
];

export default function DienstenPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: "Diensten", href: "/diensten" }]} />
      
      <main className="pt-24 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#0f766e] font-semibold text-sm uppercase tracking-wider">
              Diensten
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-4 mb-6">
              Jouw Online Succes{" "}
              <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">Begint Hier</span>
            </h1>
            <p className="text-slate-600 text-lg">
              Met 12+ jaar ervaring en moderne technologie bouw ik websites die werken. 
              Van eenvoudige WordPress sites tot complexe webapplicaties met AI.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-4 py-2 bg-[#0f766e]/10 text-[#0f766e] rounded-lg font-semibold">{service.price}</span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg">⏱️ {service.time}</span>
                  </div>
                  
                  <a 
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[#0f766e] font-semibold hover:underline"
                  >
                    Meer over {service.title}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                
                <div className={`bg-slate-50 rounded-2xl p-8 border border-slate-200 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="font-semibold text-slate-900 mb-4">Wat je krijgt:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-gradient-to-r from-[#0f766e] to-[#14b8a6] rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Laten we samen kijken wat het beste past bij jouw project. 
              Gratis advies, geen verplichtingen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/31625518708"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0f766e] px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
              >
                📱 WhatsApp direct
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors"
              >
                ✉️ Contactformulier
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
