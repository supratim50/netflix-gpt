import React from 'react'
import PrimaryButton from './PrimaryButton'
import { userSignOut } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

const Header = ({user}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    console.log("button clicked");
    const logout = userSignOut();
    if(logout) navigate("/");
  }

  return (
    <div className='fixed px-8 py-2 z-50 bg-gradient-to-b from-black w-screen flex justify-between items-center'>
      <img
        className='w-52'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="logo" 
      />
      {
        user && <PrimaryButton handleClick={handleClick}>Logout</PrimaryButton>
      }
    </div>
  )
}

export default Header
