import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
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
  description: string;
  date: string;
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
  
  const posts = slugs.map(slug => {
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
      description: data.description || '',
      date: data.date || '',
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
  
  // Convert markdown to HTML
  const processedContent = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(content);
  
  const contentHtml = processedContent.toString();
  
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    readTime: data.readTime || '5 min',
    category: data.category || 'Algemeen',
    image: data.image || '/images/blog/default.jpg',
    author: data.author || 'TechSolutionsUtrecht',
    content,
    contentHtml,
  };
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = allPosts.map(post => post.category);
  return Array.from(new Set(categories));
}

// Generate table of contents from markdown content
export function generateTableOfContents(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  
  // Use multiline regex to match H2 and H3 headings (## and ###)
  // The 'm' flag makes ^ and $ match start/end of each line
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    // Generate ID same way as in BlogContent component
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);
    headings.push({ id, text, level });
  }
  
  return headings;
}

// Calculate reading time from content
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

// Format date to Dutch format
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('nl-NL', options);
}
