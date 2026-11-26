import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const base = new URL(process.argv[2] || "http://127.0.0.1:3003");
assert.ok(["127.0.0.1", "localhost"].includes(base.hostname), "This test only runs against a local preview.");
const preview = await fetch(new URL("/api/showcase-projects", base));
assert.equal(preview.headers.get("x-showcase-storage"), "preview", "Refusing to exercise auth against a database-backed server.");
const credentials = readFileSync(path.join(root, ".admin-credentials.local.txt"), "utf8");
const username = credentials.match(/^Username: (.+)$/m)?.[1];
const password = credentials.match(/^Password: (.+)$/m)?.[1];
assert.ok(username && password, "Local generated credentials required.");
const endpoint = route => new URL(route, base);
async function send(route, method = "POST", cookie, origin = base.origin, body = "{}") {
  return fetch(endpoint(route), { method, redirect: "manual",
    headers: { ...(origin === null ? {} : { origin }), ...(cookie ? { cookie } : {}), "content-type": "application/json" },
    ...(method === "GET" ? {} : { body }),
  });
}
const protectedRoutes = ["/admin/dashboard", "/admin/projecten"];
for (const route of protectedRoutes) {
  const response = await send(route, "GET");
  assert.equal(response.status, 307, route + " redirects before rendering admin content");
  assert.equal(response.headers.get("location"), "/admin/login");
}
const mutations = [
  ["/api/projects", "POST"], ["/api/projects?action=reset", "DELETE"],
  ["/api/projects/999999", "PUT"], ["/api/projects/999999", "DELETE"],
  ["/api/showcase-projects", "POST"], ["/api/showcase-projects/999999", "PUT"],
  ["/api/showcase-projects/999999", "DELETE"], ["/api/upload?filename=test.png", "POST"],
];
for (const [route, method] of mutations) {
  assert.equal((await send(route, method, undefined, base.origin, "broken-json")).status, 401, route);
  assert.equal((await send(route, method, "admin_auth=true; tsu_admin_local=true")).status, 401, route + " rejects former client flag");
}
assert.equal((await send("/api/admin/login", "POST", undefined, "https://attacker.example")).status, 403);
assert.equal((await send("/api/admin/login", "POST", undefined, base.origin, JSON.stringify({ username, password: "not-the-password" }))).status, 401);
const login = await send("/api/admin/login", "POST", undefined, base.origin, JSON.stringify({ username, password }));
assert.equal(login.status, 200, "Valid credentials create a server session");
const cookieHeader = login.headers.get("set-cookie") || "";
assert.match(cookieHeader, /HttpOnly/i);
assert.match(cookieHeader, /SameSite=strict/i);
assert.match(cookieHeader, /Path=\//i);
assert.match(cookieHeader, /Max-Age=28800/i);
const cookie = cookieHeader.split(";")[0];
assert.equal(login.headers.get("cache-control"), "no-store");
for (const route of protectedRoutes) {
  const response = await send(route, "GET", cookie);
  assert.equal(response.status, 200, route + " allows a real session");
  const html = await response.text();
  assert.ok(html.includes("noindex"), route + " excluded from indexing");
}
for (const [route, method] of mutations) {
  assert.equal((await send(route, method, cookie, "https://attacker.example")).status, 403, route + " rejects CSRF");
  assert.equal((await send(route, method, cookie, null)).status, 403, route + " requires an origin");
}
// Reach validation with a valid session, without writing any project or uploading a file.
assert.equal((await send("/api/showcase-projects", "POST", cookie)).status, 400);
assert.equal((await send("/api/upload", "POST", cookie)).status, 400);
assert.equal((await send("/api/admin/logout", "POST", cookie, "https://attacker.example")).status, 403);
assert.equal((await send("/admin/projecten", "GET", cookie)).status, 200);
const logout = await send("/api/admin/logout", "POST", cookie);
assert.equal(logout.status, 200);
assert.match(logout.headers.get("set-cookie") || "", /Max-Age=0/);
assert.equal((await send("/api/showcase-projects", "POST", cookie)).status, 401, "Replayed logged-out token is rejected");
assert.equal((await send("/admin/projecten", "GET", cookie)).status, 307);
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
}
const hash = credentials.match(/^ADMIN_PASSWORD_HASH=(.+)$/m)?.[1];
for (const file of files(path.join(root, ".next", "static")).filter(f => f.endsWith(".js"))) {
  const content = readFileSync(file, "utf8");
  assert.ok(!content.includes(password), "A generated password must never reach a client bundle.");
  assert.ok(!hash || !content.includes(hash), "A server password hash must never reach a client bundle.");
}
console.log("Local HTTP auth checks passed: login, both admin pages, 8 mutation guards, CSRF rejection, real logout revocation, read-only validation and no credential leakage in client bundles.");
