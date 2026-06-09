import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/*", "/admin/*", "/private/*"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      // AI / answer-engine crawlers — explicitly allowed for GEO visibility.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "Bytespider",
          "Amazonbot",
        ],
        allow: "/",
        disallow,
      },
    ],
    sitemap: "https://techsolutionsutrecht.nl/sitemap.xml",
    host: "https://techsolutionsutrecht.nl",
  };
}
