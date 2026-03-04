"use client";

import { Award, Users, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Scherpe prijs, premium kwaliteit",
    description:
      "Betaalbaar betekent niet goedkoop. Dankzij 12+ jaar ervaring en moderne tools werk ik efficiënter dan traditionele bureaus. Je krijgt een professionele website die normaal 3x zo veel zou kosten.",
  },
  {
    icon: Zap,
    title: "Binnen 1 week online",
    description:
      "Geen maanden wachten. Met Next.js en moderne frameworks bouw ik sneller zonder in te leveren op kwaliteit. Wat vroeger maanden duurde, doe ik nu in dagen.",
  },
  {
    icon: TrendingUp,
    title: "SEO die écht werkt",
    description:
      "Geen theoretisch advies. Ik implementeer technische SEO, optimaliseer content en zorg dat je website gevonden wordt op Google. Met meetbare resultaten.",
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#0f766e] font-semibold text-sm uppercase tracking-wider">
              Waarom ik?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Wat maakt mijn aanpak{" "}
              <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">
                anders?
              </span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Ik ben Max, een ervaren webdeveloper die gelooft dat kwaliteit niet duur hoeft te zijn. 
              Met moderne technologie en jarenlange expertise bouw ik websites die jouw bedrijf laten groeien - 
              zonder de hoofdprijs.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f766e]/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#0f766e]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
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
            <div className="relative z-10 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-[#0f766e]/20 to-[#14b8a6]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-extrabold bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent mb-2">
                    12+
                  </div>
                  <div className="text-slate-600">Jaar ervaring</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold text-[#0f766e]">20+</div>
                  <div className="text-sm text-slate-500">Tevreden klanten</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold text-[#0f766e]">#1</div>
                  <div className="text-sm text-slate-500">Google ranking</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-sm text-green-800 text-center">
                  ✅ <strong>Garantie:</strong> Tevreden of je geld terug
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0f766e]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#14b8a6]/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
