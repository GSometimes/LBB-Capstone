import React from "react";
import "./circles.css";
import "./projects.css";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="projectBox"></div>
      <div className="projectContainer1">
        <img src="https://i.imgur.com/ZIl4Qnv.jpg"></img>
        <img src="https://i.imgur.com/PjKhVG7.jpg"></img>
      </div>
      <div className="projectContainer2">
        <img src="https://i.imgur.com/ug7SFGe.jpg"></img>
        <img src="https://i.imgur.com/z8Zopem.jpg"></img>
      </div>
    </>
  );
}
