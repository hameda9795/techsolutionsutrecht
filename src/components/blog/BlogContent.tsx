'use client';

import { useEffect } from 'react';

interface BlogContentProps {
  contentHtml: string;
}

export default function BlogContent({ contentHtml }: BlogContentProps) {
  useEffect(() => {
    // Add IDs to headings for table of contents
    const headings = document.querySelectorAll('.blog-content h2, .blog-content h3');
    headings.forEach((heading) => {
      const text = heading.textContent || '';
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
      heading.id = id;
    });
  }, [contentHtml]);

  return (
    <div 
      className="blog-content prose prose-lg max-w-none
        prose-headings:text-[var(--text-primary)]
        prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-[var(--text-primary)]
        prose-ul:text-[var(--text-secondary)]
        prose-ol:text-[var(--text-secondary)]
        prose-li:my-1
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[var(--text-secondary)]
        prose-code:text-primary prose-code:bg-[var(--bg-secondary)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
        prose-pre:bg-[var(--bg-secondary)] prose-pre:border prose-pre:border-[var(--border)] prose-pre:rounded-lg
        prose-table:w-full prose-table:border-collapse
        prose-th:bg-[var(--bg-secondary)] prose-th:text-[var(--text-primary)] prose-th:font-semibold prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-[var(--border)]
        prose-td:p-3 prose-td:border prose-td:border-[var(--border)] prose-td:text-[var(--text-secondary)]
        prose-img:rounded-lg prose-img:my-8
        prose-hr:border-[var(--border)]
      "
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
