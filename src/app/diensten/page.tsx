import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { breadcrumbSchema } from "@/lib/schema";
import { coreServices, type ServiceIcon } from "@/lib/services";

const pageUrl = "https://techsolutionsutrecht.nl/diensten";

export const metadata: Metadata = {
  title: "Websites, SEO, Onderhoud & Automatisering | TechSolutions",
  description:
    "Bekijk onze digitale diensten: websites vanaf €250, webshops vanaf €795, SEO vanaf €200 per maand, websiteonderhoud vanaf €29 en automatisering vanaf €450.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Websites, SEO, Onderhoud & Automatisering | TechSolutions",
    description:
      "Websites, webshops, SEO, websiteonderhoud en automatisering met duidelijke startprijzen en direct contact met de developer.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites, SEO, Onderhoud & Automatisering | TechSolutions",
    description:
      "Bekijk websites, webshops, SEO, websiteonderhoud en automatisering met transparante startprijzen.",
  },
};

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  website: Globe,
  webshop: ShoppingCart,
  seo: TrendingUp,
  maintenance: ShieldCheck,
  automation: MessageCircle,
};

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: pageUrl },
]);

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digitale diensten van TechSolutionsUtrecht",
  numberOfItems: coreServices.length,
  itemListElement: coreServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.pageDescription,
      url: `https://techsolutionsutrecht.nl${service.href}`,
      provider: {
        "@type": "ProfessionalService",
        name: "TechSolutionsUtrecht",
        url: "https://techsolutionsutrecht.nl",
      },
      areaServed: {
        "@type": "City",
        name: "Utrecht",
      },
      offers: {
        "@type": "Offer",
        price: service.schemaPrice,
        priceCurrency: "EUR",
        description: service.price,
        url: `https://techsolutionsutrecht.nl${service.href}`,
      },
    },
  })),
};

export default function DienstenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <Breadcrumb items={[{ label: "Diensten", href: "/diensten" }]} />

      <main className="bg-[var(--color-bg)]">
        <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]">
          <div className="absolute inset-0 hidden xl:block" aria-hidden="true">
            <Image
              src="/images/diensten-hero-banner.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-center px-6 py-14 text-center sm:py-16 xl:min-h-[500px] xl:py-20">
            <div className="mx-auto max-w-3xl xl:max-w-2xl xl:rounded-2xl xl:bg-[var(--color-bg)] xl:px-10 xl:py-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                DIENSTEN
              </p>
              <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-bold text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                Digitale diensten voor jouw bedrijf
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--color-ink)]">
                Van een complete website of webshop tot SEO, technisch onderhoud en
                slimme automatisering. Je krijgt een duidelijke aanpak, transparante
                startprijs en direct contact met de developer.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[2172px] xl:hidden" aria-hidden="true">
            <Image
              src="/images/diensten-hero-banner.webp"
              alt=""
              width={2172}
              height={724}
              priority
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </section>

        <section aria-label="Onze digitale diensten" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="space-y-16 sm:space-y-20">
              {coreServices.map((service, index) => {
                const Icon = serviceIcons[service.id];
                const isReversed = index % 2 === 1;
                const priceNote = service.typicalPrice ?? service.pagePriceNote;

                return (
                  <article
                    key={service.id}
                    className={`grid items-stretch gap-8 md:grid-cols-2 md:gap-12 ${
                      index > 0
                        ? "border-t border-[var(--color-border)] pt-16 sm:pt-20"
                        : ""
                    }`}
                  >
                    <div
                      className={`order-1 flex flex-col justify-center ${
                        isReversed ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className="h-7 w-7 shrink-0 text-[var(--color-primary)]"
                          aria-hidden="true"
                        />
                        <h2 className="text-balance text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
                          {service.title}
                        </h2>
                      </div>
                      <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--color-ink)] sm:text-lg">
                        {service.pageDescription}
                      </p>

                      <div className="mt-6">
                        <p className="text-2xl font-bold text-[var(--color-primary)]">
                          {service.price}
                        </p>
                        {priceNote && (
                          <p className="mt-1 text-base font-medium text-[var(--color-muted)]">
                            {priceNote}
                          </p>
                        )}
                      </div>

                      <Link
                        href={service.href}
                        className="mt-7 inline-flex min-h-12 items-center self-start rounded-lg border-2 border-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                      >
                        {service.pageCta}
                        <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                      </Link>
                    </div>

                    <div
                      className={`order-2 flex h-full flex-col justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-8 ${
                        isReversed ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <h3 className="mb-5 text-lg font-bold text-[var(--color-ink)]">
                        Wat je krijgt
                      </h3>
                      <ul className="space-y-4" aria-label={`Kenmerken van ${service.title}`}>
                        {service.pageFeatures.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-base leading-relaxed text-[var(--color-ink)]"
                          >
                            <Check
                              className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)]"
                              aria-hidden="true"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl rounded-2xl bg-[var(--color-primary)] px-6 py-10 text-center text-white sm:px-10 sm:py-12">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Welke oplossing past bij jouw bedrijf?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
              Vertel kort wat je nodig hebt. We bekijken vrijblijvend welke aanpak,
              planning en prijs het beste bij jouw project passen.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/31625518708"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface)]"
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                WhatsApp direct
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-white px-7 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-primary)]"
              >
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                Vraag een voorstel aan
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
