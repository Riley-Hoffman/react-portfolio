import { Helmet } from 'react-helmet-async';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import SkillItem from './components/SkillItem';

const Skills = () => {
  const skills = [
    { skill: 'HTML5', icon: 'devicon-html5-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'CSS3', icon: 'devicon-css3-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'Javascript + ES6', icon: 'devicon-javascript-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'SASS', icon: 'devicon-sass-original', devicon: true, image: false, translate: 'no' },
    { skill: 'Tailwind CSS', icon: 'devicon-tailwindcss-original', devicon: true, image: false, translate: 'no' },
    { skill: 'React', icon: 'devicon-react-original', devicon: true, image: false, translate: 'no' },
    { skill: 'Vue.js', icon: 'devicon-vuejs-plain', devicon: true, image: false, translate: 'no' },
    { skill: 'Rest API', icon: faArrowsAltH, devicon: false, image: false, translate: 'no' },
    { skill: 'WCAG', devicon: false, image: true, translate: 'yes' },
    { skill: 'Git', icon: 'devicon-git-plain', devicon: true, image: false, translate: 'no' },
    { skill: 'jQuery', icon: 'devicon-jquery-plain-wordmark', devicon: true, image: false, translate: 'no' },
    { skill: 'Wordpress', icon: 'devicon-wordpress-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'PHP', icon: 'devicon-php-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'Firebase', icon: 'devicon-firebase-plain', devicon: true, image: false, translate: 'no' },
    { skill: 'JSON', icon: 'devicon-json-plain', devicon: true, image: false, translate: 'yes' },
    { skill: 'Netlify', icon: 'devicon-netlify-plain', devicon: true, image: false, translate: 'yes' },
  ];

  return (
    <>
      <Helmet>
          <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Helmet>  
        <section className="pb-16">
          <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white" aria-live="polite">Skills</h1>
          <div className="max-w-screen-xl relative">
              <ul className="max-w-5xl pt-5 pb-12 mt-16 grid grid-cols-2 justify-items-center skills-list sm:grid-cols-3 md:grid-cols-4" aria-label="Skills">
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
              <div className="bg-purple-100 rounded-[50%] z-[-1] opacity-10 absolute top-[3%] right-[5%] bottom-[3%] left-[5%] oval"></div>
          </div>
        </section>
      </>
  );
};

export default Skills;
