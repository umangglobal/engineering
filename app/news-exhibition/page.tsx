// app/news-exhibition/page.tsx

import { BannerCommon } from "@/components/UI/BannerCommon";
import { Box, Typography } from "@mui/material";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { NewsTabs } from "@/components/UI/ResourcesComponent/NewsTabs";
import { fetchNewsExhibitions } from "@/lib/api/ProductsPostApi";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",               url: "/"                   },
  { title: "Resources",          url: "/resources"          },
  { title: "Media",              url: "/media"              },
  { title: "News & Exhibitions", url: "/news-exhibition"    },
];

const NewsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Latest News & Updates | Umang Engineering",
  description: "Keep up with the latest in pharma! Visit Umang Engineering for news, updates, and expert insights on cutting-edge research and discoveries.",
  alternates: {
    canonical: "https://www.umangengineering.com/news-exhibition",
  },
};

// ---- Page ----
export default async function NewsExhibitionPage() {
  const data = await fetchNewsExhibitions();

  // --- Error State ---
  if (!data) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="error" fontWeight={500}>
          Error fetching news. Please try again later.
        </Typography>
      </Box>
    );
  }

  // --- Empty State ---
  if (data.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="text.secondary" fontWeight={500}>
          No news found.
        </Typography>
      </Box>
    );
  }

  // --- Success State ---
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(NewsPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="News & Exhibitions"
        BannerImg="resources/exhibitionbanner.png"
        BannerHeading="News & Exhibitions"
        BannerCaption="It's an honour to meet you at Exhibitions"
      />

      <NewsTabs data={data} />
    </>
  );
}