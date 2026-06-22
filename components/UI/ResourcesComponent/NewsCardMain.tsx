'use client'

import {
  Box, Card, CardMedia, Typography,
  Avatar, Chip, Grid, Container,
} from "@mui/material";
import Link from "next/link";
import { NewsExhibition } from "@/lib/api/ProductsPostApi";

// ---- Types ----
interface NewsCardMainProps {
  news: NewsExhibition[];
}

export const NewsCardMain = ({ news = [] }: NewsCardMainProps) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 2 }}>
      <Grid container spacing={3}>
        {news.slice().reverse().map((newz) => {
          const neId       = newz.ne_id       as string | number;
          const neSlug     = newz.ne_slug     as string;
          const neBanner   = newz.ne_banner   as string;
          const neAlt      = newz.ne_images_alt as string | undefined;
          const neTitle    = newz.ne_title    as string;
          const neMetaDesc = newz.ne_meta_desc as string;
          const neAuthor   = newz.ne_author   as string | undefined;
          const neDate     = newz.ne_date     as string;
          const neCategory = newz.ne_category as string | undefined;

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={String(neId)}>
              <Card
                component={Link}
                href={`/news-exhibitions/${neSlug}`}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  width: { xs: "312px", md: "330px" },
                  height: "100%",
                  p: 2,
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* Image */}
                <Box sx={{ height: 204, borderRadius: "16px", overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    image={`/assets/images/exhibitions_news/${neBanner}`}
                    alt={neAlt ?? neTitle}
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </Box>

                {/* Category Tags */}
                {neCategory && (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {neCategory
                      .split(",")
                      .map((cat) => cat.trim())
                      .filter(Boolean)
                      .map((cat, idx) => (
                        <Chip
                          key={idx}
                          label={cat}
                          variant="outlined"
                          sx={{
                            height: 28,
                            fontSize: 12,
                            fontFamily: "Jost",
                            borderRadius: "15px",
                            color: "#7B7275",
                            borderColor: "#C8C4C5",
                            px: "8px",
                          }}
                        />
                      ))}
                  </Box>
                )}

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    fontFamily: "Jost",
                    lineHeight: "24px",
                    color: "#21272A",
                    minHeight: "48px",
                  }}
                >
                  {neTitle}
                </Typography>

                {/* Description */}
                <Typography sx={{ fontSize: 14, fontFamily: "Jost", color: "#6A8076" }}>
                  {neMetaDesc}
                </Typography>

                {/* Author & Date */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mt: "auto" }}>
                  <Avatar sx={{ width: 40, height: 40, bgcolor: "#cccccca1" }}>
                    {neAuthor?.charAt(0)?.toUpperCase() ?? "?"}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: "Jost", color: "#091610" }}>
                      {neAuthor}
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontFamily: "Jost", color: "#6A8076" }}>
                      {new Date(neDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};