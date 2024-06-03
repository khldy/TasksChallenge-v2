import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from "./pages/Home";
import Register from "./pages/Register";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from './pages/Login';
import MainLayout from './pages/MainLayout';



const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children:[
      {
        index:true,
        element: <Home />,
      
      },
      {
        path: "/register",
        element: <Register />,
      
      },
      {
        path: "/login",
        element: <Login />,
      
      },
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
 
);

