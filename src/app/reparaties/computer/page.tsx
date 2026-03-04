import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Monitor, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Goedkope Computer Reparatie Utrecht | Vanaf €40 | TechSolutionsUtrecht",
  description: "Voordelige computer reparatie in Utrecht vanaf €40. Virus, hardware, niet opstarten. Snelle service, scherpe prijzen. WhatsApp +31 6 25518708",
  keywords: ["goedkope computer reparatie utrecht", "voordelige pc reparatie", "lage prijs computer", "betaalbare computer reparatie"],
};

const repairs = [
  "Niet opstarten",
  "Traagheid / freezes",
  "Virus & malware",
  "Hardware upgrades",
  "Data recovery",
  "Netwerk problemen",
];

export default function ComputerRepairPage() {
  return (
    <>
      
        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><Link href="/reparaties" className="text-[var(--text-muted)] hover:text-primary transition-colors">Reparaties</Link></li>
              <li className="text-[var(--text-muted)]">/</li>
              <li><span className="text-[var(--text-primary)] font-medium capitalize">computer</span></li>
            </ol>
          </div>
        </nav>

         <main className="pt-32 pb-24">
        <div className="container-custom">
          <nav className="text-sm text-[var(--text-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/reparaties" className="hover:text-primary">Reparaties</Link>
            <span className="mx-2">/</span>
            <span>Computer</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Goedkope Computer{" "}
                <span className="gradient-text">Reparatie</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                <strong className="text-[var(--text-primary)]">Betaalbare computer reparatie</strong> in Utrecht vanaf 
                <strong className="text-primary">€40</strong>. 
                Virus verwijderen, hardware upgrades, snelheidsoptimalisatie. Voordelig en snel.
              </p>

              <h3 className="font-semibold text-[var(--text-primary)] mb-4">Vaakste reparaties:</h3>
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

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-3xl font-bold text-primary">Vanaf €40</div>
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
                  <Monitor className="w-32 h-32 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">Computer</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €40</div>
                  <div className="text-[var(--text-muted)] mt-1">Scherpe prijs</div>
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
