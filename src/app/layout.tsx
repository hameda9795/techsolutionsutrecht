import type { Metadata } from "next";
import "./globals.css";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Goedkope Website Laten Maken Utrecht | Vanaf €250 | Snelle Oplevering | TechSolutionsUtrecht",
  description: "Goedkope website laten maken vanaf €250 in Utrecht. Snelle oplevering binnen 3-10 dagen. Voordelige webdesign, webshop en reparaties tegen scherpe prijzen. Gratis offerte!",
  keywords: ["goedkope website laten maken utrecht", "voordelige website", "betaalbare website", "snelle website", "lage prijs webdesign", "website binnen 1 week", "express website", "scherpe prijzen"],
  authors: [{ name: "TechSolutionsUtrecht" }],
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/images/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Goedkope Website Laten Maken Utrecht | Vanaf €250",
    description: "Voordelige website laten maken vanaf €250. Snelle oplevering binnen 3-10 dagen. Scherpe prijzen!")
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goedkope Website Laten Maken Utrecht | Vanaf €250",
    description: "Voordelige website laten maken vanaf €250. Snelle oplevering!")
  },
  alternates: {
    canonical: "https://techsolutionsutrecht.nl",
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
    <html lang="nl" className="dark">
      <head>
        <GoogleAnalytics />
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
        {children}
      </body>
    </html>
  );
}
