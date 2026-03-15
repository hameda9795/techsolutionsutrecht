import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { 
  getPostBySlug, 
  getAllPosts, 
  getRelatedPosts,
  generateTableOfContents 
} from '@/lib/blog';
import { articleSchema } from '@/lib/schema';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ShareButtons from '@/components/blog/ShareButtons';
import TableOfContents from '@/components/blog/TableOfContents';
import Footer from '@/components/Footer';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Artikel niet gevonden | TechSolutionsUtrecht Blog',
    };
  }

  const canonicalUrl = `https://techsolutionsutrecht.nl/blog/${slug}`;
  
  return {
    title: `${post.title} | TechSolutionsUtrecht Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'nl_NL',
      url: canonicalUrl,
      siteName: 'TechSolutionsUtrecht',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(slug, 3);
  const tableOfContents = generateTableOfContents(post.content);
  const canonicalUrl = `https://techsolutionsutrecht.nl/blog/${slug}`;
  
  // Generate JSON-LD structured data
  const jsonLd = articleSchema({
    title: post.title,
    description: post.description,
    url: canonicalUrl,
    datePublished: post.date,
    author: post.author,
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      
      <main className="pb-24">
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
                <Link 
                  href="/blog" 
                  className="text-[var(--text-muted)] hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li className="text-[var(--text-muted)]">/</li>
              <li>
                <span className="text-[var(--text-primary)] font-medium truncate max-w-[200px] sm:max-w-xs block">
                  {post.title}
                </span>
              </li>
            </ol>
          </div>
        </nav>

        <div className="container-custom pt-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div>
              {/* Back Link */}
              <Link 
                href="/blog"
                className="inline-flex items-center text-[var(--text-secondary)] hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar blog
              </Link>

              {/* Blog Header */}
              <BlogHeader
                title={post.title}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                author={post.author}
              />

              {/* Share Buttons */}
              <div className="mb-8">
                <ShareButtons title={post.title} url={canonicalUrl} />
              </div>

              {/* Blog Content */}
              <BlogContent contentHtml={post.contentHtml} />

              {/* Share at bottom */}
              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                <ShareButtons title={post.title} url={canonicalUrl} />
              </div>

              {/* Related Posts */}
              <RelatedPosts posts={relatedPosts} />
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <TableOfContents headings={tableOfContents} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
