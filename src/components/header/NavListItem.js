import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavListItem({ to, label, hide, isResume, resumePdf }) {
    return (
        <li className="md:inline block">
            {isResume ? (
                <a className={`w-full inline-block py-3 pr-5 pl-14 tracking-wider whitespace-nowrap button ${hide ? 'hidden' : ''} md:py-2 md:px-4 hover:[&.button]:bg-pink-200 hover:brightness-90`} href={resumePdf} target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            ) : (
                <NavLink className={`w-full inline-block py-3 pr-5 pl-14 tracking-wider whitespace-nowrap button ${hide ? 'hidden' : ''} md:py-2 md:px-4 hover:[&.button]:bg-pink-200 hover:brightness-90 hover:[&.active]:brightness-100 [&.active]:bg-pink-200 [&.active]:text-zinc-900`} to={to}>
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
    resume: PropTypes.string
};

NavListItem.defaultProps = {
    to: '',
    label: '',
    hide: false,
    isResume: false,
    resume: ''
};

export default NavListItem;
