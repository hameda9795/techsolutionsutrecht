import type { Metadata } from "next";
import ProjectenContent from "./ProjectenContent";
import { getAllShowcaseProjects } from "@/lib/showcase-db";
import { breadcrumbSchema } from "@/lib/schema";
import type { ProjectType } from "@/lib/projects-showcase";

// Altijd verse data tonen zodat wijzigingen in het admin panel direct zichtbaar zijn.
export const dynamic = "force-dynamic";

const SITE = "https://techsolutionsutrecht.nl";

export const metadata: Metadata = {
  title: "Projecten | Websites & Webshops | TechSolutionsUtrecht",
  description:
    "Bekijk een selectie van echte websites, webshops en andere digitale projecten van een developer uit Utrecht. Klik door voor details of bekijk ze live.",
  keywords: [
    "projecten",
    "portfolio webdeveloper Utrecht",
    "website voorbeelden",
    "webshop voorbeelden",
    "digitale projecten",
    "gemaakte websites Utrecht",
  ],
  alternates: { canonical: `${SITE}/projecten` },
  openGraph: {
    title: "Projecten | TechSolutionsUtrecht",
    description:
      "Echte websites, webshops en digitale projecten gebouwd in Utrecht. Bekijk het werk en de details.",
    url: `${SITE}/projecten`,
    type: "website",
    locale: "nl_NL",
  },
};

// schema.org-type per projecttype voor rijkere structured data.
const schemaType: Record<ProjectType, string> = {
  website: "WebSite",
  webshop: "WebSite",
  webapp: "WebApplication",
  tool: "SoftwareApplication",
};

export default async function ProjectenPage() {
  const projects = await getAllShowcaseProjects();

  const absUrl = (path: string) =>
    path.startsWith("http") ? path : `${SITE}${path.startsWith("/") ? "" : "/"}${path}`;

  // CollectionPage + ItemList: helpt Google rich results én AI/GEO de projecten begrijpen.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projecten — TechSolutionsUtrecht",
    description:
      "Echte opgeleverde websites, webshops en digitale projecten van TechSolutionsUtrecht.",
    url: `${SITE}/projecten`,
    isPartOf: { "@type": "WebSite", name: "TechSolutionsUtrecht", url: SITE },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": schemaType[p.type] ?? "CreativeWork",
          name: p.title,
          description: p.tagline,
          ...(p.image ? { image: absUrl(p.image) } : {}),
          ...(p.liveUrl?.startsWith("http") ? { url: p.liveUrl } : {}),
          ...(p.stack.length ? { keywords: p.stack.join(", ") } : {}),
          creator: { "@type": "Organization", name: "TechSolutionsUtrecht", url: SITE },
        },
      })),
    },
  };

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: SITE },
    { name: "Projecten", url: `${SITE}/projecten` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ProjectenContent projects={projects} />
    </>
  );
}
