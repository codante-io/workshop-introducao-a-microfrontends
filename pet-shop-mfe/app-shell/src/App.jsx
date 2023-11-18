import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
const ListDogs = React.lazy(() => import('dogs/ListDogs'));
import FallbackLoading from './components/FallbackLoading';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Dog from './components/Dog';

import '@mantine/core/styles.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: 'Not Found!',
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<FallbackLoading />}>
            <ListDogs />
          </Suspense>
        ),
      },
      {
        path: '/dog/:id',
        element: <Dog />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
ReactDOM.render(<App />, document.getElementById('app'));
