import { Helmet } from 'react-helmet-async';
import ProjectBox from './ProjectBox';
import '../styles/pages/_projects.scss';
import '../styles/animations/_triggerOnScroll.scss';

const Projects = () => {
  const projects = [
    {
      title: 'Out Of Context',
      skills: 'React, JSX, AXIOS, SCSS',
      description: 'Created with <span translate="no">React</span>, this app allows users to search by movie name and displays GIFs based on themes (keywords) from the movie (love, war, sports etc). Three GIFs are displayed initially, with their keywords underneath. By clicking, the user can cycle through all GIFs per keyword, or look at other keywords associated with the movie, returning new GIFs!</p>',
      liveUrl: 'https://focused-varahamihira-abf5da.netlify.app/',
      gitUrl: 'https://github.com/dearJuno/outofContext',
      srcSet: 'https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642782917/out-of-context3x_krpnlk.webp 1280w, https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/v1642782917/out-of-context_oeh1on.webp 900w, https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/v1642782917/out-of-context1x_ojtnhg.webp 550w',
      imgUrl: 'https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642782917/out-of-context_oeh1on.png',
      imgAlt: 'Screenshot of the Out Of Context app.',
      animation: 'no-animation'
    },
    {
      title: 'Infinity Corkboard',
      skills: 'React, JSX, REST API, CSS',
      description: 'This <span translate="no">React</span> based app presents the user with a 4X4 grid of photos from <span translate="no">NASA</span> API\'s <span translate="no">Astronomy Picture of the Day</span> endpoint. The user can click any images they wish to change, which swaps it out for a new one in the same position. When the user is pleased with how the grid looks, they may save it by printing to pdf. Print output is styled so the grid appears with no other page elements in the saved file.',
      liveUrl: 'https://relaxed-visvesvaraya-8807c8.netlify.app/',
      gitUrl: 'https://github.com/Riley-Hoffman/riley-hoffman-project-three',
      srcSet: 'https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1649247793/infinity-corkboard_tanxk3.webp 1280w, https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/v1651029506/infinity-corkboard_tanxk3900_oyg2mv.webp 900w, https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/v1651029506/infinity-corkboard_tanxk3550_dar26s.webp 550w',
      imgUrl: 'https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1649247793/infinity-corkboard_tanxk3.png',
      imgAlt: 'Screenshot of the Infinity Corkboard app.',
      animation: 'trigger-on-scroll slide-in-left'
    },
    {
      title: 'Weather Scout',
      skills: 'HTML, Javascript, REST API, SCSS',
      description: "With this app, users can search by city and get corresponding weather data. 'Right Now' or 'Future Forecast' can be specified. 'Right Now' returns a weather description with associated icon, and the current temperature. Future forecast returns a grid of dates with forecast temperatures. Created with Javascript, HTML and CSS.",
      liveUrl: 'https://romantic-kowalevski-f7a14c.netlify.app/',
      gitUrl: 'https://github.com/Linda-Columbus-Riley-Hoffman-Developers/weatherScout',
      srcSet: 'https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642782603/weather-scout3x_hihe8q.webp 1280w, https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642782602/weather-scout2x_h1wuto.webp 900w, https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642782603/weather-scout1x_a5fbv9.webp 550w',
      imgUrl: 'https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642782602/weather-scout_hglg66.png',
      imgAlt: 'Screenshot of the Weather Scout app.',
      animation: 'trigger-on-scroll slide-in-right'
    },
    {
      title: 'Delicious',
      skills: 'HTML, SCSS',
      description: 'A multi-page PSD conversion project for a fictional restaurant chain.',
      liveUrl: 'https://vigilant-albattani-29bee8.netlify.app/',
      gitUrl: 'https://github.com/Riley-Hoffman/riley_hoffman_project_1_delicious',
      srcSet: 'https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642783284/delicious3x_pgwxjq.webp 1280w, https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642783284/delicious2x_bkve7w.webp 900w, https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642783281/delicious1x_g6etos.webp 550w',
      imgUrl: 'https://res.cloudinary.com/riley-hoffman-web-developer/image/upload/q_auto:low/v1642784060/delicious_aozvru.png',
      imgAlt: 'Screenshot of Delicious, a PSD conversion project.',
      animation: 'trigger-on-scroll slide-in-left'
    }
  ];

  return (
    <section>
      <Helmet>
        <title>Projects - Riley Hoffman - Web Developer</title>
        <meta property="og:title" content="Projects - Riley Hoffman - Web Developer" />
        <meta name="description" content="View past projects by Riley Hoffman - Web Developer." />
        <meta property="og:url" content="https://rileyhoffman.com/projects" />
        <link rel="canonical" href="https://rileyhoffman.com/projects" />
      </Helmet>  
      <h1 className="text-center text-40 banner-heading gradient-border inverted">Projects</h1>
      <div className="max-1200px projects">
        <h2 className="text-30">Juno College Projects</h2>
        <ul aria-label="Projects">
          {projects.map((project, index) => (
            <ProjectBox 
              key={index} 
              {...project} 
              inverted={index % 2 !== 0 ? 'inverted' : ''}
              isFirst={index === 0}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
