import React from "react";

export default function ProjectDetail({ project }) {
  if (!project) {
    return <p>No project data available.</p>;
  }

  return (
    <div className="project-detail-container">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.techStack.join(", ")}</p>
      <a href={project.githubUrl} target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
  );
}