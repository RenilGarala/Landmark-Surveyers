import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path:'/',
          element: <Home/>,
        },
        {
            path:'/about',
            element: <About/>,
        }
      ]);
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
