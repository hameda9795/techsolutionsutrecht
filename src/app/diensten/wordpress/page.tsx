import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Globe, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "WordPress Website Laten Maken Utrecht | TechSolutionsUtrecht",
  description: "Professionele WordPress websites op maat. SEO-vriendelijk, responsive en makkelijk zelf te beheren. Vanaf €1.499. Gratis offerte!",
};

const features = [
  "Professioneel design op maat",
  "SEO-optimalisatie standaard",
  "Mobiel-vriendelijk (responsive)",
  "CMS zodat je zelf kunt beheren",
  "Snelle laadtijden",
  "Veiligheid updates",
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
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6">
                WordPress Websites{" "}
                <span className="gradient-text">die Werken</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                WordPress is &#39;s werelds meest gebruikte CMS — en dat is niet 
                voor niks. Het is gebruiksvriendelijk, SEO-vriendelijk en 
                eindeloos uitbreidbaar.
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
                <div className="text-2xl font-bold text-primary">Vanaf €1.499</div>
                <div className="text-[var(--text-muted)]">Levertijd: 2-4 weken</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Vraag een WordPress offerte aan
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-32 h-32 text-blue-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">WordPress</div>
                  <div className="text-primary">Vanaf €1.499</div>
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
