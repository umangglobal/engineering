// app/product-single/[slug]/page.tsx

import { Box, Container, Grid, Typography } from "@mui/material";
import { Breadcrumb } from "@/components/UI/Breadcrumb";
import { ProductThumbnailSlider } from "@/components/UI/productComponents/ProductThumbnailSlider";
import { ProductsCards } from "@/components/UI/productComponents/ProductsCards";
import { DownloadSectionProduct } from "@/components/UI/productComponents/DownloadSectionProduct";
import { ProductTabs } from "@/components/UI/productComponents/ProductTabs";
import { AccordianFaqProduct } from "@/components/UI/productComponents/AccordianFaqProduct";
import { SamplesWorldWide } from "@/components/UI/productComponents/SamplesWorldWide";
import { fetchproductsDescription, fetchproductsSegmentRelated } from "@/lib/api/ProductsPostApi";
import { OrganizationSchema, createBreadcrumbSchema, createFaqSchema, createProductSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import { Button } from "@mui/material";
import PackageProductIcon from "@/assets/icons/product/packageproduct.svg";
import WhatsappIcon from "@/assets/icons/homepage/whatsapp.svg";
import ColorIcon from "@/assets/icons/product/color.svg";
import SizeIcon from "@/assets/icons/product/Beadlets.svg";
import ActivesIcon from "@/assets/icons/product/actives.svg";
import AdditivesIcon from "@/assets/icons/product/additives.svg";
import LiposuleIcon from "@/assets/icons/product/Liposule.svg";
import MouthwashIcon from "@/assets/icons/product/Mouthwash.svg";
import StarIcon from "@/assets/icons/product/Star.svg";
import YoutubeIcon from "@/assets/icons/product/youtube.svg";
import DownloadIcon from "@/assets/icons/product/download.svg";
import CloudDownloadIcon from "@/assets/icons/product/clouddownload.svg";
import type { Metadata } from "next";
import { JsonLd } from "@/components/UI/JsonLd";
import CapacityTable from "@/components/UI/productComponents/CapacityTable";


// ---- Types ----
interface Props {
  params: Promise<{ slug: string }>;
}

// ---- Helpers ----

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
// ✅ ONLY title, description, canonical here — NO schema/JSON-LD
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchproductsDescription(slug);

  return {
    title: data?.product_meta_title ?? "Product",
    description: data?.product_meta_description ?? "",
    alternates: {
      canonical: `https://www.umangengineering.com/product-single/${slug}`,
    },
  };
}

