import { useState, useMemo } from "react";
import type { GalleryItem } from "../types/gallery";

const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "Ethiopian Space Science Society",
    description: "Exhibit on Ethiopia's contributions to space science.",
    category: "Space Science",
    imageUrl:
      "https://www.ethiopiansciencemuseum.et/_nuxt/sky_view_thumbnail.93595e98.jpg",
    metadata: [
      { label: "Established", value: "2024" },
      { label: "Focus", value: "Space Research" },
    ],
  },
  {
    id: "2",
    title: "Renewable Energy in Ethiopia",
    description: "Showcase of Ethiopia's renewable energy projects.",
    category: "Renewable Energy",
    imageUrl: "https://www.ethiopiansciencemuseum.et/_nuxt/xr.f0769499.jpg",
    metadata: [
      { label: "Type", value: "Exhibit" },
      { label: "Projects", value: "Hydropower, Wind, Solar" },
    ],
  },
  {
    id: "3",
    title: "Ethiopian Innovations",
    description: "Innovations and technological advancements from Ethiopia.",
    category: "Technology",
    imageUrl:
      "https://www.ethiopiansciencemuseum.et/_nuxt/pm_abiy_ceo_fre.af82acaf.jpg",
  },
  {
    id: "4",
    title:
      "PM Abiy’s remarks at Pan African Conference on Artificial Intelligence (AI) 2022",
    description: "Prime Minister Abiy Ahmed's remarks at the AI conference.",
    category: "Technology",
    imageUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=ztVkqmsc3bk",
  },
  {
    id: "5",
    title: "ጠቅላይ ሚኒስትር ዐቢይ መርቀው የከፈቱት የሳይንስ ሙዚየም",
    description: "Prime Minister Abiy Ahmed inaugurates the Science Museum.",
    category: "Science",
    imageUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=mVLD6G-nRIQ&t=11s",
  },
];

export function useGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filters = useMemo(() => {
    const categories = galleryData.map((item) => item.category);
    return ["All", ...new Set(categories)];
  }, []);

  const filteredItems = useMemo(() => {
    return galleryData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return {
    items: galleryData,
    filters,
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
    filteredItems,
  };
}
