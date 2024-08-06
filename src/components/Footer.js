import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
        <footer className="gradient-border">
            <h2 className="sr-only">Footer</h2>
            <div className="max-w-screen-xl flex justify-between py-9">
                <p className="px-3 m-0 text-base"><span>Riley Hoffman</span> | Web Developer 
                    <a className="no-underline" href="https://github.com/Riley-Hoffman/react-portfolio" target="_blank" rel="noopener noreferrer" aria-label="Site repo on Github"> <FontAwesomeIcon className="ml-1" icon={faGithub} /></a>
                </p>
                <p className="px-3 m-0 text-base">
                    <span>©</span>{new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer