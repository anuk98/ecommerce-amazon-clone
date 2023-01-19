import React, { useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'

const Login = () => {
  const navigate=useNavigate('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const login=(e)=>{
 e.preventDefault();
 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    navigate('/')
    // ...
  })
  .catch((error) =>alert(error.message))
  }
  const register=(e)=>{
    e.preventDefault();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    
    console.log(userCredential.user);
    navigate('/');
    // ...
  })
  .catch((error) =>alert(error.message))
     }
  return (
    <div className='login'>
     <Link to='/'>
     <img src='https://pngimg.com/uploads/amazon/small/amazon_PNG6.png' alt="" className="login_logo" />
     </Link>
     <div className="login_container">
      <h1>Sign in</h1>
      <form action="">
        <h5>Email</h5>
        <input type="email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }} />
        <h5>Password</h5>
        <input type="password" value={password} onChange={(e)=>{
          setPassword(e.target.value)}}/>
        <button onClick={login} 
        type="submit" className='login_signinButton'>Sign In</button>
      </form>
      <p>By continuing, you agree to Amazon's
         Conditions of Use and Privacy Notice.</p>
         <button onClick={register} className='login_registerButton'>Create Your Amazon Account</button>
     </div>
     </div>
  )
}

export default Login