'use client'

import { Box, Paper, Container } from "@mui/material";
import UmangForm from "../UmangForm";

export const ContactUsHome = () => {
  return (
    <Container>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "37.22px",
          backgroundColor: "white",
          position: "relative",
          overflow: "hidden",
          outline: "2px solid #41939C",
          outlineOffset: "-1px",
          margin: "56px 0px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: "888px", md: "707px" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "312px",
              height: { xs: "888px", md: "707px" },
              backgroundColor: { xs: "transparent", md: "#41939C" },
              position: "absolute",
              right: 0,
              top: 0,
            }}
          />

          <UmangForm
            formType="contact"
            HeadingBlack="HAVE ANY"
            HeadingColor="DOUBT?"
            SubHeading="Contact us for solutions..."
          />

          <Box
            sx={{
              position: "absolute",
              top: 65,
              left: 549,
              width: 116.88,
              height: 72.96,
              backgroundColor: "white",
              borderRadius: "7.44px",
            }}
          />

          {/* Google Maps */}
          <Box
            sx={{
              width: { xs: "95%", md: 475 },
              height: { xs: 235, md: 561 },
              position: "absolute",
              top: { xs: 640, md: 49 },
              left: { xs: 0, md: 529 },
              borderRadius: 2,
              overflow: "hidden",
              marginLeft: { xs: 1, md: 0 },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0000207193916!2d72.8317885752073!3d19.151476382068793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b797a6f6e621%3A0xd82a09f154e1e943!2sUmang%20Global%20Group%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1750930630655!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};