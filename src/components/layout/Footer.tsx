import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Visit Us</h3>
            <address className="not-italic">
              <p>Science Museum Street</p>
              <p>Addis Ababa, Ethiopia</p>
              <p className="mt-4">Phone: +251 11 123 4567</p>
              <p>Email: info@ethiopiasciencemuseum.et</p>
            </address>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday - Sunday: 10:00 AM - 6:00 PM</li>
              <li className="text-yellow-400">Closed on major holidays</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/visit" className="hover:text-white transition-colors">
                  Plan Your Visit
                </a>
              </li>
              <li>
                <a
                  href="/exhibits"
                  className="hover:text-white transition-colors"
                >
                  Current Exhibits
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Events Calendar
                </a>
              </li>
              <li>
                <a
                  href="/membership"
                  className="hover:text-white transition-colors"
                >
                  Become a Member
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Newsletter
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors relative"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 animate-glow" />
                <div className="relative z-10 text-white">Subscribe</div>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Ethiopia Science Museum. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
