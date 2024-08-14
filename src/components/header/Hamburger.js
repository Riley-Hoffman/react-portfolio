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
            <button id="hamburger" aria-expanded={isExpanded} aria-label={isExpanded ? 'Close Menu' : 'Open Menu'} onClick={toggleMenu} ref={hamburgerRef} className="w-16 h-10 block px-5 ml-auto relative hamburger md:hidden aria-expanded:z-20 peer group">
                {[...Array(4)].map((_, index) => (
                    <span key={index} className="w-7 block absolute border-2 border-solid gradient-border transition-all duration-200 ease-in-out top-4 rotate-0 line brightness-90 first:top-2 last:top-6 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:transition-none group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:w-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:border-0 group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:top-[21px] group-aria-expanded:[&:not(:nth-child(2),:nth-child(3))]:left-[15px] group-aria-expanded:[&:nth-child(2)]:rotate-45 group-aria-expanded:[&:nth-child(3)]:rotate-[-45deg]"></span>
                ))}
            </button>
            <button className="w-full h-full z-10 cursor-default fixed top-0 right-0 bottom-0 left-0 hidden closer peer-aria-expanded:block" onClick={toggleMenu} aria-hidden="true" aria-label="Close Menu"></button>
        </>
    );
};

export default Hamburger;
