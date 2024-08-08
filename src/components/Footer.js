import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
        <footer className="border-t border-solid bg-pink-200 gradient-border">
            <h2 className="sr-only">Footer</h2>
            <div className="max-w-screen-xl py-7 md:items-center md:justify-between md:flex">
                <p className="px-3 py-1 m-0 font-urbanist text-base"><span>Riley Hoffman</span> | Web Developer 
                    <a className="inline-block no-underline group" href="https://github.com/Riley-Hoffman/react-portfolio" target="_blank" rel="noopener noreferrer" aria-label="Site repo on Github"> <FontAwesomeIcon className="ml-1 text-3xl md:text-base group-hover:text-purple-200 group-focus:text-purple-200" icon={faGithub} /></a>
                </p>
                <p className="px-3 py-1 m-0 text-base md:order-3">
                    <span className="mr-[2px]">©</span>{new Date().getFullYear()}
                </p>
                <p className="p-0 m-0 mr-auto text-base md:order-2">
                    <a className="px-3 py-1" href="/accessibility">Accessibility</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer