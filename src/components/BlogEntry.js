import React, { useState } from "react";
import "../styles.css";
import "./BlogEntry.css";

const BlogEntry = (props) => {
  const [toggle, setToggle] = useState(false);

  const expand = toggle ? "expand" : "";

  return (
    <div className="blog-entry">
      <img className="entryImages" src={props.image} alt="" onClick={() => setToggle(!toggle)} />

      <div className={`entryContainer ${expand}`}>
        <p className="entryText">{props.entry}</p>
      </div>
    </div>
  );
};

export default BlogEntry;
