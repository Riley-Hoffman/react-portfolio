import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Faq from './components/pages/Faq';
import Contact from './components/pages/Contact';
import ParticleCleanup from './components/pages/projects/ParticleCleanup';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() { 
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="relative">
            <a href="#content" id="content" className="p-4 skip-link start button">Start of main content</a>
            <Routes>
              <Route path='/' element={
                <> 
                  <Home/>
                </>
              }/>
              <Route path="/projects" element={
                <>          
                  <Projects/> 
                </>
              } 
              />
              <Route path="/skills" element={
                <>          
                  <Skills/> 
                </>
              } 
              />
              <Route path="/faq" element={
                <>          
                  <Faq/> 
                </>
              } 
              />
              <Route path="/contact" element={
                <>          
                  <Contact/> 
                </>
              } 
              />
              <Route path="/projects/particle-cleanup" element={
                <>          
                  <ParticleCleanup/> 
                </>
              } 
              />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;