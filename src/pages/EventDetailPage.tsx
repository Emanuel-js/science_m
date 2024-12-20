import React from "react";
import { Calendar, Clock, MapPin, Info } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "../components/events/EventCalendar";

export default function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="pt-20 text-center">
        <p className="text-gray-500">Event not found</p>
        <button className="mt-4" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center mb-4">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-0">
            {event.title}
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-500 hover:underline"
          >
            Back
          </button>
        </div>
        {event.image && (
          <div className="flex justify-center mb-6">
            <img
              src={event.image}
              alt={event.title}
              className="max-h-72 object-cover rounded-lg shadow-md"
            />
          </div>
        )}
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex items-center">
          <Info className="w-5 h-5 mr-2" />
          {event.description}
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar className="w-5 h-5 mr-2" />
            {event.date}
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Clock className="w-5 h-5 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <MapPin className="w-5 h-5 mr-2" />
            {event.location}
          </div>
        </div>
        {event.participants && event.participants.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Participants
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {event.participants.map((person, idx) => (
                <li key={idx}>{person}</li>
              ))}
            </ul>
          </div>
        )}
        {event.companies && event.companies.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Companies
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {event.companies.map((company, idx) => (
                <li key={idx}>{company}</li>
              ))}
            </ul>
          </div>
        )}
        {event.exhibitors && event.exhibitors.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Exhibitors
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {event.exhibitors.map((exhibitor, idx) => (
                <li key={idx}>{exhibitor}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
