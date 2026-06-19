import { NextRequest, NextResponse } from "next/server";
import {
  getShowcaseProjectById,
  updateShowcaseProject,
  deleteShowcaseProject,
  normalizeShowcaseInput,
} from "@/lib/showcase-db";

// GET /api/showcase-projects/[id]
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const project = await getShowcaseProjectById(params.id);
  if (!project) {
    return NextResponse.json({ error: "Niet gevonden" }, { status: 404 });
  }
  return NextResponse.json(project);
}

// PUT /api/showcase-projects/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const input = normalizeShowcaseInput(await request.json());

    if (!input.title || !input.tagline) {
      return NextResponse.json(
        { error: "Titel en tagline zijn verplicht" },
        { status: 400 }
      );
    }

    const project = await updateShowcaseProject(params.id, input);
    if (!project) {
      return NextResponse.json(
        { error: "Niet gevonden of bijwerken mislukt" },
        { status: 404 }
      );
    }
    return NextResponse.json(project);
  } catch (error) {
    console.error("PUT /api/showcase-projects/[id] error:", error);
    return NextResponse.json({ error: "Serverfout" }, { status: 500 });
  }
}

// DELETE /api/showcase-projects/[id]
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const success = await deleteShowcaseProject(params.id);
  if (!success) {
    return NextResponse.json(
      { error: "Niet gevonden of verwijderen mislukt" },
      { status: 404 }
    );
  }
  return NextResponse.json({ message: "Verwijderd" });
}
