"use client";

import Link from "next/link";
import { 
  Globe, 
  ShoppingCart, 
  Code, 
  Laptop, 
  Monitor, 
  Smartphone,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Websites",
    description: "Goedkope WordPress website vanaf €250. Al binnen 3 dagen online. Betaalbaar en professioneel.",
    price: "€250 - €800",
    href: "/diensten/wordpress",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Webshops",
    description: "Voordelige webshop laten maken vanaf €350. Snel online en klaar voor verkoop.",
    price: "€350 - €1.200",
    href: "/diensten/webshop",
    color: "from-primary to-orange-500",
  },
  {
    icon: Code,
    title: "Maatwerk Webapplicaties",
    description: "Snelle maatwerk ontwikkeling vanaf €400. Express oplevering mogelijk.",
    price: "€400 - €2.000",
    href: "/diensten/maatwerk",
    color: "from-secondary to-purple-500",
  },
  {
    icon: Laptop,
    title: "Laptop Reparatie",
    description: "Goedkope laptop reparatie vanaf €40. Scherm, batterij, waterschade.",
    price: "Vanaf €40",
    href: "/reparaties/laptop",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Monitor,
    title: "Computer Reparatie",
    description: "Voordelige computer reparatie vanaf €40. Virus, upgrades, onderhoud.",
    price: "Vanaf €40",
    href: "/reparaties/computer",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Smartphone,
    title: "Telefoon & Tablet",
    description: "Scherpe prijzen vanaf €35. iPhone, iPad, Samsung reparatie.",
    price: "Vanaf €35",
    href: "/reparaties/telefoon",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Services() {
  return (
    <section className="section bg-[var(--bg-primary)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Onze Diensten
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mt-4 mb-6">
            Alles wat je nodig hebt, 
            <span className="gradient-text">op één plek</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Van professionele websites tot snelle reparaties. Wij helpen je 
            met al je tech-uitdagingen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="card-service group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <div className="text-primary font-bold text-lg mb-2">{service.price}</div>
              <p className="text-[var(--text-secondary)] mb-6">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center text-primary font-semibold text-sm">
                <span>Meer info</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
