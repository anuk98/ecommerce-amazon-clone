  import React, { useEffect } from 'react'
  import './App.css'
  import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
import { useStateValue } from './StateProvider'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
  
  function App() {
    const[state,dispatch]=useStateValue()
    useEffect(()=>{
      const unSubscribed = onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          dispatch({
            type:'SET_USER',
            user:authUser
          })
          console.log(authUser)
        } else {
          dispatch({
            type:'SET_USER',
            user:null
          })
        }
      })
      return ()=>{
        unSubscribed();
      }
    },[])
   
    return (
      <div>
        <Router>
          <Routes>
          <Route element={<Checkout/>} path='/checkout' />
          <Route element={<Login/>} path='/login' />
          <Route element={<Home/>} path='/' />
          </Routes>
        </Router>
        
      </div>
    )
  }
  
  export default App