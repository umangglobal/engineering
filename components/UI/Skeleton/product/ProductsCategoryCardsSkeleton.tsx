import { Box, Grid, Skeleton } from "@mui/material";

interface ProductsCategoryCardsSkeletonProps {
  count?: number;
}

export const ProductsCategoryCardsSkeleton = ({
  count = 12,
}: ProductsCategoryCardsSkeletonProps) => {
  return (
    <Grid container spacing={3} justifyContent="flex-start">
      {Array.from({ length: count }).map((_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
          <Box sx={{ width: 340, maxWidth: "100%" }}>
            <Skeleton
              variant="rectangular"
              height={220}
              sx={{ borderRadius: 2, mb: 1, width: "100%" }}
            />
            <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="60%" height={16} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};