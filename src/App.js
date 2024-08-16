import './index.css';
import './App.scss';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Faq from './pages/faq/Faq';
import Contact from './pages/contact/Contact';
import Accessibility from './pages/Accessibility';
import ParticleCleanup from './pages/projects/particle-cleanup/ParticleCleanup';
import { Route, Routes} from 'react-router-dom';
import { Suspense, lazy } from 'react';

const LazyGTMLoader = lazy(() => import('./components/GTMLoader'));
const LazyBackToTopButton = lazy(() => import('./components/BackToTopButton'));

const routes = [
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '/skills', element: <Skills /> },
  { path: '/faq', element: <Faq /> },
  { path: '/contact', element: <Contact /> },
  { path: '/accessibility', element: <Accessibility /> },
  { path: '/projects/particle-cleanup', element: <ParticleCleanup /> }
];

function App() { 
  const gtmId = 'G-STET7NGB4K';

  return (
    <>
      <Suspense fallback={null}>
        {gtmId && <LazyGTMLoader gtmId={gtmId} />}
      </Suspense>
      <HelmetProvider>
        <div className="App text-zinc">
          <Header />
          <main className="relative">
            <a href="#content" id="content" className="sr-only z-[999999] button focus:not-sr-only focus:p-4 focus:left-4 focus:absolute">Start of main content</a>
            <Suspense fallback={null}>
              <LazyBackToTopButton />
            </Suspense>
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </main>
          <Footer/>
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;