// app/products/[slug]/page.tsx

import { Box, Typography, Container } from "@mui/material";
import { ProductsCards } from "@/components/UI/productComponents/ProductsCards";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { fetchproductsSegment, fetchproductsSegmentDescription } from "@/lib/api/ProductsPostApi";
import productCategories from "@/lib/api/ProductCategoriesFormat.json";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { ProductsCategoryCardsSkeleton } from "@/components/UI/Skeleton/product/ProductsCategoryCardsSkeleton";
import type { Metadata } from "next";
import { AccordianFaqProduct } from "@/components/UI/productComponents/AccordianFaqProduct";

// ---- Types ----
interface Props {
  params: Promise<{ slug: string }>;
}

// ✅ Same logic as your working React version
const parseFaq = (rawFaq: string) => {
  return rawFaq
    .split("|")
    .map((item) => item.trim())
    .filter((item) => item !== "")
    .map((item, index) => {
      const separatorIndex = item.indexOf("::");
      if (separatorIndex === -1) return null;

      const title = item.slice(0, separatorIndex).trim();
      const description = item.slice(separatorIndex + 2).trim();

      if (!title || !description) return null;

      return {
        title,
        description,
        defaultExpanded: index === 0 ? "defaultExpanded" : "",
      };
    })
    .filter(Boolean) as { title: string; description: string; defaultExpanded: string }[];
};

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
      canonical: `https://www.umangengineering.com/products/${slug}`,
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
  const segmentDescriptionData = await fetchproductsSegmentDescription(slug);

  const BreadcrumbsUrls = [
    { title: "Home",     url: "/"                    },
    { title: "Products", url: "/product"             },
    { title: slug,       url: `/products/${slug}`    },
  ];

      // ---- FAQ Parsing (using same logic as working React version) ----
  const formattedFAQ = parseFaq(segmentDescriptionData?.seg_faq || "");

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
      {/* <Box component="sup" sx={{ fontSize: "0.3em", verticalAlign: "super" }}>
        TM
      </Box> */}
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

        
            <Typography 
                  variant="body1"
                  sx={{
                    color: "#091610",
                    fontSize: "16px",
                    fontFamily: "Jost",
                    fontWeight: 400,
                    lineHeight: "1.5",
                    whiteSpace: "pre-line",
                  }}
                  >
                   {segmentDescriptionData?.seg_desc}
                  </Typography>

                  {/* FAQs */}
                  
                  <Box my={8}>
                    <Typography variant="h3" sx={{ textAlign: "left", color: "black", fontSize: { xs: "20px", md: "32px" }, fontFamily: "Jost-sb", fontWeight: 500, marginBottom: "50px" }}>
                      FAQs on {segmentDescriptionData?.seg_name}
                    </Typography>
                    <AccordianFaqProduct formattedFAQ={formattedFAQ} />
                  </Box>
            
  
      
      </Container>
    </>
  );
}