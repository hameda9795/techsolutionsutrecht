import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Laptop, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mac & MacBook Reparatie Utrecht | TechSolutionsUtrecht",
  description: "Apple specialist in Utrecht. MacBook scherm, batterij, iMac reparaties. Originele onderdelen. Vanaf €99. WhatsApp +31 6 25518708",
};

const repairs = [
  "MacBook scherm reparatie",
  "MacBook batterij vervangen",
  "iMac reparaties",
  "Mac mini upgrades",
  "macOS problemen",
  "Data herstel",
];

const brands = ["MacBook", "MacBook Air", "MacBook Pro", "iMac", "Mac mini"];

export default function MacRepairPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/reparaties" className="hover:text-primary">Reparaties</Link>
            <span className="mx-2">/</span>
            <span>Mac</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Mac & MacBook{" "}
                <span className="gradient-text">Reparatie</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Specialist in Apple reparaties met originele onderdelen. 
                Vaak binnen 24 uur gerepareerd.
              </p>

              <h3 className="font-semibold text-[var(--text-primary)] mb-4">Specialisaties:</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {repairs.map((repair) => (
                  <div key={repair} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[var(--text-secondary)]">{repair}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-[var(--text-primary)] mb-4">Modellen:</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {brands.map((brand) => (
                  <span key={brand} className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-full text-sm">
                    {brand}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-2xl font-bold text-primary">Vanaf €99</div>
                <div className="text-[var(--text-muted)]">6 maanden garantie</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Afspraak maken
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <Laptop className="w-32 h-32 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">Mac Reparatie</div>
                  <div className="text-primary">Vanaf €99</div>
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
