'use client'

import { useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";


// ---- Types ----
interface Image {
  url: string;
  alt: string;
}

interface ProductThumbnailSliderProps {
  images: Image[];
}

export const ProductThumbnailSlider = ({ images }: ProductThumbnailSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box>
      {/* Main Image Swiper */}
      <Swiper
        style={{ width: "100%", height: "100%", borderRadius: "12px" }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/${img.url}`}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        modules={[Thumbs]}
        style={{ marginTop: "16px" }}
        allowSlideNext={false}
        allowSlidePrev={false}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: "95%",
                height: { xs: "75px", md: "100px" },
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                border: activeIndex === index ? "3px solid #41939C" : "2px solid transparent",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: activeIndex === index ? "#41939C" : "#999",
                },
              }}
            >
              <img
                src={`/${img.url}`}
                alt={`Thumbnail ${index + 1} of ${images.length}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};