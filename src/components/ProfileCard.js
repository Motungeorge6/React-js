import React from "react";
import {useState} from 'react'
import  "./ProfileCard.css"
import image from "../assets/logo.svg"


const ProfileCard =(props)=>{
    let { username,hobby } =props
    const handleclick = ()=>{
        let newObject = {username:`Mr ${username}`, hobby:`I like ${hobby}`}
        setState({...state, ...newObject})
    }
    const[state,setState] = useState({username: username, hobby: hobby})
    
    return (
    <div className="profile-card">
        <img src={image} alt="profile card" className="profile-card-avatar"/>
        <div className="details-container">
            <div className="firstname-details">
                <p>Name</p>
            <h1>{state.username}</h1>
            </div>
            <div className="hobby-detail">
                <p>hobby</p>
            <h1>{state.hobby}</h1>

            </div>
         </div>
         <button onClick={handleclick }>Click Me</button>
    </div>
    )
}
export default ProfileCard