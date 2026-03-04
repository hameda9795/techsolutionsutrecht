import type { Metadata } from "next";
import "./globals.css";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Website Laten Maken Utrecht | Vanaf €250 | Binnen 1 Week",
  description: "Laat uw WordPress website maken in Utrecht tegen scherpe prijzen (vanaf €250). Snelle oplevering binnen 3-10 dagen. Betaalbaar, professioneel en snel. Gratis offerte!",
  keywords: ["goedkope wordpress website laten maken utrecht", "website laten maken binnen week", "snelle website laten maken", "zzp website laten maken goedkoop", "betaalbare website utrecht", "wordpress website goedkoop", "scherpe prijzen webdesign"],
  authors: [{ name: "TechSolutionsUtrecht" }],
  icons: {
    icon: [
      { url: '/logo-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: [
      { url: '/logo-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/logo-icon.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Website Laten Maken Utrecht | Vanaf €250 | Binnen 1 Week",
    description: "Laat uw WordPress website maken in Utrecht tegen scherpe prijzen (vanaf €250). Snelle oplevering binnen 3-10 dagen. Gratis offerte!",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Utrecht | Vanaf €250 | Binnen 1 Week",
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
    <html lang="nl">
      <head>
        <GoogleAnalytics />
        {/* Preload Google Fonts for better LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
          as="style"
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
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
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
