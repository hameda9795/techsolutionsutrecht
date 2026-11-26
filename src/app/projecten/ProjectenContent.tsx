"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import { projectTypeLabels, getInitials, getProjectPath, type ShowcaseProject, type ProjectType } from "@/lib/projects-showcase";

type Filter = "all" | ProjectType;
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Alles" }, { id: "website", label: "Websites" },
  { id: "webshop", label: "Webshops" }, { id: "webapp", label: "Webapplicaties" }, { id: "tool", label: "Tools" },
];

export default function ProjectenContent({ projects }: { projects: ShowcaseProject[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const ordered = useMemo(() => [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))), [projects]);
  const available = filters.filter(f => f.id === "all" || projects.some(p => p.type === f.id));
  const effectiveFilter = available.some(f => f.id === filter) ? filter : "all";
  const visible = effectiveFilter === "all" ? ordered : ordered.filter(p => p.type === effectiveFilter);
  return (
    <>
      <main className="pb-16 sm:pb-24">
        <section className="max-w-6xl mx-auto px-5 sm:px-6 pt-10 pb-10 sm:pt-16 sm:pb-12">
          <p className="font-semibold text-primary mb-4">Mijn werk</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--color-ink)] tracking-tight max-w-3xl">Websites die ik heb gebouwd</h1>
          <p className="text-[var(--color-muted)] text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
            Bekijk voorbeelden van WordPress-websites en maatwerkwebsites die ik voor ondernemers heb gebouwd.
            Lees per project wat er is gemaakt en hoe bezoekers contact opnemen, een offerte aanvragen of boeken.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-7 text-sm text-[var(--color-muted)]">
            <span><strong className="text-[var(--color-ink)]">{projects.length}</strong> projecten in het portfolio</span>
            <span>WordPress en maatwerk</span><span>Gebouwd vanuit Utrecht-Zuilen</span>
          </div>
        </section>
        {available.length > 2 && (
          <nav aria-label="Projectcategorieën" className="max-w-6xl mx-auto px-5 sm:px-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {available.map(f => (
                <button key={f.id} onClick={() => setFilter(f.id)} aria-pressed={effectiveFilter === f.id}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${effectiveFilter === f.id ? "bg-primary text-white" : "bg-[var(--color-surface)] text-[var(--color-ink)]"}`}>
                  {f.label} ({f.id === "all" ? projects.length : projects.filter(p => p.type === f.id).length})
                </button>
              ))}
            </div>
          </nav>
        )}
        <section aria-labelledby="projectoverzicht" className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 id="projectoverzicht" className="sr-only">Projectoverzicht</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visible.map(project => (
              <article key={project.id} className={`min-w-0 rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] ${project.featured && effectiveFilter === "all" ? "md:col-span-2 md:flex" : "flex flex-col"}`}>
                <Link href={getProjectPath(project)} aria-label={`Bekijk het project ${project.title}`}
                  className={`block bg-[var(--color-surface)] ${project.featured && effectiveFilter === "all" ? "md:w-2/5 md:shrink-0" : ""}`}>
                  <div className="relative h-[360px] sm:h-[420px]">
                    {project.image ? (
                      <Image src={project.image} alt={`Volledige projectafbeelding van ${project.title}`} fill
                        sizes="(max-width: 768px) 100vw, 450px" className="object-contain p-4" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-primary">{getInitials(project.title)}</div>
                    )}
                  </div>
                </Link>
                <div className="flex flex-col justify-center flex-1 min-w-0 p-6 sm:p-8">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--color-muted)] mb-3">
                    <span>{projectTypeLabels[project.type]}</span><span>{project.sector}</span><span>{project.year}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    <Link href={getProjectPath(project)} className="hover:text-primary">{project.title}</Link>
                  </h3>
                  <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{project.tagline}</p>
                  {project.highlights.length > 0 && (
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                      {project.highlights.slice(0, 3).map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  )}
                  <div className="flex flex-wrap items-center gap-4 mt-6">
                    <Link href={getProjectPath(project)} className="inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4">
                      Bekijk het project <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-[var(--color-muted)] hover:text-primary">
                        Website openen <ArrowUpRight className="w-4 h-4" /><span className="sr-only"> (nieuw tabblad)</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          {!visible.length && <p className="py-12 text-[var(--color-muted)]">Er zijn nog geen projecten gepubliceerd.</p>}
        </section>
        <section className="max-w-6xl mx-auto px-5 sm:px-6 mt-14 sm:mt-20">
          <div className="rounded-2xl bg-primary px-6 py-10 sm:px-10 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold">Een website voor jouw bedrijf?</h2>
            <p className="mt-4 max-w-2xl text-white/90 leading-relaxed">Vertel welke functies je nodig hebt. Ik help je de passende aanpak kiezen en leg het werk en de prijs vooraf vast.</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/contact?dienst=Website%20laten%20maken" className="inline-flex items-center gap-2 bg-white text-primary rounded-xl px-5 py-3 font-semibold">Bespreek je website <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/prijzen" className="inline-flex items-center px-5 py-3 border border-white/60 rounded-xl font-semibold">Vergelijk de pakketten</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
