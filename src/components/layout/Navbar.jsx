import { useEffect, useState } from 'react';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center p-5 backdrop-blur-sm bg-black/20 rounded-b-2xl">
                <a href="#home" aria-label="Back to top">
                    <img src="src\components\images\logo.png" alt="Stuyvesant Science Olympiad Logo" className="h-22 w-auto" />
                </a>
                
                <div className="hidden md:flex gap-8 text-slate-300">
                    <a href="#home" className="hover:text-white transition-colors">Home</a>
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#track-record" className="hover:text-white transition-colors">Achievements</a>
                    <a href="#updates" className="hover:text-white transition-colors">Updates</a>
                    <a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;