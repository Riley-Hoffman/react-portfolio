import { Helmet } from 'react-helmet-async';
import SkillItem from '../SkillItem';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import '../../styles/pages/_skills.scss';

const Skills = () => {
  const skills = [
    { skill: 'HTML5', icon: 'devicon-html5-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'CSS3', icon: 'devicon-css3-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'Javascript + ES6', icon: 'devicon-javascript-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'SASS', icon: 'devicon-sass-original', devicon: true, image: false, translate: 'no' },
    { skill: 'React', icon: 'devicon-react-original', devicon: true, image: false, translate: 'no' },
    { skill: 'Vue.js', icon: 'devicon-vuejs-plain', devicon: true, image: false, translate: 'no' },
    { skill: 'Rest API', icon: faArrowsAltH, devicon: false, image: false, translate: 'no' },
    { skill: 'Accessibility', icon: faUniversalAccess, devicon: false, image: false, translate: 'yes' },
    { skill: 'WCAG', devicon: false, image: true, translate: 'yes' },
    { skill: 'Git', icon: 'devicon-git-plain', devicon: true, image: false, translate: 'no' },
    { skill: 'jQuery', icon: 'devicon-jquery-plain-wordmark', devicon: true, image: false, translate: 'no' },
    { skill: 'Wordpress', icon: 'devicon-wordpress-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'PHP', icon: 'devicon-php-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'Firebase', icon: 'devicon-firebase-plain', devicon: true, image: false, translate: 'no' },
    { skill: 'JSON', icon: 'devicon-json-plain', devicon: true, image: false, translate: 'yes' },
  ];

  return (
    <div>
      <Helmet>
          <title>Skills - Riley Hoffman - Web Developer</title>
          <meta property="og:title" content="Skills - Riley Hoffman - Web Developer" />
          <meta name="description" content="My skills. Riley Hoffman - Web Developer." />
          <meta property="og:url" content="https://rileyhoffman.com/skills" />
          <link rel="canonical" href="https://rileyhoffman.com/skills" />
          <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Helmet>  
        <section>
          <h1 className="text-center text-40 banner-heading gradient-border inverted">Skills</h1>
          <div className="max-1200px skills">
              <ul className="max-1000px block-400 skills-list" aria-label="Skills">
                {skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    skill={skill.skill}
                    devicon={skill.devicon}
                    icon={skill.icon}
                    image={skill.image}
                    translate={skill.translate}
                  />
                ))}
              </ul>
              <div className="oval"></div>
          </div>
        </section>
      </div>
  );
};

export default Skills;
