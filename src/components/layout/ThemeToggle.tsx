import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`w-6 h-6 text-yellow-500 transition-all absolute ${
            isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
          }`}
        />
        <Moon
          className={`w-6 h-6 text-blue-500 transition-all absolute ${
            isDark ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}