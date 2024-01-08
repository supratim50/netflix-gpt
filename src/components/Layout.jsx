import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux";

const Layout = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/");
        }
    }, [])
  return (
    <>
        <Header user={user} />
        <Outlet />
    </>
  )
}

export default Layout