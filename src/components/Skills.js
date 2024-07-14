import { Helmet } from 'react-helmet-async';
import SkillItem from './SkillItem';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import '../styles/_skills.scss';
import thumbnail from '../assets/thumbnail.jpg'

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
    <div className="skillsMain mainDiv">
      <Helmet>
          <title>Skills - Riley Hoffman - Web Developer</title>
          <meta property="og:image" content={thumbnail} />
          <meta name="description" content="My skills. Riley Hoffman - Web Developer." />
          <link rel="canonical" href="https://rileyhoffman.com/skills/" />
          
      </Helmet>  
        <section className="skills" id="skills">
          <div className="wrapper">
            <div>
              <h1 className="text-center text-40">Skills</h1>
              <ul className="max-1000px skillsGallery">
                {skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    devicon={skill.devicon}
                    icon={skill.icon}
                    skill={skill.name}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Skills;
