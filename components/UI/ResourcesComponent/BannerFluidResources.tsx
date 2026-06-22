import { Box } from "@mui/material";

// ---- Types ----
interface BannerFluidResourcesProps {
  imageName: string;
}

export const BannerFluidResources = ({ imageName }: BannerFluidResourcesProps) => {
  return (
    <Box
      component="img"
      src={`/assets/images/${imageName}`}
      alt="Banner"
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#DDE1E6",
      }}
    />
  );
};