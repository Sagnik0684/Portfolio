import React from "react";

const skillsList = [
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  // add more here
];

export default function Skills() {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill) => (
          <div key={skill.name} className="skill-card">
            <i className={`${skill.icon} skill-icon`}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}