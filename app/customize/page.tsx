'use client'

// app/customize/page.tsx
import {
  Box, Typography, Button, Container,
  Grid, CircularProgress, Skeleton,
} from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import BeadSizeSlider from "@/components/UI/CustomizeComponents/BeadSizeSlider";
import ColorShadeSelector from "@/components/UI/CustomizeComponents/ColorShadeSelector";
import { BeadCoating } from "@/components/UI/CustomizeComponents/BeadCoating";
import PackageProductIcon from "@/assets/icons/product/packageproduct.svg";
import BubbleChatIcon from "@/assets/icons/Customization/bubble-chat.svg";
import LineRightIcon from "@/assets/icons/Customization/Line-Right.svg";
import DownloadIcon from "@/assets/icons/product/download.svg";
import CloudDownloadIcon from "@/assets/icons/product/clouddownload.svg";
import { AccordianFAQCustomize } from "@/components/UI/CustomizeComponents/AccordianFAQCustomize";
import { ProductsCards } from "@/components/UI/productComponents/ProductsCards";
import { Breadcrumb } from "@/components/UI/Breadcrumb";
import { CustomizeThumbnailSlider } from "@/components/UI/CustomizeComponents/CustomizeThumbnailSlider";
import { overlayItems } from "@/lib/api/CustomizeSVG";
import { useEffect, useMemo, useState, FC, SVGProps } from "react";
import ActiveSearchBox from "@/components/UI/CustomizeComponents/ActivesSearchBox";
import Link from "next/link";
import { SamplesWorldWide } from "@/components/UI/productComponents/SamplesWorldWide";
import { fetchproductsSegmentRelated, Product } from "@/lib/api/ProductsPostApi";
import { useQuery } from "@tanstack/react-query";
import { createBreadcrumbSchema, createFaqSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { ProductThumbnailSliderSkeleton } from "@/components/UI/Skeleton/product/ProductThumbnailSliderSkeleton";
import { ProductInfoSkeleton } from "@/components/UI/Skeleton/product/ProductInfoSkeleton";
import { CustomizationCardSkeleton } from "@/components/UI/Skeleton/product/CustomizationCardSkeleton";
import { ProductTabsSkeleton } from "@/components/UI/Skeleton/product/ProductTabsSkeleton";
import { AccordianFaqProductSkeleton } from "@/components/UI/Skeleton/product/AccordianFaqProductSkeleton";
import { DownloadSectionProductSkeleton } from "@/components/UI/Skeleton/product/DownloadSectionProductSkeleton";
import { ProductsCardsSkeleton } from "@/components/UI/Skeleton/product/ProductsCardsSkeleton";

// ---- Types ----
interface ResourceItem {
  title: string;
  url: string;
  iconKey: string;
}

// ---- Icon map ----
const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  DownloadIcon,
  CloudDownloadIcon,
};

// ---- Static data ----
const resources: ResourceItem[] = [
  {
    title: "Download Our Product Catalogue",
    url: "/assets/pdf/Personal-Care-Division.pdf",
    iconKey: "DownloadIcon",
  },
  {
    title: "Download Our Formulation Data Brochure",
    url: "/formulations",
    iconKey: "CloudDownloadIcon",
  },
];

const BreadcrumbsUrls = [
  { title: "Home",             url: "/"          },
  { title: "Customize Active", url: "/customize" },
];

const FAQdata = [
  {
    title: "What customization options are available for encapsulated nutraceutical products?",
    description: "Umang Nutraceuticals provides tailored solutions, including controlled particle size, color variation, active concentration, and release profiles.",
    defaultExpanded: "defaultExpanded",
  },
  {
    title: "Is it possible to achieve brand-specific color matching?",
    description: "Yes, our R&D team can match and develop shades aligned with standard color systems such as panton.",
    defaultExpanded: "",
  },
  {
    title: "Can release characteristics be tailored for nutraceutical formulations?",
    description: "Customization options for release profiles are not available for personal care encapsulated ingredients.",
    defaultExpanded: "",
  },
  {
    title: "What kinds of active ingredients can be encapsulated?",
    description: "Umang Nutraceuticals  offers a wide range of actives, including vitamins, minerals, botanical extracts, essential oils, flavors, and fragrances as per the brand requirements.",
    defaultExpanded: "",
  },
  {
    title: "Can we request a specific bead size?",
    description: "Absolutely. We can produce beads in a range of sizes, typically ranging from <0.2mm to 5.0mm, depending on your application.",
    defaultExpanded: "",
  },
];

const segments = [
  "vitaspheres",
  "oilspheres",
  "minospheres",
  "caratospheres",
  "botanispheres",
  "aminospheres",
  "actispheres",
];

