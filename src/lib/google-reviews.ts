import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import { unstable_cache } from "next/cache";

const TOKEN_PATH = path.resolve(".google-business-profile-token.json");
const OAUTH_TOKEN_URL = "https://oauth2.googleapis.com/token";
const ACCOUNT_API = "https://mybusinessaccountmanagement.googleapis.com/v1";
const BUSINESS_INFO_API =
  "https://mybusinessbusinessinformation.googleapis.com/v1";
const REVIEWS_API = "https://mybusiness.googleapis.com/v4";
const PLACES_API = "https://places.googleapis.com/v1";

type GoogleReviewer = {
  displayName?: string;
  profilePhotoUrl?: string;
  isAnonymous?: boolean;
};

type GoogleReview = {
  reviewId?: string;
  reviewer?: GoogleReviewer;
  starRating?: string;
  comment?: string;
  createTime?: string;
  updateTime?: string;
};

type ReviewsResponse = {
  reviews?: GoogleReview[];
  averageRating?: number;
  totalReviewCount?: number;
};

export type PublicGoogleReview = {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string | null;
};

export type GoogleReviewSummary = {
  reviews: PublicGoogleReview[];
  averageRating: number;
  totalReviewCount: number;
};

function env(name: string) {
  return process.env[name]?.trim();
}

function normalizeResourceName(value: string, prefix: string) {
  return value.startsWith(`${prefix}/`) ? value : `${prefix}/${value}`;
}

async function getRefreshToken() {
  const configuredToken = env("GOOGLE_BUSINESS_REFRESH_TOKEN");
  if (configuredToken) return configuredToken;

  try {
    const saved = JSON.parse(await fs.readFile(TOKEN_PATH, "utf8")) as {
      refresh_token?: string;
    };
    return saved.refresh_token?.trim() || null;
  } catch (error) {
    if ((error as NodeJS.ErrnoException)?.code === "ENOENT") return null;
    throw error;
  }
}

async function getAccessToken() {
  const clientId = env("GOOGLE_BUSINESS_CLIENT_ID");
  const clientSecret = env("GOOGLE_BUSINESS_CLIENT_SECRET");
  const refreshToken = await getRefreshToken();

  if (!clientId || !clientSecret || !refreshToken) return null;

  const response = await fetch(OAUTH_TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  const data = (await response.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  if (!response.ok || !data.access_token) {
    throw new Error(
      data.error_description ||
        data.error ||
        "Google OAuth access token could not be refreshed.",
    );
  }

  return data.access_token;
}

async function googleGet<T>(url: string, accessToken: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
    cache: "no-store",
  });
  const data = (await response.json()) as T & {
    error?: { message?: string };
  };

  if (!response.ok) {
    throw new Error(
      data.error?.message ||
        `Google Business Profile API returned ${response.status}.`,
    );
  }

  return data;
}

async function resolveAccount(accessToken: string) {
  const configuredAccount = env("GOOGLE_BUSINESS_ACCOUNT_ID");
  if (configuredAccount) {
    return normalizeResourceName(configuredAccount, "accounts");
  }

  const data = await googleGet<{
    accounts?: Array<{
      name: string;
      role?: string;
      permissionLevel?: string;
    }>;
  }>(`${ACCOUNT_API}/accounts`, accessToken);

  const accounts = data.accounts || [];
  const manageable = accounts.filter(
    (account) =>
      account.permissionLevel === "OWNER_LEVEL" || account.role === "OWNER",
  );
  const candidates = manageable.length > 0 ? manageable : accounts;

  if (candidates.length !== 1) {
    throw new Error(
      "Set GOOGLE_BUSINESS_ACCOUNT_ID because more than one Google Business account is available.",
    );
  }

  return candidates[0].name;
}

async function resolveLocation(accessToken: string, account: string) {
  const configuredLocation = env("GOOGLE_BUSINESS_LOCATION_ID");
  if (configuredLocation) {
    return normalizeResourceName(configuredLocation, "locations");
  }

  const params = new URLSearchParams({
    readMask: "name,title",
    pageSize: "100",
  });
  const data = await googleGet<{
    locations?: Array<{ name: string; title?: string }>;
  }>(`${BUSINESS_INFO_API}/${account}/locations?${params}`, accessToken);
  const locations = data.locations || [];

  if (locations.length !== 1) {
    throw new Error(
      "Set GOOGLE_BUSINESS_LOCATION_ID because more than one Google Business location is available.",
    );
  }

  return locations[0].name;
}

