import React, { useState, useEffect } from "react";
import "../styles.css";
import * as Contentful from "contentful";

// import Button from "react-bootstrap/Button";
// import { Collapse } from "reactstrap";

const client = Contentful.createClient({
  space: "aj2z11014ie9",
  accessToken: "E-WVKhMtADWilyoTTIu4Pv76EX0gC53hkLIDTBX7h1c"
});

export default function Test() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blogEntries"
      })
      .then((response) => {
        setEntries(response.items);
      });
  }, []);

  const Entries = entries.map((entry) => (
    <div className="entry" key={entry.sys.id}>
      <h3>{entry.fields.name}</h3>
      {entry.fields.entry}
      <hr />
    </div>
  ));
  console.log(Entries);

  return (
    <>
      <div className="testContainer">{Entries[0]}</div>
    </>
  );
}
