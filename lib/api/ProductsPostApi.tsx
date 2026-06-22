// api/ProductsPostApi.ts
// No 'use client' needed — pure API utility functions, no React/browser APIs

import axios from "axios";

// ---- Axios instance ----
const api = axios.create({
  baseURL: "https://www.backend.umangparticlescience.com/",
  headers: {
    "x-project": "ENGINEERING",
  },
});

// ---- Types ----
export interface Product {
  product_id: string | number;
  product_name: string;
  product_slug: string;
  product_active: string;
  product_segment: string;
  product_thumbnail: string;
  product_meta_title: string;
  product_meta_description: string;
  product_h1: string;
  product_subtitle: string;
  product_details: string;
  product_mesh_sizes: string;
  product_properties: string;
  product_certification: string;
  product_benefits: string;
  product_formats: string;
  product_active_benefits: string;
  product_applications: string;
  product_description: string;
  product_faq: string;
  product_capacity_table: string;
  [key: string]: unknown;
}

export interface ProductSegment {
  [key: string]: unknown;
}

export interface Blog {
  blog_id: string | number;
  blog_slug: string;
  g_id: string | number;
  g_slug: string;
  g_title: string;
  g_img: string;
  g_img_alt_tag?: string;
  g_category?: string;
  g_meta_description: string;
  g_author?: string;
  g_date: string;
  g_updated_date: string;
  g_body: string;
  [key: string]: unknown;
}

export interface Career {
  career_id: string | number;
  career_title: string;
  career_department: string;
  career_type: string;
  career_experience: string;
  career_description: string;
  career_resposibilities: string;
  career_skill: string;
  career_position: string;
  career_opening_count: string;
  career_date: string;
  career_status: string;
  [key: string]: unknown;
}

export interface NewsExhibition {
  news_id: string | number;
  news_slug: string;
  [key: string]: unknown;
}

// ---- API functions ----

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await api.get("products");
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchproductsSegment = async (
  productsegment: string
): Promise<Product[] | null> => {
  try {
    const res = await api.get(`product-segment/${productsegment}`);
    return res.status === 200 && res.data ? res.data : null;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null;
  }
};

export const fetchproductsSegmentRelated = async (
  productsegment: string
): Promise<Product[]> => {
  try {
    const res = await api.get(`product-segment-related/${productsegment}`);
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
};

export const fetchproductsDescription = async (
  productSlug: string
): Promise<Product | null> => {
  try {
    const res = await api.get(`product-description/${productSlug}`);
    return res.status === 200 && res.data ? res.data : null;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null;
  }
};

export const fetchSearchResults = async (
  debouncedInput: string
): Promise<Product[]> => {
  if (!debouncedInput || debouncedInput.trim() === "") return [];
  try {
    const res = await api.get(`products-search?search=${debouncedInput}`);
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};

export const fetchActivesSearchResults = async (
  debouncedInput: string
): Promise<Product[]> => {
  if (!debouncedInput || debouncedInput.trim() === "") return [];
  try {
    const res = await api.get(`products-actives-search?search=${debouncedInput}`);
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};

export const fetchBlogs = async (): Promise<Blog[]> => {
  try {
    const res = await api.get("blogs");
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchBlogsDescription = async (
  blogSlug: string
): Promise<Blog | null> => {
  try {
    const res = await api.get(`blog-description/${blogSlug}`);
    return res.status === 200 && res.data ? res.data : null;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null;
  }
};

export const fetchblogsRelated = async (): Promise<Blog[]> => {
  try {
    const res = await api.get("blogs-related");
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
};

export const fetchNewsExhibitions = async (): Promise<NewsExhibition[]> => {
  try {
    const res = await api.get("news");
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchNewsExhibitionsDescription = async (
  newsSlug: string
): Promise<NewsExhibition | null> => {
  try {
    const res = await api.get(`news-description/${newsSlug}`);
    return res.status === 200 && res.data ? res.data : null;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null;
  }
};

export const fetchNewsExhibitionsRelated = async (): Promise<NewsExhibition[]> => {
  try {
    const res = await api.get("news-related");
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
};

export const fetchCareers = async (): Promise<Career[]> => {
  try {
    const res = await api.get("career");
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
};