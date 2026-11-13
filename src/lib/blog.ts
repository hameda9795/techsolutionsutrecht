import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { renderBlogMarkdown, markdownTableOfContents } from './blog-markdown';
export { formatDate } from './blog-client';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  date: string;
  dateModified?: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  content: string;
  contentHtml: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  date: string;
  dateModified?: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
}

// This file should only be used in Server Components
// We need to mark it as server-only
if (typeof window !== 'undefined') {
  throw new Error('This module should only be imported in server components');
}

export function getAllPostSlugs(): string[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  
  if (slugs.length === 0) {
    return [];
  }
  
  const posts = slugs.map<BlogPostMeta | null>((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    // Skip if file doesn't exist
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      slug,
      title: data.title || '',
      seoTitle: data.seoTitle || '',
      description: data.description || '',
      date: data.date || '',
      dateModified: data.dateModified || '',
      readTime: data.readTime || '5 min',
      category: data.category || 'Algemeen',
      image: data.image || '/images/blog/default.jpg',
      author: data.author || 'TechSolutionsUtrecht',
    };
  }).filter((post): post is BlogPostMeta => post !== null);
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const contentHtml = await renderBlogMarkdown(content);
  
  return {
    slug,
    title: data.title || '',
    seoTitle: data.seoTitle || '',
    description: data.description || '',
    date: data.date || '',
    dateModified: data.dateModified || '',
    readTime: data.readTime || '5 min',
    category: data.category || 'Algemeen',
    image: data.image || '/images/blog/default.jpg',
    author: data.author || 'TechSolutionsUtrecht',
    content,
    contentHtml,
  };
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
  const allPosts = getBlogIndexPosts();
  const currentPost = allPosts.find((post) => post.slug === currentSlug);
  const candidates = allPosts.filter((post) => post.slug !== currentSlug);

  if (!currentPost) {
    return candidates.slice(0, limit);
  }

  const sameCategory = candidates.filter(
    (post) => post.category.toLowerCase() === currentPost.category.toLowerCase()
  );
  const otherCategories = candidates.filter(
    (post) => post.category.toLowerCase() !== currentPost.category.toLowerCase()
  );

  // Handpicked next questions, rather than sending every article to the same
  // first three entries in the unsorted discovery list.
  const relatedBySlug: Record<string, string[]> = {
    'wat-kost-website-laten-maken': ['zzp-website-5-tips-geld-besparen', 'freelancer-of-bureau', 'website-maken-of-laten-maken'],
    'website-maken-of-laten-maken': ['freelancer-of-bureau', 'wat-kost-website-laten-maken', 'wordpress-of-maatwerk'],
    'freelancer-of-bureau': ['website-maken-of-laten-maken', 'hoe-lang-duurt-website-maken', 'zzp-website-laten-maken'],
    'wordpress-of-maatwerk': ['freelancer-of-bureau', 'wat-kost-website-laten-maken', 'website-maken-of-laten-maken'],
    'hoe-lang-duurt-website-maken': ['website-binnen-week-hoe-wij-dat-doen', 'zzp-website-laten-maken', 'freelancer-of-bureau'],
    'zzp-website-laten-maken': ['5-fouten-zzp-website', 'zzp-website-5-tips-geld-besparen', 'wat-kost-website-laten-maken'],
    '5-fouten-zzp-website': ['website-niet-in-google', 'website-sneller-maken-pagespeed', 'zzp-website-laten-maken'],
    'website-sneller-maken-pagespeed': ['5-fouten-zzp-website', 'website-niet-in-google', 'wordpress-of-maatwerk'],
    'website-niet-in-google': ['lokale-seo-utrecht', 'website-sneller-maken-pagespeed', '5-fouten-zzp-website'],
    'lokale-seo-utrecht': ['website-niet-in-google', '5-fouten-zzp-website', 'zzp-website-laten-maken'],
    'ai-chatbot-implementeren': ['wordpress-of-maatwerk', 'website-laten-maken', 'wat-kost-website-laten-maken'],
  };
  const preferred = (relatedBySlug[currentSlug] || [])
    .map(slug => candidates.find(post => post.slug === slug))
    .filter((post): post is BlogPostMeta => post !== undefined);
  const selected = new Set(preferred.map(post => post.slug));
  return [...preferred, ...sameCategory.filter(post => !selected.has(post.slug)), ...otherCategories.filter(post => !selected.has(post.slug))].slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getBlogIndexPosts();
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const allPosts = getBlogIndexPosts();
  const categories = allPosts.map(post => post.category);
  return Array.from(new Set(categories));
}

// Custom article routes share the same discovery list as Markdown articles.
// Legacy repair articles retain their URLs but are outside the current service focus.
export function getBlogIndexPosts(): BlogPostMeta[] {
  const customPosts: BlogPostMeta[] = [
    {
      slug: 'website-laten-maken',
      title: 'Website laten maken: praktische checklist voor ondernemers',
      description: 'Bepaal je doel, budget, inhoud, planning en beheer voordat je een websiteofferte aanvraagt.',
      date: '2026-07-10', dateModified: '2026-09-06', readTime: '6 min',
      category: 'Websites', image: '/images/blog/website-laten-maken.svg', author: 'TechSolutionsUtrecht',
    },
    {
      slug: 'website-binnen-week-hoe-wij-dat-doen',
      title: 'Website binnen één week: wanneer is dat haalbaar?',
      description: 'Welke voorbereiding, afgebakende scope en feedback zijn nodig voor een korte planning?',
      date: '2025-02-26', dateModified: '2026-10-15', readTime: '4 min',
      category: 'Websites', image: '/images/blog/default.jpg', author: 'TechSolutionsUtrecht',
    },
    {
      slug: 'zzp-website-5-tips-geld-besparen',
      title: 'ZZP-website: vijf tips om je budget gericht te besteden',
      description: 'Bespaar door de juiste scope, aangeleverde inhoud en duidelijke afspraken over terugkerende kosten.',
      date: '2025-02-26', dateModified: '2026-09-06', readTime: '4 min',
      category: 'Websites', image: '/images/blog/zzp-website.jpg', author: 'TechSolutionsUtrecht',
    },
  ];
  return [...customPosts, ...getAllPosts()];
}

// Generate table of contents from markdown content
export function generateTableOfContents(content: string): { id: string; text: string; level: number }[] {
  return markdownTableOfContents(content);
}

// Calculate reading time from content
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

