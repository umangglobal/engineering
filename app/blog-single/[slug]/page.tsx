// app/blog-single/[slug]/page.tsx

import { Box, Typography, Container } from "@mui/material";
import { Breadcrumb } from "@/components/UI/Breadcrumb";
import { BlogSliderCard } from "@/components/UI/ResourcesComponent/BlogSliderCard";
import { RecentBlogsCards } from "@/components/UI/ResourcesComponent/RecentBlogsCards";
import { createArticleSchema, createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { fetchBlogsDescription } from "@/lib/api/ProductsPostApi";
import type { Metadata } from "next";

// ---- Types ----
interface Props {
  params: Promise<{ slug: string }>;
}

// ---- Dynamic Metadata ----
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchBlogsDescription(slug);

  return {
    title: data?.g_title ?? "Blog",
    description: data?.g_meta_description ?? "",
    alternates: {
      canonical: `https://www.umangnutraceuticals.com/blog-single/${slug}`,
    },
  };
}

// ---- Page ----
export default async function BlogSinglePage({ params }: Props) {
  const { slug } = await params;

  const data = await fetchBlogsDescription(slug);

  // --- Error State ---
  if (!data) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="error" fontWeight={500}>
          Error fetching blog. Please try again later.
        </Typography>
      </Box>
    );
  }

  // --- Empty State ---
  if (data.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="text.secondary" fontWeight={500}>
          No blog found.
        </Typography>
      </Box>
    );
  }

  // ---- Breadcrumbs ----
  const BreadcrumbsUrls = [
    { title: "Home",      url: "/"                              },
    { title: "Resources", url: "/resources"                     },
    { title: "Media",     url: "/media"                        },
    { title: "Blogs",     url: "/blogs"                        },
    { title: data.g_title as string, url: `/blog-single/${data.g_slug}` },
  ];

  // ---- Schema ----
  const blogData = {
    headline:     data.g_title         as string,
    description:  data.g_meta_description as string,
    image:        `https://www.umangnutraceuticals.com/assets/images/blogs/${data.g_img}`,
    url:          `https://www.umangnutraceuticals.com/blog-single/${data.g_slug}`,
    datePublished: data.g_date         as string,
    dateModified:  data.g_updated_date as string,
  };

  const BlogPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      OrganizationSchema,
      createBreadcrumbSchema(BreadcrumbsUrls),
      createArticleSchema(blogData),
    ],
  };

  const sanitizedBody = data.g_body as string;

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BlogPageSchema) }}
      />

      <Container>
        {/* Breadcrumb */}
        <Breadcrumb
          BreadcrumbsUrls={BreadcrumbsUrls}
          BreadcrumbsCurrent={data.g_title as string}
        />

        {/* Blog Header Card */}
        <Box display="flex" paddingTop="15px" flexDirection="column" gap={4} width="100%">
          <BlogSliderCard data={data} />
        </Box>

        {/* Main Layout */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          py={4}
        >
          {/* Left — Blog Body */}
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              maxWidth: { md: 781 },
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box
              component="div"
              className="post-details"
              sx={{
                "& h4": { mt: 4, mb: 2, fontWeight: 600, fontSize: "1.5rem" },
                "& p":  { mb: 2, lineHeight: 1.7 },
                "& b":  { fontWeight: 600 },
                "& ul, & ol": { pl: 3, mb: 2 },
                "& li": { mb: 1 },
              }}
              dangerouslySetInnerHTML={{ __html: sanitizedBody }}
            />
          </Box>

          {/* Right — Sidebar */}
          <Box sx={{ width: { xs: "100%", md: "30%" } }}>
            <RecentBlogsCards />
          </Box>
        </Box>

        {/* Mobile Recent Blogs */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <RecentBlogsCards />
        </Box>
      </Container>
    </>
  );
}