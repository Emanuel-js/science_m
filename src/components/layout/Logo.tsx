import React from 'react';

export default function Logo() {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 animate-glow" />
      <div className="absolute inset-[2px] rounded-full bg-white dark:bg-gray-900" />
      <div className="absolute inset-[4px] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500" />
    </div>
  );
}