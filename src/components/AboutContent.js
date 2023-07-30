import "./AboutContent.css";
import {Link} from "react-router-dom";
import React from 'react';
import node from "../assets/node1.png";
import react from "../assets/react2.png";
import myPhoto from "../assets/Shruthi_new.jpg"

export const AboutContent = () => {
  return (
    <div className="about">

        <div className="left">
        <img src={myPhoto} alt="My Photo" className="my-photo" />
        </div>
        <div className="right">
            <h1>Who Am I?</h1>
            <br/>
            <p style={{textAlign:"justify"}}>
            I am Shruthi, software developer at Oracle.
            I have 3 years of industry experience, including 1 year as Service now developer.
            Additionally I have 2 years of experience as software developer.
            With a strong interest in developing end-to-end applications,
            I am actively seeking new opportunities as a full stack developer(MERN stack) to further enhance my skills and 
            contribute to innovative projects.
            </p><br></br>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        {/* <div className="right">
            <div className="img-container">
            <div className="img-stack top">
                <img src={node} alt="nodejs"/>
            </div>
            <div className="img-stack bottom">
                <img src={react} alt="react"/>
            </div>
            </div>
        </div> */}
    </div>
  )
}
