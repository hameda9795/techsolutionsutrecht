# SEO Action Plan — techsolutionsutrecht.nl

**URL:** https://techsolutionsutrecht.nl/
**Date:** 2026-06-09
**Overall score:** 74/100 (Good)

Fixes are ordered by **impact ÷ effort**. Each item lists the evidence, the action, and the expected payoff.

---

## 🔴 Priority 1 — High impact (do this week)

### 1. Fix mobile LCP (7.3s → target <2.5s)
- **Evidence:** PageSpeed mobile LCP 7.3s, FCP 3.2s, while TTFB is 2ms (backend is fine — problem is front-end render).
- **Actions:**
  - Reduce/defer unused JavaScript (Lighthouse flags ~450ms). Audit the Next.js bundle and code-split.
  - Load Google Tag Manager (`G-NBGY87SYXL`) with lower priority / after interaction.
  - Ensure the LCP element (hero heading/image) is prioritized and not blocked by the Inter web font; verify `font-display: swap`.
  - Serve right-sized, modern-format hero/logo images.
- **Payoff:** Largest single ranking + conversion lever; LCP is a direct CWV ranking signal.
- **Effort:** Medium-High.

### 2. Add `og:image` (and `twitter:image`)
- **Evidence:** `og:image` missing (required); social score 69/100.
- **Action:** Add a 1200×630 branded share image and reference it in `og:image` + `twitter:image`.
- **Payoff:** Proper link previews on WhatsApp/LinkedIn/Facebook/X → higher CTR on shared links.
- **Effort:** Low.

### 3. Fix heading whitespace bug
- **Evidence:** H1 = "Websites dieconverteren"; H2 = "Alles wat u nodig heeft voor eensterke online aanwezigheid" — spaces lost between inline spans.
- **Action:** Insert literal spaces (or `&nbsp;`/margin) between styled `<span>` segments in headings.
- **Payoff:** Restores readability of your most important keyword signals for crawlers, screen readers, and AI answer engines.
- **Effort:** Low.

---

## ⚠️ Priority 2 — Medium impact (this month)

### 4. Shorten the title tag (73 → ≤60 chars)
- **Action:** e.g. `Website Laten Maken Utrecht | TechSolutionsUtrecht`.
- **Payoff:** Avoids SERP truncation; keeps brand visible. **Effort:** Low.

### 5. Fix CLS (0.115 → <0.1) via image dimensions
- **Action:** Add explicit `width`/`height` (or `aspect-ratio`) to `profile.webp` and any other dimensionless images; add `loading="lazy"` to below-the-fold images (keep LCP image eager).
- **Payoff:** Passes CLS threshold; smoother load. **Effort:** Low.

### 6. Add security headers (45/100 → 90+)
- **Action:** Add `Content-Security-Policy`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`; add `includeSubDomains` to HSTS.
- **Payoff:** Hardens security posture (trust signal; indirect SEO/UX benefit). **Effort:** Low-Medium.

### 7. Strengthen homepage content & E-E-A-T
- **Action:** Expand toward ~1,000+ words; add a process section, real testimonials/reviews, and link "Max" to `/over-ons` with credentials. Consider adding genuine `Review`/`AggregateRating` markup once you have reviews.
- **Payoff:** More competitive for "website laten maken Utrecht"; stronger trust. **Effort:** Medium.

---

## ℹ️ Priority 3 — Low impact / polish

### 8. Normalize the canonical URL
- **Action:** Make canonical exactly match the served URL (trailing-slash consistency). **Effort:** Low.

### 9. Create `/llms.txt` for AI search
- **Action:** Publish `/llms.txt` with site name, description, and links to key pages (diensten, contact, blog, locations). **Effort:** Low.

### 10. Explicit AI-crawler policy in robots.txt
- **Action:** Decide whether to allow GPTBot/ClaudeBot/PerplexityBot/Google-Extended/CCBot etc. and add explicit rules (currently allowed via `*`). **Effort:** Low.

### 11. Add `sameAs` to ProfessionalService schema
- **Action:** Add LinkedIn / Google Business Profile URLs to `sameAs` for entity disambiguation. **Effort:** Low.

### 12. Verify unique content on programmatic pages
- **Action:** As location/branche pages grow, ensure each has genuinely unique local copy (not templated). Keep location pages under 30; hard limit 50. **Effort:** Ongoing.

---

## Quick-win checklist (all Low effort, do first)
- [ ] Add `og:image` + `twitter:image`
- [ ] Fix heading span spacing
- [ ] Shorten title to ≤60 chars
- [ ] Add width/height to images; lazy-load below-the-fold
- [ ] Add the 5 missing security headers + HSTS `includeSubDomains`
- [ ] Normalize canonical
- [ ] Publish `/llms.txt`
