interface GalleryFiltersProps {
  filters: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilters({
  filters,
  selectedCategory,
  onCategoryChange,
}: GalleryFiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Categories
      </h2>
      <div className="space-y-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onCategoryChange(filter)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === filter
                ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
