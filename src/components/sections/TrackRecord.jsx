import { forwardRef, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollStack, ScrollStackItem } from '../ui/ScrollStack';

gsap.registerPlugin(ScrollTrigger);

const trackRecordData = [
  {
    title: "Nationals Qualified",
    description: "In 2024, we made history by qualifying for the Science Olympiad National Tournament for the first time, placing among the top teams in the country.",
  },
  {
    title: "2nd Place - NY State",
    description: "For the past two years, we have been the top team from NYC and have secured 2nd place at the highly competitive New York State finals.",
  },
  {
    title: "1st Place - NYC Regionals",
    description: "Dominating the local scene, we have consistently won 1st place at the New York City regionals, showcasing our depth of talent across all events.",
  },
  {
    title: "Top 5 - National Invitationals",
    description: "Competing against the best teams nationwide, we achieved 2nd place at Yale (YUSO) and 5th place at Columbia (CUSO) in the 2025 season.",
  },
];

const TrackRecord = forwardRef((props, ref) => {
  const containerRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray('.scroll-stack-card');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,  
        scrub: 1,    
        start: "top top",
        end: `+=${cards.length * 500}`, 
      }
    });
    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        tl.to(card, {
          scale: 0.95 - (index * 0.025), 
          y: `-=${index * 5}`,
        }, index * 0.2); 
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={ref} id="track-record" className="relative z-10 pt-24">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold mb-4">Our Track Record</h2>
        <p className="text-xl text-gray-400 mb-20">A legacy of excellence and a future of innovation.</p>

        <ScrollStack>
          {trackRecordData.map((item, index) => (
            <ScrollStackItem key={index}>
              <h3 className="text-3xl font-bold gradient-text mb-4">{item.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
});

export default TrackRecord;