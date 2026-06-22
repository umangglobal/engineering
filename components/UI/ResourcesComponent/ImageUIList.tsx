import { Box } from "@mui/material";

// ---- Types ----
interface ImageUIListProps {
  images: string[];
}

function ImageUIList({ images }: ImageUIListProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-around",
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`Image ${index + 1}`}
          sx={{
            width: "525px",
            height: "414.6px",
            borderRadius: "36px",
            mb: 4,
            objectFit: "cover",
          }}
        />
      ))}
    </Box>
  );
}

export default ImageUIList;