import { useEffect } from 'react';

export default function GoogleReviewsEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.setAttribute("data-use-service-core", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-12">
      <div class="elfsight-app-246b0f19-81a3-4fdc-b309-d18590755bf3" data-elfsight-app-lazy></div>
    </div>
  );
}
