import React, { useState } from 'react';
import { Search, User } from 'lucide-react';
import Navigation from './Navigation';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollPosition } = useScrollPosition();

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 0
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center space-x-3 group">
            <Logo />
            <div>
              <h1 className="text-xl font-light text-gray-900 dark:text-white transition-colors">
                Museum of Science
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
                Discover. Learn. Explore.
              </p>
            </div>
          </a>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-2">
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <ThemeToggle />
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group p-2 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex flex-col space-y-1.5 w-6">
                <span className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-400 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} />
                <span className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-400 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block h-0.5 w-6 bg-gray-600 dark:bg-gray-400 transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}