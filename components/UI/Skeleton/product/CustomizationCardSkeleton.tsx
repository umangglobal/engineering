import { Box, Skeleton, Typography } from '@mui/material';

export const CustomizationCardSkeleton = () => (
  <Box
    sx={{
      width: "100%",
      p: 3,
      background: "#fff",
      borderRadius: "22px",
      outline: "1px solid #B4B4B4",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}
  >
    <Skeleton variant="text" width="60%" height={32} />
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {[...Array(4)].map((_, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '45%' }}>
          <Skeleton variant="circular" width={24} height={24} />
          <Box>
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={120} height={16} />
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);