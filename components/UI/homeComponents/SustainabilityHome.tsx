'use client'

import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { FC, SVGProps } from "react";
import GreenBioEnergyIcon from "@/assets/icons/homepage/green-bio-energy.svg";
import NaturalIcon from "@/assets/icons/homepage/Natural.svg";
import GreenEcoEnergyIcon from "@/assets/icons/homepage/green-eco-energy.svg";
import HealthCareIcon from "@/assets/icons/homepage/healtcare.svg";

interface SustainedData {
  title: string;
  description: string;
  buttonTitle: string;
  iconb: FC<SVGProps<SVGSVGElement>>;
  url: string;
}

const sustainedData: SustainedData[] = [
  {
    title: "Growing Together, One Tree at a Time",
    description: "Every birthday marks the planting of a tree, turning special moments into lasting contributions toward a greener and more sustainable future.",
    buttonTitle: "See Our Impact",
    iconb: NaturalIcon,
    url: "/planting-for-every-life",
  },
  {
    title: "Where Every Visit Grows Greener",
    description: "Visitors from around the world leave behind more than memories by planting a tree that supports a greener and more sustainable future.",
    buttonTitle: "Join the Movement",
    iconb: HealthCareIcon,
    url: "/green-visitor-program",
  },
  {
    title: "Smart Resource Management",
    description: "Our state-of-the-art engineering systems are constructed for efficiency, optimal use of energy resources, and minimization of our environmental footprint within production processes.",
    buttonTitle: "How AI Helps",
    iconb: GreenBioEnergyIcon,
    url: "/ai-driven-sustainability",
  },
  {
    title: "Towards Zero Waste Manufacturing",
    description: "Through efficient material usage and responsible manufacturing processes, we avoid waste and make our resources valuable by making use of them again and again.",
    buttonTitle: "See the Plan",
    iconb: GreenEcoEnergyIcon,
    url: "/zero-waste-manufacturing",
  },
];

export const SustainabilityHome = () => {
  return (
    <Box
      sx={{
        my: 8,
        py: { xs: 2, md: 4 },
        alignItems: "center",
        background: "#C7EADF",
        borderRadius: "20px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: "35px" },
          }}
        >
          <Box
            component="img"
            src="/assets/images/home/sustain.webp"
            alt="Umang Globals sustainable personal care production: ethically sourced ingredients and eco-conscious manufacturing"
            loading="lazy"
            sx={{
              width: { xs: "100%", md: 525 },
              height: { xs: 385, md: 650 },
              background: "#DDE1E6",
              borderRadius: "36px",
              position: "relative",
            }}
          />

          <Box
            sx={{
              width: { xs: "92.5%", md: 525 },
              height: { xs: 385, md: 650 },
              background: "linear-gradient(137deg, #2C997A 30%, rgba(44, 153, 122, 0) 100%)",
              borderRadius: "36px",
              position: "absolute",
            }}
          />

          <Box
            sx={{
              width: { xs: 364, md: 475.28 },
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              position: "absolute",
              p: "30px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "24px", md: "32px" },
                fontFamily: "Jost",
                fontWeight: 500,
              }}
            >
              Driven by Excellence, Powered by Engineering
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "20px",
                fontFamily: "Jost",
                fontWeight: 500,
                lineHeight: "20px",
                marginBottom: { xs: 14, md: 45 },
              }}
            >
              Moving towards a zero-waste and fully recyclable future by 2030, facilitated by AI, innovation, and international cooperation.
            </Typography>

            <Link href="/sustainability">
              <Button
                variant="contained"
                sx={{
                  width: { xs: "252px", md: "315px" },
                  height: { xs: 50, md: 48 },
                  backgroundColor: "#2C997A",
                  borderRadius: "32px",
                  color: "white",
                  fontFamily: "Jost",
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px" },
                  letterSpacing: "0.5px",
                  textTransform: "none",
                  boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
                  outline: "2px solid #2C997A",
                  outlineOffset: "-2px",
                }}
              >
                Explore Our Sustainability Vision
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Right Side — Cards Grid */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "grid",
            gap: { xs: "15px", md: "50px" },
            gridTemplateColumns: "1fr 1fr",
            py: { xs: 2, md: 0 },
          }}
        >
          {sustainedData.map((susdata, index) => {
            const Icon = susdata.iconb;
            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: "100%",
                  p: { xs: 1.5, md: 2 },
                  pt: { xs: 1, md: 2 },
                  pb: { xs: 2, md: 3.5 },
                  backgroundColor: "white",
                  borderRadius: "20px",
                  boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                {/* Icon Box */}
                <Box
                  sx={{
                    p: "14px 12px 12px 14px",
                    backgroundColor: "#2C997A",
                    borderRadius: "8px 4px 4px 4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: 24, height: 24, position: "relative" }}>
                    <Icon style={{ width: "24px", height: "24px", color: "#fff" }} />
                  </Box>
                </Box>

                {/* Title */}
                <Box sx={{ mt: 2, display: "flex", gap: "10px", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "19px",
                      fontFamily: "Jost-sb",
                      fontWeight: 500,
                      color: "#21272A",
                      lineHeight: "20px",
                    }}
                  >
                    {susdata.title}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: "14px",
                    fontFamily: "Jost",
                    fontWeight: 400,
                    color: "#21272A",
                  }}
                >
                  {susdata.description}
                </Typography>

                {/* Button */}
                <Box sx={{ mt: 2, width: "100%" }}>
                  <Link href={susdata.url}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: "100%",
                        height: "48px",
                        padding: "1px 3px",
                        borderRadius: "26px",
                        borderColor: "#2C997A",
                        color: "#2C997A",
                        fontSize: { xs: "14px", md: "18px" },
                        fontFamily: "Jost",
                        fontWeight: 500,
                        letterSpacing: "0.36px",
                        textTransform: "none",
                        "&:hover": { background: "#2C997A", color: "#ffff" },
                      }}
                    >
                      {susdata.buttonTitle}
                    </Button>
                  </Link>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};