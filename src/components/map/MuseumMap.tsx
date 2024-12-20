import React from 'react';
import { Map, Info } from 'lucide-react';

const exhibits = [
  { id: 1, name: 'Ancient History', floor: 1, status: 'Open' },
  { id: 2, name: 'Modern Art', floor: 2, status: 'Open' },
  { id: 3, name: 'Science & Tech', floor: 3, status: 'Maintenance' }
];

export default function MuseumMap() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">Museum Map</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            {/* This is where we'd integrate a 3D map viewer */}
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">
                Interactive 3D Map Coming Soon
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Current Exhibits
            </h3>
            <div className="space-y-4">
              {exhibits.map((exhibit) => (
                <div 
                  key={exhibit.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {exhibit.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Floor {exhibit.floor}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    exhibit.status === 'Open' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                  }`}>
                    {exhibit.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}