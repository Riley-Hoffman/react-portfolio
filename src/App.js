import './index.css';
import './_App.scss';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer';
import RouteRenderer from './components/navigation/RouteRenderer';

const LazyGTMLoader = lazy(() => import('./components/GTMLoader'));
const LazyBackToTopButton = lazy(() => import('./components/BackToTopButton'));

function App() { 

  // const [message, setMessage] = useState('');
  // const [page, setPage] = useState('');

  // useEffect(() => {
  //   const fetchData = () => {
  //     const currentPage = window.location.pathname; // Get the current page path
  //     fetch(`https://rileyhoffman.tiiny.io/?page=${encodeURIComponent(currentPage)}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setMessage(data.message);
  //         setPage(data.page);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data:', error);
  //       });
  //   };

  //   fetchData();
  // }, []);

  
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