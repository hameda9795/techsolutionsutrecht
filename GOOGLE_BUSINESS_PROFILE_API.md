# Google Business Profile API connection

Google Business Profile management requires OAuth 2.0. A Google Maps or browser API key cannot read or update a private Business Profile.

## Quick fallback while Business Profile API access is pending

Google's manual approval for Business Profile API access can take 7–10 days.
Until it's approved, the homepage can show reviews via the **Places API**
instead, which only needs an API key (no OAuth, no approval wait):

1. In [Google Cloud Console](https://console.cloud.google.com/), open the same
   project (or any project) and enable **Places API (New)**.
2. Create an API key under **APIs & Services → Credentials**. Restrict it to
   the Places API and, ideally, to your server's IP or the `places.googleapis.com`
   referrer.
3. Find the business's **Place ID** with Google's
   [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   (search the business name/address, copy the ID shown on the map pin).
4. Add to `.env.local` (and to production env vars):

   ```
   GOOGLE_PLACES_API_KEY=your-api-key
   GOOGLE_PLACE_ID=the-place-id
   ```

5. Restart the dev server. The homepage automatically uses the Business
   Profile API when its credentials are present and working; otherwise it
   falls back to Places API reviews. No code changes needed when the Business
   Profile approval eventually comes through — just leave both sets of vars in
   place and it keeps preferring Business Profile.

Note: Places API returns at most 5 reviews chosen by Google (not
configurable), and requires a billing account on the Cloud project (Google
gives a recurring free monthly credit that comfortably covers this use case).

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

The homepage reads the three newest reviews containing text, along with the
live average rating and total review count. Results are cached for six hours.
The OAuth credentials and tokens are only read on the server.

## Inspect the profile

```powershell
npm run gbp:accounts
npm run gbp:locations -- accounts/ACCOUNT_ID
npm run gbp:profile -- locations/LOCATION_ID
```

## Production environment variables

Add these secrets to the hosting environment:

- `GOOGLE_BUSINESS_CLIENT_ID`
- `GOOGLE_BUSINESS_CLIENT_SECRET`
- `GOOGLE_BUSINESS_REFRESH_TOKEN`

If the connected owner account contains more than one Business Profile account
or location, also add:

- `GOOGLE_BUSINESS_ACCOUNT_ID`
- `GOOGLE_BUSINESS_LOCATION_ID`

Use only the numeric ID or the complete resource name (`accounts/…` and
`locations/…`). The refresh token can be copied from the locally generated,
git-ignored `.google-business-profile-token.json` after a successful
`npm run gbp:auth`. Never commit that token.

If the credentials are missing, revoked, or Google is temporarily unavailable,
the review section is hidden instead of showing fictional fallback reviews.

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
