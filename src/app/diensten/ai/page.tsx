import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, Check, ArrowRight, Zap, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Integraties Laten Bouwen | Chatbots & Automatisering | Vanaf €500 | TechSolutionsUtrecht",
  description: "Slimme AI-chatbots, automatisering en custom AI-oplossingen voor jouw bedrijf. Vanaf €500, professioneel geïntegreerd in je website of werkproces. Utrecht.",
  keywords: ["AI integraties laten bouwen", "AI chatbot utrecht", "automatisering bedrijf", "custom AI oplossingen", "AI tools laten maken"],
};

const features = [
  "Slimme chatbots",
  "Automatisering",
  "AI-gestuurde analyses",
  "Integratie met je website",
  "Custom AI oplossingen",
  "Training & support",
];

export default function AiPage() {
  return (
    <>

        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><Link href="/diensten" className="text-[var(--text-muted)] hover:text-primary transition-colors">Diensten</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><span className="text-[var(--text-primary)] font-medium capitalize">AI Integraties</span></li>
            </ol>
          </div>
        </nav>

         <main className="pt-32 pb-24">
        <div className="container-custom">
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:text-primary">Diensten</Link>
            <span className="mx-2">/</span>
            <span>AI Integraties</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f766e] to-[#0d9488] mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Slimme{" "}
                <span className="gradient-text">AI Integraties</span>
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Op maat ontwikkeld</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500 font-medium">Projectafhankelijk</span>
                </div>
              </div>

              <p className="text-lg text-[var(--text-secondary)] mb-8">
                <strong className="text-[var(--text-primary)]">AI-tools en chatbots</strong> laten bouwen die echt tijd besparen?
                Vanaf <strong className="text-primary">€500</strong> ontwikkel ik slimme automatisering en AI-oplossingen
                die naadloos integreren met jouw website of werkproces.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-3xl font-bold text-primary">Vanaf €500</div>
                <div className="text-[var(--text-muted)]">Oplevering: projectafhankelijk</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Bespreek je AI-project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0f766e]/20 to-[#0d9488]/20 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-24 h-24 text-[#0f766e] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">AI Integraties</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €500</div>
                  <div className="text-[var(--text-muted)] mt-1">Projectafhankelijk</div>
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
