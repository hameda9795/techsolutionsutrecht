import type { ContactSubject } from "@/lib/contact-subjects";

export type PackageCategory = "wordpress" | "webshop" | "maatwerk" | "seo" | "chatbot" | "windows" | "onderhoud";
export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  period: "eenmalig" | "per maand";
  from?: boolean;
  tagline: string;
  features: string[];
  audience: string;
  setupFee?: number;
}
export interface PackageGroup {
  id: PackageCategory;
  title: string;
  href: string;
  subject: ContactSubject;
  intro: string;
  shared: string;
  notes: string[];
  packages: ServicePackage[];
}

export const packageGroups: Record<PackageCategory, PackageGroup> = {
  wordpress: {
    id: "wordpress", title: "WordPress website laten maken", href: "/diensten/website-laten-maken", subject: "Website laten maken",
    intro: "Een compacte website of meer ruimte voor je diensten? Kies wat jouw bedrijf nodig heeft. Je werkt rechtstreeks met Max in Utrecht-Zuilen.",
    shared: "In elk pakket: een WordPress-ontwerpbasis aangepast aan je huisstijl, een mobielvriendelijke website, basis-SEO en uitleg over zelf wijzigen.",
    notes: ["Jij levert teksten, foto’s en logo. Hosting, domein, onderhoud en betaalde licenties zijn apart.", "Google Bedrijfsprofiel: alleen voor geschikte bedrijven. Google verzorgt de verificatie; ik help je met de inrichting."],
    packages: [
      { id: "wordpress-start", name: "Start", price: 300, period: "eenmalig", tagline: "Een sterke basis", audience: "Voor een compacte bedrijfswebsite", features: ["1 pagina · maximaal 6 secties", "Mobielvriendelijk ontwerp", "Contactformulier", "Basis-SEO voor 1 zoekthema", "Search Console + sitemap", "1 correctieronde"] },
      { id: "wordpress-business", name: "Business", price: 500, period: "eenmalig", tagline: "Meer ruimte voor je diensten", audience: "Voor meerdere diensten", features: ["Maximaal 3 inhoudspagina’s", "Alles van Start", "Zoekthema per pagina", "GA4: bezoekers meten", "1 gemeten contactactie", "2 correctierondes"] },
      { id: "wordpress-lokaal", name: "Lokaal Compleet", price: 700, period: "eenmalig", tagline: "Je bedrijf lokaal presenteren", audience: "Voor lokale ondernemers", features: ["Maximaal 5 inhoudspagina’s", "Alles van Business", "Lokale inhoud per dienst", "Google Bedrijfsprofiel instellen*", "Formulier- en WhatsAppmeting", "2 correctierondes"] },
    ],
  },
  webshop: {
    id: "webshop", title: "WooCommerce webshop laten maken", href: "/diensten/webshop", subject: "Webshop laten maken",
    intro: "Verkoop je producten via een eigen webshop. Het aantal producten dat ik invoer, de betaalinstellingen en de koppelingen staan vooraf vast.",
    shared: "In elk pakket: WordPress + WooCommerce, mobiel ontwerp, winkelwagen, afrekenen, voorraadbeheer en beheeruitleg.",
    notes: ["Jij levert productteksten, foto’s en prijzen. Eén taal, euro’s en één Nederlandse verzendzone.", "Hosting, domein, onderhoud, licenties en transactiekosten apart. De productaantallen gaan over mijn invoerwerk; je kunt later zelf producten toevoegen.", "*Een bestaande plugin met gedocumenteerde koppeling; geen nieuw maatwerk. GBP alleen als je bedrijf in aanmerking komt."],
    packages: [
      { id: "webshop-start", name: "Webshop Start", price: 950, period: "eenmalig", tagline: "Je eerste producten online", audience: "Voor een klein assortiment", features: ["Tot 10 eenvoudige producten", "3 productcategorieën", "iDEAL via 1 betaalprovider", "Verzending binnen Nederland", "Basis-SEO + Search Console", "Testbestelling + beheeruitleg", "1 correctieronde"] },
      { id: "webshop-business", name: "Webshop Business", price: 1450, period: "eenmalig", tagline: "Meer producten en inzicht", audience: "Voor een groeiend assortiment", features: ["Alles van Start", "Tot 30 producten", "5 productcategorieën", "Varianten: tot 5 per product", "GA4: aankopen meten", "SEO voor 3 categoriepagina’s", "2 correctierondes"] },
      { id: "webshop-plus", name: "Webshop Plus", price: 2100, period: "eenmalig", tagline: "Verbind je webshop met je werk", audience: "Voor producten en een koppeling", features: ["Alles van Business", "Tot 60 producten", "8 productcategorieën", "Varianten: tot 5 per product", "SEO voor 5 categoriepagina’s", "1 standaard plugin-koppeling*", "Google Bedrijfsprofiel indien geschikt", "2 correctierondes"] },
    ],
  },
  maatwerk: {
    id: "maatwerk", title: "Maatwerk website laten maken", href: "/diensten/maatwerk-website", subject: "Maatwerk website laten maken",
    intro: "Een website zonder WordPress, voor een eigen ontwerp en een gerichte technische opbouw. We bepalen eerst wat je nodig hebt; daarna ontvang je een vaste offerte.",
    shared: "In elk pakket: eigen ontwerp, één taal, mobielvriendelijke pagina’s, contactformulier, basis-SEO, Search Console en GA4.",
    notes: ["Vanafprijzen voor de beschreven scope. Hosting, licenties, onderhoud en extra functies apart.", "Ook WordPress kan maatwerk zijn. Geen van beide is automatisch beter voor SEO."],
    packages: [
      { id: "maatwerk-start", name: "Maatwerk Start", price: 1500, from: true, period: "eenmalig", tagline: "Een eigen ontwerp, gericht gebouwd", audience: "Voor een website zonder CMS", features: ["Tot 3 pagina’s · 1 taal", "Eigen ontwerp + contactformulier", "Basis-SEO, Search Console en GA4", "Geen CMS of externe koppelingen", "2 correctierondes"] },
      { id: "maatwerk-business", name: "Maatwerk Business", price: 2750, from: true, period: "eenmalig", tagline: "Een eigen website die je zelf bijwerkt", audience: "Voor een website met inhoudsbeheer", features: ["Tot 5 pagina’s · 1 taal", "Ontwerp en SEO-basis van Start", "Eenvoudig CMS voor teksten en foto’s", "Tot 3 gemeten contactacties", "Google Bedrijfsprofiel indien geschikt", "2 correctierondes"] },
    ],
  },
  seo: {
    id: "seo", title: "SEO pakketten: eerst inzicht, dan verbeteren", href: "/diensten/seo", subject: "Hoger in Google (SEO)",
    intro: "Laat onderzoeken welke zoekwoorden bij je aanbod passen en welke pagina’s verbetering nodig hebben. Daarna voeren we het afgesproken werk uit en volgen we de resultaten.",
    shared: "Nieuwe maandtrajecten starten met SEO Start: €300 eenmalig, naast het maandbedrag. Een al afgenomen, bruikbare SEO Start wordt niet dubbel gerekend.",
    notes: ["Eerste maand: Lokale SEO €550; SEO Groei €750. Daarna €250 of €450 per maand. Maandelijks opzegbaar voor de volgende betaalperiode.", "Extra ontwikkelwerk en externe kosten vooraf apart geoffreerd. GBP alleen voor geschikte bedrijven.", "AI-checks onderzoeken zichtbaarheid; vermeldingen, klikken en posities zijn niet gegarandeerd."],
    packages: [
      { id: "seo-start", name: "SEO Start", price: 300, period: "eenmalig", tagline: "Onderzoek en de eerste verbeteringen", audience: "Voor een duidelijk vertrekpunt", features: ["SEO-audit tot 5 pagina’s", "Onderzoek naar 15 zoekwoorden", "Zoekwoorden aan pagina’s koppelen", "2 bestaande pagina’s verbeteren", "1 uur technische verbeteringen", "Search Console controleren", "Prioriteiten voor de volgende stap"] },
      { id: "seo-lokaal", name: "Lokale SEO", price: 250, period: "per maand", setupFee: 300, tagline: "Werken aan je lokale vindbaarheid", audience: "Voor lokale dienstverleners", features: ["1 bestaande pagina verbeteren", "Google Bedrijfsprofiel bijwerken*", "Tot 10 zoekwoorden volgen", "1 uur technische verbeteringen", "Rapport: klikken en aanvragen", "Maandelijks opzegbaar"] },
      { id: "seo-groei", name: "SEO Groei", price: 450, period: "per maand", setupFee: 300, tagline: "Meer ruimte voor inhoud en techniek", audience: "Voor een bredere SEO-aanpak", features: ["2 pagina’s verbeteren óf 1 nieuwe", "Google Bedrijfsprofiel bijwerken*", "Tot 20 zoekwoorden volgen", "2 uur technische verbeteringen", "AI-check: 5 vragen, 2 platforms", "Rapport + vervolgstappen", "Maandelijks opzegbaar"] },
    ],
  },
  chatbot: {
    id: "chatbot", title: "Chatbot laten maken", href: "/diensten/chatbot-laten-maken", subject: "Chatbot laten maken",
    intro: "Geef bezoekers een plek om vragen te stellen over je diensten. Je chatbot gebruikt de afgesproken bedrijfsinformatie en verwijst door als persoonlijk contact nodig is.",
    shared: "Je eigen chatbot op één website, afgestemd op je bronnen en huisstijl. De functies en testvragen leggen we vooraf vast.",
    notes: ["AI-gebruik, hosting, platformlicenties en onderhoud apart. Vooraf bespreken we gebruik en kostenlimieten; geen onbeperkte gesprekken inbegrepen.", "Eén taal. Een bronpagina bevat maximaal 1.000 woorden. Extra kanalen en complexe koppelingen krijgen een aparte offerte."],
    packages: [
      { id: "chatbot-start", name: "Chatbot Start", price: 650, from: true, period: "eenmalig", tagline: "Vragen beantwoorden op je website", audience: "Voor vragen over je aanbod", features: ["1 website · 1 taal", "Tot 20 bronpagina’s", "Vormgeving in je huisstijl", "Doorverwijzing naar contact", "20 testvragen + installatie"] },
      { id: "chatbot-business", name: "Chatbot Business", price: 1250, from: true, period: "eenmalig", tagline: "Van vraag naar contactverzoek", audience: "Voor vragen en aanvragen", features: ["Alles van Chatbot Start", "Tot 50 bronpagina’s", "Contactgegevens verzamelen", "1 koppeling met e-mail of CRM", "40 testvragen + beheeruitleg"] },
    ],
  },
  windows: {
    id: "windows", title: "Maatwerk software laten maken", href: "/diensten/maatwerk-software", subject: "Windows-applicatie laten maken",
    intro: "Windows-applicaties voor één duidelijk bedrijfsproces: bijvoorbeeld gegevens controleren, bestanden verwerken of een rapport maken. De werking bepaalt de offerte.",
    shared: "Eerst leggen we functies, gegevens en acceptatiecriteria vast. Daarna volgt een vaste offerte voor je Windows-applicatie, met installatie en broncode.",
    notes: ["De voorbeeldscope is voor één gebruiker. Meerdere gebruikers, complexe koppelingen en extra functies vragen een aparte offerte.", "Hosting, externe licenties, certificaten voor ondertekening en onderhoud apart. Windows-versie en gebruiksomgeving spreken we vooraf af."],
    packages: [
      { id: "windows-tool", name: "Windows Tool", price: 1500, from: true, period: "eenmalig", tagline: "Een praktisch hulpmiddel voor je werk", audience: "Voor één afgebakende taak", features: ["1 gebruiker · 1 werkproces", "Tot 3 schermen", "Lokale gegevensopslag", "CSV import en export", "Installatie + broncode"] },
      { id: "windows-business", name: "Windows Business", price: 3000, from: true, period: "eenmalig", tagline: "Gegevens verwerken en verbinden", audience: "Voor een proces met een koppeling", features: ["1 gebruiker · tot 5 schermen", "1 werkproces + rapportage", "1 gedocumenteerde API-koppeling", "Lokale gegevensopslag", "Installatie + broncode"] },
    ],
  },
  onderhoud: {
    id: "onderhoud", title: "WordPress onderhoud", href: "/diensten/website-onderhoud", subject: "Website onderhoud",
    intro: "Laat updates en controles uitvoeren op je website of webshop. Zo is duidelijk wie het technische onderhoud verzorgt en welke kleine wijzigingen inbegrepen zijn.",
    shared: "Optioneel onderhoud voor één website of webshop. Vooraf controleren we of de bestaande installatie geschikt is voor het pakket.",
    notes: ["Hosting en betaalde licenties apart. Grote reparaties, extra ontwikkeling en herstel na een hack vallen buiten het pakket en worden eerst geoffreerd.", "De tijd voor kleine wijzigingen stapelt niet op. Monitoring betekent geen 24/7 menselijke ondersteuning."],
    packages: [
      { id: "onderhoud-wordpress", name: "WordPress Onderhoud", price: 39, period: "per maand", tagline: "Je bedrijfswebsite technisch bijhouden", audience: "Voor één WordPress-website", features: ["WordPress- en pluginupdates", "Back-upcontrole", "Beschikbaarheid monitoren", "Maandelijkse functionele controle", "15 minuten kleine inhoudswijzigingen"] },
      { id: "onderhoud-webshop", name: "WooCommerce Onderhoud", price: 69, period: "per maand", tagline: "Extra aandacht voor het bestelproces", audience: "Voor één WooCommerce-webshop", features: ["Updates en back-upcontrole", "Beschikbaarheid monitoren", "Winkelwagen en checkout testen", "Controle na geplande updates", "30 minuten kleine wijzigingen"] },
    ],
  },
};

