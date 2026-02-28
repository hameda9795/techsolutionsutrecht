// Neon Database Setup for Vercel
import { neon, neonConfig } from '@neondatabase/serverless';

// Enable WebSocket for serverless
neonConfig.fetchConnectionCache = true;

// Create SQL client
const getSql = () => {
  if (!process.env.DATABASE_URL) {
    // Fallback to localStorage for development without DB
    console.warn('DATABASE_URL not set, using localStorage fallback');
    return null;
  }
  return neon(process.env.DATABASE_URL);
};

// Types
export interface ProjectDemo {
  id: string;
  title: string;
  short_desc: string;
  features: string[];
  image: string;
  demo_url: string;
  category_id: string;
  subcategory_name: string;
  created_at: string;
  updated_at: string;
}

// Initialize database table
export async function initDatabase() {
  const sql = getSql();
  if (!sql) return false;

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS portfolio_projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        short_desc TEXT NOT NULL,
        features TEXT[] DEFAULT '{}',
        image VARCHAR(500) DEFAULT '',
        demo_url VARCHAR(500) NOT NULL,
        category_id VARCHAR(50) NOT NULL,
        subcategory_name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    // Create index for faster queries
    await sql`
      CREATE INDEX IF NOT EXISTS idx_category_subcategory 
      ON portfolio_projects(category_id, subcategory_name)
    `;
    
    return true;
  } catch (error) {
    console.error('Database init error:', error);
    return false;
  }
}

// Get all projects
export async function getAllProjects(): Promise<ProjectDemo[]> {
  const sql = getSql();
  if (!sql) {
    // Fallback to localStorage
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('portfolio_projects');
      return data ? JSON.parse(data) : [];
    }
    return [];
  }

  try {
    const projects = await sql`SELECT * FROM portfolio_projects ORDER BY created_at DESC`;
    return projects as ProjectDemo[];
  } catch (error) {
    console.error('Get projects error:', error);
    return [];
  }
}

// Get projects by category and subcategory
export async function getProjectsBySubcategory(
  categoryId: string, 
  subcategoryName: string
): Promise<ProjectDemo[]> {
  const sql = getSql();
  if (!sql) {
    // Fallback
    const all = await getAllProjects();
    return all.filter(p => 
      p.category_id === categoryId && p.subcategory_name === subcategoryName
    );
  }

  try {
    const projects = await sql`
      SELECT * FROM portfolio_projects 
      WHERE category_id = ${categoryId} 
      AND subcategory_name = ${subcategoryName}
      ORDER BY created_at DESC
    `;
    return projects as ProjectDemo[];
  } catch (error) {
    console.error('Get projects by subcategory error:', error);
    return [];
  }
}

// Get project by ID
export async function getProjectById(id: string): Promise<ProjectDemo | null> {
  const sql = getSql();
  if (!sql) {
    const all = await getAllProjects();
    return all.find(p => p.id === id) || null;
  }

  try {
    const projects = await sql`SELECT * FROM portfolio_projects WHERE id = ${id}`;
    return (projects[0] as ProjectDemo) || null;
  } catch (error) {
    console.error('Get project error:', error);
    return null;
  }
}

