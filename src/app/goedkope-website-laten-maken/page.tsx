import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { PiggyBank, Check, ArrowRight, Zap, ShieldCheck, X, Phone } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/goedkope-website-laten-maken";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Goedkope Website Laten Maken", url: pageUrl },
]);

const service = serviceSchema({
  name: "Goedkope website laten maken",
  description:
    "Goedkope website laten maken vanaf €250: professioneel WordPress-webdesign, responsive en SEO-klaar, binnen 1 week online. Direct contact met de developer.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Hoe kan een professionele website zo goedkoop zijn?",
    answer:
      "Omdat je rechtstreeks met de developer werkt. Je betaalt niet mee aan accountmanagers, verkopers of een duur kantoorpand — kosten die bij bureaus in de prijs zitten. Daarnaast werk ik met een efficiënt, bewezen proces waardoor een standaard website binnen een week af is. Lage overhead, geen lage kwaliteit.",
  },
  {
    question: "Wat krijg ik voor €250?",
    answer:
      "Een complete professionele WordPress-website van 3 tot 5 pagina's: responsive design, contactformulier, koppeling met Google Maps en Bedrijfsprofiel, technische SEO-basis en uitleg zodat je zelf teksten kunt aanpassen. Hosting en domein regel je zelf of via mij (circa €10-€25 per maand).",
  },
  {
    question: "Waar zit het verschil met websites van €1.000+?",
    answer:
      "Vooral in maatwerk en omvang: een uniek design vanaf nul, veel pagina's, uitgebreide functionaliteit of copywriting voor alle teksten. Heb je dat nodig, dan groeit de prijs mee. Maar voor de meeste zzp'ers en kleine bedrijven is een strak template-gebaseerd design op maat ruim voldoende om professioneel over te komen en klanten te winnen.",
  },
  {
    question: "Is een goedkope website ook goed voor Google?",
    answer:
      "Bij mij wel. Elke website die ik oplever heeft de technische SEO-basis op orde: snelle laadtijd, mobielvriendelijk, correcte meta-tags en structured data. Wil je daarna actief hoger in Google komen, dan kan dat met een SEO-traject vanaf €200 per maand.",
  },
  {
    question: "Zijn er verborgen kosten?",
    answer:
      "Nee. Je krijgt vooraf een vaste prijs op papier. De enige terugkerende kosten zijn hosting en domein (circa €10-€25 per maand) en eventueel een onderhoudspakket vanaf €50 per maand — beide optioneel en vooraf helder.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "Goedkope Website Laten Maken | Vanaf €250, Binnen 1 Week | TechSolutions",
  description:
    "Goedkope website laten maken zonder in te leveren op kwaliteit? Professionele WordPress-website vanaf €250, SEO-klaar en binnen 1 week online. Vraag een offerte aan.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Goedkope Website Laten Maken | Vanaf €250, Binnen 1 Week | TechSolutions",
    description:
      "Goedkope website laten maken zonder in te leveren op kwaliteit? Professionele WordPress-website vanaf €250, SEO-klaar en binnen 1 week online.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const included = [
  "Professioneel responsive design",
  "WordPress: zelf teksten aanpassen",
  "Technische SEO-basis inbegrepen",
  "Contactformulier & Google Maps",
  "Binnen 1 week online",
  "Vaste prijs, vooraf afgesproken",
];

const watchOuts = [
  {
    bad: "Lokkertjes van €99 waarna elke aanpassing geld kost",
    good: "Eén vaste prijs inclusief afgesproken aanpassingsrondes",
  },
  {
    bad: "Verplichte dure abonnementen om je site online te houden",
    good: "Hosting en onderhoud zijn optioneel en maandelijks opzegbaar",
  },
  {
    bad: "Een template volgeplakt zonder na te denken over jouw klant",
    good: "Design en indeling afgestemd op jouw doelgroep en doel",
  },
  {
    bad: "Geen aandacht voor Google: mooi maar onvindbaar",
    good: "Technische SEO standaard op orde, meetbaar via Search Console",
  },
];

export default function GoedkopeWebsitePage() {
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
            <li><span className="text-[var(--color-ink)] font-medium">Goedkope website laten maken</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <PiggyBank className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                Goedkope Website <span className="text-[var(--color-primary)]">Laten Maken</span>
              </h1>

              <p className="text-lg text-[var(--color-muted)] mb-8">
                Een <strong className="text-[var(--color-ink)]">goedkope website laten maken</strong> hoeft niet
                te betekenen dat je inlevert op kwaliteit. Vanaf{" "}
                <strong className="text-primary">€250</strong> krijg je een professionele, SEO-klare
                WordPress-website — binnen 1 week online, met direct contact met de developer.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {included.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-[var(--color-muted)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="text-3xl font-bold text-primary">vanaf €250</div>
                <div className="text-[var(--color-muted)]">Vaste prijs, geen verrassingen</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Vraag een gratis offerte aan
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/images/goedkope-website-laten-maken-hero.webp"
                alt="Goedkope website laten maken: professionele WordPress-website op laptop en smartphone, vanaf 250 euro"
                width={1344}
                height={768}
                priority
                className="w-full h-auto rounded-2xl border border-[var(--color-border)]"
              />
            </div>
          </div>

          {/* Hoe kan het zo goedkoop */}
          <section className="mt-24 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">
              Goedkoop én professioneel: hoe dan?
            </h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              &quot;Goedkoop&quot; heeft in webdesign een slechte naam — en vaak terecht. Het internet staat vol
              aanbieders die met een lokprijs adverteren en daarna elke wijziging factureren, of die een template
              volplakken en nooit meer reageren. Daardoor denken veel ondernemers dat een goede website nu eenmaal
              duizenden euro&apos;s móét kosten.
            </p>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              De werkelijkheid: de gemiddelde prijs voor een professionele website ligt in Nederland tussen de
              €750 en €2.500. Dat betaal je grotendeels voor overhead — accountmanagers, verkooptrajecten,
              kantoorkosten. Werk je rechtstreeks met de developer, dan vervalt die overhead en blijft de
              vakkennis over. Zo kan een{" "}
              <Link href="/diensten/wordpress" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">
                professionele WordPress-website
              </Link>{" "}
              vanaf €250.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Benieuwd wat websites in 2026 kosten en waar de prijsverschillen vandaan komen? Lees dan mijn
              uitgebreide{" "}
              <Link href="/blog/wat-kost-website-laten-maken" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">
                prijsgids: wat kost een website laten maken
              </Link>
              .
            </p>
          </section>

          {/* Waar je op moet letten */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">
              Waar &quot;goedkoop&quot; misgaat — en hoe ik het anders doe
            </h2>
            <p className="text-[var(--color-muted)] mb-10 max-w-3xl leading-relaxed">
              Niet elke goedkope website is een goede deal. Dit zijn de valkuilen die ik het vaakst zie, en wat
              je bij mij mag verwachten:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {watchOuts.map((w) => (
                <div key={w.bad} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-[var(--color-muted)] leading-relaxed">{w.bad}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-[var(--color-ink)] leading-relaxed font-medium">{w.good}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Voor wie */}
          <section className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">Voor wie is dit ideaal?</h2>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Een betaalbare website is perfect voor zzp&apos;ers, starters en kleine bedrijven die professioneel
                online willen zonder groot budget: kappers, coaches, klusbedrijven, praktijken, restaurants.
                Ben je zzp&apos;er? Bekijk dan ook de pagina over{" "}
                <Link href="/zzp-website-laten-maken" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">
                  een zzp website laten maken
                </Link>
                .
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Groei je later? Dan groeit de website mee: een{" "}
                <Link href="/diensten/webshop" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">
                  webshop
                </Link>
                , extra pagina&apos;s of{" "}
                <Link href="/diensten/seo" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">
                  zoekmachine optimalisatie
                </Link>{" "}
                kunnen er altijd bij. Je zit nergens aan vast.
              </p>
            </div>
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8">
              <div className="flex gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-ink)] mb-4">Snel online, zorgeloos daarna</h3>
              <ul className="space-y-3">
                {[
                  "Standaard website binnen 1 week live",
                  "Binnen 4 uur reactie op vragen",
                  "Optioneel onderhoud vanaf €50/maand",
                  "12+ jaar ervaring, KvK-geregistreerd",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--color-muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">
              Veelgestelde vragen over een goedkope website
            </h2>
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
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">
              Professioneel online vanaf €250?
            </h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Vertel me wat je doet en wat je nodig hebt — je krijgt binnen één werkdag een vaste prijs,
              zonder verplichtingen en zonder kleine lettertjes.
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
