import { ActionTypes } from "../constants/actionTypes";


const initialState = [{}]

export const userLoginReducer = (state = initialState,{type,payload}) => {
    switch (type) {
           case ActionTypes.REGISTERREQUEST:
            return {
                ...state,
                loading : true,
                emailStatus : false,
                redirectStatus : false,
            }
            case ActionTypes.REGISTER :
                return {
                    ...state,
                    loading : false,
                    emailStatus : false,
                    redirectStatus : true
                }
            case ActionTypes.REGISTERREQUESTFAILED :
                console.log("payload");
                console.log(payload);
                return {
                 
                    ...state,
                    loading : false,
                    emailStatus : true,
                    redirectStatus : false,
                    data : payload
                    }            
            case ActionTypes.LOGINREQUEST :
                console.log("payload");
                console.log(payload);
                return { 
                    ...state,
                    loading : true,
                    emailStatus : false,
                    redirectStatus : false,
                    }
            case ActionTypes.LOGIN :
                console.log("payload");
                console.log(payload);
                return { 
                    ...state,
                    loading : false,
                    emailStatus : false,
                    redirectStatus : true,
                    userdata : payload
                    }          
               
            case ActionTypes.LOGINREQUESTFAILED :
                console.log("payload");
                console.log(payload);
                return { 
                    ...state,
                    loading : false,
                    emailStatus : true,
                    redirectStatus : false,
                    loginErrorData : payload
                    }    
            case ActionTypes.USERHOME:
                console.log("payload");
                console.log(payload);
                return { 
                    ...state,
                    loading : true,
                    }    
            case ActionTypes.USERHOMESUCCES:
                console.log("payload");
                console.log(payload);
                return { 
                    ...state,
                    loading : false,
                    }     
            case ActionTypes.HOME_FAIL:
                console.log("payload");
                console.log(payload);
                return { 
                    ...state,
                    loading : false,
                    } 
            case ActionTypes.USERIMAGEUPLOADREQUSET:
            console.log("payload");
            console.log(payload);
            return { 
                ...state,
                loading : true,
                }

                case ActionTypes.USERIMAGEUPLOADSUCCESS:
                    console.log("payload");
                    console.log(payload);
                    return { 
                        ...state,
                        loading : false,
                        userimage : payload 
                        } 

                        
                case ActionTypes.USERIMAGEUPLOADFAILED:
                    console.log("payload");
                    console.log(payload);
                    return { 
                        ...state,
                        loading : false,                       
                        } 
                
        default:
            return state;
    }
}

export const adminLoginReducer = (state = initialState,{type,payload}) => {
    console.log("from admin");
    console.log(state);
    switch (type) {
        case ActionTypes.ADMINLOGINERQUEST:
            return{
                ...state,
                adminloading : true,
                emailStatus : false,
                redirectStatus : false, 
            }
        case ActionTypes.ADMINLOGINSUCCESS:
            return{
                ...state,
                adminloading : false,
                emailStatus : false,
                redirectStatus : true, 
                adminData : payload
                }
        case ActionTypes.ADMINLOGINFAILED:
            return{
                ...state,
                adminloading : false,
                emailStatus : true,
                redirectStatus : true, 
                loginErrorData : payload
                }
        case ActionTypes.ADMINHOMEREQUEST:
            return{
                ...state,
                adminloading : true,
                emailStatus : false,
                redirectStatus : true, 
                adminData : payload
                }

        case ActionTypes.ADMINHOME:
        return{
            ...state,
                adminloading : false,
                emailStatus : false,
                redirectStatus : true, 
                adminData : payload
                }
        case ActionTypes.ADMINSELECTREQUEST:
            return{
            ...state,
            adminloading : true,
            emailStatus : false,
            redirectStatus : true, 
            }
        case ActionTypes.ADMINSELECTDATA:
            return{
                ...state,
                adminloading : false,
                emailStatus : false,
                redirectStatus : true, 
                adminData : payload
            }
            case ActionTypes.ADMINUPDATEFAILED:
                return{
                    ...state,
                    adminloading : false,
                    emailStatus : true,
                    redirectStatus : true, 
                    adminerr : payload
                }
    
        default:
            return state
    }
}

export const userProfileGetReducer = (state={},action)=>{
    switch (action.type) {
        case ActionTypes.USERPROFILEGETREQUEST:
            return {profileloading:true}

        case ActionTypes.USERPROFILEGETSUCCESS:
            return{profileloading:false,profiledata:action.payload}

        case ActionTypes.USERPROFILEGETFAIL:
            return{profileloading:false,error:action.payload}
        default:
            return state;
    }
}