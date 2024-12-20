import React from 'react';
import { Search } from 'lucide-react';

interface GallerySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function GallerySearch({ value, onChange }: GallerySearchProps) {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search artifacts..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg
          bg-white dark:bg-gray-800 text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
          transition-colors"
      />
    </div>
  );
}