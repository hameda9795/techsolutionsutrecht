import fs from 'node:fs/promises';
import matter from 'gray-matter';

// Read-only integration check against a running local preview. Never submits forms.
const base = new URL(process.argv[2] || 'http://127.0.0.1:3003');
const origin = 'https://techsolutionsutrecht.nl';
const failures = [];
const cache = new Map();
const check = (condition, message) => { if (!condition) failures.push(message); };
const decode = (s) => s.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');
async function get(path) {
  const key = new URL(path, base); key.hash = '';
  if (!cache.has(key.href)) cache.set(key.href, fetch(key, { redirect: 'manual' }).then(async r => ({ status: r.status, html: await r.text() })));
  return cache.get(key.href);
}
const slugs = (await fs.readdir('content/blog')).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3));
const customSlugs = ['website-laten-maken', 'website-binnen-week-hoe-wij-dat-doen', 'zzp-website-5-tips-geld-besparen'];
const all = [...slugs, ...customSlugs];
const index = await get('/blog');
check(index.status === 200, 'Blog index HTTP status');
const indexMain = index.html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || '';
const cardSlugs = [...indexMain.matchAll(/<article\b[\s\S]*?<a\b[^>]*href="\/blog\/([^"]+)"/g)].map(m => m[1]);
check(cardSlugs.length === all.length && new Set(cardSlugs).size === all.length, 'Missing or duplicate article cards');
for (const slug of all) check(cardSlugs.includes(slug), `Missing from blog index: ${slug}`);
for (const id of ['websites', 'seo-onderhoud', 'chatbots']) {
  check(indexMain.includes(`href="#${id}"`) && indexMain.includes(`id="${id}"`), `Broken topic: ${id}`);
}
const sitemap = (await get('/sitemap.xml')).html;
const checkedLinks = new Set();
for (const slug of all) {
  const pathname = `/blog/${slug}`;
  const { status, html } = await get(pathname);
  check(status === 200, `${slug}: HTTP ${status}`);
  check((html.match(/<h1\b/g) || []).length === 1, `${slug}: H1 count`);
  check(html.includes(`rel="canonical" href="${origin}${pathname}"`), `${slug}: canonical`);
  check(html.includes('<footer'), `${slug}: missing shared footer`);
  check((sitemap.match(new RegExp(`<loc>${origin}${pathname}</loc>`, 'g')) || []).length === 1, `${slug}: sitemap count`);
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || '';
  const articleHtml = main.match(/<article\b[^>]*class="blog-content[^>]*>([\s\S]*?)<\/article>/)?.[1];
  if (articleHtml) {
    const headings = [...articleHtml.matchAll(/<h[23]\b([^>]*)>/g)];
    const ids = headings.map(m => m[1].match(/\bid="([^"]+)"/)?.[1]);
    check(ids.every(Boolean), `${slug}: headings without server-rendered IDs`);
    check(new Set(ids).size === ids.length, `${slug}: duplicate heading IDs`);
  }
  check(!/href="\/(?:reparaties|diensten\/whatsapp-automatisering|whatsapp-assistent)/.test(main), `${slug}: unrelated service link`);
  check(!/website-laten-maken-(?:kosten|keuze)\.svg/.test(main), `${slug}: stale price/service illustration`);
  const hrefs = [...main.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m => decode(m[1]));
  for (const href of hrefs) {
    if ((!href.startsWith('/') && !href.startsWith('#')) || href.startsWith('//')) continue;
    const url = new URL(href, new URL(pathname, base));
    const linkKey = url.pathname + url.search + url.hash;
    if (checkedLinks.has(linkKey)) continue;
    checkedLinks.add(linkKey);
    const target = await get(url.pathname + url.search);
    check(target.status === 200, `${slug}: ${href} HTTP ${target.status}`);
    if (url.hash) check(target.html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${slug}: missing target ${href}`);
  }
  if (slugs.includes(slug)) {
    const { data } = matter(await fs.readFile(`content/blog/${slug}.md`, 'utf8'));
    check(['Websites', 'SEO & onderhoud', 'Chatbots'].includes(data.category), `${slug}: category ${data.category}`);
    check((await get(data.image)).status === 200, `${slug}: cover image ${data.image}`);
  }
  for (const m of html.matchAll(/<meta\b[^>]*property="og:image"[^>]*content="([^"]+)"/g)) {
    const image = new URL(decode(m[1]), origin);
    if (image.origin === origin) check((await get(image.pathname)).status === 200, `${slug}: OG image ${image.pathname}`);
  }
}
const report = { articles: all.length, internalLinks: checkedLinks.size, failures };
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;
