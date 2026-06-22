import { Box, Skeleton, Button, Typography } from '@mui/material';

export const ProductInfoSkeleton = () => (
  <Box>
    <Skeleton variant="text" width="70%" height={48} sx={{ fontSize: '2.5rem', mb: 1 }} />
    <Skeleton variant="text" width="50%" height={32} sx={{ fontSize: '1.5rem', mb: 2 }} />
    <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
    <Skeleton variant="text" width="90%" height={20} sx={{ mb: 1 }} />
    <Skeleton variant="text" width="80%" height={20} sx={{ mb: 3 }} />

    <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
      <Skeleton variant="rectangular" height={46} sx={{ flex: 1, borderRadius: '26px' }} />
      <Skeleton variant="rectangular" height={46} sx={{ flex: 1, borderRadius: '26px' }} />
    </Box>
  </Box>
);