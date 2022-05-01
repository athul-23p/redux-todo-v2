import { LOGIN, LOGOUT } from './actions';

const initState = { auth:localStorage.getItem("todo-auth") };
export const authReducer = (store = initState,{type,payload}) => {
    switch(type){
        case LOGIN:
            return {auth_token:payload}
        case LOGOUT:
            return {auth_token:null};
        default:
            return store;
    }   
}