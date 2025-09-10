import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        const linksAndButtons = document.querySelectorAll('a, button');
        const onMouseEnter = () => cursorRef.current.classList.add('hover');
        const onMouseLeave = () => cursorRef.current.classList.remove('hover');
        linksAndButtons.forEach(el => el.addEventListener('mouseenter', onMouseEnter));
        linksAndButtons.forEach(el => el.addEventListener('mouseleave', onMouseLeave));
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            linksAndButtons.forEach(el => el.removeEventListener('mouseenter', onMouseEnter));
            linksAndButtons.forEach(el => el.removeEventListener('mouseleave', onMouseLeave));
        };
    }, []);
    return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
};

export default CustomCursor;