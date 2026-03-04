"use client";

import Link from "next/link";
import { 
  Globe, 
  ShoppingCart, 
  Code, 
  TrendingUp,
  Sparkles,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Websites",
    description: "Professionele websites vanaf €250. Responsive, snel en SEO-geoptimaliseerd. Binnen 3-10 dagen online.",
    price: "€250 - €800",
    href: "/diensten/wordpress",
    color: "from-[#0f766e] to-[#14b8a6]",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Webshops",
    description: "Volledige webshops met betalingen, voorraadbeheer en verzending. Klaar om te verkopen vanaf dag één.",
    price: "€350 - €1.200",
    href: "/diensten/webshop",
    color: "from-[#0f766e] to-[#0d9488]",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimalisatie",
    description: "Hoger in Google met technische SEO, content-optimalisatie en linkbuilding. Meetbare resultaten.",
    price: "Vanaf €250/maand",
    href: "/diensten/seo",
    color: "from-[#0f766e] to-[#059669]",
  },
  {
    icon: Code,
    title: "Maatwerk Webapplicaties",
    description: "Complexe webapplicaties, dashboards en portals op maat. Gebouwd met React, Next.js of Angular.",
    price: "€400 - €2.000",
    href: "/diensten/maatwerk",
    color: "from-slate-700 to-slate-800",
  },
  {
    icon: Sparkles,
    title: "AI Integraties",
    description: "Slimme chatbots, geautomatiseerde analyses en AI-tools die tijd besparen. De toekomst van je bedrijf.",
    price: "Op aanvraag",
    href: "/diensten/ai",
    color: "from-[#0f766e] via-[#14b8a6] to-[#06b6d4]",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0f766e] font-semibold text-sm uppercase tracking-wider">
            Onze Diensten
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
            Alles wat u nodig heeft voor een{" "}
            <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">
              sterke online aanwezigheid
            </span>
          </h2>
          <p className="text-slate-600 text-lg">
            Van website tot SEO-optimalisatie en AI-oplossingen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0f766e] transition-colors">
                {service.title}
              </h3>
              <div className="text-[#0f766e] font-bold text-lg mb-2">{service.price}</div>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center text-[#0f766e] font-semibold text-sm">
                <span>Meer info</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Webapps & AI Row - Dark cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-slate-900 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Maatwerk Webapplicaties</h3>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Complexe webapplicaties, dashboards en portals op maat. Gebouwd met React, Next.js of Angular.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">€400 - €2.000</span>
              <Link 
                href="/diensten/maatwerk" 
                className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-colors"
              >
                Meer info
              </Link>
            </div>
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0f766e] to-[#0d9488] text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">AI Integraties</h3>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Slimme chatbots, geautomatiseerde analyses en AI-tools die tijd besparen. De toekomst van je bedrijf.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Op aanvraag</span>
              <Link 
                href="/diensten/ai" 
                className="bg-white text-[#0f766e] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-colors"
              >
                Meer info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
