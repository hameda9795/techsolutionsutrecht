import type { Metadata } from "next";
import "./globals.css";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Website Laten Maken & Computer Reparatie Utrecht | TechSolutionsUtrecht",
  description: "Professionele websites en betrouwbare tech reparaties in Utrecht. 12+ jaar ervaring. Gratis offerte. ☎️ Neem contact op!",
  keywords: ["website laten maken utrecht", "computer reparatie utrecht", "webdesign utrecht", "laptop reparatie", "wordpress utrecht"],
  authors: [{ name: "TechSolutionsUtrecht" }],
  openGraph: {
    title: "TechSolutionsUtrecht - Web & Repair",
    description: "Jouw tech-partner in Utrecht. Van website tot reparatie.",
    type: "website",
    locale: "nl_NL",
    url: "https://techsolutionsutrecht.nl",
    siteName: "TechSolutionsUtrecht",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSolutionsUtrecht - Web & Repair",
    description: "Jouw tech-partner in Utrecht. Van website tot reparatie.",
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
