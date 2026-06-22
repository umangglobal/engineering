'use client'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useMemo, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { BlogCardMain } from './BlogCardMain';
import { Blog } from '@/lib/api/ProductsPostApi';

// ---- Types ----
interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface BlogTabsProps {
  data: Blog[];
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// ---- Component ----
export const BlogTabs = ({ data }: BlogTabsProps) => {
  const blogsArray = useMemo(() => {
    if (Array.isArray(data)) return data;
    if (data && typeof data === 'object' && Array.isArray((data as any).data)) {
      return (data as any).data as Blog[];
    }
    return [];
  }, [data]);

  const [value, setValue] = useState(0);

  // Extract unique categories from g_category (comma-separated)
  const categories = useMemo(() => {
    const catSet = new Set<string>();
    blogsArray.forEach((blog) => {
      const category = blog.g_category as string | undefined;
      if (category) {
        category
          .split(',')
          .map((c) => c.trim())
          .filter(Boolean)
          .forEach((cat) => catSet.add(cat));
      }
    });
    return ['All', ...Array.from(catSet)];
  }, [blogsArray]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const selectedCategory = categories[value];

  const filteredBlogs = selectedCategory === 'All'
    ? blogsArray
    : blogsArray.filter((blog) => {
        const category = blog.g_category as string | undefined;
        if (!category) return false;
        const blogCats = category.split(',').map((c) => c.trim());
        return blogCats.includes(selectedCategory);
      });

  return (
    <Container>
      <Box sx={{ width: '100%', paddingTop: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="blog categories"
          >
            {categories.map((cat, index) => (
              <Tab key={cat} label={cat} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>

        {categories.map((_, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {filteredBlogs.length > 0 ? (
              <BlogCardMain blogs={filteredBlogs} />
            ) : (
              <Typography color="text.secondary" textAlign="center" py={4}>
                No blogs in this category.
              </Typography>
            )}
          </CustomTabPanel>
        ))}
      </Box>
    </Container>
  );
};