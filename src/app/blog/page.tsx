import { Metadata } from "next";
import Link from "next/link";
import { getBlogIndexPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Website laten maken: tips, kosten en SEO | TechSolutions",
  description: "Praktische gidsen over WordPress, websitekosten, SEO, onderhoud en chatbots. Maak de juiste keuzes voor je bedrijfswebsite.",
  alternates: { canonical: "https://techsolutionsutrecht.nl/blog" },
  openGraph: {
    title: "Praktische gidsen voor je bedrijfswebsite | TechSolutions",
    description: "Van websitekosten en WordPress tot vindbaarheid, onderhoud en een chatbot op je website.",
    type: "website", locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl/blog", siteName: "TechSolutionsUtrecht",
  },
};

const topics = [
  {
    id: "websites", category: "Websites", title: "Een website kiezen en laten maken",
    description: "Vergelijk kosten, WordPress en maatwerk. Bereid de inhoud, offerte en planning van je bedrijfswebsite voor.",
    href: "/diensten/website-laten-maken", linkLabel: "Bekijk de WordPress-pakketten",
  },
  {
    id: "seo-onderhoud", category: "SEO & onderhoud", title: "Vindbaarheid, snelheid en onderhoud",
    description: "Onderzoek waarom je website weinig zoekverkeer krijgt en welke verbeteringen of onderhoudswerkzaamheden nodig zijn.",
    href: "/diensten/seo", linkLabel: "Bekijk de SEO-scan en pakketten",
  },
  {
    id: "chatbots", category: "Chatbots", title: "Een chatbot op je website",
    description: "Ontdek wanneer een chatbot helpt, welke informatie je aanlevert en wat de bouw en het gebruik kosten.",
    href: "/diensten/chatbot-laten-maken", linkLabel: "Bekijk de chatbot-pakketten",
  },
];

export default function BlogPage() {
  const posts = getBlogIndexPosts();
  return (
    <>
      <nav aria-label="Broodkruimel" className="py-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-custom">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li><Link href="/" className="text-[var(--color-muted)] hover:text-primary">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Blog</li>
          </ol>
        </div>
      </nav>
      <main className="pt-8 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-6">
              Praktische gidsen voor je bedrijfswebsite
            </h1>
            <p className="text-[var(--color-muted)] text-lg">
              Wat kost een website, welke aanpak past bij je bedrijf en hoe verbeter je de vindbaarheid?
              Deze artikelen helpen je keuzes te maken voordat je werk uitbesteedt.
            </p>
            <p className="mt-5 text-[var(--color-muted)]">
              Zoek je een webdesigner? Bekijk mijn{" "}
              <Link href="/" className="font-semibold text-primary underline underline-offset-4">werk voor ondernemers in Utrecht</Link>
              {" "}of vergelijk de{" "}
              <Link href="/prijzen" className="font-semibold text-primary underline underline-offset-4">pakketten en prijzen</Link>.
            </p>
          </div>
          <nav aria-label="Blogonderwerpen" className="flex flex-wrap justify-center gap-3 mb-14">
            {topics.map((topic) => (
              <a key={topic.id} href={`#${topic.id}`} className="px-4 py-2 border border-[var(--color-border)] rounded-full hover:border-primary hover:text-primary transition-colors">
                {topic.category}
              </a>
            ))}
          </nav>
          <div className="max-w-3xl mx-auto space-y-16">
            {topics.map((topic) => (
              <section key={topic.id} id={topic.id} aria-labelledby={`${topic.id}-heading`} className="scroll-mt-28">
                <h2 id={`${topic.id}-heading`} className="text-2xl sm:text-3xl font-bold mb-4">{topic.title}</h2>
                <p className="text-[var(--color-muted)] mb-4">{topic.description}</p>
                <Link href={topic.href} className="inline-block text-primary font-semibold underline underline-offset-4 mb-7">{topic.linkLabel}</Link>
                <div className="grid grid-cols-1 gap-6">
                  {posts.filter((post) => post.category === topic.category).map((post) => (
                    <BlogCard key={post.slug} post={post} headingLevel={3} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
