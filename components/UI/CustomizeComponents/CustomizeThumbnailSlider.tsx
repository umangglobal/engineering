'use client'

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";
import { OverlayItem } from "@/lib/api/CustomizeSVG";

// ---- Types ----
interface StyleEntry {
  svgStyle: React.CSSProperties;
  imgStyle: React.CSSProperties;
}

interface CustomizeThumbnailSliderProps {
  fillColor: string;
  setFillColor: (color: string) => void;
  overlayItems: OverlayItem[];
}

// ---- Constants ----
const baseWidth = 1920;
const baseHeight = 1280;
const yRatio = baseWidth / baseHeight;
const xRatio = baseHeight / baseWidth;

const baseSvgStyle: React.CSSProperties = {
  display: "block",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, 1.5%)",
  zIndex: 1,
};

const baseImgStyle: React.CSSProperties = {
  display: "block",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: -1,
};

export const CustomizeThumbnailSlider = ({
  fillColor,
  setFillColor,
  overlayItems,
}: CustomizeThumbnailSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [styleMap, setStyleMap] = useState<Record<number, StyleEntry>>({});
  const [cactiveIndex, setCActiveIndex] = useState(0);

  useEffect(() => {
    const simulateCover = () => {
      const containers = document.querySelectorAll<HTMLElement>(".container");
      if (!containers.length) return;

      const updatedStyles: Record<number, StyleEntry> = {};

      containers.forEach((container, index) => {
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        let svgStyle: React.CSSProperties = { ...baseSvgStyle };
        let imgStyle: React.CSSProperties = { ...baseImgStyle };

        if (width < height * yRatio) {
          const newWidth = height * yRatio;
          svgStyle = { ...svgStyle, width: `${newWidth}px`, height: `${height}px` };
          imgStyle = { ...imgStyle, width: `${newWidth}px`, height: `auto` };
        } else {
          const newHeight = width * xRatio;
          svgStyle = { ...svgStyle, width: `${width}px`, height: `${newHeight}px` };
          imgStyle = { ...imgStyle, width: `${width}px`, height: `${width * (xRatio - 0.1)}px` };
        }

        updatedStyles[index] = { svgStyle, imgStyle };
      });

      setStyleMap(updatedStyles);
    };

    window.addEventListener("resize", simulateCover);
    simulateCover();
    return () => window.removeEventListener("resize", simulateCover);
  }, []);

  return (
    <Box>
      {/* Main Swiper */}
      <Swiper
        style={{ width: "100%", height: "450px", borderRadius: "12px" }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        onSlideChange={(swiper) => setCActiveIndex(swiper.realIndex)}
      >
        {overlayItems.map((item, index) => {
          const SvgMain = item.svgContent;
          return (
            <SwiperSlide key={index}>
              <div
                className="container"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <svg
                  id={item.svgId}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={item.svgViewBox}
                  style={styleMap[index]?.svgStyle ?? baseSvgStyle}
                >
                  <SvgMain fillColor={fillColor} />
                </svg>

                <img
                  src={item.imgSrc}
                  alt="Background"
                  style={styleMap[index]?.imgStyle ?? baseImgStyle}
                />
              </div>
            </SwiperSlide>
          );
        })}
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
        {overlayItems.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.imgSrc}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "95%",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
                border: cactiveIndex === index
                  ? "2px solid #41939C"
                  : "2px solid transparent",
                transition: "border-color 0.3s ease",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};