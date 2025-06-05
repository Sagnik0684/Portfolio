import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { socials } from "./config/socials";
import "./styles/App.css";
import { motion } from "framer-motion";
  
  export default function App() {
    const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
      document.body.className = isDark ? "dark" : "";
    }, [isDark]);
  
    return (
      <div className="app">
        <Navbar toggleTheme={() => setIsDark(!isDark)} isDark={isDark} />
  
        <section id="about" className="about-section">
          <div className="intro-container">
            <img src="/profile.jpg" alt="Guddu" className="profile-pic" />
            <div className="intro-text">
              <h1>Hey, I'm <span className="highlight">Sagnik Biswas</span> 👋</h1>
              <p>CS Student | Developer | Dreamer</p>
              <h2>About Me</h2>
              <p>
                I'm a passionate Computer Science student with a heart full of curiosity
                and a browser full of Stack Overflow tabs 😅. I build things that solve
                real problems — whether it's AI tools, full-stack apps, or clean UIs.
              </p>
              <p>
                I'm the kind of dev who romanticizes commit messages, enjoys debugging (most days),
                and thinks good design should make you *feel* something.
              </p>
              <p>
                When I'm not coding, I’m either designing features in my head, learning new frameworks,
                or overthinking a tweet I’ll never post.
              </p>
            </div>
          </div>
        </section>
  
        <Projects />
  
        <motion.section
          id="contact"
          className="contact-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Contact Me</h2>
          <p>Drop me a line or stalk my socials 🤝</p>
          <div className="social-icons">
            <a href={socials.github} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href={socials.instagram} target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href={`mailto:${socials.email}`} target="_blank" rel="noreferrer">
              <i className="fas fa-envelope"></i> Gmail
            </a>
          </div>
          <p className="footer-line">
            Made with 💖 by Sagnik Biswas. Coded, flipped, styled & deployed like a{" "}
            <a
              href="https://youtu.be/VNs_cCtdbPc?si=Sq-npMtNK_XjdLqz"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#8B4513", textDecoration: "underline dotted" }}
              title="click... if you know, you know 😉"
            >
              Brown Munde
            </a>.
          </p>
        </motion.section>
      </div>
    );
  }
  