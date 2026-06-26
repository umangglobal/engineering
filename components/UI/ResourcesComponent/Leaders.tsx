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
    bio: `"Through his futuristic vision and leadership, Umang Budhraja has propelled the company to new levels of development in machinery, delivery systems, and process engineering technologies across the pharmaceutical, personal care, and nutraceutical sectors, among others. His vision and belief in innovation and sustainability have led to the development of engineering solutions and systems that are reliable, consistent, precise, and valuable over time.

He always believes in leveraging technology along with a people-oriented approach to drive innovation. As a result of his leadership, he has created an environment of quality, precision, responsibility, and engineering excellence. Through his vision and belief in innovation powered by science and technology, he has driven innovation that influences not only brands and manufacturing but also the lives of people around the world."`,
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
    bio: `"Nidhi Budhraja, Co-Founder and one of the major visionary strategists at the organization, is highly experienced in the areas of formulation sciences, innovations in products, and market-driven development. Understanding the changing trends and requirements in the industry, she is instrumental in the successful implementation of innovative technologies to cater to the dynamic market demands.

She has a firm belief in the importance of teamwork, shared responsibilities, and continuous learning. She drives teams through her culture of curiosity, innovation, and accountability, allowing them to push boundaries and perform to their highest potential. Through her leadership and direction, she ensures smooth development processes and collaboration.

As an innovator, Nidhi Budhraja has been instrumental in developing innovative solutions which add value to the customers and improve industry standards."`,
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
                          width: "45px",
                          height: "45px",
                          bgcolor: "white",
                          boxShadow: "0px 2px 4px -2px rgba(0,0,0,0.10)",
                        }}
                      >
                        {Icon && <Icon style={{ width: 23, height: 23 }} />}
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