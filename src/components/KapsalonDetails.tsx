import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getProjectPath, type ShowcaseProject } from "@/lib/projects-showcase";

const bookingOptions = [
  {
    title: "Contactaanvraag",
    action: "Een bezoeker stuurt een bericht of vult een formulier in.",
    agreement: "Jij controleert de agenda en bevestigt de afspraak. Het verzonden bericht reserveert nog geen tijdslot.",
  },
  {
    title: "Link naar je boekingsdienst",
    action: "Een duidelijke knop opent je bestaande boekingspagina, bijvoorbeeld bij Treatwell.",
    agreement: "De agenda en bevestiging blijven bij die dienst. We spreken de plaatsing van de link af; het account en eventuele abonnement betaal je apart.",
  },
  {
    title: "Widget of agenda-integratie",
    action: "Een boekingsonderdeel wordt in de website getoond of technisch gekoppeld.",
    agreement: "Eerst beoordelen we de mogelijkheden van de aanbieder, het testen en de extra kosten. Deze uitvoering zit niet standaard in een WordPress-pakket.",
  },
];

export default function KapsalonDetails({ project }: { project: ShowcaseProject | null }) {
  return <>
    {project && <section id="salonvoorbeeld" aria-labelledby="salonvoorbeeld-title" className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-14 sm:py-16 scroll-mt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(240px,340px)]">
        <div className="min-w-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">Een echte salonwebsite</p>
          <h2 id="salonvoorbeeld-title" className="text-3xl font-bold text-[var(--color-ink)]">{project.title}: een eigen website, boeken via Treatwell</h2>
          <p className="mt-5 leading-relaxed text-[var(--color-muted)]">Voor {project.title} bouwde ik een responsive website die de salon en behandelingen presenteert. Bezoekers bekijken het aanbod en klikken door naar Treatwell om hun afspraak te regelen.</p>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-[var(--color-muted)]">
            <li>Een presentatie van de salon en de behandelingen.</li>
            <li>Een herkenbare route van de eigen website naar de externe boekingspagina.</li>
            <li>Contact en boekingsinformatie op een website die ook op mobiel werkt.</li>
          </ul>
          <p className="mt-5 leading-relaxed text-[var(--color-muted)]">Dit voorbeeld laat zien hoe een eigen website naast een bestaande boekingsdienst kan werken. De agenda draait bij Treatwell; hier is geen eigen boekingssysteem gebouwd. Voor jouw salon bepalen we welke route en welk beheer passen.</p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4">
            <Link href={getProjectPath(project)} className="inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] underline underline-offset-4">Bekijk het salonproject {project.title}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] underline underline-offset-4">Bekijk de salonwebsite<ArrowUpRight className="h-4 w-4" aria-hidden="true" /><span className="sr-only"> (nieuw tabblad)</span></a>
          </div>
        </div>
        {project.image && <figure className="mx-auto w-full max-w-xs">
          <Image src={project.image} alt={`Projectafbeelding van de salonwebsite van ${project.title}`} width={360} height={640} sizes="(max-width: 1024px) 320px, 340px" className="h-auto max-h-[32rem] w-full rounded-xl object-contain" />
          <figcaption className="mt-3 text-sm text-[var(--color-muted)]">Uit mijn portfolio · {project.title}</figcaption>
        </figure>}
      </div>
    </section>}

    <section id="afspraakroute" aria-labelledby="afspraakroute-title" className="py-14 sm:py-16 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="afspraakroute-title" className="max-w-3xl text-3xl font-bold text-[var(--color-ink)]">Hoe wil je dat klanten een afspraak maken?</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-[var(--color-muted)]">Kies eerst waar je beschikbaarheid wordt bijgehouden en wie een afspraak bevestigt. Daarna bepalen we welke knop, welk formulier of welke koppeling de website nodig heeft.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {bookingOptions.map((option, index) => <article key={option.title} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <span className="text-sm font-semibold text-[var(--color-primary)]">Keuze {index + 1}</span>
            <h3 className="mt-2 text-xl font-bold text-[var(--color-ink)]">{option.title}</h3>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{option.action}</p>
            <p className="mt-4 border-t border-[var(--color-border)] pt-4 text-sm leading-relaxed text-[var(--color-muted)]">{option.agreement}</p>
          </article>)}
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed text-[var(--color-muted)]">Voor oplevering controleren we de afgesproken route op mobiel en desktop: staat de juiste behandeling of bestemming erbij, werkt de knop en is duidelijk of de klant nog op bevestiging moet wachten? Een eventuele testafspraak wordt vooraf met je afgestemd.</p>
      </div>
    </section>
  </>;
}
