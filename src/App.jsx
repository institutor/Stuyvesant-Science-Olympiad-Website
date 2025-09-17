import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';

import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import { StickyBanner } from './components/ui/StickyBanner';
import CustomCursor from './components/ui/CustomCursor';
import ConstellationBackground from './components/layout/ConstellationBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Achievements from './components/sections/Achievements';
import Updates from './components/sections/Updates';
import Sponsors from './components/sections/Sponsors';
import CTA from './components/sections/CTA';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const formatBannerDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [eventsError, setEventsError] = useState(null);

  const backgroundRef = useRef();
  const mainContainerRef = useRef();
  
  const sectionRefs = {
    hero: useRef(),
    about: useRef(),
    achievements: useRef(),
    updates: useRef(),
    sponsors: useRef(),
    cta: useRef(),
  };

  const cameraPositions = [
    { x: 0, y: 0, z: 20 }, { x: -5, y: 2, z: 8 }, { x: 5, y: 5, z: 3 },
    { x: -8, y: 3, z: 5 }, { x: 8, y: -3, z: 5 }, { x: 0, y: 0, z: 25 }
  ];

  useEffect(() => {
    const url = '/api/getCalendarEvents';
    const fetchEvents = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Server responded with status: ${response.status}`);
            const data = await response.json();
            setEvents(data.items || []);
        } catch (err) {
            setEventsError(err.message);
        } finally {
            setLoadingEvents(false);
        }
    };
    fetchEvents();
  }, []);

  useGSAP(() => {
    if (!isLoaded) return;
    const camera = backgroundRef.current?.camera;
    if (!camera) return;
    const sections = Object.values(sectionRefs).map(ref => ref.current);
    sections.forEach((section, index) => {
        if (index > 0) {
            gsap.from(section.firstChild, {
                y: 100, opacity: 0,
                scrollTrigger: { trigger: section, start: 'top 85%', end: 'center 75%', scrub: 1 }
            });
        }
        ScrollTrigger.create({
            trigger: section, start: 'top center', end: 'bottom center',
            onToggle: self => {
                if (self.isActive) {
                    gsap.to(camera.position, { ...cameraPositions[index], duration: 2, ease: "power2.inOut" });
                }
            },
        });
    });
  }, { dependencies: [isLoaded], scope: mainContainerRef });

  const nextEvent = events && events.length > 0 ? events[0] : null;

  return (
    <div className="cursor-none">
      <CustomCursor />
      <ConstellationBackground ref={backgroundRef} />
      {!isLoaded && <Preloader onLoaded={() => setIsLoaded(true)} />}
      
      <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}>
        <Navbar />
        <div className="pl-20"> 
            <AnimatePresence>
                {nextEvent && (
                    <StickyBanner>
                        <div className="text-center text-sm font-medium text-slate-200">
                            <span>Next Event: {nextEvent.summary}</span>
                            <span className="mx-2 text-slate-500">|</span>
                            <span>{formatBannerDate(nextEvent.start?.dateTime || nextEvent.start?.date)}</span>
                            <a href="#updates" className="ml-4 underline hover:text-cyan-300 transition-colors">
                                See Details
                            </a>
                        </div>
                    </StickyBanner>
                )}
            </AnimatePresence>

            <main ref={mainContainerRef}>
                <Hero ref={sectionRefs.hero} isLoaded={isLoaded} />
                <About ref={sectionRefs.about} />
                <Achievements ref={sectionRefs.achievements} />
                <Updates ref={sectionRefs.updates} events={events} loading={loadingEvents} error={eventsError} />
                <Sponsors ref={sectionRefs.sponsors} />
                <CTA ref={sectionRefs.cta} />
                <div className="h-[30vh]" />
            </main>
        </div>
      </div>
    </div>
  );
}

export default App;