import { useState, useRef, useCallback } from 'react';

const Hamburger = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const HamburgerRef = useRef(null);

    const toggleMenu = useCallback(() => {
        setIsExpanded(prevState => {
            const newIsExpanded = !prevState;

            if (HamburgerRef.current) {
                HamburgerRef.current.setAttribute('aria-expanded', newIsExpanded);
                HamburgerRef.current.setAttribute('aria-label', newIsExpanded ? 'Close Menu' : 'Open Menu');
                
                const parentNode = HamburgerRef.current.parentNode;
                if (parentNode) {
                    parentNode.dataset.open = newIsExpanded.toString();
                }
            }

            return newIsExpanded;
        });
    }, []);

    return (
        <div className="hamburger-box">
            <button
                className="closer"
                onClick={toggleMenu}
                aria-label="Close Menu"
            ></button>
            <button
                id="hamburger"
                aria-expanded={isExpanded}
                aria-label={isExpanded ? 'Close Menu' : 'Open Menu'}
                onClick={toggleMenu}
                ref={HamburgerRef}
                className="hamburger"
            >
                <span className="line gradient-border"></span>
                <span className="line gradient-border"></span>
                <span className="line gradient-border"></span>
                <span className="line gradient-border"></span>
            </button>
        </div>
    );
};

export default Hamburger;