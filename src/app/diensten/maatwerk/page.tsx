import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code, Check, ArrowRight, Zap, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Goedkope Maatwerk Webapplicatie Laten Bouwen | Vanaf €400 | Snel | TechSolutionsUtrecht",
  description: "Betaalbare maatwerk webapplicatie laten bouwen vanaf €400. Snelle oplevering 5-12 dagen. Next.js, React, professioneel en voordelig in Utrecht.",
  keywords: ["goedkope maatwerk website", "betaalbare webapplicatie", "snelle webontwikkeling", "maatwerk website goedkoop", "express webapplicatie"],
};

const features = [
  "Next.js & React",
  "Node.js backend",
  "Database architectuur",
  "API integraties",
  "Real-time features",
  "Schaalbare hosting",
];

export default function MaatwerkPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:text-primary">Diensten</Link>
            <span className="mx-2">/</span>
            <span>Maatwerk</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-purple-500 mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Betaalbare Maatwerk{" "}
                <span className="gradient-text">Webapplicatie</span>
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">5-12 dagen oplevering</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500 font-medium">Scherpe prijs</span>
                </div>
              </div>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                <strong className="text-[var(--text-primary)]">Goedkope maatwerk webapplicatie</strong> laten bouwen? 
                Vanaf <strong className="text-primary">€400</strong> bouwen wij custom webapplicaties met moderne technologie. 
                Snel, betaalbaar en professioneel.
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
                <div className="text-3xl font-bold text-primary">€400 - €2.000</div>
                <div className="text-[var(--text-muted)]">Oplevering: 5-12 dagen</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Bespreek je project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-24 h-24 text-secondary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">Maatwerk</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €400</div>
                  <div className="text-[var(--text-muted)] mt-1">5-12 dagen</div>
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
