import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavListItem({ to, label, hide, isResume, resumePdf }) {
    return (
        <li>
            {isResume ? (
                <a className={`button${hide ? ' hidden' : ''}`} href={resumePdf} target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            ) : (
                <NavLink className={`button${hide ? ' hidden' : ''}`} to={to}>
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
