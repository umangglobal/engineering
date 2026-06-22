'use client'

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

interface SegmentData {
  title: string;
  description: string;
  url: string;
  iconb: string;
}

const segmentData: SegmentData[] = [
  {
    title: "Personal Care",
    description: "Dissolving Beads, Non-dissolving Exfoliator Beads, Actifilms, Natural Exfoliator ...",
    url: "https://www.umangparticlescience.com/",
    iconb: "personal-care.webp",
  },
  {
    title: "Pharmaceuticals",
    description: "Encapsulated Beadlets and Granules for Dietary Supplements, Protein Supplements ...",
    url: "https://www.umangpharmaceuticals.com/",
    iconb: "pharmaceuticals.webp",
  },
  {
    title: "Nutraceuticals",
    description: "Pellet Filled Capsules, Gummies, Sachets, Beverages, Food Fortification, Protein Powder ...",
    url: "https://www.umangnutraceuticals.com/",
    iconb: "segment1.webp",
  },
];

export const SegmentsHome = () => {
  return (
    <Box sx={{ my: 8 }}>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            color: "black",
            fontSize: { xs: "20px", md: "32px" },
            fontFamily: "Jost-sb",
            fontWeight: 500,
            wordWrap: "break-word",
            marginBottom: "15px",
          }}
        >
          DISCOVER OUR OTHER SEGMENTS
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 7.9 },
            alignItems: { xs: "center", md: "center" },
          }}
        >
          {segmentData.map((segdata, index) => (
            <Box
              key={index}
              sx={{
                height: "400px",
                pb: "48px",
                position: "relative",
                boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.70)",
                borderRadius: "12px",
                border: "1px solid #F4F4F5",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Link href={segdata.url} target="_blank">
                {/* Background Image */}
                <Box sx={{ width: "342px", height: "400px" }}>
                  <Box
                    component="img"
                    src={`/assets/images/home/${segdata.iconb}`}
                    alt={`${segdata.title} is a major division of Umang Global Group Pvt Ltd`}
                    loading="lazy"
                    sx={{
                      width: "342px",
                      height: "400px",
                      position: "relative",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Text Content */}
                <Box
                  sx={{
                    alignSelf: "stretch",
                    pt: "12px",
                    px: "12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "6px",
                    width: "342px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <Box
                    sx={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <Typography
                      sx={{
                        opacity: 0.6,
                        fontSize: "14px",
                        fontFamily: "Jost",
                        fontWeight: 500,
                        color: "#11181C",
                        lineHeight: 1.4,
                      }}
                    >
                      {segdata.description}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontFamily: "Jost-sb",
                      fontWeight: 500,
                      color: "#11181C",
                    }}
                  >
                    {segdata.title}
                  </Typography>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};