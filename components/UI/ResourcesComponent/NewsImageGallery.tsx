'use client'

import { useState } from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// ---- Types ----
interface NewsImageGalleryProps {
  ne_images: string;
  ne_images_alt: string;
}

const NewsImageGallery = ({ ne_images, ne_images_alt }: NewsImageGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Parse images and alts
  const imageList = ne_images
    ? ne_images.split(",").map((img) => img.trim()).filter(Boolean)
    : [];

  const altList = ne_images_alt
    ? ne_images_alt.split(",").map((alt) => alt.trim()).filter((_, i) => !!imageList[i])
    : [];

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % imageList.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);

  if (imageList.length === 0) return null;

  return (
    <>
      {/* Thumbnail Grid */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {imageList.map((imageName, index) => (
          <Box
            key={index}
            component="img"
            src={`/assets/images/exhibitions_news/${imageName}`}
            alt={altList[index] || `Image ${index + 1}`}
            onClick={() => handleImageClick(index)}
            sx={{
              width: { xs: "100%", md: "350px" },
              height: { xs: "auto", md: "250px" },
              borderRadius: "12px",
              m: "10px",
              objectFit: "cover",
              cursor: "pointer",
              alignContent: "center",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.02)" },
            }}
          />
        ))}
      </Box>

      {/* Lightbox Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.9)",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            outline: "none",
            maxWidth: "90vw",
            maxHeight: "90vh",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Current Image */}
          <Box
            component="img"
            src={`/assets/images/exhibitions_news/${imageList[currentIndex]}`}
            alt={altList[currentIndex] || `Gallery image ${currentIndex + 1}`}
            sx={{
              maxWidth: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />

          {/* Navigation Arrows */}
          {imageList.length > 1 && (
            <>
              <Box
                onClick={goToPrev}
                sx={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  fontSize: "2rem",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                ❮
              </Box>
              <Box
                onClick={goToNext}
                sx={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  fontSize: "2rem",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                ❯
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default NewsImageGallery;