// app/about/page.tsx

import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { Breadcrumb } from "@/components/UI/Breadcrumb";
import { CounterStatsHome } from "@/components/UI/homeComponents/CounterStatsHome";
import { MissionVisionCommon } from "@/components/UI/MissionVisionCommon";
import { OrganizationSchema, createBreadcrumbSchema } from "@/lib/api/SeoSchemas";
import FaceBookIcon from "@/assets/icons/Team/facebook-02.svg";
import LinkEdinIcon from "@/assets/icons/Team/linkedin-02.svg";
import XrectangleIcon from "@/assets/icons/Team/x-rectangle.svg";
import YouTubeIcon from "@/assets/icons/Team/youtube.svg";
import type { Metadata } from "next";
import { FC, SVGProps } from "react";

// ---- Types ----
interface Social {
  iconKey: string;
  url: string;
}

interface TeamMember {
  img: string;
  name: string;
  role: string;
  socials: Social[];
}

// ---- Icon map ----
const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  FaceBookIcon,
  LinkEdinIcon,
  XrectangleIcon,
  YouTubeIcon,
};

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",     url: "/"         },
  { title: "About Us", url: "/about-us" },
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

const teamMembers: TeamMember[] = [
  {
    img: "/assets/images/about/umang-sir.jpg",
    name: "Umang Budhraja",
    role: "CEO & MD",
    socials: [
      { iconKey: "FaceBookIcon", url: "https://www.facebook.com/umangglobalgrouppvtltd/" },
      { iconKey: "LinkEdinIcon", url: "https://www.linkedin.com/in/umangbudhraja/"        },
      { iconKey: "XrectangleIcon", url: "https://x.com/UmangGlobalGrp"                   },
      { iconKey: "YouTubeIcon", url: "https://www.youtube.com/@UmangGlobalGroup"          },
    ],
  },
  {
    img: "/assets/images/about/nidhi-maam.jpg",
    name: "Dr. Nidhi Budhraja",
    role: "Director",
    socials: [
      { iconKey: "FaceBookIcon",   url: "https://www.nidhivan.org/ask_dr_nidhi.php" },
      { iconKey: "LinkEdinIcon",   url: "https://www.linkedin.com/in/dr-nidhi"      },
      { iconKey: "XrectangleIcon", url: "https://www.nidhivan.org/ask_dr_nidhi.php" },
      { iconKey: "YouTubeIcon",    url: "https://www.nidhivan.org/ask_dr_nidhi.php" },
    ],
  },
];

// ---- Metadata ----
export const metadata: Metadata = {
  title: "About Us: Learn Our Story & Mission | Umang Engineering",
  description: "Umang Engineering's story, mission, industry expertise, and community engagement. Contact us for more information about our corporate culture and achievements.",
  alternates: {
    canonical: "https://www.umangengineering.com/about-us",
  },
  openGraph: {
    images: ["https://www.umangengineering.com/assets/images/about/Global-leaders.webp"],
  },
};

// ---- Page ----
export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <Container>
        <Breadcrumb BreadcrumbsUrls={BreadcrumbsUrls} BreadcrumbsCurrent="About Us" />

        <Grid container spacing={4} sx={{ mt: 3 }}>

          {/* Left — Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h2" gutterBottom sx={{ fontFamily: "Jost-sb", fontSize: { xs: "20px", md: "48px" }, fontWeight: 500, paddingTop: "15px" }}>
              About Umang Engineering
            </Typography>
            <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5" }}>	
            Umang Engineering is the specialized engineering division of the Umang Global Group, dedicated to designing and manufacturing advanced process equipment and integrated manufacturing solutions for the pharmaceutical, nutraceutical, food, chemical, and allied industries. Leveraging years of engineering experience and innovation, we manufacture state-of-the-art machinery to improve the efficiency of your manufacturing processes.
            </Typography>
            <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", paddingTop: "15px" }}>
              As part of the Umang Global Group, Umang Engineering benefits from extensive industry knowledge gained across the group's diverse divisions, including pharmaceuticals, nutraceuticals, personal care, home care, cosmetics, and particle sciences. This wide exposure has helped us design engineering solutions that meet the ever-changing requirements of the industrial environment.
            </Typography>
            <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", paddingTop: "15px" }}>
              Umang Engineering is dedicated to understanding our clients' unique needs regarding their processes, production challenges, and goals. It is this dedication that enables us to offer equipment and processes that increase your efficiency and productivity.
            </Typography>
          </Grid>

          {/* Right — Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/assets/images/about/Global-leaders.webp"
              alt="Global Leaders in Encapsulation"
              sx={{ width: "100%", height: "100%", objectFit: "scale-down" }}
            />
          </Grid>

          {/* Center Text */}
          <Grid size={{ xs: 12, md: 12 }} sx={{ px: 6 }}>
            <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost-sb", fontWeight: 400, lineHeight: "1.5", paddingTop: "15px", textAlign: "center" }}>
