'use client'

import { Box } from "@mui/material";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const VideoBannerHome = () => {
  return (
    <Box
      my={8}
      sx={{
        width: "76%",
        aspectRatio: "16 / 9",
        mx: "auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: 3,
        backgroundColor: "#000",
      }}
    >
      <LiteYouTubeEmbed
        id="OtITgmnkONc"
        title="Umang Nutraceuticals Video"
        poster="maxresdefault"
        params="autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
      />
    </Box>
  );
};

export default VideoBannerHome;