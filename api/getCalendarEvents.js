

export default async function handler(req, res) {
  const API_KEY = process.env.GOOGLE_API_KEY;
  const CALENDAR_ID = process.env.CALENDAR_ID;
  if (!API_KEY || !CALENDAR_ID) {
    console.error(" API key or Calendar ID missing");
    return res.status(500).json({ error: 'API configuration is missing on the server.' });
  }
  const now = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${now}&maxResults=6&singleEvents=true&orderBy=startTime`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
        console.error("Google Calendar API Error:", data.error.message);
        throw new Error(data.error.message);
    }
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate'); 
    return res.status(200).json(data);
  } catch (error) {
    console.error("Serverless Function encountered an error:", error.message);
    return res.status(500).json({ error: error.message });
  }
}