'use client';

import { Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/blog-client';

interface BlogHeaderProps {
  title: string;
  date: string;
  dateModified?: string;
  readTime: string;
  category: string;
  author: string;
}

export default function BlogHeader({
  title,
  date,
  dateModified,
  readTime,
  category,
  author,
}: BlogHeaderProps) {
  return (
    <header className="mb-12">
      {/* Category */}
      <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
        {category}
      </span>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] mb-6 leading-tight">
        {title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-6 text-[var(--color-muted)] pb-8 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <Link href="/over-ons" rel="author" className="hover:text-primary transition-colors">
            {author}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        {dateModified && dateModified !== date && (
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={dateModified}>
              Bijgewerkt op {formatDate(dateModified)}
            </time>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{readTime} leestijd</span>
        </div>
      </div>
    </header>
  );
}
