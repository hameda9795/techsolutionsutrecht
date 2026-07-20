import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techsolutionsutrecht.nl"),
  title: "Websites, Webshops & SEO Utrecht | TechSolutions",
  description: "Professionele websites, webshops en SEO voor ondernemers in Utrecht. Snel online, scherp geprijsd en direct contact met de developer.",
  authors: [{ name: "Max", url: "https://techsolutionsutrecht.nl/over-ons" }],
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
    title: "Websites, Webshops & SEO Utrecht | TechSolutions",
    description: "Websites, webshops, SEO, onderhoud en automatisering voor ondernemers, met transparante startprijzen en direct contact met de developer.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites, Webshops & SEO Utrecht | TechSolutions",
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
        <Header />
        <main className="pt-[88px] md:pt-[96px]">
          {children}
        </main>
      </body>
    </html>
  );
}
