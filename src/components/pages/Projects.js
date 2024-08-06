import { Helmet } from 'react-helmet-async';
import ProjectBox from '../ProjectBox';
import evangeline from '../../assets/images/evangeline-gentle-music.jpg';
import particleCleanup from '../../assets/images/particle-cleanup.jpg';
import outOfContext from '../../assets/images/out-of-context.jpg';
import infinityCorkboard from '../../assets/images/infinity-corkboard.jpg';
import weatherScout from '../../assets/images/weather-scout.jpg';
import delicious from '../../assets/images/delicious.jpg';
import '../../styles/animations/_triggerOnScroll.scss';

const Projects = () => {
  const projects = {
    freelance: [
      {
        title: 'Evangeline Gentle Music',
        skills: 'Wordpress/PHP, HTML, CSS, jQuery',
        description: 'Lost Wordpress theme rebuild. Created a new custom WP theme with the original look. Implemented page/post/archive templates, primary/mobile navigations, widget area, functions.php etc. Got client back up and running, editing their own content.',
        liveUrl: 'https://evangelinegentlemusic.com/',
        gitUrl: '',
        imgUrl: evangeline,
        imgAlt: 'Screenshot of Evangeline Gentle Music Wordpress Theme.',
        animation: 'no-animation'
      }
    ],
    personal: [
      {
        title: 'Particle Cleanup Game',
        skills: 'React, JSX, SCSS',
        description: 'A game which generates particles from you to clean up by pushing them out of the canvas.',
        liveUrl: '/projects/particle-cleanup',
        gitUrl: '',
        imgUrl: particleCleanup,
        imgAlt: 'Screenshot of Particle Cleanup Game.',
        animation: 'trigger-on-scroll slide-in-left'
      }
    ],
    juno: [
      {
        title: 'Out Of Context',
        skills: 'React, JSX, AXIOS, SCSS',
        description: 'Created with React, this app allows users to search by movie name and displays GIFs based on themes (keywords) from the movie (love, war, sports etc). Three GIFs are displayed initially, with their keywords underneath. By clicking, the user can cycle through all GIFs per keyword, or look at other keywords associated with the movie, returning new GIFs!',
        liveUrl: 'https://focused-varahamihira-abf5da.netlify.app/',
        gitUrl: 'https://github.com/dearJuno/outofContext',
        imgUrl: outOfContext,
        imgAlt: 'Screenshot of the Out Of Context app.',
        animation: 'trigger-on-scroll slide-in-right'
      },
      {
        title: 'Infinity Corkboard',
        skills: 'React, JSX, REST API, CSS',
        description: 'This React based app presents the user with a 4X4 grid of photos from NASA API\'s Astronomy Picture of the Day endpoint. The user can click any images they wish to change, which swaps it out for a new one in the same position. When the user is pleased with how the grid looks, they may save it by printing to pdf. Print output is styled so the grid appears with no other page elements in the saved file.',
        liveUrl: 'https://relaxed-visvesvaraya-8807c8.netlify.app/',
        gitUrl: 'https://github.com/Riley-Hoffman/riley-hoffman-project-three',
        imgUrl: infinityCorkboard,
        imgAlt: 'Screenshot of the Infinity Corkboard app.',
        animation: 'trigger-on-scroll slide-in-left'
      },
      {
        title: 'Weather Scout',
        skills: 'HTML, Javascript, REST API, SCSS',
        description: "With this app, users can search by city and get corresponding weather data. 'Right Now' or 'Future Forecast' can be specified. 'Right Now' returns a weather description with associated icon, and the current temperature. Future forecast returns a grid of dates with forecast temperatures. Created with Javascript, HTML and CSS.",
        liveUrl: 'https://romantic-kowalevski-f7a14c.netlify.app/',
        gitUrl: 'https://github.com/Linda-Columbus-Riley-Hoffman-Developers/weatherScout',
        imgUrl: weatherScout,
        imgAlt: 'Screenshot of the Weather Scout app.',
        animation: 'trigger-on-scroll slide-in-right'
      },
      {
        title: 'Delicious',
        skills: 'HTML, SCSS',
        description: 'A multi-page PSD conversion project for a fictional restaurant chain.',
        liveUrl: 'https://vigilant-albattani-29bee8.netlify.app/',
        gitUrl: 'https://github.com/Riley-Hoffman/riley_hoffman_project_1_delicious',
        imgUrl: delicious,
        imgAlt: 'Screenshot of Delicious, a PSD conversion project.',
        animation: 'trigger-on-scroll slide-in-left'
      }
    ]
  };

  const renderProjects = (projectsList, category) => (
    <>
      <h2 className="md:text-3xl text-2xl pb-5 leading-normal">{category} Projects</h2>
      <ul className="pb-5" aria-label={`${category} Projects`}>
        {projectsList.map((project, index) => (
          <ProjectBox 
            key={index} 
            {...project} 
            inverted={index % 2 !== 0 ? 'inverted' : ''}
            isFirst={index === 0}
          />
        ))}
      </ul>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Projects - Riley Hoffman - Web Developer</title>
        <meta property="og:title" content="Projects - Riley Hoffman - Web Developer" />
        <meta name="description" content="View past projects by Riley Hoffman - Web Developer." />
        <meta property="og:url" content="https://rileyhoffman.com/projects" />
        <link rel="canonical" href="https://rileyhoffman.com/projects" />
      </Helmet>  
      <h1 className="text-center md:text-5xl text-3xl leading-normal md:leading-normal banner-heading gradient-border inverted">Projects</h1>
      <div className="max-w-screen-xl pt-5 pb-20 projects">
        {renderProjects(projects.freelance, 'Freelance')}
        {renderProjects(projects.personal, 'Personal')}
        {renderProjects(projects.juno, 'Juno College')}
      </div>
    </>
  );
};

export default Projects;
