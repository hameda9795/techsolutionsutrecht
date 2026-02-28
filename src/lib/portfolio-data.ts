// Portfolio Data Management
// Uses localStorage for persistence

export interface ProjectDemo {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
  image: string;
  demoUrl: string;
  categoryId: string;
  subcategoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubcategoryData {
  name: string;
  slug: string;
}

export interface CategoryData {
  id: string;
  name: string;
  icon: string;
  subcategories: SubcategoryData[];
}

// Default categories data
export const defaultCategories: CategoryData[] = [
  {
    id: "bouw",
    name: "Bouw & Vakmensen",
    icon: "Building2",
    subcategories: [
      { name: "Aannemer", slug: "aannemer" },
      { name: "Loodgieter", slug: "loodgieter" },
      { name: "Elektricien", slug: "elektricien" },
      { name: "Schilder", slug: "schilder" },
      { name: "Hovenier", slug: "hovenier" },
      { name: "Dakdekker", slug: "dakdekker" },
      { name: "Timmerman", slug: "timmerman" },
      { name: "Stukadoor", slug: "stukadoor" }
    ]
  },
  {
    id: "horeca",
    name: "Horeca & Catering",
    icon: "UtensilsCrossed",
    subcategories: [
      { name: "Restaurant", slug: "restaurant" },
      { name: "Café", slug: "cafe" },
      { name: "Lunchroom", slug: "lunchroom" },
      { name: "Cateringbedrijf", slug: "cateringbedrijf" },
      { name: "Hotel", slug: "hotel" },
      { name: "B&B", slug: "bnb" },
      { name: "Eetcafé", slug: "eetcafe" }
    ]
  },
  {
    id: "financieel",
    name: "Financieel & Administratie",
    icon: "Calculator",
    subcategories: [
      { name: "Boekhouder", slug: "boekhouder" },
      { name: "Accountant", slug: "accountant" },
      { name: "Belastingadviseur", slug: "belastingadviseur" },
      { name: "Payroll specialist", slug: "payroll-specialist" },
      { name: "Administratiekantoor", slug: "administratiekantoor" }
    ]
  },
  {
    id: "vastgoed",
    name: "Vastgoed & Makelaardij",
    icon: "Home",
    subcategories: [
      { name: "Makelaar", slug: "makelaar" },
      { name: "Vakantiewoning verhuur", slug: "vakantiewoning-verhuur" },
      { name: "B&B Verhuur", slug: "bnb-verhuur" },
      { name: "Taxateur", slug: "taxateur" },
      { name: "Vastgoedbeheer", slug: "vastgoedbeheer" }
    ]
  },
  {
    id: "gezondheid",
    name: "Gezondheidszorg",
    icon: "HeartPulse",
    subcategories: [
      { name: "Fysiotherapie", slug: "fysiotherapie" },
      { name: "Tandarts", slug: "tandarts" },
      { name: "Psycholoog", slug: "psycholoog" },
      { name: "Praktijk voor Psychotherapie", slug: "psychotherapie" },
      { name: "Huisarts", slug: "huisarts" },
      { name: "Diëtist", slug: "dietist" }
    ]
  },
  {
    id: "auto",
    name: "Auto & Mobiliteit",
    icon: "Car",
    subcategories: [
      { name: "Garage", slug: "garage" },
      { name: "Autobedrijf", slug: "autobedrijf" },
      { name: "APK Keuring", slug: "apk-keuring" },
      { name: "Autoverhuur", slug: "autoverhuur" },
      { name: "Occasion dealer", slug: "occasion-dealer" },
      { name: "Leasebedrijf", slug: "leasebedrijf" }
    ]
  },
  {
    id: "onderwijs",
    name: "Onderwijs & Training",
    icon: "GraduationCap",
    subcategories: [
      { name: "Rijschool", slug: "rijschool" },
      { name: "Taalschool", slug: "taalschool" },
      { name: "Bijles", slug: "bijles" },
      { name: "Opleidingscentrum", slug: "opleidingscentrum" },
      { name: "Training & Coaching", slug: "training-coaching" }
    ]
  },
  {
    id: "schoonheid",
    name: "Schoonheidsverzorging",
    icon: "Sparkles",
    subcategories: [
      { name: "Kapsalon", slug: "kapsalon" },
      { name: "Nagelstudio", slug: "nagelstudio" },
      { name: "Beautysalon", slug: "beautysalon" },
      { name: "Pedicure", slug: "pedicure" },
      { name: "Massagepraktijk", slug: "massagepraktijk" },
      { name: "Wimperextensions", slug: "wimperextensions" }
    ]
  },
  {
    id: "retail",
    name: "Detailhandel & Retail",
    icon: "ShoppingBag",
    subcategories: [
      { name: "Kledingwinkel", slug: "kledingwinkel" },
      { name: "Bloemist", slug: "bloemist" },
      { name: "Juwelier", slug: "juwelier" },
      { name: "Fietsenwinkel", slug: "fietsenwinkel" },
      { name: "Opticien", slug: "opticien" },
      { name: "Drogisterij", slug: "drogisterij" }
    ]
  },
  {
    id: "juridisch",
    name: "Juridische Dienstverlening",
    icon: "Scale",
    subcategories: [
      { name: "Advocaat", slug: "advocaat" },
      { name: "Notaris", slug: "notaris" },
      { name: "Mediator", slug: "mediator" },
      { name: "Juridisch Adviesbureau", slug: "juridisch-adviesbureau" },
      { name: "Incassobureau", slug: "incassobureau" }
    ]
  },
  {
    id: "evenementen",
    name: "Evenementen & Entertainment",
    icon: "PartyPopper",
    subcategories: [
      { name: "Fotograaf", slug: "fotograaf" },
      { name: "Trouwfotograaf", slug: "trouwfotograaf" },
      { name: "DJ", slug: "dj" },
      { name: "Trouwlocatie", slug: "trouwlocatie" },
      { name: "Eventlocatie", slug: "eventlocatie" },
      { name: "Cateraar", slug: "cateraar" },
      { name: "Weddingplanner", slug: "weddingplanner" }
    ]
  }
];

// Default sample projects
export const defaultProjects: ProjectDemo[] = [
  {
    id: "1",
    title: "Bouwbedrijf Van den Berg",
    shortDesc: "Professionele aannemer website met industriële uitstraling voor renovatie en nieuwbouw in Utrecht regio. Focus op offerte-aanvraag en projectshowcase.",
    features: [
      "Navigatie aan zijkant (uniek design)",
      "Diagonale/beeldhouw vormen (geen rechthoeken)",
      "Before/After vergelijking slider",
      "Offerte wizard met 4 stappen",
      "3D tilt effecten op team foto's",
      "Horizontal scroll voor diensten",
      "Parallax animaties",
      "Custom cursor met magnetische knoppen"
    ],
    image: "/images/portfolio/aannemer.webp",
    demoUrl: "https://bouwbedrijf-vandenberg.demo.techsolutionsutrecht.nl/",
    categoryId: "bouw",
    subcategoryName: "Aannemer",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "2",
    title: "Admin Dashboard",
    shortDesc: "Complete backend interface voor projectbeheer. Toont capaciteit voor complexe webapplicaties, niet alleen statische sites.",
    features: [
      "Login systeem (demo/demo123)",
      "Statistieken dashboard met charts",
      "Project management tabel",
      "Status updates (lopen/afgerond)",
      "Documenten overzicht",
      "Dark mode interface"
    ],
    image: "/images/portfolio/admin-dashboard.webp",
    demoUrl: "https://admin.demo.techsolutionsutrecht.nl/",
    categoryId: "bouw",
    subcategoryName: "Aannemer",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "3",
    title: "Klant Portal",
    shortDesc: "Klantomgeving waar opdrachtgevers hun project kunnen volgen. Laat zien dat je full-stack kunt bouwen.",
    features: [
      "Aparte login voor klanten",
      "Project tijdlijn visualisatie",
      "Upload zone voor documenten",
      "Chat interface (demo)",
      "Factuur overzicht"
    ],
    image: "/images/portfolio/klant-portal.webp",
    demoUrl: "https://portal.demo.techsolutionsutrecht.nl/",
    categoryId: "bouw",
    subcategoryName: "Aannemer",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "4",
    title: "Device Toggle Component",
    shortDesc: "Fixed UI element bovenaan om responsive design te demonstreren aan klanten.",
    features: [
      "Schakelaar: Mobile/Tablet/Desktop",
      "Real-time container resizing",
      "Smooth transition animatie",
      "Altijd zichtbaar (sticky)"
    ],
    image: "/images/portfolio/device-toggle.webp",
    demoUrl: "https://device-toggle.demo.techsolutionsutrecht.nl/",
    categoryId: "bouw",
    subcategoryName: "Aannemer",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const STORAGE_KEY = 'portfolio_projects';

// Initialize with default data if empty
export function initializePortfolioData(): void {
  if (typeof window === 'undefined') return;
  
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
  }
}

// Get all projects
export function getAllProjects(): ProjectDemo[] {
  if (typeof window === 'undefined') return defaultProjects;
  
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : defaultProjects;
}

// Get projects by category and subcategory
export function getProjectsBySubcategory(categoryId: string, subcategoryName: string): ProjectDemo[] {
  const projects = getAllProjects();
  return projects.filter(p => 
    p.categoryId === categoryId && p.subcategoryName === subcategoryName
  );
}

// Get project by ID
export function getProjectById(id: string): ProjectDemo | null {
  const projects = getAllProjects();
  return projects.find(p => p.id === id) || null;
}

// Create new project
export function createProject(project: Omit<ProjectDemo, 'id' | 'createdAt' | 'updatedAt'>): ProjectDemo {
  const projects = getAllProjects();
  const newProject: ProjectDemo = {
    ...project,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  projects.push(newProject);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  return newProject;
}

// Update project
export function updateProject(id: string, updates: Partial<ProjectDemo>): ProjectDemo | null {
  const projects = getAllProjects();
  const index = projects.findIndex(p => p.id === id);
  
  if (index === -1) return null;
  
  projects[index] = {
    ...projects[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  return projects[index];
}

// Delete project
export function deleteProject(id: string): boolean {
  const projects = getAllProjects();
  const filtered = projects.filter(p => p.id !== id);
  
  if (filtered.length === projects.length) return false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
}

// Reset to defaults
export function resetToDefaults(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
}

// Get all categories
export function getCategories(): CategoryData[] {
  return defaultCategories;
}

// Get category by ID
export function getCategoryById(id: string): CategoryData | undefined {
  return defaultCategories.find(c => c.id === id);
}

// Get subcategory slug
export function getSubcategorySlug(categoryId: string, subcategoryName: string): string {
  const category = getCategoryById(categoryId);
  if (!category) return subcategoryName.toLowerCase().replace(/\s+/g, '-');
  
  const sub = category.subcategories.find(s => s.name === subcategoryName);
  return sub ? sub.slug : subcategoryName.toLowerCase().replace(/\s+/g, '-');
}
