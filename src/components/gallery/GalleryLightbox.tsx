import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { GalleryItem } from "../../types/gallery";

interface GalleryLightboxProps {
  readonly item: GalleryItem | null;
  readonly onClose: () => void;
}

export default function GalleryLightbox({
  item,
  onClose,
}: GalleryLightboxProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
      >
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="h-full flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              {item.videoUrl ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${new URL(
                    item.videoUrl
                  ).searchParams.get("v")}?autoplay=1`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div className="mt-4 text-white">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.metadata?.map((meta) => (
                  <span
                    key={meta.label}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm"
                  >
                    {meta.label}: {meta.value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
