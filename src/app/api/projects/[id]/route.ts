import { authorizeAdminMutation } from "@/lib/admin-auth";
import { NextRequest, NextResponse } from 'next/server';
import { updateProject, deleteProject, getProjectById } from '@/lib/neon-db';

// GET /api/projects/[id] - Get single project
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const project = await getProjectById((await params).id);
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(project);
  } catch (error) {
    console.error('GET /api/projects/[id] error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/projects/[id] - Update project
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const rejected = await authorizeAdminMutation(request);
  if (rejected) return rejected;
  try {
    const body = await request.json();
    
    const project = await updateProject((await params).id, {
      title: body.title,
      short_desc: body.short_desc,
      features: body.features,
      image: body.image,
      demo_url: body.demo_url,
      category_id: body.category_id,
      subcategory_name: body.subcategory_name
    });
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found or update failed' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(project);
  } catch (error) {
    console.error('PUT /api/projects/[id] error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id] - Delete project
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const rejected = await authorizeAdminMutation(request);
  if (rejected) return rejected;
  try {
    const success = await deleteProject((await params).id);
    
    if (!success) {
      return NextResponse.json(
        { error: 'Project not found or delete failed' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('DELETE /api/projects/[id] error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
