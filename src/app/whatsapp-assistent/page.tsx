import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  MessageSquare,
  Check,
  ArrowRight,
  Clock,
  CalendarCheck,
  ShoppingBag,
  Bot,
  Mic,
  Globe,
  Bell,
  ShieldCheck,
  Phone,
  Sparkles,
  Plug,
  Users,
} from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/whatsapp-assistent";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "WhatsApp AI-assistent", url: pageUrl },
]);

const service = serviceSchema({
  name: "Baliebot – WhatsApp AI-assistent voor bedrijven",
  description:
    "Een AI-assistent op je eigen WhatsApp Business-nummer die 24/7 klantvragen beantwoordt, afspraken inplant in je agenda en bestellingen opneemt. Voor kapsalons, restaurants, klinieken en webshops. Vanaf €30 per maand.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Heb ik mijn eigen WhatsApp-nummer nodig?",
    answer:
      "Ja. Je koppelt je eigen WhatsApp Business-nummer veilig aan het platform via de officiële WhatsApp Embedded Signup van Meta — in een paar klikken, zonder gedoe en zonder dat je technische sleutels hoeft te kopiëren. Je klanten blijven gewoon met jouw vertrouwde nummer chatten.",
  },
  {
    question: "Wat kan de assistent precies doen?",
    answer:
      "De assistent beantwoordt automatisch vragen van klanten op WhatsApp, 24 uur per dag. Afhankelijk van je branche plant hij afspraken in je agenda (kapsalon, kliniek), neemt hij bestellingen op met je menu (restaurant) of legt hij aanvragen en leads vast (webshop, dienstverlening). Hij is getraind op jóuw informatie, prijzen en openingstijden.",
  },
  {
    question: "Werkt het samen met mijn Google Agenda?",
    answer:
      "Ja. Voor afspraken koppelen we je Google Agenda. De assistent checkt je vrije tijden, plant de afspraak in en bevestigt die meteen aan je klant met datum en tijd. Zo staat alles automatisch in je agenda zonder dubbele boekingen.",
  },
  {
    question: "Hoe snel kan ik live?",
    answer:
      "Meestal binnen één werkdag. Wij richten je bedrijfsprofiel in (diensten, prijzen, openingstijden, veelgestelde vragen), koppelen je WhatsApp-nummer en testen de assistent. Daarna staat hij klaar om je klanten te woord te staan.",
  },
  {
    question: "Wat kost het?",
    answer:
      "Het platform start vanaf €30 per maand, zonder lange contracten. De prijs hangt af van je branche en de gewenste functies (zoals agenda-koppeling of bestellingen). In een gratis gesprek bepalen we wat bij jouw bedrijf past.",
  },
  {
    question: "Praat de assistent ook in andere talen?",
    answer:
      "Ja. De assistent begrijpt en antwoordt in meerdere talen en kan zelfs gesproken WhatsApp-berichten (voicenotes) verstaan en beantwoorden. Zo voelt elk gesprek persoonlijk en natuurlijk.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "Baliebot – WhatsApp AI-assistent voor Bedrijven | 24/7 Klantenservice | TechSolutionsUtrecht",
  description:
    "Baliebot is een slimme AI-assistent op je eigen WhatsApp-nummer die 24/7 klanten te woord staat, afspraken inplant en bestellingen opneemt. Voor kapsalons, restaurants en webshops. Vanaf €30 p/m.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Baliebot – WhatsApp AI-assistent voor Bedrijven | TechSolutionsUtrecht",
    description:
      "Baliebot: een AI-assistent op je eigen WhatsApp-nummer die 24/7 klantvragen beantwoordt, afspraken inplant en bestellingen opneemt. Vanaf €30 per maand.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const heroFeatures = [
  "24/7 automatisch antwoord",
  "Op je eigen WhatsApp-nummer",
  "Afspraken in je agenda",
  "Bestellingen opnemen",
  "Getraind op jouw bedrijf",
  "Binnen 1 dag live",
];

const steps = [
  {
    icon: Plug,
    title: "1. Koppel je WhatsApp",
    text: "Je verbindt je eigen WhatsApp Business-nummer veilig via de officiële Meta-koppeling. Een paar klikken, geen technisch gedoe.",
  },
  {
    icon: Bot,
    title: "2. Wij trainen de assistent",
    text: "We vullen je profiel met je diensten, prijzen, openingstijden en veelgestelde vragen. De assistent leert precies hoe jouw bedrijf praat.",
  },
  {
    icon: MessageSquare,
    title: "3. Hij beantwoordt je klanten",
    text: "Vanaf dat moment staat de assistent 24/7 je klanten te woord, plant afspraken in en neemt bestellingen op — terwijl jij doorwerkt.",
  },
];

const branches = [
  {
    icon: CalendarCheck,
    title: "Kappers & salons",
    text: "Klanten boeken een afspraak via WhatsApp. De assistent checkt je vrije tijden, plant de afspraak in je Google Agenda en bevestigt direct. Geen gemiste boekingen meer.",
  },
  {
    icon: ShoppingBag,
    title: "Restaurants & cafés",
    text: "De assistent kent je menu, neemt bestellingen op, rekent het totaal uit en controleert of het bezorgadres in je bezorggebied valt. De bestelling komt netjes bij je binnen.",
  },
  {
    icon: Users,
    title: "Klinieken & praktijken",
    text: "Patiënten maken zelf een afspraak via WhatsApp. De assistent plant in op basis van je beschikbaarheid en stuurt een duidelijke bevestiging — 24 uur per dag.",
  },
  {
    icon: Sparkles,
    title: "Webshops & dienstverlening",
    text: "Vragen over producten of diensten worden direct beantwoord, leads worden vastgelegd en jij krijgt een seintje bij elke nieuwe aanvraag. Geen klant valt meer tussen wal en schip.",
  },
];

const features = [
  { icon: Clock, title: "24/7 bereikbaar", text: "Antwoordt meteen, ook 's avonds en in het weekend." },
  { icon: CalendarCheck, title: "Agenda-koppeling", text: "Plant afspraken automatisch in je Google Agenda." },
  { icon: ShoppingBag, title: "Bestellingen", text: "Neemt orders op met je menu en bezorggebied." },
  { icon: Mic, title: "Spraakberichten", text: "Verstaat en beantwoordt ook WhatsApp-voicenotes." },
  { icon: Globe, title: "Meertalig", text: "Praat met je klanten in hun eigen taal." },
  { icon: Bell, title: "Leadnotificaties", text: "Krijg direct bericht bij een nieuwe aanvraag." },
];

export default function WhatsAppAssistentPage() {
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
            <li><span className="text-[var(--color-ink)] font-medium">WhatsApp AI-assistent</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-12 pb-24">
        <div className="container-custom">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)]">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-semibold tracking-wide text-[#128C7E] bg-[#25D366]/10 px-3 py-1 rounded-full">
                  Baliebot
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                Baliebot: je <span className="text-[var(--color-primary)]">WhatsApp AI-assistent</span> voor jouw bedrijf
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-[#25D366]/10 rounded-full">
                  <Clock className="w-4 h-4 text-[#128C7E]" />
                  <span className="text-sm text-[#128C7E] font-medium">24/7 bereikbaar</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Je eigen nummer</span>
                </div>
              </div>

              <p className="text-lg text-[var(--color-muted)] mb-8">
                Een slimme assistent die <strong className="text-[var(--color-ink)]">24/7 je klanten te woord staat
                op WhatsApp</strong> — afspraken inplant, bestellingen opneemt en vragen beantwoordt. Getraind op jouw
                bedrijf, op je <strong className="text-primary">eigen WhatsApp-nummer</strong>. Vanaf €30 per maand.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {heroFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#128C7E]" />
                    </div>
                    <span className="text-[var(--color-muted)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary group inline-flex items-center justify-center">
                  Vraag een gratis demo aan
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/31625518708"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors"
                >
                  <Phone className="w-5 h-5" /> WhatsApp direct
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center px-6">
                  <MessageSquare className="w-24 h-24 text-[#128C7E] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--color-ink)]">Baliebot</div>
                  <div className="text-[var(--color-muted)] text-sm mt-1">WhatsApp AI-assistent</div>
                  <div className="text-3xl font-extrabold text-primary mt-3">Vanaf €30 p/m</div>
                  <div className="text-[var(--color-muted)] mt-1">Binnen 1 dag live</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <section className="mt-24 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">
              Mis nooit meer een klant op WhatsApp
            </h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Steeds meer klanten appen liever dan dat ze bellen. Maar je kunt niet altijd direct reageren — je bent
              aan het werk, het is druk, of het is gewoon na sluitingstijd. Elke onbeantwoorde WhatsApp is een gemiste
              afspraak, bestelling of klant.
            </p>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Met <strong className="text-[var(--color-ink)]">Baliebot</strong>, onze WhatsApp AI-assistent, koppel
              je je eigen WhatsApp Business-nummer aan een slimme assistent die jouw klanten meteen te woord staat. Hij
              is getraind op jouw bedrijf: je diensten, prijzen, openingstijden en veelgestelde vragen. Zo voelt elk
              gesprek alsof het van jou komt.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Of het nu gaat om een afspraak inplannen, een bestelling opnemen of een vraag beantwoorden — het gebeurt
              automatisch, 24 uur per dag, terwijl jij gewoon doorwerkt.
            </p>
          </section>

          {/* Hoe het werkt */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">In 3 stappen live</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.title} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366]/10 mb-4">
                    <s.icon className="w-6 h-6 text-[#128C7E]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{s.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Per branche */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Voor elke branche op maat</h2>
            <p className="text-[var(--color-muted)] mb-10 max-w-2xl leading-relaxed">
              Elke branche heeft zijn eigen behoeften. Daarom werkt de assistent net even anders voor jouw type bedrijf.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {branches.map((b) => (
                <div key={b.title} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{b.title}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Alles wat de assistent kan</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#25D366]/10 flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[#128C7E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-ink)] mb-1">{f.title}</h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Privacy / vertrouwen */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">Veilig en op je eigen nummer</h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Je koppelt je WhatsApp Business-nummer via de officiële, beveiligde koppeling van Meta (WhatsApp Embedded
              Signup). Je hoeft geen technische sleutels te delen of in te stellen — het gaat in een paar klikken. Jij
              blijft eigenaar van je nummer en je gesprekken.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Baliebot gebruikt jouw bedrijfsgegevens uitsluitend om jóuw klanten te helpen. Niets wordt gedeeld of
              doorverkocht. In je beheeromgeving zie je alle gesprekken, afspraken en bestellingen op één plek terug.
            </p>
          </section>

          {/* Interne links */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Past dit bij jouw plannen?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/diensten/whatsapp-automatisering" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">WhatsApp & automatisering op maat</h3>
                <p className="text-[var(--color-muted)] text-sm">Maatwerk workflows voor je website en bestaande systemen.</p>
              </Link>
              <Link href="/diensten/website-onderhoud" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Website laten maken</h3>
                <p className="text-[var(--color-muted)] text-sm">Een professionele website naast je WhatsApp-assistent.</p>
              </Link>
              <Link href="/contact" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Direct contact</h3>
                <p className="text-[var(--color-muted)] text-sm">Bespreek je situatie en krijg een eerlijk advies.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen</h2>
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
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Klaar om geen klant meer te missen?</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Vraag een gratis demo aan en ervaar zelf hoe Baliebot jouw klanten te woord staat. Je krijgt binnen één
              werkdag antwoord, direct van de developer.
            </p>
            <p className="text-sm text-[var(--color-muted)] mb-8 -mt-4">Binnenkort ook te vinden op baliebot.nl</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Vraag een gratis demo aan
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
