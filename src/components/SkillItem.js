import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import wcag from '../assets/images/wcag.png';

const SkillItem = ({ skill, icon, devicon, image, translate }) => {
  return (
    <li className="my-8 text-center">
      <div className="px-3 flex justify-center items-center skill-icon-box">
        {devicon ? (
          <i className={`text-5xl ${icon}`} aria-hidden="true"></i>
        ) : image ? (
          <img src={wcag} alt="" width="2013" height="474" />
        ) : (
          <FontAwesomeIcon aria-hidden="true" className="text-5xl" icon={icon} />
        )}
      </div>
      <p className="mt-1" translate={translate}>{skill}</p>
    </li>
  );
};

export default SkillItem;