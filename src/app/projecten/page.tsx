import type { Metadata } from "next";
import ProjectenContent from "./ProjectenContent";
import { getAllShowcaseProjects } from "@/lib/showcase-db";
import { breadcrumbSchema } from "@/lib/schema";
import { getProjectPath } from "@/lib/projects-showcase";

// Altijd verse data tonen zodat wijzigingen in het admin panel direct zichtbaar zijn.
export const dynamic = "force-dynamic";

const SITE = "https://techsolutionsutrecht.nl";

export const metadata: Metadata = {
  title: "Website voorbeelden | Portfolio webdesign Utrecht | TechSolutions",
  description:
    "Bekijk WordPress-websites en maatwerkwebsites gebouwd vanuit Utrecht-Zuilen. Per project lees je wat ik heb gemaakt, met een link naar de website.",
  keywords: [
    "projecten",
    "portfolio webdeveloper Utrecht",
    "website voorbeelden",
    "digitale projecten",
    "gemaakte websites Utrecht",
  ],
  alternates: { canonical: `${SITE}/projecten` },
  openGraph: {
    title: "Website voorbeelden | TechSolutionsUtrecht",
    description:
      "WordPress-websites en maatwerkwebsites gebouwd vanuit Utrecht-Zuilen. Bekijk het ontwerp, de functies en mijn werk per project.",
    url: `${SITE}/projecten`,
    type: "website",
    locale: "nl_NL",
  },
};

export default async function ProjectenPage() {
  const projects = [...await getAllShowcaseProjects()].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  const absUrl = (path: string) =>
    path.startsWith("http") ? path : `${SITE}${path.startsWith("/") ? "" : "/"}${path}`;

  // Link every project in the collection to its own first-party detail page.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projecten — TechSolutionsUtrecht",
    description:
      "Opgeleverde WordPress-websites en maatwerkwebsites van TechSolutionsUtrecht.",
    url: `${SITE}/projecten`,
    isPartOf: { "@type": "WebSite", name: "TechSolutionsUtrecht", url: SITE },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          description: p.tagline,
          ...(p.image ? { image: absUrl(p.image) } : {}),
          url: `${SITE}${getProjectPath(p)}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c") }}
      />
      <ProjectenContent projects={projects} />
    </>
  );
}
