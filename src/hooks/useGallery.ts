import { useState, useMemo } from 'react';
import type { GalleryItem } from '../types/gallery';

const galleryData: GalleryItem[] = [
  {
    id: '1',
    title: 'Ancient Egyptian Artifacts',
    description: 'Collection of well-preserved artifacts from ancient Egypt.',
    category: 'Ancient History',
    imageUrl: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&fit=crop&q=80',
    metadata: [
      { label: 'Period', value: '2686-2181 BCE' },
      { label: 'Origin', value: 'Egypt' },
    ],
  },
  {
    id: '2',
    title: 'Space Exploration',
    description: 'Interactive exhibit showcasing the history of space exploration.',
    category: 'Space',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    metadata: [
      { label: 'Type', value: 'Interactive' },
      { label: 'Duration', value: '45 mins' },
    ],
  },
  {
    id: '3',
    title: 'Dinosaur Fossils',
    description: 'Rare collection of dinosaur fossils from the Jurassic period.',
    category: 'Natural History',
    imageUrl: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&q=80',
    metadata: [
      { label: 'Period', value: 'Jurassic' },
      { label: 'Age', value: '150M years' },
    ],
  },
];

export function useGallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filters = useMemo(() => {
    const categories = galleryData.map(item => item.category);
    return ['All', ...new Set(categories)];
  }, []);

  const filteredItems = useMemo(() => {
    return galleryData.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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