import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState();

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready === true) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <WeatherForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    let city = props.city;
    const apiKey = `9a7ca83bt1f54ebc3o8f9d804f5e2b0e`;
    let unit = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }
}
