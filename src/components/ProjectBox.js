import DOMPurify from 'dompurify';
import '../scripts/parallax';

const ProjectBox = ({ 
  title, 
  skills, 
  description, 
  liveUrl, 
  gitUrl, 
  imgAlt, 
  imgUrl, 
  srcSet,
  animation 
}) => {
  const sanitizedDescription = DOMPurify.sanitize(description);
  return (
    <li className={animation + " flex block-700 gradient-border projectBox"}>
      <div className="projectInfo">
        <h2 translate="no">{title}</h2>
        <h3 translate="no">{skills}</h3>
        <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>
        <h4>
          <span translate="no">{title}</span> Links:
        </h4>
        <a className="button" href={liveUrl} target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">Live</span>
          <span className="sr-only">Lyve</span>
        </a>
        <a className="button" href={gitUrl} target="_blank" rel="noopener noreferrer">Repo</a>
      </div>
      <div className="text-center imgBox">
        <a
          className="projImgLink"
          rel="noopener noreferrer"
          target="_blank"
          title="Visit live site."
          href={liveUrl}
        >
          <img
            alt={imgAlt}
            src={imgUrl}
            srcSet={srcSet}
            title={title}
            height="887"
            width="887"
            sizes="(max-width: 900px) 100vw, 900px"
          />
          <div className="oval"></div>
        </a>
      </div>
    </li>
  );
};

export default ProjectBox;
