'use client'

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import WhatsappIcon from "@/assets/icons/homepage/whatsapp.svg";
import ZoomIcon from "@/assets/icons/homepage/zoom.svg";

export const MeetingHome = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        px: { xs: 6, md: "150px" },
        py: { xs: 3, md: "23px" },
        backgroundColor: "#C3E9ED",
        borderRadius: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "26px",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          textAlign: "center",
          color: "black",
          fontSize: { xs: "20px", md: "32px" },
          fontFamily: "Jost-sb",
          fontWeight: 500,
          lineHeight: { xs: "1.4", md: "1.6" },
          whiteSpace: "pre-line",
        }}
      >
        {`Talk to our experts to learn more about our Engineering solutions, Advanced equipment, and How they can improve your manufacturing processes and products.`}
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          width: { xs: "100%", md: "537.51px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Button 1 - Meeting */}
        <Link href="https://meet.google.com/ztc-ozci-gtx" target="_blank">
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              width: { xs: "268px", md: "268px" },
              height: "46px",
              px: "24px",
              py: "10px",
              borderRadius: "30px",
              borderWidth: "1.5px",
              borderColor: "#41939C",
              color: "#41939C",
              fontSize: { xs: "16px", md: "18px" },
              fontFamily: "Jost-sb",
              fontWeight: 500,
              letterSpacing: "0.36px",
              textTransform: "none",
              display: "flex",
              gap: "8px",
              backgroundColor: "#fff",
              "&:hover": {
                borderColor: "#41939C",
                backgroundColor: "#41939C21",
              },
            }}
          >
            <ZoomIcon style={{ width: "24px", height: "24px", marginLeft: "7px", color: "#41939C" }} />
            Setup a Meeting
          </Button>
        </Link>

        {/* Button 2 - WhatsApp */}
        <Link href="https://api.whatsapp.com/send?text=Hello&phone=919518349134" target="_blank">
          <Button
            variant="contained"
            sx={{
              flex: 1,
              width: { xs: "268px", md: "268px" },
              height: "46px",
              px: "24px",
              py: "10px",
              fontSize: { xs: "16px", md: "18px" },
              fontFamily: "Jost-sb",
              fontWeight: 500,
              letterSpacing: "0.36px",
              textTransform: "none",
              display: "flex",
              gap: "8px",
              background: "#41939C",
              borderRadius: "30px",
              "&:hover": { background: "#41939Ca8" },
            }}
          >
            <WhatsappIcon style={{ width: "24px", height: "24px", marginLeft: "7px", color: "#fff" }} />
            Whatsapp Us
          </Button>
        </Link>
      </Box>
    </Box>
  );
};