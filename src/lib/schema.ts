import { coreServices } from "@/lib/services";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://techsolutionsutrecht.nl",
  "name": "TechSolutionsUtrecht",
  "alternateName": "Tech Solutions Utrecht",
  "description": "Professionele websites, webshops, SEO, websiteonderhoud, bedrijfsautomatisering en betrouwbare tech reparaties in Utrecht.",
  "image": "https://techsolutionsutrecht.nl/profile.webp",
  "url": "https://techsolutionsutrecht.nl",
  "telephone": "+31625518708",
  "email": "info@techsolutionsutrecht.nl",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Utrecht",
    "addressRegion": "Utrecht",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.0907,
    "longitude": 5.1214
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
    "url": "https://techsolutionsutrecht.nl/over-ons"
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
        "url": `https://techsolutionsutrecht.nl${service.href}`,
        "price": service.schemaPrice,
        "priceCurrency": "EUR",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.pageDescription,
          "url": `https://techsolutionsutrecht.nl${service.href}`
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
  "@id": "https://techsolutionsutrecht.nl#website",
  "url": "https://techsolutionsutrecht.nl",
  "name": "TechSolutionsUtrecht",
  "alternateName": "Tech Solutions Utrecht",
  "description": "Websites, webshops, SEO, websiteonderhoud, automatisering en computerreparatie in Utrecht",
  "publisher": {
    "@id": "https://techsolutionsutrecht.nl"
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
  provider = "TechSolutionsUtrecht"
}: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "url": url,
  "provider": {
    "@type": "LocalBusiness",
    "name": provider
  },
  "areaServed": {
    "@type": "City",
    "name": "Utrecht",
    "containedIn": "Netherlands"
  }
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
  "headline": title,
  "description": description,
  "url": url,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  },
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  ...(image ? { "image": image.startsWith("http") ? image : `https://techsolutionsutrecht.nl${image}` } : {}),
  "author": {
    "@type": "Person",
    "name": author,
    "url": "https://techsolutionsutrecht.nl/over-ons"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TechSolutionsUtrecht",
    "logo": {
      "@type": "ImageObject",
      "url": "https://techsolutionsutrecht.nl/logo-icon.png"
    }
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
