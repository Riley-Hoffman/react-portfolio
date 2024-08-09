import { useEffect, useRef, useState } from 'react';

const useParallax = (velocity = 0.1) => {
    const imageRef = useRef(null);
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
        const updateImagePosition = () => {
            if (imageRef.current) {
                const height = imageRef.current.offsetHeight - 18;
                imageRef.current.style.left = `-${Math.round((height - scrollPos) * velocity)}px`;
                imageRef.current.style.top = `-${Math.round((height - scrollPos) * (velocity + 0.1))}px`;
            }
        };

        updateImagePosition();
    }, [scrollPos, velocity]);

    return imageRef;
}

export default useParallax;
