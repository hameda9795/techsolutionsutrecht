'use client';

import { useEffect } from 'react';

interface BlogContentProps {
  contentHtml: string;
}

// Function to generate ID from text (must match the one in blog.ts)
function generateIdFromText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50); // Limit length
}

export default function BlogContent({ contentHtml }: BlogContentProps) {
  useEffect(() => {
    // Add IDs to headings for table of contents
    const headings = document.querySelectorAll('.blog-content h2, .blog-content h3');
    headings.forEach((heading) => {
      const text = heading.textContent || '';
      const id = generateIdFromText(text);
      heading.id = id;
    });

    // Add target="_blank" and rel="noopener noreferrer" to external links
    const links = document.querySelectorAll('.blog-content a');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });

    // Add styling to tables
    const tables = document.querySelectorAll('.blog-content table');
    tables.forEach((table) => {
      table.classList.add('w-full', 'border-collapse', 'my-6');
    });
  }, [contentHtml]);

  return (
    <article 
      className="blog-content prose prose-lg max-w-none
        /* Headings */
        prose-headings:text-[var(--text-primary)]
        prose-headings:font-bold
        prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-[var(--border)]
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        
        /* Paragraphs */
        prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed prose-p:mb-4
        
        /* Links */
        prose-a:text-primary prose-a:no-underline prose-a:font-medium
        hover:prose-a:underline
        
        /* Strong/Bold */
        prose-strong:text-[var(--text-primary)] prose-strong:font-semibold
        
        /* Lists */
        prose-ul:text-[var(--text-secondary)] prose-ul:my-4 prose-ul:space-y-2
        prose-ol:text-[var(--text-secondary)] prose-ol:my-4
        prose-li:marker:text-primary
        
        /* Blockquotes */
        prose-blockquote:border-l-4 prose-blockquote:border-primary 
        prose-blockquote:bg-[var(--bg-secondary)] prose-blockquote:py-2 
        prose-blockquote:px-4 prose-blockquote:rounded-r-lg
        prose-blockquote:not-italic prose-blockquote:text-[var(--text-secondary)]
        prose-blockquote:my-6
        
        /* Code */
        prose-code:text-primary prose-code:bg-[var(--bg-secondary)] 
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded 
        prose-code:text-sm prose-code:font-mono
        prose-code:before:content-none prose-code:after:content-none
        
        /* Code blocks */
        prose-pre:bg-[var(--bg-secondary)] prose-pre:border prose-pre:border-[var(--border)] 
        prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
        prose-pre:my-6
        
        /* Tables */
        prose-table:w-full prose-table:border-collapse prose-table:my-6
        prose-table:overflow-hidden prose-table:rounded-lg
        prose-thead:bg-[var(--bg-secondary)]
        prose-th:text-[var(--text-primary)] prose-th:font-semibold 
        prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-[var(--border)]
        prose-td:p-3 prose-td:border prose-td:border-[var(--border)] 
        prose-td:text-[var(--text-secondary)]
        prose-tr:even:bg-[var(--bg-secondary)]/50
        
        /* Horizontal rule */
        prose-hr:border-[var(--border)] prose-hr:my-8
        
        /* Images */
        prose-img:rounded-lg prose-img:my-8 prose-img:shadow-lg
      "
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
