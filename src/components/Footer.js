import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {


    return (
        <footer className="gradient-border" style={{ backgroundColor: '#e5d4ed', borderTop: '1px solid #A8A0D9' }}>
            <h2 className="sr-only">Footer</h2>
            <div className="wrapper flex">
                <div>
                    <a href="https://junocollege.com/">Riley Hoffman | Web Developer</a>
                    <a className="dearJuno" href="https://github.com/dearJuno">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                ©{new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer