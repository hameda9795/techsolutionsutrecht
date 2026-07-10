// Showcase van echte projecten die ik heb gebouwd.
// Demo-versie: bevat de eerste live demo's. Nieuwe projecten kunnen hier
// worden toegevoegd zonder de pagina-component aan te passen.

export type ProjectType = "website" | "webshop" | "webapp" | "tool";

export interface ShowcaseProject {
  id: string;
  title: string;
  /** Korte tagline die direct duidelijk maakt wat het project is. */
  tagline: string;
  /** Iets uitgebreidere omschrijving voor de quick-view. */
  description: string;
  /** Branche / klant-type, getoond als label. */
  sector: string;
  type: ProjectType;
  /** Jaar van oplevering. */
  year: string;
  /** Belangrijkste features / highlights. */
  highlights: string[];
  /** Gebruikte technieken (chips). */
  stack: string[];
  /** Live URL of demo-link. Leeg = nog niet publiek. */
  liveUrl: string;
  /** Screenshot/preview in /public. Leeg = gradient-mockup met initialen. */
  image: string;
  /** Tailwind classes voor de mockup-achtergrond (geen paars/cyaan gradients). */
  accent: string;
  /** Uitgelicht project (groter weergegeven). */
  featured?: boolean;
}

export const projectTypeLabels: Record<ProjectType, string> = {
  website: "Bedrijfswebsite",
  webshop: "Webshop",
  webapp: "Webapplicatie",
  tool: "Tool / Component",
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "bouwbedrijf-vandenberg",
    title: "Bouwbedrijf Van den Berg",
    tagline: "Industriële aannemerswebsite met offerte-wizard",
    description:
      "Een onderscheidende website voor een aannemer in de regio Utrecht. Volledig gericht op het binnenhalen van offerteaanvragen en het laten zien van afgeronde projecten, met een uniek, niet-standaard design.",
    sector: "Bouw & Vakmensen",
    type: "website",
    year: "2025",
    highlights: [
      "Offerte-wizard met 4 stappen",
      "Before / after vergelijkings-slider",
      "Zij-navigatie & diagonale vormen",
      "Parallax-animaties en 3D-tilt effecten",
    ],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://bouwbedrijf-vandenberg.demo.techsolutionsutrecht.nl/",
    image: "/images/portfolio/aannemer.webp",
    accent: "bg-[var(--color-primary)]",
    featured: true,
  },
  {
    id: "barbershop",
    title: "Barbershop Boekingssite",
    tagline: "Strakke kappers-site met online afspraak maken",
    description:
      "Moderne one-page site voor een barbershop met online boekingsflow, prijslijst en sfeervolle galerij. Ontworpen om bezoekers in één scroll tot een afspraak te bewegen.",
    sector: "Schoonheid & Verzorging",
    type: "website",
    year: "2025",
    highlights: [
      "Online afspraak maken",
      "Prijslijst & diensten-overzicht",
      "Sfeergalerij met lightbox",
      "100% mobiel-geoptimaliseerd",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "/demo/barbershop/index.html",
    image: "",
    accent: "bg-[var(--color-ink)]",
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    tagline: "Backend voor projectbeheer met statistieken",
    description:
      "Complete beheeromgeving die laat zien dat ik niet alleen statische sites bouw, maar ook complexe webapplicaties. Inclusief login, statistieken en projectbeheer.",
    sector: "Webapplicatie",
    type: "webapp",
    year: "2025",
    highlights: [
      "Beveiligd login-systeem",
      "Statistieken-dashboard met grafieken",
      "Projectbeheer-tabel met statussen",
      "Documentenoverzicht & dark mode",
    ],
    stack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://admin.demo.techsolutionsutrecht.nl/",
    image: "",
    accent: "bg-[var(--color-primary)]",
  },
  {
    id: "klant-portal",
    title: "Klant Portal",
    tagline: "Omgeving waar klanten hun project live volgen",
    description:
      "Een klantomgeving waarin opdrachtgevers de voortgang van hun project kunnen volgen, documenten uploaden en facturen inzien. Een echte full-stack toepassing.",
    sector: "Webapplicatie",
    type: "webapp",
    year: "2025",
    highlights: [
      "Aparte beveiligde klant-login",
      "Project-tijdlijn visualisatie",
      "Upload-zone voor documenten",
      "Factuuroverzicht & chat",
    ],
    stack: ["Next.js", "PostgreSQL", "Vercel Blob"],
    liveUrl: "https://portal.demo.techsolutionsutrecht.nl/",
    image: "",
    accent: "bg-[var(--color-primary)]",
  },
  {
    id: "device-toggle",
    title: "Responsive Device Toggle",
    tagline: "Interactieve preview: mobiel, tablet & desktop",
    description:
      "Een herbruikbaar UI-component waarmee klanten met één klik kunnen zien hoe hun site er op mobiel, tablet en desktop uitziet. Altijd zichtbaar en vloeiend geanimeerd.",
    sector: "Tool / Component",
    type: "tool",
    year: "2025",
    highlights: [
      "Schakelaar: mobiel / tablet / desktop",
      "Real-time container-resizing",
      "Vloeiende overgangsanimatie",
      "Altijd zichtbaar (sticky)",
    ],
    stack: ["React", "Tailwind CSS"],
    liveUrl: "https://device-toggle.demo.techsolutionsutrecht.nl/",
    image: "",
    accent: "bg-[var(--color-primary)]",
  },
];

export function getInitials(title: string): string {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}
