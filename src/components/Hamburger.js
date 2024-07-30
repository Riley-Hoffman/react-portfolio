import { useRef, useCallback, useEffect } from 'react';

const Hamburger = ({ expanded }) => {
    const isExpandedRef = useRef(false);
    const hamburgerRef = useRef(null);

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
        isExpandedRef.current = !isExpandedRef.current;
        const newIsExpanded = isExpandedRef.current;
        updateAttributes(newIsExpanded);
        if (expanded) {
            expanded(newIsExpanded);
        }
    }, [updateAttributes, expanded]);

    const handleResize = useCallback(() => {
        if (window.innerWidth > 700 && isExpandedRef.current) {
            isExpandedRef.current = false;
            updateAttributes(false);
            if (expanded) {
                expanded(false);
            }
        }
    }, [updateAttributes, expanded]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <div className="hamburger-box">
            <button className="closer" onClick={toggleMenu} aria-label="Close Menu"></button>
            <button id="hamburger" aria-expanded={isExpandedRef.current} aria-label={isExpandedRef.current ? 'Close Menu' : 'Open Menu'} onClick={toggleMenu} ref={hamburgerRef} className="hamburger">
                <span className="line gradient-border"></span>
                <span className="line gradient-border"></span>
                <span className="line gradient-border"></span>
                <span className="line gradient-border"></span>
            </button>
        </div>
    );
};

export default Hamburger;
