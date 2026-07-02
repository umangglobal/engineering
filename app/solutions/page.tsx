
import { Box, Button, Container, Typography, Grid, Card, CardContent, CardMedia, Stack, Paper, Chip, Tabs, Tab } from "@mui/material";
import { BannerCommon } from "@/components/UI/BannerCommon";
import { createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import Link from "next/link";
import type { Metadata } from "next";
import SolutionsExplorer from "@/components/UI/ResourcesComponent/SolutionsExplorer";
import { url } from "inspector";


const solutions = [
{
title: 'Pelletization',
image: 'assets/images/solutions/pelletization.webp',
description: 'Complete pelletization solutions from laboratory scale to commercial production.',
url: '/pelletization-and-spheronization-systems',
},
{
title: 'Granulation',
image: 'assets/images/solutions/granulation.webp',
description: 'Efficient granulation systems for pharmaceutical and nutraceutical applications.',
url: '/granulation-systems',
},
{
title: 'Oral Thin Film',
image: 'assets/images/solutions/film.webp',
description: 'End-to-end oral thin film development and manufacturing solutions.',
url: '/film-processing',
},
{
title: 'Extrusion',
image: 'assets/images/solutions/extrusion.webp',
description: 'Advanced extrusion technologies for optimized production.',
url: '/extrusion-systems',
},
];

// ---- Static data ----
const BreadcrumbsUrls = [
  { title: "Home",         url: "/"              },
  { title: "Resources",    url: "/resources"     },
  { title: "Company",      url: "/company"       },
];

const WhitePapersPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    OrganizationSchema,
    createBreadcrumbSchema(BreadcrumbsUrls),
  ],
};

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Engineering Solutions | Umang Engineering",
  description: "Advanced engineering solutions for pharmaceutical, nutraceutical, food and chemical industries.",
  alternates: {
    canonical: "https://www.umangengineering.com/solutions",
  },
};

// ---- Page ----
export default function Solutions() {

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WhitePapersPageSchema) }}
      />

      <BannerCommon
        BreadcrumbsUrls={BreadcrumbsUrls}
        BreadcrumbsCurrent="Solutions"
        BannerImg="resources/WhitePapers-banner.png"
        BannerHeading="Solutions"
        BannerCaption="Engineering Solutions"
      />

        {/* SOLUTION CARDS */}
  <Container maxWidth="xl" sx={{ py: 10 }}>
    <Typography
      variant="h3"
      textAlign="center"
      fontWeight={600}
      mb={6}
    >
      Our Solutions
    </Typography>

    <Grid container spacing={4}>
      {solutions.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
          <Link href={`products${item.url}`}>
          <Card
            sx={{
              borderRadius: 5,
              height: '100%',
              transition: '.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
              },
            }}
          >
            <CardMedia
              component="img"
              image={item.image}
              height="250"
            />

            <CardContent>
              <Typography variant="h6" fontWeight={600}>
                {item.title}
              </Typography>

              <Typography mt={1}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Container>

        {/* WHY UMANG */}
  <Box sx={{ bgcolor: '#41939C21', py: 10 }}>
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={600}
        mb={6}
      >
        Why Umang Engineering
      </Typography>
      <Typography
  sx={{
    fontSize: '1.1rem',
    opacity: 0.9,
    mb: 4,
    whiteSpace: 'pre-line',
    fontFamily: 'Jost',
  }}
