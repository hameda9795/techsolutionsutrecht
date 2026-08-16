import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import CookieConsent from "@/components/CookieConsent";
import Header from "@/components/Header";
import SiteAnalytics from "@/components/SiteAnalytics";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// De homepage is de pagina die op "website laten maken utrecht" moet ranken:
// alle 51 externe backlinks van de site wijzen hiernaartoe, dus hier zit de
// autoriteit. De title begint daarom met de zoekterm en noemt de prijs, zoals
// ook de concurrenten in de top 10 doen. "TechSolutions" blijft erin staan voor
// de merknaam-zoekopdrachten, waar de site nu op positie 2,6 staat.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Website Laten Maken Utrecht vanaf €250 | TechSolutions",
  description: "Website laten maken in Utrecht vanaf €250, meestal €350–€650. Binnen een week online, mobielvriendelijk en SEO-klaar. Direct contact met de developer die hem bouwt.",
  authors: [{ name: "Max", url: "https://techsolutionsutrecht.nl/over-ons" }],
  icons: {
    icon: [
      { url: '/favicon-v2.svg', type: 'image/svg+xml' },
      { url: '/favicon-v2-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-v2-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon-v2.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'shortcut icon', url: '/favicon-v2.ico', type: 'image/x-icon' },
    ],
  },
  openGraph: {
    title: "Website Laten Maken Utrecht vanaf €250 | TechSolutions",
    description: "Websites, webshops, SEO, onderhoud en automatisering voor ondernemers, met transparante startprijzen en direct contact met de developer.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Utrecht vanaf €250 | TechSolutions",
    description: "Digitale diensten voor ondernemers met transparante startprijzen en direct contact met de developer in Utrecht.",
  },
  verification: {
    google: "GIWDm0RfeTrOlSmP_ZnDC_atk7BE8xUVSL6AZDP8fuU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen">
        <Header />
        <main className="pt-[88px] md:pt-[96px]">
          {children}
        </main>
        <CookieConsent />
        <SiteAnalytics />
      </body>
    </html>
  );
}
