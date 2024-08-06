import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import wcag from '../assets/images/wcag.png';

const SkillItem = ({ skill, icon, devicon, image, translate }) => {
  return (
    <li className="my-8 text-center">
      <div className="skill-icon-box flex justify-center items-center px-3">
        {devicon ? (
          <i className={icon} aria-hidden="true"></i>
        ) : image ? (
          <img src={wcag} alt="" width="2013" height="474" />
        ) : (
          <FontAwesomeIcon aria-hidden="true" className="fa-solid" icon={icon} />
        )}
      </div>
      <p className="mt-1" translate={translate}>{skill}</p>
    </li>
  );
};

export default SkillItem;