import React, { useState } from "react";
import EventCalendar from "../components/events/EventCalendar";

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "past" | "upcoming">("all");

  return (
    <main className="pt-20">
      <div className="flex justify-center mb-4">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg flex-wrap">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 ${
              filter === "past"
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setFilter("past")}
          >
            Past
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              filter === "upcoming"
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setFilter("upcoming")}
          >
            Upcoming
          </button>
        </div>
      </div>
      <EventCalendar filter={filter} />
    </main>
  );
}
