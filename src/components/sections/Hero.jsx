import { forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextHoverEffect } from '../ui/TextHoverEffect';

const Hero = forwardRef(({ isLoaded }, ref) => {
    
    useGSAP(() => {
        if(isLoaded) {
            gsap.to('.hero-title-char', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.03,
                ease: "power3.out",
                delay: 0.5
            });
        }
    }, { dependencies: [isLoaded], scope: ref });

    return (
        <section ref={ref} className="content-section relative flex items-center justify-center text-center" id="home">
            <div>
                <h1 className="hero-title">
                    <div className="h-16 md:h-24 mb-8">
                        {'WE ARE'.split('').map((char, i) => (
                            <span key={i} className="hero-title-char opacity-0 inline-block translate-y-8">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </div>
                    <div className="h-24 md:h-40">
                        <TextHoverEffect text="STUYOLY" />
                    </div>
                </h1>
                
                <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2">
                    <p className="text-sm opacity-60 mb-2">Scroll to Explore</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </div>
        </section>
    );
});

export default Hero;