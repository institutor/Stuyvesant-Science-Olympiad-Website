import { forwardRef } from 'react';
import VeryCoolShinyButtonThing from '../ui/VeryCoolShinyButtonThing';

const CTA = forwardRef((props, ref) => (
    <section 
      ref={ref} 
      className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-32" 
      id="cta"
    >
        <div className="text-center">
            <h2 className="text-6xl font-bold mb-8">Ready to Compete?</h2>
            <p className="text-2xl text-gray-300 mb-12">Join us in pushing the boundaries of scientific excellence</p>
            <a href="https://epsilon.stuysu.org/stuyoly" target="_blank" rel="noopener noreferrer">
                <VeryCoolShinyButtonThing className="px-12 py-4 text-xl">
                    Learn More
                </VeryCoolShinyButtonThing>
            </a>
        </div>
    </section>
));

export default CTA;