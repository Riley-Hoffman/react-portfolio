import { NavLink, useLocation } from 'react-router-dom';
import { useLayoutEffect } from "react";
import Hamburger from './HamburgerButton';

function Header() {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);

    return (
        <header className="gradient-border">
            <a href="#content" className="skip-link button">Skip To Content</a>
            <div className="max-1200px flex" style={{ alignItems: 'center' }}>
                <div>
                    <div className="logo">
                        <NavLink to="/" style={{ textDecoration: 'none', display: 'block' }} activeclasscame="active">
                            <p className="text-halfbold text-center text-uppercase" style={{ color: '#212738', fontFamily: '"Karla", sans-serif', margin: '0', padding: '0 0 0 10px', fontSize: '18px' }}>Riley Hoffman <span className="sr-only"> Home</span></p>
                        </NavLink>
                    </div>
                </div>
                <nav className="menu">
                    <Hamburger />         
                    <ul className="flex block-700" style={{ alignItems: 'center' }} >
                        <li>
                            <NavLink className="button" to="/" activeclasscame="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button" to="/projects" activeclasscame="active">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button" to="/skills" activeclasscame="active">
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button" to="/contact" activeclasscame="active">
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
