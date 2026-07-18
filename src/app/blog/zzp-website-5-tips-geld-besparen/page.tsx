import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User, CheckCircle, Euro } from "lucide-react";
import { articleSchema } from "@/lib/schema";

const canonicalUrl = "https://techsolutionsutrecht.nl/blog/zzp-website-5-tips-geld-besparen";

export const metadata: Metadata = {
  title: "ZZP Website: 5 Manieren om Slim te Besparen",
  description: "ZZP website laten maken goedkoop? 5 praktische tips om geld te besparen zonder in te leveren op kwaliteit. Lees hoe je slim kunt besparen!",
  keywords: ["zzp website starter", "geld besparen website", "zzp website tips", "betaalbare website zzp"],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "ZZP Website: 5 Manieren om Slim te Besparen",
    description: "Bespaar gericht op je ZZP-website zonder essentiële kwaliteit weg te laten.",
    type: "article",
    url: canonicalUrl,
    locale: "nl_NL",
    publishedTime: "2025-02-26",
    modifiedTime: "2026-07-18",
    authors: ["Max"],
    images: ["/images/blog/zzp-website.jpg"],
  },
};

const blogPostingSchema = articleSchema({
  title: "ZZP Website: 5 Manieren om Slim te Besparen",
  description: "Vijf praktische manieren om als ZZP'er gericht te besparen op je website zonder essentiële kwaliteit weg te laten.",
  url: canonicalUrl,
  datePublished: "2025-02-26",
  dateModified: "2026-07-18",
  image: "/images/blog/zzp-website.jpg",
  author: "Max",
});

const tips = [
  {
    number: 1,
    title: "Kies techniek die past bij je doel",
    content: `Betaal niet voor maatwerk dat je niet nodig hebt. WordPress kan geschikt zijn als je veel inhoud zelf wilt beheren; Next.js of een andere techniek kan beter passen bij snelheid of specifieke functies. Laat de keuze volgen uit je doelen, niet uit een standaardpakket. Een complete professionele website start bij TechSolutionsUtrecht vanaf €250.`,
    saving: "Besparing: voorkom onnodig maatwerk"
  },
  {
    number: 2,
    title: "Bereid je content zelf voor",
    content: `Een groot deel van de kosten bij webdesign zit in het invoeren van content. 
    Als je zelf je teksten schrijft en je foto's verzamelt, bespaar je flink. 
    Zorg wel dat je teksten SEO-geoptimaliseerd zijn en je foto's van goede kwaliteit zijn. 
    We geven je graag een template zodat je weet wat we nodig hebben.`,
    saving: "Besparing: minder invoer- en redactiewerk"
  },
  {
    number: 3,
    title: "Start simpel en breid later uit",
    content: `Je hoeft niet meteen alles te hebben. Begin met een goede basiswebsite met de essentiële pagina's: 
    Home, Over ons, Diensten en Contact. Zodra je bedrijf groeit, kun je altijd pagina's toevoegen 
    of functionaliteit uitbreiden. Zo heb je snel een professionele online presentatie zonder grote investering.`,
    saving: "Besparing: lagere startscope"
  },
  {
    number: 4,
    title: "Kies een lokale webbouwer",
    content: `Grote webbureaus in Amsterdam rekenen vaak €2.000 - €5.000 voor een website. 
    Door te kiezen voor een lokale webbouwer in Utrecht bespaar je op de overheadkosten. 
    Je krijgt vaak dezelfde kwaliteit voor een fractie van de prijs. Bovendien heb je persoonlijk contact 
    en snellere service.`,
    saving: "Besparing: minder bureau-overhead"
  },
  {
    number: 5,
    title: "Vraag meerdere offertes aan",
    content: `Vergelijk altijd meerdere aanbieders. Let niet alleen op de prijs, maar ook op wat je krijgt. 
    Sommige bureaus bieden een lage instapprijs, maar rekenen daarna extra voor essentiële functies zoals 
    een contactformulier of mobiele optimalisatie. Vraag naar een all-in prijs zonder verborgen kosten.`,
    saving: "Besparing: voorkom onverwachte meerkosten"
  }
];

