'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogPostMeta {
  slug: string;
  title: string;
  category: string;
}

interface RelatedPostsProps {
  posts: BlogPostMeta[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <aside className="mt-16 pt-12 border-t border-[var(--border)]">
      <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
        Gerelateerde artikelen
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl hover:border-primary transition-colors"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
              {post.category}
            </span>
            <h3 className="font-semibold text-[var(--text-primary)] mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <div className="flex items-center text-primary text-sm mt-4">
              <span>Lees meer</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
