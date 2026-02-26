export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://techsolutionsutrecht.nl",
  "name": "TechSolutionsUtrecht",
  "alternateName": "Tech Solutions Utrecht",
  "description": "Professionele websites en betrouwbare tech reparaties in Utrecht. 12+ jaar ervaring. Webdevelopment en hardware reparaties onder één dak.",
  "url": "https://techsolutionsutrecht.nl",
  "telephone": "+31612345678",
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
  "areaServed": {
    "@type": "City",
    "name": "Utrecht",
    "containedIn": "Netherlands"
  },
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, iDEAL",
  "openingHours": [
    "Mo-Fr 09:00-18:00"
  ],
  "foundingDate": "2012",
  "founder": {
    "@type": "Person",
    "name": "Max"
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "1-10"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web & Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Laten Maken",
          "description": "Professionele WordPress websites op maat"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Webshop Laten Maken",
          "description": "WooCommerce webshops die converteren"
        }
      },
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
    "https://instagram.com/techsolutionsutrecht",
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
  "description": "Website laten maken en computer reparatie in Utrecht",
  "publisher": {
    "@id": "https://techsolutionsutrecht.nl"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://techsolutionsutrecht.nl/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
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
  author = "TechSolutionsUtrecht"
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "url": url,
  "datePublished": datePublished,
  "dateModified": dateModified || datePublished,
  "author": {
    "@type": "Organization",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": "TechSolutionsUtrecht",
    "logo": {
      "@type": "ImageObject",
      "url": "https://techsolutionsutrecht.nl/logo.png"
    }
  }
});
