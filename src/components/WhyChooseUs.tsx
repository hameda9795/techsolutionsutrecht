"use client";

import { Layers, Award, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Alles onder één dak",
    description:
      "Anders moet je voor je website naar een bureau, en voor je laptop naar een andere winkel. Bij ons regel je alles in één keer.",
  },
  {
    icon: Award,
    title: "12+ jaar ervaring",
    description:
      "TechSolutionsUtrecht opgericht in 2025, met 12+ jaar persoonlijke ervaring in webdevelopment en tech reparaties.",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description:
      "Geen callcenters, geen accountmanagers. Direct contact met de expert die aan je project werkt.",
  },
  {
    icon: Zap,
    title: "Snelle service",
    description:
      "Website nodig? Binnen 2 weken online. Laptop kapot? Meestal binnen 24 uur gerepareerd.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-[var(--bg-primary)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Waarom Wij?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Waarom{" "}
              <span className="gradient-text">TechSolutionsUtrecht?</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8">
              Wij zijn niet zomaar een webbureau of reparatiezaak. Wij zijn jouw 
              complete tech-partner in Utrecht. Met onze unieke combinatie van 
              webdevelopment en hardware reparaties ben je bij ons aan het juiste adres.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
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
            <div className="relative z-10 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-extrabold gradient-text mb-2">20+</div>
                  <div className="text-[var(--text-secondary)]">Tevreden Klanten</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[var(--bg-tertiary)] rounded-xl">
                  <div className="text-2xl font-bold text-primary">12+</div>
                  <div className="text-sm text-[var(--text-secondary)]">Jaar ervaring</div>
                </div>
                <div className="text-center p-4 bg-[var(--bg-tertiary)] rounded-xl">
                  <div className="text-2xl font-bold text-secondary">4.9/5</div>
                  <div className="text-sm text-[var(--text-secondary)]">Beoordeling</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
