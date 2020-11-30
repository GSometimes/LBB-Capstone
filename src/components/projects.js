import React from "react";
import "./circles.css";
import "./projects.css";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="projectBox"></div>
      <div className="projectContainer1">
        <a href="https://heidinicolephoto.com/children">
          <img src="https://i.imgur.com/ZIl4Qnv.jpg" alt=""></img>
        </a>
        <a href="https://heidinicolephoto.com/children">
          <img src="https://i.imgur.com/PjKhVG7.jpg" alt=""></img>
        </a>
      </div>
      <div className="projectContainer2">
        <a href="https://heidinicolephoto.com/children">
          <img src="https://i.imgur.com/ug7SFGe.jpg" alt=""></img>
        </a>
        <a href="https://heidinicolephoto.com/children">
          <img src="https://i.imgur.com/z8Zopem.jpg" alt=""></img>
        </a>
      </div>
    </>
  );
}
