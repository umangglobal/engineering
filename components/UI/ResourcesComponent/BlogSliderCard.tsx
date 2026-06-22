import { Box, Typography, Avatar, Chip, Stack } from '@mui/material';
import { Blog } from '@/lib/api/ProductsPostApi';

// ---- Types ----
interface BlogSliderCardProps {
  data: Blog;
}

export const BlogSliderCard = ({ data }: BlogSliderCardProps) => {
  const blogImg      = data.g_img      as string;
  const blogTitle    = data.g_title    as string;
  const blogDesc     = data.g_meta_description as string;
  const blogAuthor   = data.g_author   as string | undefined;
  const blogDate     = data.g_date     as string;
  const blogCategory = data.g_category as string | undefined;

  return (
    <Box
      sx={{
        width: '100%',
        height: 462,
        borderRadius: '20px',
        backgroundImage: `url(/assets/images/blogs/${blogImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        mx: 'auto',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          p: 4,
          pt: 6,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 80%)',
          color: '#fff',
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 1, fontSize: '28px' }}
        >
          {blogTitle}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{ opacity: 0.8, mb: 3, maxWidth: '85%' }}
        >
          {blogDesc}
        </Typography>

        {/* Meta Info */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 6 }}
          sx={{ mb: 2 }}
        >
          {/* Author */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" fontWeight={500}>
              Written By
            </Typography>
            <Avatar sx={{ width: 24, height: 24, bgcolor: "#cccccca1" }}>
              {blogAuthor?.charAt(0)?.toUpperCase() || '?'}
            </Avatar>
            <Typography variant="body2">{blogAuthor}</Typography>
          </Stack>

          {/* Published Date */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" fontWeight={500}>
              Published on
            </Typography>
            <Typography variant="body2">
              {new Date(blogDate).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </Typography>
          </Stack>
        </Stack>

        {/* Tags */}
        <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
          <Typography variant="body2" fontWeight={500} sx={{ mt: "8px !important" }}>
            Tags
          </Typography>
          {blogCategory
            ?.split(',')
            .map((tag) => tag.trim())
            .filter(Boolean)
            .map((tag, idx) => (
              <Chip
                key={idx}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: '#fff',
                  borderRadius: '16px',
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