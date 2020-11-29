import React, { useState, useRef } from "react";
import "./circles.css";
import Entries from "./entries";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";
import { Switch, Route, Link } from "react-router-dom";

export default function Circles(props) {
  const [transition, setTransition] = useState(false);
  const activeCircle = useRef();

  const handleClick = (color, route) => {
    console.log("circle clicked", color);
    activeCircle.current = color;
    setTransition(!transition);
    setTimeout(() => {
      color === "black"
        ? props.history.push("/")
        : props.history.push(`/${route}`);
    }, 1000);
  };

  const transitionActive1 = transition ? "circleTransition1" : "";
  const transitionActive2 = transition ? "circleTransition2" : "";
  const transitionActive3 = transition ? "circleTransition3" : "";
  const transitionActive4 = transition ? "circleTransition4" : "";

  const style = {
    zIndex: 1000
  };

  return (
    <>
      <div className="displayBox">
        <div
          style={activeCircle.current === "blue" ? style : {}}
          className={`blueCircle ${transitionActive1}`}
          onClick={() => handleClick("blue", "entries")}
        ></div>
        <div
          style={activeCircle.current === "red" ? style : {}}
          className={`redCircle ${transitionActive2}`}
          onClick={() => handleClick("red", "about")}
        ></div>
        <div
          style={activeCircle.current === "purple" ? style : {}}
          className={`purpleCircle ${transitionActive3}`}
          onClick={() => handleClick("purple", "contact")}
        ></div>
        <div
          style={activeCircle.current === "grey" ? style : {}}
          className={`greyCircle ${transitionActive4}`}
          onClick={() => handleClick("grey", "projects")}
        ></div>
        <div className="circlesContainer">
          <div
            className="dotCircle"
            style={activeCircle.current === "black" ? style : {}}
            onClick={() => handleClick("black")}
          ></div>
        </div>
        {/* <div><i class="fas fa-book-open"></i></div> */}
        <div className="footer">Designs by Sometimes</div>
      </div>

      <Switch>
        <Route path="/entries">
          <Entries />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </>
  );
}
