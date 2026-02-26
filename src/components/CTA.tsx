"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
            Klaar om je tech naar het{" "}
            <span className="gradient-text">volgende niveau</span> te brengen?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Vraag een gratis offerte aan. Binnen 4 uur reactie. Geen verplichtingen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary group text-lg px-10 py-5">
              Start je project
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+31612345678"
              className="btn-ghost group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel direct: 06-12345678
            </a>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-[var(--text-muted)] text-sm">
            ✓ Gratis adviesgesprek ✓ Binnen 4 uur reactie ✓ Geen verplichtingen
          </p>
        </div>
      </div>
    </section>
  );
}
