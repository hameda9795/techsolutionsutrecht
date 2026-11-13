# Content Briefs — TechSolutionsUtrecht

**Bijgewerkt:** 2026-09-06
**Status:** door de eigenaar goedgekeurde pakketten, lokaal geïmplementeerd; publicatie nog niet uitgevoerd.

## Dienstenoverzicht

Websitebouw voor ondernemers in Utrecht is de belangrijkste acquisitiefocus. Zuilen is de werkelijke vestigingsplaats. De eigenaar heeft de visuele pakketvoorstellen goedgekeurd en gevraagd deze met dezelfde vormgeving te implementeren. Zeven categorieën staan centraal:

| Dienst | URL | Prijs | Belangrijkste inhoud |
|---|---|---|---|
| WordPress website laten maken | `/diensten/website-laten-maken` | €300 / €500 / €700 | 1 / maximaal 3 / maximaal 5 inhoudspagina’s, aangepaste ontwerpbasis, aangeleverde inhoud, basis-SEO |
| WooCommerce webshop laten maken | `/diensten/webshop` | €950 / €1.450 / €2.100 | Invoer van maximaal 10 / 30 / 60 producten, iDEAL, voorraadbeheer en afgesproken verzending |
| Maatwerk website laten maken | `/diensten/maatwerk-website` | Vanaf €1.500 / €2.750 | Zonder WordPress; maximaal 3 pagina’s zonder CMS / maximaal 5 met eenvoudig CMS |
| SEO uitbesteden | `/diensten/seo` | Gratis scan; €300 eenmalig; €250 / €450 per maand plus start | Zoekwoorden, concrete paginaverbeteringen, technische uren, geschikte GBP, rapportage; AI-check bij Groei |
| Chatbot laten maken | `/diensten/chatbot-laten-maken` | Vanaf €650 / €1.250 | Eén websitekanaal, één taal, maximaal 20 / 50 bronpagina’s |
| Maatwerk software laten maken | `/diensten/maatwerk-software` | Vanaf €1.500 / €3.000 | Windows-applicatie voor één gebruiker en één afgebakend proces, broncode en installatie |
| WordPress onderhoud | `/diensten/website-onderhoud` | €39 / WooCommerce €69 per maand | Updates, back-upcontrole, monitoring, 15 / 30 minuten kleine wijzigingen |

`src/lib/packages.ts` is de centrale bron voor prijzen, scope, startkosten en aanvraaggegevens. Alle bedragen zijn exclusief btw. Bouwprijzen sluiten hosting, domein, onderhoud en betaalde licenties uit. Bij chatbots zijn AI-gebruik en hosting apart. Een nieuw SEO-maandtraject begint met €300 SEO Start; een bruikbare eerdere SEO Start wordt niet dubbel gefactureerd. AI-vindbaarheid check los: €250 eenmalig voor drie pagina’s, tien vragen op twee beschikbare platforms en één gerichte verbetering. De precieze scope staat op de dienstenpagina’s.

## Positionering en terminologie

- Houd de homepage gericht op website laten maken Utrecht en webdesign Utrecht; direct contact, voorbeelden en WordPress-pakketten.
- Beschrijf de werkelijke limieten per pakket. €300 is één WordPress-pagina met basis-SEO en aangepaste ontwerpbasis, geen volledig nieuw ontwerp.
- De eigenaar biedt ook chatbots en Windows-applicaties aan. Gebruik de afgebakende pakketten; beloof geen onbeperkte softwareontwikkeling.
- Een WooCommerce-webshop is een afzonderlijke dienst. Gebruik daarvoor altijd `/diensten/webshop`.
- SEO-teksten en lokale SEO zijn geen afzonderlijke diensten of URL's; ze kunnen alleen als onderdelen van `/diensten/seo` worden besproken wanneer de scope dat ondersteunt.
- Basis-SEO en GSC horen bij elk WordPress-pakket; GA4 vanaf Business; GBP alleen indien geschikt bij Lokaal Compleet. Google bepaalt verificatie.
- Ook WordPress kan maatwerk zijn. Een andere technische opbouw geeft geen automatisch SEO-voordeel.
- Gebruik natuurlijk Nederlands en concrete klantvragen. Geen zoekwoorddichtheidsdoelen, positiegaranties, verzonnen cases of gegarandeerde AI-vermeldingen.

## Homepage

De homepage toont eerst de drie WordPress-pakketten. Het gedeelde pakketmodel voedt kaarten, prijzen, aanvraagselectie en structured data. Geen reparaties of verre steden als hoofdprioriteit.

## Dienstenpagina

`/diensten` en `/prijzen` ontsluiten de zeven categorieën. Iedere dienst heeft eigen uitleg en zoekintentie. Prijsniveaus zijn kaarten binnen de dienst, geen losse geïndexeerde pagina’s. Bestaande WhatsApp- en reparatieroutes blijven bereikbaar, maar horen niet bij de zeven hoofdcategorieën.

## Blogrichtlijnen

Elke relevante blogpost:

- linkt naar de meest passende actuele dienst;
- gebruikt geen oude dienst-URL als interne link;
- maakt duidelijk onderscheid tussen marktinformatie en tarieven van TechSolutionsUtrecht;
- gebruikt actuele prijzen uit `src/lib/packages.ts`;
- belooft geen vaste levertijd tenzij die voor het concrete project in een offerte staat;
- legt WordPress versus maatwerk uit vanuit het gebruik en beheer;
- linkt in de commerciële CTA naar de passende actuele dienst of pakketselectie op `/contact`.

## Niet meer gebruiken

Gebruik deze routes niet in nieuwe content. Ze bestaan alleen als permanente redirect voor eerder geïndexeerde URL's:

- `/diensten/wordpress` → `/diensten/website-laten-maken`
- `/diensten/ai` → `/diensten/whatsapp-automatisering`
- `/diensten/maatwerk` → `/diensten`
- `/klein-bedrijf-webapplicatie` → `/diensten`
- `/diensten/seo/teksten` → `/diensten/seo`
- `/diensten/seo/lokale-seo` → `/diensten/seo`

## Publicatiecheck

- [ ] Dienstnaam, prijs en scope komen overeen met `src/lib/packages.ts`
- [ ] Alle interne links verwijzen direct naar een URL met status 200
- [ ] Geen verwijzingen naar niet-aangeboden digitale diensten
- [ ] Eén duidelijke H1 en unieke title/description
- [ ] Canonical verwijst naar de eigen definitieve URL
- [ ] CTA sluit aan op het onderwerp van de pagina
- [ ] Bouw en controles slagen: `npm run build`, `node scripts/verify-seo.mjs http://127.0.0.1:3003`, `node scripts/verify-packages.mjs http://127.0.0.1:3003`
- [ ] Mobiele kaarten en contactselectie visueel gecontroleerd. Pakketverificatie gebruikt een lokale testvervanger voor bezorging; geen echte e-mailtest.
