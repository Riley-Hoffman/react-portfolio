import { useLocation } from 'react-router-dom';
import { useState, useRef, useCallback, useEffect } from 'react';

const Hamburger = ({ expanded }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hamburgerRef = useRef(null);
    const location = useLocation();

    const updateAttributes = useCallback((newIsExpanded) => {
        if (hamburgerRef.current) {
            hamburgerRef.current.setAttribute('aria-expanded', newIsExpanded.toString());
            const parentNode = hamburgerRef.current.parentNode;
            if (parentNode) {
                parentNode.dataset.open = newIsExpanded.toString();
            }
        }
    }, []);

    const toggleMenu = useCallback(() => {
        setIsExpanded(prevState => {
            const newIsExpanded = !prevState;
            updateAttributes(newIsExpanded);
            if (expanded) {
                expanded(newIsExpanded);
            }
            return newIsExpanded;
        });
    }, [updateAttributes, expanded]);

    const handleResize = useCallback(() => {
        if (window.innerWidth > 700 && isExpanded) {
            setIsExpanded(false);
            updateAttributes(false);
            if (expanded) {
                expanded(false);
            }
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
        <div className="hamburger-box">
            <button className="closer" onClick={toggleMenu} aria-label="Close Menu" ></button>
            <button id="hamburger" aria-expanded={isExpanded} aria-label={isExpanded ? 'Close Menu' : 'Open Menu'} onClick={toggleMenu} ref={hamburgerRef} className="hamburger" >
                <span className="line gradient-border"></span>
                <span className="line gradient-border"></span>
                <span className="line gradient-border"></span>
                <span className="line gradient-border"></span>
            </button>
        </div>
    );
};

export default Hamburger;
