'use client'

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface ProductItem {
  pro_slug: string;
  pro_segment_type: string;
  pro_segment: string;
  pro_segment_desc: string;
  pro_img: string;
  pro_customization: string;
}

interface ProductCardProps {
  item: ProductItem;
  outer: string;
}

export const ProductCard = ({ item, outer }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${item.pro_slug}`}
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          width: "250px",
          height: "100%",
          pb: "20px",
          position: "relative",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        {/* Title & Subtitle */}
        <Box
          sx={{
            alignSelf: "stretch",
            pt: "12px",
            pl: "24px",
            pr: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "6px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Box sx={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "2px" }}>
            <Typography
              sx={{
                opacity: 0.7,
                fontSize: "14px",
                fontFamily: "Jost",
                fontWeight: 500,
                color: "#11181C",
              }}
            >
              {item.pro_segment_type}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "18px",
              fontFamily: "Jost-sb",
              fontWeight: 500,
              color: "#11181C",
            }}
          >
            {item.pro_segment}
          </Typography>
        </Box>

        {/* Image */}
        <Box sx={{ width: "250px", height: "270px" }}>
          <Box
            component="img"
            src={`/assets/images/${outer}/${item.pro_img}`}
            alt={item.pro_segment_desc}
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </Box>

        {/* Overlay */}
        <Box
          sx={{
            width: "-webkit-fill-available",
            p: "12px",
            position: "absolute",
            top: "233px",
            left: 0,
            background: "rgba(255, 255, 255, 0.16)",
            borderRadius: "12px",
            borderTop: "1px solid rgba(17, 17, 17, 0.15)",
            backdropFilter: "blur(10px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: "Jost-sb",
                fontWeight: 500,
                color: "#11181C",
                lineHeight: "16px",
              }}
            >
              CONFIGURATION
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: "Jost",
                fontWeight: 500,
                color: "#11181C",
                lineHeight: "16px",
              }}
            >
              {item.pro_customization} ...
            </Typography>
          </Box>

          <Button
            variant="contained"
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
              "&:hover": { background: "#41939Ca8" },
            }}
          >
            Preview
          </Button>
        </Box>
      </Box>
    </Link>
  );
};