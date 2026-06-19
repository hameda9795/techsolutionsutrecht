import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projectTypeLabels, getInitials } from "@/lib/projects-showcase";
import { getAllShowcaseProjects } from "@/lib/showcase-db";

/**
 * Story-strook met de 3 nieuwste projecten.
 * Alle 3 staan altijd in één rij (geen slide), mobiel-eerst.
 * Leest live uit de database, zodat admin-wijzigingen direct verschijnen.
 */
export default async function LatestProjects() {
  const all = await getAllShowcaseProjects();
  const latest = all.slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 pt-4 sm:pt-6">
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#0f766e] animate-pulse" />
          Recent opgeleverd
        </span>
        <Link
          href="/projecten"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#0f766e] hover:text-[#0d9488] transition-colors"
        >
          Alles bekijken
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Alle 3 altijd in één rij — story-stijl */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {latest.map((project) => (
          <Link
            key={project.id}
            href="/projecten"
            className="group flex flex-col items-center gap-2 text-center"
          >
            {/* Story-ring */}
            <span className="relative inline-flex p-[3px] rounded-full bg-gradient-to-tr from-[#0f766e] via-[#14b8a6] to-[#0d9488] transition-transform group-hover:scale-105 group-active:scale-95">
              <span className="block rounded-full p-[2.5px] bg-white">
                <span className="relative block w-[72px] h-[72px] sm:w-24 sm:h-24 rounded-full overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <span
                      className={`absolute inset-0 bg-gradient-to-br ${project.accent} flex items-center justify-center`}
                    >
                      <span className="text-xl sm:text-2xl font-black text-white/90">
                        {getInitials(project.title)}
                      </span>
                    </span>
                  )}
                </span>
              </span>
            </span>

            {/* Label */}
            <span className="block w-full">
              <span className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide text-[#0f766e]">
                {projectTypeLabels[project.type]}
              </span>
              <span className="block text-[11px] sm:text-sm font-bold text-slate-900 leading-tight line-clamp-2">
                {project.title}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
