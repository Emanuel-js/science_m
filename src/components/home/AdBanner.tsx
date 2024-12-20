import { useState, useEffect } from "react";

const ads = [
  {
    message: "Join our Science Fair on October 20th!",
    link: "/events/science-fair",
  },
  {
    message: "New Exhibit: The Wonders of Space",
    link: "/exhibits/space",
  },
  {
    message: "Become a Member and Enjoy Exclusive Benefits",
    link: "/membership",
  },
];

const AdBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentAd = ads[currentIndex];

  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-500 text-white py-2 px-4 text-center z-50 mt-12">
      <a href={currentAd.link} className="hover:underline">
        {currentAd.message}
      </a>
    </div>
  );
};

export default AdBanner;
