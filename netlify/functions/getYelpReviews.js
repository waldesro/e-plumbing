import axios from "axios";

export async function handler(event, context) {
  const API_KEY = process.env.YELP_API_KEY;
  const BUSINESS_ID = "I7lKg-Tlr_5xNC5r6J2nRQ";

  try {
    const res = await axios.get(
      `https://api.yelp.com/v3/businesses/${BUSINESS_ID}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(res.data),
    };
  } catch (error) {
    console.error("Error fetching Yelp reviews:", error.response?.status, error.response?.data || error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to fetch Yelp reviews" }),
    };
  }
}
