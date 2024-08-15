import { useEffect } from 'react';
import useTriggerOnScroll from '../../../hooks/useTriggerOnScroll';


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
    <li className={`relative my-28 border-t-8 border-solid gap-14 gradient-border ${inverted} ${animation} transition-all duration-1000 ease even:flex-row-reverse first:mt-12 md:flex group`} ref={el => elementsRef.current[el] = el}>
      <div className="pt-5 pb-10 basis-2/4 project-info">
        <h2 className="pb-4">{title}</h2>
        <p className="pb-4 mb-8 text-lg font-poppins" translate="no">{skills}</p>
        <p className="pb-4">{description}</p>
        <h4 className="mb-8">
          <span translate="no">{title}</span> Links:
        </h4>
        <a className="mx-5 p-y-1 p-x-4 uppercase py-1 px-3 button" href={liveUrl} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">{title} </span>Live
        </a>
        {gitUrl && (<a className="mr-5 ml-3 uppercase py-1 px-3 button" href={gitUrl} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">{title} </span>Repo
        </a>)}
      </div>
      <div className="text-center relative basis-2/4">
        <img
          alt={imgAlt}
          src={imgUrl}
          title={title}
          height="570"
          width="570"
          loading={isFirst ? 'eager' : 'lazy'}
          fetchpriority={isFirst ? 'high' : 'auto'}
        />
        <div className="bg-purple-100 rounded-[50%] z-[-1] opacity-10 absolute top-[5%] right-0 bottom-0 left-0 oval group-odd:left-[-100%] group-even:right-[-100%]"></div>
      </div>
    </li>
  );
};

export default ProjectBox;
