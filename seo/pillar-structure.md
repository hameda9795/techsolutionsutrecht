# Pillar-structuur — TechSolutionsUtrecht

**Bijgewerkt:** 2026-07-18

## Dienstenhub

`/diensten` is de enige centrale hub voor digitale diensten. De hub bevat precies vijf serviceclusters:

1. `Website laten maken` — `/diensten/website-laten-maken`
2. `Webshop laten maken` — `/diensten/webshop`
3. `Hoger in Google` — `/diensten/seo`
4. `Website onderhoud` — `/diensten/website-onderhoud`
5. `WhatsApp & automatisering` — `/diensten/whatsapp-automatisering`

## Clusterregels

- Blogposts over websitekeuze, kosten, techniek en snelheid linken naar `/diensten/website-laten-maken`.
- Blogposts over producten, betalingen, WooCommerce en online verkoop linken naar `/diensten/webshop`.
- Blogposts over vindbaarheid, technische SEO en lokale SEO linken naar `/diensten/seo`.
- Blogposts over updates, back-ups, beveiliging en uptime linken naar `/diensten/website-onderhoud`.
- Blogposts over eenvoudige bevestigingen, terugkerende berichten en koppelingen tussen maximaal twee systemen linken naar `/diensten/whatsapp-automatisering`.
- Iedere commerciële blog-CTA gebruikt een definitieve URL met status 200 en eventueel `/contact`.

## Technologie versus dienst

WordPress en Next.js zijn mogelijke technologieën binnen `Website laten maken`. WooCommerce hoort bij `Webshop laten maken`. Geen van deze technologieën krijgt op basis van de techniek alleen een extra dienstenpagina.

## Uitgesloten serviceclusters

Maak geen servicecluster of nieuwe landingspagina voor:

- maatwerksoftware;
- webapplicaties;
- dashboards of klantportalen;
- volledige AI-chatbots;
- SEO-teksten als losse dienst;
- lokale SEO als losse dienst.

Oude URL's voor zulke pagina's blijven alleen als directe permanente redirect behouden om bestaande indexatie en backlinks veilig op te vangen.

## URL-kwaliteit

- Sitemap bevat uitsluitend canonieke URL's met status 200.
- Interne links gaan direct naar de eindbestemming en nooit via een redirect.
- Oude URL's redirecten in één stap met 308 naar de dichtstbijzijnde actuele pagina.
- Canonical, Open Graph URL, breadcrumb en schema gebruiken dezelfde definitieve URL.
