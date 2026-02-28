import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

// POST /api/upload - Upload image to Vercel Blob
export async function POST(request: NextRequest) {
  try {
    // Get filename from query params
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');

    if (!filename) {
      return NextResponse.json(
        { error: 'Filename is required' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!filename.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
      return NextResponse.json(
        { error: 'Only image files are allowed (jpg, jpeg, png, webp, gif)' },
        { status: 400 }
      );
    }

    // Upload to Vercel Blob
    // The request.body is the file stream
    if (!request.body) {
      return NextResponse.json(
        { error: 'No file body provided' },
        { status: 400 }
      );
    }

    const blob = await put(filename, request.body, {
      access: 'public',
    });

    return NextResponse.json({
      url: blob.url,
      pathname: blob.pathname,
      downloadUrl: blob.downloadUrl,
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}

// Note: In Next.js App Router, we don't need to disable bodyParser
// The request.body is automatically available as a ReadableStream
