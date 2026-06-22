// app/products/[slug]/page.tsx

import { Box, Typography, Container } from "@mui/material";
import { ProductsCards } from "@/components/UI/productComponents/ProductsCards";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { fetchproductsSegment } from "@/lib/api/ProductsPostApi";
import productCategories from "@/lib/api/ProductCategoriesFormat.json";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { ProductsCategoryCardsSkeleton } from "@/components/UI/Skeleton/product/ProductsCategoryCardsSkeleton";
import type { Metadata } from "next";

// ---- Types ----
interface Props {
  params: Promise<{ slug: string }>;
}

// ---- Dynamic Metadata ----
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const matchedCategory = productCategories.find(
    (cat) => cat.pro_slug === slug
  );

  return {
    title: matchedCategory?.pro_segment_title ?? "Products",
    description: matchedCategory?.pro_segment_desc ?? "Explore our product range.",
    alternates: {
      canonical: `https://www.umangnutraceuticals.com/products/${slug}`,
    },
  };
}

// ---- Page ----
export default async function ProductsPage({ params }: Props) {
  const { slug } = await params;

  const matchedCategory = productCategories.find(
    (cat) => cat.pro_slug === slug
  );

  const segmentType = matchedCategory?.pro_segment_type ?? null;

  // Fetch data on the server
  const data = await fetchproductsSegment(slug);

  const BreadcrumbsUrls = [
    { title: "Home",     url: "/"                    },
    { title: "Products", url: "/product"             },
    { title: slug,       url: `/products/${slug}`    },
  ];

  const ProductsPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      OrganizationSchema,
      createBreadcrumbSchema(BreadcrumbsUrls),
    ],
  };

  const titlebanner = (
    <>
      {slug.replace(/-/g, " ").toUpperCase()}
      <Box component="sup" sx={{ fontSize: "0.3em", verticalAlign: "super" }}>
        TM
      </Box>
    </>
  );

  // --- Error State ---
  if (!data) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="error" fontWeight={500}>
          Error fetching products. Please try again later.
        </Typography>
      </Box>
    );
  }

  // --- Empty State ---
  if (data.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="text.secondary" fontWeight={500}>
          No products found for this segment.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductsPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent={slug}
        BannerImg={`products/segment/${slug}.webp`}
        BannerHeading={titlebanner}
        BannerCaption={segmentType}
      />

      <Container sx={{ justifyItems: { xs: "center", md: "left" } }}>
        <ProductsCards data={data} />
      </Container>
    </>
  );
}