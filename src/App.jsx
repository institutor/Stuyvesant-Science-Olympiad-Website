import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import ConstellationBackground from './components/layout/ConstellationBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Achievements from './components/sections/Achievements';
import Updates from './components/sections/Updates';
import Sponsors from './components/sections/Sponsors';
import CTA from './components/sections/CTA';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
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
    { x: 0, y: 0, z: 20 },   
    { x: -5, y: 2, z: 8 },  
    { x: 5, y: 5, z: 3 },  
    { x: -8, y: 3, z: 5 },  
    { x: 8, y: -3, z: 5 },  
    { x: 0, y: 0, z: 25 }    
  ];

  useGSAP(() => {
    if (!isLoaded) return;
    const camera = backgroundRef.current?.camera;
    if (!camera) return;
    const sections = Object.values(sectionRefs).map(ref => ref.current);
    sections.forEach((section, index) => {
        if (index > 0) {
            gsap.from(section.firstChild, {
                y: 100,
                opacity: 0,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    end: 'center 75%',
                    scrub: 1,
                }
            });
        }
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onToggle: self => {
                if (self.isActive) {
                    gsap.to(camera.position, { ...cameraPositions[index], duration: 2, ease: "power2.inOut" });
                }
            },
        });
    });
  }, { dependencies: [isLoaded], scope: mainContainerRef });
  return (
    <main ref={mainContainerRef} className="cursor-none">
      <CustomCursor />
      <ConstellationBackground ref={backgroundRef} />
      {!isLoaded && <Preloader onLoaded={() => setIsLoaded(true)} />}
      <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}>
        <Navbar />
        <Hero ref={sectionRefs.hero} isLoaded={isLoaded} />
        <About ref={sectionRefs.about} />
        <Achievements ref={sectionRefs.achievements} /> 
        <Updates ref={sectionRefs.updates} />
        <Sponsors ref={sectionRefs.sponsors} />
        <CTA ref={sectionRefs.cta} />
        <div className="h-[50vh]" />
      </div>h
    </main>
  );
}

export default App;