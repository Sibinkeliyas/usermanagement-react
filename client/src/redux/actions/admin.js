import axios from "axios";
import { ActionTypes } from "../constants/actionTypes";



export const adminRegister = (email, password) => async (dispatch) => {
  
    try {
      dispatch({ type: ActionTypes.ADMINLOGINERQUEST });
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

       axios.post(
        "http://localhost:3001/admin/login",
        { email, password },
        config
      ).then((data) => {
        localStorage.setItem("adminInfo",JSON.stringify(data))
        dispatch({ type: ActionTypes.ADMINLOGINSUCCESS ,payload : data })
      })
        .catch((err) => {
          dispatch({ type: ActionTypes.REGISTERREQUESTFAILED,payload : err.response })
        })

    } catch (error) {
      dispatch({ type: ActionTypes.REGISTERREQUESTFAILED,payload : error.response })
    }
  };

export const userLogin = (email, password) => async (dispatch) => {
    // console.log(email, password);
    // try {
    //   dispatch({ type: ActionTypes.LOGINREQUEST});

    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };
    //   console.log("hddd");
    //   const { data } = await axios.post(
    //     "http://localhost:3001/login",
    //     { email, password },
    //     config
    //   ).then((Data) => {
    //     dispatch({ type: ActionTypes.LOGIN, payload : Data.data});
    //   }).catch((err) => {
    //     dispatch({ type: ActionTypes.LOGINREQUESTFAILED, payload : err.response.data});
    //   })
    // } catch (error) {
      
    // }
  };