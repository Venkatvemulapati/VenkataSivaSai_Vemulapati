import React, { useState } from "react"
import { useSelector } from "react-redux";
import UserAction from "../redux/action/UserAction";
import { Navigate } from "react-router";



const Login=()=>{
    const [userDetails,setUserDetails]=useState({username:"",password:""});
    const userAction =UserAction();
    const user =useSelector((state)=>state.user);
    const onInputChange = (event)=>{
        setUserDetails({...userDetails,[event.target.name]: event.target.value});
    };

    const onSubmit=(event)=>{
        event.preventDefault();
        if (userDetails.username.length===0 || userDetails.password.length===0) {
            alert("username/password fields should not be empty...");
        } else {
            userAction.login(userDetails);
        }
    };

    return user ? (<Navigate to={"/"}/>):
    (
        <React.Fragment>
            <div className="container">
                <h1>Login Page</h1>
                <form className="ui form">
                    <div className="form-group">
                        <label>Username</label>
                        <input type={"text"} name="username" className="form-control"
                        value={userDetails.username} onChange={onInputChange} required/><br/>
                    
                        <label>Password</label>
                        <input type={"password"} name="password" className="form-control"
                        value={userDetails.password} onChange={onInputChange} required/><br/>
                
                    </div>

                    <button className="btn btn-success" onClick={onSubmit}>Login</button>
                </form>
            </div>
        </React.Fragment>
    )


}

export default Login;