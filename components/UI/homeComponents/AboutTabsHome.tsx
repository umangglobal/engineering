'use client'

import { Tabs, Tab, Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import { FC, SVGProps } from "react";
import BubbleChatIcon from "@/assets/icons/Customization/bubble-chat.svg";
import BeforeClockIcon from "@/assets/icons/homepage/before-clock.svg";
import NaturalIcon from "@/assets/icons/homepage/Natural.svg";
import FactoryIndustryIcon from "@/assets/icons/homepage/Factory-Industry.svg";
import Link from "next/link";

interface TabData {
  label: string;
  content: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  img: string;
  imgAlt: string;
  url: string;
}

export const AboutTabsHome = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabData: TabData[] = [
    {
      label: "About Umang Engineering",
      content: `Umang Engineering is the engineering division of the Umang Global Group, specializing in engineering services for designing, developing, and manufacturing cutting-edge process equipment for the pharmaceutical, nutraceutical, food, chemical, and other related industries. Leveraging years of engineering expertise and innovation, our company manufactures high-quality machinery that enables seamless manufacturing processes.
                \n\n
                As part of the Umang Global Group, Umang Engineering has the distinct advantage of extensive experience across industries, including pharmaceuticals, nutraceuticals, personal care, home care, cosmetics, and many others. Such knowledge of the industry allows us to create products that meet the requirements of today’s production facilities.
                \n\n
                Umang Engineering works closely with our clients to understand their process needs, production challenges, and future plans. It helps us develop equipment that suits your business and improves efficiency in production and processes. Our extensive range comprises extruders, spheronizers, fluid-bed processors, granulators, coating and layering machines, oral thin-film manufacturing systems, and complete pelletization lines. With precision in design and a performance-driven approach, our offerings help manufacturers develop and manufacture products on a commercial scale.
                \n\n
                Umang Engineering believes in improving manufacturing technologies and providing industries with cutting-edge, precision-engineered products that increase their productivity and sustainability.`,
      icon: BubbleChatIcon,
      img: "abouthome.webp",
      imgAlt: "Umang Engineering division of Umang Global Group office space",
      url: "/about-us",
    },
    {
      label: "History: 43 Years of Expertise",
      content: `The origins of the Umang Global Group can be traced back to 1982, when the late Mr. Rajkumar Budhraja began its journey with the aim of innovating in pharmaceutical process machinery engineering. Developments in extrusion, spheronization, pelletizing, and advanced process engineering have created a solid foundation for future innovations.
      \n\n
      Over time, their expertise in process engineering and manufacturing technology evolved into the design and delivery of innovative equipment and integrated solutions for pharmaceuticals, nutraceuticals, food, chemicals, and related fields. With the guidance of Mr. Umang Budhraja, they changed themselves into a company named Umang Global Group Pvt. Ltd.
      \n\n
      Today, with a legacy spanning more than four decades, Umang Engineering is well-regarded for its range of high-end process equipment, including extruders, spheronizers, fluid beds, coating equipment, granulators, and manufacturing lines. Backed by decades of engineering excellence, we provide our customers worldwide with high-end solutions that are built for tomorrow.
      \n\n
      As a part of the Umang Global Group of companies, Umang Engineering is proud to be contributing to the Umang ecosystem, which comprises specialist companies such as Umang Nutraceuticals, Umang Pharmaceuticals, and Umang Particle Science.`,
      icon: BeforeClockIcon,
      img: "expertise.webp",
      imgAlt: "Founder of division of Umang Global Group Pvt Ltd",
      url: "/leadership-team",
    },
    {
      label: "Industries We Transform",
      content: `We at Umang Engineering work with various manufacturers from the pharmaceuticals, nutraceuticals, food, personal care, chemicals, and allied sectors to provide them with advanced process equipment and manufacturing solutions. With our engineering expertise, we help our clients optimize their processes to improve efficiency and achieve greater product consistency.
              \n\n
              A diverse set of manufacturing solutions, which include extrusion systems, spheronizers, fluid bed processing systems, granulators, pelletizing lines, coating systems, and oral thin film manufacturing solutions, allows us to cater to any production requirement, from R&D scale to commercial manufacturing scale.
              \n\n
              As a company, Umang Engineering relies on the unique process technologies that allow us to offer our clients industry-specific knowledge and manufacturing solutions.`,
      icon: FactoryIndustryIcon,
      img: "industries.webp",
      imgAlt: "industries into which we perform personal care, home care, cosmetics, pharmaceuticals, nutraceuticals, functional foods, and engineering.",
      url: "/our-other-brands",
    },
    {
      label: "Sustainable Innovation",
      content: `Innovation and efficiency are integral parts of the processes at Umang Engineering. As a company with years of engineering experience, we design and develop innovative process equipment to maximize efficiency and optimize processes. We provide our clients with equipment designed for consistency, reliability, and sustainability.`,
      icon: NaturalIcon,
      img: "sustainable.webp",
      imgAlt: "Using eco friendly materials develop smart, efficient, and eco-conscious solutions",
      url: "/sustainability",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 8,
          width: "100%",
          p: { xs: 2, md: "30px 42px" },
          background: "#C3E9ED",
          borderRadius: "36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            position: "relative",
            display: { xs: "flex", md: "block" },
            flexDirection: { xs: "column", md: "unset" },
            gap: { xs: 2, md: 0 },
          }}
        >
          {/* Tabs */}
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{
              width: { xs: "100%", md: "864px" },
              "& .MuiTab-root": {
                minHeight: "32px",
                px: { xs: 1, md: "16px" },
                py: "8px",
                mx: { xs: "4px", md: "2px" },
                borderBottom: "2px solid #C8C4C5",
                fontSize: { xs: "12px", md: "14px" },
                fontFamily: "Jost-sb",
                fontWeight: 500,
                color: "#7B7275",
                textTransform: "none",
                flexDirection: "row",
                gap: "6px",
              },
              "& .Mui-selected": {
                color: "#41939C !important",
                borderBottom: "3px solid #41939C",
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {tabData.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <Tab
                  key={index}
                  label={tab.label}
                  icon={<Icon style={{ width: "23px", height: "23px", marginLeft: "7px" }} />}
                  iconPosition="end"
                />
              );
            })}
          </Tabs>

          {/* Content + Image */}
          <Box
            sx={{
              mt: { xs: 2, md: "51px" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: "38px" },
              alignItems: { xs: "flex-start", md: "flex-start" },
            }}
          >
            {/* Tab Content */}
            <Box
              sx={{
                flex: 1,
                width: { xs: "100%", md: "650px" },
                height: { xs: "auto", md: "207px" },
                overflow: "auto",
              }}
            >
              <Typography
                sx={{
                  color: "#091610",
                  fontSize: { xs: "14px", md: "16px" },
                  fontFamily: "Jost",
                  fontWeight: 400,
                  lineHeight: "1.5",
                }}
              >
                {tabData[value].content}
                <br />
                <Typography
                  component="span"
                  sx={{
                    color: "#41939C",
                    fontSize: { xs: "14px", md: "18px" },
                    fontFamily: "Jost",
                    fontWeight: 500,
                    letterSpacing: { xs: "0.28px", md: "0.36px" },
                    cursor: "pointer",
                  }}
                >
                  <Link href={tabData[value].url}>read more...</Link>
                </Typography>
              </Typography>
            </Box>

            {/* Image */}
            <Box
              component="img"
              src={`/assets/images/home/${tabData[value].img}`}
              alt={tabData[value].imgAlt}
              loading="lazy"
              sx={{
                width: { xs: "100%", md: "386px" },
                height: { xs: "auto", md: "207px" },
                borderRadius: "24px",
                background: "#DDE1E6",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};