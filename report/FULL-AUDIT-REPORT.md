# SEO Audit Report — techsolutionsutrecht.nl

**URL audited:** https://techsolutionsutrecht.nl/
**Date:** 2026-06-09
**Type:** Single-URL full audit (homepage) with site-level signals (robots, sitemap)
**Business type:** Local service business — web development / IT (Utrecht, NL)
**Method:** LLM-first analysis backed by deterministic scripts (fetch_page, parse_html, pagespeed, robots_checker, security_headers, social_meta, redirect_checker, llms_txt_checker, sitemap fetch)

---

## Overall Score: 74 / 100 — **Good**

| Category | Weight | Score | Rating |
|----------|--------|-------|--------|
| Technical SEO | 25% | 80 | Good |
| Content Quality / E-E-A-T | 20% | 70 | Needs Improvement |
| On-Page SEO | 15% | 80 | Good |
| Schema / Structured Data | 15% | 85 | Good |
| Performance (CWV) | 10% | 50 | Needs Improvement |
| Image Optimization | 10% | 75 | Good |
| AI Search Readiness (GEO) | 5% | 55 | Needs Improvement |
| **Weighted total** | | **~74** | **Good** |

**One-line verdict:** A well-built, schema-rich Next.js local-business site with clean technical foundations; the main drag on rankings is **mobile performance (LCP 7.3s)**, followed by missing social/security headers and AI-search readiness gaps.

---

## Summary Table

| Element | Value | Severity |
|---------|-------|----------|
| HTTPS | Yes, HSTS present (max-age=63072000) | ✅ Pass |
| Redirect chain | 0 hops, 200 direct (231ms) | ✅ Pass |
| robots.txt | Present, references sitemap | ✅ Pass |
| XML sitemap | Present, ~40 clean URLs | ✅ Pass |
| Canonical | `https://techsolutionsutrecht.nl` (no trailing slash) | ⚠️ Warning |
| `lang` attribute | `nl` | ✅ Pass |
| Title tag | 73 chars (may truncate in SERP) | ⚠️ Warning |
| Meta description | 152 chars, compelling, keyword-rich | ✅ Pass |
| Meta robots | `index, follow` | ✅ Pass |
| H1 | Single H1 present | ✅ Pass |
| Heading text spacing | "Websites dieconverteren" — missing spaces from inline spans | ⚠️ Warning |
| Structured data | ProfessionalService + WebSite + FAQPage | ✅ Pass (see FAQPage note) |
| Open Graph | 6/7 — **og:image missing** | 🔴 Critical (social) |
| Twitter Card | summary_large_image, no image | ⚠️ Warning |
| Images alt text | All 4 images have alt | ✅ Pass |
| Image dimensions | profile.webp missing width/height | ⚠️ Warning |
| LCP (mobile) | **7.3s** (target <2.5s) | 🔴 Critical |
| FCP (mobile) | 3.2s (target <1.8s) | 🔴 Critical |
| CLS (mobile) | 0.115 (target <0.1) | ⚠️ Warning |
| Security headers | 45/100 — 5 missing | ⚠️ Warning |
| llms.txt | Not found (404) | ⚠️ Warning |
| AI crawler rules | 11 crawlers not explicitly managed (inherit `*`) | ℹ️ Info |
| hreflang | None (single-language Dutch site) | ✅ Pass (N/A) |

---

## Detailed Findings

### 1. Technical SEO — 80/100 (Good)

**✅ Strengths**
- Clean single-hop response (200, 231ms; server TTFB measured at 2ms — excellent backend).
- `robots.txt` present and correctly references `/sitemap.xml`.
- XML sitemap is well-structured with ~40 URLs covering location pages, service pages, branche (industry) pages, and a blog — good crawl coverage.
- `<html lang="nl">`, UTF-8 charset, responsive viewport all correctly set.
- HSTS present with a long max-age.

**⚠️ Issues**
- **Canonical inconsistency** — Canonical points to `https://techsolutionsutrecht.nl` (no trailing slash) while the page is served at `https://techsolutionsutrecht.nl/`. Low risk (Google normalizes), but standardize to one form.
  - *Impact:* Minor. Prevents future duplicate-URL ambiguity.
  - *Fix:* Make the canonical exactly match the served URL.
- **HSTS missing `includeSubDomains`** — limits HSTS protection to the apex.
- **Programmatic page footprint** — Sitemap has 8 city/location pages plus several "website-laten-maken-[branche]" pages. Below the 30-page warning threshold, so **safe**, but each location/branche page must carry genuinely unique local content to avoid thin-content / doorway-page risk as the set grows.
  - *Confidence:* Likely (only homepage crawled; inner pages not individually verified).

### 2. Content Quality / E-E-A-T — 70/100 (Needs Improvement)

**✅ Strengths**
- Clear E-E-A-T signals: named founder ("Max", Webdeveloper), KvK number (99202301), "12+ jaar ervaring", direct phone/email, opening hours, defined service area.
- Meta description is persuasive and keyword-aligned ("website laten maken in Utrecht … binnen 1 week online").
- FAQ section answers real buyer questions (price, timeline, mobile/Google suitability).

**⚠️ Issues**
- **Thin-ish homepage** — ~754 words. Acceptable for a homepage but light for the competitive "website laten maken Utrecht" query; competitors often run 1,000–1,500 words with proof.
  - *Fix:* Add a short process section, concrete portfolio proof, and testimonials/reviews.
