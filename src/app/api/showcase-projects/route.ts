import { NextRequest, NextResponse } from "next/server";
import {
  getAllShowcaseProjects,
  createShowcaseProject,
  initShowcaseDatabase,
  normalizeShowcaseInput,
} from "@/lib/showcase-db";

// GET /api/showcase-projects
export async function GET() {
  await initShowcaseDatabase();
  const projects = await getAllShowcaseProjects();
  return NextResponse.json(projects, {
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}

// POST /api/showcase-projects
export async function POST(request: NextRequest) {
  try {
    const input = normalizeShowcaseInput(await request.json());

    if (!input.title || !input.tagline) {
      return NextResponse.json(
        { error: "Titel en tagline zijn verplicht" },
        { status: 400 }
      );
    }

    const project = await createShowcaseProject(input);
    if (!project) {
      return NextResponse.json(
        { error: "Aanmaken mislukt (is de database geconfigureerd?)" },
        { status: 500 }
      );
    }
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("POST /api/showcase-projects error:", error);
    return NextResponse.json({ error: "Serverfout" }, { status: 500 });
  }
}
