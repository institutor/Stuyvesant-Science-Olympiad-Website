import { forwardRef } from 'react';
import GlassCard from '../ui/GlassCard';
import VeryCoolShinyButtonThing from '../ui/VeryCoolShinyButtonThing';
const updatesData = [ { date: 'Dec 420, 6969', title: 'event', text: 'Lorem Ipsum..' }, ];
const Updates = forwardRef((props, ref) => (
    <section ref={ref} className="content-section" id="updates">
        <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-5xl font-bold mb-12 text-center">Latest Briefings</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {updatesData.map(update => <GlassCard key={update.title} update={update} />)}
            </div>
            <div className="text-center mt-8">
                <VeryCoolShinyButtonThing>View All Updates</VeryCoolShinyButtonThing>
            </div>
        </div>
    </section>
));

export default Updates;