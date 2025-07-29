import { useEffect, useState } from "react";
import { YelpBadge } from "./ui/yelpBadge.jsx";
import GoogleReviewsEmbed from './ui/GoogleReviewEmbeded.jsx';

export function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 leading-tight mb-4">See Our Reviews</h1>
        {/* Badges Side-by-Side */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <GoogleReviewsEmbed />
          <YelpBadge />
        </div>
      </div>
    </section>
  );
}
