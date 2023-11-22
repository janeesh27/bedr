import { createBrowserRouter } from 'react-router-dom';

import SignUp from '../sections/SignUp';
import App from '../App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUp />,
    },

    {
        path: '/homepage',
        element: <App />,
    },
]);

export default router;
