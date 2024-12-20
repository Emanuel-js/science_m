import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LoadingSpinner from "./components/loading/LoadingSpinner";
import PageTransition from "./components/loading/PageTransition";
import ChatBot from "./components/chat/ChatBot";
import NewsDetail from "./components/news/NewsDetail";

// Lazy load pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const ExhibitsPage = React.lazy(() => import("./pages/ExhibitsPage"));
const EventsPage = React.lazy(() => import("./pages/EventsPage"));
const VisitPage = React.lazy(() => import("./pages/VisitPage"));
const MembershipPage = React.lazy(() => import("./pages/MembershipPage"));
const EventDetailPage = React.lazy(() => import("./pages/EventDetailPage"));

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/exhibits" element={<ExhibitsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:id" element={<EventDetailPage />} />
                <Route path="/visit" element={<VisitPage />} />
                <Route path="/membership" element={<MembershipPage />} />
                <Route path="/read-more/:title" element={<NewsDetail />} />
              </Routes>
            </PageTransition>
          </AnimatePresence>
        </Suspense>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}
