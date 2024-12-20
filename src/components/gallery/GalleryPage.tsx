import React, { useState } from "react";
import GalleryGrid from "./GalleryGrid";
import GalleryFilters from "./GalleryFilters";
import GallerySearch from "./GallerySearch";
import { useGallery } from "../../hooks/useGallery";

export default function GalleryPage() {
  const {
    filters,
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
    filteredItems,
  } = useGallery();

  const videoItems = filteredItems.filter((item) => item.videoUrl);
  const imageItems = filteredItems.filter((item) => !item.videoUrl);

  const [activeTab, setActiveTab] = useState("videos");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            Museum Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of artifacts and exhibitions through
            high-quality images and detailed information.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1">
            <GallerySearch value={searchQuery} onChange={setSearchQuery} />
          </div>
          <div className="w-full lg:w-64 flex-shrink-0">
            <GalleryFilters
              filters={filters}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-center mb-2">
            <button
              className={`px-4 py-2 rounded-t-lg ${
                activeTab === "images"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("images")}
            >
              Image Gallery
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg ${
                activeTab === "videos"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("videos")}
            >
              Video Gallery
            </button>
          </div>
          {activeTab === "videos" ? (
            <GalleryGrid items={videoItems} />
          ) : (
            <GalleryGrid items={imageItems} />
          )}
        </div>
      </div>
    </div>
  );
}
