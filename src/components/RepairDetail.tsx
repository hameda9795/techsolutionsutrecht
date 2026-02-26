"use client";

import Link from "next/link";
import { 
  Laptop, 
  Monitor, 
  Smartphone, 
  Check, 
  ArrowRight 
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  laptop: Laptop,
  computer: Monitor,
  mac: Laptop,
  phone: Smartphone,
};

interface RepairDetailProps {
  repair: {
    icon: string;
    title: string;
    description: string;
    repairs: string[];
    brands: string[];
    price: string;
  };
}

export default function RepairDetail({ repair }: RepairDetailProps) {
  const Icon = iconMap[repair.icon] || Laptop;

  return (
    <div className="card-service">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">{repair.title}</h3>
          <p className="text-primary font-semibold">{repair.price}</p>
        </div>
      </div>

      <p className="text-[var(--text-secondary)] mb-6">{repair.description}</p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">
          Vaakste reparaties
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {repair.repairs.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm text-[var(--text-secondary)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">
          Merken
        </h4>
        <div className="flex flex-wrap gap-2">
          {repair.brands.map((brand) => (
            <span 
              key={brand}
              className="px-3 py-1 text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-full"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <Link 
        href="/contact" 
        className="btn-primary group w-full justify-center"
      >
        Afspraak maken
        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
