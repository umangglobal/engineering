import { Box, Skeleton } from '@mui/material';

export const ProductThumbnailSliderSkeleton = () => (
  <Box sx={{ width: '100%'}}>
    <Skeleton
      variant="rectangular"
      height={400}
      sx={{ borderRadius: 2, mb: 1 }}
    />
    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} variant="rectangular" height={60} width={60} sx={{ borderRadius: 1 }} />
      ))}
    </Box>
  </Box>
);