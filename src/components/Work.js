// import './WorkCard.css';
import React from 'react'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';
import './WorkCard.css';

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                WorkCardData.map((value, index) => {
                    return (
                        <WorkCard 
                        key={index}
                        imgsrc={value.imgsrc}
                        title={value.title}
                        text={value.text}
                        view={value.view}
                        fsource={value.fsource}
                        bsource={value.bsource}
                         />
                    )
                } )
            }
        </div>
    </div>
  )
}

export default Work;