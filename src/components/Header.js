import { NavLink, useLocation } from 'react-router-dom';
import { useLayoutEffect } from "react";
import Hamburger from './HamburgerButton';

function Header() {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);

    const handleClickHome = () => {
        window.location.href = '/';
    };

    return (
        <header className="gradient-border">
            <a href="#content" className="skip-link button">Skip To Content</a>
            <div className="max-1200px flex">
                <div>
                    <div className="logo">
                    <button onClick={handleClickHome} aria-hidden="true">
                            <p className="text-500 text-center text-uppercase">Riley Hoffman <span className="sr-only"> Home</span></p>
                        </button>
                    </div>
                </div>
                <nav className="menu">
                    <Hamburger />         
                    <ul className="flex block-700" aria-label="Menu Links">
                        <li>
                            <NavLink className="button" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button" to="/projects">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button" to="/skills">
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
