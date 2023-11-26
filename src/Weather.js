import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div className="Weather">
      <div className="flex">
        <div>
          <h1>Cleveland</h1>
          <p>Sunday 3:00 a.m.</p>
          <p>Clouds</p>
        </div>
        <div className="text-right">
          <h1>⛅ 73°F</h1>
          <p>Humidity: 52%</p>
          <p>Wind: 2 mph</p>
        </div>
      </div>
    </div>
  );
}
