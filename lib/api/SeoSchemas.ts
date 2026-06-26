// lib/api/SeoSchemas.ts  (no .tsx needed — no JSX in this file)

// ---- Types ----
interface BreadcrumbItem {
  title: string;
  url: string;
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  segment: string;
  brand?: string;
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified: string;
}

interface FaqItem {
  title: string;
  description: string;
}

interface VideoSchemaProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  contentUrl?: string;
  embedUrl: string;
  uploadDate: string;
  duration?: string;
  publisherName?: string;
}

// ---- Schemas ----

export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Umang Engineering",
  "legalName": "Umang Global Group Pvt. Ltd.",
  "url": "https://www.umangengineering.com",
  "logo": "https://www.umangengineering.com/assets/images/logo.svg",
  "image": "https://www.umangengineering.com/assets/images/home/abouthome.webp",
  "description": "Advanced customizable encapsulation solutions for personal care formulations",
  "foundingDate": "2015-01-01",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit No. 1, 2nd Floor, Vicino (Mega Mall), New Link Rd, Oshiwara.",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400102",
    "addressCountry": "IN",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+919518349134",
    "email": "info@umangglobal.com",
    "availableLanguage": ["English", "Hindi"],
  },
  "sameAs": [
    "https://www.facebook.com/umangglobalgrouppvtltd/",
    "https://in.pinterest.com/umangglobalgroup/",
    "https://www.instagram.com/umangglobalgroup/",
    "https://x.com/UmangGlobalGrp",
    "https://www.linkedin.com/company/umang-global/",
  ],
};

export const WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Umang Engineering",
  url: "https://www.umangengineering.com/",
};

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.title,
    "item": `https://www.umangnutraceuticals.com${item.url}`,
  })),
});

export const createProductSchema = ({
  name,
  description,
  image,
  url,
  segment,
  brand = "Umang Engineering",
}: ProductSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": name,
  "image": image,
  "description": description,
  "url": url,
  "brand": {
    "@type": "Organization",
    "name": brand,
  },
  "category": segment,
});

export const createArticleSchema = ({
  headline,
  description,
  image,
  url,
  datePublished,
  dateModified,
}: ArticleSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url,
  },
  "headline": headline,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "dateModified": dateModified,
  "author": {
    "@type": "Organization",
    "name": "Umang Engineering",
  },
  "publisher": OrganizationSchema,
});

export const createFaqSchema = (faqItems: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.title,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.description,
    },
  })),
});

export const createVideoSchema = ({
  title,
  description,
  thumbnailUrl,
  embedUrl,
  uploadDate,
  duration,
  publisherName = "Umang Engineering",
}: VideoSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": title,
  "description": description,
  "thumbnailUrl": thumbnailUrl,
  "uploadDate": uploadDate,
  "embedUrl": embedUrl,
  ...(duration && { "duration": duration }),
  "publisher": {
    "@type": "Organization",
    "name": publisherName,
  },
});