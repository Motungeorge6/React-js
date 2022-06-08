import React, {useState} from 'react';
import {useHistory}from "react-router-dom"
// import BudgetBody from "../budget/BudgetBody";


const Psuedologin = (setAlert) => {
    let history = useHistory();
    // let setAlert = props.setAlert
    const [userDetails, setUserDetails] = useState({ identity: "", password: ""})

    const handleUserInput=(e)=> {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    const handleLogin=()=> {
        let usersRepository = JSON.parse(localStorage.getItem("users"))

        let user = {}
        let isValid = usersRepository.some((userObject)=>{
            let idCheck = (userObject?.email === userDetails?.identity || userObject?.username === userDetails?.identity)
            let passwordCheck = (userObject.password === userDetails.password)
            if(idCheck && passwordCheck){
                user = userObject
            }
            return idCheck && passwordCheck
        })

        let {identity} = userDetails

        isValid ?
            history.push(`/dashboard/${user.username}/?id=${identity}`)
            :
            setAlert({iShow: true, status: "error", message: "user details incorrect"})
        setTimeout(()=> setAlert({iShow: false, status: "", message: ""}), 5000)

    }

    return (
            <div className="auth-register" style={{display: "flex", flexDirection: "column"}}>
                <label>Email or Username</label>
                <input name="identity" onChange={handleUserInput}/>
                <label>Password</label>
                <input type="password" name="password" onChange={handleUserInput}/>
                <button onClick={handleLogin}>Login</button>
            </div>
    );
};

export default Psuedologin;


