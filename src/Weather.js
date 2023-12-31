import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");

  function handleResponse(response) {
    if (response.data.city === undefined) {
      alert(
        `We can't find that city!! 😔 Try entering only the city, or searching "https://www.google.com/search?q=${city}+weather" on Google.`
      );
      return;
    } else {
      setWeatherData({
        city: response.data.city,
        time: response.data.time * 1000,
        description: response.data.condition.description,
        icon: response.data.condition.icon_url,
        temperature: Math.round(response.data.temperature.current),
        humidity: response.data.temperature.humidity,
        wind: Math.round(response.data.wind.speed),
      });

      setReady(true);
    }
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "9a7ca83bt1f54ebc3o8f9d804f5e2b0e";
    let unit = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus
                className="search"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-sm-3">
              <input type="submit" value="Search" className="search-btn" />
            </div>
          </div>
        </form>
        <WeatherData data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "9a7ca83bt1f54ebc3o8f9d804f5e2b0e";
    let unit = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.cityDefault}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return <h1 className="text-center">Loading...</h1>;
  }
}
