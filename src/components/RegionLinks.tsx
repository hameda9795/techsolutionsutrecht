import Link from "next/link";
import { MapPin } from "lucide-react";
import { cities } from "@/lib/cities";

/**
 * Contextueel blok met links naar alle stadspagina's.
 *
 * Waarom dit bestaat: alle pagina's van de site kregen exact evenveel interne
 * links (49-50), omdat alles alleen via het menu en de footer gelinkt werd. Voor
 * Google zijn dat boilerplate-links die op elke pagina staan en daardoor
 * nauwelijks wegen — er was geen enkel signaal welke pagina belangrijk is.
 *
 * Binnen de content gemeten was het beeld scherper: de stadspagina's kregen elk
 * maar 2 tot 4 contextuele links, en vrijwel allemaal vanaf elkaar. De homepage
 * — verreweg de sterkste pagina — linkte naar geen enkele stadspagina.
 *
 * Dit blok zet daar echte links in de content tegenover, met beschrijvende
 * ankertekst ("Website laten maken in Culemborg") in plaats van alleen de
 * plaatsnaam. Volgorde is bewust: de plaatsen die het dichtst bij een top
 * 3-positie staan, staan bovenaan.
 */

type RegionLinksProps = {
  /** Sluit de eigen pagina uit, zodat een stadspagina niet naar zichzelf linkt. */
  excludeSlug?: string;
  heading?: string;
  intro?: string;
};

export default function RegionLinks({
  excludeSlug,
  heading = "Website laten maken in de regio Utrecht",
  intro = "Ik werk voor ondernemers in Utrecht en de omliggende plaatsen. Per plaats lees je wat ik daar doe, wat het kost en hoe snel je online staat.",
}: RegionLinksProps) {
  const list = excludeSlug ? cities.filter((c) => c.slug !== excludeSlug) : cities;

  return (
    <section className="py-20 bg-[var(--color-surface)]" aria-labelledby="regio-heading">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-wider">
          Werkgebied
        </span>
        <h2
          id="regio-heading"
          className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-ink)]"
        >
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)]">{intro}</p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/${city.slug}`}
                className="group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-colors hover:border-[var(--color-primary)]"
              >
                <span className="flex items-center gap-2 font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">
                  <MapPin className="h-4 w-4 flex-none" aria-hidden="true" />
                  Website laten maken in {city.name}
                </span>
                <span className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
                  {city.blurb}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-[var(--color-muted)]">
          Staat jouw plaats er niet bij? Ik werk in de hele provincie Utrecht en het
          Rivierenland —{" "}
          <Link
            href="/contact"
            className="font-medium text-[var(--color-primary)] underline underline-offset-4"
          >
            vraag gerust een offerte aan
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
