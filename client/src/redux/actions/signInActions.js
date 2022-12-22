import axios from "axios";
import { json } from "react-router-dom";
import { ActionTypes } from "../constants/actionTypes";



export const userRegister = (name,email,password,profile) => async (dispatch) => {
  
    try {
      dispatch({ type: ActionTypes.REGISTERREQUEST });
    //   to specify the data
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:3001/register",
        {name, email, password ,profile},
        config
      ).then((data) => {
        dispatch({ type: ActionTypes.REGISTER })
      })
        .catch((err) => {
          console.log(err);
          dispatch({ type: ActionTypes.REGISTERREQUESTFAILED,payload : err.response })
        })

    } catch (error) {
     
    }
  };

export const userLogin = (email, password) => async (dispatch) => {
    console.log(email, password);
    try {
      dispatch({ type: ActionTypes.LOGINREQUEST});
    //   to specify the data
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("hddd");
      const { data } = await axios.post(
        "http://localhost:3001/login",
        { email, password },
        config
      ).then((Data) => {
        dispatch({ type: ActionTypes.LOGIN, payload : Data.data});
        localStorage.setItem("userInfo",JSON.stringify(Data))
      }).catch((err) => {
        dispatch({ type: ActionTypes.LOGINREQUESTFAILED, payload : err.response.data});
      })
    } catch (error) {
      
    }
  };


  export const userHome = () => async (dispatch) => {
    try {
      // dispatch({ type: ActionTypes.USERHOME });
  
      const token = JSON.parse(localStorage.getItem("userInfo"));
      console.log("token");
      console.log(token.data._id);
      const config = {
        headers: {
          Authorization: "Bearer " + token.data.token,
          id : token.data._id
        },
      };
      
      console.log("datt");
       axios.get(
        "http://localhost:3001?id=" + token.data._id,
        config
      ).then((response) => {
        console.log("suces");
        console.log(response);
        dispatch({ type: ActionTypes.USERHOMESUCCES, payload: response });
      })
   
    } catch (error) {
      dispatch({
        type: ActionTypes.HOME_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response.data,
      });
      console.log(error.response.data);
     }
  };

  export const uploadImage = (image,id) => async (dispatch) => {
    try {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
console.log(image);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("hddd");
      const { data } = await axios.post('http://localhost:3001/profile',{image,id},
        config)
      
    } catch (error) {
      
    }
   
  }


  