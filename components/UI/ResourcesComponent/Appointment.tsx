import Box from "@mui/material/Box";
import Script from "next/script";

export default function Appointment() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffff",
          py: 4,
        }}
      >
        <Box
          className="calendly-inline-widget"
          data-url="https://calendly.com/umangglobalgrouppvtltd/web-calender"
          sx={{
            minWidth: 320,
            height: 700,
          }}
        />
      </Box>
    </>
  );
}