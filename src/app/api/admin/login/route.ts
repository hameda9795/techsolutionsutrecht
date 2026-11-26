import { NextRequest } from "next/server";
import { adminConfig, LOGIN_ATTEMPTS, verifyAdminPassword } from "@/lib/admin-config";
import { recordLoginAttempt } from "@/lib/admin-store";
import { authResponse, checkAdminOrigin, createAdminSession, revokeAdminToken, setAdminCookie } from "@/lib/admin-auth";

export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  try {
    const config = adminConfig();
    const rejected = checkAdminOrigin(request);
    if (rejected) return rejected;
    if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
      return authResponse({ error: "Ongeldig verzoek." }, 415);
    }
    const attempt = await recordLoginAttempt(config.principal);
    if (attempt.count > LOGIN_ATTEMPTS) {
      const response = authResponse({ error: "Te veel inlogpogingen. Probeer het over enkele minuten opnieuw." }, 429);
      response.headers.set("Retry-After", String(Math.max(1, Math.ceil((attempt.resetAt - Date.now()) / 1000))));
      return response;
    }
    // Bound streamed input too: Content-Length is not trusted.
    const reader = request.body?.getReader();
    if (!reader) return authResponse({ error: "Ongeldig verzoek." }, 400);
    let length = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.length;
      if (length > 2048) { await reader.cancel(); return authResponse({ error: "Ongeldig verzoek." }, 413); }
      chunks.push(value);
    }
    let body;
    try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { return authResponse({ error: "Ongeldig verzoek." }, 400); }
    if (!body || typeof body.username !== "string" || typeof body.password !== "string" || body.username.length > 128 || body.password.length > 512) {
      return authResponse({ error: "Ongeldig verzoek." }, 400);
    }
    if (!await verifyAdminPassword(body.username, body.password)) {
      return authResponse({ error: "Ongeldige gebruikersnaam of wachtwoord." }, 401);
    }
    await revokeAdminToken(request.cookies.get(config.cookieName)?.value);
    const session = await createAdminSession();
    const response = authResponse({ authenticated: true });
    setAdminCookie(response, session.token, session.expiresAt);
    return response;
  } catch {
    return authResponse({ error: "Inloggen is tijdelijk niet beschikbaar." }, 503);
  }
}
