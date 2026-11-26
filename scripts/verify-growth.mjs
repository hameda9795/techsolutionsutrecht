import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";

// A local production preview supplies HTML. Calculation and Analytics checks
// run in memory: no real enquiries, tracking requests or emails are sent.
const base = new URL(process.argv[2] || "http://127.0.0.1:3005");
async function moduleFrom(file, globals = {}, dependencies = {}) {
  const source = await readFile(file, "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } });
  const module = { exports: {} };
  vm.runInNewContext(outputText, { module, exports: module.exports, URLSearchParams, ...globals,
    require: (name) => { assert.ok(Object.hasOwn(dependencies, name), `Unexpected dependency ${name}`); return dependencies[name]; },
  }, { filename: file });
  return module.exports;
}

const costs = await moduleFrom("src/lib/website-costs.ts");
for (const [price, expectedWithMaintenance] of [[300, 768], [500, 968], [700, 1168]]) {
  const plan = { id: "test", name: "test", price, scope: "test" };
  assert.equal(costs.estimateWebsiteCosts(plan, 0).firstYear, price);
  assert.equal(costs.estimateWebsiteCosts(plan, 0).followingYear, 0);
  assert.equal(costs.estimateWebsiteCosts(plan, 39).firstYear, expectedWithMaintenance);
  assert.equal(costs.estimateWebsiteCosts(plan, 39).followingYear, 468);
}

const events = [];
const mockDocument = { cookie: "tsu_cookie_consent=denied" };
const mockWindow = { gtag: (...args) => events.push(args) };
const analytics = await moduleFrom("src/lib/contact-analytics.ts", { window: mockWindow, document: mockDocument });
analytics.trackSuccessfulContact("Website laten maken", "wordpress-start");
analytics.trackContactClick("whatsapp");
assert.equal(events.length, 0, "No tracking without consent");
mockDocument.cookie = "another=ok; tsu_cookie_consent=granted";
analytics.trackSuccessfulContact("Website laten maken", "wordpress-business");
assert.equal(events[0][1], "generate_lead");
assert.equal(events[0][2].package_id, "wordpress-business");
assert.deepEqual(Object.keys(events[0][2]).sort(), ["form_id", "package_id", "service"], "No form fields or fabricated lead value");
analytics.trackContactClick("telephone");
assert.equal(events[1][1], "contact_click");
assert.equal(events[1][2].contact_method, "telephone");
mockDocument.cookie = "tsu_cookie_consent=denied";
analytics.trackContactClick("email");
assert.equal(events.length, 2, "Revoking consent stops events even while gtag remains loaded");
mockDocument.cookie = "tsu_cookie_consent=granted";
mockWindow.gtag = () => { throw new Error("Analytics unavailable"); };
assert.doesNotThrow(() => analytics.trackSuccessfulContact("Website laten maken"));

// Exercise the real submit callback with a local fetch stub. This verifies the
// lead event follows a confirmed success and rapid duplicate submits are ignored.
const subjects = await moduleFrom("src/lib/contact-subjects.ts");
for (const outcome of ["success", "unsuccessful-200", "server-error", "network-error"]) {
  let requests = 0;
  const leads = [];
  const element = (type, props) => ({ type, props });
  const formModule = await moduleFrom("src/components/ContactForm.tsx", {
    fetch: async () => {
      requests++;
      if (outcome === "network-error") throw new Error("Offline");
      return { ok: outcome !== "server-error", json: async () => ({ success: outcome === "success" }) };
    },
  }, {
    react: {
      useRef: (initial) => ({ current: initial }),
      useState: (initial) => [initial && typeof initial === "object" && "email" in initial
        ? { ...initial, name: "Local QA", email: "qa@example.invalid", message: "Never delivered" } : initial, () => {}],
    },
    "react/jsx-runtime": { jsx: element, jsxs: element },
    "lucide-react": { Send: "svg", CheckCircle: "svg", AlertCircle: "svg" },
    "@/lib/contact-subjects": subjects,
    "@/lib/contact-analytics": { trackSuccessfulContact: (...args) => leads.push(args) },
  });
  const form = formModule.default({ initialSubject: "Website laten maken" });
  await Promise.all([form.props.onSubmit({ preventDefault() {} }), form.props.onSubmit({ preventDefault() {} })]);
  assert.equal(requests, 1, `${outcome}: duplicate submit lock`);
  assert.equal(leads.length, outcome === "success" ? 1 : 0, `${outcome}: only confirmed success counts`);
}

async function page(path) {
  const r = await fetch(new URL(path, base));
  assert.equal(r.status, 200, `${path} HTTP`);
  return r.text();
}
const article = await page("/blog/wat-kost-website-laten-maken");
const visible = article.replace(/<script\b[\s\S]*?<\/script>/gi, "");
assert.ok(visible.includes('id="websitekosten-berekenen"'), "Calculator is in initial HTML, not inserted after hydration");
assert.ok(visible.includes("Dit is een subtotaal, geen volledige jaarprijs"));
assert.ok(visible.includes("Domein, hosting, betaalde licenties en extra werk komen erbij"));
assert.equal((visible.match(/name="website-pakket"/g) || []).length, 3);
assert.ok(/data-cost-first-year=/.test(visible));
assert.ok(visible.includes("pakket=wordpress-start"));
assert.ok(article.includes('"dateModified":"2026-10-15"'));
const home = await page("/");
assert.ok(home.includes('href="/blog/wat-kost-website-laten-maken#websitekosten-berekenen"'));
assert.ok(home.includes('href="/diensten/website-laten-maken"'));
const wordpress = await page("/diensten/website-laten-maken");
assert.ok(wordpress.includes("WordPress website laten maken in Utrecht"));
assert.ok(wordpress.includes('href="/projecten/14-tandartspraktijk-zuilen-parkwijk"'));
assert.ok(wordpress.includes('href="/blog/wat-kost-website-laten-maken#websitekosten-berekenen"'));
const schemas = [...home.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
const business = schemas.find((s) => s['@type'] === "ProfessionalService");
const seo = business.hasOfferCatalog.itemListElement.find((o) => o.url.endsWith("/diensten/seo"));
assert.equal(seo.priceSpecification.price, "300");
assert.equal(seo.priceSpecification.unitText, "project", "One-time SEO Start cannot be labelled monthly");
const sitemap = await page("/sitemap.xml");
const costEntry = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]).find((s) => s.includes("/blog/wat-kost-website-laten-maken</loc>"));
assert.ok(costEntry.includes("2026-10-15"));
assert.ok(!(await page("/over-ons")).includes("Search Console certified"));
console.log("Growth checks passed: six cost scenarios, consent/revocation and PII-safe events, server-rendered calculator, internal discovery, local WordPress intent, accurate schema and sitemap.");
