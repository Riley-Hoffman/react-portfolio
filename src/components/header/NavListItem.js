import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavListItem({ to, label, hide, isResume, resumePdf }) {
    const commonClasses = 'w-full inline-block py-3 pr-5 pl-14 tracking-wider whitespace-nowrap button md:py-2 md:px-4 md:inline-block md:w-auto hover:[&.button]:bg-pink-200 hover:brightness-90';
    const hiddenClass = hide ? 'hidden' : '';    
    return (
        <li className="block md:inline">
            {isResume ? (
                <a className={`button ${commonClasses} ${hiddenClass}`} href={resumePdf} target="_blank" rel="noopener noreferrer" >
                    Resume
                </a>
            ) : (
                <NavLink className={`button ${commonClasses} ${hiddenClass} hover:[&.active]:brightness-100 [&.active]:bg-pink-200 [&.active]:text-zinc`} to={to} >
                    {label}
                </NavLink>
            )}
        </li>
    );
}

NavListItem.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
    hide: PropTypes.bool,
    isResume: PropTypes.bool,
    resumePdf: PropTypes.string
};

NavListItem.defaultProps = {
    to: '',
    label: '',
    hide: false,
    isResume: false,
    resumePdf: ''
};

export default NavListItem;
