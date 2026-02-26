import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Globe, Check, ArrowRight, Zap, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Goedkope WordPress Website Laten Maken Utrecht | €250 | Snel Online | TechSolutionsUtrecht",
  description: "Goedkope WordPress website laten maken vanaf €250. Snelle oplevering binnen 3-10 dagen. Betaalbaar, professioneel en snel in Utrecht. Gratis offerte!",
  keywords: ["goedkope wordpress website", "wordpress website laten maken", "betaalbare website utrecht", "snelle website laten maken", "website binnen 1 week"],
};

const features = [
  "Professioneel design op maat",
  "SEO-optimalisatie standaard",
  "Mobiel-vriendelijk (responsive)",
  "CMS zodat je zelf kunt beheren",
  "Snelle laadtijden",
  "Voordelige prijs — geen verborgen kosten",
];

export default function WordPressPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:text-primary">Diensten</Link>
            <span className="mx-2">/</span>
            <span>WordPress</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Goedkope WordPress Website{" "}
                <span className="gradient-text">Laten Maken</span>
              </h1>

              {/* Speed + Price badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Binnen 3-10 dagen online</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500 font-medium">Express levering mogelijk</span>
                </div>
              </div>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Op zoek naar een <strong className="text-[var(--text-primary)]">goedkope website laten maken</strong> in Utrecht? 
                Vanaf slechts <strong className="text-primary">€250</strong> bouwen wij een professionele 
                WordPress website. Betaalbaar, snel en zonder concessies aan kwaliteit.
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
                <div className="text-3xl font-bold text-primary">€250 - €800</div>
                <div className="text-[var(--text-muted)]">Oplevering: 3-10 dagen</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Vraag gratis offerte aan
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">WordPress</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €250</div>
                  <div className="text-[var(--text-muted)] mt-1">3-10 dagen</div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Content Block */}
          <div className="mt-20 p-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Waarom Kiezen voor een Goedkope WordPress Website?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-[var(--text-secondary)]">
              <div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Voordelige prijs zonder kwaliteitsverlies</h3>
                <p>Onze betaalbare websites zijn volledig professioneel, SEO-vriendelijk en mobiel-responsive. Lage prijs betekent bij ons niet lage kwaliteit.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Snelle oplevering</h3>
                <p>Waar andere bureaus weken wachten, leveren wij binnen <strong className="text-primary">3-10 werkdagen</strong>. Express oplevering is mogelijk bij spoed.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
