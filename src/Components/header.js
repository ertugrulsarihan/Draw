import React from "react";

export default function Header() {
  return (
    <nav>
      <h5 style={{ float: "left" }} className="nav-title">
        Quick Draw
      </h5>
      <ul style={{ float: "right" }}>
        <li>
          <a href="#draw">Draw</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#how">How to Play</a>
        </li>
      </ul>
    </nav>
  );
}
