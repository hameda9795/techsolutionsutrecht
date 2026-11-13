import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";
const require = createRequire(import.meta.url);
const base = new URL(process.argv[2] || "http://127.0.0.1:3003");
const snapshot = JSON.parse(readFileSync(new URL("../content/showcase-projects.json", import.meta.url), "utf8"));
const decode = s => s.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&#39;", "'").replaceAll("&quot;", '"');
const visible = html => decode(html.replace(/<script\b[\s\S]*?<\/script>/gi, "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " "));
function load(relative, stubs = {}, environment = {}) {
  const source = readFileSync(new URL(relative, import.meta.url), "utf8");
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  const exports = {};
  const sandbox = { exports, require: id => id in stubs ? stubs[id] : require(id), process: { env: environment }, console, URL, Date };
  vm.runInNewContext(code, sandbox);
  return exports;
}
const model = load("../src/lib/projects-showcase.ts", { "../../content/showcase-projects.json": snapshot });
assert.equal(model.getProjectPath({ id: "7", title: "MvA Timmerwerken" }), "/projecten/7-mva-timmerwerken");
assert.equal(model.getProjectPath({ id: "28", title: "Café & Co" }), "/projecten/28-cafe-co");
for (const bad of ["x-project", "0-project", "2147483648-project", "8-", "../8-test"]) assert.equal(model.projectIdFromSlug(bad), null);
assert.equal(model.projectIdFromSlug("8-oude-naam"), "8");
const api = await fetch(new URL("/api/showcase-projects", base));
assert.equal(api.status, 200);
const projects = await api.json();
assert.deepEqual(projects.map(project => String(project.id)).sort(), snapshot.map(project => String(project.id)).sort(), "The preview portfolio must match the reviewed public project snapshot");
// --database only changes the expected read source. Persistence checks below
// still use a mock database; this script never sends live mutation requests.
const expectedStorage = process.argv.includes("--database") ? "database" : "preview";
assert.equal(api.headers.get("x-showcase-storage"), expectedStorage, "Unexpected portfolio data source");
async function page(route) {
  const res = await fetch(new URL(route, base));
  assert.equal(res.status, 200, route);
  return res.text();
}
const listing = await page("/projecten");
const text = visible(listing);
for (const old of ["Bouwbedrijf Van den Berg", "Devicetoggle", "100% maatwerk", "TreatweFull"]) assert.ok(!text.includes(old), old);
assert.ok(!/Webshops \(0\)|Tools \(0\)/.test(text));
for (const project of projects) {
  const route = model.getProjectPath(project);
  assert.ok(listing.includes('href="' + route + '"'), route + " has a crawlable link");
  const html = await page(route);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, route + " single heading");
  assert.ok(html.includes('rel="canonical" href="https://techsolutionsutrecht.nl' + route + '"'), route + " canonical");
  const content = visible(html);
  assert.ok(content.includes(project.title));
  for (const paragraph of project.description.split(/\n\s*\n/)) assert.ok(content.includes(paragraph), route + " complete server-rendered description");
  for (const item of project.highlights) assert.ok(content.includes(item), route + " implemented features");
  assert.ok(html.includes("object-contain"), route + " uncropped image");
  const service = model.getProjectService(project);
  assert.ok(html.includes('href="' + service.href + '"'), route + " related service");
  const contactLink = [...html.matchAll(/href="([^"]*\/contact\?[^"]+)"/g)].map(m => new URL(decode(m[1]), base)).find(url => url.searchParams.get("dienst") === service.subject);
  assert.ok(contactLink, route + " enquiry subject");
  const contact = await page(contactLink.pathname + contactLink.search);
  const option = contact.match(/<option\b[^>]*selected=""[^>]*>/)?.[0] || "";
  assert.equal(decode(option.match(/value="([^"]*)"/)?.[1] || ""), service.subject);
  const jsonLd = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  assert.ok(JSON.stringify(jsonLd).includes(route + "#project"));
}
const renamed = await fetch(new URL("/projecten/8-oude-naam", base), { redirect: "manual" });
assert.equal(renamed.status, 308, "A previous title URL permanently redirects");
assert.equal(renamed.headers.get("location"), "/projecten/8-arix-schildersbedrijf");
for (const route of ["/projecten/999999-no-project", "/projecten/not-a-project"]) {
  const res = await fetch(new URL(route, base));
  assert.equal(res.status, 404, route);
}
for (const route of ["/", "/diensten/website-laten-maken"]) {
  const html = await page(route);
  assert.ok(/href="\/projecten\/\d+-/.test(html), route + " links directly to project pages");
}
// Run persistence logic with a fake database; never write to the online CMS.
let row = { id: 22, title: "Nieuwe klant", tagline: "WordPress-website", description: "Vraag van klant.\n\nGebouwd werk.", type: "website", sector: "Bouw", year: "2026", highlights: ["Offerteformulier"], stack: ["WordPress"], live_url: "https://example.com", image: "", accent: "", featured: false, updated_at: "2026-09-06T09:00:00Z" };
let failDatabase = false;
const fakeSql = async (strings, ...values) => {
  if (failDatabase) throw new Error("Simulated database outage");
  const query = strings.join("?");
  if (query.includes("UPDATE showcase_projects")) {
    const names = ["title", "tagline", "description", "sector", "type", "year", "highlights", "stack", "live_url", "image", "accent", "featured"];
    assert.equal(values[12], "22");
    names.forEach((name, index) => { row[name] = values[index]; });
    return [row];
  }
  if (query.includes("WHERE id")) return values[0] === "22" ? [row] : [];
  throw new Error("Unexpected database query");
};
const db = load("../src/lib/showcase-db.ts", { "@neondatabase/serverless": { neon: () => fakeSql }, "./projects-showcase": model }, { DATABASE_URL: "mock-only" });
const fresh = await db.getShowcaseProjectById("22");
assert.equal(model.getProjectPath(fresh), "/projecten/22-nieuwe-klant");
const update = db.normalizeShowcaseInput({ ...fresh, title: "Gewijzigde klant", description: "Nieuwe vraag.\n\nGewijzigde uitvoering.", highlights: ["  Nieuwe functie  "] });
await db.updateShowcaseProject("22", update);
const saved = await db.getShowcaseProjectById("22");
assert.equal(saved.description, "Nieuwe vraag.\n\nGewijzigde uitvoering.");
assert.equal(saved.highlights[0], "Nieuwe functie");
assert.equal(model.getProjectPath(saved), "/projecten/22-gewijzigde-klant");
assert.equal(await db.getShowcaseProjectById("999999"), null);
failDatabase = true;
const originalError = console.error;
console.error = () => {};
try { await assert.rejects(() => db.getShowcaseProjectById("22"), /Simulated database outage/); } finally { console.error = originalError; }
console.log(`Portfolio checks passed: ${projects.length} reviewed public projects, full HTML content, canonical links, contact subjects, rename redirects, 404s and CMS edits (mock database).`);
