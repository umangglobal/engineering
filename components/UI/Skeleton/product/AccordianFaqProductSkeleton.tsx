import { Box, Skeleton } from '@mui/material';

export const AccordianFaqProductSkeleton = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    {[...Array(3)].map((_, i) => (
      <Box key={i} sx={{ border: '1px solid #eee', borderRadius: 1, p: 2 }}>
        <Skeleton variant="text" width="60%" height={24} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton variant="text" width="80%" height={20} />
      </Box>
    ))}
  </Box>
);