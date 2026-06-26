// app/bulk-contract-manufacturing/page.tsx

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import MailIcon from "@/assets/icons/homepage/mail.svg";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import type { Metadata } from "next";

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",                        url: "/"                             },
  { title: "Resources",                   url: "/resources"                    },
  { title: "Capabilities",               url: "/capabilities"                 },
  { title: "Bulk & Contract Manufacturing", url: "/bulk-contract-manufacturing" },
];

const BulkContractManufacturingPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Bulk Manufacturing Equipment & Solutions  UMANG Engineering",
  description: "Explore high-performance bulk manufacturing equipment designed for personal care, pharmaceutical and nutraceutical production. Enhance productivity, process efficiency, and product quality with UMANG Global Equipment.",
  alternates: {
    canonical: "https://www.umangengineering.com/bulk-contract-manufacturing",
  },
};

// ---- Page ----
export default function BulkContractManufacturingPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BulkContractManufacturingPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Bulk & Contract Manufacturing"
        BannerImg="resources/BulkContractManufacturing-banner.png"
        BannerHeading="Bulk & Contract Manufacturing"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      <Box py={2}>
        <Container>
          <Grid container spacing={4} sx={{ mt: 3 }}>

            {/* Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/assets/images/resources/bulk.png"
                alt="Bulk and Contract Manufacturing"
                sx={{ width: "100%", height: "100%", objectFit: "scale-down" }}
              />
            </Grid>

            {/* Text */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ margin: "auto" }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontFamily: "Jost-sb",
                  fontSize: "32px",
                  fontWeight: 500,
                  paddingTop: "15px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Bulk & Contract Manufacturing
              </Typography>
              <Typography
                sx={{
                  color: "#091610",
                  fontSize: "16px",
                  fontFamily: "Jost",
                  fontWeight: 400,
                  lineHeight: "1.5",
                  paddingTop: "15px",
                  whiteSpace: "pre-line",
                }}
              >
                {`Since its very beginning, Umang Engineering has developed and manufactured advanced process equipment for the pharmaceutical, nutraceutical, food, chemical, and other related sectors. This equipment is well known worldwide for its precision, reliability, and consistent performance.

Through many years of successful practice, we have earned a strong reputation as a company that delivers excellent engineering, top-quality production, and an innovative approach to meeting customers' needs. All our systems are manufactured to the highest quality standards, ensuring durability, effectiveness, and cost-effectiveness.

Our company possesses a broad knowledge base covering process technologies such as extrusion, spheronization, granulation, fluid-bed process equipment, coating and layering, pelletizing, and oral thin-film manufacturing. We offer both standalone equipment and complete process lines that will suit your production needs.

We can help you optimize your process, increase productivity, and gain manufacturing excellence by providing innovative equipment due to our many years of engineering experience.`}
              </Typography>
            </Grid>

            {/* CTA Button */}
            <Grid size={{ xs: 12, md: 12 }} sx={{ textAlign: "center", py: 2 }}>
              <Link href="/contact-us" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "82%", md: "36%" },
                    padding: "10px 24px",
                    backgroundColor: "#41939C",
                    borderRadius: "26px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    textTransform: "none",
                    fontSize: "18px",
                    fontFamily: "Jost",
                    fontWeight: 500,
                    letterSpacing: "0.36px",
                    "&:hover": { backgroundColor: "#b85c6d" },
                  }}
                >
                  Contact Us to Know More
                  <Box sx={{ width: "24px", height: "24px", position: "relative", overflow: "hidden" }}>
                    <MailIcon style={{ width: "24px", height: "24px" }} />
                  </Box>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}