export default function ZZPTipsBlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <main className="pb-24">
        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-[var(--color-muted)] hover:text-primary transition-colors">Home</Link></li>
              <li className="text-[var(--color-muted)]">/</li>
              <li><Link href="/blog" className="text-[var(--color-muted)] hover:text-primary transition-colors">Blog</Link></li>
              <li className="text-[var(--color-muted)]">/</li>
              <li><span className="text-[var(--color-ink)] font-medium">Artikel</span></li>
            </ol>
          </div>
        </nav>

        <div className="container-custom pt-8">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-[var(--color-muted)] hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar blog
            </Link>

            {/* Category */}
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              ZZP Tips
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-6">
              ZZP Website Laten Maken:{" "}
              <span className="text-[var(--color-primary)]">5 Tips om Geld te Besparen</span>
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-[var(--color-muted)] mb-12 pb-12 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>TechSolutionsUtrecht</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>26 februari 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min leestijd</span>
              </div>
            </div>

            {/* Intro */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-[var(--color-muted)] leading-relaxed">
                Als <strong className="text-[var(--color-ink)]">ZZP&apos;er of startende ondernemer</strong>
                heb je waarschijnlijk een beperkt budget. Een professionele website is essentieel, 
                maar hoeft niet duur te zijn. In dit artikel delen we <strong className="text-primary">5 praktische tips</strong>{" "}
                om geld te besparen bij het laten maken van je website, zonder in te leveren op kwaliteit.
              </p>
            </div>

            {/* Tips */}
            <div className="space-y-12 mb-12">
              {tips.map((tip) => (
                <div key={tip.number} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                      {tip.number}
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--color-ink)]">
                      {tip.title}
                    </h2>
                  </div>
                  
                  <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                    {tip.content}
                  </p>
                  
                  <div className="flex items-center gap-2 p-4 bg-[var(--color-surface)]0/10 rounded-xl">
                    <Euro className="w-5 h-5 text-green-500" />
                    <span className="text-green-400 font-semibold">{tip.saving}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="p-8 bg-[var(--color-primary)]/10 border border-primary/20 rounded-2xl mb-12">
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">
                Samenvatting: Hoeveel Kun je Besparen?
              </h2>
              
              <p className="text-[var(--color-muted)] mb-6">
                Hoeveel je bespaart hangt af van je oorspronkelijke scope en offertes. Het belangrijkste is dat je alleen betaalt voor wat je bedrijf nodig heeft: kies passende techniek, bereid je content voor, start gericht en vergelijk de inbegrepen werkzaamheden.
              </p>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-[var(--color-muted)]">
                  <strong className="text-[var(--color-ink)]">Ons advies:</strong>{" "}
                  Begin met een goede basiswebsite vanaf €250. Je kunt altijd later uitbreiden 
                  wanneer je bedrijf groeit. Zo heb je snel een professionele online presentatie 
                  zonder je hele budget te verbruiken.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl mb-12">
              <h3 className="text-xl font-bold text-[var(--color-ink)] mb-4">
                Klaar om te Starten?
              </h3>
              
              <p className="text-[var(--color-muted)] mb-6">
                Bij TechSolutionsUtrecht start een complete professionele ZZP-website vanaf €250 en ligt de gebruikelijke projectprijs tussen €350 en €650. Na de intake ontvang je een vaste totaalprijs en een realistische planning.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/zzp-website-laten-maken"
                  className="btn-primary inline-flex"
                >
                  Bekijk ZZP pakket
                </Link>
                
                <Link 
                  href="/contact"
                  className="btn-secondary inline-flex"
                >
                  Gratis offerte
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            <div className="border-t border-[var(--color-border)] pt-12">
              <h3 className="text-xl font-bold text-[var(--color-ink)] mb-6">
                Gerelateerde artikelen
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/blog/website-binnen-week-hoe-wij-dat-doen"
                  className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">Snelle Oplevering</span>
                  <h4 className="font-semibold text-[var(--color-ink)] mt-2">
                    Website Binnen 1 Week: Wanneer Is Dat Haalbaar?
                  </h4>
                </Link>
                
                <Link 
                  href="/blog/wat-kost-website-laten-maken"
                  className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">Kosten</span>
                  <h4 className="font-semibold text-[var(--color-ink)] mt-2">
                    Wat Kost een Website Laten Maken in 2025?
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
