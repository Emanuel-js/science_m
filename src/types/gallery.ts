export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  metadata?: Array<{
    label: string;
    value: string;
  }>;
  videoUrl?: string;
}
