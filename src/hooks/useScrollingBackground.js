import { useEffect, useRef, useState } from 'react';

function useScrollingBackground(velocity = 0.1) {
    const containerRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollPos(currentScrollPos);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const height = containerRef.current.offsetHeight - 18;
            containerRef.current.style.backgroundPosition = `-${Math.round((height - scrollPos) * velocity)}px center`;
        }
    }, [scrollPos, velocity]);

    return containerRef;
}

export default useScrollingBackground;
