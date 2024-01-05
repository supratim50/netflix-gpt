import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse/>
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default Body