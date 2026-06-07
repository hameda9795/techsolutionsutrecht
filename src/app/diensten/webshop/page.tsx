import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShoppingCart, Check, ArrowRight, Zap, Clock } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "Webshop", url: "https://techsolutionsutrecht.nl/diensten/webshop" },
]);

export const metadata: Metadata = {
  title: "WooCommerce Webshop Laten Maken Utrecht | TechSolutions",
  description: "Complete WooCommerce-webshop met iDEAL, voorraadbeheer en verzending. Klaar om te verkopen. Laat je webshop bouwen in Utrecht.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/diensten/webshop" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><Link href="/diensten" className="text-[var(--text-muted)] hover:text-primary transition-colors">Diensten</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><span className="text-[var(--text-primary)] font-medium capitalize">webshop</span></li>
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
            <span>Webshop</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Professionele Webshop{" "}
                <span className="gradient-text">Laten Maken</span>
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Binnen 5-12 dagen online</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500 font-medium">Snelle oplevering</span>
                </div>
              </div>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                <strong className="text-[var(--text-primary)]">Een webshop laten maken</strong> in Utrecht?
                Ik bouw een complete WooCommerce webshop met iDEAL, voorraadbeheer en verzending — scherp geprijsd en klaar om te verkopen.
                Met iDEAL-koppeling, voorraadbeheer en alles wat je nodig hebt om online te verkopen.
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
                <div className="text-3xl font-bold text-primary">€350 - €1.200</div>
                <div className="text-[var(--text-muted)]">Oplevering: 5-12 dagen</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Start je webshop
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center">
                <div className="text-center">
                  <ShoppingCart className="w-24 h-24 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">WooCommerce</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €350</div>
                  <div className="text-[var(--text-muted)] mt-1">5-12 dagen</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 p-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Voordelig Webshop Laten Maken — Hoe Werkt Het?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-[var(--text-secondary)]">
              <div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Scherpe prijs, alles inbegrepen</h3>
                <p>Onze webshops zijn all-in geprijsd. Geen verborgen kosten voor iDEAL-koppeling, design of installatie. Wat we afspreken, betaal je.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">Snel online — binnen 5-12 dagen</h3>
                <p>Je webshop is <strong className="text-primary">5 tot 12 werkdagen</strong> na akkoord live. Bij spoed is express oplevering mogelijk.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
