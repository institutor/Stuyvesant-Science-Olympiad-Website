import { forwardRef, useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';

const Updates = forwardRef((props, ref) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const url = '/api/getCalendarEvents';

        const fetchEvents = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Our server responded with status: ${response.status}`);
                }
                const data = await response.json();
                setEvents(data.items || []);
            } catch (err) {
                console.error("Error fetching events:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const renderContent = () => {
        if (loading) {
            return <p className="text-center text-gray-400">Loading upcoming events...</p>;
        }
        if (error) {
            return <p className="text-center text-red-400">Failed to load events. Please try again later.</p>;
        }
        if (events.length === 0) {
            return <p className="text-center text-gray-400">No upcoming events scheduled. Check back soon!</p>;
        }
        return (
            <div className="grid md:grid-cols-3 gap-6">
                {events.map(event => <GlassCard key={event.id} event={event} />)}
            </div>
        );
    };
    return (
        <section ref={ref} className="content-section" id="updates">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-5xl font-bold mb-12 text-center">Upcoming Events</h2>
                {renderContent()}
            </div>
        </section>
    );
});

export default Updates;