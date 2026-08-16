import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

const baseUrl = SITE_URL;
// Change this only when a sitewide release materially changes indexable pages.
// A stable value avoids telling Google that every URL changed on every build.
const siteContentUpdatedAt = new Date("2026-08-16");

const staticBlogLastModified: Record<string, Date> = {
  [`${baseUrl}/blog/website-laten-maken`]: new Date("2026-08-16"),
  [`${baseUrl}/blog/laptop-start-niet-op-5-oplossingen`]: new Date("2026-07-18"),
  [`${baseUrl}/blog/macbook-waterschade-wat-te-doen`]: new Date("2026-07-18"),
  [`${baseUrl}/blog/zzp-website-5-tips-geld-besparen`]: new Date("2026-07-18"),
  [`${baseUrl}/blog/website-binnen-week-hoe-wij-dat-doen`]: new Date("2026-07-18"),
  [`${baseUrl}/blog/website-niet-in-google`]: new Date("2026-07-18"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all blog posts for dynamic sitemap
  const blogPosts = getAllPosts();
  
  const blogPostEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const dynamicBlogUrls = new Set(blogPostEntries.map((entry) => entry.url));

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/utrecht`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
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
      lastModified: siteContentUpdatedAt,
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
      lastModified: siteContentUpdatedAt,
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
    {
      url: `${baseUrl}/blog/website-niet-in-google`,
      lastModified: siteContentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  return entries.map((entry) => ({
    ...entry,
    lastModified: dynamicBlogUrls.has(entry.url)
      ? entry.lastModified
      : staticBlogLastModified[entry.url] ?? siteContentUpdatedAt,
  }));
}
