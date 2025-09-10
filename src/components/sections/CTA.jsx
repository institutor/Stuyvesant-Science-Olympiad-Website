import { forwardRef } from 'react';

import VeryCoolShinyButtonThing from '../ui/VeryCoolShinyButtonThing'; 

const CTA = forwardRef((props, ref) => (
    <section ref={ref} className="content-section" id="cta">
        <div className="text-center">
            <h2 className="text-6xl font-bold mb-8">Ready to Compete?</h2>
            <p className="text-2xl text-gray-300 mb-12">Join us in pushing the boundaries of scientific excellence</p>
            <VeryCoolShinyButtonThing className="px-12 py-4 text-xl">
                Join Our Team
            </VeryCoolShinyButtonThing>
        </div>
    </section>
));

export default CTA;