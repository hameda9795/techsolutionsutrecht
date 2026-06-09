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
  title: "Website Laten Maken Utrecht | TechSolutionsUtrecht",
  description: "Professionele website laten maken in Utrecht. Responsive, snel en SEO-klaar. Direct contact met de developer, binnen 1 week online. Vraag een offerte aan.",
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
    title: "Website Laten Maken Utrecht | TechSolutionsUtrecht",
    description: "Professionele website laten maken in Utrecht. Responsive, snel en SEO-klaar. Direct contact met de developer. Vraag een offerte aan.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Utrecht | TechSolutionsUtrecht",
    description: "Professionele website laten maken in Utrecht. Responsive, snel en SEO-klaar. Direct contact met de developer.",
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
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
