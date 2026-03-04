import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website Laten Maken Nieuwegein | Vanaf €250 | TechSolutionsUtrecht",
  description: "Laat je professionele website maken in Nieuwegein. 12+ jaar ervaring, moderne technologie, scherpe prijzen. WordPress, Next.js, SEO-geoptimaliseerd.",
  keywords: ["website laten maken nieuwegein", "webdesign nieuwegein"],
  alternates: { canonical: "https://techsolutionsutrecht.nl/nieuwegein" },
};

export default function NieuwegeinPage() {
  return (
    <>
      <main className="pt-24 bg-white">
        <nav className="py-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-500 hover:text-[#0f766e]">Home</Link></li>
              <li className="text-slate-400">/</li>
              <li><span className="text-slate-900">Nieuwegein</span></li>
            </ol>
          </div>
        </nav>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f766e]/10 text-[#0f766e] text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Nieuwegein
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Website Laten Maken{" "}
                <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">Nieuwegein</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                Professionele webdevelopment in Nieuwegein. Websites die werken, 
                SEO die resultaat oplevert, en persoonlijke service door Max.
              </p>
              
              <a 
                href="https://wa.me/31625518708"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E]"
              >
                <Phone className="w-5 h-5" />
                Gratis advies
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
