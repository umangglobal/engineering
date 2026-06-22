import {
  Box, Card, CardMedia, Typography,
  Avatar, IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Link from "next/link";
import { fetchblogsRelated } from "@/lib/api/ProductsPostApi";
import { Blog } from "@/lib/api/ProductsPostApi";

export const RecentBlogsCards = async () => {
  const data = await fetchblogsRelated();

  // --- Error State ---
  if (!data) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="error" fontWeight={500}>
          Error fetching blogs. Please try again later.
        </Typography>
      </Box>
    );
  }

  // --- Empty State ---
  if (data.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="text.secondary" fontWeight={500}>
          No blogs found.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {data.map((blog: Blog) => {
        const blogId    = blog.g_id     as string | number;
        const blogSlug  = blog.g_slug   as string;
        const blogImg   = blog.g_img    as string;
        const blogAlt   = blog.g_img_alt_tag as string | undefined;
        const blogAuthor = blog.g_author as string | undefined;
        const blogDate  = blog.g_date   as string;
        const blogTitle = blog.g_title  as string;
        const blogDesc  = blog.g_meta_description as string;

        return (
          <Link
            key={blogId}
            href={`/blog-single/${blogSlug}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              elevation={0}
              sx={{
                width: "100%",
                maxWidth: 340,
                borderRadius: "20px",
                background: "#41939C21",
                p: 2,
                mb: 2,
                boxShadow: "none",
                border: "1px solid #41939C",
              }}
            >
              {/* Image */}
              <CardMedia
                    component="img"
                    image={`/assets/images/blogs/${blogImg}`}
                    alt={blogAlt ?? blogTitle}  
                    sx={{
                        height: 204,
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                        backgroundColor: "#DDE1E6",
                    }}
                />

              {/* Meta Info */}
              <Box display="flex" alignItems="center" gap={1} mt={2} mb={1}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: "#cccccca1" }}>
                  {blogAuthor?.charAt(0)?.toUpperCase() || '?'}
                </Avatar>
                <Typography variant="body2" sx={{ fontWeight: 500, fontSize: 14 }}>
                  {blogAuthor}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 12, color: "#6E6E6E", ml: "auto" }}>
                  {new Date(blogDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{ fontSize: 18, fontWeight: 600, color: "#41939C", lineHeight: 1.4 }}
              >
                {blogTitle}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{ mt: 1, color: "#666", fontSize: 14, lineHeight: 1.6 }}
              >
                {blogDesc}
              </Typography>

              {/* Action Buttons */}
              <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                <Box display="flex" gap={1}>
                  <IconButton size="small" sx={{ color: "#41939C" }}>
                    <FavoriteBorderIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "#41939C" }}>
                    <ShareOutlinedIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="body2" sx={{ fontSize: 12, fontWeight: 500, color: "#41939C" }}>
                  Read More →
                </Typography>
              </Box>
            </Card>
          </Link>
        );
      })}
    </>
  );
};