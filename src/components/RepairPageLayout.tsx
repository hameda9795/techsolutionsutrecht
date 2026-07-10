import Link from "next/link";
import {
  Laptop,
  Monitor,
  Smartphone,
  Tablet,
  Check,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import Footer from "@/components/Footer";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  laptop: Laptop,
  computer: Monitor,
  mac: Laptop,
  phone: Smartphone,
  tablet: Tablet,
};

export interface RepairFaq {
  question: string;
  answer: string;
}

export interface RepairIssue {
  title: string;
  text: string;
}

export interface RepairPageProps {
  /** Human label, e.g. "Laptop" */
  device: string;
  /** URL slug under /reparaties, e.g. "laptop" */
  slug: string;
  /** icon key: laptop | computer | mac | phone | tablet */
  icon: string;
  /** "€40" */
  priceFrom: string;
  /** H1 override; defaults to "{device} Reparatie Utrecht" */
  heading?: string;
  /** Unique intro paragraphs */
  intro: string[];
  /** Device-specific common problems (unique per device) */
  commonIssues: RepairIssue[];
  /** Brands handled */
  brands: string[];
  faqs: RepairFaq[];
}

const baseUrl = "https://techsolutionsutrecht.nl";

const trustSignals = [
  { icon: Award, text: "4.9/5 beoordeling" },
  { icon: Clock, text: "12 jaar ervaring" },
  { icon: Shield, text: "6 maanden garantie" },
  { icon: Check, text: "No cure, no pay" },
];

const process = [
  "Diagnose: je beschrijft de klacht via WhatsApp of het contactformulier, en je krijgt snel een eerlijke inschatting van oorzaak en kosten.",
  "Offerte vooraf: je weet de prijs voordat ik begin. Geen verrassingen achteraf, en bij no cure no pay betaal je niets als reparatie niet lukt.",
  "Reparatie: de meeste reparaties zijn snel klaar, vaak dezelfde dag of binnen enkele werkdagen, afhankelijk van onderdelen.",
  "Garantie: op uitgevoerde reparaties krijg je 6 maanden garantie, zodat je met een gerust hart verder kunt.",
];

export default function RepairPageLayout({
  device,
  slug,
  icon,
  priceFrom,
  heading,
  intro,
  commonIssues,
  brands,
  faqs,
}: RepairPageProps) {
  const url = `${baseUrl}/reparaties/${slug}`;
  const Icon = iconMap[icon] || Laptop;
  const h1 = heading || `${device} Reparatie Utrecht`;

  const service = serviceSchema({
    name: `${device} reparatie Utrecht`,
    description: `${device} reparatie in Utrecht vanaf ${priceFrom}, met 6 maanden garantie en no cure no pay. Snelle, betrouwbare service en een eerlijke prijs vooraf.`,
    url,
  });
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Reparaties", url: `${baseUrl}/reparaties` },
    { name: `${device} Reparatie`, url },
  ]);
  const faqSchema = faqPageSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-[var(--color-muted)] hover:text-primary transition-colors">Home</Link></li>
            <li className="text-[var(--color-muted)]">/</li>
            <li><Link href="/reparaties" className="text-[var(--color-muted)] hover:text-primary transition-colors">Reparaties</Link></li>
            <li className="text-[var(--color-muted)]">/</li>
            <li><span className="text-[var(--color-ink)] font-medium capitalize">{device}</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                {h1}
              </h1>

              {intro.map((p, i) => (
                <p key={i} className={`text-lg text-[var(--color-muted)] ${i === intro.length - 1 ? "mb-8" : "mb-4"} leading-relaxed`}>{p}</p>
              ))}

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-3xl font-bold text-primary">Vanaf {priceFrom}</div>
                <div className="text-[var(--color-muted)]">6 maanden garantie</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                  <Phone className="w-5 h-5" /> WhatsApp direct
                </a>
                <Link href="/contact" className="btn-primary group inline-flex items-center justify-center">
                  Afspraak maken
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center">
                  <Icon className="w-32 h-32 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--color-ink)]">{device}</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf {priceFrom}</div>
                  <div className="text-[var(--color-muted)] mt-1">6 maanden garantie</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustSignals.map((s) => (
              <div key={s.text} className="flex items-center gap-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-4">
                <s.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-[var(--color-muted)] text-sm font-medium">{s.text}</span>
              </div>
            ))}
          </div>

          {/* Common issues — unique per device */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelvoorkomende {device.toLowerCase()}problemen die ik oplos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((issue) => (
                <div key={issue.title} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{issue.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{issue.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Brands */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">Merken die ik repareer</h2>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span key={brand} className="px-3 py-1 bg-[var(--color-surface)] text-[var(--color-muted)] rounded-full text-sm">{brand}</span>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">Zo werkt de reparatie</h2>
            <ul className="space-y-4">
              {process.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-[var(--color-muted)] leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen — {device.toLowerCase()} reparatie</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Other repairs */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">Andere reparaties</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { s: "laptop", l: "Laptop" },
                { s: "computer", l: "Computer" },
                { s: "mac", l: "Mac & MacBook" },
                { s: "telefoon", l: "Telefoon" },
                { s: "ipad", l: "iPad" },
                { s: "tablet", l: "Tablet" },
              ].filter((r) => r.s !== slug).map((r) => (
                <Link key={r.s} href={`/reparaties/${r.s}`} className="px-4 py-2 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-muted)] hover:border-primary/40 transition-colors text-sm">
                  {r.l} reparatie
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 text-center bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">{device} kapot? Ik help je snel verder.</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Stuur een berichtje met je klacht en je krijgt snel een eerlijke prijsindicatie. No cure, no pay en 6 maanden garantie op de reparatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Afspraak maken
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
