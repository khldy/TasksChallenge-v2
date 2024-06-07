import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import Register from "./pages/Register";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import MainLayout from './pages/MainLayout';
import DayDeatils from './pages/DayDeatils';

import ContextProvider from './context';

const router = createBrowserRouter([{
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Home />

    },
    {
      path: "/register",
      element: <Register />,

    },
    {
      path: "/login",
      element: <Login />,

    },
    {
      path: "/challenge/:day",
      element: <DayDeatils />
    }
  ]
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);

