import { coreServices } from "@/lib/services";
import { BUSINESS_ID, SITE_URL, WEBSITE_ID } from "@/lib/seo";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  "name": "TechSolutionsUtrecht",
  "alternateName": "Tech Solutions Utrecht",
  "description": "Professionele websites, webshops, SEO, websiteonderhoud, bedrijfsautomatisering en betrouwbare tech reparaties in Utrecht.",
  "image": `${SITE_URL}/profile.webp`,
  "url": SITE_URL,
  "telephone": "+31625518708",
  "email": "info@techsolutionsutrecht.nl",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Utrecht",
    "addressRegion": "Utrecht",
    "addressCountry": "NL"
  },
  "areaServed": [
    { "@type": "City", "name": "Utrecht" },
    { "@type": "City", "name": "Nieuwegein" },
    { "@type": "City", "name": "Zeist" },
    { "@type": "City", "name": "Houten" },
    { "@type": "City", "name": "Amersfoort" },
    { "@type": "City", "name": "IJsselstein" },
    { "@type": "City", "name": "De Meern" },
    { "@type": "City", "name": "Vleuten" }
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, iDEAL",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "founder": {
    "@type": "Person",
    "name": "Max",
    "jobTitle": "Webdeveloper",
    "url": `${SITE_URL}/over-ons`
  },
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "KvK",
    "value": "99202301"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digitale diensten en reparaties",
    "itemListElement": [
      ...coreServices.map((service) => ({
        "@type": "Offer",
        "url": `${SITE_URL}${service.href}`,
        "price": service.schemaPrice,
        "priceCurrency": "EUR",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.pageDescription,
          "url": `${SITE_URL}${service.href}`
        }
      })),
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Computer Reparatie",
          "description": "Snelle en betrouwbare computer reparaties"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Laptop Reparatie",
          "description": "Vakkundige laptop reparaties in Utrecht"
        }
      }
    ]
  },
  "sameAs": [
    "https://facebook.com/techsolutionsutrecht",
    "https://www.instagram.com/techsolutionsutrecht/",
    "https://linkedin.com/company/techsolutionsutrecht"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  "url": SITE_URL,
  "name": "TechSolutionsUtrecht",
  "alternateName": "Tech Solutions Utrecht",
  "description": "Websites, webshops, SEO, websiteonderhoud, automatisering en computerreparatie in Utrecht",
  "publisher": {
    "@id": BUSINESS_ID
  }
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = ({
  name,
  description,
  url,
  areaServed = "Utrecht"
}: {
  name: string;
  description: string;
  url: string;
  areaServed?: string | string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${url}#service`,
  "name": name,
  "description": description,
  "url": url,
  "provider": {
    "@id": BUSINESS_ID
  },
  "areaServed": (Array.isArray(areaServed) ? areaServed : [areaServed]).map((city) => ({
    "@type": "City",
    "name": city,
    "containedInPlace": {
      "@type": "Country",
      "name": "Nederland"
    }
  }))
});

export const articleSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  author = "Max"
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${url}#article`,
  "headline": title,
  "description": description,
  "url": url,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  },
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  "isPartOf": { "@id": WEBSITE_ID },
  ...(image ? { "image": image.startsWith("http") ? image : `${SITE_URL}${image}` } : {}),
  "author": author === "TechSolutionsUtrecht"
    ? { "@id": BUSINESS_ID }
    : {
        "@type": "Person",
        "@id": `${SITE_URL}/over-ons#max`,
        "name": author,
        "url": `${SITE_URL}/over-ons`
      },
  "publisher": {
    "@id": BUSINESS_ID
  }
});

export const faqPageSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
