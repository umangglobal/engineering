'use client'

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { SocialLinks } from "../SocialLinks";

// ---- Types ----
interface FormContactSiderProps {
  ContactImage: string;
}

export const FormContactSider = ({ ContactImage }: FormContactSiderProps) => {
  return (
    <Box
      sx={{
        position: { xs: "relative", md: "absolute" },
        top: { xs: "636px", md: "0px" },
        right: { xs: "0", md: "0" },
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "100%" },
          height: "90%",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-end" },
          gap: 2,
          fontFamily: "Jost, sans-serif",
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={`/assets/images/${ContactImage}.png`}
          alt="Contact"
          sx={{
            width: 525,
            height: 284,
            backgroundColor: "#DDE1E6",
            borderRadius: 8.5,
          }}
        />

        {/* Mail Card */}
        <Box
          sx={{
            width: { xs: 400, md: 525 },
            height: 118,
            p: "24px 44px",
            backgroundColor: "white",
            borderRadius: 2,
            outline: "2px solid #41939C",
            outlineOffset: "-2px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            gap: 1.25,
          }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "space-between", width: 354 }}>
            <MailOutlineOutlinedIcon
              sx={{ width: 55, height: 55, color: "white", bgcolor: "#41939C", padding: "7px", borderRadius: "25px" }}
            />
            <Box sx={{ width: 258, display: "flex", flexDirection: "column" }}>
              <Typography fontSize={32} fontWeight={500}>Send us a mail</Typography>
              <Typography fontSize={24} fontWeight={500} color="#41939C">
                <Link href="mailto:info@umangglobal.com" style={{ color: "#41939C", textDecoration: "none" }}>
                  info@umangglobal.com
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Call Card */}
        <Box
          sx={{
            width: { xs: 400, md: 525 },
            height: 118,
            p: "24px 44px",
            backgroundColor: "white",
            borderRadius: 2,
            outline: "2px solid #41939C",
            outlineOffset: "-2px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            gap: 1.25,
          }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "space-between", width: 310 }}>
            <CallOutlinedIcon
              sx={{ width: 55, height: 55, color: "white", bgcolor: "#41939C", padding: "7px", borderRadius: "25px" }}
            />
            <Box sx={{ width: 214, display: "flex", flexDirection: "column" }}>
              <Typography fontSize={32} fontWeight={500}>Call Us</Typography>
              <Typography fontSize={24} fontWeight={500} color="#41939C">
                <Link href="tel:+919518349134" style={{ color: "#41939C", textDecoration: "none" }}>
                  +91 95183 49134
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Social Links Card */}
        <Box
          sx={{
            width: { xs: 400, md: 525 },
            height: 118,
            p: "24px 44px",
            backgroundColor: "white",
            borderRadius: 2,
            outline: "2px solid #41939C",
            outlineOffset: "-2px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            gap: 1.25,
          }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "space-between", width: 310 }}>
            <Box sx={{ width: { xs: 400, md: 525 }, display: "flex", flexDirection: "column" }}>
              <Typography fontSize={32} fontWeight={500}>Connect With Us At</Typography>
              <SocialLinks />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};