import axios from "axios";
import {
  json
} from "react-router-dom";
import {
  ActionTypes
} from "../constants/actionTypes";



export const userRegister = (name, email, password, profile) => async (dispatch) => {

  try {
    dispatch({
      type: ActionTypes.REGISTERREQUEST
    });
    //   to specify the data
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const {
      data
    } = await axios.post(
        "http://localhost:3001/register", {
          name,
          email,
          password,
          profile
        },
        config
      ).then((data) => {
        dispatch({
          type: ActionTypes.REGISTER
        })
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.REGISTERREQUESTFAILED,
          payload: err.response
        })
      })

  } catch (error) {

  }
};

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.LOGINREQUEST
    });
    //   to specify the data
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const {
      data
    } = await axios.post(
      "http://localhost:3001/login", {
        email,
        password
      },
      config
    ).then((Data) => {
      dispatch({
        type: ActionTypes.LOGIN,
        payload: Data.data
      });
      localStorage.setItem("userInfo", JSON.stringify(Data))
    }).catch((err) => {
      dispatch({
        type: ActionTypes.LOGINREQUESTFAILED,
        payload: err.response.data
      });
    })
  } catch (error) {

  }
};


export const userHome = () => async (dispatch) => {
  try {
    // dispatch({ type: ActionTypes.USERHOME });

    const token = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: {
        Authorization: "Bearer " + token.data.token,
        id: token.data._id
      },
    };

    axios.get(
      "http://localhost:3001?id=" + token.data._id,
      config
    ).then((response) => {
      dispatch({
        type: ActionTypes.USERHOMESUCCES,
        payload: response
      });
    })

  } catch (error) {
    dispatch({
      type: ActionTypes.HOME_FAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message :
        error.response.data,
    });
  }
};

export const uploadImage = (image, id) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.USERIMAGEUPLOADREQUSET
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const {
      data
    } = await axios.post('http://localhost:3001/profile', {
        image,
        id
      },
      config).then((data) => {
      localStorage.setItem("profile", JSON.stringify(data.data.image))
      dispatch({
        type: ActionTypes.USERIMAGEUPLOADSUCCESS,
        payload: data.data
      });
    })

  } catch (error) {

  }

}

export const userProfileGetAction = () => async(dispatch)=>{
  try {
    const savedItem = localStorage.getItem("userInfo");
    const parsedItem = JSON.parse(savedItem);

    const id = parsedItem.data._id
    dispatch({type : ActionTypes.USERPROFILEGETREQUEST})
   const {data} = await axios.get("http://localhost:3001/get-profile?id="+id)
   dispatch({type:ActionTypes.USERPROFILEGETSUCCESS,payload:data})
  } catch (error) {
    dispatch({
      type: ActionTypes.USERPROFILEGETFAIL,
      payload: error.response && error.response.data.message ?
        error.response.data.message :
        error.response.data,
    });
  }
}