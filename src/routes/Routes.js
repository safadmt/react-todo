import {createBrowserRouter, Outlet} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../component/Layout';
import Running from '../pages/Running/Running';
import Completed from '../pages/Completed/Completed';
import Trashed from '../pages/Trashed/Trashed';

const router = createBrowserRouter([
    {
        path: '/',
        element : <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/running_topics",
                element : <Running/>
            },
            {
                path: "/completed_topics",
                element: <Completed/>
            },
            {
                path: "/trashed_topics",
                element: <Trashed/>
            }
        ]
       
    }
])

export {router}