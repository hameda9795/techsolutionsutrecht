"use client";

import Link from "next/link";
import { ArrowRight, Zap, Clock, Euro } from "lucide-react";

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
          {/* Badge - Price Focus */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-in-up">
            <Euro className="w-4 h-4 text-primary" />
            <span className="text-sm text-[var(--text-primary)] font-semibold">
              Vanaf €250 - De scherpste prijzen in Utrecht
            </span>
          </div>

          {/* Main Headline - Cheap + Fast */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up animate-delay-100">
            <span className="text-[var(--text-primary)]">Goedkope Website</span>
            <br />
            <span className="gradient-text">Vanaf €250</span>
          </h1>

          {/* Subheadline - Fast delivery */}
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-6 animate-fade-in-up animate-delay-200">
            Snelle oplevering binnen <strong className="text-primary">3-10 dagen</strong>. 
            Voordelige webdesign, webshops en reparaties tegen scherpe prijzen in Utrecht. 
            Betaalbaar en professioneel!
          </p>

          {/* Price + Speed Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in-up animate-delay-300">
            <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-[var(--text-secondary)]">Express: Binnen 3 dagen online</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-[var(--text-secondary)]">Standaard: 3-10 dagen</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-400">
            <Link href="/contact" className="btn-primary group">
              Gratis offerte aanvragen
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href="https://wa.me/31625518708"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp direct
            </a>
          </div>

          {/* Trust Badges - Updated with price focus */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 animate-fade-in-up animate-delay-500">
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
              20+ tevreden klanten
            </div>
            <div className="h-8 w-px bg-[var(--border)] hidden sm:block" />
            <div className="text-[var(--text-muted)] text-sm">
              Snelle oplevering
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
    </section>
  );
}
