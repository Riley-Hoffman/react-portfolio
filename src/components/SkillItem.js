import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import wcag from '../assets/images/wcag.png';

const SkillItem = ({ skill, icon, devicon, image }) => {
  return (
    <li className="text-center">
      <div className="skill-icon-box flex">
        {devicon ? (
          <i className={icon} aria-hidden="true"></i>
        ) : image ? (
          <img src={wcag} alt="" width="2013" height="474" />
        ) : (
          <FontAwesomeIcon aria-hidden="true" className="fa-solid" icon={icon} />
        )}
      </div>
      <p>{skill}</p>
    </li>
  );
};

export default SkillItem;