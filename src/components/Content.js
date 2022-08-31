import React from 'react'
import Blob from "../constants/Images/Blob";
import Profile from "../constants/Images/superfoto.png";
const Content = () => {
    return (
        <div className="container-lg content">
            <div className="row">
            <div className="col-6 align-bottom"><h2>Hi, I am Beyza. I am Frontend Developer and also QA Engineer.</h2></div>
                <div className="col-12 col-md-6 container" id="blob-container">
                    <Blob/>
                    <img id="profile-picture" src={Profile} alt="pff"></img>
                </div>
              
            </div>
        </div>
    )
}

export default Content