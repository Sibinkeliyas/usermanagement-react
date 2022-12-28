import React,{useEffect, useState} from 'react'
import './login.css'
import {useSelector,useDispatch} from "react-redux"
import { adminRegister } from '../../../redux/actions/admin'
import Loading from '../../loading'
import { useNavigate } from 'react-router-dom'


function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const state = useSelector((state) => state.adminLogin)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {adminData} = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminRegister(email,password))
    
  } 
  useEffect (() => {
    let adminInfo = localStorage.getItem('adminInfo')
    if(adminInfo) {
     navigate('/admin')
    } else {
        navigate('/admin/login')
    }
  },[adminData])
  return (
        <div className="container">
            <div className="form">
              {
                state.adminloading ? <Loading /> : ""
              }
              {
                state.emailStatus === true && state.loginErrorData ? <h2 style={{color : 'red'}}>{state.loginErrorData.data}</h2> : <h2>Login To Your Account</h2>
              }
                    <input type="text" name="username" onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
                    <button className='loginbutton' onClick={handleSubmit}>Login</button>
            </div>
        </div>
  )
}

export default Login