export const packageCategoryOrder: PackageCategory[] = ["wordpress", "webshop", "maatwerk", "seo", "chatbot", "windows", "onderhoud"];
export const extraPackages = [
  { id: "gratis-seo-scan", name: "Gratis SEO scan", price: 0, subject: "Hoger in Google (SEO)" as ContactSubject },
  { id: "ai-vindbaarheid", name: "AI-vindbaarheid check", price: 250, subject: "Hoger in Google (SEO)" as ContactSubject },
];
export const formatPrice = (price: number) => `€${price.toLocaleString("nl-NL")}`;

export function packageContactHref(group: PackageGroup, plan: ServicePackage, source = group.href) {
  return `/contact?${new URLSearchParams({ pakket: plan.id, van: source }).toString()}`;
}

export function findPackage(id: string) {
  for (const group of Object.values(packageGroups)) {
    const plan = group.packages.find((p) => p.id === id);
    if (plan) return { name: plan.name, subject: group.subject, priceLabel: `${plan.from ? "vanaf " : ""}${formatPrice(plan.price)} ${plan.period} excl. btw${plan.setupFee ? ` + ${formatPrice(plan.setupFee)} eenmalige start` : ""}` };
  }
  const extra = extraPackages.find((p) => p.id === id);
  return extra ? { name: extra.name, subject: extra.subject, priceLabel: extra.price ? `${formatPrice(extra.price)} eenmalig excl. btw` : "Gratis" } : undefined;
}
