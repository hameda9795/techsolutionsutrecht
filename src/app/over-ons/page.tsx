import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Users, Zap, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Over Ons | TechSolutionsUtrecht - Web & Repair Expert",
  description: "Leer TechSolutionsUtrecht kennen. 12 jaar ervaring in webdevelopment en tech reparaties in Utrecht. Dit is ons verhaal.",
};

const values = [
  {
    icon: Award,
    title: "Kwaliteit boven kwantiteit",
    description: "We nemen liever minder projecten aan en doen ze goed, dan alles half werk afleveren.",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description: "Geen callcenters, geen accountmanagers. Direct contact met de expert die aan je project werkt.",
  },
  {
    icon: Heart,
    title: "Eerlijke prijzen",
    description: "Geen verborgen kosten, geen verrassingen achteraf. Wat we afspreken, is wat je betaalt.",
  },
  {
    icon: Zap,
    title: "Snelle service",
    description: "We respecteren je tijd. Website nodig? Binnen 2 weken online. Laptop kapot? Meestal binnen 24 uur gerepareerd.",
  },
];

const certifications = [
  "12 jaar WordPress ervaring",
  "WooCommerce expert",
  "Apple certified repair",
  "Google Partner",
];

export default function OverOnsPage() {
  return (
    <>
      
      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
            <li className="text-[var(--text-muted)]">/</li>
            <li><span className="text-[var(--text-primary)] font-medium">Over Ons</span></li>
          </ol>
        </div>
      </nav>

       <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Over Ons
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Over{" "}
              <span className="gradient-text">TechSolutionsUtrecht</span>
            </h1>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <blockquote className="text-2xl sm:text-3xl font-medium text-[var(--text-primary)] leading-relaxed mb-6">
                "Begonnen in 2025 als eenmanszaak, met 12+ jaar ervaring. Nu vertrouwd tech-adres voor 20+ klanten in Utrecht en omgeving."
              </blockquote>
              
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  Wat begon als een hobby — het helpen van vrienden en familie met hun computerproblemen — 
                  groeide al snel uit tot een serieuze onderneming. In 2025 besloot ik om TechSolutionsUtrecht 
                  officieel te starten, met de 12+ jaar ervaring die ik had opgebouwd.
                </p>
                <p>
                  In de loop der jaren zag ik een duidelijke behoefte: klanten wilden niet alleen een website, 
                  maar hadden ook regelmatig tech-problemen. In plaats van ze door te verwijzen, besloot ik 
                  beide te doen. Dat maakt ons uniek.
                </p>
                <p>
                  Vandaag de dag helpen we ondernemers met hun online presence én particulieren met hun 
                  tech-problemen. Altijd met dezelfde passie en persoonlijke aandacht als op dag één.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-extrabold gradient-text">2025</div>
                  <div className="text-[var(--text-secondary)] mt-2">TechSolutionsUtrecht opgericht</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Why Web + Repair */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 lg:p-12 mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6 text-center">
              Waarom Web + Repair?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg text-center max-w-3xl mx-auto">
              De meeste bedrijven doen óf webdevelopment óf reparaties. Wij doen beide. 
              Waarom? Omdat tech nu eenmaal onderdeel is van het leven van onze klanten. 
              Je website is je online visitekaartje, je laptop is je werkplek. 
              Bij ons ben je voor beide aan het juiste adres.
            </p>
          </div>

          {/* Values */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Onze{" "}
                <span className="gradient-text">Waarden</span>
              </h2>
              <p className="text-[var(--text-secondary)]">
                Dit zijn de principes waar we elke dag naar streven.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="flex gap-4 p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">{value.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8">
              Certificeringen & Ervaring
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <div 
                  key={cert}
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-full"
                >
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-[var(--text-primary)]">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
