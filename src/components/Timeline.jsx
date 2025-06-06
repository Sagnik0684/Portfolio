import React from "react";

const timelineEvents = [
  {
    date: "June 2024",
    title: "Internship at ABC Corp",
    description: "Worked on frontend React projects with a focus on UI/UX.",
  },
  {
    date: "March 2025",
    title: "Hackathon Winner",
    description: "Built an AI-powered chatbot that gained 1st place.",
  },
  {
    date: "Ongoing",
    title: "Freelance Developer",
    description: "Building client websites and applications.",
  },
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <h2>Experience Timeline</h2>
      <ul className="timeline-list">
        {timelineEvents.map(({ date, title, description }) => (
          <li key={title} className="timeline-event">
            <h3>{title}</h3>
            <span>{date}</span>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}