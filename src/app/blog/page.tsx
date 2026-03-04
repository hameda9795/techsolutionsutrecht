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
    slug: "website-niet-in-google",
    title: "5 Redenen Waarom je Website Niet op Google Verschijnt",
    excerpt: "Is je website niet zichtbaar in Google? Ontdek de 5 meest voorkomende redenen en los het binnen 30 minuten op.",
    date: "4 maart 2025",
    readTime: "8 min",
    category: "SEO",
  },
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
      <Header />
      
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

      <main className="pt-8 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Tips & Nieuws
              </h1>
              <p className="text-[var(--text-secondary)] text-lg">
                Praktische tips over websites, SEO, tech reparaties en meer.
              </p>
            </div>
          </div>

          <div className="grid gap-8 max-w-3xl mx-auto">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card-hover bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border)]"
              >
                <Link href={`/blog/${post.slug}`} className="block p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-[var(--text-muted)] text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[var(--text-secondary)] mb-4">{post.excerpt}</p>

                  <div className="flex items-center text-primary font-medium">
                    <span>Lees meer</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
