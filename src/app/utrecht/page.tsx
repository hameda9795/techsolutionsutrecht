import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock, CheckCircle, Laptop, Globe, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Webdesign & Reparatie Utrecht | TechSolutionsUtrecht",
  description: "Website laten maken in Utrecht vanaf €250 of hulp bij laptop- en computerreparatie. Persoonlijk contact, duidelijke afspraken en lokale service.",
  keywords: [
    "website laten maken utrecht",
    "webdesign utrecht",
    "laptop reparatie utrecht",
    "computer reparatie utrecht",
    "wordpress website utrecht",
    "tech solutions utrecht",
    "website bouwer utrecht",
    "macbook reparatie utrecht",
  ],
  openGraph: {
    title: "Webdesign & Reparatie Utrecht | TechSolutionsUtrecht",
    description: "Website laten maken in Utrecht vanaf €250. Laptop & computer reparatie in Utrecht. Dé tech partner in Utrecht en omgeving.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/utrecht",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign & Reparatie Utrecht | TechSolutionsUtrecht",
    description: "Website laten maken in Utrecht vanaf €250. Laptop & computer reparatie in Utrecht. Dé tech partner in Utrecht en omgeving.",
  },
  alternates: {
    canonical: "https://techsolutionsutrecht.nl/utrecht",
  },
};

