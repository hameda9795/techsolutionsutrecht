import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { faqPageSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website Laten Maken in 2026: Kosten, Tijdlijn en Complete Gids",
  description: "Website laten maken? Ontdek wat het kost, hoe lang het duurt en waar je op moet letten. De complete gids voor ondernemers en ZZP'ers die online willen groeien.",
  keywords: ["website laten maken", "WordPress website laten maken", "goedkope website laten maken", "website laten maken ZZP", "webshop laten maken"],
  alternates: { canonical: "https://techsolutionsutrecht.nl/blog/website-laten-maken" },
  openGraph: {
    title: "Website Laten Maken in 2026: Kosten, Tijdlijn en Complete Gids",
    description: "Website laten maken? Ontdek wat het kost, hoe lang het duurt en waar je op moet letten. De complete gids voor ondernemers en ZZP'ers die online willen groeien.",
    type: "article",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/blog/website-laten-maken",
    siteName: "TechSolutionsUtrecht",
    publishedTime: "2026-07-10",
    authors: ["TechSolutionsUtrecht"],
    images: [
      {
        url: "https://techsolutionsutrecht.nl/images/blog/website-laten-maken.svg",
        width: 1200,
        height: 630,
        alt: "Ondernemer bekijkt zijn nieuwe website op een laptop nadat hij een website heeft laten maken.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken in 2026: Kosten, Tijdlijn en Complete Gids",
    description: "Website laten maken? Ontdek wat het kost, hoe lang het duurt en waar je op moet letten. De complete gids voor ondernemers en ZZP'ers die online willen groeien.",
    images: ["https://techsolutionsutrecht.nl/images/blog/website-laten-maken.svg"],
  },
};

const sections = [
  {
    title: "Wat Kost een Website Laten Maken in 2026?",
    content: (
      <>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          De prijs van een website laten maken hangt sterk af van wat je nodig hebt. Een eenvoudige, professionele website begint meestal rond de 250 tot 800 euro, en is geschikt voor ZZP'ers en kleine bedrijven die zich online willen presenteren. Wil je een <Link href="/diensten/webshop" className="text-primary hover:underline font-medium">webshop</Link> waar klanten daadwerkelijk kunnen bestellen en betalen, dan reken je op ongeveer 350 tot 1.200 euro, afhankelijk van het aantal producten en gewenste koppelingen.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Heb je iets complexers nodig, zoals een dashboard, klantportaal of maatwerk webapplicatie, dan ligt de prijs vaak tussen de 400 en 2.000 euro of hoger. Belangrijk is dat je altijd vooraf een transparante offerte krijgt, zodat je precies weet wat er wel en niet inbegrepen is: denk aan responsive design, SEO-basis en een contactformulier.
        </p>
      </>
    ),
    image: "/images/blog/website-laten-maken-kosten.svg",
    imageAlt: "Overzicht van de kosten voor het laten maken van een website, webshop of maatwerk webapplicatie.",
  },
  {
    title: "Hoe Lang Duurt het Voordat Je Website Online Staat?",
    content: (
      <>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          Een van de meest gestelde vragen is hoe snel een website laten maken kan. Dankzij moderne technologieen zoals WordPress en Next.js hoeft dit tegenwoordig geen maanden meer te duren. Een standaard website staat vaak binnen een week online, terwijl een <Link href="/diensten/webshop" className="text-primary hover:underline font-medium">webshop</Link> met meerdere producten en betaalkoppelingen doorgaans 5 tot 12 werkdagen in beslag neemt.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Voor complexere projecten met <Link href="/diensten/maatwerk" className="text-primary hover:underline font-medium">maatwerk</Link> functionaliteit of meerdere integraties moet je rekenen op 2 tot 3 weken. De snelheid hangt ook af van hoe snel jij zelf teksten, foto's en feedback aanlevert. Kies je voor een freelancer met korte lijnen in plaats van een groot bureau, dan verloopt het traject vaak sneller omdat je rechtstreeks met de bouwer schakelt.
        </p>
      </>
    ),
    image: "/images/blog/website-laten-maken-tijdlijn.svg",
    imageAlt: "Tijdlijn die laat zien hoe lang het duurt om een website te laten maken, van start tot livegang.",
  },
  {
    title: "WordPress, Maatwerk of een Webshop: Welke Website Past bij Jou?",
    content: (
      <>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          Niet elke ondernemer heeft dezelfde website nodig. Een <Link href="/diensten/wordpress" className="text-primary hover:underline font-medium">WordPress website laten maken</Link> is de populairste keuze voor ZZP'ers en MKB-bedrijven: betaalbaar, snel op te leveren en zelf te beheren zonder technische kennis. Wil je producten online verkopen, dan is een <Link href="/diensten/webshop" className="text-primary hover:underline font-medium">WooCommerce webshop</Link> de logische stap, compleet met iDEAL-betalingen, voorraadbeheer en verzendopties.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Heb je specifieke functionaliteit nodig die geen standaard systeem kan bieden, zoals een klantportaal, boekingssysteem of koppeling met interne software, dan is <Link href="/diensten/maatwerk" className="text-primary hover:underline font-medium">maatwerk</Link> met React of Next.js de betere keuze. Dit kost meer, maar geeft volledige vrijheid in functionaliteit en snelheid. Twijfel je? Een goede webdeveloper denkt hierin mee en adviseert op basis van je budget en doelen.
        </p>
      </>
    ),
    image: "/images/blog/website-laten-maken-keuze.svg",
    imageAlt: "Vergelijking tussen WordPress, webshop en maatwerk website laten maken.",
  },
  {
    title: "Waar Moet Je op Letten Bij het Kiezen van een Webdesigner?",
    content: (
      <>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          Bij het laten maken van een website is de keuze van de juiste partner minstens zo belangrijk als de website zelf. Kijk altijd naar een portfolio met eerder opgeleverd werk, zodat je een idee krijgt van kwaliteit en stijl. Vraag ook naar de oplevertijd, en of je gedurende het traject rechtstreeks contact hebt met de persoon die daadwerkelijk aan je website bouwt, in plaats van via een accountmanager.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Let daarnaast op transparante prijzen zonder verborgen kosten, en controleer of SEO-optimalisatie en een responsive (mobielvriendelijk) ontwerp standaard zijn inbegrepen. Een goede webdesigner denkt niet alleen in code, maar ook mee over hoe je website bezoekers omzet in klanten.
        </p>
      </>
    ),
    image: "/images/blog/website-laten-maken-checklist.svg",
    imageAlt: "Checklist met waar je op moet letten bij het kiezen van een webdesigner.",
  },
  {
    title: "Website Laten Maken als ZZP'er: Zo Pak Je het Slim Aan",
    content: (
      <>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          Als ZZP'er is een website vaak je digitale visitekaartje en je belangrijkste verkoopkanaal tegelijk. Het is daarom slim om te kiezen voor een oplossing die betaalbaar is, maar wel professioneel oogt en gevonden wordt in Google. Een eenvoudige WordPress website met de mogelijkheid om later uit te breiden is voor de meeste starters de beste balans tussen prijs en resultaat.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Zorg dat je website duidelijk maakt wat je doet, voor wie, en hoe mensen contact met je kunnen opnemen. Een contactformulier, WhatsApp-knop en telefoonnummer verlagen de drempel om contact op te nemen. Investeer daarnaast in een goede basis SEO, zodat potentiele klanten je ook echt vinden wanneer ze zoeken naar jouw diensten in jouw regio.
        </p>
      </>
    ),
    image: "/images/blog/website-laten-maken-zzp.svg",
    imageAlt: "ZZP'er laat een website maken om online zichtbaar te worden voor nieuwe klanten.",
  },
];

const faqs = [
  {
    question: "Wat kost een eenvoudige website laten maken gemiddeld?",
    answer: "Voor een professionele, eenvoudige website betaal je meestal tussen de 250 en 800 euro, afhankelijk van het aantal pagina's en gewenste functionaliteit.",
  },
  {
    question: "Kan ik mijn website na oplevering zelf beheren?",
    answer: "Ja, bij een WordPress website krijg je een CMS waarmee je zelf teksten en afbeeldingen kunt aanpassen, zonder technische kennis nodig te hebben.",
  },
  {
    question: "Is een goedkope website ook een goede website?",
    answer: "Absoluut, mits deze door een ervaren developer wordt gebouwd. Een lagere prijs betekent bij een freelancer vaak minder overhead, niet minder kwaliteit.",
  },
  {
    question: "Heb ik een webshop of een gewone website nodig?",
    answer: "Wil je producten of diensten direct online verkopen en betalingen ontvangen, dan heb je een webshop nodig. Wil je vooral informatie delen en leads genereren, dan volstaat een gewone website.",
  },
  {
    question: "Hoe snel kan mijn website online staan?",
    answer: "Een standaard website staat vaak binnen een week online. Webshops en maatwerk projecten duren gemiddeld 1 tot 3 weken, afhankelijk van de complexiteit.",
  },
];

export default function WebsiteLatenMakenBlogPost() {
  const canonicalUrl = "https://techsolutionsutrecht.nl/blog/website-laten-maken";
  const date = "2026-07-10";

  const jsonLd = articleSchema({
    title: "Website Laten Maken in 2026: Kosten, Tijdlijn en Complete Gids",
    description: "Website laten maken? Ontdek wat het kost, hoe lang het duurt en waar je op moet letten. De complete gids voor ondernemers en ZZP'ers die online willen groeien.",
    url: canonicalUrl,
    datePublished: date,
    dateModified: date,
    image: "/images/blog/website-laten-maken.svg",
    author: "TechSolutionsUtrecht",
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: "https://techsolutionsutrecht.nl" },
    { name: "Blog", url: "https://techsolutionsutrecht.nl/blog" },
    { name: "Website Laten Maken in 2026: Kosten, Tijdlijn en Complete Gids", url: canonicalUrl },
  ]);

  const faqJsonLd = faqPageSchema(faqs);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pb-24">
        {/* Breadcrumb */}
        <nav className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          <div className="container-custom">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li>
                <Link href="/" className="text-[var(--color-muted)] hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-[var(--color-muted)]">/</li>
              <li>
                <Link href="/blog" className="text-[var(--color-muted)] hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li className="text-[var(--color-muted)]">/</li>
              <li>
                <span className="text-[var(--color-ink)] font-medium">Website laten maken</span>
              </li>
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
              Website Laten Maken in 2026:{" "}
              <span className="text-[var(--color-primary)]">Kosten, Tijdlijn en Complete Gids</span>
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-[var(--color-muted)] mb-12 pb-12 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>TechSolutionsUtrecht</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={date}>10 juli 2026</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min leestijd</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <Image
                src="/images/blog/website-laten-maken.svg"
                alt="Ondernemer bekijkt zijn nieuwe website op een laptop nadat hij een website heeft laten maken."
                width={1200}
                height={630}
                className="w-full rounded-2xl border border-[var(--color-border)] shadow-lg"
                priority
              />
            </div>

            {/* Intro */}
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-[var(--color-muted)] leading-relaxed">
                Een website laten maken is voor de meeste ondernemers geen luxe meer, maar een noodzaak. Of je nu ZZP'er bent, een lokale winkel runt of een groeiend bedrijf leidt: je website is vaak het eerste contactmoment met een potentiele klant. Toch weten veel ondernemers niet waar ze moeten beginnen — wat kost het, hoe lang duurt het, en waar moet je precies op letten?
              </p>
              <p className="text-xl text-[var(--color-muted)] leading-relaxed">
                In deze gids leggen we in duidelijke taal uit hoe het proces van website laten maken werkt: van de kosten en de tijdlijn tot de keuze tussen WordPress, maatwerk of een webshop. Zo weet je precies wat je kunt verwachten voordat je een offerte aanvraagt, en voorkom je verrassingen achteraf.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-16 mb-16">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mb-6">
                    {section.title}
                  </h2>
                  <div className="mb-8">
                    {section.content}
                  </div>
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    width={1200}
                    height={630}
                    className="w-full rounded-2xl border border-[var(--color-border)] shadow-lg"
                  />
                </section>
              ))}
            </div>

            {/* CTA */}
            <div className="p-8 bg-[var(--color-primary)]/10 border border-primary/20 rounded-2xl mb-12">
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-4">
                Klaar om Jouw Website te Laten Maken?
              </h2>
              <p className="text-[var(--color-muted)] mb-6">
                Bij TechSolutionsUtrecht helpen we je graag met een professionele website die past bij jouw budget en doelen. Van een eenvoudige WordPress website tot een uitgebreide webshop of maatwerk applicatie.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex"
                >
                  Gratis offerte aanvragen
                </Link>
                <Link
                  href="/diensten/wordpress"
                  className="btn-ghost inline-flex"
                >
                  WordPress website
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">
                Veelgestelde Vragen over Website Laten Maken
              </h2>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-semibold text-[var(--color-ink)] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-[var(--color-muted)]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="border-t border-[var(--color-border)] pt-12">
              <h3 className="text-xl font-bold text-[var(--color-ink)] mb-6">
                Gerelateerde artikelen
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/blog/wat-kost-website-laten-maken"
                  className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">Kosten</span>
                  <h4 className="font-semibold text-[var(--color-ink)] mt-2">
                    Wat Kost een Website Laten Maken in 2026?
                  </h4>
                </Link>

                <Link
                  href="/blog/zzp-website-laten-maken"
                  className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-primary transition-colors"
                >
                  <span className="text-xs text-primary font-medium">ZZP</span>
                  <h4 className="font-semibold text-[var(--color-ink)] mt-2">
                    ZZP Website Laten Maken: Wat Je Moet Weten
                  </h4>
                </Link>

                <Link
                  href="/blog/website-binnen-week-hoe-wij-dat-doen"
                  className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-primary transition-colors md:col-span-2"
                >
                  <span className="text-xs text-primary font-medium">Snelle Oplevering</span>
                  <h4 className="font-semibold text-[var(--color-ink)] mt-2">
                    Website Binnen 1 Week Online: Zo Doen Wij Dat
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
