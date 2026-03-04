import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Zap, TrendingUp, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Mij | TechSolutionsUtrecht - Webdeveloper & SEO Specialist",
  description: "Leer Max kennen - een ervaren webdeveloper met 12+ jaar ervaring in Utrecht. Specialist in websites, webshops en SEO.",
};

const values = [
  {
    icon: Award,
    title: "Kwaliteit staat voorop",
    description: "Ik lever alleen werk waar ik trots op ben. Geen shortcuts, geen half werk - alleen professionele resultaten.",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description: "Je werkt direct met mij, de developer. Geen accountmanagers, geen miscommunicatie - altijd direct contact.",
  },
  {
    icon: TrendingUp,
    title: "Resultaatgericht",
    description: "Mijn doel is jouw succes. Een website die niet alleen mooi is, maar ook klanten oplevert.",
  },
  {
    icon: Zap,
    title: "Snel en efficiënt",
    description: "Dankzij moderne technologie en 12 jaar ervaring werk ik sneller dan traditionele bureaus.",
  },
];

const certifications = [
  "12 jaar WordPress ervaring",
  "WooCommerce expert",
  "SEO specialist",
  "Google Search Console certified",
];

export default function OverMijPage() {
  return (
    <>
      <Header />
      
      <main className="pt-24 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="py-4 mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-500 hover:text-[#0f766e]">Home</Link></li>
              <li className="text-slate-400">/</li>
              <li><span className="text-slate-900 font-medium">Over mij</span></li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0f766e] font-semibold text-sm uppercase tracking-wider">
              Over mij
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-4 mb-6">
              Hallo, ik ben{" "}
              <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">
                Max
              </span>
            </h1>
            <p className="text-xl text-slate-600">
              Webdeveloper, IT-consultant en SEO-specialist in Utrecht
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <blockquote className="text-2xl sm:text-3xl font-medium text-slate-900 leading-relaxed mb-6">
                "Technologie verandert, maar mijn passie voor goede websites blijft. Met 12+ jaar ervaring bouw ik sites die werken."
              </blockquote>
              
              <div className="space-y-4 text-slate-600">
                <p>
                  Ik ben Max, software engineer en de persoon achter TechSolutionsUtrecht. 
                  Naast mijn studie wiskunde hier in Utrecht heb ik de afgelopen 12 jaar gewerkt aan websites en webapplicaties.
                </p>
                <p>
                  Wat begon als freelance projecten is nu mijn eigen bedrijf geworden. 
                  Mijn doel: ondernemers helpen met een website die écht werkt en goed gevonden wordt op Google.
                </p>
                
                <p>
                  Ik programmeer niet alleen code; ik denk mee over je merk. Of het nu een WordPress website is 
                  of een maatwerk applicatie in React, Next.js, Angular of Python - ik bouw het technisch solide en SEO-geoptimaliseerd.
                </p>
                
                <p>
                  Daarnaast ben ik gespecialiseerd in AI-integraties. Slimme chatbots, geautomatiseerde analyses - 
                  technologie die je daadwerkelijk tijd bespaart.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0f766e]/20 to-[#14b8a6]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src="/profile.webp" 
                      alt="Max" 
                      className="w-full h-full object-contain bg-slate-100"
                    />
                  </div>
                  <div className="text-6xl font-extrabold bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">
                    2013
                  </div>
                  <div className="text-slate-600 mt-2">Gestart met webdevelopment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Mijn waarden
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f766e]/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#0f766e]" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Expertise & Ervaring</h2>
                <p className="text-white/90">
                  Met meer dan 12 jaar hands-on ervaring in webdevelopment weet ik wat werkt. 
                  Ik blijf continu leren en volg de nieuwste technologieën.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-sm text-white/90">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
