'use client'

import { Link, Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NextLink from "next/link";

interface BreadcrumbUrl {
  title: string;
  url: string;
}

interface BreadcrumbProps {
  BreadcrumbsUrls: BreadcrumbUrl[];
  BreadcrumbsCurrent: string;
}

export const Breadcrumb = ({
  BreadcrumbsUrls,
  BreadcrumbsCurrent,
}: BreadcrumbProps) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {BreadcrumbsUrls.filter((item) => item.title !== BreadcrumbsCurrent).map(
        (item, index) => (
          <Link
            key={index}
            component={NextLink}
            href={item.url}
            underline="hover"
            color="inherit"
          >
            {item.title}
          </Link>
        )
      )}

      <Typography
        sx={{
          color: "#3e3939",
          fontWeight: 500,
          textDecoration: "underline",
        }}
      >
        {BreadcrumbsCurrent}
      </Typography>
    </Breadcrumbs>
  );
};