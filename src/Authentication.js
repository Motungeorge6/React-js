import React, { useState } from 'react'
// import Login from './components/Authentication/Login'
import Register from './components/Authentication/Register'
import './authentication.css'
import Psuedologin from "./components/Authentication/Psuedologin";



const Authentication = (props) => {
    const [auth, setAuth] = useState("login")
    const [alert, setAlert] = useState({iShow: false, status: "", message: ""})

    const switchHandler = () => {
        if(auth === "login"){
            setAuth("register")
        } else{
            setAuth("login")
        }
    }
    return (
        <div className="auth-container">
            <div className="auth-body">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    {alert.iShow && <div className="Alert" style={alert.status === "error" ? {backgroundColor: "red"}:{backgroundColor: "teal"}}>
                        {alert.message}
                    </div>}
                    <button onClick={switchHandler}>{auth === "login" ? "Register" : "Login"}</button>
                </div>
                {auth === "login" ? <Psuedologin setAlert={setAlert} /> : <Register setAlert={setAlert}/>}
            </div>
        </div>
    );
};

export default Authentication