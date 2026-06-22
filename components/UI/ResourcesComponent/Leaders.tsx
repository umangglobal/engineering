'use client'

import { Box, Typography, CardMedia, IconButton } from "@mui/material";
import { FC, SVGProps } from "react";
import FaceBookIcon from "@/assets/icons/Team/facebook-02.svg";
import LinkEdinIcon from "@/assets/icons/Team/linkedin-02.svg";
import XrectangleIcon from "@/assets/icons/Team/x-rectangle.svg";
import YouTubeIcon from "@/assets/icons/Team/youtube.svg";

// ---- Types ----
interface Social {
  iconKey: string;
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: Social[];
}

// ---- Icon map ----
const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  FaceBookIcon,
  LinkEdinIcon,
  XrectangleIcon,
  YouTubeIcon,
};

// ---- Static data ----
const teamMembers: TeamMember[] = [
  {
    name: "Umang Budhraja",
    role: "CEO and MD",
    image: "/assets/images/resources/umang-sir.png",
    bio: `"With forward-thinking leadership, Umang Budhraja has managed to take the company to newer heights of advanced developments in particle engineering and delivery systems in various segments of pharmaceuticals, personal care, and nutraceuticals. His commitment to innovation and sustainable practices has led to the development of encapsulation solutions that have come to be known for their reliability, consistency, and value for a long time.

He firmly believes in using advanced technology along with a people-centric approach to achieve meaningful innovation. Through his leadership, he has managed to create a culture that is based on quality, precision, and accountability. With a strong emphasis on scientific understanding being applied to innovation, he has managed to create solutions that not only impact brands but also lives around the world."`,
    socials: [
      { iconKey: "FaceBookIcon",   url: "https://www.facebook.com/umangglobalgrouppvtltd/" },
      { iconKey: "LinkEdinIcon",   url: "https://www.linkedin.com/in/umangbudhraja/"        },
      { iconKey: "XrectangleIcon", url: "https://x.com/UmangGlobalGrp"                      },
      { iconKey: "YouTubeIcon",    url: "https://www.youtube.com/@UmangGlobalGroup"          },
    ],
  },
  {
    name: "Dr. Nidhi Budhraja",
    role: "MD",
    image: "/assets/images/resources/nidhi-maam.png",
    bio: `"Nidhi Budhraja, the co-founder and one of the main strategic influencers behind the brand, is the epitome of expertise in the field of formulation science, combined with her deep understanding of the changing needs of the consumer. She is one of the main influencers behind the brand, using her expertise to ensure the application of advanced technology in the field of encapsulation to meet the needs of the ever-changing market scenario.

She is a strong believer in the power of collaboration and shared responsibility. She fosters a culture where innovation is fueled by curiosity, accountability, and the desire to learn. She believes in the importance of communication and the power of diverse perspectives to ensure the smooth flow of the product development process. She is the driving force behind the organization to ensure the creation of innovative solutions to shape the future of the personal care industry."`,
    socials: [
      { iconKey: "FaceBookIcon",   url: "https://www.nidhivan.org/ask_dr_nidhi.php" },
      { iconKey: "LinkEdinIcon",   url: "https://www.linkedin.com/in/dr-nidhi"      },
      { iconKey: "XrectangleIcon", url: "https://www.nidhivan.org/ask_dr_nidhi.php" },
      { iconKey: "YouTubeIcon",    url: "https://www.nidhivan.org/ask_dr_nidhi.php" },
    ],
  },
];

export const Leaders = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "24px",
      }}
    >
      {teamMembers.map((member, index) => (
        <Box
          key={index}
          sx={{
            width: "525px",
            display: "flex",
            flexDirection: "column",
            gap: "36px",
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative", display: "flex", justifyContent: "space-around" }}>
            <CardMedia
              component="img"
              src={member.image}
              alt={member.name}
              sx={{
                width: { xs: "90%", md: "525px" },
                height: { xs: "90%", md: "642px" },
                borderRadius: "36px",
                boxShadow: "0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
              }}
            />

            {/* Info Card */}
            <Box
              sx={{
                width: { xs: "85%", md: "493px" },
                height: { xs: "40%", md: "190px" },
                px: "36px",
                py: "24px",
                background: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.40)",
                borderRadius: "24px",
                backdropFilter: "blur(3.5px)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                position: "absolute",
                bottom: "13px",
              }}
            >
              <Box sx={{ width: { xs: "100%", md: "264px" }, display: "flex", flexDirection: "column", gap: "24px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <Typography sx={{ fontSize: "32px", fontFamily: "Jost", fontWeight: 500, color: "black" }}>
                    {member.name}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontFamily: "Jost", fontWeight: 500, color: "black" }}>
                    {member.role}
                  </Typography>
                </Box>

                {/* Social Icons */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  {member.socials.map((social, i) => {
                    const Icon = iconMap[social.iconKey];
                    return (
                      <IconButton
                        key={i}
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: "48px",
                          height: "48px",
                          bgcolor: "white",
                          boxShadow: "0px 2px 4px -2px rgba(0,0,0,0.10)",
                        }}
                      >
                        {Icon && <Icon style={{ width: 20, height: 20 }} />}
                      </IconButton>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Bio */}
          <Typography
            sx={{
              width: { xs: "90%", md: "486px" },
              fontSize: "16px",
              fontFamily: "Jost",
              fontWeight: 400,
              color: "black",
              whiteSpace: "pre-line",
              mb: 4,
            }}
          >
            {member.bio}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};