import "server-only";
import { neon } from "@neondatabase/serverless";
import { adminConfig, LOGIN_WINDOW_SECONDS } from "./admin-config";

type Session = { principal: string; expiresAt: number };
type Attempt = { count: number; resetAt: number };
const state = globalThis as typeof globalThis & {
  __tsuAdminLocal?: { sessions: Map<string, Session>; attempts: Map<string, Attempt> };
};
function localStore() {
  return state.__tsuAdminLocal ??= { sessions: new Map<string, Session>(), attempts: new Map<string, Attempt>() };
}
async function database() {
  const sql = neon(process.env.DATABASE_URL!, { fetchOptions: { cache: "no-store" } });
  // Separate auth tables; existing portfolio records and schema are unchanged.
  await sql`CREATE TABLE IF NOT EXISTS admin_auth_sessions (
    token_hash CHAR(64) PRIMARY KEY, principal_hash CHAR(64) NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL
  )`;
  await sql`CREATE TABLE IF NOT EXISTS admin_auth_attempts (
    attempt_key CHAR(64) PRIMARY KEY, attempts INTEGER NOT NULL,
    reset_at TIMESTAMPTZ NOT NULL
  )`;
  return sql;
}

export async function saveAdminSession(hash: string, session: Session) {
  if (adminConfig().memory) {
    const sessions = localStore().sessions;
    sessions.forEach((value, key) => { if (value.expiresAt <= Date.now()) sessions.delete(key); });
    sessions.set(hash, session);
    return;
  }
  const sql = await database();
  await sql`DELETE FROM admin_auth_sessions WHERE expires_at <= NOW()`;
  await sql`INSERT INTO admin_auth_sessions (token_hash, principal_hash, expires_at)
    VALUES (${hash}, ${session.principal}, ${new Date(session.expiresAt).toISOString()})`;
}

export async function readAdminSession(hash: string): Promise<Session | null> {
  if (adminConfig().memory) return localStore().sessions.get(hash) ?? null;
  const sql = await database();
  const rows = await sql`SELECT principal_hash, expires_at FROM admin_auth_sessions
    WHERE token_hash = ${hash} AND expires_at > NOW()`;
  return rows[0] ? { principal: String(rows[0].principal_hash), expiresAt: new Date(String(rows[0].expires_at)).getTime() } : null;
}

export async function deleteAdminSession(hash: string) {
  if (adminConfig().memory) { localStore().sessions.delete(hash); return; }
  const sql = await database();
  await sql`DELETE FROM admin_auth_sessions WHERE token_hash = ${hash}`;
}

export async function recordLoginAttempt(key: string): Promise<Attempt> {
  if (adminConfig().memory) {
    const attempts = localStore().attempts;
    const old = attempts.get(key);
    const attempt = old && old.resetAt > Date.now() ? { ...old, count: old.count + 1 } : { count: 1, resetAt: Date.now() + LOGIN_WINDOW_SECONDS * 1000 };
    attempts.set(key, attempt);
    return attempt;
  }
  const sql = await database();
  // Atomic account-wide limit, shared by serverless instances and not keyed to spoofable IP headers.
  const rows = await sql`INSERT INTO admin_auth_attempts (attempt_key, attempts, reset_at)
    VALUES (${key}, 1, NOW() + ${LOGIN_WINDOW_SECONDS} * INTERVAL '1 second')
    ON CONFLICT (attempt_key) DO UPDATE SET
      attempts = CASE WHEN admin_auth_attempts.reset_at <= NOW() THEN 1 ELSE admin_auth_attempts.attempts + 1 END,
      reset_at = CASE WHEN admin_auth_attempts.reset_at <= NOW() THEN EXCLUDED.reset_at ELSE admin_auth_attempts.reset_at END
    RETURNING attempts, reset_at`;
  return { count: Number(rows[0].attempts), resetAt: new Date(String(rows[0].reset_at)).getTime() };
}
