import { useEffect, useRef, useState } from 'react';

const useParallax = (velocity = 0.1) => {
    const imageRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        setScrollPos(window.scrollY);
    }, []);

    useEffect(() => {
        const updateImagePosition = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                const height = rect.height;
                setPosition({
                    left: -Math.round((height - scrollPos) * velocity),
                    top: -Math.round((height - scrollPos) * (velocity + 0.1)),
                });
            }
        };

        updateImagePosition();
    }, [scrollPos, velocity])

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

    return {imageRef, position};
}

export default useParallax;
