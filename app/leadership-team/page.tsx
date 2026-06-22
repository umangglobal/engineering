// app/leadership-team/page.tsx

import { Box, Container, Typography } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { Leaders } from "@/components/UI/ResourcesComponent/Leaders";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import type { Metadata } from "next";

// ---- Types ----
interface LocationCard {
  title: string;
  description: string;
}

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",               url: "/"                   },
  { title: "Resources",          url: "/resources"          },
  { title: "Company",            url: "/company"            },
  { title: "Leadership & Team",  url: "/leadership-team"    },
];

const sustainedData: LocationCard[] = [
  {
    title: "Oshiwara Corporate Office",
    description: "The hub of our strategic and client-facing operations. This is where our Leadership, Sales, and Digital Marketing teams are based, and where ideas evolve into execution to drive brand growth and business development.",
  },
  {
    title: "Bhoidapada Engineering Plant",
    description: "A vital center supporting our machinery expertise. This facility manages encapsulation equipment manufacturing, as well as key functions including accounts, logistics, procurement, and store operations.",
  },
  {
    title: "Mandvi Nutraceutical Plant",
    description: "A dedicated manufacturing facility for nutraceutical and pharmaceutical solutions with strong teams in R&D, QA, QC, Stores, IT, and HR, which would help in regulatory compliance, scientific accuracy, and operational efficiency in a holistic manner.",
  },
  {
    title: "Chandip Personal Care Plant",
    description: "The state-of-the-art facility in personal care manufacturing at Chandip is backed by dedicated teams in Quality Assurance, Quality Control, Stores, EHS (Environment, Health & Safety), and Regulatory departments. All these departments operate in complete coordination to ensure that our encapsulated solutions meet high standards in terms of safety, quality, and sustainability.",
  },
];

const LeadershipTeamPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Lead Your Team to Success | Umang Nutraceuticals",
  description: "Team's potential with Umang Nutraceuticals. Discover strategies and insights to lead effectively and achieve success together.",
  alternates: {
    canonical: "https://www.umangnutraceuticals.com/leadership-team",
  },
};

// ---- Page ----
export default function LeadershipTeamPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LeadershipTeamPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Leadership & Team"
        BannerImg="resources/LeadershipTeam-banner.png"
        BannerHeading="Leadership & Team"
        BannerCaption="Formulate. Optimize. Deliver."
      />

      {/* Leaders Section */}
      <Box sx={{ py: 4 }}>
        <Leaders />
      </Box>

      {/* Team Section */}
      <Box sx={{ alignItems: "center", background: "#fff", borderRadius: "20px" }}>
        <Container sx={{ display: "flex", flexDirection: "column" }}>

          {/* Team Image */}
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gap: "10px",
              gridTemplateColumns: "1fr",
              justifyContent: "space-between",
              alignItems: "stretch",
              justifyItems: "center",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/assets/images/resources/team-umang.png"
              alt="Umang Global Group Team"
              sx={{
                width: "100%",
                height: { xs: 180, md: 338 },
                position: "relative",
              }}
            />
          </Box>

          {/* Description */}
          <Box display="flex" justifyContent="space-around" alignItems="center" pt="20px">
            <Box width="100%" maxWidth={1134} display="flex" flexDirection="column" gap={2}>
              <Typography fontFamily="Jost-sb" fontSize={32} fontWeight={500}>
                People Who Make It Possible
              </Typography>
              <Typography fontSize={16} fontWeight={400}>
                Across all locations of Umang Global Group, our people work in close collaboration to foster innovation, quality, and adherence to global standards. From leadership and research to precision manufacturing, we are united in our quest to provide quality encapsulation solutions and product consistency worldwide.
              </Typography>
            </Box>
          </Box>

          {/* Location Cards */}
          <Box sx={{ py: "25px" }}>
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gap: "25px",
                p: "25px",
                mt: "20px",
                borderRadius: "20px",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                background: "#C3E9ED",
              }}
            >
              {sustainedData.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    p: 2,
                    pt: 2,
                    pb: 3.5,
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Box sx={{ mt: 2, display: "flex", gap: "10px", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontFamily: "Jost-sb",
                        fontWeight: 500,
                        color: "#21272A",
                        lineHeight: "20px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: "14px",
                      fontFamily: "Jost",
                      fontWeight: 400,
                      color: "#21272A",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}