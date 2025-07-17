import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { YelpBadge } from "./ui/yelpBadge.jsx";
const reviews = [
    {
      text: "E Plumbing saved the day! Fast, clean, and very professional.",
      rating: 5,
      author: "Sarah T."
    },
    {
      text: "Egdiel was honest and efficient. Highly recommend.",
      rating: 4.5,
      author: "Mike R."
    },
    {
      text: "Great work at a fair price. My go-to plumber in St. Louis!",
      rating: 5,
      author: "Jessica K."
    }
  ];

export function ReviewSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 10000); // every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const current = reviews[index];

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">What Our Customers Say</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="px-4"
          >
            <div className="flex justify-center mb-3">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5 fill-yellow-400" />
              ))}
            </div>
            <p className="text-lg italic text-gray-700">
              “{current.text}”
            </p>
            <p className="mt-2 text-gray-500">— {current.author}</p>
          </motion.div>
        </AnimatePresence>

        {/* Optional: Add review platform links */}
        <div className="mt-6 flex justify-center gap-4 text-blue-600 underline text-sm">
          <a
            href="https://www.google.com/search?q=E+Plumbing+%26+Sewer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View on Google
          </a>
          <YelpBadge />
        </div>
      </div>
    </section>
  );
}
