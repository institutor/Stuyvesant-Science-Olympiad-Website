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
    const timer = setTimeout(() => {
      const cards = gsap.utils.toArray('.scroll-stack-card');  
      gsap.to(cards, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: true
          }
      });
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: ".track-record-end",
          end: "top top",
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, { scope: containerRef });

  return (
    <section ref={ref} className="content-section" id="track-record">
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
        <div className="track-record-end h-[20vh]"></div>
      </div>
    </section>
  );
});

export default TrackRecord;