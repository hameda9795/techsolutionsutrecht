import assert from 'node:assert/strict';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import ts from 'typescript';

// Exercise the real Markdown pipeline, including constructs the former regex
// and post-hydration heading assignment handled differently.
const source = await readFile('src/lib/blog-markdown.ts', 'utf8');
const folder = path.resolve('.cache/cost-index-preview-2026-10-15');
await mkdir(folder, { recursive: true });
const moduleFile = path.join(folder, 'blog-markdown.mjs');
await writeFile(moduleFile, ts.transpileModule(source, { compilerOptions: {
  module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022,
} }).outputText);
const { markdownTableOfContents, renderBlogMarkdown } = await import(pathToFileURL(moduleFile).href);
const markdown = [
  '## Prijs **inclusief** werk & kosten',
  '### [Hosting](https://example.com) en `domein`',
  '```md', '## Geen echte sectie', '```',
  '## Kosten', '## Kosten', '## Kosten-2', '## Kosten',
  'Setext sectie\n--------------',
  '## ***', '## !!!',
  '| Kosten | Per jaar |\n|---|---|\n| Hosting | Zelf invullen |',
].join('\n\n');
const headings = markdownTableOfContents(markdown);
assert.equal(headings.length, 9, 'Fenced-code heading excluded, setext included');
assert.equal(headings[0].text, 'Prijs inclusief werk & kosten', 'Inline formatting is plain TOC text');
assert.equal(headings[1].text, 'Hosting en domein');
assert.equal(new Set(headings.map(h => h.id)).size, headings.length, 'Repeated, suffix-colliding and empty slugs remain distinct');
const result = await renderBlogMarkdown(markdown);
for (const heading of headings) {
  assert.ok(result.includes(`<h${heading.level} id="${heading.id}">`), `TOC target exists in initial HTML: ${heading.text}`);
}
assert.ok(!result.includes('id="geen-echte-sectie"'));
assert.ok(result.includes('target="_blank" rel="noopener noreferrer"'));
assert.ok(result.includes('overflow-x-auto') && result.includes('aria-label="Tabel"'));
console.log('Markdown checks passed: initial HTML anchors, formatted headings, fenced code, setext, collisions, external links and mobile table regions.');
