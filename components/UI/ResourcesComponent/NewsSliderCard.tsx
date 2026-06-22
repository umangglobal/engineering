import { Box, Typography, Avatar, Chip, Stack } from "@mui/material";
import { NewsExhibition } from "@/lib/api/ProductsPostApi";

// ---- Types ----
interface NewsSliderCardProps {
  data: NewsExhibition;
}

export const NewsSliderCard = ({ data }: NewsSliderCardProps) => {
  const neBanner   = data.ne_banner      as string;
  const neTitle    = data.ne_title       as string;
  const neMetaDesc = data.ne_meta_desc   as string;
  const neAuthor   = data.ne_author      as string | undefined;
  const neDate     = data.ne_date        as string;
  const neCategory = data.ne_category   as string | undefined;

  return (
    <Box
      sx={{
        width: "100%",
        height: 462,
        borderRadius: "20px",
        backgroundImage: `url(/assets/images/exhibitions_news/${neBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        mx: "auto",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          p: 4,
          pt: 6,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 80%)",
          color: "#fff",
        }}
      >
        {/* Title */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, fontSize: "28px" }}>
          {neTitle}
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 3, maxWidth: "85%" }}>
          {neMetaDesc}
        </Typography>

        {/* Meta Info */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 6 }} sx={{ mb: 2 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" fontWeight={500}>Written By</Typography>
            <Avatar sx={{ width: 24, height: 24, bgcolor: "#cccccca1" }}>
              {neAuthor?.charAt(0)?.toUpperCase() ?? "?"}
            </Avatar>
            <Typography variant="body2">{neAuthor}</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" fontWeight={500}>Published on</Typography>
            <Typography variant="body2">
              {new Date(neDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </Stack>
        </Stack>

        {/* Tags */}
        <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
          <Typography variant="body2" fontWeight={500} sx={{ mt: "8px !important" }}>
            Tags
          </Typography>
          {neCategory
            ?.split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
            .map((tag, idx) => (
              <Chip
                key={idx}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  borderRadius: "16px",
                  mr: 0.5,
                  mb: 0.5,
                }}
              />
            ))}
        </Stack>
      </Box>
    </Box>
  );
};