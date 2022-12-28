import {combineReducers} from 'redux'
import { userLoginReducer, userProfileGetReducer } from './signInReducers'
import { adminLoginReducer } from './signInReducers'



const reducers = combineReducers ({
    userLogin : userLoginReducer,
    adminLogin : adminLoginReducer,
    profileReducer : userProfileGetReducer
})

export default reducers