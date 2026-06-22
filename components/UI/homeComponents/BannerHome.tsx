'use client'

import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export const BannerHome = () => {
  return (
    <Box
      sx={{
        maxWidth: "1392px",
        mx: "auto",
        my: 1,
        borderRadius: "16px",
        backgroundColor: "#41939C",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* === LCP Background Image (Critical) === */}
      <Box
        component="img"
        src="/assets/images/home/pattern.webp"
        alt="Background pattern encapsulated beads, soap, bathbombs, and ingredient containers"
        fetchPriority="high"
        loading="eager"
        sx={{
          width: "100%",
          height: { xs: "450px", md: "634px" },
          objectFit: "cover",
          opacity: { xs: 0.4, md: 1 },
        }}
      />

      {/* === Gradient Overlay === */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "402px", md: "100%" },
          height: "100%",
          background: {
            xs: "linear-gradient(272deg, #41939C5c 30%, #41939Cd6 95%);",
            md: "linear-gradient(272deg, #41939C00 0%, #41939Cd6 95%);",
          },
          borderRadius: "16px",
        }}
      />

      {/* === MOBILE Layout === */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          p: 2,
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "220px",
            left: "24px",
            fontFamily: "Jost-sb",
            lineHeight: "40px",
            fontSize: "32px",
            fontWeight: 500,
            color: "black",
            width: "90%",
          }}
        >
          Precision Encapsulation for Next-Gen Nutraceutical Performance
        </Typography>

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "380px",
            left: "24px",
            width: "120px",
            height: "33px",
            fontSize: "14px",
            borderRadius: "26px",
            textTransform: "capitalize",
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#b45a6a" },
          }}
        >
          <Link href="/product" style={{ color: "#41939C", textDecoration: "none" }}>
            Know More
          </Link>
        </Button>

        {/* Decorative images – lazy loaded */}
        <Box
          component="img"
          src="/assets/images/home/banner_img3.webp"
          alt="Custom skincare actives: encapsulated beads, soap, and ingredient containers"
          loading="lazy"
          sx={{
            position: "absolute",
            top: "15px",
            left: "74px",
            width: "140px",
            height: "185px",
          }}
        />
        <Box
          component="img"
          src="/assets/images/home/banner_img1.webp"
          alt="Custom Oralcare actives: encapsulated flims, taste masked actives and ingredient containers"
          loading="lazy"
          sx={{
            position: "absolute",
            top: "15px",
            left: "220px",
            width: "150px",
            height: "90px",
          }}
        />
        <Box
          component="img"
          src="/assets/images/home/banner_img2.webp"
          alt="Encapsulated active ingredients placed in transparent bottles"
          loading="lazy"
          sx={{
            position: "absolute",
            top: "110px",
            left: "220px",
            width: "150px",
            height: "90px",
          }}
        />
        <Box
          component="img"
          src="/assets/images/home/core.webp"
          alt="Pink Core image of umang global group pvt ltd representing personal care segment"
          loading="lazy"
          sx={{
            position: "absolute",
            top: "120px",
            left: "24px",
            width: "76px",
            height: "76px",
          }}
        />
      </Box>

      {/* === DESKTOP Layout === */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          p: 4,
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {/* Left Side - Text */}
          <Grid size={6}>
            <Box
              sx={{
                maxWidth: "492px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 2,
                height: "100%",
                pl: "95px"
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Jost-sb",
                  fontSize: "54px",
                  fontWeight: 500,
                  lineHeight: 1.3,
                  pt: "15px",
                }}
              >
                Precision Engineering for Advanced Process Solutions
              </Typography>

              <Link href="/product" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    color: "#41939C",
                    width: "151px",
                    height: "48px",
                    fontSize: "18px",
                    background: "#fff",
                    borderRadius: "30px",
                    "&:hover": { background: "#0000004a", color: "#fff" },
                    px: 3,
                    textTransform: "capitalize",
                  }}
                >
                  Know More
                </Button>
              </Link>
            </Box>
          </Grid>

          {/* Right Side - Images */}
          <Grid size={6}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, position: "relative" }}>
                <Box
                  component="img"
                  src="/assets/images/home/banner_img3.webp"
                  alt="Custom skincare actives: encapsulated beads, soap, and ingredient containers"
                  loading="lazy"
                  sx={{
                    width: "100%",
                    borderRadius: "12px",
                    height: "525px",
                  }}
                />
                <Box
                  component="img"
                  src="/assets/images/home/core.webp"
                  alt="Pink Core image of umang global group pvt ltd representing personal care segment."
                  loading="lazy"
                  sx={{
                    position: "absolute",
                    bottom: "-5%",
                    left: "-35%",
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box
                  component="img"
                  src="/assets/images/home/banner_img1.webp"
                  alt="Custom Oralcare actives: encapsulated flims, tastemasked actives and ingredient containers"
                  loading="lazy"
                  sx={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "12px",
                  }}
                />
                <Box
                  component="img"
                  src="/assets/images/home/banner_img2.webp"
                  alt="Encapsulated active ingredients placed in transparent bottles"
                  loading="lazy"
                  sx={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};