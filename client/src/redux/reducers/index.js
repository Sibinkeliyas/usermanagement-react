import {combineReducers} from 'redux'
import { userLoginReducer } from './signInReducers'
import { adminLoginReducer } from './signInReducers'



const reducers = combineReducers ({
    userLogin : userLoginReducer,
    adminLogin : adminLoginReducer
})

export default reducers