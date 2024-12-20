import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  image?: string;
  participants?: string[];
  companies?: string[];
  exhibitors?: string[];
}

export const events: Event[] = [
  {
    id: "1",
    title: "Startup Ethiopia exhibition opens at Science Museum",
    date: "2024-04-08",
    time: "10:00 AM",
    location: "Main Hall",
    description:
      "The exhibition is slated to run until April 28, 2024. Over the course of the three-week fair, startups in various stages—ranging from initial to advanced, including those poised to enter the market—are showcasing their innovative endeavors.\n\nThe exhibition was launched in the presence of the Minister of Labor and Skills, Ms. Muferihat Kamil, the Minister of Innovation and Technology, Belete Molla, the Minister of Industry, Melaku Alebel, the Minister of State for Finance, Eyob Tekalign, and various other senior government officials.\n\nRecall that “Startup Ethiopia Forum’’ was held in the presence of Prime Minister Abiy Ahmed at Adwa Victory Memorial Museum on Thursday 4th April 2024, where senior government officials, representatives of the private sectors, and youth entrepreneurs (start-ups) also attended the forum.\n\nOn that occasion, Prime Minister Abiy Ahmed noted that “Startup Ethiopia” aims to cultivate an environment conducive to youth entrepreneurship, fostering innovative problem-solving businesses.\n\nHe underlined that recognizing the youth as the nation’s engines brimming with innovative ideas, policy support for the ecosystem is vital to translate these ideas into reality.\n\nDespite current challenges, numerous initiatives over the past five years have been actively addressing these hurdles, paving the way for abundant opportunities, the Prime Minister added.",
    category: "Exhibition",
    image:
      "https://www.fanabc.com/english/wp-content/uploads/2024/04/434464288_730656492600099_5529485732049032234_n-750x430.jpg",
    participants: [
      "Ms. Muferihat Kamil",
      "Belete Molla",
      "Melaku Alebel",
      "Eyob Tekalign",
    ],
    companies: ["Startup Ethiopia"],
    exhibitors: ["National Museum Association"],
  },
  {
    id: "2",
    title: "Kids Science Workshop",
    date: "2024-03-20",
    time: "2:00 PM",
    location: "Learning Center",
    description:
      "Interactive workshop for children ages 8-12 exploring basic scientific principles.",
    category: "Workshop",
    image: "https://example.com/kids-science-workshop.jpg",
    participants: ["Ms. Davis"],
    companies: ["Science4Kids"],
    exhibitors: [],
  },
  {
    id: "3",
    title: "Mars Exploration Talk",
    date: "2024-10-25",
    time: "6:00 PM",
    location: "Auditorium",
    description:
      "Join our space expert for a thrilling talk about Mars exploration.",
    category: "Lecture",
  },
  {
    id: "4",
    title: "Astronomy Night",
    date: "2025-01-10",
    time: "8:00 PM",
    location: "Rooftop Observatory",
    description:
      "Stargazing session with telescopes and expert guidance on constellations.",
    category: "Night Event",
  },
  {
    id: "5",
    title: "Future Tech Showcase",
    date: "2025-02-05",
    time: "4:00 PM",
    location: "Innovation Hub",
    description:
      "Experience cutting-edge technology demonstrations from local startups.",
    category: "Showcase",
  },
  {
    id: "6",
    title: "Robotics Competition",
    date: "2024-05-15",
    time: "9:00 AM",
    location: "Main Hall",
    description:
      "High school students compete in a robotics competition showcasing their engineering skills.",
    category: "Competition",
    image: "https://example.com/robotics-competition.jpg",
    participants: ["High School Students"],
    companies: ["Tech4Youth"],
    exhibitors: ["Robotics Club"],
  },
  {
    id: "7",
    title: "AI and Machine Learning Conference",
    date: "2024-06-20",
    time: "10:00 AM",
    location: "Conference Room A",
    description:
      "Industry experts discuss the latest trends and advancements in AI and machine learning.",
    category: "Conference",
    image: "https://example.com/ai-conference.jpg",
    participants: ["Dr. Alan Turing", "Prof. Ada Lovelace"],
    companies: ["AI Innovators"],
    exhibitors: ["Tech Expo"],
  },
];

interface EventCalendarProps {
  filter: "all" | "past" | "upcoming";
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function EventCalendar({ filter }: EventCalendarProps) {
  const now = new Date();
  const upcomingEvents = events.filter(
    (e) => new Date(e.date + "T00:00:00Z") >= now
  );
  const pastEvents = events.filter(
    (e) => new Date(e.date + "T00:00:00Z") < now
  );

  const renderEvents = (evts: Event[]) => (
    <Carousel
      responsive={responsive}
      ssr
      infinite
      keyBoardControl
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      dotListClass="custom-dot-list-style"
      arrows
      renderButtonGroupOutside
    >
      {evts.map((event) => (
        <div
          key={event.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mx-2 flex flex-col justify-between min-h-[350px] transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-4">
              {event.category}
            </span>
            <Link to={`/events/${event.id}`}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:underline">
                {event.title}
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 h-24 overflow-hidden">
              {event.description.length > 100
                ? `${event.description.substring(0, 100)}...`
                : event.description}
            </p>
          </div>
          <div className="mt-auto">
            <Link
              to={`/events/${event.id}`}
              className="text-blue-500 hover:underline"
            >
              Show more
            </Link>
            <div className="space-y-2 mt-4">
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
        </div>
      ))}
    </Carousel>
  );

  if (filter === "all") {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
          Upcoming Events
        </h2>
        {renderEvents(upcomingEvents)}
        <h2 className="text-3xl font-light text-gray-900 dark:text-white mt-12 mb-4">
          Past Events
        </h2>
        {renderEvents(pastEvents)}
      </div>
    );
  }

  const evts = filter === "past" ? pastEvents : upcomingEvents;
  const title = filter === "past" ? "Past Events" : "Upcoming Events";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {renderEvents(evts)}
    </div>
  );
}
