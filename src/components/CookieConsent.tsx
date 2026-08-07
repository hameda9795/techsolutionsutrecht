"use client";

import { Cookie, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

type ConsentChoice = "granted" | "denied";

const CONSENT_COOKIE = "tsu_cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

function readConsentCookie(): ConsentChoice | null {
  const value = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`))
    ?.split("=")[1];

  return value === "granted" || value === "denied" ? value : null;
}

function storeConsentCookie(choice: ConsentChoice) {
  const secureAttribute = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${choice}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secureAttribute}`;
}

function clearGoogleAnalyticsCookies() {
  const hostParts = window.location.hostname.split(".");
  const rootDomain =
    hostParts.length > 1 ? `.${hostParts.slice(-2).join(".")}` : undefined;

  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name?.startsWith("_ga")) return;

    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    if (rootDomain) {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${rootDomain}; SameSite=Lax`;
    }
  });
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    const savedConsent = readConsentCookie();
    setConsent(savedConsent);
    setIsPanelOpen(savedConsent === null);
    setHasLoadedPreference(true);
  }, []);

  const saveChoice = (choice: ConsentChoice) => {
    storeConsentCookie(choice);
    setConsent(choice);
    setIsPanelOpen(false);

    if (choice === "denied") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      clearGoogleAnalyticsCookies();
    }
  };

  if (!hasLoadedPreference) return null;

  return (
    <>
      <GoogleAnalytics enabled={consent === "granted"} />

      {isPanelOpen ? (
        <section
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-4xl rounded-2xl bg-[var(--color-ink)] p-5 text-[var(--color-bg)] shadow-lg sm:inset-x-6 sm:bottom-6 sm:p-6"
          role="dialog"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 hidden shrink-0 rounded-full bg-[var(--color-primary)] p-2.5 text-white sm:inline-flex"
              >
                <ShieldCheck size={22} strokeWidth={2} />
              </span>
              <div>
                <h2
                  id="cookie-consent-title"
                  className="text-lg font-bold tracking-tight text-[var(--color-bg)]"
                >
                  Uw privacy, uw keuze
                </h2>
                <p
                  id="cookie-consent-description"
                  className="mt-1.5 max-w-[68ch] text-sm leading-6 text-[color:color-mix(in_oklch,var(--color-bg)_78%,transparent)]"
                >
                  We gebruiken alleen analytische cookies om te begrijpen hoe de website
                  wordt gebruikt. Google Analytics start pas nadat u toestemming geeft.
                  Lees meer in ons{" "}
                  <Link
                    className="font-semibold text-[var(--color-bg)] underline decoration-[var(--color-primary-light)] underline-offset-4 hover:decoration-[var(--color-bg)]"
                    href="/privacy"
                  >
                    privacybeleid
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-col-reverse gap-2 sm:flex-row">
              <button
                className="min-h-11 rounded-lg px-5 py-2.5 text-sm font-semibold text-[var(--color-bg)] outline-none ring-1 ring-inset ring-[color:color-mix(in_oklch,var(--color-bg)_35%,transparent)] transition-colors hover:bg-[color:color-mix(in_oklch,var(--color-bg)_10%,transparent)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)]"
                onClick={() => saveChoice("denied")}
                type="button"
              >
                Alleen noodzakelijk
              </button>
              <button
                className="min-h-11 rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white outline-none transition-colors hover:bg-[var(--color-primary-dark)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]"
                onClick={() => saveChoice("granted")}
                type="button"
              >
                Analytics accepteren
              </button>
            </div>
          </div>
        </section>
      ) : (
        <button
          aria-label="Cookie-instellingen wijzigen"
          className="fixed bottom-4 left-4 z-40 inline-flex min-h-10 items-center gap-2 rounded-full bg-[var(--color-ink)] px-3.5 py-2 text-xs font-semibold text-[var(--color-bg)] shadow-md outline-none transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 motion-reduce:transform-none"
          onClick={() => setIsPanelOpen(true)}
          type="button"
        >
          <Cookie aria-hidden="true" size={16} />
          Cookie-instellingen
        </button>
      )}
    </>
  );
}
