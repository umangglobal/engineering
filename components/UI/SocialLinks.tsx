import { Box } from "@mui/material";
import { socialLinks } from "../../lib/api/SocialLinks";

export const SocialLinks = () => {
  return (
    <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
      {socialLinks.map((item, index) => (
        <a 
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block" }}
        >
          <Box
            component="img"
            src={`/assets/images/icons/socialmedia/${item.icon}`}
            alt={item.name}
            sx={{
              width: 32,
              height: 32,
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
          />
        </a>
      ))}
    </Box>
  );
};