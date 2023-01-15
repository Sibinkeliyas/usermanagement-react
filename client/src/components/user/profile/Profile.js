import React, { useState ,useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, userProfileGetAction } from '../../../redux/actions/signInActions'
import './profile.css'
import Loading from '../../loading'

function Profile() {
    const btnRef = useRef()
    const dispatch = useDispatch()
    const [profile,setProfile] = useState()
    const [cloudinary,setCloudinary] = useState()
    const [profileImage,setProfileImage] = useState()
    const state = useSelector((state) => state.userLogin)
    const profileData  = useSelector(state=>state.profileReducer)
    const {profileloading,error,profiledata} = profileData;
    let imageUrl
    profiledata? imageUrl = profiledata.image : imageUrl = ''

    useEffect(()=>{
      dispatch(userProfileGetAction())
    },[state])
    const savedItem = localStorage.getItem("userInfo");
    const parsedItem = JSON.parse(savedItem);
    
   


    const setImage = async(e) => {
    localStorage.removeItem('profile')
    const data = new FormData();
    data.append("file", cloudinary);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dv8hkgi1z"); //cloud name can get from cloudinary
    fetch("https://api.cloudinary.com/v1_1/dv8hkgi1z/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const profileURL = data.url;
        let id = parsedItem.data._id;
        setProfileImage(profileURL)
        dispatch(uploadImage(profileURL ,id))
      })
   };



 
   
  return (
    
    <div>
      <h1 className="title-pen"> User Profile <span>UI</span></h1>
<div className="user-profile">
  {
    profileloading ? <Loading /> : ''
  }
    {
    
    profiledata ? <img className="avatar" src={imageUrl} alt="Ash" /> : <img className="avatar" src={profile} alt="Ash" />
       

 }
  
    <div className="username">{parsedItem.data.name}</div>
  <div className="bio">
    Senior UI Designer
  </div>
    <div className="description">
      I use to design websites and applications
      for the web.
  </div>
  <ul className="data" >
    <input type="file"  ref={btnRef} onChange={(e) => { 
      setCloudinary(e.target.files[0])
      profiledata.image = URL.createObjectURL(e.target.files[0])
     setProfile(URL.createObjectURL(e.target.files[0]))
      }
      }/>
    <button onClick={(e) => {
        setImage(e)
    }}> Change profile image</button>
 </ul>
</div>
  
    </div>
  )
}

export default Profile
