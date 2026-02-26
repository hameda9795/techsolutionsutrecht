"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-bg overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl float-animation" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-xl float-animation animate-delay-500" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-accent/10 blur-xl float-animation animate-delay-300" />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-[var(--text-secondary)]">
              12+ jaar ervaring in Utrecht
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up animate-delay-100">
            <span className="text-[var(--text-primary)]">Al je tech onder</span>
            <br />
            <span className="gradient-text">één dak in Utrecht</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Professionele websites die converteren. Betrouwbare reparaties die werken. 
            Sinds 2012 voor ondernemers en particulieren in Utrecht.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link href="/contact" className="btn-primary group">
              Gratis offerte aanvragen
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/diensten" className="btn-secondary">
              Bekijk onze diensten
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 animate-fade-in-up animate-delay-400">
            <div className="flex items-center gap-2 text-[var(--text-muted)]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm">4.9/5 beoordeling</span>
            </div>
            <div className="h-8 w-px bg-[var(--border)] hidden sm:block" />
            <div className="text-[var(--text-muted)] text-sm">
              500+ tevreden klanten
            </div>
            <div className="h-8 w-px bg-[var(--border)] hidden sm:block" />
            <div className="text-[var(--text-muted)] text-sm">
              24u gemiddelde reparatietijd
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </section>
  );
}
