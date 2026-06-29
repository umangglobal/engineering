'use client'

import { Box, Button, Container, Typography } from "@mui/material";
import ProductCustomization from "../../../lib/api/ProductCustomization.json";
import BeakerFilledFormulaIcon from "@/assets/icons/homepage/beaker-filled-formula.svg";
import Link from "next/link";

interface ProductCustomizationItem {
  pro_cust_desc: string;
  pro_cust_type: string;
  pro_cust_img: string;
}

export const CustomizationHome = () => {
  return (
    <Container sx={{ my: 8 }} maxWidth="lg">
      <Typography
        sx={{
          textAlign: "center",
          color: "black",
          fontSize: { xs: "20px", md: "32px" },
          fontFamily: "Jost-sb",
          fontWeight: 500,
          wordWrap: "break-word",
          marginBottom: "15px",
          whiteSpace: "pre-line",
        }}
      >
        {`LEADING MANUFACTURER & EXPORTER \n OF PHARMACEUTICAL PROCESS EQUIPMENT`}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "stretch",
          gap: { xs: "16px", md: "24px" },
        }}
      >
        {(ProductCustomization as ProductCustomizationItem[]).map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", md: "100%" },
              p: "16px",
              backgroundColor: "white",
              boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.70)",
              borderRadius: "12px",
              border: "1px solid #F4F4F5",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "16px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0px 8px 20px -4px rgba(0, 0, 0, 0.15)",
                borderColor: "#e0e0e0",
              },
              willChange: "transform",
            }}
          >
            {/* Heading & Subtitle */}
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
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <Typography
                  sx={{
                    color: "#091610",
                    fontSize: { xs: "13px", md: "14px" },
                    fontFamily: "Jost",
                    fontWeight: 500,
                  }}
                >
                  {item.pro_cust_desc}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#11181C",
                  fontSize: { xs: "20px", md: "24px" },
                  fontFamily: "Jost-sb",
                  fontWeight: 500,
                }}
              >
                {item.pro_cust_type}
              </Typography>
            </Box>

            {/* Image */}
            <Box
              sx={{
                alignSelf: "stretch",
                flex: "1 1 0",
                minHeight: { xs: "223px", md: "230px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderRadius: "14px",
              }}
            >
              <Link href="/product">
                <Box
                  component="img"
                  src={`/assets/images/home/${item.pro_cust_img}`}
                  alt={`${item.pro_cust_type} for your actives`}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: { xs: "223px", md: "213px" },
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    borderRadius: "14px",
                    ".MuiBox-root:hover &": {
                      transform: "scale(1.01)",
                    },
                  }}
                />
              </Link>
            </Box>
          </Box>
        ))}
      </Box>

      {/* CTA Button */}
      <Box sx={{ display: "flex", justifyContent: "center", py: "20px" }}>
        <Link href="/product" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              width: { xs: "268px", md: "auto" },
              height: "46px",
              px: "24px",
              py: "10px",
              fontSize: { xs: "16px", md: "18px" },
              fontFamily: "Jost-sb",
              fontWeight: 500,
              letterSpacing: "0.36px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#41939C",
              borderRadius: "30px",
              transition: "background 0.3s ease, transform 0.2s ease",
              "&:hover": {
                background: "#41939Ca8",
                transform: "scale(1.03)",
              },
            }}
          >
            Explore Our Products
            <BeakerFilledFormulaIcon
              style={{ width: "24px", height: "24px", marginLeft: "7px", color: "#fff" }}
            />
          </Button>
        </Link>
      </Box>
    </Container>
  );
};