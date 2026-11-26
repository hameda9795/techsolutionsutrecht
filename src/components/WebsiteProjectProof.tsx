import Link from "next/link";
import { getProjectPath, type ShowcaseProject } from "@/lib/projects-showcase";

export default function WebsiteProjectProof({ projects }: { projects: ShowcaseProject[] }) {
  const websites = projects.filter((project) => project.type === "website" && project.highlights.length > 0).slice(0, 3);
  if (!websites.length) return null;

  return (
    <section className="py-16 sm:py-20" aria-labelledby="website-voorbeelden">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="website-voorbeelden" className="text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">Bekijk wat er in een website zit</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-muted)]">Een ontwerp zegt meer als je ook ziet wat de website doet. Deze voorbeelden uit mijn portfolio laten verschillende functies en keuzes zien.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {websites.map((project) => (
            <article key={project.id} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="text-sm text-[var(--color-muted)]">{project.sector}</p>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-ink)]">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{project.tagline}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-ink)]">
                {project.highlights.slice(0, 3).map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <Link href={getProjectPath(project)} className="mt-5 inline-block font-semibold text-[var(--color-primary)] underline underline-offset-4">Bekijk de website van {project.title}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
