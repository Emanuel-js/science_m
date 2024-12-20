import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedExhibits from '../components/home/FeaturedExhibits';
import EventCalendar from '../components/events/EventCalendar';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedExhibits />
      <EventCalendar />
    </main>
  );
}