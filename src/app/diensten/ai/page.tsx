import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, Check, ArrowRight, Zap, Clock, MessageSquare, Workflow, BarChart3, Phone } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/diensten/ai";

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Diensten", url: "https://techsolutionsutrecht.nl/diensten" },
  { name: "AI Integraties", url: pageUrl },
]);

const service = serviceSchema({
  name: "AI integraties en chatbots Utrecht",
  description:
    "Slimme chatbots en AI-automatisering laten bouwen in Utrecht. Custom AI-oplossingen die tijd besparen en naadloos integreren met je website of werkproces. Vanaf €500.",
  url: pageUrl,
});

const faqs = [
  {
    question: "Wat kan een AI-chatbot voor mijn bedrijf doen?",
    answer:
      "Een goed getrainde chatbot beantwoordt veelgestelde vragen van klanten, kwalificeert leads, plant afspraken in en ontlast zo je klantenservice, 24 uur per dag. Hij wordt gevoed met jouw eigen informatie, zodat de antwoorden kloppen en bij je merk passen.",
  },
  {
    question: "Wat kost een AI-oplossing?",
    answer:
      "AI-projecten starten vanaf €500. De prijs hangt af van de complexiteit: een eenvoudige website-chatbot is voordeliger dan een maatwerk-automatisering met koppelingen naar je systemen. In een gratis gesprek bepalen we de scope en een realistische prijs.",
  },
  {
    question: "Werkt de chatbot samen met mijn bestaande website?",
    answer:
      "Ja. Ik integreer de AI-oplossing in je huidige website, of die nu in WordPress of maatwerk is gebouwd. De chatbot of automatisering sluit aan op je bestaande content en, indien gewenst, op externe systemen via API's.",
  },
  {
    question: "Welke processen kan AI automatiseren?",
    answer:
      "Denk aan het automatisch verwerken van aanvragen, het samenvatten van documenten, het opstellen van concepten, het classificeren van e-mails of het koppelen van data tussen tools. Ik kijk samen met jou waar AI in jouw werkproces het meeste tijd bespaart.",
  },
];

const faqSchema = faqPageSchema(faqs);

export const metadata: Metadata = {
  title: "AI Integraties & Chatbots Laten Maken Utrecht | TechSolutions",
  description:
    "Slimme chatbots en AI-automatisering laten bouwen in Utrecht. Custom AI-oplossingen die tijd besparen en integreren met je website. Vanaf €500. Direct contact met de developer.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "AI Integraties & Chatbots Laten Maken Utrecht | TechSolutionsUtrecht",
    description:
      "Slimme chatbots en AI-automatisering laten bouwen in Utrecht. Custom AI-oplossingen die tijd besparen en integreren met je website.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
};

const features = [
  "Slimme chatbots",
  "Automatisering",
  "AI-gestuurde analyses",
  "Integratie met je website",
  "Custom AI oplossingen",
  "Training & support",
];

const pillars = [
  {
    icon: MessageSquare,
    title: "AI-chatbots",
    text: "Een chatbot die getraind is op jouw informatie beantwoordt klantvragen, kwalificeert leads en plant afspraken, 24/7. Zo ontlast je je klantenservice en mis je geen enkele aanvraag meer.",
  },
  {
    icon: Workflow,
    title: "Procesautomatisering",
    text: "Repeterende taken zoals aanvragen verwerken, e-mails sorteren of documenten samenvatten automatiseer ik met AI, zodat jij en je team tijd overhouden voor het echte werk.",
  },
  {
    icon: BarChart3,
    title: "AI-gestuurde analyses",
    text: "Laat AI patronen uit je data halen: van klantgedrag tot tekstanalyse. Inzichten die anders verborgen blijven, vertaald naar bruikbare acties voor je bedrijf.",
  },
  {
    icon: Sparkles,
    title: "Maatwerk integraties",
    text: "Een unieke AI-toepassing nodig? Ik bouw oplossingen op maat die aansluiten op je website en bestaande systemen, met moderne en betrouwbare technologie.",
  },
];

export default function AiPage() {
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
            <li><span className="text-[var(--color-ink)] font-medium capitalize">AI Integraties</span></li>
          </ol>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                AI Integraties &amp; Chatbots <span className="text-[var(--color-primary)]">Utrecht</span>
              </h1>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Op maat ontwikkeld</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[var(--color-primary)]/10 rounded-full">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                  <span className="text-sm text-[var(--color-primary)] font-medium">Projectafhankelijk</span>
                </div>
              </div>

              <p className="text-lg text-[var(--color-muted)] mb-8">
                <strong className="text-[var(--color-ink)]">AI-tools en chatbots</strong> laten bouwen die echt tijd besparen?
                Vanaf <strong className="text-primary">€500</strong> ontwikkel ik slimme automatisering en AI-oplossingen
                die naadloos integreren met jouw website of werkproces, met direct contact met de developer.
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
                <div className="text-3xl font-bold text-primary">Vanaf €500</div>
                <div className="text-[var(--color-muted)]">Oplevering: projectafhankelijk</div>
              </div>

              <Link href="/contact" className="btn-primary group inline-flex">
                Bespreek je AI-project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-24 h-24 text-[var(--color-primary)] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--color-ink)]">AI Integraties</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €500</div>
                  <div className="text-[var(--color-muted)] mt-1">Projectafhankelijk</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <section className="mt-24 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">
              AI die je bedrijf echt verder helpt
            </h2>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              AI is geen hype meer maar een praktisch hulpmiddel waarmee ook kleine bedrijven en ZZP&apos;ers tijd en
              geld besparen. Het lastige is alleen: de meeste kant-en-klare tools passen niet precies bij jouw manier
              van werken. Daar komt maatwerk om de hoek kijken.
            </p>
            <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
              Als developer bouw ik AI-oplossingen die aansluiten op jóuw situatie: een chatbot die je klanten te woord
              staat met de juiste informatie, een automatisering die handmatig werk overneemt, of een integratie die je
              tools met elkaar laat praten. Geen standaardpakket, maar een oplossing die meetbaar resultaat oplevert.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We beginnen altijd klein en concreet: één duidelijk probleem, één werkende oplossing. Daarna kunnen we
              stap voor stap uitbreiden naarmate je de waarde ziet.
            </p>
          </section>

          {/* Pillars */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Wat ik voor je bouw</h2>
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

          {/* Interne links */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Past dit bij jouw plannen?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/diensten/maatwerk" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Maatwerk development</h3>
                <p className="text-[var(--color-muted)] text-sm">Webapplicaties en dashboards op maat met React en Next.js.</p>
              </Link>
              <Link href="/diensten/wordpress" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">WordPress website</h3>
                <p className="text-[var(--color-muted)] text-sm">Een professionele website om je AI-oplossing op te laten draaien.</p>
              </Link>
              <Link href="/blog/ai-chatbot-implementeren" className="card-service block p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-primary/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">Blog: AI-chatbot implementeren</h3>
                <p className="text-[var(--color-muted)] text-sm">Hoe je een chatbot succesvol inzet voor je bedrijf.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen over AI</h2>
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
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Benieuwd wat AI voor jou kan doen?</h2>
            <p className="text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
              Bespreek vrijblijvend je idee. Je krijgt binnen één werkdag een eerlijke inschatting van de mogelijkheden
              en de kosten, direct van de developer die het bouwt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31625518708" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors">
                <Phone className="w-5 h-5" /> WhatsApp direct
              </a>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Bespreek je AI-project
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
