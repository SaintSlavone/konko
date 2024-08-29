import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import App from './App';
import ConfPage from './pages/ConfPage/ConfPage';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App/>
  },
  {
    path: "/configurator",
    element: <ConfPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
