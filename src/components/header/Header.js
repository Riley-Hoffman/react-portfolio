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
        <header className="py-4 border-b-2 border-t-[34px] border-solid shadow[0_1px_3px_-3px_black] bg-[#f4eef6] shadow-zinc gradient-border z-[999999]">
            <a href="#content" className="sr-only z-[999999] button focus:not-sr-only focus:p-4 focus:left-4 focus:absolute">Skip To Content</a>
            <div className="max-w-screen-xl flex items-center">
                <div className="logo">
                    <button onClick={handleClickHome}>
                        <p className="pl-4 pr-0 m-0 font-urbanist font-medium text-lg text-center uppercase tracking-wide md:text-2xl">Riley Hoffman</p>
                    </button>
                </div>
                <nav className="py-2 m-auto mr-0 h-14 menu">
                    <Hamburger expanded={handleHamburgerClick} />
                    <ul className="w-52 z-20 text-base shadow-[0_2px_16px_-9px_black] shadow-zinc origin-right transition-transform duration-200 ease-in-out scale-x-0 peer-aria-expanded:scale-100 md:flex m-0 md:w-auto md:shadow-none md:scale-x-100" aria-label="Menu Links">
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
