import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { YelpBadge } from "./ui/yelpBadge.jsx";
import { GoogleReviewBadge } from "./ui/googlebadge.jsx";

export function ReviewSection() {
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("/.netlify/functions/getGoogleReviews")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data))
  //     .catch((err) => console.error("Failed to load reviews:", err));
  // }, []);

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 leading-tight mb-4">See Our Reviews</h1>
        {/* <h2 className="text-3xl font-bold mb-6 text-blue-700">
          What Our Customers Say
        </h2>

        {reviews.length > 0 ? (
          reviews.map((review, idx) => (
            <div key={idx} className="mb-6 border-b pb-4">
              <p className="text-lg italic text-gray-700">“{review.text}”</p>
              <p className="text-sm text-gray-600 mt-2">
                — {review.author_name} ({review.rating}★)
              </p>
            </div>
          ))
        ) : (
          <p>Loading reviews...</p>
        )} */}
        {/* Badges Side-by-Side */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <GoogleReviewBadge rating={5} reviewCount={1} />
          <YelpBadge />
        </div>
      </div>
    </section>
  );
}
