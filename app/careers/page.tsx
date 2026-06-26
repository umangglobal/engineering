// app/careers/page.tsx

import { Avatar, Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { fetchCareers } from "@/lib/api/ProductsPostApi";
import Link from "next/link";
import type { Metadata } from "next";

// ---- Types ----
interface Career {
  career_title: string;
  career_department: string;
  career_type: string;
  career_experience: string;
  career_description: string;
  career_position: string;
  career_date: string;
  [key: string]: unknown;
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
  { title: "Company",   url: "/company"   },
  { title: "Careers",   url: "/careers"   },
];

const CareersPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Careers at Umang Engineering | Engineering & Manufacturing Jobs",
  description: "Explore career opportunities at UMANG Global Equipment. Join a leading engineering and manufacturing company and build your future in innovation, automation, pharmaceutical machinery, and industrial solutions.",
  alternates: {
    canonical: "https://www.umangengineering.com/careers",
  },
};

// ---- Page ----
export default async function CareersPage() {
  const data = await fetchCareers() as Career[] | null;

  // ---- Banner (shared across all states) ----
  const banner = (
    <BannerCommon
      BreadcrumbsUrls={BreadcrumbsUrls}
      BreadcrumbsCurrent="Careers"
      BannerImg="resources/careers-banner.png"
      BannerHeading="Careers"
      BannerCaption="Hiring"
    />
  );

  // --- Error / Empty State ---
  if (!data || data.length === 0) {
    return (
      <>
        {banner}
        <Box textAlign="center" mt={4}>
          <Typography variant="body1" color="text.secondary" fontWeight={500}>
            No Career Opening found.
          </Typography>
        </Box>
      </>
    );
  }

  // --- Success State ---
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CareersPageSchema) }}
      />

      {banner}

      <Container>
        <Grid container py={2} spacing={2}>
          {[...data].reverse().map((val, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Link
                  href="https://api.whatsapp.com/send?text=Hello&phone=919518349134"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
              <Card
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  width: { xs: "312px", md: "360px" },
                  height: "100%",
                  p: 2,
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    fontFamily: "Jost",
                    lineHeight: "24px",
                    color: "#21272A",
                    minHeight: "48px",
                  }}
                >
                  {val.career_title}
                </Typography>

                {/* Meta */}
                <Typography sx={{ fontSize: 14, fontFamily: "Jost", color: "#6A8076" }}>
                  <b>Dept.:</b> {val.career_department}{" "}
                  <b>Type:</b> {val.career_type}{" "}
                  <b>Exp.:</b> {val.career_experience}
                </Typography>

                {/* Description */}
                <Typography sx={{ fontSize: 14, fontFamily: "Jost", color: "#6A8076" }}>
                  {val.career_description}
                </Typography>

                {/* Position & Date */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mt: "auto" }}>
                  <Avatar sx={{ width: 40, height: 40, bgcolor: "#cccccca1", color: "#091610" }}>
                    {val.career_position?.charAt(0)?.toUpperCase() ?? "?"}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: "Jost", color: "#091610" }}>
                      <b>Position: </b>{val.career_position}
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontFamily: "Jost", color: "#6A8076" }}>
                      {new Date(val.career_date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </Typography>
                  </Box>
                </Box>

                {/* Apply Button */}
                <Button
                  variant="contained"
                  disabled={val.career_position === "Closed"}
                  size="small"
                  sx={{
                    height: "32px",
                    px: "12px",
                    fontSize: "12px",
                    fontFamily: "Jost",
                    fontWeight: 400,
                    lineHeight: "16px",
                    textTransform: "none",
                    background: "#41939C",
                    borderRadius: "30px",
                    "&:hover": { background: "#41939C" },
                  }}
                >
                  Apply Now
                </Button>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}