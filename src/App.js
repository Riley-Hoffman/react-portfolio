import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() { 
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />
          <main id="content">
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
          </main>
          <Footer/>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;