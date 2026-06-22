import { Box, Skeleton, Tabs, Tab } from '@mui/material';

export const ProductTabsSkeleton = () => (
  <Box>
    <Tabs value={0} sx={{ mb: 2 }}>
      {[...Array(4)].map((_, i) => (
        <Tab key={i} label={<Skeleton variant="text" width={80} />} />
      ))}
    </Tabs>
    <Box sx={{ p: 3, border: '1px solid #eee', borderRadius: 2 }}>
      <Skeleton variant="rectangular" height={200} sx={{ mb: 2, borderRadius: 1 }} />
      <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="90%" height={20} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="70%" height={20} />
    </Box>
  </Box>
);