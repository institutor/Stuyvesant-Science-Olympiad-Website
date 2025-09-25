import { forwardRef } from 'react';
import { StickyScroll } from '../ui/StickyScroll';

const achievements = [
    {
        title: "Dominating Regionals & States",
        description: "Consistency and excellence are our hallmarks. By securing First Place at the NYC West Regionals and an incredible Second Place at the New York State tournament, we've solidified our position as a top contender.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white text-center p-4">
                <h3 className="text-3xl font-bold">2nd Place at States</h3>
            </div>
        )
    },
    {
        title: "Nationals Qualified",
        description: "Last year, we made history. For the first time, our team's hard work and dedication earned us a spot at the Science Olympiad National Tournament, competing against the best teams in the country.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white text-center p-4">
                 <h3 className="text-3xl font-bold">Nationals Bound!</h3>
            </div>
        )
    },
    {
        title: "Invitational Success",
        description: "We consistently test our skills against the nation's elite at prestigious university invitationals. In 2025, we proudly achieved 2nd place at Yale (YUSO) and 5th place at Columbia (CUSO), proving our mettle on the national stage.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white text-center p-4">
                <h3 className="text-3xl font-bold">Top 5 at Yale & Columbia</h3>
            </div>
        )
    },
];

const Achievements = forwardRef((props, ref) => (
    <section ref={ref} className="content-section flex-col items-center justify-center" id="achievements">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Track Record</h2>
        <StickyScroll content={achievements} />
    </section>
));

export default Achievements;