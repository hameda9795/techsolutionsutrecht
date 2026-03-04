import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | TechSolutionsUtrecht - Tips & Nieuws",
  description: "Praktische tips over websites, SEO, tech reparaties en meer. Lees onze laatste artikelen.",
};

const posts = [
  {
    slug: "wat-kost-een-website-laten-maken",
    title: "Wat Kost een Website Laten Maken in 2025? [Complete Gids]",
    excerpt: "Benieuwd wat een website kost? Bekijk prijzen voor WordPress, webshops en maatwerk. Inclusief bespaartips.",
    date: "26 februari 2025",
    readTime: "8 min",
    category: "Websites",
  },
  {
    slug: "laptop-start-niet-op-5-oplossingen",
    title: "Laptop Start Niet Op? 5 Oplossingen die Wél Werken",
    excerpt: "Laptop doet niets meer? Probeer deze 5 oplossingen voordat je naar de reparateur gaat.",
    date: "25 februari 2025",
    readTime: "5 min",
    category: "Reparaties",
  },
  {
    slug: "macbook-waterschade-wat-te-doen",
    title: "MacBook Waterschade? Dit Moet je NU Doen [Stap-voor-Stap]",
    excerpt: "MacBook nat geworden? Snelheid is essentieel. Volg deze stappen om schade te beperken.",
    date: "24 februari 2025",
    readTime: "6 min",
    category: "Reparaties",
  },
];

export default function BlogPage() {
  return (
    <>
      
      {/* Breadcrumb */}
      <nav className="py-4 bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="container-custom">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li><Link href="/" className="text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link></li>
            <li className="text-[var(--text-muted)]">/</li>
            <li><span className="text-[var(--text-primary)] font-medium">Blog</span></li>
          </ol>
        </div>
      </nav>

       className="pt-32 pb-24">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mt-4 mb-6">
              Tips &{" "}
              <span className="gradient-text">Nieuws</span>
            </h1>
            <p className="text-[var(--text-secondary)] text-lg">
              Praktische tips over websites, SEO, tech reparaties en meer.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                >
                  <span className="text-4xl font-bold text-[var(--text-primary)]/20">
                    {post.category[0]}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-[var(--text-secondary)] text-sm mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium text-sm"
                  >
                    Lees meer
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
