'use client'

import { Box, Container, Typography } from "@mui/material";
import TopHeaderProductNavItemVal from "../../lib/api/TopHeaderProductNavItemVal.json";
import ScIcon from "@/assets/icons/navigation/lipo.svg";
import SeIcon from "@/assets/icons/navigation/lipo.svg";
import NatIcon from "@/assets/icons/navigation/lipo.svg";
import SsIcon from "@/assets/icons/navigation/lipo.svg";
import SaIcon from "@/assets/icons/navigation/lipo.svg";
import AfIcon from "@/assets/icons/navigation/lipo.svg";
import ShIcon from "@/assets/icons/navigation/SH.svg";
import SoIcon from "@/assets/icons/navigation/SO.svg";
import AromaIcon from "@/assets/icons/navigation/aroma.svg";
import LipoIcon from "@/assets/icons/navigation/lipo.svg";
import GetQuoteIcon from "@/assets/icons/navigation/get-quote.svg";
import MailIcon from "@/assets/icons/homepage/mail.svg";
import CircleRightArrowIcon from "@/assets/icons/navigation/circle-right-arrow.svg";
import Link from "next/link";
import { FC, SVGProps } from "react";

// ---- Types ----
interface NavItem {
  pro_icon: string;
  pro_nav_app_slug: string;
  pro_nav_app_img: string;
  pro_bg_color: string;
  pro_nav_application: string;
  pro_nav_app_type: string;
}

type IconsMap = {
  [key: string]: FC<SVGProps<SVGSVGElement>>;
};

// ---- Icons map ----
const iconsMap: IconsMap = {
  SC:    ScIcon,
  SE:    SeIcon,
  NAT:   NatIcon,
  SS:    SsIcon,
  SA:    SaIcon,
  AF:    AfIcon,
  SH:    ShIcon,
  SO:    SoIcon,
  aroma: AromaIcon,
  lipo:  LipoIcon,
};

export const TopHeaderProductNavItem = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: "1060px",
          backgroundColor: "white",
          boxShadow: "1px 1px 10px 4px rgba(0, 0, 0, 0.10)",
          borderRadius: "24px",
        }}
      >
        {/* Nav Items Grid */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            p: "12px 19px 16px 19px",
            position: "relative",
            display: "inline-flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {(TopHeaderProductNavItemVal as NavItem[]).map((item, index) => {
            const IconComponent = iconsMap[item.pro_icon];
            return (
              <Box key={index} sx={{ display: "flex", position: "relative" }}>
                <Link
                  href={`/products/${item.pro_nav_app_slug}`}
                  style={{ textDecoration: "none" }}
                >
                  {/* Card background */}
                  <Box
                    sx={{
                      width: "300px",
                      height: "210px",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      backgroundColor: "rgba(255, 214, 112, 0.02)",
                      borderRadius: "12px",
                      border: "1px solid #E9E8E8",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "9px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={`/assets/images/NavCover/${item.pro_nav_app_img}`}
                      alt={item.pro_nav_application}
                      loading="lazy"
                      sx={{ width: "100%", borderRadius: "12px 12px 0 0" }}
                    />
                  </Box>

                  {/* Icon + Text */}
                  <Box
                    sx={{
                      width: "265px",
                      margin: "10px 20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "15px",
                    }}
                  >
                    {/* Icon box */}
                    <Box
                      sx={{
                        width: "36px",
                        height: "36px",
                        p: "6px",
                        backgroundColor: item.pro_bg_color,
                        borderRadius: "5px",
                        border: "2px solid white",
                        display: "inline-flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "20px",
                        zIndex: 1,
                      }}
                    >
                      <Box sx={{ width: "24px", height: "24px", position: "relative", overflow: "hidden" }}>
                        {IconComponent && (
                          <IconComponent style={{ width: "21px", height: "21px", color: "#141B34" }} />
                        )}
                      </Box>
                    </Box>

                    {/* Text */}
                    <Box
                      sx={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#091610",
                          fontSize: "18px",
                          fontFamily: "Jost",
                          fontWeight: 500,
                          lineHeight: "20px",
                        }}
                      >
                        {item.pro_nav_application}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#5d5a5d",
                          fontSize: "14px",
                          fontFamily: "Jost",
                          fontWeight: 500,
                        }}
                      >
                        {item.pro_nav_app_type}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            );
          })}
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#41939C",
            borderBottomRightRadius: "24px",
            borderBottomLeftRadius: "24px",
            display: "flex",
            justifyContent: "space-around",
            p: "12px 0",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "18px",
              fontFamily: "Jost",
              fontWeight: 500,
              display: "flex",
              letterSpacing: "0.36px",
              alignItems: "center",
            }}
          >
            <GetQuoteIcon style={{ width: "21px", height: "21px", marginRight: "7px" }} />
            <Link href="/free-quote" style={{ color: "white", textDecoration: "none" }}>
              Get Free Quote
            </Link>
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: "18px",
              fontFamily: "Jost",
              fontWeight: 500,
              letterSpacing: "0.36px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MailIcon style={{ width: "21px", height: "21px", marginRight: "7px", color: "#fff" }} />
            <Link href="/contact-us" style={{ color: "white", textDecoration: "none" }}>
              Have Query? Contact Us...
            </Link>
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: "18px",
              fontFamily: "Jost",
              fontWeight: 500,
              letterSpacing: "0.36px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href="/solutions" style={{ color: "white", textDecoration: "none" }}>
              Solution
            </Link>
            <CircleRightArrowIcon style={{ width: "21px", height: "21px", marginLeft: "7px" }} />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};