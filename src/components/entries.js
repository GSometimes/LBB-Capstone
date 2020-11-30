import React, { useState, useEffect } from "react";
// import "./circles.css";
import "./entries.css";
import * as Contentful from "contentful";

const client = Contentful.createClient({
  space: "aj2z11014ie9",
  accessToken: "E-WVKhMtADWilyoTTIu4Pv76EX0gC53hkLIDTBX7h1c"
});

export default function Entries() {
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
      <h5>{entry.fields.name}</h5>
      {entry.fields.entry}
    </div>
  ));

  return (
    <>
      <div className="entryBox"></div>
      <h1>Entries</h1>

      <div className="blogEntries">
        <img src="https://i.imgur.com/TaTBnDB.png"></img>
        <div className="entryContainer">
          <p className="entryText">{Entries[0]}</p>
        </div>

        <img src="https://i.imgur.com/FNGtxA9.jpg"></img>
        <div className="entryContainer">
          <p className="entryText">{Entries[1]}</p>
        </div>
      </div>

      <div className="blogEntries2">
        <img src="https://i.imgur.com/XjbyAaZ.jpg"></img>
        <div className="entryContainer">
          <p className="entryText">{Entries[2]}</p>
        </div>

        <img src="https://i.imgur.com/LoRizdp.jpg"></img>
        <div className="entryContainer">
          <p className="entryText">{Entries[3]}</p>
        </div>
      </div>
    </>
  );
}
