import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      
      children: [
        {
          path: "register",
          element: <Register />,
        
        },
      ],
    },
  ]);
  
function App() {

    return (
        <RouterProvider router={router} />
    );
}

export default App;
