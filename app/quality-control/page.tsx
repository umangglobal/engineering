// app/quality-control/page.tsx

import { Box, Button, Container, Grid, List, ListItem, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import MailIcon from "@/assets/icons/homepage/mail.svg";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import type { Metadata } from "next";

// ---- Types ----
interface QCCard {
  title: string;
  points: string[];
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",            url: "/"                  },
  { title: "Resources",       url: "/resources"         },
  { title: "Capabilities",    url: "/capabilities"      },
  { title: "Quality Control", url: "/quality-control"   },
];

const cards: QCCard[] = [
  {
    title: "The Quality Control (QC) department is responsible:",
    points: [
      "Raw Material and Packaging Material Analysis",
      "Finished Product Testing",
      "In-Process Quality Checks",
      "Stability and Shelf-Life Studies",
    ],
  },
  {
    title: "QC activities are organized into four sections:",
    points: [
      "Instrumental Analysis and Finished Products",
      "Wet Analysis Laboratory",
      "Microbiological Testing Laboratory",
      "Packaging Material - Testing Laboratory",
    ],
  },
];

const QualityControlPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Top Quality Control Methods | Umang Engineering",
  description: "Effective quality control methods with Umang Engineering. Elevate your standards and achieve superior results in your production processes.",
  alternates: {
    canonical: "https://www.umangengineering.com/quality-control",
  },
};

// ---- Page ----
export default function QualityControlPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(QualityControlPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Quality Control"
        BannerImg="resources/QualityControl-banner.png"
        BannerHeading="Quality Control"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      <Box py={2}>
        <Container>
          <Grid container spacing={4} sx={{ mt: 3 }}>

            {/* Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/assets/images/resources/QC.png"
                alt="Quality Control Laboratory"
                sx={{ width: "100%", height: "100%", objectFit: "scale-down" }}
              />
            </Grid>

            {/* Text */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ margin: "auto" }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontFamily: "Jost-sb", fontSize: "32px", fontWeight: 500, paddingTop: "15px" }}
              >
                Quality Control
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
                  py: 2,
                }}
              >
                {`"Quality is the backbone of all activities carried out by Umang Engineering. All equipment undergoes rigorous quality tests and inspections throughout the manufacturing process.

The quality control system ensures that high standards of engineering excellence are maintained, from the selection of raw materials through the manufacturing and testing of machines. Adherence to quality control protocols and procedures guarantees that every machine is reliable, efficient, and durable.

By maintaining close scrutiny and ensuring quality assurance, we provide equipment that can be relied upon for plant operations."`}
              </Typography>

              <Link href="/contact-us" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "100%", md: "70%" },
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

            {/* QC Cards */}
            <Grid size={{ xs: 12, md: 12 }} sx={{ textAlign: "center", py: 2 }}>
              <Grid container spacing={3} justifyContent="space-around">
                {cards.map((card, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Box
                      sx={{
                        padding: "36px",
                        backgroundColor: "white",
                        boxShadow: "0px 1px 2px -1px rgba(0,0,0,0.10)",
                        borderRadius: "36px",
                        outline: "2px solid #E9E8E8",
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontSize: "20px", fontWeight: 500, lineHeight: "20px" }}>
                        {card.title}
                      </Typography>
                      <List component="ul" sx={{ listStyleType: "disc", pl: 2 }}>
                        {card.points.map((point, i) => (
                          <ListItem key={i} sx={{ display: "list-item", py: 0.5 }}>
                            {point}
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}