import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clouds from '../../assets/images/clouds.webp';
import cloudsMobile from '../../assets/images/clouds-mobile.webp';
import headshot from '../../assets/images/headshot.webp';
import useParallax from '../../hooks/useParallax';

function Home() {
    useEffect(() => {
        const preloadImage = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            preloadLink.href = isMobile ? cloudsMobile : clouds;
            preloadLink.fetchPriority = "high";
            document.head.insertBefore(preloadLink, document.head.firstChild.nextSibling.nextSibling);
            return () => {
                document.head.removeChild(preloadLink);
            };
        };
        preloadImage();
    }, []);
    
    const imageRef = useParallax();


    return (
        <>
            <Helmet>
                <meta property="og:title" content="Riley Hoffman - Web Developer" />
                <meta name="description" content="I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers." />
                <meta property="og:url" content="https://rileyhoffman.com" />
                <link rel="canonical" href="https://rileyhoffman.com" />
            </Helmet>
            <section className="border-b-4 border-solid gradient-border overlay overflow-hidden before:bg-[radial-gradient(rgba(255,255,255,0.743)_0%,_rgba(255,255,255,0.498)_100%),_linear-gradient(-30deg,_rgba(0,247,255,0.08)_0%,_#0000_15%,_#0000_80%,_rgba(0,247,255,0.08)_100%)]">
                <img className="max-w-none w-[130vw] h-[120vh] absolute z-[-1] object-cover" src={clouds} srcSet={`${cloudsMobile} 1200w, ${clouds} 1920w`} sizes="(max-width: 768px) 100vw, 130vw" alt="" width="1920" height="1080" fetchpriority="high" ref={imageRef} />
                <div className="max-w-screen-xl min-h-[74vh] py-[0.1px]">
                    <div className="m-[18vh_1.25rem_6.625rem_0] py-5 bg-[radial-gradient(ellipse_closest-side_at_50%_50%,_#fff_0%,_transparent)] text-left md:w-3/5 md:translate-y-[1.25rem]">
                        <h1 className="font-semibold m-0 text-3xl leading-normal md:text-4xl md:leading-normal">Riley Hoffman</h1>
                        <p className="mt-0 separator"><span className="inline-block w-40 m-o mr-auto border-r-2 border-purple-200 border-solid whitespace-nowrap overflow-hidden tracking-widest font-medium motion-safe:animate-typetext">Web Developer</span></p>
                        <p className="mt-8 font-medium">I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.</p>
                    </div>
                </div>
            </section>
            <section className="pt-16 pb-10 bg-diamonds contrast-more:bg-none">
                <div className="max-w-screen-xl">
                    <div className="items-center md:flex">
                        <div className="md:w-1/3">
                            <img className="w-96 h-96 max-w-full object-cover border-x-2 clip-path-cut-corners" src={headshot} alt="A black and white photo of Riley with a flower behind his ear." width="450" height="530" loading="lazy" />
                        </div>
                        <div className="py-6 m-6 bg-[whitesmoke] border-2 border-[#d6d2ee] md:w-2/3 lg:px-24 contrast-more:bg-white">
                            <h2>My Journey</h2>
                            <p>My career journey began in customer service, tech support, and various non-profit organizations. Although these roles were valuable, I was eager to find a path that would truly ignite my passion and offer more engaging skills. This pursuit led me to web development through one of these non-profits.</p> 
                            <p>Captivated by the potential for creativity and continous growth, I completed Web Development Bootcamp at Juno College of Technology in 2021.</p> 
                            <p>I believe that by prioritizing accessibility in our work as web developers we make our contributions to the online world more meaningful.</p>
                            <p className="mt-10">
                                <a className="inline-block motion-safe:hover:animate-[wiggle_1s] button group" href="https://www.linkedin.com/in/riley-hoffman-014623213" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon aria-hidden="true" className="p-2 box-content text-5xl text-zinc bg-pink-200 group-hover:bg-zinc group-hover:text-pink-200" icon={faLinkedinIn} /> 
                                    <span className="px-6">Follow me on LinkedIn</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;