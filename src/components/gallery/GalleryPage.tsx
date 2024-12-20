import React from 'react';
import GalleryGrid from './GalleryGrid';
import GalleryFilters from './GalleryFilters';
import GallerySearch from './GallerySearch';
import { useGallery } from '../../hooks/useGallery';

export default function GalleryPage() {
  const {
    items,
    filters,
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
    filteredItems,
  } = useGallery();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
            Museum Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of artifacts and exhibitions through high-quality images
            and detailed information.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="w-full lg:w-64 flex-shrink-0">
            <GalleryFilters
              filters={filters}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          <div className="flex-1">
            <GallerySearch value={searchQuery} onChange={setSearchQuery} />
            <GalleryGrid items={filteredItems} />
          </div>
        </div>
      </div>
    </div>
  );
}