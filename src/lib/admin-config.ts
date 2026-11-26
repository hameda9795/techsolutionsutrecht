import "server-only";
import { createHash, scrypt, timingSafeEqual } from "node:crypto";

export const SESSION_SECONDS = 8 * 60 * 60;
export const LOGIN_WINDOW_SECONDS = 5 * 60;
export const LOGIN_ATTEMPTS = 10;

export function adminConfig() {
  const username = process.env.ADMIN_USERNAME?.trim();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  // Vercel previews have an immutable generated hostname. Trust deployment
  // metadata, never the request's Host or forwarded headers, for that origin.
  const previewHost = process.env.VERCEL_ENV === "preview" ? process.env.VERCEL_URL : undefined;
  const rawOrigin = previewHost ? `https://${previewHost}` : process.env.ADMIN_ORIGIN;
  if (!username || !passwordHash || !rawOrigin || !/^scrypt-v1\$[a-f0-9]{32}\$[a-f0-9]{128}$/.test(passwordHash)) {
    throw new Error("Admin authentication is not configured.");
  }
  const url = new URL(rawOrigin);
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if (url.origin !== rawOrigin || url.username || url.password || (url.protocol !== "https:" && !(local && url.protocol === "http:"))) {
    throw new Error("ADMIN_ORIGIN must be an HTTPS origin (HTTP is allowed only on loopback).");
  }
  const memory = process.env.ADMIN_SESSION_STORE === "memory";
  if ((memory && (!local || Boolean(process.env.VERCEL))) || (!memory && !process.env.DATABASE_URL)) {
    throw new Error("Online admin sessions require the database.");
  }
  return {
    username, passwordHash, origin: url.origin, memory,
    secure: url.protocol === "https:",
    cookieName: url.protocol === "https:" ? "__Host-tsu_admin" : "tsu_admin_local",
    principal: digest(username + "\0" + passwordHash),
  };
}

export function digest(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export async function verifyAdminPassword(username: string, password: string): Promise<boolean> {
  const config = adminConfig();
  const [, salt, hash] = config.passwordHash.split("$");
  const actual = await new Promise<Buffer>((resolve, reject) => {
    scrypt(password, Buffer.from(salt, "hex"), 64, { N: 32768, r: 8, p: 1, maxmem: 64 * 1024 * 1024 }, (error, key) => error ? reject(error) : resolve(key));
  });
  const passwordMatches = timingSafeEqual(actual, Buffer.from(hash, "hex"));
  const usernameMatches = timingSafeEqual(Buffer.from(digest(username), "hex"), Buffer.from(digest(config.username), "hex"));
  return passwordMatches && usernameMatches;
}
