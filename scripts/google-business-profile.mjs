import crypto from "node:crypto";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import process from "node:process";

const TOKEN_PATH = path.resolve(".google-business-profile-token.json");
const AUTH_URL_PATH = path.resolve(".google-business-profile-auth-url");
const SCOPE = "https://www.googleapis.com/auth/business.manage";
const ACCOUNT_API = "https://mybusinessaccountmanagement.googleapis.com/v1";
const BUSINESS_INFO_API = "https://mybusinessbusinessinformation.googleapis.com/v1";
const DEFAULT_REDIRECT_URI = "http://127.0.0.1:53682/oauth2callback";
const DEFAULT_READ_MASK = [
  "name",
  "title",
  "storeCode",
  "languageCode",
  "phoneNumbers",
  "categories",
  "storefrontAddress",
  "websiteUri",
  "regularHours",
  "specialHours",
  "serviceArea",
  "profile",
  "metadata",
  "openInfo",
  "serviceItems",
].join(",");

async function loadLocalEnv() {
  for (const filename of [".env.local", ".env"]) {
    try {
      const contents = await fs.readFile(path.resolve(filename), "utf8");
      for (const line of contents.split(/\r?\n/)) {
        const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
        if (!match || process.env[match[1]] !== undefined) continue;
        let value = match[2];
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        process.env[match[1]] = value;
      }
      break;
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
    }
  }
}

await loadLocalEnv();

function env(name, { optional = false } = {}) {
  const value = process.env[name]?.trim();
  if (!value && !optional) {
    throw new Error(`Missing ${name}. Copy .env.example to .env.local and add your OAuth credentials.`);
  }
  return value;
}

function oauthConfig() {
  return {
    clientId: env("GOOGLE_BUSINESS_CLIENT_ID"),
    clientSecret: env("GOOGLE_BUSINESS_CLIENT_SECRET"),
    redirectUri: env("GOOGLE_BUSINESS_REDIRECT_URI", { optional: true }) || DEFAULT_REDIRECT_URI,
  };
}

async function readToken() {
  try {
    return JSON.parse(await fs.readFile(TOKEN_PATH, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new Error("No OAuth token found. Run: npm run gbp:auth");
    }
    throw error;
  }
}

async function writeToken(token) {
  await fs.writeFile(TOKEN_PATH, `${JSON.stringify(token, null, 2)}\n`, { mode: 0o600 });
}

async function tokenRequest(params) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(`OAuth token request failed (${response.status}): ${data.error_description || data.error}`);
  }
  return data;
}

async function accessToken() {
  const saved = await readToken();
  if (saved.access_token && saved.expires_at > Date.now() + 60_000) return saved.access_token;
  if (!saved.refresh_token) throw new Error("The saved token has no refresh token. Run npm run gbp:auth again.");

  const { clientId, clientSecret } = oauthConfig();
  const refreshed = await tokenRequest({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: saved.refresh_token,
    grant_type: "refresh_token",
  });
  const merged = {
    ...saved,
    ...refreshed,
    refresh_token: refreshed.refresh_token || saved.refresh_token,
    expires_at: Date.now() + refreshed.expires_in * 1000,
  };
  await writeToken(merged);
  return merged.access_token;
}

