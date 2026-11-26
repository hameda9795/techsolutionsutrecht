import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";
import { getAllShowcaseProjects } from "@/lib/showcase-db";
import { getProjectPath } from "@/lib/projects-showcase";

export const dynamic = "force-dynamic";

const baseUrl = SITE_URL;
// Change this only when a sitewide release materially changes indexable pages.
// A stable value avoids telling Google that every URL changed on every build.
const siteContentUpdatedAt = new Date("2026-08-16");

// Only pages with substantive content changes in this release get a new date.
const rankingContentUpdatedAt: Record<string, Date> = Object.fromEntries(
  ["", "/blog", "/projecten", "/contact", "/diensten", "/diensten/website-laten-maken", "/diensten/webshop", "/diensten/seo", "/diensten/website-onderhoud", "/prijzen", "/diensten/maatwerk-website", "/diensten/chatbot-laten-maken", "/diensten/maatwerk-software", "/zzp-website-laten-maken", "/de-meern", "/veelgestelde-vragen", "/blog/website-laten-maken", "/blog/zzp-website-5-tips-geld-besparen"]
    .map((pathname) => [`${baseUrl}${pathname}`, new Date("2026-09-06")]),
);

// This release changes the local WordPress offer, homepage discovery links and
// the public expertise copy. The cost guide uses its own Markdown modified date.
for (const pathname of ["", "/diensten/website-laten-maken", "/diensten/webshop", "/over-ons"]) {
  rankingContentUpdatedAt[`${baseUrl}${pathname}`] = new Date("2026-10-15");
}

// Scope, planning and discovery corrections from the full URL Inspection review.
for (const pathname of ["/website-binnen-week", "/veelgestelde-vragen", "/website-laten-maken-kapper", "/website-laten-maken-restaurant", "/website-laten-maken-coach", "/zeist", "/diensten/whatsapp-automatisering", "/zzp-website-laten-maken"]) {
  rankingContentUpdatedAt[`${baseUrl}${pathname}`] = new Date("2026-10-15");
}

// Salon copy, a verified project example and contextual links were expanded.
rankingContentUpdatedAt[`${baseUrl}/website-laten-maken-kapper`] = new Date("2026-10-16");

// Restaurant copy, a menu example and reservation choices were expanded.
rankingContentUpdatedAt[`${baseUrl}/website-laten-maken-restaurant`] = new Date("2026-10-16");

for (const pathname of ["/zzp-website-laten-maken", "/diensten/webshop", "/veenendaal"]) {
  rankingContentUpdatedAt[`${baseUrl}${pathname}`] = new Date("2026-11-25");
}

// SEO service page expanded with Utrecht-specific sections; homepage title changed.
// City pages close to page 1 got sharper titles and new local sections.
for (const pathname of ["", "/diensten/seo", "/diensten/website-laten-maken", "/zzp-website-laten-maken", "/culemborg", "/ijsselstein", "/zeist", "/veenendaal", "/de-meern", "/amersfoort"]) {
  rankingContentUpdatedAt[`${baseUrl}${pathname}`] = new Date("2026-11-26");
}

const staticBlogLastModified: Record<string, Date> = {
  [`${baseUrl}/blog/website-laten-maken`]: new Date("2026-08-16"),
  [`${baseUrl}/blog/laptop-start-niet-op-5-oplossingen`]: new Date("2026-07-18"),
  [`${baseUrl}/blog/macbook-waterschade-wat-te-doen`]: new Date("2026-07-18"),
  [`${baseUrl}/blog/zzp-website-5-tips-geld-besparen`]: new Date("2026-07-18"),
  [`${baseUrl}/blog/website-binnen-week-hoe-wij-dat-doen`]: new Date("2026-10-15"),
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts for dynamic sitemap
  const blogPosts = getAllPosts();
  const projects = await getAllShowcaseProjects();
  
  const blogPostEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const dynamicBlogUrls = new Set(blogPostEntries.map((entry) => entry.url));

  const entries: MetadataRoute.Sitemap = [
    ...projects.map((project) => ({
      url: `${baseUrl}${getProjectPath(project)}`,
      lastModified: new Date(project.updatedAt || "2026-09-06"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...["/prijzen", "/diensten/maatwerk-website", "/diensten/chatbot-laten-maken", "/diensten/maatwerk-software"].map((pathname) => ({
      url: `${baseUrl}${pathname}`,
      lastModified: new Date("2026-09-06"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: baseUrl,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/nieuwegein`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/houten`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/zeist`,
      lastModified: new Date("2026-09-06"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/amersfoort`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/de-meern`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/vleuten`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/ijsselstein`,
      lastModified: new Date("2026-09-06"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/veenendaal`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/woerden`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/culemborg`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/website-laten-maken`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diensten/webshop`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diensten/seo`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diensten/website-onderhoud`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reparaties`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reparaties/laptop`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reparaties/computer`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reparaties/mac`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reparaties/telefoon`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reparaties/ipad`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reparaties/tablet`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zzp-website-laten-maken`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/website-laten-maken-kapper`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/website-laten-maken-restaurant`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/website-laten-maken-coach`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/diensten/whatsapp-automatisering`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/whatsapp-assistent`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/website-binnen-week`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projecten`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/veelgestelde-vragen`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Dynamically generated blog posts
    ...blogPostEntries,
    // Static/custom blog posts
    {
      url: `${baseUrl}/blog/website-laten-maken`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Legacy blog posts (keep for SEO)
    {
      url: `${baseUrl}/blog/laptop-start-niet-op-5-oplossingen`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/macbook-waterschade-wat-te-doen`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/zzp-website-5-tips-geld-besparen`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/website-binnen-week-hoe-wij-dat-doen`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return entries.map((entry) => ({
    ...entry,
    lastModified: dynamicBlogUrls.has(entry.url)
      ? entry.lastModified
      : rankingContentUpdatedAt[entry.url] ?? staticBlogLastModified[entry.url] ?? entry.lastModified ?? siteContentUpdatedAt,
  }));
}
