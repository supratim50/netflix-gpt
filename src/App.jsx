import React, { useEffect } from 'react'
import './App.css';
import Login from './components/Login'
import Browse from './components/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// redux 
import {Provider} from "react-redux"
import appStore from './store/appStore';

function App() {
  
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
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
    </>
  )
}

export default App
