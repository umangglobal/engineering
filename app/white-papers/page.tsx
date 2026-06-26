// app/white-papers/page.tsx

import { Box, Button, Container, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import PackageProductIcon from "@/assets/icons/product/packageproduct.svg";
import WhatsappIcon from "@/assets/icons/homepage/whatsapp.svg";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",         url: "/"              },
  { title: "Resources",    url: "/resources"     },
  { title: "Company",      url: "/company"       },
  { title: "White Papers", url: "/white-papers"  },
];

const WhitePapersPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "White Papers for Business | Umang Engineering",
  description: "White papers on pharma for business. Enhance your knowledge and drive innovation with Umang Engineering's expert resources.",
  alternates: {
    canonical: "https://www.umangengineering.com/white-papers",
  },
};

// ---- Page ----
export default function WhitePapersPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WhitePapersPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="White Papers"
        BannerImg="resources/WhitePapers-banner.png"
        BannerHeading="White Papers"
        BannerCaption="White Papers"
      />

      <Box sx={{ p: 4, alignItems: "center", background: "#fff", borderRadius: "20px" }}>
        <Container sx={{ display: "flex", flexDirection: "column" }}>

          {/* Image */}
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gap: "50px",
              gridTemplateColumns: "1fr",
              justifyContent: "space-between",
              alignItems: "stretch",
              justifyItems: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/assets/images/resources/careers-page.png"
              alt="White Papers Coming Soon"
              sx={{
                width: 432,
                height: 288,
                background: "#DDE1E6",
                borderRadius: "36px",
                position: "relative",
              }}
            />
          </Box>

          {/* Content */}
          <Box display="flex" justifyContent="space-around" alignItems="center" pt="20px">
            <Box width="100%" maxWidth={981} display="flex" flexDirection="column" alignItems="center" gap={1}>

              <Typography
                sx={{
                  fontSize: 32,
                  fontWeight: 500,
                  fontFamily: "Jost-sb",
                  color: "#21272A",
                  whiteSpace: "pre-line",
                }}
              >
                Soon We Will Publish a Paper
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  mb: 3,
                  whiteSpace: "pre-line",
                  textAlign: "center",
                }}
              >
                {`We are under process of writing and publishing the white paper,\nSubscribe to our newsletter to stay updated\nabout our recent publications!`}
              </Typography>

              {/* CTA Buttons */}
              <Box
                sx={{
                  width: { xs: "360.51px", md: "537.51px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Link href="/free-quote" style={{ width: "100%" }}>
                  <Button
                    variant="outlined"
                    startIcon={<PackageProductIcon style={{ fontSize: 24, color: "#41939C" }} />}
                    sx={{
                      width: "100%",
                      height: 46,
                      px: 3,
                      borderRadius: "26px",
                      borderColor: "#41939C",
                      color: "#41939C",
                      textTransform: "none",
                      fontFamily: "Jost",
                      fontSize: { xs: 16, sm: 18 },
                      fontWeight: 500,
                      letterSpacing: "0.36px",
                    }}
                  >
                    Contact us
                  </Button>
                </Link>

                <Link
                  href="https://api.whatsapp.com/send?text=Hello&phone=919518349134"
                  target="_blank"
                  style={{ width: "100%" }}
                >
                  <Button
                    variant="contained"
                    startIcon={<WhatsappIcon style={{ fontSize: 30, color: "#ffffff" }} />}
                    sx={{
                      flex: 1,
                      width: "100%",
                      height: 46,
                      px: 3,
                      borderRadius: "26px",
                      backgroundColor: "#41939C",
                      color: "#ffffff",
                      textTransform: "none",
                      fontFamily: "Jost",
                      fontSize: { xs: 16, sm: 18 },
                      fontWeight: 500,
                      letterSpacing: "0.36px",
                      "&:hover": { backgroundColor: "#41939CA8" },
                    }}
                  >
                    Connect with Expert
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}