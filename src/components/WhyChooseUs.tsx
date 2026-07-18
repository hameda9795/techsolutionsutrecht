"use client";

import { Award, Users, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Transparante prijs",
    description:
      "Je ziet vooraf wat de basis kost en ontvangt na de intake een duidelijke offerte met een vaste totaalprijs, afgestemd op de inhoud en functies.",
  },
  {
    icon: Zap,
    title: "Duidelijke planning",
    description:
      "Na de intake spreken we een haalbare planning en opleverdatum af. De doorlooptijd hangt af van de omvang, functies en beschikbare content.",
  },
  {
    icon: TrendingUp,
    title: "SEO die écht werkt",
    description:
      "Ik leg een goede technische SEO-basis, optimaliseer belangrijke content en maak resultaten inzichtelijk met monitoring en rapportage.",
  },
  {
    icon: Users,
    title: "Direct contact met de expert",
    description:
      "Geen accountmanagers, geen callcenters. Je praat direct met mij - de developer die aan je project werkt. Persoonlijk, snel en zonder miscommunicatie.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">
              Waarom ik?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mt-4 mb-6">
              Wat maakt mijn aanpak{" "}
              <span className="text-[var(--color-primary)]">
                anders?
              </span>
            </h2>
            <p className="text-[var(--color-muted)] text-lg mb-8">
              Ik ben Max, een ervaren webdeveloper die gelooft dat kwaliteit niet duur hoeft te zijn. 
              Met moderne technologie en jarenlange expertise bouw ik websites die jouw bedrijf laten groeien - 
              zonder de hoofdprijs.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl hover:bg-[var(--color-surface)] transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative z-10 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 shadow-lg">
              <div className="aspect-square rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-extrabold text-[var(--color-primary)] mb-2">
                    12+
                  </div>
                  <div className="text-[var(--color-muted)]">Jaar ervaring</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">20+</div>
                  <div className="text-sm text-[var(--color-muted)]">Tevreden klanten</div>
                </div>
                <div className="text-center p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">Vaste</div>
                  <div className="text-sm text-[var(--color-muted)]">Totaalprijs vooraf</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-[var(--color-success)]/10 rounded-xl border border-[var(--color-success)]/20">
                <p className="text-sm text-[var(--color-success)] text-center">
                  ✓ <strong>Heldere afspraken:</strong> scope, planning en prijs vooraf
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-primary)]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
