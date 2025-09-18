import { forwardRef } from 'react';
import { LogoLoop } from '../ui/LogoLoop';
import VeryCoolShinyButtonThing from '../ui/VeryCoolShinyButtonThing';

const sponsorData = [
    { 
        node: <span className="sponsor-text-card">Stuyvesant Parent's Association</span>,
        title: "Stuyvesant Parent's Association",
        href: 'https://stuy-pa.org/' 
    },
    { 
        node: <span className="sponsor-text-card">Stuyvesant Alumni Association</span>,
        title: 'Stuyvesant Alumni Association', 
        href: 'https://www.stuyalumni.org/' 
    },
    { 
        node: <span className="sponsor-text-card">ABCMath</span>,
        title: 'ABCMath', 
        href: 'https://www.abcmath.com/' 
    },
    { 
        node: <span className="sponsor-text-card">Manhattan Bridge Orthodontics</span>,
        title: 'Manhattan Bridge Orthodontics', 
        href: 'https://www.manhattanbridgeortho.com/' 
    },
    { 
        node: <span className="sponsor-text-card">Hudson River Trading</span>,
        title: 'Hudson River Trading', 
        href: 'https://www.hudsonrivertrading.com/' 
    },
];

const Sponsors = forwardRef((props, ref) => (
    <section ref={ref} className="content-section flex items-center justify-center" id="sponsors">
        <div className="max-w-6xl w-full mx-auto px-8">
            <h2 className="text-5xl font-bold mb-16 text-center">Our Valued Sponsors</h2>
            <LogoLoop
                logos={sponsorData}
                speed={100}
                direction="left"
                logoHeight={32} 
                gap={60}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#000000"
            />
            <div className="text-center mt-16">
                <p className="text-gray-400 mb-4">Interested in supporting our team?</p>
                <div className="relative">
                    <VeryCoolShinyButtonThing onClick={() => alert("Sorry I have nothing to put here yet")}>Become a Sponsor</VeryCoolShinyButtonThing>
                </div>
            </div>
        </div>
    </section>
));

export default Sponsors;