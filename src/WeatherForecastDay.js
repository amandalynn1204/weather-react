import React from "react";

export default function WeatherForecastDay(props) {
  let time = new Date(props.data.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[time.getDay()];

  return (
    <div className="col">
      <p>{day}</p>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-low">
          {Math.round(props.data.temperature.minimum)}°
        </span>
        <span className="WeatherForecast-temperature-high">
          {Math.round(props.data.temperature.maximum)}°
        </span>
      </div>
    </div>
  );
}
