import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { randomBytes, scryptSync } from "node:crypto";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";
const require = createRequire(import.meta.url);
const { NextRequest } = require("next/server");
const password = randomBytes(24).toString("base64url");
const salt = randomBytes(16);
const hash = "scrypt-v1$" + salt.toString("hex") + "$" + scryptSync(password, salt, 64, { N: 32768, r: 8, p: 1, maxmem: 64 * 1024 * 1024 }).toString("hex");
const env = { ADMIN_USERNAME: "test-admin", ADMIN_PASSWORD_HASH: hash, ADMIN_ORIGIN: "http://127.0.0.1:3003", ADMIN_SESSION_STORE: "memory" };
const modules = new Map();
let writes = 0;
let renderCookie;
const mutation = result => async () => { writes++; return result; };
const stubs = {
  "server-only": {},
  "next/headers": { cookies: () => ({ get: () => renderCookie ? { value: renderCookie } : undefined }) },
  "next/navigation": { redirect: url => { throw new Error("REDIRECT:" + url); } },
  "@neondatabase/serverless": { neon: () => { throw new Error("Unexpected real database use"); } },
  "@/lib/neon-db": { initDatabase: mutation(true), createProject: mutation({ id: "999" }), updateProject: mutation({ id: "999" }), deleteProject: mutation(true), resetToDefaults: mutation(true) },
  "@/lib/showcase-db": { normalizeShowcaseInput: body => body, createShowcaseProject: mutation({ id: "999" }), updateShowcaseProject: mutation({ id: "999" }), deleteShowcaseProject: mutation(true) },
  "@vercel/blob": { put: mutation({ url: "https://example.com/test.png", pathname: "test.png" }) },
};
function load(file) {
  if (modules.has(file)) return modules.get(file);
  const exports = {};
  modules.set(file, exports);
  const source = readFileSync(new URL("../" + file, import.meta.url), "utf8");
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  vm.runInNewContext(code, {
    exports, process: { env }, Buffer, console, Date, URL, Uint8Array,
    require: name => {
      if (name in stubs) return stubs[name];
      if (name.startsWith("@/")) return load("src/" + name.slice(2) + ".ts");
      if (name.startsWith("./")) return load(file.slice(0, file.lastIndexOf("/") + 1) + name.slice(2) + ".ts");
      return require(name);
    },
  });
  return exports;
}
const config = load("src/lib/admin-config.ts");
const store = load("src/lib/admin-store.ts");
const auth = load("src/lib/admin-auth.ts");
const login = load("src/app/api/admin/login/route.ts");
const logout = load("src/app/api/admin/logout/route.ts");
function request(path, method = "POST", token, origin = env.ADMIN_ORIGIN, body = "{}") {
  return new NextRequest(env.ADMIN_ORIGIN + path, {
    method,
    headers: { ...(origin === null ? {} : { origin }), ...(token ? { cookie: config.adminConfig().cookieName + "=" + token } : {}), "content-type": "application/json" },
    ...(method === "GET" ? {} : { body }),
  });
}
assert.ok(await config.verifyAdminPassword("test-admin", password));
assert.ok(!await config.verifyAdminPassword("wrong-admin", password));
assert.ok(!await config.verifyAdminPassword("test-admin", "wrong"));
const session = await auth.createAdminSession();
assert.equal(session.token.length, 43);
assert.ok(await auth.validAdminToken(session.token));
assert.ok(!await auth.validAdminToken("true"));
assert.ok(!await auth.validAdminToken(randomBytes(32).toString("base64url")));
const expired = randomBytes(32).toString("base64url");
await store.saveAdminSession(config.digest(expired), { principal: config.adminConfig().principal, expiresAt: Date.now() - 100 });
assert.ok(!await auth.validAdminToken(expired));
env.ADMIN_USERNAME = "rotated-user";
assert.ok(!await auth.validAdminToken(session.token), "Credential rotation invalidates previous sessions");
env.ADMIN_USERNAME = "test-admin";
await assert.rejects(() => auth.requireAdminPage(), /REDIRECT:\/admin\/login/);
renderCookie = session.token;
await auth.requireAdminPage();
renderCookie = undefined;
const payload = JSON.stringify({ title: "Test", tagline: "Test site", short_desc: "Test", demo_url: "https://example.com", category_id: "test", subcategory_name: "Test" });
const endpoints = [
  ["src/app/api/projects/route.ts", "POST", "/api/projects", payload],
  ["src/app/api/projects/route.ts", "DELETE", "/api/projects?action=reset", "{}"],
  ["src/app/api/projects/[id]/route.ts", "PUT", "/api/projects/999", payload],
  ["src/app/api/projects/[id]/route.ts", "DELETE", "/api/projects/999", "{}"],
  ["src/app/api/showcase-projects/route.ts", "POST", "/api/showcase-projects", payload],
  ["src/app/api/showcase-projects/[id]/route.ts", "PUT", "/api/showcase-projects/999", payload],
  ["src/app/api/showcase-projects/[id]/route.ts", "DELETE", "/api/showcase-projects/999", "{}"],
  ["src/app/api/upload/route.ts", "POST", "/api/upload?filename=test.png", "image-test"],
];
for (const [file, method, path, body] of endpoints) {
  const handler = load(file)[method];
  const params = { params: { id: "999" } };
  const originalWrites = writes;
  assert.equal((await handler(request(path, method, undefined, env.ADMIN_ORIGIN, "malformed"), params)).status, 401);
  for (const token of ["true", expired, randomBytes(32).toString("base64url")]) {
    assert.equal((await handler(request(path, method, token), params)).status, 401);
  }
  for (const origin of [null, "https://attacker.example", env.ADMIN_ORIGIN + ".attacker.example"]) {
    assert.equal((await handler(request(path, method, session.token, origin, body), params)).status, 403);
  }
  const crossSite = request(path, method, session.token, env.ADMIN_ORIGIN, body);
  crossSite.headers.set("sec-fetch-site", "cross-site");
  assert.equal((await handler(crossSite, params)).status, 403);
  assert.equal(writes, originalWrites, "Rejected requests must never reach DB initialization, writes or uploads");
  const allowed = await handler(request(path, method, session.token, env.ADMIN_ORIGIN, body), params);
  assert.ok([200, 201].includes(allowed.status), path + " authenticated mutation reaches the stub");
  assert.ok(writes > originalWrites);
}
const crossLogout = await logout.POST(request("/api/admin/logout", "POST", session.token, "https://attacker.example"));
assert.equal(crossLogout.status, 403);
assert.ok(await auth.validAdminToken(session.token));
const loggedOut = await logout.POST(request("/api/admin/logout", "POST", session.token));
assert.equal(loggedOut.status, 200);
assert.match(loggedOut.headers.get("set-cookie"), /Max-Age=0/i);
assert.ok(!await auth.validAdminToken(session.token), "Logout revokes the server record, including a replayed cookie");
assert.equal((await login.POST(request("/api/admin/login", "POST", undefined, null, payload))).status, 403);
assert.equal((await login.POST(request("/api/admin/login", "POST", undefined, env.ADMIN_ORIGIN, "broken"))).status, 400);
assert.equal((await login.POST(request("/api/admin/login", "POST", undefined, env.ADMIN_ORIGIN, "x".repeat(2049)))).status, 413);
assert.equal((await login.POST(request("/api/admin/login", "POST", undefined, env.ADMIN_ORIGIN, JSON.stringify({ username: "test-admin", password: "wrong" })))).status, 401);
const success = await login.POST(request("/api/admin/login", "POST", undefined, env.ADMIN_ORIGIN, JSON.stringify({ username: "test-admin", password })));
assert.equal(success.status, 200);
assert.match(success.headers.get("set-cookie"), /HttpOnly/i);
assert.match(success.headers.get("set-cookie"), /SameSite=strict/i);
assert.equal(success.headers.get("cache-control"), "no-store");
// Atomic local limiter exercises the same 10-attempt, fixed-window contract as the DB upsert.
const counts = await Promise.all(Array.from({ length: 11 }, () => store.recordLoginAttempt("test-rate")));
assert.deepEqual(counts.map(a => a.count), Array.from({ length: 11 }, (_, i) => i + 1));
for (let i = 0; i < 10; i++) await store.recordLoginAttempt(config.adminConfig().principal);
assert.equal((await login.POST(request("/api/admin/login", "POST", undefined, env.ADMIN_ORIGIN, "{}"))).status, 429);
const savedOrigin = env.ADMIN_ORIGIN;
env.ADMIN_ORIGIN = "https://techsolutionsutrecht.nl";
assert.throws(() => config.adminConfig(), /Online admin sessions require the database/);
env.ADMIN_SESSION_STORE = "database";
env.DATABASE_URL = "mock-not-a-real-connection";
assert.equal(config.adminConfig().cookieName, "__Host-tsu_admin");
const secureResponse = auth.authResponse({});
auth.setAdminCookie(secureResponse, "A".repeat(43), Date.now() + 1000);
assert.match(secureResponse.headers.get("set-cookie"), /; Secure/i);
assert.match(secureResponse.headers.get("set-cookie"), /__Host-tsu_admin=/);
assert.ok(!secureResponse.headers.get("set-cookie").includes("Domain="));
// Simulated storage failure and missing configuration must fail closed.
const databaseFailure = await auth.authorizeAdminMutation(request("/api/projects", "POST", "A".repeat(43)));
assert.equal(databaseFailure.status, 503);
delete env.ADMIN_PASSWORD_HASH;
assert.equal((await auth.authorizeAdminMutation(request("/api/projects"))).status, 503);
env.ADMIN_ORIGIN = savedOrigin;
console.log("Admin auth tests passed: 8 guarded mutation handlers, server page protection, valid/forged/expired/revoked sessions, origin checks, rotation, rate limit, secure cookies and fail-closed behavior. All writes used stubs.");
