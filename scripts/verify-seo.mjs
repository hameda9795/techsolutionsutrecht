import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CANONICAL_ORIGIN = "https://techsolutionsutrecht.nl";
const BUSINESS_ID = `${CANONICAL_ORIGIN}/#business`;
const WEBSITE_ID = `${CANONICAL_ORIGIN}/#website`;
const targetBase = new URL(
  process.argv[2] || process.env.SEO_BASE_URL || "http://127.0.0.1:3000",
);
const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const expectedPaths = JSON.parse(
  await readFile(path.join(projectRoot, "seo", "expected-indexable-paths.json"), "utf8"),
);
const errors = [];

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function decode(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function attribute(tag, name) {
  const match = tag.match(
    new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"),
  );
  return decode(match?.[1] ?? match?.[2] ?? match?.[3] ?? "");
}

function normalizeUrl(value) {
  const url = new URL(value);
  const pathname = url.pathname === "/" ? "" : url.pathname.replace(/\/+$/, "");
  return `${url.origin}${pathname}${url.search}`;
}

function canonicalForPath(pathname) {
  return normalizeUrl(new URL(pathname, `${CANONICAL_ORIGIN}/`).href);
}

function pathFor(value) {
  const pathname = new URL(value).pathname.replace(/\/+$/, "");
  return pathname || "/";
}

async function getText(url) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: { "user-agent": "TechSolutionsUtrecht-SEO-Regression/1.0" },
  });
  return { response, text: await response.text() };
}

const sitemapUrl = new URL("/sitemap.xml", targetBase);
const { response: sitemapResponse, text: sitemapXml } = await getText(sitemapUrl);
if (!sitemapResponse.ok) {
  fail("sitemap", `HTTP ${sitemapResponse.status} for ${sitemapUrl}`);
}

const sitemapEntries = [...sitemapXml.matchAll(/<url>([\s\S]*?)<\/url>/gi)].map(
  ([, block]) => ({
    loc: decode(block.match(/<loc>([\s\S]*?)<\/loc>/i)?.[1]?.trim() || ""),
    lastModified: block.match(/<lastmod>([\s\S]*?)<\/lastmod>/i)?.[1]?.trim() || "",
  }),
);

if (sitemapEntries.length === 0) fail("sitemap", "contains no URL entries");

const actualPaths = sitemapEntries.map(({ loc }) => pathFor(loc));
const duplicatePaths = [...new Set(actualPaths.filter((value, index) => actualPaths.indexOf(value) !== index))];
for (const pathname of duplicatePaths) fail("sitemap", `duplicate URL ${pathname}`);

for (const pathname of expectedPaths.filter((value) => !actualPaths.includes(value))) {
  fail("sitemap", `expected URL is missing: ${pathname}`);
}
for (const pathname of actualPaths.filter((value) => !expectedPaths.includes(value))) {
  fail("sitemap", `unexpected URL is not in the reviewed baseline: ${pathname}`);
}

for (const { loc, lastModified } of sitemapEntries) {
  const scope = pathFor(loc);
  let parsed;
  try {
    parsed = new URL(loc);
  } catch {
    fail(scope, `invalid sitemap URL: ${loc}`);
    continue;
  }
  if (parsed.origin !== CANONICAL_ORIGIN) {
    fail(scope, `sitemap origin must be ${CANONICAL_ORIGIN}, received ${parsed.origin}`);
  }
  if (parsed.pathname !== "/" && parsed.pathname.endsWith("/")) {
    fail(scope, "sitemap URL has a trailing slash");
  }
  const modifiedAt = Date.parse(lastModified);
  if (!lastModified || Number.isNaN(modifiedAt)) {
    fail(scope, "missing or invalid lastmod");
  } else if (modifiedAt > Date.now() + 24 * 60 * 60 * 1000) {
    fail(scope, `lastmod is in the future: ${lastModified}`);
  }
}

const canonicalOwners = new Map();
const cityPaths = new Set([
  "/utrecht", "/nieuwegein", "/houten", "/zeist", "/amersfoort", "/de-meern",
  "/vleuten", "/ijsselstein", "/veenendaal", "/woerden", "/culemborg",
]);

