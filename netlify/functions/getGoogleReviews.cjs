const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  try {
    const placeId = "ChIJTwtyACzK2IcRtp0SyMyM1W8"; // E Plumbing and Sewer
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    const response = await fetch(apiUrl); // ✅ this was missing in your original
    const data = await response.json();

    if (!response.ok || !data.result) {
      console.error("Google API Error:", data);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch reviews from Google." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data.result.reviews || []),
    };
  } catch (err) {
    console.error("Serverless Function Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