// ---- Page ----
export default async function ProductSinglePage({ params }: Props) {
  const { slug } = await params;

  const data = await fetchproductsDescription(slug);

  if (!data) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="error" fontWeight={500}>
          Error fetching product. Please try again later.
        </Typography>
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="text.secondary" fontWeight={500}>
          No product found.
        </Typography>
      </Box>
    );
  }

  const relatedProducts = await fetchproductsSegmentRelated(data.product_segment);

  // ---- Images ----
  const images = data.product_thumbnail
    ? data.product_thumbnail.split(",").map((img: string, index: number) => ({
        url: `assets/images/products/single/${img}`,
        alt: `Image ${index + 1}`,
      }))
    : [];

  // ---- Tab Data ----
  const tabData = [
    {
      label: "Special Features",
      img: images[4] ? `/${images[4].url}` : "/assets/images/home/abouthome.png",
      content: data.product_active_benefits,
      iconKey: "MouthwashIcon",
    },
    {
      label: "Advantage",
      img: images[2] ? `/${images[2].url}` : "/assets/images/home/abouthome.png",
      content: data.product_applications,
      iconKey: "LiposuleIcon",
    },
    {
      label: "Optional Features",
      img: images[1] ? `/${images[1].url}` : "/assets/images/home/abouthome.png",
      content: data.product_formats,
      iconKey: "StarIcon",
    },
    {
      label: "Video",
      img: images[0] ? `/${images[0].url}` : "/assets/images/home/abouthome.png",
      content: "coming soon..",
      iconKey: "YoutubeIcon",
    },
  ];

  // ---- Download Section ----
  const DownloadSection = [
    {
      title: data.product_name.toUpperCase(),
      url: "/assets/pdf/Pharmaceutical-division-catalog.pdf",
      iconKey: "DownloadIcon",
    },
    {
      title: data.product_segment.replace(/-/g, " ").toUpperCase(),
      url: "/flyers",
      iconKey: "CloudDownloadIcon",
    },
  ];

  // ---- Breadcrumbs ----
  const BreadcrumbsUrls = [
    { title: "Home",               url: "/"                                    },
    { title: "Product",            url: "/product"                             },
    { title: data.product_segment, url: `/products/${data.product_segment}`    },
    { title: data.product_name,    url: `/product-single/${data.product_slug}` },
  ];

  // ---- FAQ Parsing (using same logic as working React version) ----
  const formattedFAQ = parseFaq(data.product_faq);

  // ---- Schema ----
  const currentURL = `https://www.umangengineering.com/product-single/${data.product_slug}`;

  // ✅ Single schema object — injected ONCE via script tag below
  // ✅ Never passed to generateMetadata
  const productPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      OrganizationSchema,
      createBreadcrumbSchema(BreadcrumbsUrls),
      createProductSchema({
        name: data.product_name,
        description: data.product_meta_description,
        image: `https://www.umangengineering.com/assets/images/products/outer-cards/${data.product_active.replace(/ /g, "-")}.webp`,
        segment: data.product_segment,
        url: currentURL,
      }),
      // ✅ Only add FAQ to graph if valid items exist
      ...(formattedFAQ.length > 0 ? [createFaqSchema(formattedFAQ)] : []),
    ],
  };

  return (
    <>
      {/* ✅ ONE script tag, ONE schema injection — never duplicated */}
      <JsonLd schema={productPageSchema} id="product-schema" />

      <Container>
        <Breadcrumb BreadcrumbsUrls={BreadcrumbsUrls} BreadcrumbsCurrent={data.product_name} />

        <Grid container spacing={4} sx={{ mt: 3 }}>

          {/* Thumbnail Slider */}
          <Grid size={{ xs: 12, md: 6 }}>
            <ProductThumbnailSlider images={images} />
          </Grid>

          {/* Product Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h1" gutterBottom sx={{ fontFamily: "Jost-sb", fontSize: { xs: "32px", md: "48px" }, fontWeight: 500, paddingTop: "15px" }}>
              {data.product_name}
            </Typography>

            <Typography variant="h2" gutterBottom sx={{ color: "#6A8076", fontFamily: "Jost-sb", fontSize: { xs: "21px", md: "32px" }, fontWeight: 500, padding: "15px 0px" }}>
              {data.product_active}
              <Box component="sup" sx={{ fontSize: "0.4em", verticalAlign: "super" }} />
            </Typography>

            <Box component="ul" sx={{ pl: 2, m: 0, listStyleType: "none" }}>
              {(data.product_benefits as string)
                .split(",")
                .map((item: string) => item.trim())
                .filter(Boolean)
                .map((item: string, index: number) => (
                  <Box
                    component="li"
                    key={index}
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Jost",
                      fontWeight: 400,
                      color: "#091610",
                      lineHeight: "1.8",
                      "&::before": { content: '"-"', marginRight: "8px" },
                    }}
                  >
                    {item}
                  </Box>
                ))}
            </Box>

            <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, alignItems: "center", paddingTop: "30px" }}>
              <Link href="/free-quote" style={{ width: "100%" }}>
                <Button
                  variant="outlined"
                  startIcon={<PackageProductIcon style={{ fontSize: 24, color: "#41939C" }} />}
                  sx={{ width: "100%", height: 46, px: 3, borderRadius: "26px", borderColor: "#41939C", color: "#41939C", textTransform: "none", fontFamily: "Jost", fontSize: { xs: 16, sm: 18 }, fontWeight: 500, letterSpacing: "0.36px" }}
                >
                  Request Quote/COA
                </Button>
              </Link>

              <Link href="https://api.whatsapp.com/send?text=Hello&phone=919518349134" target="_blank" style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  startIcon={<WhatsappIcon style={{ fontSize: 30, color: "#ffffff" }} />}
                  sx={{ width: "100%", height: 46, px: 3, borderRadius: "26px", backgroundColor: "#41939C", color: "#ffffff", textTransform: "none", fontFamily: "Jost", fontSize: { xs: 16, sm: 18 }, fontWeight: 500, letterSpacing: "0.36px", "&:hover": { backgroundColor: "#41939CA8" } }}
                >
                  Connect with Expert
                </Button>
              </Link>
            </Box>
          </Grid>

          {/* Samples Worldwide */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ width: "100%", height: "100%", background: "#fff", borderRadius: "22px", outline: "1px solid #B4B4B4", outlineOffset: "-1px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", padding: "15px" }}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ width: { xs: "320px", md: "474px" }, display: "flex", flexDirection: "column", gap: "12px" }}>
                  <Grid container spacing={7}>
                    <SamplesWorldWide />
                  </Grid>
                </Box>
                <Box sx={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "1px", backgroundColor: "#B4B4B4" }} />
              </Box>
            </Box>
          </Grid>

          {/* Customization */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ width: "100%", height: "100%", p: 3, background: "#fff", borderRadius: "22px", outline: "1px solid #B4B4B4", outlineOffset: "-1px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box sx={{ width: { xs: "320px", md: "474px" }, display: "flex", flexDirection: "column", gap: "16px" }}>
                <Typography variant="h3" sx={{ fontSize: { xs: "27px", md: "32px" }, fontFamily: "Jost", fontWeight: 500, color: "black" }}>
                  Technical Specs
                </Typography>
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      {[
                        { Icon: SizeIcon,  title: "Capacity",    desc: "Payload, Volume throughput,.." },
                        { Icon: ColorIcon, title: "Utility Specs", desc: "Power consumption, Operating pressure,.."     },
                      ].map(({ Icon, title, desc }) => (
                        <Box key={title} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Box sx={{ width: 24, height: 24 }}>
                            <Icon style={{ fontSize: 24, color: "#000", position: "relative" }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: 500, fontFamily: "Jost" }}>{title}</Typography>
                            <Typography sx={{ fontSize: 16, fontFamily: "Jost" }}>{desc}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, md: 6 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: 235 }}>
                      {[
                        { Icon: ActivesIcon,   title: "Configuration",        desc: "Modular, Standalone, inline, or rotary." },
                        { Icon: AdditivesIcon, title: "Build Quality", desc: "Material grade, wear resistance."       },
                      ].map(({ Icon, title, desc }) => (
                        <Box key={title} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Box sx={{ width: 24, height: 24 }}>
                            <Icon style={{ fontSize: 24, color: "#000", position: "relative" }} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontSize: 20, fontWeight: 500, fontFamily: "Jost" }}>{title}</Typography>
                            <Typography sx={{ fontSize: 16, fontFamily: "Jost" }}>{desc}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Detailed Description */}
        <Box my={8}>
          <Typography variant="h3" sx={{ textAlign: "left", color: "black", fontSize: { xs: "20px", md: "32px" }, fontFamily: "Jost-sb", fontWeight: 500, paddingBottom: "16px" }}>
            Detailed Information on {data.product_name}
          </Typography>
          <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", whiteSpace: "pre-line", padding: 0.5 }}>
            {data.product_description}
          </Typography>
        </Box>

        {/* Product Table */}
        <Box my={8}>
         <CapacityTable dbProductString={data.product_capacity_table} />               
        </Box>
        {/* Product Table */}

        <Box my={8}>
          <Typography variant="h3" sx={{ textAlign: "left", color: "black", fontSize: { xs: "20px", md: "32px" }, fontFamily: "Jost-sb", fontWeight: 500 }}>
            Highlights of {data.product_name}
          </Typography>
          <ProductTabs tabData={tabData} />
        </Box>

        {/* FAQs */}
        <Box my={8}>
          <Typography variant="h3" sx={{ textAlign: "left", color: "black", fontSize: { xs: "20px", md: "32px" }, fontFamily: "Jost-sb", fontWeight: 500, marginBottom: "50px" }}>
            FAQs on {data.product_name}
          </Typography>
          <AccordianFaqProduct formattedFAQ={formattedFAQ} />
        </Box>

        {/* Downloads */}
        <Box my={8}>
          <Typography variant="h3" sx={{ textAlign: "left", color: "black", fontSize: { xs: "20px", md: "32px" }, fontFamily: "Jost-sb", fontWeight: 500, marginBottom: "50px" }}>
            Downloadable Files for {data.product_name}
          </Typography>
          <DownloadSectionProduct DownloadSection={DownloadSection} />
        </Box>

        {/* Related Products */}
        <Box>
          <Typography variant="h3" sx={{ textAlign: "left", color: "black", fontSize: { xs: "20px", md: "32px" }, fontFamily: "Jost-sb", fontWeight: 500 }}>
            Other Products Related to{" "}
            {data.product_segment
              .replace(/-/g, " ")
              .replace(/^\w/, (c: string) => c.toUpperCase())}
          </Typography>
          {relatedProducts && <ProductsCards data={relatedProducts} />}
        </Box>
      </Container>
    </>
  );
}