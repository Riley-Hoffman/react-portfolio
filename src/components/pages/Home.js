import { Helmet } from 'react-helmet-async';
import '../../styles/pages/_home.scss';
import '../../styles/animations/_typewriter.scss';
import '../../styles/animations/_rotateSpin.scss';
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
            <div className="border-b-4 border-solid gradient-border overlay about" ref={containerRef}>
                <div className="max-w-screen-xl min-h-[calc(100vh-213px)] py-[0.1px]">
                    <div className="m-[18vh_20px_106px_0] py-5 bg-[radial-gradient(ellipse_closest-side_at_50%_50%,_#fff_0%,_transparent)] text-left md:w-3/5 md:translate-y-[20px]">
                        <h1 className="font-semibold mb-0 text-3xl leading-normal md:text-4xl md:leading-normal">Riley Hoffman</h1>
                        <p className="mt-0 separator"><span className="inline-block w-40 m-o mr-auto border-r-2 border-purple-200 border-solid whitespace-nowrap overflow-hidden tracking-widest font-medium typewriter">Web Developer</span></p>
                        <p className="mt-8 font-medium">I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;