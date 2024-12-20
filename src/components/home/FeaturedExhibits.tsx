import React from "react";
import { Link } from "react-router-dom";

const exhibits = [
  {
    title: "PM Abiy Ahmed inaugurates Science Museum in Addis Ababa",
    image:
      "https://www.ethiopiansciencemuseum.et/_nuxt/inauguration.e66955ed.jpg",
    category: "Permanent Exhibition",
    description:
      "Prime Minster Abiy Ahmed along with high level government officials has inaugurated the dome shaped state of the art Science Museum in Addis Ababa.",
  },
  {
    title: "Ocean Life",
    image:
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80",
    category: "Interactive Zone",
    description:
      "Dive deep into marine ecosystems and learn about ocean conservation.",
  },
  {
    title: "Future Tech",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    category: "Special Exhibition",
    description:
      "Experience cutting-edge technology and innovations shaping our future.",
  },
];

export default function FeaturedExhibits() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Latest News</h2>
          <p className="text-gray-300 max-w-2xl mx-auto dark:text-gray-400">
            Stay updated with the latest news and events happening at our
            Science Museum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exhibits.map((exhibit) => (
            <div
              key={exhibit.title}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1 dark:bg-gray-800"
            >
              <img
                src={exhibit.image}
                alt={exhibit.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-green-400 text-sm font-semibold">
                  {exhibit.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3">
                  {exhibit.title}
                </h3>
                <p className="text-gray-400 mb-4 dark:text-gray-300">
                  {exhibit.description}
                </p>
                <Link
                  to={`/read-more/${exhibit.title}`}
                  className="text-green-400 font-semibold hover:text-green-500"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
