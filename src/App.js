import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import riley from './assets/riley.jpg'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() { 
   const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: "Riley Hoffman - Web Developer",
    description: "I'm a front-end developer with a passion for building accessible and responsive web applications. I quickly learn new concepts and love adding to my growing skill set. I am a proactive problem solver who enjoys writing future-proof, understandable code that fosters collaboration with other developers.",
    image: riley,
    datePublished: new Date("2024-07-04T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "Riley Hoffman",
      url: "https://rileyhoffman.com",
    },
  }; 
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData), }} />
          <Header />
          <Routes>
            <Route path='/' element={
              <> 
                <About/>
              </>
          }/>
          <Route path="/contact" element={
            <>          
              <Contact/> 
            </>
          } 
          />
          <Route path="/Projects" element={
            <>          
              <Projects/> 
            </>
          } 
          />
          <Route path="/Skills" element={
            <>          
              <Skills/> 
            </>
          } 
          />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;