// Create project
export async function createProject(project: {
  title: string;
  short_desc: string;
  features: string[];
  image: string;
  demo_url: string;
  category_id: string;
  subcategory_name: string;
}): Promise<ProjectDemo | null> {
  const sql = getSql();
  if (!sql) {
    // Fallback to localStorage
    if (typeof window !== 'undefined') {
      const all = await getAllProjects();
      const newProject: ProjectDemo = {
        ...project,
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      all.push(newProject);
      localStorage.setItem('portfolio_projects', JSON.stringify(all));
      return newProject;
    }
    return null;
  }

  try {
    const result = await sql`
      INSERT INTO portfolio_projects 
      (title, short_desc, features, image, demo_url, category_id, subcategory_name)
      VALUES 
      (${project.title}, ${project.short_desc}, ${project.features}, ${project.image}, 
       ${project.demo_url}, ${project.category_id}, ${project.subcategory_name})
      RETURNING *
    `;
    return result[0] as ProjectDemo;
  } catch (error) {
    console.error('Create project error:', error);
    return null;
  }
}

// Update project
export async function updateProject(
  id: string, 
  updates: Partial<ProjectDemo>
): Promise<ProjectDemo | null> {
  const sql = getSql();
  if (!sql) {
    // Fallback
    if (typeof window !== 'undefined') {
      const all = await getAllProjects();
      const index = all.findIndex(p => p.id === id);
      if (index === -1) return null;
      
      all[index] = { ...all[index], ...updates, updated_at: new Date().toISOString() };
      localStorage.setItem('portfolio_projects', JSON.stringify(all));
      return all[index];
    }
    return null;
  }

  try {
    const result = await sql`
      UPDATE portfolio_projects 
      SET 
        title = COALESCE(${updates.title || null}, title),
        short_desc = COALESCE(${updates.short_desc || null}, short_desc),
        features = COALESCE(${updates.features || null}, features),
        image = COALESCE(${updates.image || null}, image),
        demo_url = COALESCE(${updates.demo_url || null}, demo_url),
        category_id = COALESCE(${updates.category_id || null}, category_id),
        subcategory_name = COALESCE(${updates.subcategory_name || null}, subcategory_name),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
      RETURNING *
    `;
    return (result[0] as ProjectDemo) || null;
  } catch (error) {
    console.error('Update project error:', error);
    return null;
  }
}

// Delete project
export async function deleteProject(id: string): Promise<boolean> {
  const sql = getSql();
  if (!sql) {
    // Fallback
    if (typeof window !== 'undefined') {
      const all = await getAllProjects();
      const filtered = all.filter(p => p.id !== id);
      if (filtered.length === all.length) return false;
      localStorage.setItem('portfolio_projects', JSON.stringify(filtered));
      return true;
    }
    return false;
  }

  try {
    await sql`DELETE FROM portfolio_projects WHERE id = ${id}`;
    return true;
  } catch (error) {
    console.error('Delete project error:', error);
    return false;
  }
}

// Reset to defaults (insert sample data)
export async function resetToDefaults(): Promise<boolean> {
  const sql = getSql();
  
  const defaultProjects = [
    {
      title: "Bouwbedrijf Van den Berg",
      short_desc: "Professionele aannemer website met industriële uitstraling voor renovatie en nieuwbouw in Utrecht regio. Focus op offerte-aanvraag en projectshowcase.",
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
      demo_url: "https://bouwbedrijf-vandenberg.demo.techsolutionsutrecht.nl/",
      category_id: "bouw",
      subcategory_name: "Aannemer"
    },
    {
      title: "Admin Dashboard",
      short_desc: "Complete backend interface voor projectbeheer. Toont capaciteit voor complexe webapplicaties, niet alleen statische sites.",
      features: [
        "Login systeem (demo/demo123)",
        "Statistieken dashboard met charts",
        "Project management tabel",
        "Status updates (lopen/afgerond)",
        "Documenten overzicht",
        "Dark mode interface"
      ],
      image: "/images/portfolio/admin-dashboard.webp",
      demo_url: "https://admin.demo.techsolutionsutrecht.nl/",
      category_id: "bouw",
      subcategory_name: "Aannemer"
    },
    {
      title: "Klant Portal",
      short_desc: "Klantomgeving waar opdrachtgevers hun project kunnen volgen. Laat zien dat je full-stack kunt bouwen.",
      features: [
        "Aparte login voor klanten",
        "Project tijdlijn visualisatie",
        "Upload zone voor documenten",
        "Chat interface (demo)",
        "Factuur overzicht"
      ],
      image: "/images/portfolio/klant-portal.webp",
      demo_url: "https://portal.demo.techsolutionsutrecht.nl/",
      category_id: "bouw",
      subcategory_name: "Aannemer"
    },
    {
      title: "Device Toggle Component",
      short_desc: "Fixed UI element bovenaan om responsive design te demonstreren aan klanten.",
      features: [
        "Schakelaar: Mobile/Tablet/Desktop",
        "Real-time container resizing",
        "Smooth transition animatie",
        "Altijd zichtbaar (sticky)"
      ],
      image: "/images/portfolio/device-toggle.webp",
      demo_url: "https://device-toggle.demo.techsolutionsutrecht.nl/",
      category_id: "bouw",
      subcategory_name: "Aannemer"
    }
  ];

  if (!sql) {
    // Fallback to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_projects', JSON.stringify(defaultProjects.map((p, i) => ({
        ...p,
        id: (i + 1).toString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }))));
      return true;
    }
    return false;
  }

  try {
    // Clear existing data
    await sql`DELETE FROM portfolio_projects`;
    
    // Insert defaults
    for (const project of defaultProjects) {
      await sql`
        INSERT INTO portfolio_projects 
        (title, short_desc, features, image, demo_url, category_id, subcategory_name)
        VALUES 
        (${project.title}, ${project.short_desc}, ${project.features}, ${project.image}, 
         ${project.demo_url}, ${project.category_id}, ${project.subcategory_name})
      `;
    }
    return true;
  } catch (error) {
    console.error('Reset defaults error:', error);
    return false;
  }
}
