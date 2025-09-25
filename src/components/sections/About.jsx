import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import VeryCoolShinyButtonThing from '../ui/VeryCoolShinyButtonThing';

const About = forwardRef((props, ref) => (
    <section ref={ref} className="content-section flex items-center justify-center" id="about">
        <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Who We Are</h2>
            <div className="text-xl leading-relaxed text-gray-300 space-y-6">
                <p>
                    Based in Stuyvesant High School, Stuyvesant Science Olympiad has been the largest outlet for students to explore their love in science for over twenty years. Founded by a passionate group of student scientists and engineers, we quickly burst onto the NYC metropolitan scene as a first place team in 2004, staying on top to this day.
                </p>
                <p>
                    <span className="font-bold"> In recent years, Stuyvesant has managed to perform consistently well at the New York State competition, achieving the highest in-person State placing by any NYC team in history. In 2025, Stuyvesant became the first New York City high school to qualify for an in-person National tournament.</span>
                </p>
                <p>
                    And competition is just part of what we do. We foster a great community of science-oriented individuals and teach everyone the skills they need to succeed!
                </p>
            </div>
            <div className="mt-12">
                <p className="text-xl text-gray-300 mb-4">Also, check out our gallery!</p>
                <Link to="/gallery">
                    <VeryCoolShinyButtonThing className="px-8 py-3 text-lg">
                        View Gallery
                    </VeryCoolShinyButtonThing>
                </Link>
            </div>
        </div>
    </section>
));

export default About;