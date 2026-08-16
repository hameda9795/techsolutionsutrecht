# SEO verification contract

An SEO issue is only called **resolved** after all three states are true:

1. **Code verified** — `npm run build` and the 53-URL local production crawl pass.
2. **Production verified** — the same crawl passes against `https://techsolutionsutrecht.nl` after deployment.
3. **Google verified** — GSC URL Inspection shows a fresh crawl and the expected Google-selected canonical.

Code or production success must never be reported as Google confirmation. GSC can keep an older crawl result for days or weeks.

## Reviewed indexable set

`expected-indexable-paths.json` is the approved list of indexable URLs. Adding or removing a URL requires an intentional update to that file. This prevents an accidentally missing page from disappearing silently from the sitemap and from the regression crawl.

## Commands

```bash
npm run build
npx next start -p 3100
npm run seo:verify -- http://127.0.0.1:3100
npm run seo:verify -- https://techsolutionsutrecht.nl
```

The GitHub workflow runs the local production verification for pull requests and pushes to `main`. It also checks the live production site every Monday at 06:00 UTC.

## GSC baseline — 2026-08-16

- Sitemap URLs: 53
- URL Inspection `PASS`: 30
- Crawled, not indexed: 12
- Discovered, not indexed: 4
- Unknown to Google: 6
- Duplicate without user-selected canonical: 1
- Historical anomaly: `/blog/website-laten-maken` showed Google canonical `https://www.747live.bet/` from a 2026-07-17 crawl. The current page source is clean and self-canonical; Google confirmation remains pending until a fresh crawl.

The sitemap release date must be changed only when indexable page content or sitewide SEO structure materially changes. It must not use the build time as a fake modification date.
