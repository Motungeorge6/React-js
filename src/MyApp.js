import React from "react";
import "./MyApp.css"
import ProfileCard from "./components/ProfileCard";

const MyApp = ()=>{
    return (
        <div className="myapp-container">
        <ProfileCard username="Gbolahan" hobby = "Filming"/>
        <ProfileCard username="Dami" hobby="Dancing"/>
        <ProfileCard username="Upah" hobby="Player"/>

        </div>
    )
}
export default MyApp