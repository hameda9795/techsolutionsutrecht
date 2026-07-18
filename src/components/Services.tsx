"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { coreServices, type ServiceIcon } from "@/lib/services";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  website: Globe,
  webshop: ShoppingCart,
  seo: TrendingUp,
  maintenance: ShieldCheck,
  automation: MessageCircle,
};

export default function Services() {
  return (
    <section className="bg-[var(--color-bg)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Onze Diensten
          </span>
          <h2 className="mt-4 mb-6 text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Alles wat je nodig hebt voor een{" "}
            <span className="text-[var(--color-primary)]">
              sterke online aanwezigheid
            </span>
          </h2>
          <p className="text-lg text-[var(--color-muted)]">
            Van website tot SEO-optimalisatie en slimme automatisering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {coreServices.map((service, index) => {
            const Icon = serviceIcons[service.id];

            return (
              <article
              key={service.id}
              className={`group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-bg)] hover:shadow-lg md:col-span-1 ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)] transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-primary)]">
                {service.title}
              </h3>

              <div className="mb-6 flex flex-col items-start gap-1">
                <span className="text-lg font-bold text-[var(--color-primary)]">
                  {service.price}
                </span>
                {service.typicalPrice && (
                  <span className="text-sm font-medium text-[var(--color-muted)]">
                    {service.typicalPrice}
                  </span>
                )}
              </div>

              <ul className="mb-6 space-y-3" aria-label={`Kenmerken van ${service.title}`}>
                {service.homeFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-ink)]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-6 text-base leading-relaxed text-[var(--color-ink)]">
                {service.homeDescription}
              </p>

              <Link
                href={service.href}
                className="mt-auto inline-flex items-center self-start text-sm font-semibold text-[var(--color-primary)]"
                aria-label={`Meer informatie over ${service.title}`}
              >
                <span>{service.homeCta}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-base leading-relaxed text-[var(--color-ink)]">
          De genoemde vanafprijzen gelden voor de basisuitvoering en zijn exclusief
          btw. De uiteindelijke prijs hangt af van de gewenste functies, inhoud en
          koppelingen. Na een korte intake ontvang je een duidelijke offerte met een
          vaste totaalprijs.
        </p>
      </div>
    </section>
  );
}
