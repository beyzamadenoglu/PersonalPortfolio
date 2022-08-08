import React from 'react'
import Blob from "../constants/Images/Blob";
import Profile from "../constants/Images/superfoto.png";
const Content = () => {
    return (
        <div className="container-lg content">
            <div className="row">
                <div className="col-xs-12 col-lg-6"><Blob/><img className="profile"src={Profile} alt="pff"></img></div>
                <div className="col-xs-12 col-lg-6 align-bottom"><h2>Hi, I am Beyza. I am Frontend Developer and also QA Engineer.</h2></div>
            </div>
        </div>
    )
}

export default Content