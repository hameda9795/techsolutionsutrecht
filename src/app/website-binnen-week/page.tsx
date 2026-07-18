import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Zap, Check, ArrowRight, Clock, Rocket, Target } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/website-binnen-week";

export const metadata: Metadata = {
  title: "Website Binnen 1 Week: Is Dat Haalbaar? | TechSolutions",
  description: "Website snel laten maken? Bekijk wanneer een versneld traject haalbaar is. Professioneel, SEO-klaar en met direct contact met de developer in Utrecht.",
  alternates: { canonical: pageUrl },
};

const service = serviceSchema({
  name: "Versneld websiteproject in Utrecht",
  description:
    "Laat beoordelen of een versneld websiteproject haalbaar is. De planning hangt af van de omvang, functies en beschikbaarheid van de benodigde content.",
  url: pageUrl,
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "Website Binnen 1 Week", url: pageUrl },
]);

const faqs = [
  {
    question: "Kan een website echt binnen 1 week online staan?",
    answer:
      "Dat kan bij een compact project met een duidelijke scope en direct beschikbare content. Na een korte intake beoordelen we de haalbaarheid en ontvang je een planning met een afgesproken opleverdatum.",
  },
  {
    question: "Gaat snelheid niet ten koste van kwaliteit?",
    answer:
      "Een versneld traject wordt alleen voorgesteld als ontwerp, ontwikkeling, controle en aanpassingen zorgvuldig kunnen worden uitgevoerd. Als dat niet realistisch is, ontvang je een ruimere planning.",
  },
  {
    question: "Wat heb je van mij nodig om snel te kunnen starten?",
    answer:
      "Je doelen, teksten, logo, beeldmateriaal en een duidelijk beeld van de gewenste functies. Hoe completer deze informatie is, hoe nauwkeuriger we de planning kunnen bepalen.",
  },
  {
    question: "Is express-oplevering duurder?",
    answer:
      "Als een versneld traject extra planning of capaciteit vraagt, leggen we de eventuele meerkosten vooraf vast in de offerte. Je weet dus vóór de start wat de totaalprijs is.",
  },
];

const faqSchema = faqPageSchema(faqs);

const timeline = [
  {
    day: "Dag 1",
    title: "Kennismaking",
    description: "We bespreken uw wensen, doelgroep en gewenste uitstraling."
  },
  {
    day: "Dag 2-3",
    title: "Design",
    description: "We maken een eerste ontwerp gebaseerd op uw huisstijl."
  },
  {
    day: "Dag 4-5",
    title: "Ontwikkeling",
    description: "We bouwen de website in WordPress met alle functionaliteit."
  },
  {
    day: "Dag 6-7",
    title: "Content & Test",
    description: "We plaatsen content en testen alles grondig."
  },
  {
    day: "Dag 7-10",
    title: "Livegang",
    description: "Na uw goedkeuring gaat de website live!"
  },
];

const features = [
  "WordPress CMS",
  "Responsive design",
  "SEO-optimaal",
  "Contactformulier",
  "Snelle laadtijd",
  "Gratis support",
];

export default function WebsiteBinnenWeekPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <nav className="text-sm text-[var(--color-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>Binnen 1 Week</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-ink)] mb-6">
              Website{" "}<span className="text-[var(--color-primary)]">Binnen 1 Week</span>
              <br />
              <span className="text-2xl sm:text-3xl text-[var(--color-muted)]">Laten Maken</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[var(--color-muted)] mb-8">
              <strong className="text-[var(--color-ink)]">Website laten maken binnen 1 week?</strong> 
              Bij een compact project kan dat haalbaar zijn. Na een korte intake beoordelen we de
              <strong className="text-primary"> scope, content en benodigde functies</strong> en ontvang je een duidelijke planning.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary group">
                Start direct
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href="https://wa.me/31625518708"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                WhatsApp voor spoed
              </a>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] text-center mb-12">
              Hoe Wij Uw Website{" "}<span className="text-[var(--color-primary)]">Binnen 1 Week</span>{" "}
              Opleveren
            </h2>

            <div className="grid md:grid-cols-5 gap-4">
              {timeline.map((item, index) => (
                <div key={item.day} className="relative">
                  <div className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl h-full">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="text-primary font-semibold mb-2">{item.day}</div>
                    <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">{item.title}</h3>
                    <p className="text-[var(--color-muted)] text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-6">
                Wat Krijgt U Bij Onze{" "}<span className="text-[var(--color-primary)]">Snelle Service?</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[var(--color-muted)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/10 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-[var(--color-ink)]">Duidelijke Afspraken</span>
                </div>
                <p className="text-[var(--color-muted)]">
                  Scope, feedbackmomenten, planning en opleverdatum worden vooraf vastgelegd.
                  Als iets de planning beïnvloedt, bespreken we dat direct en transparant.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center">
                  <Clock className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--color-ink)]">Versneld Traject</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Planning op maat</div>
                  <div className="text-[var(--color-muted)] mt-1">Na beoordeling van scope en content</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="mb-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen — snel een website</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-[var(--color-primary)]/10 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mb-4">
              Is een <span className="text-[var(--color-primary)]">versneld traject</span> voor u haalbaar?
            </h2>
            
            <p className="text-[var(--color-muted)] mb-6 max-w-2xl mx-auto">
              Neem contact op voor een korte intake. We beoordelen de omvang, functies en beschikbare
              content en geven daarna een realistische planning en vaste totaalprijs.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Vraag een intake aan
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
