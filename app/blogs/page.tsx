// app/blogs/page.tsx

import { BannerCommon } from "@/components/UI/BannerCommon";
import { BlogTabs } from "@/components/UI/ResourcesComponent/BlogTabs";
import { Box, Typography } from "@mui/material";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { fetchBlogs } from "@/lib/api/ProductsPostApi";
import type { Metadata } from "next";

// ---- Breadcrumbs ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
  { title: "Media",     url: "/media"     },
  { title: "Blogs",     url: "/blogs"     },
];

// ---- Schema ----
const BlogsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Engineering & Manufacturing Blogs | UMANG Engineering",
  description: "Read expert blogs on pharmaceutical machinery, manufacturing technologies, process optimization, sustainability, automation, and engineering innovations from UMANG Global Equipment.",
  alternates: {
    canonical: "https://www.umangengineering.com/blogs",
  },
};

// ---- Page ----
export default async function BlogsPage() {
  const data = await fetchBlogs();

  // --- Error State ---
  if (!data) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="error" fontWeight={500}>
          Error fetching blogs. Please try again later.
        </Typography>
      </Box>
    );
  }

  // --- Empty State ---
  if (data.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="text.secondary" fontWeight={500}>
          No blogs found.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BlogsPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Blogs"
        BannerImg="resources/blogbanner.png"
        BannerHeading="Blogs"
        BannerCaption="Get! In Depth Information"
      />

      <BlogTabs data={data} />
    </>
  );
}