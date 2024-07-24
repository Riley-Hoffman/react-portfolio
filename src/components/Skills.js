import { Helmet } from 'react-helmet-async';
import SkillItem from './SkillItem';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import '../styles/_skills.scss';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'devicon-html5-plain', devicon: true },
    { name: 'CSS3', icon: 'devicon-css3-plain', devicon: true },
    { name: 'Javascript + ES6', icon: 'devicon-javascript-plain', devicon: true },
    { name: 'SASS', icon: 'devicon-sass-original', devicon: true },
    { name: 'Accessibility', icon: faUniversalAccess, devicon: false },
    { name: 'React', icon: 'devicon-react-original', devicon: true },
    { name: 'Rest API', icon: faArrowsAltH, devicon: false },
    { name: 'Github', icon: 'devicon-github-original', devicon: true },
    { name: 'Vue.js', icon: 'devicon-vuejs-plain', devicon: true },
    { name: 'jQuery', icon: 'devicon-jquery-plain-wordmark', devicon: true },
    { name: 'Wordpress', icon: 'devicon-wordpress-plain', devicon: true },
    { name: 'PHP', icon: 'devicon-php-plain', devicon: true },
    { name: 'Firebase', icon: 'devicon-firebase-plain', devicon: true },
    { name: 'VS Code', icon: 'devicon-vscode-plain', devicon: true },
    { name: 'Photoshop', icon: 'devicon-photoshop-plain', devicon: true },
  ];

  return (
    <div>
      <Helmet>
          <title>Skills - Riley Hoffman - Web Developer</title>
          <meta property="og:title" content="Skills - Riley Hoffman - Web Developer" />
          <meta name="description" content="My skills. Riley Hoffman - Web Developer." />
          <meta property="og:url" content="https://rileyhoffman.com/skills" />
          <link rel="canonical" href="https://rileyhoffman.com/skills" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Helmet>  
        <section>
          <h1 className="text-center text-40 banner-heading gradient-border inverted">Skills</h1>
          <div className="max-1200px skills">
              <ul className="max-1000px block-400 skillsGallery" aria-label="Skills">
                {skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    devicon={skill.devicon}
                    icon={skill.icon}
                    skill={skill.name}
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
