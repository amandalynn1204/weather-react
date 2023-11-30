import React from "react";
import "./Weather.css";

export default function weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="search"
            />
          </div>
          <div className="col-sm-3">
            <input type="submit" value="Search" className="search-btn" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-sm-6 ">
          <h1>Cleveland</h1>
          <p>Sunday 3:00 a.m.</p>
          <p>Clouds</p>
        </div>
        <div className=" col-sm-6 text-end">
          <h1>⛅ 73°F</h1>
          <p>Humidity: 52%</p>
          <p>Wind: 2 mph</p>
        </div>
      </div>
    </div>
  );
}
