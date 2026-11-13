import Link from "next/link";
import { getProjectPath, type ShowcaseProject } from "@/lib/projects-showcase";

// The homepage supplies this verified local project from the same CMS records
// used by /projecten. Do not substitute a demo or invent performance results.
export default function UtrechtProjectCase({ project }: { project: ShowcaseProject }) {
  const paragraphs = project.description.split(/\n\s*\n/).filter(Boolean);

  return (
    <section id="werk-in-utrecht" className="scroll-mt-28 py-16 sm:py-20" aria-labelledby="utrecht-project-heading">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">Werk in Utrecht</p>
        <h2 id="utrecht-project-heading" className="mt-3 max-w-3xl text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
          Een website voor twee Utrechtse praktijken
        </h2>
        <article className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <p className="text-sm text-[var(--color-muted)]">{project.sector}</p>
          <h3 className="mt-2 text-2xl font-bold text-[var(--color-ink)]">{project.title}</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-muted)]">{paragraphs[0] || project.tagline}</p>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {paragraphs[1] && <div>
              <h4 className="font-semibold text-[var(--color-ink)]">Duidelijke routes voor bezoekers</h4>
              <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{paragraphs[1]}</p>
            </div>}
            {paragraphs[2] && <div>
              <h4 className="font-semibold text-[var(--color-ink)]">Informatie op mobiel en per vestiging</h4>
              <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{paragraphs[2]}</p>
            </div>}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4">
            <Link href={getProjectPath(project)} className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Bekijk het project en mijn werkzaamheden</Link>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">Bekijk de website<span className="sr-only"> (nieuw tabblad)</span></a>
          </div>
        </article>
        <p className="mt-6 max-w-3xl leading-relaxed text-[var(--color-muted)]">
          Dit project heeft een eigen omvang. Voor jouw bedrijf spreken we de pagina&apos;s en functies apart af.
          Wil je zelf je website kunnen bijwerken? Bekijk de <Link href="/diensten/website-laten-maken" className="font-semibold text-[var(--color-primary)] underline underline-offset-4">WordPress-aanpak en pakketten</Link>.
        </p>
      </div>
    </section>
  );
}
