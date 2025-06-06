import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-menu">
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰ Menu
      </button>

      {open && (
        <nav className="menu-popup" role="menu">
          <Link to="/" onClick={() => setOpen(false)} role="menuitem">
            🏠 Return to Home
          </Link>
          <Link to="/skills" onClick={() => setOpen(false)} role="menuitem">
            🧠 Skills
          </Link>
          <a href="#certs" role="menuitem" onClick={() => setOpen(false)}>
            📜 Certifications
          </a>
          <a href="#blogs" role="menuitem" onClick={() => setOpen(false)}>
            📝 Blogs
          </a>
        </nav>
      )}
    </div>
  );
}