>
{`UMANG Global equipment excels at producing pharmaceuticals in solid dosage forms. Generate free-flowing granular products or pelletize powders, before processing.

Condition powders prior to encapsulation or tableting with our Die roller or Cone / Axial / Radial extruder equipment. With application testing, we'll help you determine the best machines, in the optimal configurations, for your specific process needs.

Test facilities at our headquarters feature a broad selection of lab and production equipment. We use our machinery and expertise to assist you with proof-of-concept testing and arrive at the best process solutions to meet your unique needs.

We also provide training for customers' operations and maintenance crews, to ensure your employees' knowledge and understanding of the Umang Global machinery you've invested in.`}
</Typography>

      <Grid container spacing={4}>
        {[
          'Pharmaceuticals- Umang Global® equipment excels at producing pharmaceuticals in solid dosage forms. Generate free-flowing granular products or pelletize powders, before processing. ',
          'Food- Our Extruder and spheronizers series of pelletizers emphasize ease of operation, and feature simple-to-clean stainless steel construction.',
          'Chemicals- The chemical industry has come to expect excellent results from UMANG GLOBAL For decades, we’ve helped the chemical industry by modifying existing machinery or creating new, special-purpose machines or parts so clients can more.',
          'If you are interested in more information about any of our services — including our particle processing solutions, our operations/maintenance training, and/or our expert application testing — please visit our “Request a Quote” page and fill out the brief form.',
        ].map((item) => (
          <Grid size={{ xs: 4, md: 3 }} key={item}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 4,
                height: '100%',
              }}
            >
              <Typography fontWeight={600}>
                {item}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>



  {/* PROCESS TIMELINE */}
  <Box sx={{ bgcolor: '#fafafa', py: 10 }}>
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={600}
        mb={8}
      >
        How We Work
      </Typography>

      <Grid container spacing={4}>
        {[
          'Application Review',
          'Lab Trials',
          'Optimization',
          'Pilot Validation',
          'Production',
        ].map((step, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={step}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 4,
                bgcolor: '#fff',
              }}
            >
              <Typography
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  bgcolor: '#41939c',
                  color: '#fff',
                  mx: 'auto',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {index + 1}
              </Typography>

              <Typography fontWeight={600}>
                {step}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>

  {/* SOLUTION EXPLORER */}


   <Container maxWidth="xl" sx={{ py: 10 }}>
  <SolutionsExplorer />
    </Container>

    {/* HERO */}
  <Box
    sx={{
      minHeight: '80vh',
      backgroundImage:
        'linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(assets/images/solutions/hero.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Container maxWidth="xl">
      <Box maxWidth={700}>
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            fontWeight: 700,
            mb: 2,
            fontSize: {
              xs: '2.5rem',
              md: '4rem',
            },
          }}
        >
          Engineering Solutions For Modern Manufacturing
        </Typography>

        <Typography
          sx={{
            color: '#fff',
            fontSize: '1.1rem',
            opacity: 0.9,
            mb: 4,
          }}
        >
          Helping pharmaceutical, nutraceutical, food and chemical
          manufacturers scale efficiently with innovative processing
          technologies.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link href="/contact-us">
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#41939c',
              borderRadius: '40px',
            }}
          >
            Request Consultation
          </Button>
          </Link>
          <Link href="/contact-us">
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              borderRadius: '40px',
            }}
          >
            Explore Solutions
          </Button>
          </Link>
        </Stack>
      </Box>
    </Container>
  </Box>




  {/* CTA */}
  <Container maxWidth="lg" sx={{ py: 10 }}>
    <Paper
      sx={{
        p: 8,
        borderRadius: 6,
        textAlign: 'center',
        background:
          'linear-gradient(135deg,#41939c 0%, #41939c 100%)',
        color: '#fff',
      }}
    >
      <Typography variant="h3" mb={2}>
        Need Help Choosing The Right Process?
      </Typography>

      <Typography mb={4}>
        Speak with our specialists and discover the ideal
        equipment configuration for your application.
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        justifyContent="center"
      >
        <Link href="https://api.whatsapp.com/send?text=Hello&amp;phone=919518349134">
        <Button
          variant="contained"
          sx={{
            bgcolor: '#fff',
            color: '#41939c',
          }}
        >
          Speak With Expert
        </Button>
        </Link>
        <Link href="/contact-us">
        <Button
          variant="outlined"
          sx={{
            color: '#fff',
            borderColor: '#fff',
          }}
        >
          Request Trial
        </Button>
        </Link>
      </Stack>
    </Paper>
  </Container>
    </>
  );
}