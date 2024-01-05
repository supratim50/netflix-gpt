import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toogleDignInForm = () => {
    setIsSignInForm((prevVal) => !prevVal)
  }

  return (
    <div className='relative w-full h-screen'>
      
      <Header />
      <div className='absolute w-full'>
        <div className='absolute w-full h-screen bg-black opacity-60'></div>
        <img className='w-full object-cover h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
      </div>

      <div className='absolute text-white w-3/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-65 p-12 rounded-lg'>
        <h1 className='text-4xl mb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <form className='z-10'>
          {
            !isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800 outline-none' />
          }
          <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 outline-none' />
          <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800 outline-none' />
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button> 
        </form>
        {
          isSignInForm ? (
            <p>New to Netflix? <span className='cursor-pointer underline' onClick={toogleDignInForm}>Signup</span></p>
          ) : (
            <p>Already have an account? <span className='cursor-pointer underline' onClick={toogleDignInForm}>Signin</span></p>
          )
        }
       
      </div>
    </div>
  )
}

export default Login