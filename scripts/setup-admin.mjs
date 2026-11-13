import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { randomBytes, scryptSync } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const arg = name => process.argv.find(value => value.startsWith(name + "="))?.slice(name.length + 1);
const origin = arg("--origin") || "http://127.0.0.1:3003";
const username = arg("--username") || "admin";
const url = new URL(origin);
const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
if (url.origin !== origin || url.username || url.password || (!local && url.protocol !== "https:") || !["http:", "https:"].includes(url.protocol)) throw new Error("Use an HTTPS origin or a loopback HTTP origin.");
if (!/^[a-zA-Z0-9_.@-]{3,128}$/.test(username)) throw new Error("Use 3–128 username characters: letters, digits, _, ., @ or -.");
const envFile = path.join(root, ".env.local");
let env = existsSync(envFile) ? readFileSync(envFile, "utf8") : "";
if (/^ADMIN_PASSWORD_HASH=.+/m.test(env) && !process.argv.includes("--rotate")) throw new Error("Admin is already configured. Use --rotate only when you intend to replace the password.");
const password = randomBytes(24).toString("base64url");
const salt = randomBytes(16);
const key = scryptSync(password, salt, 64, { N: 32768, r: 8, p: 1, maxmem: 64 * 1024 * 1024 });
const hash = `scrypt-v1$${salt.toString("hex")}$${key.toString("hex")}`;
const values = { ADMIN_USERNAME: username, ADMIN_PASSWORD_HASH: hash, ADMIN_ORIGIN: origin, ADMIN_SESSION_STORE: local ? "memory" : "database" };
for (const [name, value] of Object.entries(values)) {
  const line = name + "=" + value.replaceAll("$", "\\$");
  const re = new RegExp("^" + name + "=.*$", "m");
  env = re.test(env) ? env.replace(re, () => line) : env.trimEnd() + "\n" + line + "\n";
}
writeFileSync(envFile, env, { mode: 0o600 });
const credentialsFile = path.join(root, ".admin-credentials.local.txt");
writeFileSync(credentialsFile, `PRIVATE — keep outside Git and public folders.
Login: ${origin}/admin/login
Username: ${username}
Password: ${password}

Generated for this environment. The online account is unchanged until deployed.
Server password hash (copy literally into hosting settings, without added backslashes):
ADMIN_USERNAME=${username}
ADMIN_PASSWORD_HASH=${hash}
ADMIN_ORIGIN=${origin}
ADMIN_SESSION_STORE=${values.ADMIN_SESSION_STORE}

Store the password in your password manager, then remove this private file if desired.
`, { mode: 0o600 });
console.log("Admin configured. Credentials written to the ignored .admin-credentials.local.txt file. No secret values printed.");
