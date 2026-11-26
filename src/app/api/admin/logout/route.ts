import { NextRequest } from "next/server";
import { adminConfig } from "@/lib/admin-config";
import { authResponse, checkAdminOrigin, revokeAdminToken, setAdminCookie } from "@/lib/admin-auth";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  try {
    const rejected = checkAdminOrigin(request);
    if (rejected) return rejected;
    await revokeAdminToken(request.cookies.get(adminConfig().cookieName)?.value);
    const response = authResponse({ authenticated: false });
    setAdminCookie(response, "", 0);
    return response;
  } catch {
    return authResponse({ error: "Uitloggen is tijdelijk niet beschikbaar. Probeer het opnieuw." }, 503);
  }
}
