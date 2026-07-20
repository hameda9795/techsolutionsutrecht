import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { User, Check, ArrowRight, Euro, Clock, Star } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";

const pageUrl = "https://techsolutionsutrecht.nl/zzp-website-laten-maken";

export const metadata: Metadata = {
  title: "ZZP Website Laten Maken Utrecht | Snel Online | TechSolutions",
  description: "Laat een complete ZZP-website maken, snel online en scherp geprijsd. Mobielvriendelijk, met contactmogelijkheden, basis-SEO en direct contact met de developer in Utrecht.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ZZP Website Laten Maken Utrecht | Snel Online | TechSolutions",
    description: "Een complete professionele ZZP-website, snel online en scherp geprijsd, afgestemd op je bedrijf en klanten.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZZP Website Laten Maken Utrecht | Snel Online | TechSolutions",
    description: "Een complete professionele ZZP-website, snel online en scherp geprijsd, afgestemd op je bedrijf en klanten.",
  },
};

const service = serviceSchema({
  name: "ZZP website laten maken Utrecht",
  description:
    "Complete professionele website voor ZZP'ers en starters in Utrecht, snel online en scherp geprijsd, met een duidelijke planning, basis-SEO en direct contact met de developer.",
  url: pageUrl,
});

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://techsolutionsutrecht.nl" },
  { name: "ZZP Website Laten Maken", url: pageUrl },
]);

const faqs = [
  {
    question: "Wat kost een ZZP website?",
    answer:
      "Een complete ZZP-website start vanaf €250 en kost meestal €350–€650. De uiteindelijke prijs hangt af van de inhoud, functies en koppelingen. Je ontvangt vooraf een heldere offerte met een vaste totaalprijs.",
  },
  {
    question: "Hoe snel staat mijn ZZP-website online?",
    answer:
      "De doorlooptijd hangt af van de omvang, functies en beschikbaarheid van teksten en beeldmateriaal. Na een korte intake ontvang je een duidelijke planning en spreken we vooraf een opleverdatum af.",
  },
  {
    question: "Kan ik mijn website zelf aanpassen?",
    answer:
      "Ja, als zelf beheren belangrijk is kiezen we een passende oplossing waarmee je teksten, foto's en prijzen kunt aanpassen. Bij oplevering krijg je uitleg en het technische onderhoud kun je ook uitbesteden.",
  },
  {
    question: "Is de website geschikt om gevonden te worden in Google?",
    answer:
      "Elke ZZP-website krijgt een goede technische SEO-basis met snelle laadtijden, een nette structuur en mobielvriendelijke pagina's. Voor structurele groei kan dit worden uitgebreid met doorlopende SEO-optimalisatie.",
  },
];

const faqSchema = faqPageSchema(faqs);

const features = [
  "Professioneel design",
  "Mobiel-vriendelijk",
  "SEO-geoptimaliseerd",
  "CMS om zelf te beheren",
  "Contactformulier",
  "Google Maps integratie",
];

const benefits = [
  {
    icon: Euro,
    title: "Heldere Prijs",
    description: "Vanaf €250 en meestal €350–€650. Je ontvangt vooraf een vaste totaalprijs."
  },
  {
    icon: Clock,
    title: "Duidelijke Planning",
    description: "Na de intake spreken we een haalbare planning en opleverdatum af."
  },
  {
    icon: Star,
    title: "Professionaliteit",
    description: "Een professionele uitstraling die klanten aantrekt. Geen 'goedkoop' gevoel."
  },
];

export default function ZZPWebsitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="text-sm text-[var(--color-muted)] mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span>ZZP Website</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-primary)] mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
                ZZP Website{" "}
                <span className="text-[var(--color-primary)]">Laten Maken in Utrecht</span>
              </h1>

              <p className="text-lg text-[var(--color-muted)] mb-6">
                <strong className="text-[var(--color-ink)]">Een betaalbare, professionele website voor ZZP&apos;ers.</strong>{" "}
                Scherp geprijsd, met een <strong className="text-primary">duidelijke planning</strong> en{" "}
                <strong className="text-primary">direct contact met de developer</strong>.
                Perfect voor <strong className="text-[var(--color-ink)]">startende ondernemers</strong> en ZZP&apos;ers in Utrecht.
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
                <div className="text-3xl font-bold text-primary">Vanaf €250</div>
                <div className="text-[var(--color-muted)]">Meestal €350–€650</div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary group">
                  Direct starten
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <a 
                  href="https://wa.me/31625518708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  WhatsApp direct
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <div className="text-center">
                  <User className="w-24 h-24 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-[var(--color-ink)]">ZZP Website</div>
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €250</div>
                  <div className="text-[var(--color-muted)] mt-1">Offerte met vaste totaalprijs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--color-muted)]">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Why ZZP */}
          <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">
              Waarom Kiezen voor een Betaalbare ZZP Website?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-[var(--color-muted)]">
              <div>
                <p className="mb-4">
                  Als <strong className="text-[var(--color-ink)]">startende ondernemer</strong> of ZZP&apos;er
                  heeft u vaak een beperkt budget. Een dure website van €2.000+ is dan niet haalbaar. 
                  Toch heeft u een professionele online presentatie nodig om klanten te winnen.
                </p>
                <p>
                  Daarom bied ik <strong className="text-primary">scherp geprijsde websites voor ZZP&apos;ers</strong>.
                  Voor een eerlijke prijs krijgt u een complete website die er professioneel uitziet en goed werkt.
                  Geen watermerken, geen beperkingen — gewoon een goede website, met direct contact met de developer.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">Wat krijgt u?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Een uniek design (geen templates)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mobiel-vriendelijk (responsive)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>SEO-vriendelijk voor Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Contactformulier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>CMS om zelf te beheren</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <section className="mt-20 max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-10">Veelgestelde vragen — ZZP website</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
