import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const menuExample = [
  { category: "Vooraf", name: "Tomatensoep", detail: "Geroosterde tomaat, basilicum en brood", price: "€8,50" },
  { category: "Hoofdgerecht", name: "Groenten uit de oven", detail: "Seizoensgroenten, aardappel en kruidensaus", price: "€19,50" },
  { category: "Dessert", name: "Chocolademousse", detail: "Pure chocolade en rood fruit", price: "€7,50" },
];

const reservationOptions = [
  {
    title: "Reserveringsaanvraag",
    description: "Een gast neemt contact op via een formulier, telefoon of WhatsApp. Jij controleert de beschikbaarheid en bevestigt de tafel.",
    agreement: "De gast ziet dat een aanvraag nog geen bevestigde reservering is. De contactmogelijkheid en velden spreken we vooraf af.",
  },
  {
    title: "Link naar je reserveringsdienst",
    description: "Een knop opent de boekingspagina van je bestaande aanbieder. De beschikbaarheid en bevestiging worden daar geregeld.",
    agreement: "We controleren de bestemming en de terugweg naar je website. Het account en eventuele abonnementskosten blijven apart.",
  },
  {
    title: "Reserveringswidget of koppeling",
    description: "Een reserveringsonderdeel staat in je website of wordt technisch aangesloten op een ondersteund systeem.",
    agreement: "Eerst controleren we de mogelijkheden van je aanbieder. Inbouw, testen, licenties en eventuele aanbetalingen krijgen een aparte offerte.",
  },
];

export default function RestaurantDetails() {
  return <>
    <section id="menukaart" aria-labelledby="menukaart-title" className="scroll-mt-28 border-y border-[var(--color-border)] bg-[var(--color-surface)] py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">Voor je restaurant, café of lunchroom</p>
          <h2 id="menukaart-title" className="text-3xl font-bold text-[var(--color-ink)]">Een online menukaart die je kunt lezen én bijwerken</h2>
          <p className="mt-5 leading-relaxed text-[var(--color-muted)]">Laat je kaart als tekst op de pagina zien: per categorie een gerecht, een korte omschrijving en de prijs. Zo kunnen gasten op mobiel je aanbod bekijken zonder in een grote afbeelding te hoeven zoomen.</p>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-[var(--color-muted)]">
            <li>Lunch, diner en dranken krijgen een herkenbare indeling.</li>
            <li>Je spreekt af welke prijzen en teksten je zelf in WordPress bijhoudt.</li>
            <li>Een downloadbare PDF kan aanvullend, naast de leesbare kaart.</li>
            <li>Je eigen foto’s, openingstijden en adres maken de presentatie compleet.</li>
          </ul>
          <p className="mt-5 leading-relaxed text-[var(--color-muted)]">Een horeca website laten maken begint hier met jouw zaak: welke kaart toon je, wat wil een gast weten en waar gaat de reserveringsknop naartoe? Extra menu’s en taalversies nemen we vooraf mee in de omvang van de opdracht.</p>
          <Link href="#reserveren" className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] underline underline-offset-4">Bekijk de reserveringskeuzes<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <figure className="min-w-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]">
          <Image src="/images/restaurant-website-laten-maken-hero.webp" alt="Illustratieve sfeerimpressie van een restaurant met een online menukaart op een tablet" width={1344} height={768} sizes="(max-width: 1024px) 100vw, 560px" className="h-auto max-h-56 w-full object-cover" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)]">Voorbeeldopzet · menukaart</p>
            <dl className="mt-5 space-y-5">
              {menuExample.map(item => <div key={item.name} className="border-b border-[var(--color-border)] pb-5 last:border-0 last:pb-0">
                <dt><span className="block text-xs uppercase tracking-wide text-[var(--color-muted)]">{item.category}</span><span className="mt-1 block text-lg font-semibold text-[var(--color-ink)]">{item.name}</span></dt>
                <dd className="mt-1 flex items-start justify-between gap-4 text-sm leading-relaxed"><span className="text-[var(--color-muted)]">{item.detail}</span><span className="shrink-0 font-semibold text-[var(--color-ink)]">{item.price}</span></dd>
              </div>)}
            </dl>
          </div>
          <figcaption className="border-t border-[var(--color-border)] px-6 py-4 text-xs leading-relaxed text-[var(--color-muted)] sm:px-8">Fictieve gerechten en voorbeeldprijzen. Dit is een ontwerpvoorbeeld, geen klantproject of werkend reserveringssysteem.</figcaption>
        </figure>
      </div>
    </section>

    <section id="reserveren" aria-labelledby="reserveren-title" className="scroll-mt-28 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="reserveren-title" className="max-w-3xl text-3xl font-bold text-[var(--color-ink)]">Online reserveren: welke route past bij je restaurant?</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-[var(--color-muted)]">Bepaal eerst waar je de beschikbaarheid bijhoudt en wanneer een tafel is bevestigd. Daarna kiezen we de knop, het formulier of de koppeling voor de website.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reservationOptions.map((option, index) => <article key={option.title} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-sm font-semibold text-[var(--color-primary)]">Keuze {index + 1}</p>
            <h3 className="mt-2 text-xl font-bold text-[var(--color-ink)]">{option.title}</h3>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{option.description}</p>
            <p className="mt-4 border-t border-[var(--color-border)] pt-4 text-sm leading-relaxed text-[var(--color-muted)]">{option.agreement}</p>
          </article>)}
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed text-[var(--color-muted)]">Bij oplevering controleren we de afgesproken reserveringsroute op mobiel en desktop. Daarbij bekijken we de bestemming, de melding over bevestiging en wat de gast doet bij een wijziging. Een eventuele testreservering stemmen we vooraf met je af.</p>
        <div className="mt-8 max-w-3xl rounded-xl border border-[var(--color-border)] p-6">
          <h3 className="text-xl font-bold text-[var(--color-ink)]">Ook online bestellen voor afhalen of bezorgen?</h3>
          <p className="mt-3 leading-relaxed text-[var(--color-muted)]">Een menukaart tonen en een bestelling afrekenen vragen om verschillende functies. Voor een eigen bestelomgeving bespreken we onder meer producten, afhaaltijden, betaalprovider en de verwerking in je zaak. Dit zit niet standaard in de websitebouw.</p>
          <Link href="/diensten/webshop" className="mt-4 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] underline underline-offset-4">Bekijk de mogelijkheden voor een WooCommerce-webshop<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  </>;
}
