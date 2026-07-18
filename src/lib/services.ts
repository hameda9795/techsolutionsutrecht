export type ServiceIcon =
  | "website"
  | "webshop"
  | "seo"
  | "maintenance"
  | "automation";

export interface CoreService {
  id: ServiceIcon;
  title: string;
  href: string;
  price: string;
  typicalPrice?: string;
  pagePriceNote?: string;
  homeDescription: string;
  homeFeatures: readonly string[];
  homeCta: string;
  pageDescription: string;
  pageFeatures: readonly string[];
  pageCta: string;
  schemaPrice: string;
}

export const coreServices: readonly CoreService[] = [
  {
    id: "website",
    title: "Website laten maken",
    href: "/diensten/website-laten-maken",
    price: "Vanaf €250",
    typicalPrice: "Meestal €350–€650",
    homeDescription:
      "Een professionele website met de pagina’s en functies die jouw bedrijf nodig heeft. Eigen beheer is mogelijk.",
    homeFeatures: [
      "Complete bedrijfswebsite",
      "Geschikt voor mobiel, tablet en desktop",
      "Contactformulier en WhatsApp",
      "Basis-SEO en volledige eigendom",
    ],
    homeCta: "Bekijk voorbeelden en prijzen",
    pageDescription:
      "Een complete professionele website met de pagina’s en functies die jouw bedrijf nodig heeft. Snel, gebruiksvriendelijk en geschikt voor ieder scherm.",
    pageFeatures: [
      "Complete bedrijfswebsite",
      "Geschikt voor mobiel, tablet en desktop",
      "Contactformulier en WhatsApp",
      "Basis-SEO en volledige eigendom",
      "Techniek passend bij je project",
      "Zelf beheren waar mogelijk",
    ],
    pageCta: "Bekijk websites en prijzen",
    schemaPrice: "250",
  },
  {
    id: "webshop",
    title: "Webshop laten maken",
    href: "/diensten/webshop",
    price: "Vanaf €795",
    typicalPrice: "Meestal €1.000–€2.000",
    homeDescription:
      "Een complete webshop waarmee je producten kunt beheren, betalingen ontvangt en bestellingen verwerkt.",
    homeFeatures: [
      "WooCommerce-webshop",
      "iDEAL-betaling via Mollie",
      "Product-, voorraad- en orderbeheer",
      "Verzendinstellingen en basis-SEO",
    ],
    homeCta: "Bekijk webshopmogelijkheden",
    pageDescription:
      "Een complete professionele webshop waarmee je producten kunt beheren, betalingen ontvangt en bestellingen overzichtelijk verwerkt.",
    pageFeatures: [
      "Complete responsive webshop",
      "iDEAL-betaling via Mollie",
      "Product- en categoriepagina’s",
      "Voorraad- en verzendbeheer",
      "Automatische bestelbevestigingen",
      "Basis-SEO en beheeromgeving",
    ],
    pageCta: "Bekijk webshopmogelijkheden",
    schemaPrice: "795",
  },
  {
    id: "seo",
    title: "Hoger in Google",
    href: "/diensten/seo",
    price: "Vanaf €200 per maand",
    homeDescription:
      "We verbeteren stap voor stap je lokale vindbaarheid in Google en houden de resultaten bij.",
    homeFeatures: [
      "Technische SEO-controle",
      "Optimalisatie van belangrijke pagina’s",
      "Google Bedrijfsprofiel verbeteren",
      "Monitoring en maandelijkse rapportage",
    ],
    homeCta: "Bekijk onze SEO-aanpak",
    pageDescription:
      "Verbeter stap voor stap de vindbaarheid van je website met technische SEO, betere pagina’s, lokale optimalisatie en duidelijke maandelijkse rapportage.",
    pageFeatures: [
      "Technische SEO-controle",
      "Zoekwoordenonderzoek",
      "Optimalisatie van belangrijke pagina’s",
      "Lokale SEO",
      "Interne links en paginastructuur",
      "Monitoring en maandelijkse rapportage",
    ],
    pageCta: "Bekijk onze SEO-aanpak",
    schemaPrice: "200",
  },
  {
    id: "maintenance",
    title: "Website onderhoud",
    href: "/diensten/website-onderhoud",
    price: "Vanaf €29 per maand",
    pagePriceNote: "Prijs afhankelijk van de website",
    homeDescription:
      "Wij houden je website veilig, actueel en bereikbaar, zodat jij er geen omkijken naar hebt.",
    homeFeatures: [
      "Technische updates en controles",
      "Regelmatige back-ups",
      "Beveiligings- en uptimecontrole",
      "Hulp bij technische problemen",
    ],
    homeCta: "Bekijk onderhoudspakketten",
    pageDescription:
      "Houd je website veilig, bereikbaar en technisch up-to-date met periodieke updates, back-ups, controles en ondersteuning.",
    pageFeatures: [
      "Technische updates en controles",
      "Regelmatige back-ups",
      "Beveiligingscontrole",
      "Uptimecontrole",
      "Hulp bij technische problemen",
      "Duidelijk onderhoudsoverzicht",
    ],
    pageCta: "Bekijk websiteonderhoud",
    schemaPrice: "29",
  },
  {
    id: "automation",
    title: "WhatsApp & automatisering",
    href: "/diensten/whatsapp-automatisering",
    price: "Vanaf €450",
    pagePriceNote: "Voor een eenvoudige automatisering",
    homeDescription:
      "Automatiseer bijvoorbeeld aanvragen, bevestigingen of terugkerende taken via WhatsApp, e-mail en je website.",
    homeFeatures: [
      "Eén eenvoudige automatisering",
      "Koppeling tussen maximaal twee systemen",
      "Volledige installatie en test",
      "Uitleg en ondersteuning na oplevering",
    ],
    homeCta: "Bekijk praktijkvoorbeelden",
    pageDescription:
      "Automatiseer berichten en terugkerende taken met een praktische workflow die je website, WhatsApp, e-mail of bestaande systemen koppelt.",
    pageFeatures: [
      "Eenvoudige workflow op maat",
      "Koppeling tussen maximaal twee systemen",
      "WhatsApp-, website- en e-mailkoppelingen",
      "Volledige installatie en testen",
      "Uitleg bij de oplevering",
      "Ondersteuning volgens offerte",
    ],
    pageCta: "Bekijk automatiseringsmogelijkheden",
    schemaPrice: "450",
  },
];
