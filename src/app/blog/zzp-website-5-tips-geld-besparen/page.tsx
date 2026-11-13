import { Metadata } from "next";
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
    modifiedTime: "2026-09-06",
    authors: ["Max"],
    images: ["/images/blog/zzp-website.jpg"],
  },
};

const blogPostingSchema = articleSchema({
  title: "ZZP Website: 5 Manieren om Slim te Besparen",
  description: "Vijf praktische manieren om als ZZP'er gericht te besparen op je website zonder essentiële kwaliteit weg te laten.",
  url: canonicalUrl,
  datePublished: "2025-02-26",
  dateModified: "2026-09-06",
  image: "/images/blog/zzp-website.jpg",
  author: "Max",
});

const tips = [
  {
    number: 1,
    title: "Kies techniek die past bij je doel",
    content: `Betaal voor de functies die je nodig hebt. WordPress Start kost €300 exclusief btw voor één pagina met maximaal zes secties, een aangepaste ontwerpbasis en basis-SEO. Je levert teksten, foto's en logo aan. Een website zonder WordPress met eigen ontwerp begint bij €1.500 exclusief btw; die is niet automatisch beter voor je bedrijf of voor SEO.`,
    saving: "Besparing: voorkom onnodig maatwerk"
  },
  {
    number: 2,
    title: "Bereid je content zelf voor",
    content: `In de WordPress-pakketten lever je zelf de teksten, foto's en het logo aan. Zet per onderdeel je aanbod, werkwijze, voorbeelden en contactgegevens klaar. Zo voorkom je extra schrijfwerk buiten het pakket. Wil je hulp bij teksten of fotografie, laat dat vooraf apart begroten.`,
    saving: "Besparing: minder invoer- en redactiewerk"
  },
  {
    number: 3,
    title: "Start simpel en breid later uit",
    content: `Een eenvoudig aanbod kan op één pagina staan met secties over je bedrijf, dienst, werkwijze en contact. Zijn afzonderlijke diensten en zoekvragen belangrijk, kies dan meer pagina's: €500 voor maximaal drie of €700 voor maximaal vijf, exclusief btw. Extra pagina's en functies worden later apart afgesproken.`,
    saving: "Besparing: lagere startscope"
  },
  {
    number: 4,
    title: "Vergelijk hetzelfde werk",
    content: `Leg offertes naast elkaar met hetzelfde aantal pagina's, dezelfde functies en dezelfde beheerafspraken. Een bestaande ontwerpbasis vraagt ander werk dan een volledig eigen ontwerp. Vraag ook hoeveel correctierondes zijn inbegrepen en wie de inhoud maakt. Bij TechSolutionsUtrecht werk je rechtstreeks met Max in Utrecht-Zuilen.`,
    saving: "Besparing: betaal voor de juiste scope"
  },
  {
    number: 5,
    title: "Neem terugkerende kosten mee",
    content: `Vergelijk ook hosting, domein, betaalde licenties en onderhoud. Deze kosten zijn apart van de WordPress-bouwpakketten. Optioneel WordPress-onderhoud kost €39 per maand exclusief btw; WooCommerce-onderhoud €69. Vraag per onderdeel wat je zelf regelt en wat wordt uitgevoerd, zodat je de kosten na oplevering kunt overzien.`,
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
              Websites
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
                <time dateTime="2026-09-06">Bijgewerkt op 6 september 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>4 min leestijd</span>
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
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
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
                  Begin waar passend met een WordPress-eenpaginawebsite voor €300 exclusief btw. Je kunt later uitbreiden
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
                Bij TechSolutionsUtrecht kies je als ZZP’er uit WordPress-pakketten van €300, €500 en €700 exclusief btw, voor één, drie of vijf inhoudspagina’s. Na de intake ontvang je een vaste totaalprijs en een realistische planning.
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
                    Wat Kost een Website Laten Maken in 2026?
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
