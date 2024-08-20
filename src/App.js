import './index.css';
import './_App.scss';
import { Suspense, lazy, useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer';
import RouteRenderer from './components/navigation/RouteRenderer';

const LazyGTMLoader = lazy(() => import('./components/GTMLoader'));
const LazyBackToTopButton = lazy(() => import('./components/BackToTopButton'));

function App() { 

  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const fetchData = () => {
      fetch('www.rileyhoffman.000.pe/server.php')
        .then(response => {
          // Check if the response is OK (status code 200-299)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Read the response as JSON
        })
        .then(data => {
          console.log(data); // Log the data to see what you got
          setMessage(data.message); // Set the message state
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };
  
    fetchData();
  }, []);
  
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
            <h1>{message}</h1>
            <a href="#content" id="content" className="sr-only z-[999999] button focus:not-sr-only focus:p-4 focus:left-4 focus:absolute">Start of main content</a>
            <Suspense fallback={null}>
              <LazyBackToTopButton />
            </Suspense>
            <Routes>
              <Route path="*" element={<RouteRenderer />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;