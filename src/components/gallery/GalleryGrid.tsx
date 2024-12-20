import React, { useState } from "react";
import { motion } from "framer-motion";
import GalleryLightbox from "./GalleryLightbox";
import type { GalleryItem } from "../../types/gallery";

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              {item.videoUrl ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${new URL(
                    item.videoUrl
                  ).searchParams.get("v")}?autoplay=0`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                ></iframe>
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <GalleryLightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}
