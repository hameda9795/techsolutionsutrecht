"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  X,
  AlertTriangle,
  Loader2,
  Star,
  LayoutGrid,
} from "lucide-react";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  projectTypeLabels,
  getInitials,
  type ShowcaseProject,
  type ProjectType,
} from "@/lib/projects-showcase";

const AUTH_KEY = "admin_auth";

const ACCENT_PRESETS: { label: string; value: string }[] = [
  { label: "Teal", value: "from-teal-500 to-emerald-700" },
  { label: "Amber", value: "from-amber-500 to-orange-600" },
  { label: "Indigo", value: "from-indigo-500 to-violet-700" },
  { label: "Sky", value: "from-sky-500 to-blue-700" },
  { label: "Slate", value: "from-slate-700 to-slate-900" },
  { label: "Rose", value: "from-rose-500 to-pink-700" },
];

const TYPE_OPTIONS = Object.entries(projectTypeLabels) as [ProjectType, string][];

type FormState = {
  title: string;
  tagline: string;
  description: string;
  sector: string;
  type: ProjectType;
  year: string;
  highlights: string[];
  stack: string;
  liveUrl: string;
  image: string;
  accent: string;
  featured: boolean;
};

const emptyForm: FormState = {
  title: "",
  tagline: "",
  description: "",
  sector: "",
  type: "website",
  year: new Date().getFullYear().toString(),
  highlights: [""],
  stack: "",
  liveUrl: "",
  image: "",
  accent: ACCENT_PRESETS[0].value,
  featured: false,
};

export default function AdminProjectenPage() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [projects, setProjects] = useState<ShowcaseProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editing, setEditing] = useState<ShowcaseProject | null>(null);
  const [deleting, setDeleting] = useState<ShowcaseProject | null>(null);

  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuth(true);
      loadProjects();
    }
  }, [router]);

  const loadProjects = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/showcase-projects", { cache: "no-store" });
      setProjects(await res.json());
    } catch (e) {
      console.error("Laden mislukt:", e);
    }
    setIsLoading(false);
  };

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setErrors({});
    setShowModal(true);
  };

  const openEdit = (p: ShowcaseProject) => {
    setEditing(p);
    setForm({
      title: p.title,
      tagline: p.tagline,
      description: p.description,
      sector: p.sector,
      type: p.type,
      year: p.year,
      highlights: p.highlights.length ? p.highlights : [""],
      stack: p.stack.join(", "),
      liveUrl: p.liveUrl,
      image: p.image,
      accent: p.accent || ACCENT_PRESETS[0].value,
      featured: Boolean(p.featured),
    });
    setErrors({});
    setShowModal(true);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title.trim()) e.title = "Titel is verplicht";
    if (!form.tagline.trim()) e.tagline = "Tagline is verplicht";
    if (form.highlights.filter((h) => h.trim()).length === 0)
      e.highlights = "Minimaal 1 highlight";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const payload = {
      ...form,
      highlights: form.highlights.map((h) => h.trim()).filter(Boolean),
      stack: form.stack.split(",").map((s) => s.trim()).filter(Boolean),
    };

    try {
      const url = editing
        ? `/api/showcase-projects/${editing.id}`
        : "/api/showcase-projects";
      const res = await fetch(url, {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Opslaan mislukt");
      }
      await loadProjects();
      setShowModal(false);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Er ging iets mis.");
    }
    setSubmitting(false);
  };

  const handleDelete = async () => {
    if (!deleting) return;
    try {
      const res = await fetch(`/api/showcase-projects/${deleting.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Verwijderen mislukt");
      await loadProjects();
      setShowDelete(false);
      setDeleting(null);
    } catch (err) {
      alert("Verwijderen mislukt.");
    }
  };

  // Highlight-veldbeheer
  const setHighlight = (i: number, v: string) =>
    setForm((f) => ({
      ...f,
      highlights: f.highlights.map((h, idx) => (idx === i ? v : h)),
    }));
  const addHighlight = () =>
    setForm((f) => ({ ...f, highlights: [...f.highlights, ""] }));
  const removeHighlight = (i: number) =>
    setForm((f) => ({
      ...f,
      highlights: f.highlights.filter((_, idx) => idx !== i),
    }));

  if (!isAuth) return null;

  const inputCls =
    "w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border)] rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary";

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)]">
      {/* Header */}
      <header className="bg-[var(--bg-card)] border-b border-[var(--border)] sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-[var(--text-primary)]">Admin Panel</h1>
                <p className="text-xs text-[var(--text-muted)]">Projecten (showcase)</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/admin/dashboard"
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <LayoutGrid className="w-4 h-4" /> Portfolio CMS
              </Link>
              <Link
                href="/projecten"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Bekijk pagina</span>
              </Link>
              <button
                onClick={() => {
                  sessionStorage.removeItem(AUTH_KEY);
                  router.push("/admin/login");
                }}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Uitloggen</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container-custom py-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <LayoutGrid className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                {projects.length}
              </p>
              <p className="text-sm text-[var(--text-muted)]">Projecten op de site</p>
            </div>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" /> Nieuw project
          </button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl">
            <LayoutGrid className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Nog geen projecten
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Voeg je eerste echte project toe.
            </p>
            <button
              onClick={openCreate}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-5 h-5" /> Project aanmaken
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {projects.map((p) => (
              <div
                key={p.id}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    {p.image ? (
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${p.accent} flex items-center justify-center`}
                      >
                        <span className="text-xl font-black text-white/90">
                          {getInitials(p.title)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-lg text-xs font-medium">
                            {projectTypeLabels[p.type]}
                          </span>
                          {p.featured && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 rounded-lg text-xs font-medium">
                              <Star className="w-3 h-3" /> Uitgelicht
                            </span>
                          )}
                          {p.year && (
                            <span className="text-xs text-[var(--text-muted)]">{p.year}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] truncate">
                          {p.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] truncate">
                          {p.tagline}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={() => openEdit(p)}
                          className="p-2 text-[var(--text-muted)] hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          title="Bewerken"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setDeleting(p);
                            setShowDelete(true);
                          }}
                          className="p-2 text-[var(--text-muted)] hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Verwijderen"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline truncate max-w-full"
                      >
                        <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{p.liveUrl}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Create/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                {editing ? "Project bewerken" : "Nieuw project"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <form id="showcaseForm" onSubmit={handleSubmit} className="space-y-5">
                {/* Titel + tagline */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Titel <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={form.title}
                    onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                    className={inputCls}
                    placeholder="bijv. Bouwbedrijf Van den Berg"
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Tagline <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={form.tagline}
                    onChange={(e) => setForm((f) => ({ ...f, tagline: e.target.value }))}
                    className={inputCls}
                    placeholder="Korte pakkende omschrijving in één zin"
                  />
                  {errors.tagline && (
                    <p className="mt-1 text-sm text-red-500">{errors.tagline}</p>
                  )}
                </div>

                {/* Type + sector + jaar */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Type
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, type: e.target.value as ProjectType }))
                      }
                      className={inputCls}
                    >
                      {TYPE_OPTIONS.map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Sector / branche
                    </label>
                    <input
                      value={form.sector}
                      onChange={(e) => setForm((f) => ({ ...f, sector: e.target.value }))}
                      className={inputCls}
                      placeholder="bijv. Horeca"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Jaar
                    </label>
                    <input
                      value={form.year}
                      onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))}
                      className={inputCls}
                      placeholder="2026"
                    />
                  </div>
                </div>

                {/* Live URL */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Live URL
                  </label>
                  <input
                    value={form.liveUrl}
                    onChange={(e) => setForm((f) => ({ ...f, liveUrl: e.target.value }))}
                    className={inputCls}
                    placeholder="https://klant.nl/"
                  />
                </div>

                {/* Beschrijving */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Beschrijving
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, description: e.target.value }))
                    }
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder="Uitgebreidere omschrijving voor de detail-popup..."
                  />
                </div>

                {/* Afbeelding */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Afbeelding (screenshot)
                  </label>
                  <ImageUpload
                    value={form.image}
                    onChange={(url) => setForm((f) => ({ ...f, image: url }))}
                    onUploading={setImageUploading}
                    folder="showcase"
                  />
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Geen afbeelding? Dan tonen we een nette gekleurde tegel met initialen.
                  </p>
                </div>

                {/* Accent kleur */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Accentkleur (voor tegels zonder afbeelding)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ACCENT_PRESETS.map((a) => (
                      <button
                        key={a.value}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, accent: a.value }))}
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${a.value} ring-2 transition ${
                          form.accent === a.value
                            ? "ring-primary ring-offset-2 ring-offset-[var(--bg-card)]"
                            : "ring-transparent"
                        }`}
                        title={a.label}
                      />
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Techniek (komma-gescheiden)
                  </label>
                  <input
                    value={form.stack}
                    onChange={(e) => setForm((f) => ({ ...f, stack: e.target.value }))}
                    className={inputCls}
                    placeholder="Next.js, Tailwind CSS, PostgreSQL"
                  />
                </div>

                {/* Highlights */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Highlights <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {form.highlights.map((h, i) => (
                      <div key={i} className="flex gap-2">
                        <input
                          value={h}
                          onChange={(e) => setHighlight(i, e.target.value)}
                          className={inputCls}
                          placeholder={`Highlight ${i + 1}`}
                        />
                        {form.highlights.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeHighlight(i)}
                            className="p-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  {errors.highlights && (
                    <p className="mt-1 text-sm text-red-500">{errors.highlights}</p>
                  )}
                  <button
                    type="button"
                    onClick={addHighlight}
                    className="mt-2 flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Plus className="w-4 h-4" /> Highlight toevoegen
                  </button>
                </div>

                {/* Featured */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, featured: e.target.checked }))
                    }
                    className="w-5 h-5 rounded accent-[#0f766e]"
                  />
                  <span className="text-sm text-[var(--text-secondary)]">
                    Uitlichten (groter weergegeven op de projectenpagina)
                  </span>
                </label>
              </form>
            </div>

            <div className="flex items-center justify-end gap-3 p-6 border-t border-[var(--border)]">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                disabled={submitting}
                className="px-6 py-2.5 border border-[var(--border)] text-[var(--text-secondary)] rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors disabled:opacity-50"
              >
                Annuleren
              </button>
              <button
                type="submit"
                form="showcaseForm"
                disabled={submitting || imageUploading}
                className="px-6 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {(submitting || imageUploading) && (
                  <Loader2 className="w-4 h-4 animate-spin" />
                )}
                {imageUploading ? "Uploaden..." : editing ? "Opslaan" : "Aanmaken"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDelete && deleting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl w-full max-w-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Project verwijderen
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Deze actie kan niet ongedaan worden gemaakt
                </p>
              </div>
            </div>
            <p className="text-[var(--text-secondary)] mb-6">
              Weet je zeker dat je{" "}
              <strong className="text-[var(--text-primary)]">
                &quot;{deleting.title}&quot;
              </strong>{" "}
              wilt verwijderen?
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowDelete(false)}
                className="px-6 py-2.5 border border-[var(--border)] text-[var(--text-secondary)] rounded-xl hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={handleDelete}
                className="px-6 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
              >
                Verwijderen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
