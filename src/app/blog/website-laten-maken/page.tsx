import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { faqPageSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website Laten Maken: Praktische Checklist voor Ondernemers",
  description: "Gebruik deze praktische checklist voor een nieuwe bedrijfswebsite: doelen, inhoud, techniek, planning, eigendom en vragen voor je webdeveloper.",
  keywords: ["website laten maken checklist", "bedrijfswebsite laten maken", "website offerte checklist", "website laten maken ZZP"],
  alternates: { canonical: "https://techsolutionsutrecht.nl/blog/website-laten-maken" },
  openGraph: {
    title: "Website Laten Maken: Praktische Checklist voor Ondernemers",
    description: "Een praktische checklist voor doelen, inhoud, techniek, planning en eigendom van je nieuwe bedrijfswebsite.",
    type: "article",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/blog/website-laten-maken",
    siteName: "TechSolutionsUtrecht",
    publishedTime: "2026-07-10",
    modifiedTime: "2026-08-16",
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
    title: "Website Laten Maken: Praktische Checklist voor Ondernemers",
    description: "Een praktische checklist voor doelen, inhoud, techniek, planning en eigendom van je nieuwe bedrijfswebsite.",
    images: ["https://techsolutionsutrecht.nl/images/blog/website-laten-maken.svg"],
  },
};

const sections = [
  {
    title: "Welk Budget Past bij Jouw Website?",
    content: (
      <>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          De prijs hangt af van wat je nodig hebt. Een complete professionele website start bij TechSolutionsUtrecht vanaf €250 en kost meestal €350–€650. Een <Link href="/diensten/webshop" className="text-primary hover:underline font-medium">webshop</Link> waarmee klanten kunnen bestellen en betalen start vanaf €795 en kost meestal €1.000–€2.000.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Extra websitefuncties, meertaligheid of koppelingen worden apart begroot. Wil je terugkerende aanvragen of berichten automatiseren, bekijk dan <Link href="/diensten/whatsapp-automatisering" className="text-primary hover:underline font-medium">WhatsApp & automatisering</Link>. Controleer altijd of inhoud, responsive ontwerp, basis-SEO, eigendom en nazorg duidelijk in de offerte staan. Voor een volledige uitsplitsing kun je de <Link href="/blog/wat-kost-website-laten-maken" className="text-primary hover:underline font-medium">actuele prijsgids</Link> bekijken.
        </p>
      </>
    ),
    image: "/images/blog/website-laten-maken-kosten.svg",
    imageAlt: "Overzicht van de startprijzen voor een website, webshop en websiteonderhoud.",
  },
  {
    title: "Hoe Wordt de Planning Bepaald?",
    content: (
      <>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          De planning hangt af van de inhoud, functies, koppelingen en snelheid van feedback. Moderne technologieën zoals WordPress en Next.js kunnen het ontwikkelproces efficiënt maken, maar vormen op zichzelf geen garantie voor een vaste opleverdatum. Voor een <Link href="/diensten/webshop" className="text-primary hover:underline font-medium">webshop</Link> is de gemiddelde indicatie 1 tot 3 weken.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Extra functies en koppelingen kunnen meer tijd vragen. Vraag vóór de start om een concrete planning met beslismomenten, wat je zelf moet aanleveren en hoeveel feedbackrondes zijn inbegrepen.
        </p>
      </>
    ),
    image: "/images/blog/website-laten-maken-tijdlijn.svg",
    imageAlt: "Tijdlijn die laat zien hoe lang het duurt om een website te laten maken, van start tot livegang.",
  },
  {
    title: "Welke Dienst Past bij Jouw Online Doel?",
    content: (
      <>
        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
          Niet elke ondernemer heeft dezelfde website nodig. Een <Link href="/diensten/website-laten-maken" className="text-primary hover:underline font-medium">professionele website laten maken</Link> is een populaire keuze voor ZZP&apos;ers en MKB-bedrijven: betaalbaar, snel en afgestemd op je bedrijf. Wil je producten online verkopen, dan is een <Link href="/diensten/webshop" className="text-primary hover:underline font-medium">WooCommerce webshop</Link> de logische stap, compleet met iDEAL-betalingen, voorraadbeheer en verzendopties.
        </p>
        <p className="text-[var(--color-muted)] leading-relaxed">
          Wil je na de lancering beter gevonden worden, kies dan voor <Link href="/diensten/seo" className="text-primary hover:underline font-medium">Hoger in Google</Link>. Voor updates, back-ups en technische controles is er <Link href="/diensten/website-onderhoud" className="text-primary hover:underline font-medium">Website onderhoud</Link>. Terugkerende aanvragen of berichten kun je vereenvoudigen met <Link href="/diensten/whatsapp-automatisering" className="text-primary hover:underline font-medium">WhatsApp & automatisering</Link>.
        </p>
      </>
    ),
    image: "/images/blog/website-laten-maken-keuze.svg",
    imageAlt: "Vergelijking tussen een bedrijfswebsite, webshop en WhatsApp-automatisering.",
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
          Als ZZP&apos;er is een website vaak je digitale visitekaartje en je belangrijkste verkoopkanaal tegelijk. Kies daarom voor een complete bedrijfswebsite die professioneel oogt, gevonden kan worden en later kan meegroeien. WordPress kan geschikt zijn voor eigen contentbeheer; Next.js kan beter passen wanneer snelheid of specifieke websitefuncties belangrijk zijn.
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
    answer: "Bij TechSolutionsUtrecht start een complete professionele website vanaf €250 en valt de gebruikelijke projectprijs tussen €350 en €650. De definitieve prijs hangt af van inhoud, functies en koppelingen.",
  },
  {
    question: "Kan ik mijn website na oplevering zelf beheren?",
    answer: "Ja, wanneer eigen beheer bij je wensen past. WordPress kan geschikt zijn voor uitgebreid contentbeheer; bij andere projecten kan een andere techniek beter passen. Dit wordt vooraf afgesproken.",
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
    answer: "Na de intake ontvang je een planning op basis van inhoud, functies en feedbackmomenten. Voor webshops is 1 tot 3 weken een gemiddelde indicatie; de planning van iedere website wordt vooraf in de offerte vastgelegd.",
  },
];

