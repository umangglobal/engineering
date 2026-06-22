'use client'

import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useState } from "react";
import { FC, SVGProps } from "react";
import Link from "next/link";
import LiposuleIcon from "@/assets/icons/product/Liposule.svg";
import MouthwashIcon from "@/assets/icons/product/Mouthwash.svg";
import StarIcon from "@/assets/icons/product/Star.svg";
import YoutubeIcon from "@/assets/icons/product/youtube.svg";

// ---- Icon map (client-side only) ----
const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  MouthwashIcon,
  LiposuleIcon,
  StarIcon,
  YoutubeIcon,
};

// ---- Types ----
interface TabItem {
  label: string;
  img: string;
  content: string;
  iconKey: string;       // ← string key instead of function
}

interface ProductTabsProps {
  tabData: TabItem[];
}

export const ProductTabs = ({ tabData }: ProductTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: "20px", sm: "30px 42px" },
        background: "#fff",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          gap: { xs: 3, md: 0 },
        }}
      >
        {/* Left — Tabs + Content */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{
              "& .MuiTab-root": {
                minHeight: "32px",
                px: { xs: "20px", sm: "30px", md: "46px" },
                py: "8px",
                mx: "2px",
                borderBottom: "2px solid #C8C4C5",
                fontSize: { xs: "13px", sm: "14px" },
                fontFamily: "Jost",
                fontWeight: 500,
                color: "#7B7275",
                textTransform: "none",
              },
              "& .Mui-selected": {
                color: "#41939C !important",
                borderBottom: "4px solid #41939C",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {tabData.map((tab, index) => {
              const Icon = iconMap[tab.iconKey];
              return (
                <Tab
                  key={index}
                  label={tab.label}
                  icon={Icon ? <Icon style={{ width: "23px", height: "23px" }} /> : undefined}
                  iconPosition="end"
                />
              );
            })}
          </Tabs>

          {/* Tab Content */}
          <Box sx={{ flex: 1, overflow: "auto", mt: 2 }}>
            <Box
              sx={{
                color: "#091610",
                fontSize: { xs: "14px", sm: "16px" },
                paddingLeft: "35px",
                fontFamily: "Jost",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              <ul>
                {tabData[value].content.split(",").map((item, index) => (
                  <li key={index}> - {item.trim()}</li>
                ))}
              </ul>
              <br />
              <Link href="/contact-us" style={{ textDecoration: "none" }}>
                <Typography
                  component="span"
                  sx={{
                    color: "#41939C",
                    fontSize: { xs: "15px", sm: "18px" },
                    fontFamily: "Jost",
                    fontWeight: 500,
                    letterSpacing: "0.36px",
                    cursor: "pointer",
                  }}
                >
                  Have Doubt? Contact Us...
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Right — Image */}
        <Box
          component="img"
          src={tabData[value].img}
          alt={`${tabData[value].label} tab image`}
          sx={{
            flexShrink: 0,
            width: { xs: "100%", sm: "80%", md: "293px" },
            height: { xs: "auto", md: "304px" },
            borderRadius: "16px",
            objectFit: "cover",
            background: "#DDE1E6",
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        />
      </Box>
    </Box>
  );
};