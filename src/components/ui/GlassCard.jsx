
const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

const GlassCard = ({ event }) => {
    if (!event) return null;
    const eventDate = event.start?.dateTime || event.start?.date;
    const eventLink = event.htmlLink || '#';
    return (
        <div className="p-6 h-full flex flex-col justify-between rounded-2xl bg-slate-800/20 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-slate-800/40 hover:-translate-y-1">
            <div>
                <div className="text-sm text-blue-400 mb-2">{formatDate(eventDate)}</div>
                <h3 className="text-xl text-white font-bold mb-3">{event.summary || 'No Title'}</h3>
                {event.description && <p className="text-gray-400 mb-4 line-clamp-3">{event.description}</p>}
            </div>
            <a href={eventLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors mt-4 self-start">
                View Event →
            </a>
        </div>
    );
};

export default GlassCard;