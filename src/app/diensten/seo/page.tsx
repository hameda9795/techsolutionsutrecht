import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Optimalisatie Utrecht | TechSolutionsUtrecht",
  description: "Hoger in Google met professionele SEO. Technische analyse, keyword research, content optimalisatie. Vanaf €499/maand.",
};

const features = [
  "Technische SEO analyse",
  "Keyword onderzoek",
  "Content optimalisatie",
  "Linkbuilding strategie",
  "Local SEO (Google Business)",
  "Maandelijkse rapportage",
];

export default function SEOPage() {
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
            <span>SEO</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Hoger in{" "}
                <span className="gradient-text">Google</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Een mooie website is niets waard als niemand &#39;m vindt. 
                Wij zorgen dat je gevonden wordt.
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
                <div className="text-2xl font-bold text-primary">Vanaf €499/maand</div>
                <div className="text-[var(--text-muted)]">Doorlopend</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Verbeter je SEO
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-32 h-32 text-green-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">SEO</div>
                  <div className="text-primary">Vanaf €499/maand</div>
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
