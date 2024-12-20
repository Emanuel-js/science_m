import React from 'react';
import MuseumMap from '../components/map/MuseumMap';

export default function VisitPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-8">
          Plan Your Visit
        </h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hours & Admission
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p><strong>Hours:</strong><br />
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday - Sunday: 10:00 AM - 6:00 PM</p>
              <p><strong>Admission:</strong><br />
                Adults: $15<br />
                Students & Seniors: $12<br />
                Children (under 12): Free</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Getting Here
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p><strong>Address:</strong><br />
                123 Museum Street<br />
                City, State 12345</p>
              <p><strong>Parking:</strong><br />
                Available on-site<br />
                $5 per hour, $20 maximum per day</p>
            </div>
          </div>
        </div>
        <MuseumMap />
      </div>
    </main>
  );
}