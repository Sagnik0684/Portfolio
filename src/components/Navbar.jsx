import "../styles/Navbar.css";
  
  export default function Navbar({ toggleTheme, isDark }) {
    return (
      <nav className="navbar">
        <div className="logo">Saggy.dev</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button className="toggle-btn" onClick={toggleTheme}>
            {isDark ? "🌞" : "🌙"}
          </button>
        </div>
      </nav>
    );
  }