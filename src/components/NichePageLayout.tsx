import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, X, Check } from "lucide-react";
import Footer from "@/components/Footer";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

export interface NicheFaq {
  question: string;
  answer: string;
}

export interface NichePageProps {
  /** e.g. "kappers" */
  niche: string;
  /** Human title fragment, e.g. "Kapper" */
  nicheTitle: string;
  slug: string;
  tagline: string;
  intro: string[];
  /** Problems specific to this niche, shown as a "pain" list */
  problems: string[];
  /** What a good website does for this niche */
  solutions: string[];
  /** Must-have features for this type of business */
  mustHaves: string[];
  faqs: NicheFaq[];
}

const baseUrl = "https://techsolutionsutrecht.nl";

export default function NichePageLayout({
  niche,
  nicheTitle,
  slug,
  tagline,
  intro,
  problems,
  solutions,
  mustHaves,
  faqs,
}: NichePageProps) {
  const url = `${baseUrl}/${slug}`;

  const service = serviceSchema({
    name: `Website laten maken voor ${niche}`,
    description: tagline,
    url,
  });

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Diensten", url: `${baseUrl}/diensten` },
    { name: `Website voor ${niche}`, url },
  ]);

  const faqSchema = faqPageSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-white">
        {/* Breadcrumb */}
        <nav className="py-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="text-slate-500 hover:text-[#0f766e]">Home</Link></li>
              <li className="text-slate-400">/</li>
              <li><Link href="/diensten" className="text-slate-500 hover:text-[#0f766e]">Diensten</Link></li>
              <li className="text-slate-400">/</li>
              <li><span className="text-slate-900">Website voor {niche}</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Website Laten Maken voor{" "}
                <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">{nicheTitle}s</span>
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">{tagline}</p>
              {intro.map((p, i) => (
                <p key={i} className="text-lg text-slate-600 mb-5 leading-relaxed">{p}</p>
              ))}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                  <Phone className="w-5 h-5" /> Gratis advies via WhatsApp
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem / solution */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Herkenbaar?</h2>
              <ul className="space-y-3">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-600 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Zo lost een goede website dat op</h2>
              <ul className="space-y-3">
                {solutions.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-600 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Must haves */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Wat een goede {nicheTitle.toLowerCase()}swebsite nodig heeft</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mustHaves.map((m, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl border border-slate-200 p-5">
                  <CheckCircle className="w-5 h-5 text-[#0f766e] flex-shrink-0 mt-1" />
                  <span className="text-slate-700 leading-relaxed">{m}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/diensten/wordpress" className="inline-flex items-center gap-2 text-[#0f766e] font-semibold hover:underline">
                Bekijk WordPress websites <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/diensten/seo" className="inline-flex items-center gap-2 text-[#0f766e] font-semibold hover:underline">
                Meer over SEO <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Veelgestelde vragen</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Klaar voor een website die klanten oplevert?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Stuur een appje of vraag vrijblijvend een offerte aan. Je praat direct met de developer
              en krijgt binnen één werkdag antwoord.
            </p>
            <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
              <Phone className="w-5 h-5" /> WhatsApp direct
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
