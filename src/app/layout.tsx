import type { Metadata } from "next";
import "./globals.css";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Goedkope WordPress Website Laten Maken Utrecht | Binnen 1 Week | TechSolutionsUtrecht",
  description: "Laat uw WordPress website maken in Utrecht tegen scherpe prijzen (vanaf €250). Snelle oplevering binnen 3-10 dagen. Betaalbaar, professioneel en snel. Gratis offerte!",
  keywords: ["goedkope wordpress website laten maken utrecht", "website laten maken binnen week", "snelle website laten maken", "zzp website laten maken goedkoop", "betaalbare website utrecht", "wordpress website goedkoop", "scherpe prijzen webdesign"],
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
    title: "Goedkope WordPress Website Laten Maken Utrecht | Binnen 1 Week",
    description: "Laat uw WordPress website maken in Utrecht tegen scherpe prijzen (vanaf €250). Snelle oplevering binnen 3-10 dagen. Gratis offerte!",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goedkope WordPress Website Laten Maken Utrecht | Binnen 1 Week",
    description: "Laat uw WordPress website maken in Utrecht tegen scherpe prijzen (vanaf €250). Snelle oplevering binnen 3-10 dagen.",
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
