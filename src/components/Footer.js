import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
        <footer className="gradient-border">
            <h2 className="sr-only">Footer</h2>
            <div className="max-1200px flex">
                <p>Riley Hoffman | Web Developer 
                    <a href="https://github.com/Riley-Hoffman/react-portfolio" target="_blank" rel="noopener noreferrer" aria-label="Site repo on Github"> <FontAwesomeIcon icon={faGithub} /></a>
                </p>
                <p>
                    ©{new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer