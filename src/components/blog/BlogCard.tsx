'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog';
import { formatDate } from '@/lib/blog-client';

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
  headingLevel?: 2 | 3;
}

export default function BlogCard({ post, featured = false, headingLevel = 2 }: BlogCardProps) {
  const Heading = headingLevel === 3 ? 'h3' : 'h2';
  return (
    <article
      className="card-hover min-w-0 bg-[var(--color-bg)] rounded-xl overflow-hidden border border-[var(--color-border)]"
    >
      <Link href={`/blog/${post.slug}`} className="group block p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {post.category}
          </span>
          <div className="flex flex-wrap items-center gap-3 text-[var(--color-muted)] text-sm">
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

        <Heading className={`font-bold text-[var(--color-ink)] mb-3 group-hover:text-primary transition-colors ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
        }`}>
          {post.title}
        </Heading>
        <p className="text-[var(--color-muted)] mb-4 line-clamp-3">
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
