import { useEffect } from 'react';
import useTriggerOnScroll from '../hooks/useTriggerOnScroll';
import '../styles/components/_projectBox.scss';


const ProjectBox = ({ 
  title, 
  skills, 
  description, 
  liveUrl, 
  gitUrl, 
  imgAlt, 
  imgUrl, 
  animation,
  inverted,
  isFirst
}) => {

  const elementsRef = useTriggerOnScroll();
  useEffect(() => {
    elementsRef.current = document.getElementsByClassName("trigger-on-scroll");
  }, [elementsRef]);

  return (
    <li className={`${animation} + " flex block-700 gradient-border project-box ${inverted}`} ref={el => elementsRef.current[el] = el}>
      <div className="project-info">
        <h2>{title}</h2>
        <h3 translate="no">{skills}</h3>
        <p>{description}</p>
        <h4>
          <span translate="no">{title}</span> Links:
        </h4>
        <a className="button" href={liveUrl} target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">Live</span>
          <span className="sr-only">{title} Live</span>
        </a>
        {gitUrl && (<a className="button" href={gitUrl} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">{title} </span>Repo
        </a>)}
      </div>
      <div className="text-center img-box">
        <img
          alt={imgAlt}
          src={imgUrl}
          title={title}
          height="570"
          width="570"
          loading={isFirst ? 'eager' : 'lazy'}
          fetchpriority={isFirst ? 'high' : 'auto'}
        />
        <div className="oval"></div>
      </div>
    </li>
  );
};

export default ProjectBox;
