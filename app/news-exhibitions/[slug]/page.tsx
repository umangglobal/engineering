// app/news-exhibitions/[slug]/page.tsx

import { Box, Typography, Container, Chip, Divider } from "@mui/material";
import { Breadcrumb } from "@/components/UI/Breadcrumb";
import { RecentBlogsCards } from "@/components/UI/ResourcesComponent/RecentBlogsCards";
import { BannerBottomText } from "@/components/UI/ResourcesComponent/BannerBottomText";
import { createArticleSchema, createBreadcrumbSchema, OrganizationSchema } from "@/lib/api/SeoSchemas";
import { fetchNewsExhibitionsDescription } from "@/lib/api/ProductsPostApi";
import NewsImageGallery from "@/components/UI/ResourcesComponent/NewsImageGallery";
import { NewsSliderCard } from "@/components/UI/ResourcesComponent/NewsSliderCard";
import type { Metadata } from "next";

// ---- Types ----
interface Props {
  params: Promise<{ slug: string }>;
}

// ---- Dynamic Metadata ----
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchNewsExhibitionsDescription(slug);

  return {
    title: (data?.ne_title as string) ?? "News & Exhibitions | Umang Nutraceuticals",
    description: (data?.ne_meta_desc as string) ?? "Keep up with the latest in Nutra!",
    alternates: {
      canonical: `https://www.umangnutraceuticals.com/news-exhibitions/${slug}`,
    },
  };
}

// ---- Page ----
export default async function NewsExhibitionsPage({ params }: Props) {
  const { slug } = await params;
  const data = await fetchNewsExhibitionsDescription(slug);

  // --- Error State ---
  if (!data) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="error" fontWeight={500}>
          Error fetching news or exhibitions. Please try again later.
        </Typography>
      </Box>
    );
  }

  // ---- Data preparation ----
  const neTitle      = data.ne_title       as string;
  const neSlug       = data.ne_slug        as string;
  const neBanner     = data.ne_banner      as string;
  const neMetaDesc   = data.ne_meta_desc   as string;
  const neDate       = data.ne_date        as string;
  const neUpdatedDate = data.ne_updated_date as string;
  const neCategory   = data.ne_category   as string | undefined;
  const neDescription = data.ne_description as string;
  const neImages     = data.ne_images     as string;
  const neImagesAlt  = data.ne_images_alt as string;

  const BreadcrumbsUrls = [
    { title: "Home",               url: "/"                                                                  },
    { title: "Resources",          url: "/resources"                                                         },
    { title: "Media",              url: "/media"                                                             },
    { title: "News & Exhibitions", url: "/news-exhibition"                                                   },
    { title: neTitle,              url: `https://www.umangnutraceuticals.com/news-exhibitions/${neSlug}`    },
  ];

  const NewsPageSchemaData = {
    headline:      neTitle,
    description:   neMetaDesc,
    image:         `https://www.umangnutraceuticals.com/assets/images/exhibitions_news/${neBanner}`,
    url:           `https://www.umangnutraceuticals.com/news-exhibitions/${neSlug}`,
    datePublished: neDate,
    dateModified:  neUpdatedDate,
  };

  const NewsPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      OrganizationSchema,
      createBreadcrumbSchema(BreadcrumbsUrls),
      createArticleSchema(NewsPageSchemaData),
    ],
  };

  const formattedDate = new Date(neDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const categoryChips = neCategory ? (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
      {neCategory
        .split(",")
        .map((cat) => cat.trim())
        .filter(Boolean)
        .map((cat, idx) => (
          <Chip
            key={idx}
            label={cat}
            variant="outlined"
            sx={{
              height: 28,
              fontSize: 12,
              fontFamily: "Jost",
              borderRadius: "15px",
              color: "#7B7275",
              borderColor: "#C8C4C5",
              px: "8px",
            }}
          />
        ))}
    </Box>
  ) : null;

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(NewsPageSchema) }}
      />

      <Container>
        <Breadcrumb BreadcrumbsUrls={BreadcrumbsUrls} BreadcrumbsCurrent={neTitle} />
      </Container>

      <NewsSliderCard data={data} />

      <Container>
        <BannerBottomText
          BannerDate={formattedDate}
          BannerTag={neCategory ?? ""}
          Bannertitle={neTitle}
          BannerCaption={neMetaDesc}
        />

        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <Divider sx={{ flexGrow: 1 }} />
          <Typography variant="subtitle1" sx={{ px: 4, color: "black" }}>
            About {neTitle}
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        {/* Description */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {neDescription}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <Divider sx={{ flexGrow: 1 }} />
          <Typography variant="subtitle1" sx={{ px: 4, color: "black" }}>
            View Our Gallery {neTitle}
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        {/* Image Gallery */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 2, md: 4 }, mt: 3 }}>
          <NewsImageGallery ne_images={neImages} ne_images_alt={neImagesAlt} />
        </Box>

        {/* Category chips displayed below gallery */}
        {categoryChips && <Box sx={{ mt: 3 }}>{categoryChips}</Box>}

        {/* Mobile Recent Blogs */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <RecentBlogsCards />
        </Box>
      </Container>
    </>
  );
}