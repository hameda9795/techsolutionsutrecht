# Admin authentication

The former client-side password and sessionStorage flag have been removed. Local, protected Vercel preview and production checks passed on 2026-09-06, including real database-backed login and logout. The release is live; see [the release report](release-2026-09-06.md) for deployment details.

## Login and session behavior

- Login is verified only on the server using a salted scrypt password hash. No plaintext password or hash is sent in browser JavaScript.
- A successful login creates a random 256-bit session token. Only its SHA-256 hash is stored; the browser receives an HttpOnly, SameSite=Strict cookie. HTTPS uses a Secure, host-only, __Host-prefixed cookie.
- Sessions expire after eight hours. Logout deletes the server record, so replaying the previous cookie fails. Changing the configured username/password hash invalidates prior sessions.
- Both admin pages verify the session before rendering. Every project create/update/delete/reset handler and image upload verifies the session independently, before parsing or writing data.
- Login and authenticated mutations require an exact match with ADMIN_ORIGIN in production. Protected Vercel previews use their immutable VERCEL_URL from server deployment metadata. Neither path trusts request Host or forwarded headers. Cross-site browser requests and missing Origin headers are refused.
- Login is limited to ten attempts in a fixed five-minute window for the single admin account. This includes successful and invalid attempts. The online counter is shared in Postgres and does not rely on untrusted IP headers. It intentionally trades short account-wide throttling for protection against distributed guesses.
- Configuration or session-store failures deny access. Public portfolio reads remain available.

## Configuration

Use server-only environment variables; never add a NEXT_PUBLIC_ prefix.

| Variable | Production value |
| --- | --- |
| ADMIN_USERNAME | Generated username |
| ADMIN_PASSWORD_HASH | Generated scrypt-v1 hash, copied literally |
| ADMIN_ORIGIN | https://techsolutionsutrecht.nl |
| ADMIN_SESSION_STORE | database |
| DATABASE_URL | Existing Neon/Postgres connection |

The local setup command is `node scripts/setup-admin.mjs`. It creates a fresh random password, updates the ignored .env.local, and writes the ignored .admin-credentials.local.txt. Existing admin credentials are not overwritten without the explicit --rotate flag.

The local .env.local escapes dollar signs for Next.js dotenv expansion. In hosting environment settings, paste the raw hash from the private credentials file without those backslashes. The generated local file uses a loopback origin and memory storage; use the production values above during deployment.

Online sessions and login counters use the separate admin_auth_sessions and admin_auth_attempts tables. The server creates those tables if absent. The existing portfolio tables are unchanged. The database role therefore needs CREATE permission for the auth tables, or the tables must be provisioned ahead of deployment.

Memory storage is permitted only when ADMIN_ORIGIN is a loopback origin and the process is not running on Vercel. It is for the local single-process preview and is lost on restart; it must not be used as online session storage.

## Verification performed

- Build and TypeScript checks passed.
- scripts/verify-admin-auth.mjs exercised all eight mutation handlers with real authorization logic and stubbed project/database/blob writes. It covered valid, forged, expired and revoked tokens; missing/foreign Origin; cross-site fetch metadata; server page redirects; credential rotation; rate limiting; secure cookie attributes; and failing configuration/storage.
- scripts/verify-admin-http.mjs exercised the running local production build: successful and failed login, both protected pages, all eight denied mutation paths, CSRF rejection, logout with replay rejection, authenticated input validation without writes, and absence of generated credentials in all browser bundles.
- Browser inspection verified the unauthenticated admin redirect and the wrong-password error in the login form.
- Portfolio regression passed for five project pages. SEO regression passed for all 62 reviewed sitemap URLs.

The online Neon store was exercised through the protected preview: login, both admin pages, invalid input, CSRF rejection, logout and rejected session replay passed. The server created and used its auth tables successfully. Five approved portfolio copy updates were applied through authenticated PUT requests after backing up and checking current records; images, URLs and non-copy fields were preserved. No image was uploaded. No database or other existing server secret was downloaded to the workspace.

For releases, `node scripts/prepare-release.mjs` assembles an explicit source/content/assets/config bundle and records a SHA-256 manifest under the ignored .cache directory. Deploy that directory to a protected preview. After verification, build with Production settings using `--prod --skip-domain`, verify that build, and use `vercel promote` to assign the main domain. This avoids uploading unrelated workspace files or local credentials.

The release uses Next.js 15.5.25 and React 19.2.8. Cookies, route params and searchParams use the asynchronous Next.js 15 APIs. The final npm dependency audit reported zero vulnerabilities across production and development dependencies.

Current Next.js and Node.js implementation references were obtained through Context7:
- https://github.com/vercel/next.js/blob/v14.3.0-canary.87/docs/02-app/01-building-your-application/09-authentication/index.mdx
- https://github.com/nodejs/node/blob/main/doc/api/crypto.md
