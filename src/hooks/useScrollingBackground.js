import { useEffect, useRef, useState } from 'react';

const useScrollingBackground = (velocity = 0.1) => {
    const containerRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        let ticking = false;

        const updateScrollPosition = () => {
            setScrollPos(window.scrollY);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateBackgroundPosition = () => {
            if (containerRef.current) {
                const height = containerRef.current.offsetHeight - 18;
                containerRef.current.style.backgroundPosition = `-${Math.round((height - scrollPos) * velocity)}px center`;
            }
        };

        updateBackgroundPosition();
    }, [scrollPos, velocity]);

    return containerRef;
}

export default useScrollingBackground;
