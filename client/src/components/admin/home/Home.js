import React, { useEffect, useState } from 'react'
import './home.css'
import {useSelector,useDispatch} from "react-redux"
import { adminblockUnblock, adminHome, adminRegister, adminUpdate } from '../../../redux/actions/admin'
import { useNavigate } from 'react-router-dom'
import Loading from '../../loading'

function Home() {
    const [dummy ,setDummy] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state) => state)
    useEffect(() => {
        localStorage.removeItem('edited user')
        let adminInfo = localStorage.getItem('adminInfo')
        if(adminInfo) {
            dispatch(adminHome())
         navigate('/admin/')
        } else {
            navigate('/admin/login')
        }
       
    },[])
    const [selectedUser,setuser] = useState()
    
    const userData = (data) => {
        setuser(data)
        dispatch(adminUpdate(data))
    navigate('/admin/update')
    }
const hadlelogout = () => {
    console.log("logout admin from admin home ");
    localStorage.removeItem('adminInfo')
    localStorage.getItem('edited user')
    navigate('/admin/login')
}

const block = (user) => {
    dispatch(adminblockUnblock(user))
}

console.log("localStorage.getItem('blocked user')");
console.log(localStorage.getItem('blocked user'));
console.log("state.adminLogin.adminData");
console.log(state.adminLogin.adminData);
    
  return (
    <>
     {
        state.adminLogin.adminloading ? <Loading /> :<table class="dataTable">
        <thead>
            <tr>
                <th>Numbers</th>
                <th>Names</th>
                <th>email</th>
                <th>status</th>
                <th>select</th>
                <th>block/unblock</th>
                <th className='logout' onClick={() => {
                    hadlelogout()
                }}>Logout</th>
    
            </tr>
        </thead>
        <tbody>
            {
                state.adminLogin.adminData ? state.adminLogin.adminData.map((user) => {
                    return(
                <tr>
                <td><a >#</a></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.loginStaus.toString()}</td>
                <td>
                    <button class="button action" onClick={(e) => {
                        userData(user)
                        setDummy()
                    }}>Select</button>
                </td>
                <td>
                    {
                        user.loginStaus === true ?   <button class="button action" onClick={(e) => {
                                block(user)
                        }}>block</button> :   <button class="button action" onClick={(e) => {
                                block(user)
                                setDummy()
                        }}>Unblock</button>
                    }
                  
                </td>
            </tr>
                    )
                }):""
    
                
            }
            
            
        </tbody>
    </table>
     }



    </>
  )
}

export default Home
