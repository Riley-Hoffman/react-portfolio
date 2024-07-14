import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ParticleGame from './ParticleGame';
import '../styles/_particleGame.scss';
import riley from '../assets/riley.png'
import thumbnail from '../assets/thumbnail.jpg'
import pinkCloud from '../assets/pink-cloud.jpg'

function About() {

        const containerRef = useRef(null);
        const [scrollPos, setScrollPos] = useState(0);
        const velocity = 0.4;
      
        useEffect(() => {
          const handleScroll = () => {
            setScrollPos(window.scrollY);
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        useEffect(() => {
          if (containerRef.current) {
            const height = containerRef.current.offsetHeight - 18;
            containerRef.current.style.backgroundPosition = `-${Math.round((height - scrollPos) * velocity)}px center`;
          }
        }, [scrollPos]);
    return (
        <div id="content"> 
          <Helmet>
              <title>Riley Hoffman - Web Developer</title>
              <meta property="og:image" content={thumbnail}></meta>
              <meta name="description" content="I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers." />
              <link rel="canonical" href="https://rileyhoffman.com/" />
          </Helmet>  
          <div className="gradient-border overlay" ref={containerRef} style={{ backgroundColor: '#f9ddda', backgroundImage: `url(${pinkCloud})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'bottom', backgroundRepeat: 'repeat', borderBottom: '5px solid'}}>
              <div className="max-1200px flex block-700" style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                  <div className="max-60 min-60 text-left" style={{ padding: '25vh 20px 25vh 0' }}>
                      <h1 style={{ marginBottom: '0'}}>Riley Hoffman</h1>
                      <p className="separator" style={{ marginTop: '0' }}><span className="typewriter">Web Developer</span></p>
                      <p style={{ marginTop: '30px' }}>I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.</p>
                  </div>
                  <div className="max-40 min-40 text-center">
                      <img src={riley} alt="Headshot of Riley Hoffman, Web Developer" width="884" height="683" className='max-300px' style={{ marginRight: '0', paddingTop: '20px', opacity: 0.9, display: 'inline-block' }}/>  
                  </div>
              </div>
          </div>   
          <div className="max-1000px" style={{ padding: '100px 0' }}>
              <ParticleGame/>
          </div>
        </div>
    )
}

export default About