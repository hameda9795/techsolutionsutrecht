import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';
import type { Root, RootContent } from 'mdast';

export interface BlogHeading { id: string; text: string; level: number }

function textContent(node: Root | RootContent): string {
  if ('children' in node) return node.children.map(textContent).join('');
  if ('value' in node) return node.value;
  if (node.type === 'image' || node.type === 'imageReference') return node.alt || '';
  return '';
}

// Derive both the TOC and HTML IDs from the same Markdown tree. Code blocks
// cannot accidentally become TOC entries, and repeated headings stay unique.
function prepareTree(tree: Root): BlogHeading[] {
  const headings: BlogHeading[] = [];
  const used = new Set<string>();
  function visit(node: Root | RootContent) {
    if (node.type === 'heading' && (node.depth === 2 || node.depth === 3)) {
      const text = textContent(node).trim();
      const base = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').substring(0, 50) || 'section';
      let id = base;
      let suffix = 2;
      while (used.has(id)) id = `${base}-${suffix++}`;
      used.add(id);
      node.data = { ...node.data, hProperties: { ...node.data?.hProperties, id } };
      headings.push({ id, text, level: node.depth });
    }
    if (node.type === 'link' && /^https?:\/\//.test(node.url)) {
      node.data = { ...node.data, hProperties: { ...node.data?.hProperties, target: '_blank', rel: ['noopener', 'noreferrer'] } };
    }
    if ('children' in node) node.children.forEach(visit);
  }
  visit(tree);
  return headings;
}

export function markdownTableOfContents(content: string): BlogHeading[] {
  return prepareTree(remark().use(gfm).parse(content));
}

export async function renderBlogMarkdown(content: string): Promise<string> {
  const processed = await remark().use(gfm).use(() => (tree: Root) => { prepareTree(tree); })
    .use(html, { sanitize: false }).process(content);
  return processed.toString().replace(
    /<table>[\s\S]*?<\/table>/g,
    (table) => `<div class="my-6 overflow-x-auto" role="region" aria-label="Tabel" tabindex="0">${table}</div>`,
  );
}
