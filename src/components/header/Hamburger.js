import { useLocation } from 'react-router-dom';
import { useState, useRef, useCallback, useEffect } from 'react';

const Hamburger = ({ expanded }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hamburgerRef = useRef(null);
    const location = useLocation();

    const updateAttributes = useCallback((newIsExpanded) => {
        if (hamburgerRef.current) {
            const { current: hamburgerElement } = hamburgerRef;
            hamburgerElement.setAttribute('aria-expanded', newIsExpanded.toString());
        }
    }, []);

    const toggleMenu = useCallback(() => {
        setIsExpanded(prevState => {
            const newIsExpanded = !prevState;
            updateAttributes(newIsExpanded);
            expanded?.(newIsExpanded);
            return newIsExpanded;
        });
    }, [updateAttributes, expanded]);

    const handleResize = useCallback(() => {
        if (window.innerWidth > 700 && isExpanded) {
            setIsExpanded(false);
            updateAttributes(false);
            expanded?.(false);
        }
    }, [isExpanded, updateAttributes, expanded]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    useEffect(() => {
        setIsExpanded(false);
        updateAttributes(false);
    }, [location, updateAttributes]);

    return (
        <>
            <button id="hamburger" aria-expanded={isExpanded} aria-label={isExpanded ? 'Close Menu' : 'Open Menu'} onClick={toggleMenu} ref={hamburgerRef} className="w-16 px-5 ml-auto relative md:none block md:hidden h-10 hamburger">
                {[...Array(4)].map((_, index) => (
                    <span key={index} className="block absolute line w-7 border-2 border-solid gradient-border"></span>
                ))}
            </button>
            <button className="w-full h-full z-10 cursor-default closer" onClick={toggleMenu} aria-label="Close Menu"></button>
        </>
    );
};

export default Hamburger;
