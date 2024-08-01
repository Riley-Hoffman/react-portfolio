import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Faq from './components/pages/Faq';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() { 
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <a href="#content" id="content" className="skip-link start button">Start of main content</a>
            <Routes>
              <Route path='/' element={
                <> 
                  <Home/>
                </>
              }/>
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
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;