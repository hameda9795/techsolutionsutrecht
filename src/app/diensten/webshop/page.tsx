import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShoppingCart, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Webshop Laten Maken WooCommerce Utrecht | TechSolutionsUtrecht",
  description: "WooCommerce webshop die meegroeit met je business. iDEAL, voorraadbeheer, verzending. Vanaf €2.499. Gratis offerte!",
};

const features = [
  "Professioneel design",
  "Betalingen (iDEAL, creditcard, PayPal)",
  "Voorraadbeheer",
  "Verzendintegraties",
  "BTW-rapportages",
  "SEO voor producten",
];

export default function WebshopPage() {
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
            <span>Webshop</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Webshops die{" "}
                <span className="gradient-text">Verkopen</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Met WooCommerce bouwen we een webshop die meegroeit 
                met je business. Van startup tot enterprise.
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
                <div className="text-2xl font-bold text-primary">Vanaf €2.499</div>
                <div className="text-[var(--text-muted)]">Levertijd: 3-6 weken</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Start je webshop
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center">
                <div className="text-center">
                  <ShoppingCart className="w-32 h-32 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">WooCommerce</div>
                  <div className="text-primary">Vanaf €2.499</div>
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
