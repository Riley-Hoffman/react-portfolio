import { Helmet } from 'react-helmet-async';
import '../../styles/pages/_home.scss';
import '../../styles/animations/_typewriter.scss';
import '../../styles/animations/_rotateSpin.scss';
import riley from '../../assets/images/riley.png';
import clouds from '../../assets/images/clouds.jpg';
import useScrollingBackground from '../../hooks/useScrollingBackground';

function Home() {
    const containerRef = useScrollingBackground();

    return (
        <>
            <Helmet>
                <link rel="preload" fetchpriority="high" href={clouds} as="image" type="image/jpeg" />
                <meta property="og:title" content="Riley Hoffman - Web Developer" />
                <meta name="description" content="I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers." />
                <meta property="og:url" content="https://rileyhoffman.com" />
                <link rel="canonical" href="https://rileyhoffman.com" />
            </Helmet>
            <div className="gradient-border overlay border-b-4 border-solid about" ref={containerRef}>
                <div className="max-w-screen-xl md:flex justify-center items-end">
                    <div className="md:w-3/5 self-center text-left">

                        <h1 className="md:text-4xl text-3xl leading-normal md:leading-normal font-semibold mb-0">Riley Hoffman</h1>
                        <p className="mt-0 separator"><span className="m-o mr-auto whitespace-nowrap overflow-hidden tracking-widest inline-block w-40 border-r-2 border-purple-200 border-solid typewriter">Web Developer</span></p>
                        <p className="mt-8">I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.</p>
                    </div>
                    <div className="md:w-2/5 text-center">
                        <img src={riley} alt="Headshot of Riley Hoffman, Web Developer" width="884" height="683" className="max-w-xs pt-5" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
