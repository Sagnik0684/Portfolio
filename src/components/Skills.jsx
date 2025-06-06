import React from "react";
import "../styles/Skills.css";
import Menu from "./Menu";


const skillsList = [
  { name: "JavaScript", icon: "devicon-javascript-plain", level: 90 },
  { name: "React", icon: "devicon-react-original", level: 85 },
  { name: "Node.js", icon: "devicon-nodejs-plain", level: 80 },
  { name: "Python", icon: "devicon-python-plain", level: 75 },
  { name: "C++", icon: "devicon-cplusplus-plain", level: 70 },
  // Add more skills as needed
];

export default function Skills() {
  return (
    <>
      <Menu />
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillsList.map((skill) => (
            <div key={skill.name} className="skill-card">
              <i className={`${skill.icon} skill-icon`}></i>
              <p>{skill.name}</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="progress-label">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}