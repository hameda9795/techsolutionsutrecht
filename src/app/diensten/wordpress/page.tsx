import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Globe, Check, ArrowRight, Zap, Clock, Settings, Smartphone, Search, Phone } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/wordpress";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "WordPress Website", url: pageUrl },
]);

const service = serviceSchema({
  name: "WordPress website laten maken Utrecht",
  description:
    "Professionele WordPress-website laten maken in Utrecht. Responsive, snel en SEO-klaar, met een gebruiksvriendelijk CMS zodat je zelf je content beheert. Direct contact met de developer.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Wat kost een WordPress website laten maken in Utrecht?",
    answer:
      "Een professionele WordPress-website kost bij TechSolutionsUtrecht doorgaans tussen €250 en €800, afhankelijk van het aantal pagina's, de gewenste functionaliteit en of er maatwerk nodig is. Je krijgt vooraf een heldere offerte zonder verborgen kosten. Voor ZZP'ers en startende ondernemers is er een scherp geprijsd instappakket.",
  },
  {
    question: "Hoe lang duurt het om een WordPress website te bouwen?",
    answer:
      "De meeste WordPress-websites lever ik binnen 3 tot 10 werkdagen op. Heb je haast? Express-oplevering is mogelijk. De doorlooptijd hangt vooral af van hoe snel je teksten en beeldmateriaal aanlevert; daar denk ik graag in mee.",
  },
  {
    question: "Kan ik mijn WordPress website daarna zelf beheren?",
    answer:
      "Ja. WordPress is een gebruiksvriendelijk CMS waarmee je zelf teksten, foto's en pagina's kunt aanpassen, zonder technische kennis. Bij oplevering krijg je een korte uitleg, en wil je het beheer liever uitbesteden, dan kan dat via website-onderhoud.",
  },
  {
    question: "Is een WordPress website goed voor SEO?",
    answer:
      "Zeker, mits goed gebouwd. Ik lever elke website SEO-klaar op: snelle laadtijden, nette koppenstructuur, mobielvriendelijk, schone code en de juiste technische basis. Daardoor maakt je site vanaf dag één kans om gevonden te worden in Google. Wil je structureel hoger komen, dan sluit SEO-optimalisatie hier naadloos op aan.",
  },
  {
    question: "WordPress of maatwerk: wat is beter voor mij?",
    answer:
      "WordPress is ideaal voor bedrijfswebsites, portfolio's en blogs waarbij je zelf content wilt beheren tegen een scherpe prijs. Heb je een unieke webapplicatie, dashboard of bijzondere functionaliteit nodig, dan is maatwerk met React en Next.js de betere keuze. In een gratis gesprek bepalen we samen wat bij jouw situatie past.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "WordPress Website Laten Maken Utrecht | TechSolutions",
  description:
    "Professionele WordPress-website laten maken in Utrecht. Responsive, snel en SEO-klaar, zelf te beheren. Direct contact met de developer. Vraag een offerte aan.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "WordPress Website Laten Maken Utrecht | TechSolutionsUtrecht",
    description:
      "Professionele WordPress-website laten maken in Utrecht. Responsive, snel en SEO-klaar, zelf te beheren. Direct contact met de developer.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const features = [
  "Professioneel design op maat",
  "SEO-optimalisatie standaard",
  "Mobiel-vriendelijk (responsive)",
  "CMS zodat je zelf kunt beheren",
  "Snelle laadtijden",
  "Scherp geprijsd — geen verborgen kosten",
];

const pillars = [
  {
    icon: Settings,
    title: "Zelf te beheren CMS",
    text: "Met WordPress pas je zelf eenvoudig teksten, foto's en pagina's aan, zonder afhankelijk te zijn van een developer voor elke kleine wijziging. Je houdt zo de regie over je eigen website en bespaart op de lange termijn.",
  },
  {
    icon: Smartphone,
    title: "Responsive op elk scherm",
    text: "Het grootste deel van je bezoekers komt via mobiel. Elke website die ik bouw werkt vloeiend op telefoon, tablet en desktop, met een ontwerp dat er overal verzorgd uitziet en snel laadt.",
  },
  {
    icon: Search,
    title: "SEO-klaar opgeleverd",
    text: "Schone code, een logische koppenstructuur, snelle laadtijden en de juiste technische basis: je website is vanaf de start klaar om gevonden te worden in Google, in plaats van dat SEO er achteraf bij geplakt wordt.",
  },
  {
    icon: Zap,
    title: "Snel online",
    text: "Waar bureaus vaak weken nodig hebben, lever ik de meeste websites binnen 3 tot 10 werkdagen op. Bij spoed is express-oplevering mogelijk, zodat je snel zichtbaar bent.",
  },
];

export default function WordPressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="text-sm text-[var(--color-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/diensten" className="hover:text-primary">Diensten</Link>
            <span className="mx-2">/</span>
            <span>WordPress</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                WordPress Website Laten Maken in{" "}
                <span className="text-[var(--color-primary)]">Utrecht</span>
              </h1>

              {/* Speed + Price badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Binnen 3-10 dagen online</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[var(--color-primary)]/10 rounded-full">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="text-sm text-[var(--color-primary)] font-medium">Express levering mogelijk</span>
                </div>
              </div>

              <p className="text-lg text-[var(--color-muted)] mb-8">
                Op zoek naar een <strong className="text-[var(--color-ink)]">professionele WordPress website</strong> in Utrecht?
                Ik bouw een snelle, responsive en SEO-klare website met{" "}
                <strong className="text-primary">direct contact met de developer</strong>. Scherp geprijsd en zonder concessies aan kwaliteit.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[var(--color-muted)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-3xl font-bold text-primary">€250 - €800</div>
                <div className="text-[var(--color-muted)]">Oplevering: 3-10 dagen</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Vraag gratis offerte aan
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-[var(--color-primary)] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--color-ink)]">WordPress</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €250</div>
                  <div className="text-[var(--color-muted)] mt-1">3-10 dagen</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <section className="mt-24 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">
              Waarom een WordPress website voor jouw bedrijf?
            </h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              WordPress is wereldwijd het meest gebruikte systeem om websites mee te bouwen, en niet zonder reden.
              Het combineert een gebruiksvriendelijk beheer met enorme flexibiliteit: van een eenvoudige bedrijfssite
              of portfolio tot een uitgebreide website met blog, contactformulieren en koppelingen. Voor de meeste
              ZZP&apos;ers en kleine bedrijven in Utrecht is het de ideale balans tussen kwaliteit, kosten en
              zelfstandigheid.
            </p>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Het verschil zit hem in de uitvoering. Een WordPress-site die slordig is opgezet, is traag en slecht
              vindbaar. Ik bouw je website met aandacht voor snelheid, schone code en een stevige SEO-basis, zodat je
              niet alleen een mooie, maar ook een goed presterende website krijgt.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              En omdat je rechtstreeks met de developer werkt, zijn de lijnen kort. Geen accountmanagers, geen
              wachtrijen, gewoon snel en persoonlijk contact van begin tot eind.
            </p>
          </section>

          {/* Pillars */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Wat je krijgt</h2>
            <div className="grid md:grid-cols-2 gap-6">
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

          {/* Aanpak / proces */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">Zo verloopt het traject</h2>
            <ul className="space-y-4">
              {[
                "Kennismaking en offerte: we bespreken je doelen, voorbeelden en budget. Je ontvangt een heldere offerte zonder verborgen kosten.",
                "Ontwerp en opbouw: ik bouw je website met een ontwerp dat past bij je merk, geoptimaliseerd voor snelheid en mobiel.",
                "Inhoud en SEO: teksten, afbeeldingen en de technische SEO-basis worden netjes ingericht zodat je gevonden wordt.",
                "Oplevering en uitleg: na je akkoord gaat de site live en krijg je een korte uitleg om zelf aanpassingen te doen.",
              ].map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-[var(--color-muted)] leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Interne links */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Past dit bij jou?</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-3xl leading-relaxed">
              Bekijk ook deze opties, of laat je website na de bouw structureel hoger in Google komen.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/diensten/webshop" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Webshop laten maken</h3>
                <p className="text-[var(--color-muted)] text-sm">Een complete WooCommerce-webshop met iDEAL en voorraadbeheer.</p>
              </Link>
              <Link href="/diensten/maatwerk" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Maatwerk development</h3>
                <p className="text-[var(--color-muted)] text-sm">Webapplicaties en dashboards op maat met React en Next.js.</p>
              </Link>
              <Link href="/diensten/seo" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">SEO optimalisatie</h3>
                <p className="text-[var(--color-muted)] text-sm">Structureel hoger in Google na de lancering van je site.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen over WordPress</h2>
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
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Klaar voor een nieuwe WordPress website?</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Vraag vrijblijvend een offerte aan. Je krijgt binnen één werkdag een reactie, direct van de developer
              die je website bouwt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/portfolio" className="btn-primary inline-flex items-center justify-center">
                Bekijk portfolio
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
