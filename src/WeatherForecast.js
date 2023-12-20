import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <p>Mon</p>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt=""
          />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-low">30°</span>
            <span className="WeatherForecast-temperature-high">45°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
