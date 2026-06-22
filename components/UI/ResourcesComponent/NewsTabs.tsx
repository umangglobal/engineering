'use client'

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useMemo, useState } from "react";
import { Container, Typography } from "@mui/material";
import { NewsCardMain } from "./NewsCardMain";
import { NewsExhibition } from "@/lib/api/ProductsPostApi";

// ---- Types ----
interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface NewsTabsProps {
  data: NewsExhibition[];
}

// ---- Helpers ----
function CustomTabPanel({ children, value, index, ...other }: CustomTabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// ---- Component ----
export const NewsTabs = ({ data }: NewsTabsProps) => {
  const newsArray = useMemo(() => {
    if (Array.isArray(data)) return data;
    if (data && typeof data === "object" && Array.isArray((data as any).data)) {
      return (data as any).data as NewsExhibition[];
    }
    return [];
  }, [data]);

  const [value, setValue] = useState(0);

  const categories = useMemo(() => {
    const catSet = new Set<string>();
    newsArray.forEach((news) => {
      const category = news.ne_category as string | undefined;
      if (category) {
        category
          .split(",")
          .map((c) => c.trim())
          .filter(Boolean)
          .forEach((cat) => catSet.add(cat));
      }
    });
    return ["All", ...Array.from(catSet)];
  }, [newsArray]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const selectedCategory = categories[value];

  const filteredNews = selectedCategory === "All"
    ? newsArray
    : newsArray.filter((news) => {
        const category = news.ne_category as string | undefined;
        if (!category) return false;
        return category.split(",").map((c) => c.trim()).includes(selectedCategory);
      });

  return (
    <Container>
      <Box sx={{ width: "100%", paddingTop: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="news categories">
            {categories.map((cat, index) => (
              <Tab key={cat} label={cat} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>

        {categories.map((_, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {filteredNews.length > 0 ? (
              <NewsCardMain news={filteredNews} />
            ) : (
              <Typography color="text.secondary" textAlign="center" py={4}>
                No news in this category.
              </Typography>
            )}
          </CustomTabPanel>
        ))}
      </Box>
    </Container>
  );
};