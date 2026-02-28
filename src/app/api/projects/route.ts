import { NextRequest, NextResponse } from 'next/server';
import { 
  getAllProjects, 
  createProject, 
  initDatabase,
  resetToDefaults 
} from '@/lib/neon-db';

// GET /api/projects - Get all projects
export async function GET() {
  // Initialize DB if needed
  await initDatabase();
  
  const projects = await getAllProjects();
  return NextResponse.json(projects);
}

// POST /api/projects - Create new project
export async function POST(request: NextRequest) {
  try {
    await initDatabase();
    
    const body = await request.json();
    
    // Validation
    if (!body.title || !body.short_desc || !body.demo_url || !body.category_id || !body.subcategory_name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const project = await createProject({
      title: body.title,
      short_desc: body.short_desc,
      features: body.features || [],
      image: body.image || '',
      demo_url: body.demo_url,
      category_id: body.category_id,
      subcategory_name: body.subcategory_name
    });
    
    if (!project) {
      return NextResponse.json(
        { error: 'Failed to create project' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('POST /api/projects error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/reset - Reset to defaults
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  
  if (action === 'reset') {
    const success = await resetToDefaults();
    if (success) {
      return NextResponse.json({ message: 'Reset successful' });
    } else {
      return NextResponse.json(
        { error: 'Reset failed' },
        { status: 500 }
      );
    }
  }
  
  return NextResponse.json(
    { error: 'Invalid action' },
    { status: 400 }
  );
}
