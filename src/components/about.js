import React, { useState } from "react";
import "./circles.css";
import "./about.css";
import "../styles.css";

export default function About() {
  const [toggle, setToggle] = useState(false);

  const expand = toggle ? "expand" : "";

  return (
    <>
      <h1>About</h1>
      <div className="aboutBox"></div>
      <div className="aboutContainer">
        <img
          className="aboutImages"
          src="https://i.imgur.com/Ns21Qli.jpg"
          alt=""
          onClick={() => setToggle(!toggle)}
        />
        <div className={`entryContainer ${expand}`}>
          <p className="entryText">
            My name is Gore and I am a Chef turned Designer. I’m a father,
            foodie, and wino who is always looking to make lasting memories. My
            son, Gavin, is his motivation, my “why” and the reason that I do
            what I do. I’m a self-motivated creative mind who is looking to make
            the world a prettier place one design at a time. If you made it
            here, then it must be for a reason and thank you for taking the time
            to view my “Little Black Book.”
          </p>
        </div>
      </div>
      <div className="inspoContainer">
        <img
          className="aboutImages"
          src="https://i.imgur.com/MUYbUgF.jpg"
          alt=""
          onClick={() => setToggle(!toggle)}
        />
        <div className={`entryContainer ${expand}`}>
          <p className="entryText">
            Halfway through the Software Engineering Program at General Assembly
            I was at a very low point, felt really lost, and on the brink of
            quitting. I reached out to my instructor, Joe, and had talked to him
            about where my head was at and asked for his advice. One of the
            things he suggested to me was to write down my thoughts, positive,
            negative, code related, anything. This project is a culmination of
            that advice and a unique design. It’s an “Ode to Joe,” if you will.
            A small way to say thank you for being a huge support and a mentor
            over the last few months. Console.log(“Thank you Joe”)…
          </p>
        </div>
      </div>
    </>
  );
}
