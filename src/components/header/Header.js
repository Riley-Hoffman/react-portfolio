import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useState, useEffect } from 'react';
import Hamburger from './Hamburger';
import resumePdf from '../../assets/files/riley-hoffman-resume.pdf';
import NavListItem from './NavListItem';

function Header() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hide, setHide] = useState(false);
    const location = useLocation();

    const handleHamburgerClick = (expanded) => {
        setIsExpanded(expanded);
    };

    useEffect(() => {
        setIsExpanded(false);
    }, [location]);

    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);

    useEffect(() => {
        let timeoutId = null;
        const handleHideShowLinks = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            if (window.innerWidth <= 700 && !isExpanded) {
                timeoutId = setTimeout(() => {
                    setHide(true);
                }, 500);
            } else {
                setHide(false);
            }
        };

        window.addEventListener('resize', handleHideShowLinks);

        handleHideShowLinks();

        return () => {
            window.removeEventListener('resize', handleHideShowLinks);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isExpanded]);

    const handleClickHome = () => {
        window.location.href = '/';
    };

    const menuLinks = [
        { to: '/', label: 'Home' },
        { to: '/projects', label: 'Projects' },
        { to: '/skills', label: 'Skills' },
        { to: '/faq', label: 'FAQ' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <header className="gradient-border">
            <a href="#content" className="skip-link button">Skip To Content</a>
            <div className="max-1200px flex">
                <div className="logo">
                    <button onClick={handleClickHome} aria-label="Back to home page">
                        <p className="text-22 text-500 text-center text-uppercase">Riley Hoffman</p>
                    </button>
                </div>
                <nav className="menu">
                    <Hamburger expanded={handleHamburgerClick} />
                    <ul className="flex block-700" aria-label="Menu Links">
                        {menuLinks.map(({ to, label }) => (
                            <NavListItem key={to} to={to} label={label} hide={hide} />
                        ))}
                        <NavListItem isResume resumePdf={resumePdf} hide={hide} />
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
