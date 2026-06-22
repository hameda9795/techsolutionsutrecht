import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShoppingCart, Check, ArrowRight, Zap, Clock, CreditCard, Package, Search, Phone } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/webshop";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "Webshop", url: pageUrl },
]);

const service = serviceSchema({
  name: "Webshop laten maken Utrecht",
  description:
    "Complete WooCommerce-webshop laten maken in Utrecht met iDEAL, voorraadbeheer en verzendintegraties. Snel, SEO-klaar en klaar om te verkopen. Direct contact met de developer.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Wat kost een webshop laten maken in Utrecht?",
    answer:
      "Een complete WooCommerce-webshop kost bij TechSolutionsUtrecht doorgaans tussen €350 en €1.200, afhankelijk van het aantal producten, gewenste betaalmethoden en koppelingen. De prijs is all-in: iDEAL-koppeling, design, installatie en een SEO-basis zijn inbegrepen. Je krijgt vooraf een heldere offerte zonder verborgen kosten.",
  },
  {
    question: "Welke betaalmethoden kan mijn webshop accepteren?",
    answer:
      "Je webshop kan alle gangbare betaalmethoden aan: iDEAL, creditcard, PayPal, Bancontact en meer, via een betrouwbare payment provider zoals Mollie of Stripe. Zo kunnen je klanten betalen zoals ze gewend zijn, wat zorgt voor minder afgebroken bestellingen.",
  },
  {
    question: "Hoe lang duurt het om een webshop te bouwen?",
    answer:
      "De meeste webshops lever ik binnen 5 tot 12 werkdagen op. De doorlooptijd hangt af van het aantal producten en hoe snel je productinformatie en foto's aanlevert. Bij spoed is express-oplevering mogelijk.",
  },
  {
    question: "Kan ik mijn producten en voorraad zelf beheren?",
    answer:
      "Ja. WooCommerce geeft je een overzichtelijk dashboard waarin je producten toevoegt, prijzen aanpast, voorraad bijhoudt en bestellingen verwerkt, zonder technische kennis. Bij oplevering krijg je uitleg, en wil je het beheer uitbesteden, dan kan dat via website-onderhoud.",
  },
  {
    question: "Is mijn webshop ook goed vindbaar in Google?",
    answer:
      "Zeker. Ik lever je webshop SEO-klaar op met nette producturl's, snelle laadtijden, mobielvriendelijk design en de juiste structured data voor producten. Daardoor maken je productpagina's kans om gevonden te worden. Wil je structureel meer bezoekers, dan sluit SEO-optimalisatie hier perfect op aan.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "Webshop Laten Maken Utrecht | WooCommerce | TechSolutions",
  description:
    "Complete WooCommerce-webshop laten maken in Utrecht met iDEAL, voorraadbeheer en verzending. Snel, SEO-klaar en klaar om te verkopen. Vraag een offerte aan.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Webshop Laten Maken Utrecht | WooCommerce | TechSolutionsUtrecht",
    description:
      "Complete WooCommerce-webshop laten maken in Utrecht met iDEAL, voorraadbeheer en verzending. Snel, SEO-klaar en klaar om te verkopen.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const features = [
  "Professioneel design",
  "Betalingen (iDEAL, creditcard, PayPal)",
  "Voorraadbeheer",
  "Verzendintegraties",
  "BTW-rapportages",
  "SEO voor producten",
];

const pillars = [
  {
    icon: CreditCard,
    title: "Veilig betalen met iDEAL",
    text: "Je klanten rekenen vertrouwd af met iDEAL, creditcard of PayPal via een betrouwbare payment provider. Een soepel en veilig afrekenproces zorgt voor minder afgebroken bestellingen en meer omzet.",
  },
  {
    icon: Package,
    title: "Voorraad en verzending",
    text: "Beheer je producten, voorraad en bestellingen vanuit één overzichtelijk dashboard, met koppelingen voor verzending en automatische BTW-rapportages. Alles wat je nodig hebt om professioneel te verkopen.",
  },
  {
    icon: Search,
    title: "SEO voor productpagina's",
    text: "Nette producturl's, snelle laadtijden, mobielvriendelijk design en productschema: je webshop is opgebouwd om gevonden te worden in Google en in Google Shopping.",
  },
  {
    icon: Zap,
    title: "Snel online en schaalbaar",
    text: "De meeste webshops staan binnen 5 tot 12 werkdagen live. WooCommerce groeit mee met je bedrijf, of je nu tien of duizend producten verkoopt.",
  },
];

export default function WebshopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
            <li className="text-[var(--text-muted)]">/</li>
            <li><Link href="/diensten" className="text-[var(--text-muted)] hover:text-primary transition-colors">Diensten</Link></li>
            <li className="text-[var(--text-muted)]">/</li>
            <li><span className="text-[var(--text-primary)] font-medium capitalize">webshop</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 mb-6">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
                Webshop Laten Maken in{" "}
                <span className="gradient-text">Utrecht</span>
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Binnen 5-12 dagen online</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500 font-medium">Snelle oplevering</span>
                </div>
              </div>

              <p className="text-lg text-[var(--text-secondary)] mb-8">
                <strong className="text-[var(--text-primary)]">Een webshop laten maken</strong> in Utrecht?
                Ik bouw een complete WooCommerce-webshop met iDEAL, voorraadbeheer en verzending — scherp geprijsd en
                klaar om te verkopen, met <strong className="text-primary">direct contact met de developer</strong>.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-3xl font-bold text-primary">€350 - €1.200</div>
                <div className="text-[var(--text-muted)]">Oplevering: 5-12 dagen</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Start je webshop
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center">
                <div className="text-center">
                  <ShoppingCart className="w-24 h-24 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--text-primary)]">WooCommerce</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €350</div>
                  <div className="text-[var(--text-muted)] mt-1">5-12 dagen</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <section className="mt-24 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
              Online verkopen met een professionele webshop
            </h2>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              Een eigen webshop is voor steeds meer ondernemers in Utrecht dé manier om te groeien: je verkoopt
              24 uur per dag, bereikt klanten buiten je directe omgeving en bent niet afhankelijk van marktplaatsen
              die een fors deel van je marge afromen. Met een goed gebouwde WooCommerce-webshop heb je alles in
              eigen hand, van prijzen tot uitstraling.
            </p>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              WooCommerce is het meest gebruikte webshopplatform ter wereld en draait op WordPress. Dat betekent
              maximale flexibiliteit, geen maandelijkse platformkosten zoals bij gesloten systemen, en de vrijheid om
              je webshop later uit te breiden met nieuwe functies, koppelingen of een blog.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Ik bouw je webshop met aandacht voor snelheid, een soepel afrekenproces en een stevige SEO-basis, zodat
              je niet alleen kunt verkopen, maar ook daadwerkelijk gevonden wordt. En je werkt rechtstreeks met de
              developer: korte lijnen, snelle reactie.
            </p>
          </section>

          {/* Pillars */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10">Wat je webshop kan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((p) => (
                <div key={p.title} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{p.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Proces */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Zo bouwen we je webshop</h2>
            <ul className="space-y-4">
              {[
                "Kennismaking en offerte: we bespreken je assortiment, gewenste betaal- en verzendmethoden en budget. Je ontvangt een all-in offerte.",
                "Opbouw en inrichting: ik bouw de webshop, richt de betaal- en verzendkoppelingen in en zet je producten netjes online.",
                "SEO en testen: producturl's, snelheid en productschema worden geoptimaliseerd, en we testen het bestelproces grondig.",
                "Live en uitleg: na je akkoord gaat de webshop live en krijg je uitleg om zelf producten en bestellingen te beheren.",
              ].map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-[var(--text-secondary)] leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Interne links */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Bekijk ook</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/diensten/wordpress" className="card-service block p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">WordPress website</h3>
                <p className="text-[var(--text-secondary)] text-sm">Een professionele bedrijfswebsite die je zelf beheert.</p>
              </Link>
              <Link href="/diensten/seo" className="card-service block p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">SEO optimalisatie</h3>
                <p className="text-[var(--text-secondary)] text-sm">Meer bezoekers en omzet via Google.</p>
              </Link>
              <Link href="/portfolio" className="card-service block p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Portfolio</h3>
                <p className="text-[var(--text-secondary)] text-sm">Bekijk eerder gebouwde websites en webshops.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10">Veelgestelde vragen over webshops</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 text-center bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Klaar om online te verkopen?</h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Vraag vrijblijvend een offerte aan voor je webshop. Je krijgt binnen één werkdag een reactie, direct van
              de developer die je webshop bouwt.
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
