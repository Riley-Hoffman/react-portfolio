import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillItem = ({ devicon, icon, skill, safari }) => {
  return (
    <li className="text-center">
      <div className={`skill-icon-box ${safari ? 'noAnimation' : ''}`}>
        {devicon ? (
          <i className={icon} aria-hidden="true"></i>
        ) : (
          <FontAwesomeIcon aria-hidden="true" className="fa-solid" icon={icon} />
        )}
      </div>
      <p>{skill}</p>
    </li>
  );
};

export default SkillItem;