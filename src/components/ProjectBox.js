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
    <li className={`relative my-28 border-t-8 border-solid gap-14 gradient-border project-box ${inverted} ${animation} md:flex`} ref={el => elementsRef.current[el] = el}>
      <div className="pt-5 pb-10 project-info">
        <h2 className="pb-4">{title}</h2>
        <h3 className="pb-4 mb-8 text-lg" translate="no">{skills}</h3>
        <p className="pb-4">{description}</p>
        <h4 className="mb-8">
          <span translate="no">{title}</span> Links:
        </h4>
        <a className="mx-5 uppercase button" href={liveUrl} target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">Live</span>
          <span className="sr-only">{title} Live</span>
        </a>
        {gitUrl && (<a className="mx-5 uppercase button" href={gitUrl} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">{title} </span>Repo
        </a>)}
      </div>
      <div className="text-center relative img-box">
        <img
          alt={imgAlt}
          src={imgUrl}
          title={title}
          height="570"
          width="570"
          loading={isFirst ? 'eager' : 'lazy'}
          fetchpriority={isFirst ? 'high' : 'auto'}
        />
        <div className="opacity-10 oval"></div>
      </div>
    </li>
  );
};

export default ProjectBox;