export default function UtrechtPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-ink)]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Uw Tech Partner in Utrecht</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-[var(--color-ink)]">Webdesign &</span>
              <br />
              <span className="text-[var(--color-primary)]">Tech Reparatie</span>
              <br />
              <span className="text-3xl sm:text-4xl text-[var(--color-muted)]">in Utrecht</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-8">
              Zoekt u een <strong className="text-[var(--color-ink)]">betrouwbare website bouwer</strong> of 
              <strong className="text-[var(--color-ink)]"> snelle laptop reparatie</strong> in Utrecht? 
              Wij zijn dé all-in-one tech partner voor ondernemers en particulieren in Utrecht en omgeving. 
              Websites vanaf <strong className="text-primary">€250</strong>, met een duidelijke offerte en planning.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary group">
                Gratis offerte aanvragen
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+31625518708" className="btn-ghost">
                <Phone className="w-5 h-5 mr-2" />
                Bel direct: 06-25518708
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Onze Diensten in <span className="text-[var(--color-primary)]">Utrecht</span>
            </h2>
            <p className="text-[var(--color-muted)] max-w-2xl mx-auto">
              Als uw lokale tech partner in Utrecht bieden wij zowel professionele webdesign 
              als snelle hardware reparaties. Alles onder één dak!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Website Service */}
            <div className="card-service">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Website Laten Maken Utrecht</h3>
              <p className="text-[var(--color-muted)] mb-6">
                Complete professionele websites voor ondernemers in Utrecht.
                Vanaf €250 en meestal €350–€650, met basis-SEO en volledige eigendom.
                Na de intake ontvang je een duidelijke planning.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Technologie passend bij je project",
                  "Webshops met WooCommerce",
                  "SEO-geoptimaliseerd",
                  "Mobiel-vriendelijk design",
                  "Contactformulier en WhatsApp",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--color-muted)]">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/diensten/website-laten-maken" className="text-primary font-semibold hover:underline">
                Meer over website laten maken →
              </Link>
            </div>

            {/* Repair Service */}
            <div className="card-service">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Laptop & Computer Reparatie Utrecht</h3>
              <p className="text-[var(--color-muted)] mb-6">
                Snelle reparatie van laptops, computers en MacBooks in Utrecht. 
                Meeste reparaties binnen 24 uur. Geen dataverlies, garantie inbegrepen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Laptop scherm vervangen",
                  "MacBook reparatie",
                  "Computer opschonen",
                  "Virus verwijderen",
                  "Data herstel",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[var(--color-muted)]">
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/reparaties" className="text-[var(--color-primary)] font-semibold hover:underline">
                Meer over reparaties →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Waarom TechSolutionsUtrecht in <span className="text-[var(--color-primary)]">Utrecht</span>?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Lokaal in Utrecht",
                desc: "Persoonlijk contact, geen callcenters. Wij kennen de Utrechtse markt.",
              },
              {
                icon: Clock,
                title: "Snelle Service",
                desc: "Heldere planning voor websites en snelle beoordeling van reparaties.",
              },
              {
                icon: Laptop,
                title: "Alles onder één dak",
                desc: "Uniek in Utrecht: zowel webdesign als hardware reparatie.",
              },
              {
                icon: CheckCircle,
                title: "12+ jaar ervaring",
                desc: "Betrouwbare partner voor al uw tech uitdagingen.",
              },
            ].map((item, i) => (
              <div key={i} className="card-service text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[var(--color-muted)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas in Utrecht */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Wij zijn actief in <span className="text-[var(--color-primary)]">Utrecht</span> en omgeving
            </h2>
            <p className="text-[var(--color-muted)] max-w-2xl mx-auto">
              Van Lombok tot Oudwijk, van Overvecht tot Tolsteeg. 
              Wij helpen klanten in heel Utrecht met hun tech vraagstukken.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Centrum",
              "Oost",
              "West",
              "Noord",
              "Overvecht",
              "Oudwijk",
              "Lombok",
              "Tolsteeg",
              "Wittevrouwen",
              "Voordorp",
              "Lunetten",
              "Zuid",
            ].map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-[var(--color-muted)]">Utrecht {area}</span>
              </div>
            ))}
          </div>

          <p className="text-[var(--color-muted)] max-w-3xl mx-auto mt-10 text-center leading-relaxed">
            Ook buiten de stad help ik ondernemers aan een sterke website. Bekijk bijvoorbeeld{" "}
            <Link href="/vleuten" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">website laten maken in Vleuten</Link>,{" "}
            <Link href="/de-meern" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">webdesign in De Meern</Link>,{" "}
            <Link href="/nieuwegein" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">een professionele website in Nieuwegein</Link>,{" "}
            <Link href="/veenendaal" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">website laten maken in Veenendaal</Link> of{" "}
            <Link href="/woerden" className="text-[var(--color-primary)] underline underline-offset-2 hover:no-underline">webdesign in Woerden</Link>.
          </p>
        </div>
      </section>

      {/* Local Business Context — Utrecht specific */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              Utrecht: een stad vol <span className="text-[var(--color-primary)]">kansen voor ondernemers</span>
            </h2>
            <div className="space-y-4 text-[var(--color-muted)] text-lg leading-relaxed">
              <p>
                Utrecht is niet voor niets één van de snelst groeiende steden van Nederland. 
                Met zijn centrale ligging, het grootste studentenpopulatie van het land en een 
                bloeiende startup-scene is de stad een magneet voor ondernemers. Van de creatieve 
                ondernemers in Lombok en Dichterswijk tot de zakelijke dienstverleners in Kanaleneiland 
                en de horeca in het centrum: elke wijk heeft zijn eigen karakter en zijn eigen publiek.
              </p>
              <p>
                Als tech partner in Utrecht begrijp ik die diversiteit. Ik weet dat een website voor 
                een café aan de Oudegracht een andere aanpak vraagt dan een zakelijke site voor een 
                adviseur in De Uithof. Daarom bouw ik geen standaardtemplates, maar websites die 
                aansluiten bij jouw doelgroep — of die nu zoekt vanuit Overvecht, Oudwijk of 
                Voordorp. Met lokale SEO zorg ik dat je gevonden wordt door de mensen die écht 
                in Utrecht wonen, werken en shoppen.
              </p>
              <p>
                En omdat ik zelf in Utrecht gevestigd ben, zijn de lijnen kort. Geen anonieme 
                helpdesks of externe freelancers, maar direct contact met de developer die aan 
                je project werkt. Of je nu een nieuwe website nodig hebt, je bestaande site 
                wilt laten optimaliseren, of je laptop snel gerepareerd wilt hebben: ik ben 
                er voor de Utrechtse ondernemer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Klaar voor uw nieuwe website of reparatie in <span className="text-[var(--color-primary)]">Utrecht</span>?
            </h2>
            <p className="text-[var(--color-muted)] text-lg mb-8">
              Vraag nu een gratis offerte aan. Wij reageren binnen 4 uur. 
              Geen verplichtingen, gewoon eerlijk advies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary group">
                Gratis offerte aanvragen
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
        </div>
      </section>
    </main>
  );
}
