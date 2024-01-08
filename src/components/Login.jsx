import React, { useState, useEffect } from 'react'
import Header from './Header';
import TextInput from './TextInput';
import {validation} from "../utils/validate";
import {createAccount, signIn} from "../utils/auth"
import {useNavigate} from "react-router-dom"
// firebase
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../utils/firebase"

import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser} from "../store/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({email: false, pass: false})

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  // add to store when user signIn and signUp
  useEffect(() => {
    
    const unsub = onAuthStateChanged(auth, user => {
      if(user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({
          uid,
          email,
          displayName
        }))
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    })

    return () => unsub();
  }, [])
  
  const toogleDignInForm = () => {
    setIsSignInForm((prevVal) => !prevVal)
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    validation(email, password, setError);
    if(error.email || error.pass) return;
    
    if(!isSignInForm) {
      createAccount(email, password);
    } else {
      signIn(email, password);
    }

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className='relative w-full h-screen'>
      
      <Header user={user} />
      <div className='absolute w-full'>
        <div className='absolute w-full h-screen bg-black opacity-60'></div>
        <img className='w-full object-cover h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
      </div>

      <div className='absolute text-white w-3/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-65 p-12 rounded-lg'>
        <h1 className='text-4xl mb-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <form className='z-10'>
          {
            !isSignInForm && <TextInput type="text" placeholder='Full Name' onChange={setName} value={name}  />
          }
          {
            error.email ? <TextInput type={"text"} placeholder="Email Address" onChange={setEmail} value={email} error="Invalide Email" /> : <TextInput type={"text"} placeholder="Email Address" onChange={setEmail} value={email} />
          }
          {
            error.pass ? <TextInput type={"password"} placeholder="Password" onChange={setPassword} value={password} error="Invalide Password" /> : <TextInput type={"password"} placeholder="Password" onChange={setPassword} value={password} />
          }
          <button 
            className='p-4 my-6 bg-red-700 w-full rounded-lg'
            onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button> 
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