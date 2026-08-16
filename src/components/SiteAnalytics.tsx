"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

/**
 * Cookieloze bezoekersmeting via Vercel Web Analytics.
 *
 * Waarom naast Google Analytics: GA4 start pas nadat de bezoeker in de
 * cookiebanner op "Analytics accepteren" klikt. Iedereen die op "Alleen
 * noodzakelijk" klikt of de banner wegklikt, wordt niet geteld — in de praktijk
 * het merendeel van de bezoekers. Daardoor was er acht maanden lang nauwelijks
 * bruikbare data over wie er langskwam en waar ze afhaakten.
 *
 * Vercel Web Analytics zet geen cookies en verwerkt geen persoonsgegevens, dus
 * het mag zonder toestemming draaien en telt 100% van de bezoekers. GA4 blijft
 * staan voor wie wél toestemming geeft; die levert de diepere data.
 *
 * Bewust zonder het pakket @vercel/analytics: dit doet exact hetzelfde (het
 * pakket laadt intern hetzelfde script van /_vercel/insights/script.js) maar
 * voegt geen dependency toe. Vercel serveert dit script automatisch zodra Web
 * Analytics voor het project aanstaat.
 */

declare global {
  interface Window {
    va?: (event: string, properties?: Record<string, unknown>) => void;
  }
}

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Het script stuurt de eerste pageview zelf; deze ref voorkomt dat die
  // meteen dubbel geteld wordt bij het monteren van de component.
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.va?.("pageview");
  }, [pathname, searchParams]);

  return null;
}

export default function SiteAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        id="vercel-web-analytics"
        src="/_vercel/insights/script.js"
        strategy="afterInteractive"
        data-endpoint="/_vercel/insights"
      />
      {/* useSearchParams vereist een Suspense-grens in de App Router. */}
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
    </>
  );
}
