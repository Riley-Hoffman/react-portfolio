import { useLocation } from 'react-router-dom';
import { RouteList } from './RouteList';
import NotFound from './NotFound';


const RouteRenderer = () => {
    const location = useLocation();

    const CurrentPage = RouteList.find(route => route.path === location.pathname)?.component || NotFound;


    return <CurrentPage availableRoutes={RouteList} />;
};

export default RouteRenderer;
