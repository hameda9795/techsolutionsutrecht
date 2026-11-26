import { authorizeAdminMutation } from "@/lib/admin-auth";
import { NextRequest, NextResponse } from "next/server";
import {
  getShowcaseProjectById,
  updateShowcaseProject,
  deleteShowcaseProject,
  normalizeShowcaseInput,
} from "@/lib/showcase-db";

// GET /api/showcase-projects/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const project = await getShowcaseProjectById((await params).id);
  if (!project) {
    return NextResponse.json({ error: "Niet gevonden" }, { status: 404 });
  }
  return NextResponse.json(project);
}

// PUT /api/showcase-projects/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const rejected = await authorizeAdminMutation(request);
  if (rejected) return rejected;
  try {
    const input = normalizeShowcaseInput(await request.json());

    if (!input.title || !input.tagline) {
      return NextResponse.json(
        { error: "Titel en tagline zijn verplicht" },
        { status: 400 }
      );
    }

    const project = await updateShowcaseProject((await params).id, input);
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
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const rejected = await authorizeAdminMutation(request);
  if (rejected) return rejected;
  const success = await deleteShowcaseProject((await params).id);
  if (!success) {
    return NextResponse.json(
      { error: "Niet gevonden of verwijderen mislukt" },
      { status: 404 }
    );
  }
  return NextResponse.json({ message: "Verwijderd" });
}
