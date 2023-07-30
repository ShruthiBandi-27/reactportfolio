import './MainImg2.css';


import React from 'react'

const MainImg2 = (props) => {
  return (
    <div className="main2">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
          
        </div>
    </div>
  )
}

export default MainImg2