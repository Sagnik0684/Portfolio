import { useEffect, useState } from "react";
import "../styles/Projects.css";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Sagnik0684/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div className="flip-card" key={repo.id}>
            <div className="flip-inner">
              <div className="flip-front">
                <h3>{repo.name}</h3>
              </div>
              <div className="flip-back">
                <p>{repo.description || "No description provided."}</p>
                <a href={repo.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
