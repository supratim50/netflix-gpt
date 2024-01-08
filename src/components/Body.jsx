import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../utils/firebase"


// redux 
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../store/userSlice";

const Body = () => {
  const dispatch = useDispatch()

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

  // add to store when user signIn and signUp
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({
          uid,
          email,
          displayName
        }))
      } else {
        dispatch(removeUser());
      }
    })
  }, [])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default Body