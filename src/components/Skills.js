import React from "react";
import "./Skills.css";

const FrontEndskills = [
  { skill: "HTML", percent: "85", color: "blue" },
  { skill: "CSS", percent: "80", color: "green" },
  { skill: "JavaScript", percent: "85", color: "purple" },
  { skill: "REACT", percent: "85", color: "yellow" },
  { skill: "Material UI", percent: "75", color: "orange" },
];
const BackEndskills = [{ skill: "NodeJS", percent: "80", color: "red" }];
const DataBaseskills = [
  { skill: "MongoDB", percent: "80", color: "orange" },
  { skill: "MySQL", percent: "85", color: "pink" },
];

const Skills = () => {
  return (
    <div className="skills">
      <div>
        <h1>Front End</h1>
        <ul style={{ marginTop: "1rem" }}>
          {FrontEndskills.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: "bold" }}>{item.skill}: </span>
              <span>{item.percent}%</span>
              <div
                style={{
                  backgroundColor: "lightgray",
                  height: "1rem",
                  marginTop: "0.3rem",
                  borderRadius: "50px",
                }}
              >
                <div
                  style={{
                    backgroundColor: `${item.color}`,
                    width: `${item.percent}%`,
                    height: "100%",
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div style={{marginTop: "2rem"}}>
        <h1>Back End</h1>
        <ul style={{ marginTop: "1rem" }}>
          {BackEndskills.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: "bold" }}>{item.skill}: </span>
              <span>{item.percent}%</span>
              <div
                style={{
                  backgroundColor: "lightgray",
                  height: "1rem",
                  marginTop: "0.25rem",
                  borderRadius: "50px",
                }}
              >
                <div
                  style={{
                    backgroundColor: `${item.color}`,
                    width: `${item.percent}%`,
                    height: "100%",
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div style={{marginTop: "2rem"}}>
        <h1>DataBase</h1>
        <ul style={{ marginTop: "1rem" }}>
          {DataBaseskills.map((item, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: "bold" }}>{item.skill}: </span>
              <span>{item.percent}%</span>
              <div
                style={{
                  backgroundColor: "lightgray",
                  height: "1rem",
                  marginTop: "0.25rem",
                  borderRadius: "50px",
                }}
              >
                <div
                  style={{
                    backgroundColor: `${item.color}`,
                    width: `${item.percent}%`,
                    height: "100%",
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
