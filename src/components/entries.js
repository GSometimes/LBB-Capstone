import React, { useState, useEffect } from "react";
import "./entries.css";
import "../styles.css";
import * as Contentful from "contentful";
import BlogEntry from "./BlogEntry";

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

  const imagesLeft = [
    "https://i.imgur.com/TaTBnDB.png",
    "https://i.imgur.com/FNGtxA9.jpg"
  ];
  const imagesRight = [
    "https://i.imgur.com/XjbyAaZ.jpg",
    "https://i.imgur.com/LoRizdp.jpg"
  ];

  const blogEntriesLeft = Entries.slice(0, 2).map((entry, index) => (
    <BlogEntry entry={entry} image={imagesLeft[index]} />
  ));

  const blogEntriesRight = Entries.slice(2, 4).map((entry, index) => (
    <BlogEntry entry={entry} image={imagesRight[index]} />
  ));

  return (
    <>
      <div className="entryBox"></div>
      <h1>Entries</h1>

      <div className="blogEntries">
        {blogEntriesLeft}

        {/* <img src="https://i.imgur.com/TaTBnDB.png" alt=""></img>
        <div className="entryContainer">
          <p className="entryText">{Entries[0]}</p>
        </div>

        <img src="https://i.imgur.com/FNGtxA9.jpg" alt=""></img>
        <div className="entryContainer">
          <p className="entryText">{Entries[1]}</p>
        </div> */}
      </div>

      <div className="blogEntries2">
        {blogEntriesRight}

        {/* <img src="https://i.imgur.com/XjbyAaZ.jpg" alt=""></img>
        <div className="entryContainer">
          <p className="entryText">{Entries[2]}</p>
        </div>

        <img src="https://i.imgur.com/LoRizdp.jpg" alt=""></img>
        <div className="entryContainer">
          <p className="entryText">{Entries[3]}</p>
        </div> */}
      </div>
    </>
  );
}
