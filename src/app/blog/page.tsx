import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | TechSolutionsUtrecht - Tips & Nieuws",
  description: "Praktische tips over websites, SEO, tech reparaties en meer. Lees onze laatste artikelen over webdesign, online marketing en technologie.",
  alternates: {
    canonical: "https://techsolutionsutrecht.nl/blog",
  },
  openGraph: {
    title: "Blog | TechSolutionsUtrecht - Tips & Nieuws",
    description: "Praktische tips over websites, SEO, tech reparaties en meer. Lees onze laatste artikelen.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/blog",
    siteName: "TechSolutionsUtrecht",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li>
              <Link 
                href="/" 
                className="text-[var(--text-muted)] hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-[var(--text-muted)]">/</li>
            <li>
              <span className="text-[var(--text-primary)] font-medium">Blog</span>
            </li>
          </ol>
        </div>
      </nav>

      <main className="pt-8 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Tips & Nieuws
              </h1>
              <p className="text-[var(--text-secondary)] text-lg">
                Praktische tips over websites, SEO, tech reparaties en meer. 
                Ontdek hoe je meer uit je online aanwezigheid haalt.
              </p>
            </div>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-8 max-w-3xl mx-auto">
              {posts.map((post, index) => (
                <BlogCard 
                  key={post.slug} 
                  post={post} 
                  featured={index === 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--text-secondary)] text-lg">
                Geen artikelen gevonden. Kom later terug voor nieuwe content!
              </p>
            </div>
          )}

          {/* Categories Section */}
          {posts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-[var(--border)]">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
                Populaire onderwerpen
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {Array.from(new Set(posts.map(p => p.category))).map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-[var(--text-secondary)] hover:border-primary hover:text-primary transition-colors cursor-pointer"
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
