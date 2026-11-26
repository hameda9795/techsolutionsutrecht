import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

// Check the approved commercial terms independently of the shared UI data.
// HTTP checks only read pages. The contact API runs with an in-memory lead sink.
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const base = new URL(process.argv[2] || "http://127.0.0.1:3003");
const groups = [
  ["/diensten/website-laten-maken", "Website laten maken", [["wordpress-start", 300], ["wordpress-business", 500], ["wordpress-lokaal", 700]]],
  ["/diensten/webshop", "Webshop laten maken", [["webshop-start", 950], ["webshop-business", 1450], ["webshop-plus", 2100]]],
  ["/diensten/maatwerk-website", "Maatwerk website laten maken", [["maatwerk-start", 1500], ["maatwerk-business", 2750]]],
  ["/diensten/seo", "Hoger in Google (SEO)", [["seo-start", 300], ["seo-lokaal", 250, "maand", 300], ["seo-groei", 450, "maand", 300]]],
  ["/diensten/chatbot-laten-maken", "Chatbot laten maken", [["chatbot-start", 650], ["chatbot-business", 1250]]],
  ["/diensten/maatwerk-software", "Windows-applicatie laten maken", [["windows-tool", 1500], ["windows-business", 3000]]],
  ["/diensten/website-onderhoud", "Website onderhoud", [["onderhoud-wordpress", 39, "maand"], ["onderhoud-webshop", 69, "maand"]]],
];
const priceLabel = (price) => `€${price.toLocaleString("nl-NL")}`;
const decode = (value) => value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&#39;", "'");
const visible = (html) => decode(html.replace(/<script\b[\s\S]*?<\/script>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
const article = (html, id) => html.match(new RegExp(`<article\\b[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/article>`))?.[1];
async function readPage(route) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, `${route}: HTTP status`);
  return response.text();
}

const prices = await readPage("/prijzen");
assert.equal((prices.match(/data-package="/g) || []).length, 17, "Price comparison must show 17 packages");
for (const [route, subject, plans] of groups) {
  const html = await readPage(route);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route}: one H1`);
  assert.equal((html.match(/<main\b/g) || []).length, 1, `${route}: one main landmark`);
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const service = schemas.find((schema) => schema["@type"] === "Service" && Array.isArray(schema.offers));
  assert.ok(service, `${route}: Service offers`);
  assert.equal(service.offers.length, plans.length, `${route}: offer count`);
  for (const [id, amount, period = "project", setupFee] of plans) {
    for (const [page, markup] of [["/prijzen", prices], [route, html]]) {
      const card = article(markup, id);
      assert.ok(card, `${page}: ${id} visible card`);
      assert.ok(visible(card).includes(priceLabel(amount)), `${page}: ${id} visible price`);
      assert.ok(visible(card).includes(period === "maand" ? "per maand" : "eenmalig"), `${page}: ${id} billing period`);
      if (setupFee) assert.ok(visible(card).includes(`+ ${priceLabel(setupFee)} eenmalige start`), `${page}: setup fee is visible`);
      const link = card.match(/<a\b[^>]*data-package="[^"]+"[^>]*>/)?.[0];
      assert.ok(link, `${page}: ${id} contact link`);
      const href = decode(link.match(/href="([^"]+)"/)[1]);
      const target = new URL(href, base);
      assert.equal(target.pathname, "/contact");
      assert.equal(target.searchParams.get("pakket"), id);
      assert.equal(target.searchParams.get("van"), page);
    }
    const offer = service.offers.find((item) => item.url.endsWith(`#${id}`));
    assert.ok(offer, `${id}: linked offer`);
    assert.equal(offer.priceSpecification.price, amount, `${id}: structured price`);
    assert.equal(offer.priceSpecification.valueAddedTaxIncluded, false, `${id}: excludes VAT`);
    assert.equal(offer.priceSpecification.priceCurrency, "EUR", `${id}: currency`);
    assert.equal(offer.priceSpecification.unitText, period, `${id}: structured billing period`);
    if (setupFee) assert.ok(offer.description.includes(`€${setupFee} eenmalige start`));
    const contact = await readPage(`/contact?pakket=${id}&van=%2Fprijzen`);
    const banner = contact.match(/aria-label="Gekozen pakket">([\s\S]*?)<\/div>/)?.[1];
    assert.ok(banner && visible(banner).includes(priceLabel(amount)), `${id}: selected price in contact form`);
    assert.ok(visible(banner).includes("excl. btw"), `${id}: contact tax label`);
    const selectedOption = contact.match(/<option\b[^>]*selected=""[^>]*>/)?.[0];
    const selected = selectedOption?.match(/value="([^"]*)"/)?.[1];
    assert.equal(decode(selected || ""), subject, `${id}: contact subject`);
  }
}
for (const [id, expected] of [["gratis-seo-scan", "Gratis"], ["ai-vindbaarheid", "€250 eenmalig excl. btw"]]) {
  const contact = await readPage(`/contact?pakket=${id}`);
  const banner = contact.match(/aria-label="Gekozen pakket">([\s\S]*?)<\/div>/)?.[1];
  assert.ok(banner && visible(banner).includes(expected), `${id}: extra service selection`);
}
for (const query of ["pakket=does-not-exist", "pakket=wordpress-start&pakket=seo-lokaal"]) {
  assert.ok(!(await readPage(`/contact?${query}`)).includes('aria-label="Gekozen pakket"'), "Invalid/ambiguous package must not select a price");
}

async function loadModule(relativePath, dependencies = {}) {
  const source = await readFile(path.join(root, relativePath), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  const module = { exports: {} };
  vm.runInNewContext(outputText, {
    module, exports: module.exports, Response, URLSearchParams, console,
    require: (name) => {
      assert.ok(Object.hasOwn(dependencies, name), `Unexpected dependency: ${name}`);
      return dependencies[name];
    },
  }, { filename: relativePath });
  return module.exports;
}
const packages = await loadModule("src/lib/packages.ts");
const subjects = await loadModule("src/lib/contact-subjects.ts");
const captured = [];
const api = await loadModule("src/app/api/contact/route.ts", {
  "@/lib/packages": packages,
  "@/lib/contact-subjects": subjects,
  "@/lib/leads": { deliverLead: async (lead) => { captured.push(lead); return { ok: true }; } },
});
async function request(changes) {
  return api.POST({
    json: async () => ({ name: "Package verification", email: "test@example.invalid", subject: "Hoger in Google (SEO)", message: "Local verification only", packageId: "seo-lokaal", ...changes }),
    headers: { get: () => null },
  });
}
assert.equal((await request({ price: 1, priceLabel: "€1" })).status, 200);
assert.ok(captured.at(-1).message.startsWith(`Pakket: ${packages.findPackage("seo-lokaal").name} (€250 per maand excl. btw + €300 eenmalige start)`), "Lead must use server prices and setup fee");
assert.equal((await request({ subject: "Website laten maken" })).status, 200);
assert.ok(!captured.at(-1).message.startsWith("Pakket:"), "Changing subject must discard stale package");
assert.equal((await request({ packageId: "made-up-plan" })).status, 200);
assert.ok(!captured.at(-1).message.startsWith("Pakket:"), "Unknown package cannot inject a price");
const beforeInvalid = captured.length;
assert.equal((await request({ subject: "unknown" })).status, 400);
assert.equal(captured.length, beforeInvalid, "Invalid subject cannot deliver a lead");
console.log("Package verification passed: 17 prices across comparison, service pages, structured data and contact forms; 2 extra services; invalid selections and server-owned lead pricing. No emails sent.");
