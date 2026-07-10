import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FileText, Check, ArrowRight, Search, Target, BarChart3, Phone } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/seo/teksten";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "SEO", url: "https://techsolutionsutrecht.nl/diensten/seo" },
  { name: "SEO Teksten Laten Schrijven", url: pageUrl },
]);

const service = serviceSchema({
  name: "SEO teksten laten schrijven",
  description:
    "SEO teksten laten schrijven op basis van echt zoekwoordonderzoek: webteksten, servicepagina's en blogartikelen die scoren in Google én je bezoekers overtuigen.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Wat kost het om SEO teksten te laten schrijven?",
    answer:
      "Dat hangt af van het type tekst en de hoeveelheid onderzoek: een productpagina vraagt minder uitzoekwerk dan een uitgebreid kennisartikel. Na een kort gesprek over je doelen krijg je een vaste prijs per tekst of per pakket, zonder verrassingen achteraf. Vraag vrijblijvend een offerte aan.",
  },
  {
    question: "Waarom niet gewoon teksten door AI laten genereren?",
    answer:
      "AI is een prima hulpmiddel, maar teksten die zonder strategie worden gegenereerd, missen precies wat Google beloont: echt zoekwoordonderzoek, kennis van jouw klant en eigen expertise. Ik combineer data uit Google Search Console en Keyword Planner met jouw vakkennis, zodat elke tekst op een concreet zoekwoord mikt en iets toevoegt dat concurrenten niet hebben.",
  },
  {
    question: "Schrijf je ook teksten voor bestaande pagina's?",
    answer:
      "Ja. Vaak levert het herschrijven van bestaande pagina's zelfs sneller resultaat op dan nieuwe content, omdat de pagina al door Google is geïndexeerd. Ik analyseer waar je nu op scoort, waar de kansen liggen en herschrijf de tekst op zoekintentie, structuur en overtuigingskracht.",
  },
  {
    question: "Hoeveel SEO teksten heb ik nodig?",
    answer:
      "Kwaliteit wint van kwantiteit. Eén sterke pagina die precies aansluit op waar jouw klanten naar zoeken, doet meer dan tien oppervlakkige blogjes. Op basis van zoekwoordonderzoek stel ik een contentplan voor met de pagina's die het meeste opleveren, in een tempo dat bij je budget past.",
  },
  {
    question: "Zie ik terug wat de teksten opleveren?",
    answer:
      "Ja. Ik meet de posities en het organische verkeer van elke tekst via Google Search Console. Zo zie je zwart-op-wit welke pagina's klimmen en waar we moeten bijsturen — geen vaag gevoel, maar cijfers.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "SEO Teksten Laten Schrijven | Scoren in Google | TechSolutions",
  description:
    "SEO teksten laten schrijven die écht scoren? Webteksten en blogs op basis van zoekwoordonderzoek, geschreven door een SEO-specialist. Vraag een offerte aan.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "SEO Teksten Laten Schrijven | Scoren in Google | TechSolutions",
    description:
      "SEO teksten laten schrijven die écht scoren? Webteksten en blogs op basis van zoekwoordonderzoek, geschreven door een SEO-specialist.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const textTypes = [
  {
    icon: Target,
    title: "Service- en landingspagina's",
    text: "De pagina's die klanten opleveren. Elke pagina mikt op één concreet zoekwoord met commerciële intentie, beantwoordt de vragen die kopers hebben en eindigt met een duidelijke call-to-action.",
  },
  {
    icon: FileText,
    title: "Blogartikelen & kennisbank",
    text: "Artikelen die vragen van je doelgroep beantwoorden en je expertise laten zien. Ze trekken bezoekers aan in de oriëntatiefase en versterken via interne links de posities van je servicepagina's.",
  },
  {
    icon: Search,
    title: "Herschrijven van bestaande pagina's",
    text: "Vaak de snelste winst: pagina's die al op pagina twee of drie van Google staan, herschrijf ik op zoekintentie en structuur zodat ze doorstoten naar de eerste pagina.",
  },
  {
    icon: BarChart3,
    title: "Productteksten voor webshops",
    text: "Unieke productbeschrijvingen die scoren op long-tail zoekwoorden en twijfelaars over de streep trekken — geen gekopieerde leverancierstekst die Google negeert.",
  },
];

const steps = [
  {
    title: "Zoekwoordonderzoek met echte data",
    text: "Ik gebruik Google Keyword Planner en Search Console om te bepalen waar jouw klanten daadwerkelijk op zoeken, hoe vaak, en hoe sterk de concurrentie is. Daar rolt een concreet doel per tekst uit.",
  },
  {
    title: "Analyse van de concurrentie",
    text: "Ik bekijk wat er nu rankt voor jouw zoekwoord: welk type pagina, welke onderwerpen, welke diepgang. Jouw tekst moet iets bieden dat de top-10 mist — anders heeft schrijven geen zin.",
  },
  {
    title: "Schrijven op intentie én conversie",
    text: "De tekst beantwoordt de zoekvraag volledig, is prettig leesbaar, gebruikt een logische koppenstructuur en verwerkt jouw ervaring en voorbeelden. Geoptimaliseerd voor Google, geschreven voor mensen.",
  },
  {
    title: "Technische afwerking & meten",
    text: "Meta-titel, beschrijving, interne links en structured data worden direct goed gezet — ik ben tenslotte ook developer. Daarna volg ik de posities en stuur bij waar nodig.",
  },
];

export default function SeoTekstenPage() {
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
            <li><span className="text-[var(--color-ink)] font-medium">SEO Teksten</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                SEO Teksten <span className="text-[var(--color-primary)]">Laten Schrijven</span>
              </h1>

              <p className="text-lg text-[var(--color-muted)] mb-8">
                <strong className="text-[var(--color-ink)]">SEO teksten laten schrijven</strong> die écht scoren:
                webteksten, servicepagina&apos;s en blogartikelen op basis van echt zoekwoordonderzoek — geschreven
                door een <strong className="text-primary">SEO-specialist die ook developer is</strong>, dus de
                technische afwerking klopt meteen.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Zoekwoordonderzoek inbegrepen",
                  "Geschreven op zoekintentie",
                  "Meta-tags & interne links direct goed",
                  "Meetbaar resultaat via Search Console",
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
                Vraag een offerte aan
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/images/seo-teksten-laten-schrijven-hero.webp"
                alt="SEO teksten laten schrijven: tekstschrijver werkt aan een goed scorende webtekst met zoekwoordonderzoek ernaast"
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
              Waarom goede SEO teksten het verschil maken
            </h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Google is de grootste bron van nieuwe klanten voor vrijwel elke onderneming — maar Google kan alleen
              tonen wat er op je website stáát. Ontbreekt er een pagina over de dienst waar mensen naar zoeken, of
              beantwoordt je tekst de zoekvraag maar half, dan gaat die klik naar je concurrent.
            </p>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Een goede SEO tekst begint daarom niet met schrijven, maar met onderzoek: waar zoeken jouw klanten
              op, met welke woorden, en wat verwachten ze te vinden? Pas als dat duidelijk is, heeft een tekst
              een reële kans om te scoren. Precies daar gaat het bij veel &quot;SEO-teksten&quot; mis: mooi geschreven,
              maar zonder strategie erachter.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Ik werk andersom: eerst data, dan tekst. Elke tekst die ik schrijf mikt op een concreet zoekwoord
              met aantoonbaar zoekvolume, sluit aan op de zoekintentie en wordt technisch perfect geplaatst —
              van meta-titel tot interne links.
            </p>
          </section>

          {/* Types */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Welke SEO teksten schrijf ik?</h2>
            <p className="text-[var(--color-muted)] mb-10 max-w-3xl leading-relaxed">
              Van commerciële servicepagina&apos;s tot kennisartikelen: elk type tekst heeft zijn eigen rol in je
              vindbaarheid. Samen bepalen we wat jouw website nodig heeft.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {textTypes.map((t) => (
                <div key={t.title} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <t.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{t.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Werkwijze */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Zo ontstaat een tekst die scoort</h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-ink)] mb-1">{step.title}</h3>
                    <p className="text-[var(--color-muted)] leading-relaxed">{step.text}</p>
                  </div>
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
              <Link href="/diensten/seo/lokale-seo" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Lokale SEO</h3>
                <p className="text-[var(--color-muted)] text-sm">Gevonden worden door klanten in jouw regio.</p>
              </Link>
              <Link href="/blog/website-niet-in-google" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Blog: Website niet in Google?</h3>
                <p className="text-[var(--color-muted)] text-sm">De meest voorkomende oorzaken en oplossingen.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen over SEO teksten</h2>
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
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Teksten die klanten opleveren?</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Vertel me op welke zoekwoorden je gevonden wilt worden, dan hoor je binnen één werkdag wat er mogelijk
              is — inclusief een eerlijke inschatting van je kansen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Offerte aanvragen
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
