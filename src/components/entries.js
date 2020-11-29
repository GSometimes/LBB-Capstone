import React, { useState, useRef } from "react";
import "./circles.css";
import "./entries.css";

export default function Entries() {
  return (
    <>
      <div className="entryBox"></div>
      <h1>Entries</h1>

      <div className="blogEntries">
        <img src="https://i.imgur.com/TaTBnDB.png"></img>
        <img src="https://i.imgur.com/FNGtxA9.jpg"></img>
      </div>

      <div className="blogEntries2">
        <img src="https://i.imgur.com/XjbyAaZ.jpg"></img>
        <img src="https://i.imgur.com/LoRizdp.jpg"></img>
      </div>
    </>
  );
}
