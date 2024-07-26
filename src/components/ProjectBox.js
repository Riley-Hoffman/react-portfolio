import DOMPurify from 'dompurify';
import { useEffect } from 'react';
import useTriggerOnScroll from '../hooks/useTriggerOnScroll';

const ProjectBox = ({ 
  title, 
  skills, 
  description, 
  liveUrl, 
  gitUrl, 
  imgAlt, 
  imgUrl, 
  srcSet,
  animation,
  inverted,
  isFirst
}) => {
  const sanitizedDescription = DOMPurify.sanitize(description);

  const elementsRef = useTriggerOnScroll();
  useEffect(() => {
    elementsRef.current = document.getElementsByClassName("trigger-on-scroll");
  }, [elementsRef]);

  return (
    <li className={`${animation} + " flex block-700 gradient-border projectBox ${inverted}`}>
      <div className="projectInfo">
        <h2 translate="no">{title}</h2>
        <h3 translate="no">{skills}</h3>
        <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>
        <h4>
          <span translate="no">{title}</span> Links:
        </h4>
        <a className="button" href={liveUrl} target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">Live</span>
          <span className="sr-only">{title} Live</span>
        </a>
        <a className="button" href={gitUrl} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">{title} </span>Repo
        </a>
      </div>
      <div className="text-center imgBox">
        <img
          alt={imgAlt}
          src={imgUrl}
          srcSet={srcSet}
          title={title}
          height="887"
          width="887"
          sizes="(max-width: 900px) 100vw, 900px"
          loading={isFirst ? 'eager' : 'lazy'}
        />
        <div className="oval"></div>
      </div>
    </li>
  );
};

export default ProjectBox;
