
export async function GET(request) {
  const API_KEY = process.env.GOOGLE_API_KEY;
  const CALENDAR_ID = process.env.CALENDAR_ID;

  if (!API_KEY || !CALENDAR_ID) {
    return new Response(JSON.stringify({ error: 'API configuration is missing' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  const now = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${now}&maxResults=6&singleEvents=true&orderBy=startTime`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=60, stale-while-revalidate'
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}