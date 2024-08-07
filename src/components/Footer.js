import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
        <footer className="border-t border-solid bg-pink-200 gradient-border">
            <h2 className="sr-only">Footer</h2>
            <div className="max-w-screen-xl py-9 flex justify-between">
                <p className="px-3 m-0 text-base"><span>Riley Hoffman</span> | Web Developer 
                    <a className="no-underline" href="https://github.com/Riley-Hoffman/react-portfolio" target="_blank" rel="noopener noreferrer" aria-label="Site repo on Github"> <FontAwesomeIcon className="ml-1 hover:text-purple-200 focus-visible:text-purple-200" icon={faGithub} /></a>
                </p>
                <p className="px-3 m-0 text-base">
                    <span>©</span>{new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer