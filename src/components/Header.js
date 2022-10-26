import React from "react";
import Image from "./Images/Troll Face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={Image} className="header--image" alt="meme " />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}
