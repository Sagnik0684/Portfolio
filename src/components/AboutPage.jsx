import { Link } from "react-router-dom";
import React from "react";
import "../styles/AboutPage.css";

export default function About() {
  return (
    <div className="about-page">
      <Link to="/" className="home-button">← Back to Home</Link>

      <section className="about-header">
        <h1>About Me</h1>
        <p>Everything you might want to know (and some you didn’t ask for 😄)</p>
      </section>

      <section className="about-details">
        <h2>Who Am I?</h2>
        <p>
          I'm Sagnik Biswas, a Computer Science student with a fire in my fingers 🔥
          and a head full of side-projects. I’m passionate about full-stack development,
          machine learning, and crafting delightful UI/UX experiences.
        </p>

        <h2>What Do I Do?</h2>
        <ul>
          <li>💻 Write clean and efficient code (with occasional bugs I call “features”)</li>
          <li>🧠 Tinker with AI/ML projects that try to be smarter than me</li>
          <li>🎨 Design and build intuitive web apps (dark mode always appreciated)</li>
        </ul>

        <h2>Technologies I Love</h2>
        <p>
          JavaScript, React, Node.js, C++, Python, Tailwind, Git & GitHub, Firebase,
          MongoDB, and more.
        </p>

        <h2>Other Fun Facts</h2>
        <p>
          I romanticize good commit messages, write more comments than code sometimes,
          and secretly believe VS Code themes influence productivity 💡.
        </p>
      </section>
    </div>
  );
}