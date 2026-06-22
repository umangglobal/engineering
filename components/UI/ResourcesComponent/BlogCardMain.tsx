'use client'

import {
  Box, Card, CardMedia, Typography,
  Avatar, Chip, Grid, Container,
} from '@mui/material';
import Link from 'next/link';
import { Blog } from '@/lib/api/ProductsPostApi';

// ---- Types ----
interface BlogCardMainProps {
  blogs: Blog[];
}

export const BlogCardMain = ({ blogs = [] }: BlogCardMainProps) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 2 }}>
      <Grid container spacing={3}>
        {blogs.slice().reverse().map((blog) => {
          const blogId      = blog.g_id       as string | number;
          const blogSlug    = blog.g_slug     as string;
          const blogImg     = blog.g_img      as string;
          const blogAlt     = blog.g_img_alt_tag as string | undefined;
          const blogTitle   = blog.g_title    as string;
          const blogDesc    = blog.g_meta_description as string;
          const blogAuthor  = blog.g_author   as string | undefined;
          const blogDate    = blog.g_date     as string;
          const blogCat     = blog.g_category as string | undefined;

          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blogId}>
              <Card
                component={Link}
                href={`/blog-single/${blogSlug}`}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  width: { xs: '312px', md: '330px' },
                  height: '100%',
                  p: 2,
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {/* Image */}
                <Box sx={{ height: 204, borderRadius: '16px', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={`/assets/images/blogs/${blogImg}`}
                    alt={blogAlt || blogTitle}
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px',
                    }}
                  />
                </Box>

                {/* Category Tags */}
                {blogCat && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {blogCat
                      .split(',')
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
                            fontFamily: 'Jost',
                            borderRadius: '15px',
                            color: '#7B7275',
                            borderColor: '#C8C4C5',
                            px: '8px',
                          }}
                        />
                      ))}
                  </Box>
                )}

                {/* Title */}
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    fontFamily: 'Jost',
                    lineHeight: '24px',
                    color: '#21272A',
                    minHeight: '48px',
                  }}
                >
                  {blogTitle}
                </Typography>

                {/* Description */}
                <Typography sx={{ fontSize: 14, fontFamily: 'Jost', color: '#6A8076' }}>
                  {blogDesc}
                </Typography>

                {/* Author & Date */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mt: 'auto' }}>
                  <Avatar sx={{ width: 40, height: 40, bgcolor: "#cccccca1" }}>
                    {blogAuthor?.charAt(0)?.toUpperCase() || '?'}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: 'Jost', color: '#091610' }}>
                      {blogAuthor}
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontFamily: 'Jost', color: '#6A8076' }}>
                      {new Date(blogDate).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};