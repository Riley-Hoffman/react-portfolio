import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Faq from './components/pages/Faq';
import Contact from './components/pages/Contact';
import Accessibility from './components/pages/Accessibility';
import ParticleCleanup from './components/pages/projects/ParticleCleanup';
import { Route, Routes} from 'react-router-dom';

function App() { 
  return (
    <HelmetProvider>
      <div className="App text-zinc">
        <Header />
        <main className="relative">
          <a href="#content" id="content" className="sr-only z-[999999] button focus:not-sr-only focus:p-4 focus:left-4 focus:absolute">Start of main content</a>
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
            <Route path="/accessibility" element={
              <>          
                <Accessibility/> 
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
    </HelmetProvider>
  );
}

export default App;