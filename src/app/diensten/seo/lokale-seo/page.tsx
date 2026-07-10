import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Check, ArrowRight, Star, Building2, Compass, Phone } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/seo/lokale-seo";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "SEO", url: "https://techsolutionsutrecht.nl/diensten/seo" },
  { name: "Lokale SEO", url: pageUrl },
]);

const service = serviceSchema({
  name: "Lokale SEO",
  description:
    "Lokale SEO voor ondernemers: Google Bedrijfsprofiel optimalisatie, lokale landingspagina's, reviews en consistente NAW-gegevens. Word gevonden door klanten in jouw regio.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Wat is lokale SEO precies?",
    answer:
      "Lokale SEO is het optimaliseren van je online zichtbaarheid voor zoekopdrachten met een lokale intentie, zoals 'kapper Utrecht' of 'loodgieter in de buurt'. Het draait om drie dingen: een sterk Google Bedrijfsprofiel (de kaart met bedrijven bovenaan Google), lokale landingspagina's op je website en consistente bedrijfsgegevens op het hele internet.",
  },
  {
    question: "Wat is het verschil tussen lokale SEO en gewone SEO?",
    answer:
      "Gewone SEO richt zich op je posities in de organische zoekresultaten, ongeacht locatie. Lokale SEO richt zich daarnaast op het 'local pack': het kaartje met drie bedrijven dat Google toont bij lokale zoekopdrachten. Voor ondernemers met een regionale klantenkring is dat kaartje vaak waardevoller dan positie één in de gewone resultaten — het staat erboven en toont direct je reviews en telefoonnummer.",
  },
  {
    question: "Hoe kom ik in het kaartje (local pack) van Google?",
    answer:
      "Google kijkt naar drie factoren: relevantie (klopt je profiel met de zoekopdracht), afstand (hoe dichtbij ben je) en prominentie (reviews, vermeldingen, autoriteit van je website). Ik optimaliseer alle drie: een volledig ingevuld Bedrijfsprofiel met de juiste categorieën, een reviewstrategie en een website die je lokale relevantie versterkt.",
  },
  {
    question: "Wat kost lokale SEO?",
    answer:
      "Lokale SEO is onderdeel van mijn SEO-trajecten vanaf €200 per maand, maandelijks opzegbaar. Voor een eenmalige optimalisatie van je Google Bedrijfsprofiel en lokale landingspagina's maak ik een vaste offerte. In een gratis adviesgesprek hoor je precies wat voor jouw situatie zinvol is.",
  },
  {
    question: "Heeft lokale SEO zin als ik geen fysieke winkel heb?",
    answer:
      "Ja. Ook dienstverleners aan huis (loodgieters, schoonmakers, fotografen) en zzp'ers zonder bezoekadres kunnen een Google Bedrijfsprofiel hebben met een verzorgingsgebied. Gecombineerd met lokale landingspagina's per plaats word je gevonden in de hele regio die je bedient.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "Lokale SEO | Gevonden Worden in Jouw Regio | TechSolutions",
  description:
    "Lokale SEO voor ondernemers: Google Bedrijfsprofiel, local pack, reviews en lokale landingspagina's. Word gevonden door klanten in jouw regio. Gratis advies.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Lokale SEO | Gevonden Worden in Jouw Regio | TechSolutions",
    description:
      "Lokale SEO voor ondernemers: Google Bedrijfsprofiel, local pack, reviews en lokale landingspagina's. Word gevonden door klanten in jouw regio.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const pillars = [
  {
    icon: Building2,
    title: "Google Bedrijfsprofiel",
    text: "Het fundament van lokale vindbaarheid. Ik optimaliseer je profiel volledig: de juiste categorieën, diensten, foto's, openingstijden en berichten — zodat Google precies weet wat je doet en voor wie.",
  },
  {
    icon: MapPin,
    title: "Lokale landingspagina's",
    text: "Voor elke plaats of wijk die je bedient een eigen, waardevolle pagina — geen kopieerwerk, maar unieke content met lokale relevantie. Precies zoals ik dat voor mijn eigen site doe voor plaatsen als Veenendaal en Woerden.",
  },
  {
    icon: Star,
    title: "Reviews & reputatie",
    text: "Reviews zijn een van de zwaarst wegende lokale rankingfactoren én de eerste indruk voor nieuwe klanten. Ik help je aan een systeem dat tevreden klanten op het juiste moment om een review vraagt.",
  },
  {
    icon: Compass,
    title: "NAW-consistentie & citations",
    text: "Je naam, adres en telefoonnummer moeten overal op het internet exact hetzelfde zijn — van bedrijvengidsen tot social media. Inconsistenties kosten je posities; ik spoor ze op en herstel ze.",
  },
];

export default function LokaleSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-[var(--color-muted)] hover:text-primary transition-colors">Home</Link></li>
            <li className="text-[var(--color-muted)]">/</li>
            <li><Link href="/diensten" className="text-[var(--color-muted)] hover:text-primary transition-colors">Diensten</Link></li>
            <li className="text-[var(--color-muted)]">/</li>
            <li><Link href="/diensten/seo" className="text-[var(--color-muted)] hover:text-primary transition-colors">SEO</Link></li>
            <li className="text-[var(--color-muted)]">/</li>
            <li><span className="text-[var(--color-ink)] font-medium">Lokale SEO</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                Lokale <span className="text-[var(--color-primary)]">SEO</span>
              </h1>

              <p className="text-lg text-[var(--color-muted)] mb-8">
                <strong className="text-[var(--color-ink)]">Lokale SEO</strong> zorgt dat klanten uit jouw regio je
                vinden: bovenaan in het kaartje van Google, met sterke reviews en lokale landingspagina&apos;s.
                Voor winkels, praktijken, horeca en dienstverleners die het van{" "}
                <strong className="text-primary">klanten uit de buurt</strong> moeten hebben.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Google Bedrijfsprofiel optimalisatie",
                  "Local pack (het kaartje) als doel",
                  "Lokale landingspagina's",
                  "Review- en reputatiestrategie",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[var(--color-muted)]">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Vraag gratis lokaal SEO-advies aan
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/images/lokale-seo-hero.webp"
                alt="Lokale SEO: smartphone met Google Maps local pack resultaten voor een lokaal bedrijf in de regio Utrecht"
                width={1344}
                height={768}
                priority
                className="w-full h-auto rounded-2xl border border-[var(--color-border)]"
              />
            </div>
          </div>

          {/* Waarom */}
          <section className="mt-24 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">
              Waarom lokale SEO voor veel ondernemers de snelste winst is
            </h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Bijna de helft van alle Google-zoekopdrachten heeft een lokale intentie: mensen zoeken een bedrijf,
              product of dienst bij hen in de buurt. Google toont daarvoor het &quot;local pack&quot;: een kaartje
              met drie bedrijven, inclusief reviews, foto&apos;s en een belknop — nog vóór de gewone zoekresultaten.
            </p>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Wie in dat kaartje staat, krijgt de telefoontjes. En omdat je hier niet concurreert met heel
              Nederland maar alleen met bedrijven in jouw regio, is de top vaak sneller haalbaar dan bij
              landelijke zoekwoorden. Voor lokale ondernemers is dit meestal de kortste route naar meer klanten.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Ik pas deze aanpak toe op mijn eigen website — met lokale pagina&apos;s voor plaatsen rond Utrecht —
              en gebruik dezelfde bewezen methode voor mijn klanten: eerst meten waar je nu staat, dan gericht
              de factoren verbeteren waar Google naar kijkt.
            </p>
          </section>

          {/* Pillars */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">De vier pijlers van lokale SEO</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {pillars.map((p) => (
                <div key={p.title} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{p.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Interne links */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Meer weten?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/diensten/seo" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">SEO Specialist Utrecht</h3>
                <p className="text-[var(--color-muted)] text-sm">Het complete SEO-traject: techniek, content en autoriteit.</p>
              </Link>
              <Link href="/diensten/seo/teksten" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">SEO Teksten Laten Schrijven</h3>
                <p className="text-[var(--color-muted)] text-sm">Webteksten die scoren in Google én overtuigen.</p>
              </Link>
              <Link href="/blog/lokale-seo-utrecht" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Blog: Lokale SEO in Utrecht</h3>
                <p className="text-[var(--color-muted)] text-sm">Praktische tips voor lokale vindbaarheid.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen over lokale SEO</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 text-center bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Wil je gevonden worden in jouw regio?</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Vraag een gratis lokale SEO-check aan: je hoort binnen één werkdag hoe je er nu voor staat in het
              kaartje van Google en wat de snelste verbeteringen zijn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Gratis lokale SEO-check
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
