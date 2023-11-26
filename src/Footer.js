import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <div className="Footer">
      <p>
        <a
          href="https://github.com/amandalynn1204/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced code
        </a>
        {""} by Amanda Ludwick
      </p>
    </div>
  );
}
