import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Code, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Maatwerk Webapplicatie Laten Bouwen Utrecht | TechSolutionsUtrecht",
  description: "Custom webapplicaties met Next.js, React en moderne technologie. Vanaf €5.000. Gratis adviesgesprek!",
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
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Maatwerk voor{" "}
                <span className="gradient-text">Complexe Vraagstukken</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Soms heb je meer dan een standaard website nodig. 
                Wij bouwen custom webapplicaties met moderne technologie.
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
                <div className="text-2xl font-bold text-primary">Vanaf €5.000</div>
                <div className="text-[var(--text-muted)]">Projectafhankelijk</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Besprek je project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-32 h-32 text-secondary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">Maatwerk</div>
                  <div className="text-primary">Vanaf €5.000</div>
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
