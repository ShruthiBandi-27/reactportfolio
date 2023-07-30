import './WorkCard.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="projectImg"  style={{ width: '100%', height: '40%' }}/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details" >
                    <p style={{textAlign: 'justify', fontSize: '20px'}}>{props.text}</p><br></br>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn" target="_blank">View</NavLink>
                        <NavLink to={props.fsource} className="btn" target="_blank">frontend source</NavLink>
                        <NavLink to={props.bsource} className="btn" target="_blank">backend source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard