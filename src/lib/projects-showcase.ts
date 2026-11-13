import projectSnapshot from "../../content/showcase-projects.json";
import type { ContactSubject } from "./contact-subjects";

export type ProjectType = "website" | "webshop" | "webapp" | "tool";

export interface ShowcaseProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  sector: string;
  type: ProjectType;
  year: string;
  highlights: string[];
  stack: string[];
  liveUrl: string;
  image: string;
  accent: string;
  featured?: boolean;
  updatedAt?: string;
}

export const projectTypeLabels: Record<ProjectType, string> = {
  website: "Bedrijfswebsite",
  webshop: "Webshop",
  webapp: "Webapplicatie",
  tool: "Tool / Component",
};

// A public content snapshot for local previews without DATABASE_URL.
// With a database configured, CMS records remain authoritative.
export const showcaseProjects = projectSnapshot as ShowcaseProject[];

export function getInitials(title: string): string {
  return title.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase() ?? "").join("");
}

export function getProjectPath(project: Pick<ShowcaseProject, "id" | "title">): string {
  const label = project.title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 100).replace(/-$/, "") || "project";
  return `/projecten/${encodeURIComponent(project.id)}-${label}`;
}

export function projectIdFromSlug(slug: string): string | null {
  const id = /^([1-9]\d{0,9})-[a-z0-9]+(?:-[a-z0-9]+)*$/.exec(slug)?.[1];
  return id && Number(id) <= 2147483647 ? id : null;
}

export function getProjectService(project: ShowcaseProject): { href: string; label: string; subject: ContactSubject } {
  if (project.type === "webshop") return { href: "/diensten/webshop", label: "WooCommerce webshop laten maken", subject: "Webshop laten maken" };
  if (project.type === "tool") return { href: "/diensten/maatwerk-software", label: "Maatwerk software laten maken", subject: "Windows-applicatie laten maken" };
  if (project.type === "webapp" || project.stack.some(t => /next\.js|react/i.test(t))) {
    return { href: "/diensten/maatwerk-website", label: "Maatwerk website laten maken", subject: "Maatwerk website laten maken" };
  }
  return { href: "/diensten/website-laten-maken", label: "WordPress website laten maken", subject: "Website laten maken" };
}
