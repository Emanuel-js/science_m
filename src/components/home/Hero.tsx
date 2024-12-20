import { useState, useEffect } from "react";
import { ChevronRight, Calendar, Map, MonitorPlay } from "lucide-react";
import Chatbot from "../chat/ChatBot";

const heroItems = [
  {
    title: "Explore the Wonders of Science",
    description:
      "Embark on a journey of discovery through interactive exhibits, groundbreaking research, and immersive experiences.",
    image:
      "https://www.ethiopiansciencemuseum.et/_nuxt/compound_top_view.d6b1ab35.jpg",
  },
  {
    title: "Discover the Universe",
    description:
      "Dive into the mysteries of the cosmos with our state-of-the-art planetarium and space exhibits.",
    image:
      "https://www.ethiopiansciencemuseum.et/_nuxt/amphitheater.4b8d89f6.jpg",
  },
  {
    title: "Innovate with Technology",
    description:
      "Experience the latest advancements in technology and innovation through hands-on exhibits and demonstrations.",
    image:
      "https://www.ethiopiansciencemuseum.et/_nuxt/solar_inside_thumbnail.4cd1681d.jpg",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Special Events");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = heroItems[currentIndex];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 bg-black opacity-50" />{" "}
        {/* Added dark overlay */}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-2xl h-64 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 mb-6 animate-fade-in">
            {currentItem.title}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {currentItem.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/visit"
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:via-pink-600 hover:to-blue-600 transition-colors flex items-center"
            >
              Plan Your Visit
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/membership"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Become a Member
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: Calendar,
              title: "Special Events",
              description: "Join our upcoming exhibitions and workshops",
              link: "/events",
            },
            {
              icon: Map,
              title: "Plan Your Visit",
              description: "Maps, directions, and visitor information",
              link: "/visit",
            },
            {
              icon: MonitorPlay,
              title: "Virtual Tours",
              description: "Experience our exhibits from anywhere",
              link: "/exhibits",
            },
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => {
                setActiveTab(item.title);
                if (item.link) {
                  window.location.href = item.link;
                }
              }}
              className={`${
                activeTab === item.title ? "bg-white/20" : "bg-white/10"
              } backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors cursor-pointer`}
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          {activeTab === "Special Events" && (
            <div>{/* Content for Special Events */}</div>
          )}
          {activeTab === "Plan Your Visit" && (
            <div>{/* Content for Plan Your Visit */}</div>
          )}
          {activeTab === "Virtual Tours" && (
            <div>
              {/* Content for Virtual Tours */}
              <Chatbot />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
