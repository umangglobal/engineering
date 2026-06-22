'use client'

import { Box } from "@mui/material";
import { useState, useEffect } from "react";

// ---- Types ----
interface ColorPickerButtonProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPickerButton = ({ color, onChange }: ColorPickerButtonProps) => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > scrollHeight / 3 && scrollTop > lastScroll) {
        setVisible(false);
      } else if (scrollTop < lastScroll) {
        setVisible(true);
      }

      setLastScroll(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <label style={{ position: "relative", display: "inline-block" }}>
      <Box
        sx={{
          position: { xs: "fixed", md: "relative" },
          bottom: { xs: 16, md: "auto" },
          left: { xs: 16, md: "auto" },
          zIndex: { xs: 1300, md: "auto" },
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(100px)",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <input
          id="custom-color-picker"
          type="color"
          value={color}
          onChange={handleColorChange}
          style={{
            position: "absolute",
            opacity: 0,
            width: 26,
            height: 26,
            cursor: "pointer",
          }}
        />

        <Box
          sx={{
            width: { xs: 40, md: 30 },
            height: { xs: 40, md: 30 },
            borderRadius: "50%",
            border: "3px dashed black",
            background: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            const input = document.querySelector<HTMLInputElement>("#custom-color-picker");
            if (input) input.click();
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: "7px", md: "0px" },
              fontSize: 16,
              fontWeight: "bold",
              color: "black",
            }}
          >
            +
          </Box>
        </Box>
      </Box>
    </label>
  );
};

export default ColorPickerButton;