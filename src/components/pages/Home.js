import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../../styles/animations/_typewriter.scss';
import '../../styles/animations/_rotateSpin.scss';
import clouds from '../../assets/images/clouds.webp';
import useParallax from '../../hooks/useParallax';

function Home() {
    const imageRef = useParallax();

    useEffect(() => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = clouds;
        preloadLink.as = 'image';
        document.head.appendChild(preloadLink);

        return () => {
            document.head.removeChild(preloadLink);
        };
    }, []);

    return (
        <>
            <Helmet>
                <meta property="og:title" content="Riley Hoffman - Web Developer" />
                <meta name="description" content="I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers." />
                <meta property="og:url" content="https://rileyhoffman.com" />
                <link rel="canonical" href="https://rileyhoffman.com" />
            </Helmet>
            <div className="border-b-4 border-solid gradient-border overlay overflow-hidden before:bg-[radial-gradient(rgba(255,255,255,0.743)_0%,_rgba(255,255,255,0.498)_100%),_linear-gradient(-30deg,_rgba(0,247,255,0.08)_0%,_#0000_15%,_#0000_80%,_rgba(0,247,255,0.08)_100%)]">
                <img className="max-w-none w-[130vw] h-[120vh] absolute top-0 left-0 z-[-1] object-cover" src={clouds} alt="" width="1260" height="800" fetchpriority="high" ref={imageRef} />
                <div className="max-w-screen-xl min-h-[calc(100vh-13.313rem)] py-[0.1px]">
                    <div className="m-[18vh_1.25rem_6.625rem_0] py-5 bg-[radial-gradient(ellipse_closest-side_at_50%_50%,_#fff_0%,_transparent)] text-left md:w-3/5 md:translate-y-[1.25rem]">
                        <h1 className="font-semibold m-0 text-3xl leading-normal md:text-4xl md:leading-normal">Riley Hoffman</h1>
                        <p className="mt-0 separator"><span className="inline-block w-40 m-o mr-auto border-r-2 border-purple-200 border-solid whitespace-nowrap overflow-hidden tracking-widest font-medium typewriter">Web Developer</span></p>
                        <p className="mt-8 font-medium">I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;