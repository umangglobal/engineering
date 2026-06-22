'use client'

import { useState, useRef, useEffect } from "react";
import { Box, InputBase, CircularProgress, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useQuery } from "@tanstack/react-query";
import { fetchActivesSearchResults, Product } from "@/lib/api/ProductsPostApi";

// ---- Types ----
interface ActiveSearchBoxProps {
  selectedActives?: Product[];
  setSelectedActives: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ActiveSearchBox({
  selectedActives = [],
  setSelectedActives,
}: ActiveSearchBoxProps) {
  const [searchInputActive, setSearchInputActive] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounce input
  useEffect(() => {
    const t = setTimeout(() => setDebouncedInput(searchInputActive.trim()), 500);
    return () => clearTimeout(t);
  }, [searchInputActive]);

  // Fetch results
  const { data = [], isLoading, isError } = useQuery<Product[]>({
    queryKey: ["products-search-actives", debouncedInput],
    queryFn: () => fetchActivesSearchResults(debouncedInput),
    enabled: !!debouncedInput,
  });

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectActive = (active: Product) => {
    setSelectedActives((prev) => {
      const exists = prev.some((p) => p.product_id === active.product_id);
      return exists
        ? prev.filter((p) => p.product_id !== active.product_id)
        : [...prev, active];
    });
  };

  const handleRemoveActive = (id: string | number) => {
    setSelectedActives((prev) => prev.filter((p) => p.product_id !== id));
  };

  return (
    <Box
      ref={containerRef}
      sx={{ position: "relative", width: { xs: "90%", sm: "228px" } }}
    >
      {/* Search Input */}
      <Box
        sx={{
          height: "40px",
          px: 2,
          backgroundColor: "white",
          borderRadius: "24px",
          border: "1px solid #C8C4C5",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <InputBase
          value={searchInputActive}
          onChange={(e) => setSearchInputActive(e.target.value)}
          onFocus={() => setShowResults(true)}
          placeholder="Type Active Name"
          fullWidth
          sx={{
            fontFamily: "Jost",
            fontWeight: 500,
            fontSize: "16px",
            color: "#23141B",
          }}
        />
        <SearchIcon sx={{ color: "#23141B", fontSize: "20px" }} />
        {isLoading && <CircularProgress size={18} />}
      </Box>

      {/* Selected Chips */}
      {selectedActives.length > 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1.5 }}>
          {selectedActives.map((active, index) => (
            <Chip
              key={active.product_id ?? index}
              label={active.product_active as string}
              onClick={() => {}}
              onDelete={() => handleRemoveActive(active.product_id)}
              deleteIcon={<CloseRoundedIcon sx={{ fontSize: "18px" }} />}
              sx={{
                backgroundColor: "#41939C",
                color: "white",
                fontFamily: "Jost",
                fontWeight: 500,
                borderRadius: "24px",
                px: 1,
                "&:hover": { backgroundColor: "#b1122e" },
                "& .MuiChip-deleteIcon": {
                  color: "white",
                  "&:hover": { color: "#eee" },
                },
              }}
            />
          ))}
        </Box>
      )}

      {/* Dropdown */}
      {showResults && (
        <Box
          sx={{
            position: "absolute",
            top: selectedActives.length > 0 ? "95px" : "45px",
            left: 0,
            right: 0,
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            mt: 1,
            maxHeight: "250px",
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {/* Loading */}
          {isLoading && (
            <Box sx={{ p: 2, textAlign: "center" }}>
              <CircularProgress size={20} />
            </Box>
          )}

          {/* Error */}
          {!isLoading && isError && (
            <Box sx={{ p: 2, color: "red", textAlign: "center" }}>
              Error loading results
            </Box>
          )}

          {/* No results */}
          {!isLoading && !isError && debouncedInput && data.length === 0 && (
            <Box sx={{ p: 2, textAlign: "center", color: "#888" }}>
              No results found
            </Box>
          )}

          {/* Results */}
          {!isLoading && !isError && data.map((active) => {
            const key = active.product_id ?? (active.product_active as string);
            const isSelected = selectedActives.some(
              (s) => s.product_id === active.product_id
            );
            return (
              <Box
                key={String(key)}
                onClick={() => handleSelectActive(active)}
                sx={{
                  p: 1.2,
                  px: 2,
                  cursor: "pointer",
                  fontFamily: "Jost",
                  fontSize: "15px",
                  borderBottom: "1px solid #f5f5f5",
                  bgcolor: isSelected ? "#FDECEF" : "transparent",
                  color: isSelected ? "#41939C" : "inherit",
                  "&:last-child": { borderBottom: "none" },
                  "&:hover": { bgcolor: "#FDECEF", color: "#41939C" },
                }}
              >
                {active.product_active as string}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}