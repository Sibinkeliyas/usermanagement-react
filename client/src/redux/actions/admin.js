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
          dispatch({ type: ActionTypes.ADMINLOGINFAILED,payload : err.response })
        })

    } catch (error) {
      dispatch({ type: ActionTypes.ADMINLOGINFAILED,payload : error.response })
    }
  };

export const adminHome = () => async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.ADMINHOMEREQUEST});

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:3001/admin/",
        config
      ).then((Data) => {
        dispatch({type:ActionTypes.ADMINHOME,payload : Data.data})
      }).catch((err) => {
        
      })
    } catch (error) {
      
    }
  };

  export const adminUpdate = (data) => async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.ADMINSELECTREQUEST});
      dispatch({ type: ActionTypes.ADMINSELECTDATA,payload : data});
    } catch (error) {
      
    }
  }

  export const adminUpdateUser = (email,name,oldEmail) => async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.ADMINSELECTREQUEST});
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios.post(
        "http://localhost:3001/admin/update",{email,name,oldEmail},
        config).then((Data) => {
      localStorage.setItem('edited user',JSON.stringify(Data))
        dispatch({type:ActionTypes.ADMINSELECTDATA,payload : Data.data})
      }).catch((err) => {
        dispatch({type:ActionTypes.ADMINUPDATEFAILED,payload :  err.response })
      })
    } catch (error) {
    }
  }


  export const adminblockUnblock = (user) => async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.ADMINBLOCKREQUEST});
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios.post(
        "http://localhost:3001/admin/block",{user},
        config).then((Data) => {
      localStorage.setItem('blocked user',JSON.stringify(Data))
        dispatch({type:ActionTypes.ADMINSELECTDATA,payload : Data.data})
      }).catch((err) => {
        dispatch({type:ActionTypes.ADMINUPDATEFAILED,payload :  err.response })
      })
    } catch (error) {
    }
  }
  