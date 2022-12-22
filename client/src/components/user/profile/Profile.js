import React, { useState ,useRef } from 'react'
import { useDispatch } from 'react-redux'
import { uploadImage } from '../../../redux/actions/signInActions'
import axios from 'axios'

import './profile.css'

function Profile() {
    const btnRef = useRef()
    const dispatch = useDispatch()
    const [profile,setProfile] = useState()
    const src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s"


    const setImage = async(e) => {
    setProfile(URL.createObjectURL(e.target.files[0]))
    const config = {
        headers: {
          "Content-type": "application/json",
        },
      }
      let formData = new FormData();
      formData.append("file",e.target.files[0])
    //    dispatch(uploadImage({formdata,id : "63a47d1ea00c51ae19461b33"}))
       const data = await axios.post('http://localhost:3001/profile',{formData},
        config)
      
   }
   
  return (
    <div>
      <h1 class="title-pen"> User Profile <span>UI</span></h1>
<div class="user-profile">
    {
        profile ? <img class="avatar" src={profile} alt="Ash" /> :
<img class="avatar" src={src} alt="Ash" />  }
  
    <div class="username">Will Smith</div>
  <div class="bio">
    Senior UI Designer
  </div>
    <div class="description">
      I use to design websites and applications
      for the web.
  </div>
  <ul class="data" >
    <input type="file"  ref={btnRef} onChange={(e) =>  setImage(e)}/>
    <button onClick={(e) => {
        
    }}> Change profile image</button>
 </ul>
</div>
  
    </div>
  )
}

export default Profile
