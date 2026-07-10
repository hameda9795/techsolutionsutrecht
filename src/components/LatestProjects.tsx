import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projectTypeLabels, getInitials } from "@/lib/projects-showcase";
import { getAllShowcaseProjects } from "@/lib/showcase-db";

/**
 * Strook met de nieuwste projecten als volledige beeldkaarten (geen story-ring).
 * De projectafbeeldingen (9:16) worden compleet getoond, niet bijgesneden.
 * Mobiel 3 per rij, desktop 5 per rij.
 * Leest live uit de database, zodat admin-wijzigingen direct verschijnen.
 */
export default async function LatestProjects() {
  const all = await getAllShowcaseProjects();
  const latest = all.slice(0, 5);

  if (latest.length === 0) return null;

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 pt-10 sm:pt-14 lg:pt-16 pb-4 sm:pb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--color-muted)] uppercase tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          Recent opgeleverd
        </span>
        <Link
          href="/projecten"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
        >
          Alles bekijken
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Eén rij: mobiel 3 zichtbaar, desktop 5 zichtbaar */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
        {latest.map((project, i) => (
          <Link
            key={project.id}
            href="/projecten"
            className={`group flex flex-col gap-2 ${i >= 3 ? "hidden lg:flex" : ""}`}
          >
            {/* Volledige projectafbeelding (9:16), niet bijgesneden */}
            <span className="relative block aspect-[9/16] w-full overflow-hidden transition-transform group-hover:-translate-y-1">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              ) : (
                <span
                  className="absolute inset-0 bg-[var(--color-primary)] flex items-center justify-center"
                >
                  <span className="text-2xl sm:text-3xl font-black text-white/90">
                    {getInitials(project.title)}
                  </span>
                </span>
              )}
            </span>

            {/* Label */}
            <span className="block w-full text-center">
              <span className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                {projectTypeLabels[project.type]}
              </span>
              <span className="block text-[11px] sm:text-sm font-bold text-[var(--color-ink)] leading-tight line-clamp-2">
                {project.title}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
