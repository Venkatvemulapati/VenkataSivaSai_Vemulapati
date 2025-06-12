import { useDispatch } from "react-redux"
import { REQUEST_TYPE, server_request } from "../../axios";
import { LOGIN, LOGOUT } from "../reducer/UserReducer";



const UserAction = () =>{
    const dispatch = useDispatch();

    const login = async (user)=>{
        try {
            console.log(REQUEST_TYPE);
            const response = await server_request(REQUEST_TYPE.POST,"/user/validate",user);
            console.log("user = "+response.data);

            if(response.status===200){
                dispatch({type:LOGIN, payload : response.data});
            }
           

        } catch (error) {
            alert("invalid credentials");
            console.log(error);
        }
    };

    const logout =()=>{
        return dispatch({type:LOGOUT});
    };


    return Object.freeze({login,logout});



}

export default UserAction;