async function api(url, options = {}) {
  const token = await accessToken();
  const response = await fetch(url, {
    ...options,
    headers: {
      authorization: `Bearer ${token}`,
      accept: "application/json",
      ...(options.body ? { "content-type": "application/json" } : {}),
      ...options.headers,
    },
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = data?.error?.message || response.statusText;
    throw new Error(`Google Business Profile API failed (${response.status}): ${message}`);
  }
  return data;
}

async function authenticate() {
  const { clientId, clientSecret, redirectUri } = oauthConfig();
  const redirect = new URL(redirectUri);
  if (redirect.protocol !== "http:" || !["127.0.0.1", "localhost"].includes(redirect.hostname)) {
    throw new Error("For this local auth command, GOOGLE_BUSINESS_REDIRECT_URI must use http://127.0.0.1 or http://localhost.");
  }

  const state = crypto.randomBytes(24).toString("hex");
  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authUrl.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    include_granted_scopes: "true",
    prompt: "consent",
    state,
  }).toString();

  const server = http.createServer(async (request, response) => {
    try {
      const callback = new URL(request.url, redirectUri);
      if (callback.pathname !== redirect.pathname) {
        response.writeHead(404).end("Not found");
        return;
      }
      if (callback.searchParams.get("state") !== state) throw new Error("OAuth state mismatch.");
      if (callback.searchParams.get("error")) throw new Error(callback.searchParams.get("error"));
      const code = callback.searchParams.get("code");
      if (!code) throw new Error("Google did not return an authorization code.");

      const token = await tokenRequest({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      });
      await writeToken({ ...token, expires_at: Date.now() + token.expires_in * 1000 });
      response.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      response.end("Google Business Profile connected. You can close this window.");
      console.log(`Connected. Token saved to ${TOKEN_PATH}`);
    } catch (error) {
      response.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
      response.end(`Connection failed: ${error.message}`);
      console.error(error.message);
      process.exitCode = 1;
    } finally {
      await fs.rm(AUTH_URL_PATH, { force: true });
      server.close();
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(Number(redirect.port), redirect.hostname, resolve);
  });

  console.log("Open this URL and approve access with the Google account that owns the profile:\n");
  console.log(authUrl.toString());
  await fs.writeFile(AUTH_URL_PATH, authUrl.toString(), { mode: 0o600 });
  console.log("\nWaiting for Google to redirect back...");
}

async function listAccounts() {
  return api(`${ACCOUNT_API}/accounts`);
}

async function resolveAccount(input) {
  if (input) return input.startsWith("accounts/") ? input : `accounts/${input}`;
  const data = await listAccounts();
  const manageable = (data.accounts || []).filter((account) => account.permissionLevel === "OWNER_LEVEL" || account.role === "OWNER");
  const candidates = manageable.length ? manageable : (data.accounts || []);
  if (candidates.length !== 1) {
    throw new Error("More than one Google Business account is available. Pass accounts/ACCOUNT_ID explicitly.");
  }
  return candidates[0].name;
}

async function listLocations(accountInput) {
  const account = await resolveAccount(accountInput);
  const params = new URLSearchParams({ readMask: DEFAULT_READ_MASK, pageSize: "100" });
  return api(`${BUSINESS_INFO_API}/${account}/locations?${params}`);
}

async function getProfile(locationInput) {
  if (!locationInput) throw new Error("Pass locations/LOCATION_ID to the profile command.");
  const location = locationInput.startsWith("locations/") ? locationInput : `locations/${locationInput}`;
  const params = new URLSearchParams({ readMask: DEFAULT_READ_MASK });
  return api(`${BUSINESS_INFO_API}/${location}?${params}`);
}

async function patchProfile(locationInput, updateMask, jsonPath) {
  if (!locationInput || !updateMask || !jsonPath) {
    throw new Error("Usage: node scripts/google-business-profile.mjs patch locations/ID field1,field2 update.json");
  }
  const location = locationInput.startsWith("locations/") ? locationInput : `locations/${locationInput}`;
  const body = JSON.parse(await fs.readFile(path.resolve(jsonPath), "utf8"));
  const params = new URLSearchParams({ updateMask, validateOnly: "false" });
  return api(`${BUSINESS_INFO_API}/${location}?${params}`, { method: "PATCH", body: JSON.stringify(body) });
}

function printHelp() {
  console.log(`Google Business Profile API helper

Commands:
  auth                         Connect the owning Google account with OAuth 2.0
  accounts                     List accessible Business Profile accounts
  locations [accounts/ID]      List profiles/locations
  profile locations/ID         Read the complete editable profile
  patch locations/ID MASK FILE Update fields from a JSON file

Examples:
  npm run gbp:auth
  npm run gbp:accounts
  npm run gbp:locations -- accounts/123456789
  npm run gbp:profile -- locations/987654321
  node scripts/google-business-profile.mjs patch locations/987654321 websiteUri update.json
`);
}

const [command = "help", ...args] = process.argv.slice(2);

try {
  let result;
  if (command === "auth") await authenticate();
  else if (command === "accounts") result = await listAccounts();
  else if (command === "locations") result = await listLocations(args[0]);
  else if (command === "profile") result = await getProfile(args[0]);
  else if (command === "patch") result = await patchProfile(args[0], args[1], args[2]);
  else printHelp();
  if (result) console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