async function inspectPage(entry) {
  const pathname = pathFor(entry.loc);
  const fetchUrl = new URL(pathname, targetBase);
  let response;
  let html;
  try {
    ({ response, text: html } = await getText(fetchUrl));
  } catch (error) {
    fail(pathname, `request failed: ${error.message}`);
    return;
  }

  if (response.status !== 200) fail(pathname, `expected HTTP 200, received ${response.status}`);
  if (!response.headers.get("content-type")?.includes("text/html")) {
    fail(pathname, `expected text/html, received ${response.headers.get("content-type") || "no content type"}`);
  }
  if (/\bnoindex\b/i.test(response.headers.get("x-robots-tag") || "")) {
    fail(pathname, "X-Robots-Tag contains noindex");
  }

  const linkTags = [...html.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => tag);
  const canonicalTags = linkTags.filter((tag) =>
    attribute(tag, "rel").toLowerCase().split(/\s+/).includes("canonical"),
  );
  if (canonicalTags.length !== 1) {
    fail(pathname, `expected exactly one canonical tag, found ${canonicalTags.length}`);
  } else {
    const href = attribute(canonicalTags[0], "href");
    let canonical;
    try {
      canonical = normalizeUrl(new URL(href, `${CANONICAL_ORIGIN}/`).href);
    } catch {
      fail(pathname, `invalid canonical URL: ${href}`);
    }
    const expectedCanonical = canonicalForPath(pathname);
    if (canonical && canonical !== expectedCanonical) {
      fail(pathname, `canonical is ${canonical}; expected ${expectedCanonical}`);
    }
    if (canonical) {
      const owners = canonicalOwners.get(canonical) || [];
      owners.push(pathname);
      canonicalOwners.set(canonical, owners);
    }
  }

  const title = decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "");
  if (!title) fail(pathname, "missing title");

  const metaTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => tag);
  const description = metaTags.find(
    (tag) => attribute(tag, "name").toLowerCase() === "description",
  );
  if (!description || !attribute(description, "content").trim()) {
    fail(pathname, "missing meta description");
  }
  for (const tag of metaTags) {
    const name = attribute(tag, "name").toLowerCase();
    if (["robots", "googlebot"].includes(name) && /\bnoindex\b/i.test(attribute(tag, "content"))) {
      fail(pathname, `${name} meta contains noindex`);
    }
  }
  if (!/<h1\b[^>]*>/i.test(html)) fail(pathname, "missing H1");

  const jsonLd = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map(([, value]) => value.trim())
    .filter(Boolean);
  const serializedSchema = jsonLd.join("\n");
  if (!serializedSchema.includes(BUSINESS_ID)) fail(pathname, `schema is not linked to ${BUSINESS_ID}`);
  if (!serializedSchema.includes(WEBSITE_ID)) fail(pathname, `schema is not linked to ${WEBSITE_ID}`);
  if (cityPaths.has(pathname)) {
    const serviceId = `${canonicalForPath(pathname)}#service`;
    if (!serializedSchema.includes(serviceId)) fail(pathname, `missing city Service entity ${serviceId}`);
    const professionalServiceCount = (serializedSchema.match(/"@type":"ProfessionalService"/g) || []).length;
    if (professionalServiceCount !== 1) {
      fail(pathname, `expected one root ProfessionalService entity, found ${professionalServiceCount}`);
    }
  }
}

let cursor = 0;
await Promise.all(
  Array.from({ length: Math.min(8, sitemapEntries.length) }, async () => {
    while (cursor < sitemapEntries.length) {
      const entry = sitemapEntries[cursor++];
      await inspectPage(entry);
    }
  }),
);

for (const [canonical, owners] of canonicalOwners) {
  if (owners.length > 1) fail("canonical", `${canonical} is shared by ${owners.join(", ")}`);
}

const { response: robotsResponse, text: robotsText } = await getText(new URL("/robots.txt", targetBase));
if (!robotsResponse.ok) fail("robots.txt", `HTTP ${robotsResponse.status}`);
if (/^\s*Disallow:\s*\/\s*$/im.test(robotsText)) fail("robots.txt", "blocks the entire site");
if (!robotsText.includes(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`)) {
  fail("robots.txt", "does not reference the canonical sitemap URL");
}

if (errors.length > 0) {
  console.error(`SEO regression failed with ${errors.length} problem(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`SEO regression passed: ${sitemapEntries.length}/${expectedPaths.length} reviewed URLs are 200, indexable, self-canonical and schema-linked.`);
}
