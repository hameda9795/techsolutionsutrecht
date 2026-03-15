'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog';
import { formatDate } from '@/lib/blog-client';

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`card-hover bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border)] ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block p-6 md:p-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-[var(--text-muted)] text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        <h2 className={`font-bold text-[var(--text-primary)] mb-3 group-hover:text-primary transition-colors ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
        }`}>
          {post.title}
        </h2>
        <p className="text-[var(--text-secondary)] mb-4 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center text-primary font-medium group/link">
          <span>Lees meer</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
        </div>
      </Link>
    </article>
  );
}
