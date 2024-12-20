import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const navigationItems = [
  { name: "Exhibits", href: "/exhibits" },
  { name: "Events", href: "/events" },
  { name: "Visit", href: "/visit" },
];

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 z-50 flex flex-col"
          >
            <div className="flex-1 overflow-y-auto py-20 px-6">
              <ul className="space-y-6">
                {navigationItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-3xl font-light text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      onClick={onClose}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
