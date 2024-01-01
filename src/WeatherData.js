import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherForecast from "./WeatherForecast";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="col-sm-6 text-center text-sm-start">
          <h1>{props.data.city}</h1>
          <p className="pt-3">
            <FormattedTime time={props.data.time} />
          </p>
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className=" col-sm-6 text-center text-sm-end">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weather-icon"
          />
          <h1 className="d-inline-block"> {props.data.temperature}°F</h1>
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind: {props.data.wind} mph</p>{" "}
        </div>
      </div>
      <WeatherForecast city={props.data.city} />
    </div>
  );
}
