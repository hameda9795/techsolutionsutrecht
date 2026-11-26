import { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";
import { User, Check, ArrowRight, Euro, Clock, Star } from "lucide-react";
import { breadcrumbSchema, serviceSchema, faqPageSchema } from "@/lib/schema";
import WebsiteProjectProof from "@/components/WebsiteProjectProof";
import { getAllShowcaseProjects } from "@/lib/showcase-db";

const pageUrl = "https://techsolutionsutrecht.nl/zzp-website-laten-maken";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Website laten maken als zzp’er vanaf €300 | TechSolutions",
  description: "Website laten maken als zzp’er vanaf €300 excl. btw. Een betaalbare zzp-website met je diensten, werk en contact. Direct contact met Max en vooraf een vaste offerte.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Website laten maken als zzp’er vanaf €300 | TechSolutions",
    description: "Een website voor je ZZP-bedrijf met je diensten, werkvoorbeelden en contact. WordPress vanaf €300 excl. btw, met een vooraf afgesproken planning.",
    type: "website",
    locale: "nl_NL",
    url: pageUrl,
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website laten maken als zzp’er vanaf €300 | TechSolutions",
    description: "Een website voor je ZZP-bedrijf met je diensten, werkvoorbeelden en contact. WordPress vanaf €300 excl. btw, met een vooraf afgesproken planning.",
  },
};

