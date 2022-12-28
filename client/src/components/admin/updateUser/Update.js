import React,{useEffect, useState} from 'react'
import '../login/login.css'
import {useSelector,useDispatch} from "react-redux"
import { adminRegister, adminUpdateUser } from '../../../redux/actions/admin'
import Loading from '../../loading'
import { useNavigate } from 'react-router-dom'


function Update() {
    const [name ,setName] = useState()
  const [email,setEmail] = useState('')
  const state = useSelector((state) => state.adminLogin)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {adminData} = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    let oldEmail = state.adminData.email
    dispatch(adminUpdateUser(email,name,oldEmail))
    let editInfo = localStorage.getItem('edited user')
    if(editInfo) {
        navigate('/admin/')
    }
    
  }
  console.log("update stattwtwttw state");
  console.log(state);
  
  useEffect (() => {
    let adminInfo = localStorage.getItem('adminInfo')
    let editInfo = localStorage.getItem('edited user')
    console.log("editInfo");
    console.log(editInfo);
    if(editInfo) {
     navigate('/admin/')
    }else if(adminInfo) {
        navigate('/admin/update')
    } else {
        navigate('/admin/login')
    }
  },[adminData])
  console.log("state adminloading");
  console.log(state.adminloading);
  return (
        <div className="container">
            <div className="form">
              {
                state.adminloading === true ? <Loading /> : ""
              }
              {
                state.emailStatus === true && state.adminerr ? <h2 style={{color : 'red'}}>{state.adminerr.data}</h2> : <h2> Update Your Account</h2>
              }
                    <input type="text" placeholder={state.adminData.name} name="username" onChange={(e) => setName(e.target.value)}  />
                    <input type="email" placeholder={state.adminData.email} name="useremail" onChange={(e) => setEmail(e.target.value)}  />
                    
                    <button className='loginbutton' onClick={handleSubmit}>Login</button>
            </div>
        </div>
  )
}

export default Update
