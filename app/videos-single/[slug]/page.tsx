// app/videos-single/[slug]/page.tsx

import { Container } from "@mui/material";
import { Breadcrumb } from "@/components/UI/Breadcrumb";
import { VideoSingleCard } from "@/components/UI/ResourcesComponent/VideoSingleCard";
import type { Metadata } from "next";

// ---- Types ----
interface Props {
  params: Promise<{ slug: string }>;
}

// ---- Static breadcrumbs ----
const BreadcrumbsUrls = [
  { title: "Home",      url: "/"          },
  { title: "Resources", url: "/resources" },
  { title: "Media",     url: "/media"     },
  { title: "Videos",    url: "/videos"    },
];

// ---- Metadata ----
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Umang Engineering`,
    alternates: {
      canonical: `https://www.umangengineering.com/videos-single/${slug}`,
    },
  };
}

// ---- Page ----
export default async function VideoSinglePage({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <Container>
        <Breadcrumb
          BreadcrumbsUrls={BreadcrumbsUrls}
          BreadcrumbsCurrent={slug}
        />
      </Container>

      <VideoSingleCard videoSlug={slug} />
    </>
  );
}