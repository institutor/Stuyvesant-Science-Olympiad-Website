
const GlassCard = ({ update }) => {
    if (!update) {
        return null; 
    }
    return (
        <div className="p-6 rounded-2xl bg-slate-800/20 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-slate-800/40 hover:-translate-y-1">
            <div className="text-sm text-blue-400 mb-2">{update.date}</div>
            <h3 className="text-xl text-white font-bold mb-3">{update.title}</h3>
            <p className="text-gray-400 mb-4">{update.description}</p>
            <a href={update.link} className="text-blue-400 hover:text-blue-300 transition-colors">
                Read More →
            </a>
        </div>
    );
};

export default GlassCard;