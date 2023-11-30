import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    setReady(true);
  }

  if (ready === true) {
    return (
      <div className="Weather">
        <form className="mb-1">
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
          <div className="col-sm-6 text-center text-sm-start">
            <h1>{weatherData.city}</h1>
            <p>Sunday 3:00 a.m.</p>
            <p className="text-capitalize">{weatherData.description}</p>
          </div>
          <div className=" col-sm-6 text-center text-sm-end">
            <h1>⛅ {weatherData.temperature}°F</h1>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Wind: {weatherData.wind} mph</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9a7ca83bt1f54ebc3o8f9d804f5e2b0e";
    let unit = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.cityDefault}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return <p className="text-center">Loading...</p>;
  }
}
