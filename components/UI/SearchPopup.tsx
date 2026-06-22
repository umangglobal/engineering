'use client'

import { useState, useEffect } from "react";
import {
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@/assets/icons/homepage/search-large.svg";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchSearchResults } from "../../lib/api/ProductsPostApi";

// ---- Types ----
interface SearchProduct {
  product_id: string | number;
  product_name: string;
  product_slug: string;
}

export const SearchPopup = () => {
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(searchInput);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchInput]);

  // React Query fetching
  const { data = [], isLoading, isError } = useQuery<SearchProduct[]>({
    queryKey: ["products-search", debouncedInput],
    queryFn: () => fetchSearchResults(debouncedInput),
    enabled: !!debouncedInput,
  });

  return (
    <>
      {/* Search Icon Button */}
      <IconButton
        sx={{
          width: "48px",
          height: "48px",
          background: "#41939C",
          borderRadius: "30px",
          "&:hover": { background: "#41939Ca8" },
        }}
        onClick={() => setOpen(true)}
      >
        <SearchIcon style={{ width: "21px", height: "21px", color: "#fff" }} />
      </IconButton>

      {/* Search Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogContent>
          {/* Search Input */}
          <TextField
            autoFocus
            fullWidth
            variant="outlined"
            placeholder="Type Name or Segment"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          {/* Loading */}
          {isLoading && (
            <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
              <CircularProgress size={24} />
            </div>
          )}

          {/* Error */}
          {isError && (
            <div style={{ color: "red" }}>Error fetching products.</div>
          )}

          {/* Results */}
          <List>
            {data.length > 0 ? (
              data.map((product) => (
                <ListItem
                  key={product.product_id}
                  onClick={() => setOpen(false)}
                  sx={{ p: 0 }}
                >
                  <Link
                    href={`/product-single/${product.product_slug}`}
                    style={{ textDecoration: "none", color: "inherit", width: "100%" }}
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText
                      primary={product.product_name}
                      sx={{ px: 2, py: 1, "&:hover": { backgroundColor: "#f5f5f5", borderRadius: "8px" } }}
                    />
                  </Link>
                </ListItem>
              ))
            ) : (
              debouncedInput && !isLoading && (
                <ListItem>No products found.</ListItem>
              )
            )}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};