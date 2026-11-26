import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';

// Read-only checks against the local preview. No indexing requests or real leads.
const base = new URL(process.argv[2] || 'http://127.0.0.1:3006');
const folder = 'research/remaining-index-preview-2026-10-15';
const inspections = JSON.parse(await readFile(`${folder}/gsc-inspections.json`, 'utf8')).results;
const mainHtml = html => html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1].replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '') || '';
const decode = s => s.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&#39;', "'").replaceAll('&quot;', '"').replaceAll('&lt;', '<').replaceAll('&gt;', '>');
const text = s => decode(s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const normalize = s => s.replace(/\/$/, '');
const pages = new Map();
await Promise.all(inspections.map(async i => {
  const path = new URL(i.url).pathname;
  const r = await fetch(new URL(path, base), {redirect:'manual'});
  const html = await r.text(); const main = mainHtml(html);
  assert.equal(r.status,200,path);
  assert.ok(!r.headers.get('x-robots-tag')?.includes('noindex'),path);
  assert.ok(!/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html),path);
  const canonical=html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  assert.equal(normalize(canonical||''),normalize(i.url),`${path} canonical`);
  const links=[...main.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>decode(m[1]));
  pages.set(path,{html,main,links});
}));
const incoming = path => [...pages.entries()].filter(([other,p])=>other!==path&&p.links.some(href=>new URL(href,base).pathname===path)).map(([other])=>other);
for(const source of ['/blog/hoe-lang-duurt-website-maken','/blog/website-binnen-week-hoe-wij-dat-doen','/veelgestelde-vragen']) assert.ok(pages.get(source).links.includes('/website-binnen-week'),`Deadline discovery from ${source}`);
assert.ok(!text(pages.get('/website-binnen-week').main).includes('Dag 7-10'),'No seven-day claim paired with ten-day schedule');
assert.ok(text(pages.get('/website-binnen-week').main).includes('geen standaardbelofte'),'Conditional planning');
const nichePaths=['/website-laten-maken-kapper','/website-laten-maken-restaurant','/website-laten-maken-coach'];
for(const path of nichePaths){
 assert.ok(pages.get('/diensten/website-laten-maken').links.includes(path),`${path} contextual service discovery`);
 const p=pages.get(path);const body=text(p.main);
 for(const amount of ['€300','€500','€700'])assert.ok(body.includes(amount),`${path} approved build price ${amount}`);
 assert.ok(body.includes('exclusief btw')&&body.includes('betaalde licenties'),'External costs not hidden');
 for(const plan of ['wordpress-start','wordpress-business','wordpress-lokaal'])assert.ok(p.links.includes(`/diensten/website-laten-maken#${plan}`),`${path} scope link ${plan}`);
}
for(const path of ['/veelgestelde-vragen','/website-binnen-week',...nichePaths]){
 const p=pages.get(path);
 const schemas=[...p.html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const faq=schemas.find(s=>s['@type']==='FAQPage');assert.ok(faq,`${path} FAQ`);
 const plain=text(p.main);
 for(const question of faq.mainEntity){assert.ok(plain.includes(question.name),`${path} visible question`);assert.ok(plain.includes(question.acceptedAnswer.text),`${path} visible schema answer`);}
}
const faqBody=text(pages.get('/veelgestelde-vragen').main);
assert.ok(!faqBody.includes('€450')&&!faqBody.includes('binnen 4 uur')&&!faqBody.includes('6 maanden garantie'),'FAQ follows current website offer');
assert.ok(pages.get('/blog/website-maken-of-laten-maken').links.includes('/blog/freelancer-of-bureau'));
assert.ok(pages.get('/blog/website-sneller-maken-pagespeed').links.includes('/blog/5-fouten-zzp-website'));
assert.ok(pages.get('/zzp-website-laten-maken').links.includes('/blog/5-fouten-zzp-website'));
assert.ok(pages.get('/diensten/whatsapp-automatisering').links.includes('/whatsapp-assistent'));
const relatedSets = ['/blog/website-maken-of-laten-maken','/blog/website-sneller-maken-pagespeed','/blog/lokale-seo-utrecht'].map(path=>pages.get(path).main.split('Gerelateerde artikelen')[1]?.match(/href="\/blog\/[^"]+/g)?.join('|'));
assert.equal(new Set(relatedSets).size,3,'Related reading differs by article topic');
const sitemap=await(await fetch(new URL('/sitemap.xml',base))).text();
for(const path of ['/website-binnen-week','/veelgestelde-vragen',...nichePaths,'/zeist','/blog/website-binnen-week-hoe-wij-dat-doen']){
 const entry=[...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m=>m[1]).find(e=>e.includes(`${path}</loc>`));
 assert.ok(entry?.includes('2026-10-15'),`${path} actual change date`);
}
const excluded=inspections.filter(i=>i.data?.inspectionResult?.indexStatusResult?.verdict!=='PASS');
const report={verifiedAt:new Date().toISOString(),preview:base.origin,inspected:inspections.length,indexed:inspections.length-excluded.length,excluded:excluded.length,previewEligibilityPassed:pages.size,conditionalPlanning:true,priceScopeAndFaqParityPassed:true,contextualDiscovery:{deadline:incoming('/website-binnen-week'),freelancer:incoming('/blog/freelancer-of-bureau'),errors:incoming('/blog/5-fouten-zzp-website'),niches:Object.fromEntries(nichePaths.map(path=>[path,incoming(path)])),whatsapp:incoming('/whatsapp-assistent')},relatedReadingDistinct:true,sitemapDatesPassed:true,publication:'Preview only; no change to Google index state'};
await writeFile(`${folder}/verification.json`,JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
