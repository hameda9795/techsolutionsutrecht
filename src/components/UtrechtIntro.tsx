import Link from "next/link";

export default function UtrechtIntro() {
  return (
    <section className="bg-[var(--color-surface)] py-20" aria-labelledby="utrecht-heading">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
          Vanuit Zuilen, voor Utrecht
        </span>
        <h2 id="utrecht-heading" className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
          Webdesign in Utrecht, vanuit Zuilen
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-muted)]">
          TechSolutionsUtrecht is gevestigd aan de Sint-Ludgerusstraat in Zuilen.
          Zoek je een websitebouwer in Utrecht? Ik werk met zzp&apos;ers en kleine bedrijven aan hun website.
          Je bespreekt je wensen rechtstreeks met mij, van de eerste opzet tot de oplevering.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-muted)]">
          Wil je kennismaken? Neem contact op via telefoon of WhatsApp.
          Een bezoek is mogelijk op afspraak. We bespreken wat je website moet
          laten zien en welke pagina&apos;s en functies daarvoor nodig zijn.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
          <Link href="/contact" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">
            Bespreek je website
          </Link>
          <Link href="/projecten" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">
            Bekijk websites die ik heb gemaakt
          </Link>
        </div>
      </div>
    </section>
  );
}
