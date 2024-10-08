import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
        <footer className="min-h-[5.563rem] border-t border-solid bg-pink-200 gradient-border contrast-more:bg-white">
            <h2 className="sr-only">Footer</h2>
            <div className="max-w-screen-xl py-7 md:items-center md:justify-between md:flex">
                <p className="px-3 py-1 m-0 font-urbanist text-base">Riley Hoffman | Web Developer 
                    <a className="min-w-[2.125rem] min-h-[1.875rem] inline-block no-underline md:min-w-[1.5rem] md:min-h-[1.25rem] group" href="https://github.com/Riley-Hoffman/react-portfolio" target="_blank" rel="noopener noreferrer" aria-label="Site repo on Github"> <FontAwesomeIcon className="ml-1 text-3xl md:text-base group-hover:text-purple-200 group-focus:text-purple-200" icon={faGithub} /></a>
                </p>
                <p className="p-0 m-0 mr-auto text-base">
                    <a className="px-3 py-1" href="/accessibility">Accessibility</a>
                </p>
                <p className="px-3 py-1 m-0 text-base">
                    <span className="mr-[0.125rem]">©</span>{new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer