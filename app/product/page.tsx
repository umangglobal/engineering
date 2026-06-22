// app/product/page.tsx

import { Box, Container } from "@mui/material";
import ProductCategories from "../../lib/api/ProductCategoriesFormat.json";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { ProductCard } from "@/components/UI/productComponents/ProductCard";
import type { Metadata } from "next";

// ---- Breadcrumbs ----
const BreadcrumbsUrls = [
  { title: "Home",    url: "/"        },
  { title: "Product", url: "/product" },
];

// ---- Schema ----
const ProductPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata (replaces <Meta>) ----
export const metadata: Metadata = {
  title: "Quality Product Line | Umang Nutraceuticals",
  description: "Umang Nutraceuticals offers a diverse range of high-quality products tailored for excellence. Enhance your research with our trusted solutions now!",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/product",
  },
};

// ---- Page ----
export default function ProductPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Product"
        BannerImg="products/ProductBannerMain.webp"
        BannerHeading="Our Products"
        BannerCaption="Explore Our Branded Encapsulation Products."
      />

      <Container>
        <Box
          sx={{
            my: 8,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "space-evenly",
            justifyContent: "center",
            alignItems: "space-evenly",
            gap: 4,
            borderRadius: "25px",
          }}
        >
          {ProductCategories.map((item, index) => (
            <Box key={index}>
              <ProductCard item={item} outer="products/outer-main" />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}