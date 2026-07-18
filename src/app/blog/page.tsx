import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, type BlogPostMeta } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Webdesign & SEO Blog Utrecht | TechSolutions",
  description: "Praktische tips over websites, SEO, tech reparaties en meer. Lees onze laatste artikelen over webdesign, online marketing en technologie.",
  alternates: {
    canonical: "https://techsolutionsutrecht.nl/blog",
  },
  openGraph: {
    title: "Webdesign & SEO Blog Utrecht | TechSolutions",
    description: "Praktische tips over websites, SEO, tech reparaties en meer. Lees onze laatste artikelen.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/blog",
    siteName: "TechSolutionsUtrecht",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Static blog post (custom page, not rendered via dynamic [slug] route)
  const staticPosts: BlogPostMeta[] = [
    {
      slug: "website-laten-maken",
      title: "Website Laten Maken: Praktische Checklist voor Ondernemers",
      description: "Een praktische checklist voor doelen, inhoud, techniek, planning en eigendom van je nieuwe bedrijfswebsite.",
      date: "2026-07-10",
      readTime: "10 min",
      category: "Websites",
      image: "/images/blog/website-laten-maken.svg",
      author: "TechSolutionsUtrecht",
    },
  ];

  const allPosts = [...staticPosts, ...posts];

  return (
    <>
      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li>
              <Link 
                href="/" 
                className="text-[var(--color-muted)] hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-[var(--color-muted)]">/</li>
            <li>
              <span className="text-[var(--color-ink)] font-medium">Blog</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="pt-8 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-6">
                Webdesign & SEO Blog voor Ondernemers in Utrecht
              </h1>
              <p className="text-[var(--color-muted)] text-lg">
                Praktische tips over websites, SEO, tech reparaties en meer. 
                Ontdek hoe je meer uit je online aanwezigheid haalt.
              </p>
            </div>
          </div>

          {allPosts.length > 0 ? (
            <div className="grid gap-8 max-w-3xl mx-auto">
              {allPosts.map((post, index) => (
                <BlogCard 
                  key={post.slug} 
                  post={post} 
                  featured={index === 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--color-muted)] text-lg">
                Geen artikelen gevonden. Kom later terug voor nieuwe content!
              </p>
            </div>
          )}

          {/* Categories Section */}
          {allPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-[var(--color-border)]">
              <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-8 text-center">
                Populaire onderwerpen
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {Array.from(new Set(allPosts.map(p => p.category))).map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-full text-[var(--color-muted)] hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