// ---- Page ----
export default function CustomizePage() {
  const [fillColor, setFillColor] = useState("#FB378C");
  const [selectedActives, setSelectedActives] = useState<Product[]>([]);

  const randomSegment = useMemo(() => {
    const index = Math.floor(Math.random() * segments.length);
    return segments[index];
  }, []);

  const {
    data: relatedProducts,
    isLoading: relatedLoading,
    error: relatedError,
  } = useQuery({
    queryKey: ["productsSegment", randomSegment],
    queryFn: ({ queryKey }) => fetchproductsSegmentRelated(queryKey[1] as string),
    enabled: !!randomSegment,
  });

  const customizePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      OrganizationSchema,
      createBreadcrumbSchema(BreadcrumbsUrls),
      createFaqSchema(FAQdata),
    ],
  };

  if (relatedLoading) {
    return (
      <Container>
        <Breadcrumb BreadcrumbsUrls={BreadcrumbsUrls} BreadcrumbsCurrent="Loading..." />
        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ProductThumbnailSliderSkeleton />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Skeleton variant="text" width="50%" height={70} sx={{ mb: 3 }} />
            <ProductInfoSkeleton />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomizationCardSkeleton />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomizationCardSkeleton />
          </Grid>
        </Grid>
        <Box my={8}>
          <Skeleton variant="text" width="50%" height={40} sx={{ mb: 3 }} />
          <ProductTabsSkeleton />
        </Box>
        <Box my={8}>
          <Skeleton variant="text" width="40%" height={40} sx={{ mb: 3 }} />
          <AccordianFaqProductSkeleton />
        </Box>
        <Box my={8}>
          <Skeleton variant="text" width="60%" height={40} sx={{ mb: 3 }} />
          <DownloadSectionProductSkeleton />
        </Box>
        <Box>
          <Skeleton variant="text" width="70%" height={40} sx={{ mb: 3 }} />
          <ProductsCardsSkeleton />
        </Box>
      </Container>
    );
  }

  if (relatedError) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="error" fontWeight={500}>
          Error fetching products. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(customizePageSchema) }}
      />

      <Container>
        <Breadcrumb BreadcrumbsUrls={BreadcrumbsUrls} BreadcrumbsCurrent="Customize Active" />

        <Grid container spacing={3} justifyContent="flex-end" alignItems="stretch" sx={{ width: "100%", height: "100%", marginTop: "48px" }}>

          {/* Left Column */}
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <CustomizeThumbnailSlider fillColor={fillColor} setFillColor={setFillColor} overlayItems={overlayItems} />

            <Grid size={{ xs: 12, md: 12 }} sx={{ py: 4 }}>
              <Box sx={{ width: "100%", height: "100%", background: "#fff", borderRadius: "22px", outline: "1px solid #B4B4B4", outlineOffset: "-1px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ position: "relative" }}>
                  <Box sx={{ width: { xs: "318px", md: "474px" }, display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Box sx={{ display: "flex", gap: "47px", alignItems: "flex-start", flexWrap: "wrap" }}>
                      <Grid container spacing={7} sx={{ py: 2 }}>
                        <SamplesWorldWide />
                      </Grid>
                    </Box>
                    <Box sx={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "1px", backgroundColor: "#B4B4B4" }} />
                  </Box>
                </Box>
              </Box>

              <Grid size={{ xs: 12, md: 12 }}>
                <Box my={8} sx={{ width: "100%", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start", justifyContent: "center" }}>
                  {resources.map((val, index) => {
                    const Icon = iconMap[val.iconKey];
                    return (
                      <Box key={index}>
                        <Link href={val.url} target="_blank" style={{ textDecoration: "none" }}>
                          <Box sx={{ width: { xs: "338px", md: "560px" }, height: "59.57px", border: "2px solid #41939C", borderRadius: "12px", background: "#fff", display: "flex", flexDirection: "row", justifyContent: "space-between", paddingLeft: "30px", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "16px", fontFamily: "Jost", fontWeight: 500, color: "black", letterSpacing: "0.32px", display: "flex", alignItems: "center" }}>
                              {val.title}
                            </Typography>
                            <Box sx={{ width: "20.23px", height: "20.23px", position: "relative", paddingRight: "50px" }}>
                              {Icon && <Icon style={{ fontSize: 24, color: "#141B34" }} />}
                            </Box>
                          </Box>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column */}
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Box sx={{ display: "inline-flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", gap: "36px" }}>

              {/* Title */}
              <Typography variant="h1" sx={{ alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "center", color: "#091610", fontSize: { xs: "37px", md: "48px" }, fontFamily: "Jost", fontWeight: 500 }}>
                Customize Your Active
              </Typography>

              {/* Step 1 — Select Active */}
              <Box sx={{ alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "5px" }}>
                <Box sx={{ display: "inline-flex", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start" }}>
                  <Box sx={{ width: "24px", height: "166px", display: "inline-flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", gap: "23px" }}>
                    <Box sx={{ alignSelf: "stretch", height: "24px", borderRadius: "100px", position: "relative", overflow: "hidden" }}>
                      <Box sx={{ width: 24, height: 24, position: "absolute", top: 0, left: 0, backgroundColor: "#41939C", borderRadius: "50%" }} />
                      <Box sx={{ width: 20, height: 20, position: "absolute", bottom: 5, left: 2, overflow: "hidden" }}>
                        <DoneRoundedIcon sx={{ color: "white", fontSize: "20px" }} />
                      </Box>
                    </Box>
                    <Box sx={{ alignSelf: "stretch", height: "96px", position: "relative" }}>
                      <Box sx={{ width: "1px", height: "96px", position: "absolute", left: "11px", top: 0, backgroundColor: "#BDBDBD" }} />
                    </Box>
                  </Box>

                  <Box sx={{ width: { xs: "327px", md: "378px" }, display: "inline-flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: "12px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontFamily: "Jost", fontSize: "32px", fontWeight: 500, color: "rgba(0, 0, 0, 0.87)" }}>
                        Select Your Active
                      </Typography>
                      <Typography sx={{ fontFamily: "Jost", fontSize: "16px", fontWeight: 400, color: "rgba(0, 0, 0, 0.87)" }}>
                        Contact us if active is not listed
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "stretch", sm: "flex-start" }, justifyContent: "flex-start", gap: { xs: "12px", sm: "24px" }, width: "100%", position: "relative" }}>
                      <Box sx={{ position: "relative", width: { xs: "90%", sm: "228px" } }}>
                        <ActiveSearchBox selectedActives={selectedActives} setSelectedActives={setSelectedActives} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Step 2 — Color */}
              <ColorShadeSelector fillColor={fillColor} setFillColor={setFillColor} />

              {/* Step 3 — Bead Size */}
              <BeadSizeSlider />

              {/* Step 4 — Coatings */}
              <Box display="flex" gap={2} alignItems="flex-start">
                <Box width={24} height={189} display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" gap={3}>
                  <Box sx={{ width: 24, height: 24, backgroundColor: "#41939C", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontFamily: "Jost, Jost-fallback, system-ui, sans-serif", color: "white" }}>
                    4
                  </Box>
                  <Box sx={{ width: "1px", height: 120, backgroundColor: "transparent" }} />
                </Box>
                <Box width={493} display="flex" flexDirection="column" gap={1.5}>
                  <Box>
                    <Typography fontSize={32} fontWeight={500} fontFamily="Jost">Select Coatings</Typography>
                    <Typography fontSize={16} fontWeight={400} fontFamily="Jost">Select coating suitable for your end application</Typography>
                  </Box>
                  <Box width={{ xs: 318, md: 463 }} position="relative">
                    <BeadCoating />
                  </Box>
                </Box>
              </Box>

              {/* CTA Buttons */}
              <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, alignItems: "center" }}>
                <Link href="/contact-us" style={{ width: "100%" }}>
                  <Button variant="outlined" startIcon={<BubbleChatIcon style={{ fontSize: 24, color: "#41939C" }} />}
                    sx={{ width: "100%", height: 46, px: 3, borderRadius: "26px", borderColor: "#41939C", color: "#41939C", textTransform: "none", fontFamily: "Jost", fontSize: { xs: 16, sm: 18 }, fontWeight: 500, letterSpacing: "0.36px" }}>
                    Speak With Expert
                  </Button>
                </Link>
                <Link href="/free-quote" style={{ width: "100%" }}>
                  <Button variant="contained" startIcon={<PackageProductIcon style={{ fontSize: 30, color: "#ffffff" }} />}
                    sx={{ flex: 1, width: "100%", height: 46, px: 3, borderRadius: "26px", backgroundColor: "#41939C", color: "#ffffff", textTransform: "none", fontFamily: "Jost", fontSize: { xs: 16, sm: 18 }, fontWeight: 500, letterSpacing: "0.36px", "&:hover": { backgroundColor: "#B63C51" } }}>
                    Order Your Sample
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* FAQ */}
          <AccordianFAQCustomize FAQdata={FAQdata} />

          {/* Related Products */}
          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
            <Typography variant="h3" sx={{ textAlign: "left", color: "black", fontSize: { xs: "20px", md: "32px" }, fontFamily: "Jost-sb", fontWeight: 500, wordWrap: "break-word" }}>
              Customizable Products Related to {randomSegment.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
            </Typography>
            {relatedLoading && <CircularProgress />}
            {relatedError && <Typography color="error">Error loading related products.</Typography>}
            {relatedProducts && <ProductsCards data={relatedProducts} />}
          </Box>

          {/* Explore More */}
          <Box sx={{ marginBottom: "40px", marginRight: "40px" }}>
            <Link href="/product" style={{ width: "100%" }}>
              <Button variant="contained" endIcon={<LineRightIcon style={{ fontSize: 30, color: "#ffffff" }} />}
                sx={{ flex: 1, width: "100%", height: 46, px: 3, borderRadius: "26px", backgroundColor: "#41939C", color: "#ffffff", textTransform: "none", fontFamily: "Jost", fontSize: { xs: 16, sm: 18 }, fontWeight: 500, letterSpacing: "0.36px", "&:hover": { backgroundColor: "#B63C51" } }}>
                Explore More Products
              </Button>
            </Link>
          </Box>
        </Grid>
      </Container>
    </>
  );
}