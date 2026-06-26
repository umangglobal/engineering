'use client'

import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import { videos } from "@/lib/api/VideoApi";
import { createVideoSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import { useMemo } from "react";

// ---- Types ----
interface VideoSingleCardProps {
  videoSlug: string;
}

export const VideoSingleCard = ({ videoSlug }: VideoSingleCardProps) => {
  const video = videos.find((v) => v.videoSlug === videoSlug);

  // Shuffle related videos once on mount
  const randomVideos = useMemo(() => {
    if (!video) return [];
    return videos
      .filter((v) => v.id !== video.id)
      .map((v) => ({ v, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ v }) => v)
      .slice(0, 5);
  }, [video]);

  if (!video) {
    return (
      <Container>
        <Typography variant="h5" color="error" sx={{ mt: 4 }}>
          Video not found
        </Typography>
      </Container>
    );
  }

  const videoSchema = createVideoSchema({
    title: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    embedUrl: video.url,
    uploadDate: video.isoDate,
    publisherName: "Umang Engineering",
  });

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          justifyContent: "space-around",
        }}
      >
        {/* Main Video */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 75%" }, maxWidth: { md: "60%", lg: "75%" } }}>
          <Box sx={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <iframe
              width="100%"
              height="480"
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>

          <Typography variant="h5" sx={{ mt: 2, fontWeight: 600, color: "#21272A" }}>
            {video.title}
          </Typography>

          <Typography variant="caption" sx={{ display: "block", mt: 1, color: "#888" }}>
            {video.views} views • Uploaded on {video.date}
          </Typography>

          <Typography variant="body1" sx={{ mt: 1, color: "#555", lineHeight: 1.6 }}>
            {video.description}
          </Typography>
        </Box>

        {/* Related Videos Sidebar */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 25%" }, maxWidth: { md: "40%", lg: "25%" } }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Related Videos
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {randomVideos.map((rv) => (
              <Card
                key={rv.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "12px",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <Link
                  href={`/videos-single/${rv.videoSlug}`}
                  style={{ textDecoration: "none", color: "inherit", display: "flex" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component="img"
                      src={rv.thumbnail}
                      alt={rv.title}
                      sx={{ width: "140px", height: "90px", flexShrink: 0 }}
                    />
                    <CardContent sx={{ p: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, lineHeight: "1.4em", maxHeight: "2.8em", overflow: "hidden" }}
                      >
                        {rv.title}
                      </Typography>
                    </CardContent>
                  </Box>
                </Link>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};