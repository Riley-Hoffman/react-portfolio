import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {  
  return (
    <Router>
      <div className="App">
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
  );
}

export default App;