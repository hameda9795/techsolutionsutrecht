# Content Briefs — TechSolutionsUtrecht

**Bijgewerkt:** 2026-07-18
**Status:** actuele bron voor diensten, prijzen en interne links

## Dienstenoverzicht

TechSolutionsUtrecht biedt vijf digitale diensten. Gebruik in nieuwe of bijgewerkte content uitsluitend deze namen en URL's:

| Dienst | URL | Prijs | Belangrijkste inhoud |
|---|---|---|---|
| Website laten maken | `/diensten/website-laten-maken` | Vanaf €250; meestal €350–€650 | Complete bedrijfswebsite, responsive, contactformulier en WhatsApp, basis-SEO, volledige eigendom |
| Webshop laten maken | `/diensten/webshop` | Vanaf €795; meestal €1.000–€2.000 | WooCommerce, iDEAL via Mollie, product-, voorraad- en orderbeheer, verzending en basis-SEO |
| Hoger in Google | `/diensten/seo` | Vanaf €200 per maand | Technische SEO, belangrijke pagina's, Google Bedrijfsprofiel, monitoring en maandrapportage |
| Website onderhoud | `/diensten/website-onderhoud` | Vanaf €29 per maand | Technische updates, back-ups, beveiligings- en uptimecontrole, technische hulp |
| WhatsApp & automatisering | `/diensten/whatsapp-automatisering` | Vanaf €450 | Eén eenvoudige automatisering, maximaal twee systemen, installatie, test en uitleg |

De genoemde vanafprijzen gelden voor de basisuitvoering en zijn exclusief btw. De uiteindelijke prijs hangt af van functies, inhoud en koppelingen. Na een intake volgt een offerte met een vaste totaalprijs.

## Positionering en terminologie

- Beschrijf `Website laten maken` als een algemene dienst. WordPress en Next.js zijn alleen mogelijke technologieën binnen die dienst.
- Beperk een website niet tot een landingpage of een vast aantal pagina's. Benoem een complete bedrijfswebsite met de pagina's die het bedrijf nodig heeft.
- Bied geen maatwerksoftware, webapplicaties, dashboards, klantportalen of volledige AI-chatbots als afzonderlijke dienst aan.
- Een WooCommerce-webshop is een afzonderlijke dienst. Gebruik daarvoor altijd `/diensten/webshop`.
- SEO-teksten en lokale SEO zijn geen afzonderlijke diensten of URL's; ze kunnen alleen als onderdelen van `/diensten/seo` worden besproken wanneer de scope dat ondersteunt.
- Volledige chatbotontwikkeling valt buiten de standaarddienst. De automatiseringsdienst betreft één eenvoudige workflow en maximaal twee gekoppelde systemen.

## Homepage

De homepage toont precies de vijf digitale diensten uit de tabel. Kaarten, CTA's en prijzen moeten uit `src/lib/services.ts` komen zodat pagina's en homepage gelijk blijven.

## Dienstenpagina

`/diensten` is de centrale dienstenhub en linkt naar precies de vijf actuele diensten. De pagina biedt geen kaart of aanbod voor maatwerksoftware of webapplicaties.

## Blogrichtlijnen

Elke relevante blogpost:

- linkt naar de meest passende actuele dienst;
- gebruikt geen oude dienst-URL als interne link;
- maakt duidelijk onderscheid tussen marktinformatie en tarieven van TechSolutionsUtrecht;
- gebruikt actuele prijzen uit `src/lib/services.ts`;
- belooft geen vaste levertijd tenzij die voor het concrete project in een offerte staat;
- presenteert technologie niet als afzonderlijke dienst;
- linkt in de commerciële CTA naar een van de vijf diensten of naar `/contact`.

## Niet meer gebruiken

Gebruik deze routes niet in nieuwe content. Ze bestaan alleen als permanente redirect voor eerder geïndexeerde URL's:

- `/diensten/wordpress` → `/diensten/website-laten-maken`
- `/diensten/ai` → `/diensten/whatsapp-automatisering`
- `/diensten/maatwerk` → `/diensten`
- `/klein-bedrijf-webapplicatie` → `/diensten`
- `/diensten/seo/teksten` → `/diensten/seo`
- `/diensten/seo/lokale-seo` → `/diensten/seo`

## Publicatiecheck

- [ ] Dienstnaam, prijs en scope komen overeen met `src/lib/services.ts`
- [ ] Alle interne links verwijzen direct naar een URL met status 200
- [ ] Geen verwijzingen naar niet-aangeboden digitale diensten
- [ ] Eén duidelijke H1 en unieke title/description
- [ ] Canonical verwijst naar de eigen definitieve URL
- [ ] CTA sluit aan op het onderwerp van de pagina
