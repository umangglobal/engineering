'use client'

import { Box, Typography, Button } from "@mui/material";
import ProductApplications from "../../../lib/api/ProductApplication.json";
import CircleBasicRightIcon from "@/assets/icons/homepage/Circle-Basic-Right.svg";
import Link from "next/link";

interface ProductApplication {
  pro_application: string;
  pro_app_slug: string;
  pro_app_img: string;
  pro_app_alt: string;
  pro_application_subtitile: string;
}

export const ApplicationHome = () => {
  return (
    <Box my={8}>
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
       FIND THE RIGHT SPARE PARTS FOR YOUR NEEDS
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          gap: { xs: "16px", md: "24px" },
        }}
      >
        {(ProductApplications as ProductApplication[]).map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.70)",
              borderRadius: "12px",
              border: "1px solid #F4F4F5",
            }}
          >
            {/* Title Overlay */}
            <Box
              sx={{
                pt: "12px",
                px: "12px",
                position: "absolute",
                top: "8px",
                left: "8px",
                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#101C16",
                  fontSize: { xs: "20px", md: "24px" },
                  fontFamily: "Jost-sb",
                  fontWeight: 500,
                }}
              >
                {item.pro_application}
              </Typography>
            </Box>

            {/* Card Container */}
            <Box
              sx={{
                width: { xs: "270px", md: "210px", xl: "270px" },
                height: "249px",
                position: "relative",
                boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {/* Card Image */}
              <Link href={`/products/${item.pro_app_slug}`}>
                <Box
                  component="img"
                  src={`/assets/images/home/${item.pro_app_img}`}
                  alt={item.pro_app_alt}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
              </Link>

              {/* Overlay Footer */}
              <Box
                sx={{
                  width: "100%",
                  p: "12px",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "white",
                  borderRadius: "0 0 12px 12px",
                  borderTop: "1px solid rgba(17, 17, 17, 0.15)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* Text */}
                <Typography
                  sx={{
                    color: "#21272A",
                    width: "160px",
                    fontSize: "14px",
                    fontFamily: "Jost",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {item.pro_application_subtitile}
                </Typography>

                {/* Button */}
                <Link href="/products/spare-parts" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    sx={{
                      height: "32px",
                      px: "12px",
                      fontSize: "12px",
                      fontFamily: "Jost",
                      fontWeight: 400,
                      textTransform: "none",
                      background: "#41939C",
                      borderRadius: "30px",
                      "&:hover": { background: "#41939Ca8" },
                    }}
                  >
                    Parts
                    <CircleBasicRightIcon
                      style={{ width: "24px", height: "24px", marginLeft: "7px", color: "#fff" }}
                    />
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};