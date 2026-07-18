import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const legacyTrailingSlashRedirects: Record<string, string> = {
  "/diensten/wordpress/": "/diensten/website-laten-maken",
  "/diensten/ai/": "/diensten/whatsapp-automatisering",
  "/blog/wat-kost-een-website-laten-maken/":
    "/blog/wat-kost-website-laten-maken",
  "/blog/5-redenen-website-niet-op-google/":
    "/blog/website-niet-in-google",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const legacyDestination = legacyTrailingSlashRedirects[pathname];

  if (legacyDestination) {
    const destination = new URL(request.url);
    destination.pathname = legacyDestination;
    return NextResponse.redirect(destination, 308);
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    // Use the native URL here. NextURL re-applies the request's trailing-slash
    // state when it is serialized, which can otherwise create a self-redirect.
    const destination = new URL(request.url);
    destination.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
