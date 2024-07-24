import { Helmet } from 'react-helmet-async';
import ParticleGame from './ParticleGame';
import '../styles/pages/_home.scss';
import '../styles/components/_particleGame.scss';
import riley from '../assets/riley.png';
import clouds from '../assets/clouds.jpg';
import useScrollingBackground from '../hooks/useScrollingBackground';

function Home() {
    const containerRef = useScrollingBackground();

    return (
        <div>
            <Helmet>
                <link rel="preload" fetchpriority="high" href={clouds} as="image" type="image/jpeg" />
                <meta property="og:title" content="Riley Hoffman - Web Developer" />
                <meta name="description" content="I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers." />
                <meta property="og:url" content="https://rileyhoffman.com" />
                <link rel="canonical" href="https://rileyhoffman.com" />
            </Helmet>
            <div className="gradient-border overlay about" ref={containerRef}>
                <div className="max-1200px flex block-700">
                    <div className="max-60 min-60 text-left">
                        <h1 className="text-40 text-600">Riley Hoffman</h1>
                        <p className="separator"><span className="typewriter keep-width">Web Developer</span></p>
                        <p>I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.</p>
                    </div>
                    <div className="max-40 min-40 text-center">
                        <img src={riley} alt="Headshot of Riley Hoffman, Web Developer" width="884" height="683" className="max-300px" />
                    </div>
                </div>
            </div>
            <div className="max-1000px">
                <ParticleGame/>
            </div>
        </div>
    );
}

export default Home;