export default function WebsiteLatenMakenBlogPost() {
  const canonicalUrl = "https://techsolutionsutrecht.nl/blog/website-laten-maken";
  const datePublished = "2026-07-10";
  const dateModified = "2026-08-16";

  const jsonLd = articleSchema({
    title: "Website Laten Maken: Praktische Checklist voor Ondernemers",
    description: "Een praktische checklist voor doelen, inhoud, techniek, planning en eigendom van je nieuwe bedrijfswebsite.",
    url: canonicalUrl,
    datePublished,
    dateModified,
    image: "/images/blog/website-laten-maken.svg",
    author: "TechSolutionsUtrecht",
  });

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: "https://techsolutionsutrecht.nl" },
    { name: "Blog", url: "https://techsolutionsutrecht.nl/blog" },
    { name: "Website Laten Maken: Praktische Checklist voor Ondernemers", url: canonicalUrl },
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
              Website Laten Maken:{" "}
              <span className="text-[var(--color-primary)]">Praktische Checklist voor Ondernemers</span>
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-[var(--color-muted)] mb-12 pb-12 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>TechSolutionsUtrecht</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={dateModified}>Bijgewerkt op 16 augustus 2026</time>
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
                Een website laten maken begint niet bij een techniek of een vast aantal pagina&apos;s, maar bij wat klanten moeten begrijpen en doen. Of je nu ZZP&apos;er bent, een lokale winkel runt of een groeiend bedrijf leidt: deze checklist helpt je doelen, inhoud en vereisten vóór de offerte helder te krijgen.
              </p>
              <p className="text-xl text-[var(--color-muted)] leading-relaxed">
                Je leest welke afspraken belangrijk zijn over prijs, planning, eigendom, techniek, beheer en SEO. Voor verdieping verwijzen we naar de afzonderlijke prijsgids en servicepagina&apos;s, zodat dit artikel een praktische beslischecklist blijft.
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
                Bij TechSolutionsUtrecht krijg je een complete website die past bij jouw bedrijf en doelen. De techniek kan bijvoorbeeld WordPress of Next.js zijn; de keuze volgt uit wat jij nodig hebt.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex"
                >
                  Gratis offerte aanvragen
                </Link>
                <Link
                  href="/diensten/website-laten-maken"
                  className="btn-ghost inline-flex"
                >
                  Bekijk de websiteservice
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
                    Website Binnen 1 Week: Wanneer Is Dat Haalbaar?
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
