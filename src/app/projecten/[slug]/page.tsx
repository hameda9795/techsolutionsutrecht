import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import { getShowcaseProjectById } from "@/lib/showcase-db";
import { getProjectPath, getProjectService, projectIdFromSlug, projectTypeLabels } from "@/lib/projects-showcase";
import { breadcrumbSchema } from "@/lib/schema";

export const dynamic = "force-dynamic";
const SITE = "https://techsolutionsutrecht.nl";
type Props = { params: Promise<{ slug: string }> };

async function loadProject(slug: string) {
  const id = projectIdFromSlug(slug);
  if (!id) notFound();
  const project = await getShowcaseProjectById(id);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await loadProject((await params).slug);
  const title = `${project.title}: ${projectTypeLabels[project.type]} | TechSolutions`;
  return {
    title,
    description: project.tagline,
    alternates: { canonical: `${SITE}${getProjectPath(project)}` },
    openGraph: {
      title, description: project.tagline, type: "website", locale: "nl_NL",
      url: `${SITE}${getProjectPath(project)}`,
      ...(project.image ? { images: [{ url: project.image, alt: project.title }] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await loadProject((await params).slug);
  const pathname = getProjectPath(project);
  // The numeric ID stays stable. Renaming a project redirects the old title URL.
  if (`/projecten/${(await params).slug}` !== pathname) permanentRedirect(pathname);
  const service = getProjectService(project);
  const contactHref = `/contact?${new URLSearchParams({ dienst: service.subject }).toString()}`;
  const canonical = `${SITE}${pathname}`;
  const projectSchema = {
    "@context": "https://schema.org", "@type": "WebPage", "@id": canonical,
    name: project.title, description: project.tagline, url: canonical,
    isPartOf: { "@id": `${SITE}/#website` },
    mainEntity: {
      "@type": "CreativeWork", "@id": `${canonical}#project`, name: project.title,
      description: project.description, url: canonical,
      ...(project.image ? { image: new URL(project.image, SITE).href } : {}),
      creator: { "@id": `${SITE}/#business` },
      ...(project.liveUrl ? { subjectOf: { "@type": "WebSite", url: new URL(project.liveUrl, SITE).href } } : {}),
    },
  };
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE }, { name: "Projecten", url: `${SITE}/projecten` },
    { name: project.title, url: canonical },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([projectSchema, breadcrumb]).replace(/</g, "\\u003c") }} />
      <main className="max-w-6xl mx-auto px-5 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <nav aria-label="Broodkruimel" className="text-sm text-[var(--color-muted)] mb-8">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/">Home</Link></li><li aria-hidden="true">/</li>
            <li><Link href="/projecten">Projecten</Link></li><li aria-hidden="true">/</li>
            <li aria-current="page">{project.title}</li>
          </ol>
        </nav>
        <Link href="/projecten" className="inline-flex items-center gap-2 text-primary font-semibold mb-8"><ArrowLeft className="w-4 h-4" />Alle projecten</Link>
        <article>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] gap-10 lg:gap-16 items-start">
            <div className="min-w-0">
              <p className="text-primary font-semibold mb-3">{projectTypeLabels[project.type]} · {project.sector}</p>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight [overflow-wrap:anywhere]">{project.title}</h1>
              <p className="text-lg sm:text-xl leading-relaxed text-[var(--color-muted)] mt-5">{project.tagline}</p>
              <p className="text-sm text-[var(--color-muted)] mt-4">Projectjaar: {project.year}</p>
              <div className="flex flex-wrap gap-3 mt-7">
                <Link href={contactHref} className="btn-primary">Bespreek jouw website</Link>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary py-3">Bekijk de website <ArrowUpRight className="w-4 h-4" /><span className="sr-only"> (nieuw tabblad)</span></a>}
              </div>
              <section className="mt-10 sm:mt-12" aria-labelledby="project-verhaal">
                <h2 id="project-verhaal" className="text-2xl font-bold mb-5">De website en mijn werk</h2>
                <div className="space-y-5 text-[var(--color-muted)] leading-relaxed max-w-[70ch]">
                  {project.description.split(/\n\s*\n/).filter(Boolean).map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                </div>
              </section>
            </div>
            {project.image && (
              <figure className="min-w-0 max-w-sm w-full mx-auto">
                <div className="relative aspect-[9/16] bg-[var(--color-surface)] rounded-2xl overflow-hidden">
                  <Image src={project.image} alt={`Projectafbeelding van de website van ${project.title}`} fill sizes="(max-width: 1024px) 90vw, 360px" className="object-contain" priority />
                </div>
                <figcaption className="text-sm text-[var(--color-muted)] mt-3">Projectafbeelding · {project.title}</figcaption>
              </figure>
            )}
          </div>
          <section className="mt-12 sm:mt-16 border-t border-[var(--color-border)] pt-8" aria-labelledby="project-functies">
            <h2 id="project-functies" className="text-2xl font-bold mb-5">Wat er is gebouwd</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 list-disc pl-5 text-[var(--color-muted)] leading-relaxed">
              {project.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
            </ul>
            {project.stack.length > 0 && <details className="mt-8 rounded-xl bg-[var(--color-surface)] p-5">
              <summary className="font-semibold cursor-pointer">Techniek en uitvoering</summary>
              <p className="mt-3 text-[var(--color-muted)]">{project.stack.join(" · ")}</p>
            </details>}
          </section>
        </article>
        <section className="mt-12 sm:mt-16 rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8" aria-labelledby="project-volgende-stap">
          <h2 id="project-volgende-stap" className="text-2xl font-bold">Welke aanpak past bij jouw bedrijf?</h2>
          <p className="mt-4 max-w-2xl text-[var(--color-muted)] leading-relaxed">Dit voorbeeld laat een specifieke uitvoering zien. Voor jouw website spreken we het ontwerp, de pagina’s en de functies af. De pakketten helpen je de mogelijkheden en kosten te vergelijken.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-4 mt-6">
            <Link href={service.href} className="font-semibold text-primary underline underline-offset-4">{service.label}</Link>
            {/kapsalon|kapper/i.test(project.sector) && <Link href="/website-laten-maken-kapper" className="font-semibold text-primary underline underline-offset-4">Website laten maken voor je kapsalon</Link>}
            <Link href="/prijzen" className="font-semibold text-primary underline underline-offset-4">Pakketten en prijzen</Link>
            <Link href={contactHref} className="font-semibold text-primary underline underline-offset-4">Bespreek je plannen</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
