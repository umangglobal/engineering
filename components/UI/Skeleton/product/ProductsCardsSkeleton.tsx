import { Grid, Skeleton } from "@mui/material";

export const ProductsCardsSkeleton = () => (
  <Grid container spacing={3}>
    {[...Array(4)].map((_, i) => (
      <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
        <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 1 }} />
        <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="60%" height={16} />
      </Grid>
    ))}
  </Grid>
);