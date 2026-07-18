# Google Business Profile API connection

Google Business Profile management requires OAuth 2.0. A Google Maps or browser API key cannot read or update a private Business Profile.

## Google Cloud setup

1. Use a Google Cloud project owned by TechSolutionsUtrecht.
2. Request/enable Google Business Profile API access for that project.
3. Enable the Business Profile Account Management API and Business Profile Business Information API.
4. Configure the OAuth consent screen.
5. Create an OAuth 2.0 Client ID of type **Web application**.
6. Add this authorised redirect URI exactly:

   `http://127.0.0.1:53682/oauth2callback`

7. Copy `.env.example` to `.env.local` and add the Client ID and Client Secret. Never commit `.env.local`.

## Connect the owner account

Copy the example file and add the real OAuth credentials:

```powershell
Copy-Item .env.example .env.local
npm run gbp:auth
```

The CLI reads `.env.local` automatically. Never commit this file.

Open the printed Google URL and approve access with the account that owns TechSolutionsUtrecht. The refresh token is saved in `.google-business-profile-token.json`, which is ignored by Git.

## Inspect the profile

```powershell
npm run gbp:accounts
npm run gbp:locations -- accounts/ACCOUNT_ID
npm run gbp:profile -- locations/LOCATION_ID
```

## Update a profile field

Put only the fields to update in a JSON file. Example `update.json`:

```json
{
  "websiteUri": "https://techsolutionsutrecht.nl/"
}
```

Then run:

```powershell
node scripts/google-business-profile.mjs patch locations/LOCATION_ID websiteUri update.json
```

Review every update payload before running `patch`; it changes the live Google Business Profile.
