import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Ancient Egypt Exhibition Opening',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'Main Hall',
    description: 'Join us for the opening of our new Ancient Egypt exhibition featuring rare artifacts.',
    category: 'Exhibition'
  },
  {
    id: '2',
    title: 'Kids Science Workshop',
    date: '2024-03-20',
    time: '2:00 PM',
    location: 'Learning Center',
    description: 'Interactive workshop for children ages 8-12 exploring basic scientific principles.',
    category: 'Workshop'
  }
];

export default function EventCalendar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-8">Upcoming Events</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-4">
              {event.category}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {event.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                {event.time}
              </div>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}