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
  title: "Bulk Manufacturing: Get Quotes Now | Umang Nutraceuticals",
  description: "Umang Nutraceuticals offers quick quotes for bulk manufacturing. Elevate your production capabilities with our innovative solutions and expert support.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/bulk-contract-manufacturing",
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
                {`"Since its early days, Umang Global Group has established itself as a trustworthy contract manufacturing organization to distinguished pharmaceutical companies, including Dr. Reddy's. Our facilities have reliably passed the strictest client audits, which is a testament to our unflinching dedication to quality, regulatory compliance, and integrity.

Throughout the years, Umang Global Group has developed into a company with excellent manufacturing capacity in different therapeutic segments, including nutritional supplements, anesthetics, corticosteroids, antiemetics, steroid antibiotic combinations, anemia care, pain management, antihistamines, antifilarials, and many more. This is a testament to our ability to meet with different client requirements and standards.

Our production facilities are equipped to handle complex drug delivery systems such as pellets, micro pellets, and oral thin films. Based on the fundamental pillars of innovation, consistency, and partnership building as the keys to growth, Umang Global Group still holds the mission to add value to the pharmaceutical industry."`}
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