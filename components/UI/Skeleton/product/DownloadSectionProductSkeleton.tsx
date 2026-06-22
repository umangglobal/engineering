import { Box, Skeleton } from '@mui/material';

export const DownloadSectionProductSkeleton = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    {[...Array(2)].map((_, i) => (
      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Skeleton variant="circular" width={24} height={24} />
        <Skeleton variant="text" width="200px" height={20} />
      </Box>
    ))}
  </Box>
);