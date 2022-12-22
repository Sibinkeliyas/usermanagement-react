import React,{useEffect, useState} from 'react'
import './login.css'
import {useSelector,useDispatch} from "react-redux"
import { userLogin } from '../../../redux/actions/signInActions'
import Loading from '../../loading'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const state = useSelector((state) => state.userLogin)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {userdata} = state

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(email,password))
    
  }
  
  useEffect (() => {
    let userInfo = localStorage.getItem('userInfo')
    if(userInfo) {
      navigate('/')
    } else {
       navigate('/login')
    }
  },[userdata])
  return (
        <div className="container">
            <div className="form">
              {
                state.loading ? <Loading /> : ""
              }
              {
                state.emailStatus === true && state.loginErrorData ? <h2 style={{color : 'red'}}>{state.loginErrorData}</h2> : <h2>Login To Your Account</h2>
              }
                    <input type="text" name="username" onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
                    <button className='loginbutton' onClick={handleSubmit}>Login</button>
            </div>
        </div>
  )
}

export default Login