- **No visible author/expertise depth** — "Max" is named but no last name, credentials, or LinkedIn on the homepage to strengthen person-level E-E-A-T.
  - *Fix:* Link "Max" to `/over-ons` and add real credentials.
- **No reviews / social proof markup** — No `AggregateRating`/`Review` visible. Real reviews would strengthen both E-E-A-T and SERP appearance.

### 3. On-Page SEO — 80/100 (Good)

**✅ Strengths**
- Strong, keyword-front-loaded title: *"Website Laten Maken Utrecht | Professioneel & Snel | TechSolutionsUtrecht"*.
- Single H1, logical H2/H3 hierarchy mapping services and FAQ.
- Good internal linking (Diensten, Portfolio, Blog, Over mij, Contact + footer branche/regio links).

**⚠️ Issues**
- **Title too long (73 chars)** — Likely truncated in mobile SERPs (~60 chars); brand at the end is cut first.
  - *Fix:* Trim to ≤60 chars, e.g. *"Website Laten Maken Utrecht | TechSolutionsUtrecht"*.
- **Heading whitespace bug** — Extracted headings render as "Websites dieconverteren", "Alles wat u nodig heeft voor eensterke online aanwezigheid". Inline `<span>` styling drops spaces between words in the accessibility tree and for text-based crawlers/LLMs.
  - *Impact:* Hurts machine readability of your most important on-page signals; reads oddly to screen readers and AI answer engines.
  - *Fix:* Ensure literal spaces exist between styled spans (space / `&nbsp;` / margin, not just a line break).

### 4. Schema / Structured Data — 85/100 (Good)

**✅ Strengths**
- Rich, valid `ProfessionalService` JSON-LD: name, description, telephone, email, PostalAddress, GeoCoordinates, `areaServed` (8 cities), priceRange, paymentAccepted, openingHoursSpecification, founder (Person), KvK identifier, and `hasOfferCatalog`. Excellent LocalBusiness-grade markup.
- `WebSite` schema also present (good for sitelinks/search box potential).
- JSON-LD format used throughout (correct).

**⚠️ / ℹ️ Issues**
- **FAQPage schema present** — Since August 2023, FAQ **rich results** are restricted to authoritative government/health sites. On a commercial site this markup will **not** produce FAQ rich results in Google. It is not penalized and may still aid AI/answer engines, so it is low priority — just don't expect SERP FAQ accordions.
- Consider adding `sameAs` (LinkedIn, Google Business Profile) to the ProfessionalService entity to strengthen entity disambiguation.

### 5. Performance / Core Web Vitals — 50/100 (Needs Improvement)

PageSpeed Insights (mobile, Lighthouse lab data) — Performance **66/100**:

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| LCP | **7.3s** | <2.5s | 🔴 Critical |
| FCP | 3.2s | <1.8s | 🔴 Poor |
| CLS | 0.115 | <0.1 | ⚠️ Slightly over |
| TTFB | 2ms | <800ms | ✅ Excellent |

- **LCP of 7.3s is the single biggest ranking/UX risk.** TTFB is essentially instant, so the bottleneck is client-side render — render-blocking resources, JS hydration, and image/font loading. Top Lighthouse opportunity: "Reduce unused JavaScript (~450ms)".
  - *Likely causes:* Next.js JS bundle + hydration, Google Tag Manager, and Inter web-font load competing with the LCP element; multiple preloaded images.
  - *Fixes:* Code-split/defer non-critical JS, lower GTM priority, confirm `font-display: swap` applies, prioritize the true LCP element, serve right-sized responsive images.
- **CLS 0.115** — just over threshold. `profile.webp` has no width/height → layout shift.
  - *Fix:* Add explicit width/height (or aspect-ratio) to all images.

### 6. Image Optimization — 75/100 (Good)

**✅ Strengths**
- All 4 images have alt text (logo, logo-icon, profile ×2).
- WebP used for the profile image; logo has explicit dimensions.
- Images preloaded via resource hints.

**⚠️ Issues**
- `profile.webp` (used twice) has **no width/height** → contributes to CLS.
- No `loading="lazy"` on any image — below-the-fold images should lazy-load; the LCP image should stay eager.
- Two identical `profile.webp` references with different alt ("Max", "Max - Software Engineer") suggest a duplicate render — verify only one is needed.

### 7. AI Search Readiness (GEO) — 55/100 (Needs Improvement)

- **No `llms.txt`** (404). Adding `/llms.txt` with site name, description, and key page links improves discoverability by AI answer engines.
- **AI crawlers not explicitly managed** — 11 crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, etc.) inherit the permissive `*` rules and are currently **allowed** (good for GEO visibility). Informational — decide deliberately whether you want them, then state it explicitly.
- **Positive GEO signals:** strong structured data and a clear FAQ block help answer engines extract facts.

---

## Environment Notes
- All scripts executed successfully against the live site; no environment limitations affected this audit.
- Scope: deep analysis of the **homepage**. Location, service, branche, and blog pages were enumerated via sitemap but not individually crawled — findings about those pages are marked *Likely*.

## Confidence Legend
- **Confirmed** — directly observed in fetched HTML / script output.
- **Likely** — strong inference, not individually verified (e.g., inner pages).
