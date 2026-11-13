import "server-only";
import { randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { adminConfig, digest, SESSION_SECONDS } from "./admin-config";
import { saveAdminSession, readAdminSession, deleteAdminSession } from "./admin-store";

export function authResponse(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
}
export function checkAdminOrigin(request: NextRequest): NextResponse | null {
  const config = adminConfig();
  if (request.headers.get("origin") !== config.origin || request.headers.get("sec-fetch-site") === "cross-site") {
    return authResponse({ error: "Dit verzoek is niet toegestaan." }, 403);
  }
  return null;
}
export async function validAdminToken(token?: string): Promise<boolean> {
  if (!token || !/^[A-Za-z0-9_-]{43}$/.test(token)) return false;
  const config = adminConfig();
  const session = await readAdminSession(digest(token));
  return Boolean(session && session.principal === config.principal && Number.isFinite(session.expiresAt) && session.expiresAt > Date.now());
}
export async function authorizeAdminMutation(request: NextRequest): Promise<NextResponse | null> {
  try {
    const config = adminConfig();
    if (!await validAdminToken(request.cookies.get(config.cookieName)?.value)) {
      return authResponse({ error: "Je sessie is verlopen. Log opnieuw in." }, 401);
    }
    return checkAdminOrigin(request);
  } catch {
    return authResponse({ error: "Inloggen is tijdelijk niet beschikbaar." }, 503);
  }
}
export async function requireAdminPage() {
  let authenticated = false;
  try {
    authenticated = await validAdminToken((await cookies()).get(adminConfig().cookieName)?.value);
  } catch { /* Fail closed: never render protected admin content. */ }
  if (!authenticated) redirect("/admin/login");
}
export async function createAdminSession() {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = Date.now() + SESSION_SECONDS * 1000;
  await saveAdminSession(digest(token), { principal: adminConfig().principal, expiresAt });
  return { token, expiresAt };
}
export async function revokeAdminToken(token?: string) {
  if (token && /^[A-Za-z0-9_-]{43}$/.test(token)) await deleteAdminSession(digest(token));
}
export function setAdminCookie(response: NextResponse, token: string, expiresAt: number) {
  const config = adminConfig();
  response.cookies.set(config.cookieName, token, {
    httpOnly: true, secure: config.secure, sameSite: "strict", path: "/",
    maxAge: token ? SESSION_SECONDS : 0, expires: new Date(expiresAt),
  });
}
