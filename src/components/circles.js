import React, { useState, useRef } from "react";
import "./circles.css";
import Entries from "./entries";
import { Switch, Route, Link } from "react-router-dom";

export default function Circles(props) {
  const [transition, setTransition] = useState(false);
  const activeCircle = useRef();

  const handleClick = (color) => {
    console.log("circle clicked", color);
    activeCircle.current = color;
    setTransition(!transition);
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
      <div className="circlesContainer">
        <div
          className="dotCircle"
          style={activeCircle.current === "black" ? style : {}}
          onClick={() => handleClick("black")}
        ></div>
      </div>
      <div className="backgroundBox"></div>
      <Link to="/entries">
        <div
          style={activeCircle.current === "blue" ? style : {}}
          className={`blueCircle ${transitionActive1}`}
          onClick={() => handleClick("blue")}
        ></div>
      </Link>
      <div
        style={activeCircle.current === "red" ? style : {}}
        className={`redCircle ${transitionActive2}`}
        onClick={() => handleClick("red")}
      ></div>
      <div
        style={activeCircle.current === "green" ? style : {}}
        className={`greenCircle ${transitionActive3}`}
        onClick={() => handleClick("green")}
      ></div>
      <div
        style={activeCircle.current === "grey" ? style : {}}
        className={`greyCircle ${transitionActive4}`}
        onClick={() => handleClick("grey")}
      ></div>
      <Switch>
        <Route path="/">
          <Circles />
        </Route>
        <Route path="/entries">
          <Entries />
        </Route>
      </Switch>
    </>
  );
}
