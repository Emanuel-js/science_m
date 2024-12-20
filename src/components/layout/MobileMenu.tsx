import React from 'react';
import { X } from 'lucide-react';
import { navigationItems } from './Navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl">
        <div className="p-4 flex justify-between items-center border-b dark:border-gray-800">
          <h2 className="text-lg font-semibold dark:text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <nav className="p-4">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={onClose}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}