function ratingToNumber(rating?: string) {
  const ratings: Record<string, number> = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  };
  return rating ? ratings[rating] || 0 : 0;
}

async function loadBusinessProfileReviewSummary(): Promise<GoogleReviewSummary | null> {
  const accessToken = await getAccessToken();
  if (!accessToken) return null;

  const account = await resolveAccount(accessToken);
  const location = await resolveLocation(accessToken, account);
  const params = new URLSearchParams({
    pageSize: "20",
    orderBy: "updateTime desc",
  });
  const data = await googleGet<ReviewsResponse>(
    `${REVIEWS_API}/${account}/${location}/reviews?${params}`,
    accessToken,
  );

  const reviews = (data.reviews || [])
    .filter((review) => Boolean(review.comment?.trim()))
    .slice(0, 3)
    .map((review, index): PublicGoogleReview => {
      const comment = review.comment!.trim();
      return {
        id: review.reviewId || `${review.updateTime || "review"}-${index}`,
        author:
          review.reviewer?.displayName?.trim() ||
          (review.reviewer?.isAnonymous ? "Anonieme Google-gebruiker" : "Google-gebruiker"),
        rating: ratingToNumber(review.starRating),
        comment,
        date: review.updateTime || review.createTime || null,
      };
    });

  if (reviews.length === 0) return null;

  return {
    reviews,
    averageRating: Number(data.averageRating || 0),
    totalReviewCount: Number(data.totalReviewCount || reviews.length),
  };
}

type PlacesReview = {
  name?: string;
  authorAttribution?: { displayName?: string };
  rating?: number;
  text?: { text?: string };
  publishTime?: string;
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesReview[];
};

async function loadPlacesReviewSummary(): Promise<GoogleReviewSummary | null> {
  const apiKey = env("GOOGLE_PLACES_API_KEY");
  const placeId = env("GOOGLE_PLACE_ID");
  if (!apiKey || !placeId) return null;

  const response = await fetch(
    `${PLACES_API}/places/${placeId}?languageCode=nl`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      cache: "no-store",
    },
  );

  const data = (await response.json()) as PlacesResponse & {
    error?: { message?: string };
  };

  if (!response.ok) {
    throw new Error(
      data.error?.message || `Google Places API returned ${response.status}.`,
    );
  }

  const reviews = (data.reviews || [])
    .filter((review) => Boolean(review.text?.text?.trim()))
    .slice(0, 3)
    .map((review, index): PublicGoogleReview => ({
      id: review.name || `places-review-${index}`,
      author:
        review.authorAttribution?.displayName?.trim() || "Google-gebruiker",
      rating: review.rating || 0,
      comment: review.text!.text!.trim(),
      date: review.publishTime || null,
    }));

  if (reviews.length === 0) return null;

  return {
    reviews,
    averageRating: Number(data.rating || 0),
    totalReviewCount: Number(data.userRatingCount || reviews.length),
  };
}

async function loadReviewSummary(): Promise<GoogleReviewSummary> {
  try {
    const businessProfileSummary = await loadBusinessProfileReviewSummary();
    if (businessProfileSummary) return businessProfileSummary;
  } catch (error) {
    console.error(
      "Google Business Profile reviews could not be loaded, falling back to Places API:",
      error instanceof Error ? error.message : error,
    );
  }

  const placesSummary = await loadPlacesReviewSummary();
  if (placesSummary) return placesSummary;

  throw new Error(
    "No Google reviews available from Business Profile or Places API.",
  );
}

const getCachedGoogleReviewSummary = unstable_cache(
  loadReviewSummary,
  ["google-business-review-summary-v2"],
  { revalidate: 21_600, tags: ["google-business-reviews"] },
);

export async function getGoogleReviewSummary() {
  try {
    return await getCachedGoogleReviewSummary();
  } catch (error) {
    console.error(
      "Google Business Profile reviews could not be loaded:",
      error instanceof Error ? error.message : error,
    );
    return null;
  }
}
