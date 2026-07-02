'use client';

import { useState } from 'react';
import {
  Box,
  Chip,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

const technologies = [
  {
    label: 'Pelletization',
    title: 'Pelletization Solutions',
    description:
      'Complete systems including Extruders, Spheronizers, Fluid Bed Processors, Coaters and supporting technologies.',
    image: 'assets/images/solutions/pelletization-banner.webp',
    chips: [
      'Extruder',
      'Spheronizer',
      'Fluid Bed Processor',
      'Coating System',
    ],
  },
  {
    label: 'Granulation',
    title: 'Granulation Solutions',
    description:
      'High-shear, fluid bed and continuous granulation technologies for scalable manufacturing.',
    image: 'assets/images/solutions/granulation-banner.webp',
    chips: [
      'Rapid Mixer',
      'Fluid Bed',
      'Dry Granulation',
      'Continuous Processing',
    ],
  },
  {
    label: 'Oral Thin Film',
    title: 'Oral Thin Film Solutions',
    description:
      'Film casting, drying and winding solutions for oral thin film manufacturing.',
    image: 'assets/images/solutions/film-banner.webp',
    chips: [
      'Film Casting',
      'Drying',
      'Slitting',
      'Packaging',
    ],
  },
  {
    label: 'Extrusion',
    title: 'Extrusion Solutions',
    description:
      'Advanced extrusion technologies for pharmaceutical and nutraceutical applications.',
    image: 'assets/images/solutions/extrusion-banner.webp',
    chips: [
      'Twin Screw',
      'Hot Melt',
      'Continuous',
      'Scale-up',
    ],
  },
];

export default function SolutionsExplorer() {
  const [tab, setTab] = useState(0);

  const current = technologies[tab];

  return (
    <Box>
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={600}
        mb={5}
      >
        Explore Technologies
      </Typography>

      <Tabs
        value={tab}
        onChange={(e, value) => setTab(value)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {technologies.map((item) => (
          <Tab key={item.label} label={item.label} />
        ))}
      </Tabs>

      <Paper
        sx={{
          mt: 4,
          p: { xs: 3, md: 5 },
          borderRadius: 5,
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" mb={2}>
              {current.title}
            </Typography>

            <Typography mb={3}>
              {current.description}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
            >
              {current.chips.map((chip) => (
                <Chip
                  key={chip}
                  label={chip}
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={current.image}
              alt={current.title}
              sx={{
                width: '100%',
                borderRadius: 4,
                objectFit: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}