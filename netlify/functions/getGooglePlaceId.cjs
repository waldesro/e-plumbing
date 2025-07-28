const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const query = "E Plumbing and Sewer";

  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
    query
  )}&inputtype=textquery&fields=place_id,name,formatted_address&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.candidates && data.candidates.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({ result: data.candidates[0] }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "No place found for that name." }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
