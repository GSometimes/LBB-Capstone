import React from "react";
import "./circles.css";
import "./about.css";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div className="aboutBox"></div>
      <div className="aboutContainer">
        <img className="aboutImages" src="https://i.imgur.com/Ns21Qli.jpg"></img>
      </div>
      <div className="inspoContainer">
        <img className="aboutImages" src="https://i.imgur.com/MUYbUgF.jpg"></img>
      </div>
    </>
  );
}
