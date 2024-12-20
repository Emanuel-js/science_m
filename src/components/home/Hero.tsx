import React from 'react';
import { ChevronRight, Calendar, Map, MonitorPlay } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
          alt="Museum interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore the Wonders of Science
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Embark on a journey of discovery through interactive exhibits, 
            groundbreaking research, and immersive experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              Plan Your Visit
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              Become a Member
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: Calendar,
              title: 'Special Events',
              description: 'Join our upcoming exhibitions and workshops',
            },
            {
              icon: Map,
              title: 'Plan Your Visit',
              description: 'Maps, directions, and visitor information',
            },
            {
              icon: MonitorPlay,
              title: 'Virtual Tours',
              description: 'Experience our exhibits from anywhere',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors cursor-pointer"
            >
              <item.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}