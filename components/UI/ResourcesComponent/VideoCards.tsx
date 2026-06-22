'use client'

import { Box, Container, Typography, Grid } from "@mui/material";
import { videos } from "@/lib/api/VideoApi";
import Link from "next/link";

export const VideoCards = () => {
  return (
    <Container>
      <Box py={8}>
        <Grid container spacing={3} justifyContent="center">
          {[...videos].reverse().map((video) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={video.id}>
              <Link href={`/videos-single/${video.videoSlug}`} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    width: { xs: "340px", md: "350px" },
                    height: "100%",
                    p: "5px 5px 10px 5px",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "14px",
                    boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.70)",
                    borderRadius: "12px",
                    border: "1px solid #F4F4F5",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: "5px 5px",
                      width: "100%",
                      height: "204px",
                      backgroundColor: "white",
                      borderRadius: "12px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={video.thumbnail}
                      alt={video.title}
                      sx={{ width: "100%", height: "204px" }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      alignSelf: "stretch",
                      color: "#21272A",
                      fontSize: "20px",
                      fontFamily: "Jost-sb",
                      fontWeight: 500,
                      px: "10px",
                      lineHeight: "20px",
                    }}
                  >
                    {video.title}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};