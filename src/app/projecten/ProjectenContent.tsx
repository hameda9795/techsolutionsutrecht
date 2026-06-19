"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  X,
  Eye,
  Layers,
  Calendar,
  Check,
  Sparkles,
  Code2,
} from "lucide-react";
import {
  projectTypeLabels,
  getInitials,
  type ShowcaseProject,
  type ProjectType,
} from "@/lib/projects-showcase";

type Filter = "all" | ProjectType;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Alles" },
  { id: "website", label: "Websites" },
  { id: "webshop", label: "Webshops" },
  { id: "webapp", label: "Webapplicaties" },
  { id: "tool", label: "Tools" },
];

/* ---------- Browser-mockup preview (gedeeld door kaart & modal) ---------- */
function ProjectPreview({
  project,
  rounded = "rounded-t-2xl",
}: {
  project: ShowcaseProject;
  rounded?: string;
}) {
  const host =
    project.liveUrl.startsWith("http")
      ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
      : "preview.techsolutionsutrecht.nl";

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${rounded}`}>
      {/* Browser-balk */}
      <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/90 border-b border-white/10">
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </span>
        <span className="flex-1 mx-1 px-2.5 py-1 rounded-md bg-slate-900/70 text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">
          {host}
        </span>
      </div>

      {/* Inhoud: screenshot of gradient met initialen */}
      <div className="relative aspect-[16/10]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.accent} flex items-center justify-center`}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <span className="relative text-5xl sm:text-6xl font-black text-white/90 tracking-tight transition-transform duration-700 group-hover:scale-110">
              {getInitials(project.title)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Projectkaart ---------- */
function ProjectCard({
  project,
  onOpen,
  featured,
}: {
  project: ShowcaseProject;
  onOpen: () => void;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div className={featured ? "md:w-3/5" : ""}>
        <ProjectPreview
          project={project}
          rounded={featured ? "md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl" : "rounded-t-2xl"}
        />
      </div>

      <div className={`flex flex-col flex-1 p-5 sm:p-6 ${featured ? "md:justify-center" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0f766e]/10 text-[#0f766e] text-[11px] font-semibold uppercase tracking-wide">
            {projectTypeLabels[project.type]}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-semibold">
              <Sparkles className="w-3 h-3" /> Uitgelicht
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium ml-auto">
            <Calendar className="w-3 h-3" /> {project.year}
          </span>
        </div>

        <h3 className={`font-bold text-slate-900 ${featured ? "text-xl sm:text-2xl" : "text-lg"}`}>
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{project.tagline}</p>

        {/* Stack-chips */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-5 pt-5 border-t border-slate-100">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors active:scale-95"
          >
            <Eye className="w-4 h-4" /> Details
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-[#0f766e] hover:text-[#0f766e] transition-colors active:scale-95"
            >
              Live <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- Quick-view modal ---------- */
function ProjectModal({
  project,
  onClose,
}: {
  project: ShowcaseProject;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-[fadeIn_.2s_ease]"
        onClick={onClose}
      />
      <div className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl">
        {/* Sluitknop */}
        <button
          onClick={onClose}
          aria-label="Sluiten"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 backdrop-blur text-slate-700 hover:bg-white shadow-md active:scale-90 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mobiele sleep-indicator */}
        <div className="sm:hidden flex justify-center pt-2.5">
          <span className="h-1.5 w-10 rounded-full bg-slate-300" />
        </div>

        <div className="group">
          <ProjectPreview project={project} rounded="rounded-none sm:rounded-t-3xl" />
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0f766e]/10 text-[#0f766e] text-[11px] font-semibold uppercase tracking-wide">
              {projectTypeLabels[project.type]}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
              <Layers className="w-3 h-3" /> {project.sector}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
          <p className="text-slate-600 mt-2 leading-relaxed">{project.description}</p>

          <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 mt-6 mb-3">
            <Check className="w-4 h-4 text-[#0f766e]" /> Belangrijkste features
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f766e] flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 mt-6 mb-3">
            <Code2 className="w-4 h-4 text-[#0f766e]" /> Techniek
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0f766e] text-white font-semibold hover:bg-[#0d9488] transition-colors active:scale-95"
              >
                Bekijk live project <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-[#0f766e] hover:text-[#0f766e] transition-colors active:scale-95"
            >
              Zoiets ook? Neem contact op
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Hoofdcomponent ---------- */
export default function ProjectenContent({
  projects,
}: {
  projects: ShowcaseProject[];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<ShowcaseProject | null>(null);

  // Uitgelichte projecten eerst tonen.
  const ordered = useMemo(
    () =>
      [...projects].sort(
        (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false)
      ),
    [projects]
  );

  const visible = useMemo(
    () =>
      filter === "all"
        ? ordered
        : ordered.filter((p) => p.type === filter),
    [filter, ordered]
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-10 pb-12 sm:pt-16 sm:pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f766e]/10 text-[#0f766e] text-sm font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-[#0f766e] animate-pulse" />
            Mijn werk
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight max-w-3xl">
            Projecten die ik{" "}
            <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">
              heb gebouwd
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            Een selectie van echte websites, webshops en applicaties. Klik op een
            project voor de details of bekijk het direct live.
          </p>

          {/* Mini-stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10 mt-8">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#0f766e]">
                {projects.length}+
              </div>
              <div className="text-xs sm:text-sm text-slate-500">Live projecten</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#0f766e]">100%</div>
              <div className="text-xs sm:text-sm text-slate-500">Maatwerk</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#0f766e]">Utrecht</div>
              <div className="text-xs sm:text-sm text-slate-500">& omgeving</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters — horizontaal scrollbaar op mobiel */}
      <div className="sticky top-[100px] md:top-[120px] z-30 bg-white/85 backdrop-blur-md border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-3 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-3 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((f) => {
              const count =
                f.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.type === f.id).length;
              const isActive = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all active:scale-95 ${
                    isActive
                      ? "bg-[#0f766e] text-white shadow-md shadow-[#0f766e]/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {f.label}
                  <span
                    className={`text-[11px] ${
                      isActive ? "text-white/80" : "text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={filter === "all" && project.featured}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-slate-500 py-16">
            Geen projecten in deze categorie.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f766e] to-[#0d9488] px-6 py-10 sm:px-12 sm:py-14 text-center">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <h2 className="relative text-2xl sm:text-3xl font-bold text-white">
            Ook zo&apos;n project voor jouw bedrijf?
          </h2>
          <p className="relative text-white/85 mt-3 max-w-xl mx-auto">
            Je hebt direct contact met de developer. Vertel me je idee en ik denk
            vrijblijvend met je mee.
          </p>
          <div className="relative flex flex-col sm:flex-row justify-center gap-3 mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0f766e] font-semibold hover:bg-slate-50 transition-colors active:scale-95"
            >
              Start een project <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/31625518708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors active:scale-95"
            >
              WhatsApp mij
            </a>
          </div>
        </div>
      </section>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}

      <Footer />
    </>
  );
}
