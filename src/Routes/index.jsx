import { createBrowserRouter } from 'react-router-dom';

import SignUp from '../sections/SignUp';
import App from '../App';
import BlogPage from '../sections/BlogPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUp />,
    },

    {
        path: '/homepage',
        element: <App />,
    },
    {
        path: '/blog',
        element: <BlogPage />,
    },
]);

export default router;
