import React from 'react';

const exhibits = [
  {
    title: 'Space Exploration',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    category: 'Permanent Exhibition',
    description: 'Journey through the cosmos and discover the mysteries of our universe.',
  },
  {
    title: 'Ocean Life',
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80',
    category: 'Interactive Zone',
    description: 'Dive deep into marine ecosystems and learn about ocean conservation.',
  },
  {
    title: 'Future Tech',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    category: 'Special Exhibition',
    description: 'Experience cutting-edge technology and innovations shaping our future.',
  },
];

export default function FeaturedExhibits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Exhibits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular exhibitions and immersive experiences that bring science to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exhibits.map((exhibit) => (
            <div
              key={exhibit.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={exhibit.image}
                alt={exhibit.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">
                  {exhibit.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  {exhibit.title}
                </h3>
                <p className="text-gray-600 mb-4">{exhibit.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}