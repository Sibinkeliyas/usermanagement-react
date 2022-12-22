import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { userRegister } from '../../../redux/actions/signInActions'
import './register.css'
import Loading from '../../loading'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [userName,seruserName ] = useState('')
  const [userEmail,seruserEmail ] = useState('')
  const [userPassword,seruserPassword ] = useState('')
  const [userProfile,setProfile ] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userLogin)

  console.log("profile");
  console.log(userProfile);

  const hadleSubmit = (e) => {
    e.preventDefault()
    dispatch(userRegister(userName,userEmail,userPassword,userProfile))
    navigate('/login')
  }
  return (
    <div className="container">
    <div className="form">
        {
          state.data ? <h2 style={{color : 'red'}}>{state.data.data}</h2> : <h2>Sign up Your Account</h2>
        } 
        {
          state.loading ? <Loading /> : null
        }
       
     
            <input type="text" name="username" onChange={(e) => seruserName(e.target.value)} placeholder="Username" />
            <input type="email" name="useremail" onChange={(e) => seruserEmail(e.target.value)} placeholder="Useremail" />
            <input type="password" name="password" onChange={(e) => seruserPassword(e.target.value)} placeholder="Password" />

            <button className='registerbutton' onClick={hadleSubmit}>Submit</button>
   
    </div>
</div>
  )
}

export default Register
