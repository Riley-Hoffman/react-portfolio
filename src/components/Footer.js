import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {


    return (
        <footer className="gradient-border" style={{ backgroundColor: '#e5d4ed', borderTop: '1px solid #A8A0D9' }}>
            <h2 className="sr-only">Footer</h2>
            <div className="wrapper flex">
                <div>Riley Hoffman | Web Developer <a href="https://github.com/Riley-Hoffman" target="_blank" rel="noopener noreferrer" aria-label="Github"> <FontAwesomeIcon icon={faGithub} /></a></div>
                ©{new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer