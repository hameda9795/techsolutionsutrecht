"use client";

import Link from "next/link";
import { 
  Globe, 
  ShoppingCart, 
  Code, 
  TrendingUp, 
  Check, 
  Clock, 
  Euro,
  ArrowRight 
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wordpress: Globe,
  webshop: ShoppingCart,
  maatwerk: Code,
  seo: TrendingUp,
};

const colorMap: Record<string, string> = {
  blue: "bg-[var(--color-primary)]",
  orange: "bg-[var(--color-accent)]",
  purple: "bg-[var(--color-primary-light)]",
  green: "bg-[var(--color-success)]",
};

interface ServiceDetailProps {
  service: {
    icon: string;
    title: string;
    description: string;
    features: string[];
    price: string;
    time: string;
    href: string;
    color: string;
  };
  index: number;
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
  const Icon = iconMap[service.icon];
  const isReversed = index % 2 === 1;

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
      {/* Content */}
      <div className={isReversed ? "lg:order-2" : ""}>
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colorMap[service.color]} mb-6`}>
          {Icon && <Icon className="w-8 h-8 text-white" />}
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-4">
          {service.title}
        </h2>
        
        <p className="text-[var(--color-muted)] text-lg mb-8">
          {service.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-[var(--color-muted)]">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-[var(--color-muted)]">
            <Euro className="w-5 h-5 text-primary" />
            <span>{service.price}</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--color-muted)]">
            <Clock className="w-5 h-5 text-[var(--color-muted)]" />
            <span>{service.time}</span>
          </div>
        </div>

        <Link 
          href="/contact" 
          className="btn-primary group inline-flex"
        >
          Vraag een offerte aan
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Visual */}
      <div className={`relative ${isReversed ? "lg:order-1" : ""}`}>
        <div className="aspect-square rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] p-8 flex items-center justify-center">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${colorMap[service.color]} mb-6`}>
              {Icon && <Icon className="w-16 h-16 text-white" />}
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-2">
              {service.title}
            </h3>
            <p className="text-[var(--color-muted)]">
              {service.price}
            </p>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl" />
      </div>
    </div>
  );
}
