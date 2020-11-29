import React from "react";
import "./circles.css";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <h1 id="contactPosition">Contact</h1>
      <div className="contactBox"></div>
      <div className="linkContainer">
        <a href="https://github.com/GSometimes">
          <i class="fab fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/gore-sometimes/">
          <i class="fab fa-linkedin-in" />
        </a>
        <a href="http://www.portfoliobysometimes.com/">
          <i class="fas fa-wine-glass-alt" />
        </a>
        <a href="mailto:gsometimes@outlook.com">
          <i class="fas fa-envelope" />
        </a>
      </div>
    </>
  );
}
