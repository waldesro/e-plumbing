import { useEffect } from "react";

export function YelpBadge() {
  useEffect(() => {
    const scriptId = "yelp-biz-badge-script-rrc-lV46DfQewI_IY6nyDmh4iw";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//yelp.com/biz_badge_js/en_US/rrc/lV46DfQewI_IY6nyDmh4iw.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="yelp-biz-badge-rrc-lV46DfQewI_IY6nyDmh4iw">
      <a
        href="http://yelp.com/biz/e-plumbing-and-sewer-saint-louis?utm_medium=badge_star_rating_reviews&utm_source=biz_review_badge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out E Plumbing And Sewer on Yelp
      </a>
    </div>
  );
}