We collaborate with manufacturers worldwide to understand their unique production requirements and develop tailored engineering solutions that deliver measurable results. It is through our blend of technology, expertise, and innovation that we help our partners excel in manufacturing and succeed in the long run.
            </Typography>
            <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost-sb", fontWeight: 400, lineHeight: "1.5", textAlign: "center" }}>
              At Umang Engineering, our commitment to engineering excellence enables manufacturers to improve process efficiency, maintain consistent product quality, and build a sustainable competitive advantage in an increasingly demanding global marketplace.
            </Typography>
          </Grid>

          {/* Counter Stats */}
          <Grid size={{ xs: 12, md: 12 }}>
            <CounterStatsHome />
          </Grid>

          {/* Mission Vision */}
          <MissionVisionCommon />

          {/* Why Choose Us */}
          <Grid size={{ xs: 12, md: 12 }} sx={{ px: { xs: 0, md: 9 } }}>
            <Typography variant="h2" gutterBottom sx={{ fontFamily: "Jost-sb", fontSize: { xs: "20px", md: "48px" }, fontWeight: 500, paddingTop: "15px", textAlign: "center" }}>
              Why Choose Umang Engineering?
            </Typography>
            <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", paddingTop: "15px", textAlign: "center" }}>
              We empower you to concentrate on growing your brand and reaching new markets, while we handle the rest. We support you in all stages of product and brand development, transforming your ideas into successful and innovative engineering solutions.
            </Typography>
            <Box
              component="img"
              src="/assets/images/about/why.webp"
              alt="Why Choose Umang Engineering"
              sx={{ width: "707px", height: { xs: "auto", md: "398px" }, borderRadius: "50px", objectFit: "cover", margin: "auto", py: 2 }}
            />
          </Grid>

          {/* People Behind the Science */}
          <Grid size={{ xs: 7, md: 7 }} sx={{ margin: { xs: "auto", md: "revert" } }}>
            <Typography variant="h2" gutterBottom sx={{ fontFamily: "Jost-sb", fontSize: { xs: "20px", md: "48px" }, fontWeight: 500, paddingTop: "15px", textAlign: { xs: "center", md: "left" } }}>
              Meet the Minds That Make It Happen
            </Typography>
            <Typography sx={{ color: "#091610", fontSize: "16px", fontFamily: "Jost", fontWeight: 400, lineHeight: "1.5", paddingTop: "15px", textAlign: "left" }}>
              Meet the professionals shaping the future of engineering solutions.
            </Typography>
          </Grid>

          {/* Team Cards */}
          <Grid size={{ xs: 12, md: 12 }} sx={{ pb: 10 }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "flex-start",
                alignItems: { xs: "center", md: "center" },
                gap: { xs: 4, md: 3 },
                fontFamily: "Jost, sans-serif",
              }}
            >
              {teamMembers.map((person, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "100%", sm: 248 },
                    maxWidth: 300,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    position: "relative",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={person.img}
                    alt={person.name}
                    sx={{ width: { xs: "100%", sm: 248 }, height: { xs: "auto", sm: 248 }, borderRadius: 3 }}
                  />

                  {/* Social Icons */}
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", position: "absolute", right: 9, top: 15 }}>
                    {person.socials.map((social, i) => {
                      const Icon = iconMap[social.iconKey];
                      return (
                        <IconButton
                          key={i}
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            width: "38px",
                            height: "38px",
                            bgcolor: "#fff",
                            "&:hover": { bgcolor: "#41939C" },
                          }}
                        >
                          {Icon && <Icon style={{ width: 24, height: 24 }} />}
                        </IconButton>
                      );
                    })}
                  </Box>

                  <Box sx={{ width: { xs: "100%", sm: 247 }, display: "flex", flexDirection: "column", gap: 0.5, px: 2, textAlign: { xs: "center", sm: "left" } }}>
                    <Typography sx={{ fontFamily: "Jost-sb" }} fontSize={20} fontWeight={500}>
                      {person.name}
                    </Typography>
                    <Typography fontSize={16}>{person.role}</Typography>
                  </Box>
                </Box>
              ))}

              {/* Team Block */}
              <Box sx={{ width: { xs: "100%", sm: 530 }, display: "flex", flexDirection: "column", gap: 2, alignItems: "center" }}>
                <Box
                  component="img"
                  src="/assets/images/about/team.jpg"
                  alt="The Team"
                  sx={{ width: { xs: "100%", sm: 530 }, height: { xs: "auto", sm: 248 }, borderRadius: 3 }}
                />
                <Box sx={{ width: { xs: "100%", sm: 147 }, display: "flex", flexDirection: "column", gap: 0.5, px: 2, textAlign: { xs: "center", sm: "left" } }}>
                  <Typography sx={{ fontFamily: "Jost-sb" }} fontSize={20} fontWeight={500}>The Team</Typography>
                  <Typography fontSize={16}>Innovators</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}