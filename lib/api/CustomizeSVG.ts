// api/CustomizeSVG.ts
import { Beads } from "@/components/svg/Beads";
import { Capsule } from "@/components/svg/Capsule";
import { Gummy } from "@/components/svg/Gummy";
import { Sachet } from "@/components/svg/Sachet";

import { FC } from "react";

// ---- Types ----
export interface OverlayItem {
  svgId: string;
  svgViewBox: string;
  imgSrc: string;
  svgContent: FC<{ fillColor: string }>;
}

// ---- Data ----
export const overlayItems: OverlayItem[] = [
  {
    svgId: "Gummy",
    svgViewBox: "0 0 1280 896",
    imgSrc: "/assets/images/Gummy.jpg",
    svgContent: Gummy,
  },
  {
    svgId: "Capsule",
    svgViewBox: "0 0 1280 896",
    imgSrc: "/assets/images/Capsule.jpg",
    svgContent: Capsule,
  },
  {
    svgId: "Sachet",
    svgViewBox: "0 0 1280 896",
    imgSrc: "/assets/images/Sachet.jpg",
    svgContent: Sachet,
  },
  {
    svgId: "Beads",
    svgViewBox: "0 0 1280 896",
    imgSrc: "/assets/images/Beads.jpg",
    svgContent: Beads,
  },
];