'use client'

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FC, SVGProps } from "react";
import DownloadIcon from "@/assets/icons/product/download.svg";
import CloudDownloadIcon from "@/assets/icons/product/clouddownload.svg";

// ---- Icon map ----
const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  DownloadIcon,
  CloudDownloadIcon,
};

// ---- Types ----
interface DownloadItem {
  title: string;
  url: string;
  iconKey: string;       // ← string key instead of function
}

interface DownloadSectionProductProps {
  DownloadSection: DownloadItem[];
}

export const DownloadSectionProduct = ({ DownloadSection }: DownloadSectionProductProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {DownloadSection.map((data, index) => {
        const Icon = iconMap[data.iconKey];
        return (
          <Box key={index}>
            <Link href={data.url} target="_blank" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  width: { xs: "340px", md: "560px" },
                  height: "59.57px",
                  border: "2px solid #41939C",
                  borderRadius: "12px",
                  background: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: "30px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "auto",
                    height: "12px",
                    fontSize: "16px",
                    fontFamily: "Jost",
                    fontWeight: 500,
                    color: "black",
                    letterSpacing: "0.32px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {data.title} FLYERS
                </Typography>

                <Box
                  sx={{
                    width: "20.23px",
                    height: "20.23px",
                    position: "relative",
                    paddingRight: "50px",
                  }}
                >
                  {Icon && <Icon style={{ fontSize: 24, color: "#141B34" }} />}
                </Box>
              </Box>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};