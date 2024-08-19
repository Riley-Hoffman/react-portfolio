import { RouteList } from './RouteList';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h1 className="text-center text-3xl leading-normal bg-[#eee2f3] border-b-2 mb-7 mt-0 py-10 px-5 gradient-border inverted md:text-5xl md:leading-normal contrast-more:bg-white">Page Not Found</h1>
            <div className="max-w-screen-md p-[1.875rem_0_25vh] text-center"> 
                <h2 className="text-4xl">404</h2>
                <p className="max-w-screen-sm text-xl pb-4">Sorry, the document you requested is not available. Please select one of the available pages below:</p>
                <ul className="px-4 text-2xl">
                    {RouteList.map(route => (
                        <li className="p-4 inline-block" key={route.path}>
                            <Link className="p-2 no-underline button" to={route.path}>{route.name}</Link>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default NotFound