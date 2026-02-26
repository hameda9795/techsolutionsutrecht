import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Goedkope SEO Optimalisatie Utrecht | Vanaf €200/maand | TechSolutionsUtrecht",
  description: "Betaalbare SEO optimalisatie vanaf €200/maand. Hoger in Google tegen scherpe prijzen. Technische SEO, local SEO Utrecht. Gratis adviesgesprek!",
  keywords: ["goedkope seo optimalisatie", "betaalbare seo utrecht", "voordelige seo", "lage prijs seo", "seo vanaf 200 euro"],
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
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Goedkope SEO{" "}
                <span className="gradient-text">Optimalisatie</span>
              </h1>

              <p className="text-lg text-[var(--text-secondary)] mb-8">
                <strong className="text-[var(--text-primary)]">Betaalbare SEO optimalisatie</strong> vanaf 
                slechts <strong className="text-primary">€200 per maand</strong>. 
                Hoger in Google zonder de hoge kosten van grote bureaus. 
                Transparante prijzen, meetbaar resultaat.
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
                <div className="text-3xl font-bold text-primary">€200/maand</div>
                <div className="text-[var(--text-muted)]">Maandelijks opzegbaar</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Start met SEO
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-24 h-24 text-green-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">SEO</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">€200/maand</div>
                  <div className="text-[var(--text-muted)] mt-1">Maandelijks opzegbaar</div>
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