const service = serviceSchema({
  name: "Website laten maken voor zzp’ers",
  description:
    "WordPress website voor ZZP’ers en starters, met een duidelijke presentatie van diensten, werkvoorbeelden, contact en een vooraf afgesproken planning.",
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
      "Een WordPress eenpaginawebsite voor je ZZP-bedrijf kost €300. Pakketten met maximaal drie of vijf inhoudspagina’s kosten €500 en €700, exclusief btw. De uiteindelijke prijs hangt af van de inhoud, functies en koppelingen. Je ontvangt vooraf een heldere offerte met een vaste totaalprijs.",
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
  "Search Console en sitemap",
  "Contactformulier",
  "Uitleg over zelf aanpassen",
];

const benefits = [
  {
    icon: Euro,
    title: "Heldere Prijs",
    description: "WordPress-pakketten van €300, €500 en €700 excl. btw. Je ontvangt vooraf een vaste totaalprijs."
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

export default async function ZZPWebsitePage() {
  const projects = await getAllShowcaseProjects();
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
                Website laten maken als zzp’er{" "}
                <span className="text-[var(--color-primary)]">vanaf €300</span>
              </h1>

              <p className="text-lg text-[var(--color-muted)] mb-6">
                Werk je voor jezelf? Ik bouw een WordPress-website waarop klanten zien wat je doet,
                voorbeelden van je werk bekijken en een offerte kunnen aanvragen.
                Voor €300 excl. btw krijg je één pagina met maximaal zes secties en een contactformulier.
                Je levert zelf je teksten, foto’s en logo aan.
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
                <div className="text-3xl font-bold text-primary">Vanaf €300</div>
                <div className="text-[var(--color-muted)]">Pakketten: €300 / €500 / €700 excl. btw</div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary group">
                  Offerte voor mijn ZZP-website
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
                  <div className="text-3xl font-extrabold text-primary mt-2">Vanaf €300</div>
                  <div className="text-[var(--color-muted)] mt-1">Offerte met vaste totaalprijs</div>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-16" aria-labelledby="zzp-inhoud">
            <h2 id="zzp-inhoud" className="mb-6 text-3xl font-bold text-[var(--color-ink)]">Wat heeft een website voor een ZZP’er nodig?</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ["Je aanbod", "Vertel welke dienst je levert, voor wie en wat de volgende stap is. Geef iedere belangrijke dienst genoeg ruimte om vragen van je klant te beantwoorden."],
                ["Wie je bent", "Een foto, je achtergrond en je manier van werken helpen bezoekers bepalen of ze met jou willen samenwerken."],
                ["Voorbeelden van je werk", "Laat projecten, foto’s of een uitgewerkte opdracht zien. Licht toe wat je hebt gedaan en gebruik alleen resultaten en klantreacties die je kunt onderbouwen."],
                ["Eenvoudig contact", "Een duidelijk aanvraagformulier, telefoonnummer of WhatsApp-link maakt de stap van interesse naar contact kort. We kiezen wat bij jouw werkwijze past."],
              ].map(([title, text]) => <article key={title} className="rounded-xl border border-[var(--color-border)] p-6"><h3 className="text-xl font-semibold text-[var(--color-ink)]">{title}</h3><p className="mt-3 leading-relaxed text-[var(--color-muted)]">{text}</p></article>)}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="zzp-paginas">
            <h2 id="zzp-paginas" className="mb-4 text-3xl font-bold text-[var(--color-ink)]">Eén pagina of meerdere pagina’s voor je ZZP-website?</h2>
            <p className="mb-6 max-w-3xl leading-relaxed text-[var(--color-muted)]">Kies de indeling op basis van de vragen van je klanten. Meer pagina’s helpen alleen als iedere pagina een eigen, nuttige uitleg heeft. We bespreken welke onderwerpen een aparte toelichting nodig hebben.</p>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Eén duidelijke dienst", text: "Een compacte pagina kan je aanbod, werkwijze, werkvoorbeelden en contact samenbrengen. Start bevat één pagina met maximaal zes secties.", href: "/diensten/website-laten-maken#wordpress-start", label: "Bekijk WordPress Start" },
                { title: "Verschillende diensten", text: "Hebben je diensten elk andere vragen of voorbeelden? Dan kan een eigen uitleg per dienst helpen. Business biedt ruimte voor maximaal drie inhoudspagina’s.", href: "/diensten/website-laten-maken#wordpress-business", label: "Bekijk WordPress Business" },
                { title: "Meer inhoud en lokale informatie", text: "Lokaal Compleet biedt maximaal vijf inhoudspagina’s en relevante lokale inhoud. We bepalen welke informatie bij je echte werkgebied en aanbod past.", href: "/diensten/website-laten-maken#wordpress-lokaal", label: "Bekijk Lokaal Compleet" },
              ].map((option) => <article key={option.href} className="rounded-xl border border-[var(--color-border)] p-6">
                <h3 className="text-xl font-semibold text-[var(--color-ink)]">{option.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{option.text}</p>
                <Link href={option.href} className="mt-4 inline-block font-semibold text-primary underline underline-offset-4">{option.label}</Link>
              </article>)}
            </div>
          </section>

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
                  Als zelfstandige wil je kunnen uitleggen wat je doet en laten zien waarom een klant bij jou past.
                  We beginnen met die informatie en spreken af welke pagina&apos;s en functies daarvoor nodig zijn.
                </p>
                <p>
                  Start kost €300 voor één WordPress-pagina met basis-SEO. Business kost €500 voor maximaal drie inhoudspagina’s; Lokaal Compleet €700 voor maximaal vijf. Alles exclusief btw.
                  Teksten, beelden, extra functies en het gewenste beheer bepalen de uiteindelijke offerte.
                  Kosten voor domein, hosting en eventueel onderhoud bespreken we naast de bouwprijs.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-3">Wat krijg je?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Een ontwerp dat past bij jouw bedrijf</span>
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
                    <span>Eigen beheer en uitleg volgens afspraak</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <section className="mt-16 rounded-2xl bg-[var(--color-surface)] p-8">
            <h2 className="text-2xl font-bold text-[var(--color-ink)]">Zo bereid je je eerste website voor</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">Verzamel je logo, contactgegevens, een beschrijving van je diensten en voorbeelden van je werk. Heb je al een domeinnaam of website? Neem die mee in het gesprek. Samen bepalen we wat we kunnen gebruiken en wat er nog nodig is.</p>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">Wil je later zelf teksten of foto’s wijzigen? Geef dat vooraf aan. Een WordPress-website kan daarvoor geschikt zijn. We spreken ook af wie updates en back-ups verzorgt.</p>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">Heb je al een site? Gebruik de <Link href="/blog/5-fouten-zzp-website" className="font-semibold text-primary underline underline-offset-4">vijf controles voor je bestaande ZZP-website</Link> om vast te stellen welke onderdelen je wilt verbeteren voordat je een nieuwe bouwopdracht bespreekt. Wil je het budget beperken, lees dan <Link href="/blog/zzp-website-5-tips-geld-besparen" className="font-semibold text-primary underline underline-offset-4">hoe je de scope en eigen voorbereiding op je budget afstemt</Link>.</p>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">Ik werk vanuit Zuilen. Lees meer over mijn aanpak voor{" "}<Link href="/" className="font-semibold text-primary underline underline-offset-4">webdesign in Utrecht</Link>, vergelijk de{" "}<Link href="/blog/wat-kost-website-laten-maken" className="font-semibold text-primary underline underline-offset-4">kosten van een website</Link> of gebruik de{" "}<Link href="/blog/zzp-website-laten-maken" className="font-semibold text-primary underline underline-offset-4">checklist voor je eerste ZZP-website</Link>.</p>
          </section>

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
        <WebsiteProjectProof projects={projects} />
        <div className="container-custom mt-8"><Link href="/contact" className="btn-primary">Bespreek jouw ZZP-website</Link></div>
      </main>
      <Footer />
    </>
  );
}
