import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Landingpage from './routes/landingpage';
import Home from './routes/home';
import Cadastro from './routes/cadastro';
import ErrorPage from './routes/errorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Landingpage /> 
        },
        {
          path: "/home",
          element: <Home /> 
        },
        {
          path: "/cadastro",
          element: <Cadastro /> 
        },
      ] 
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
