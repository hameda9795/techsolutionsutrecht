// Neon database-laag voor de showcase-projecten (/projecten + homepage stories).
// Zelfde patroon als neon-db.ts: Neon Postgres met statische fallback.
import { neon } from "@neondatabase/serverless";
import {
  showcaseProjects as staticDefaults,
  type ShowcaseProject,
  type ProjectType,
} from "./projects-showcase";

const getSql = () => {
  if (!process.env.DATABASE_URL) return null;
  // De Neon-driver gebruikt intern fetch(); Next.js cachet fetch standaard.
  // Met cache: "no-store" leest de site altijd de actuele database, zodat
  // wijzigingen uit het admin panel direct zichtbaar zijn.
  return neon(process.env.DATABASE_URL, {
    fetchOptions: { cache: "no-store" },
  });
};

// DB-rij (snake_case) -> frontend-vorm (camelCase).
function mapRow(row: Record<string, unknown>): ShowcaseProject {
  return {
    id: String(row.id),
    title: (row.title as string) ?? "",
    tagline: (row.tagline as string) ?? "",
    description: (row.description as string) ?? "",
    sector: (row.sector as string) ?? "",
    type: (row.type as ProjectType) ?? "website",
    year: (row.year as string) ?? "",
    highlights: (row.highlights as string[]) ?? [],
    stack: (row.stack as string[]) ?? [],
    liveUrl: (row.live_url as string) ?? "",
    image: (row.image as string) ?? "",
    accent: (row.accent as string) ?? "bg-[var(--color-primary)]",
    featured: Boolean(row.featured),
  };
}

// Tabel aanmaken + eenmalig seeden met de standaardprojecten.
export async function initShowcaseDatabase(): Promise<boolean> {
  const sql = getSql();
  if (!sql) return false;

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS showcase_projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        tagline VARCHAR(500) NOT NULL DEFAULT '',
        description TEXT NOT NULL DEFAULT '',
        sector VARCHAR(150) NOT NULL DEFAULT '',
        type VARCHAR(30) NOT NULL DEFAULT 'website',
        year VARCHAR(10) NOT NULL DEFAULT '',
        highlights TEXT[] NOT NULL DEFAULT '{}',
        stack TEXT[] NOT NULL DEFAULT '{}',
        live_url VARCHAR(500) NOT NULL DEFAULT '',
        image VARCHAR(500) NOT NULL DEFAULT '',
        accent VARCHAR(120) NOT NULL DEFAULT 'bg-[var(--color-primary)]',
        featured BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Seed alleen als de tabel leeg is.
    const rows = await sql`SELECT COUNT(*)::int AS count FROM showcase_projects`;
    if (rows[0]?.count === 0) {
      for (const p of staticDefaults) {
        await sql`
          INSERT INTO showcase_projects
            (title, tagline, description, sector, type, year, highlights, stack, live_url, image, accent, featured)
          VALUES
            (${p.title}, ${p.tagline}, ${p.description}, ${p.sector}, ${p.type}, ${p.year},
             ${p.highlights}, ${p.stack}, ${p.liveUrl}, ${p.image}, ${p.accent}, ${p.featured ?? false})
        `;
      }
    }
    return true;
  } catch (error) {
    console.error("Showcase DB init error:", error);
    return false;
  }
}

// Alle projecten (nieuwste eerst). Valt terug op de statische defaults
// wanneer er geen database is geconfigureerd, zodat de site nooit leeg is.
export async function getAllShowcaseProjects(): Promise<ShowcaseProject[]> {
  const sql = getSql();
  if (!sql) return staticDefaults;

  try {
    await initShowcaseDatabase();
    const rows = await sql`
      SELECT * FROM showcase_projects
      ORDER BY created_at DESC, id DESC
    `;
    return (rows as Record<string, unknown>[]).map(mapRow);
  } catch (error) {
    console.error("Get showcase projects error:", error);
    return staticDefaults;
  }
}

export async function getShowcaseProjectById(
  id: string
): Promise<ShowcaseProject | null> {
  const sql = getSql();
  if (!sql) return staticDefaults.find((p) => p.id === id) ?? null;

  try {
    const rows = await sql`SELECT * FROM showcase_projects WHERE id = ${id}`;
    return rows[0] ? mapRow(rows[0] as Record<string, unknown>) : null;
  } catch (error) {
    console.error("Get showcase project error:", error);
    return null;
  }
}

export type ShowcaseInput = Omit<ShowcaseProject, "id">;

const VALID_TYPES: ProjectType[] = ["website", "webshop", "webapp", "tool"];

// Ruwe request-body opschonen tot een veilige ShowcaseInput.
export function normalizeShowcaseInput(
  body: Record<string, unknown>
): ShowcaseInput {
  const type = VALID_TYPES.includes(body.type as ProjectType)
    ? (body.type as ProjectType)
    : "website";
  const toArray = (v: unknown): string[] =>
    Array.isArray(v)
      ? v.map(String).map((s) => s.trim()).filter(Boolean)
      : [];

  return {
    title: String(body.title ?? "").trim(),
    tagline: String(body.tagline ?? "").trim(),
    description: String(body.description ?? "").trim(),
    sector: String(body.sector ?? "").trim(),
    type,
    year: String(body.year ?? "").trim(),
    highlights: toArray(body.highlights),
    stack: toArray(body.stack),
    liveUrl: String(body.liveUrl ?? "").trim(),
    image: String(body.image ?? "").trim(),
    accent: String(body.accent ?? "from-teal-500 to-emerald-700").trim(),
    featured: Boolean(body.featured),
  };
}

export async function createShowcaseProject(
  p: ShowcaseInput
): Promise<ShowcaseProject | null> {
  const sql = getSql();
  if (!sql) return null;

  try {
    await initShowcaseDatabase();
    const rows = await sql`
      INSERT INTO showcase_projects
        (title, tagline, description, sector, type, year, highlights, stack, live_url, image, accent, featured)
      VALUES
        (${p.title}, ${p.tagline}, ${p.description}, ${p.sector}, ${p.type}, ${p.year},
         ${p.highlights}, ${p.stack}, ${p.liveUrl}, ${p.image}, ${p.accent}, ${p.featured ?? false})
      RETURNING *
    `;
    return rows[0] ? mapRow(rows[0] as Record<string, unknown>) : null;
  } catch (error) {
    console.error("Create showcase project error:", error);
    return null;
  }
}

export async function updateShowcaseProject(
  id: string,
  p: ShowcaseInput
): Promise<ShowcaseProject | null> {
  const sql = getSql();
  if (!sql) return null;

  try {
    const rows = await sql`
      UPDATE showcase_projects SET
        title = ${p.title},
        tagline = ${p.tagline},
        description = ${p.description},
        sector = ${p.sector},
        type = ${p.type},
        year = ${p.year},
        highlights = ${p.highlights},
        stack = ${p.stack},
        live_url = ${p.liveUrl},
        image = ${p.image},
        accent = ${p.accent},
        featured = ${p.featured ?? false},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
      RETURNING *
    `;
    return rows[0] ? mapRow(rows[0] as Record<string, unknown>) : null;
  } catch (error) {
    console.error("Update showcase project error:", error);
    return null;
  }
}

export async function deleteShowcaseProject(id: string): Promise<boolean> {
  const sql = getSql();
  if (!sql) return false;

  try {
    await sql`DELETE FROM showcase_projects WHERE id = ${id}`;
    return true;
  } catch (error) {
    console.error("Delete showcase project error:", error);
    return false;
  }
}
