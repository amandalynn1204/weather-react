import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let city = props.city;
  const apiKey = `9a7ca83bt1f54ebc3o8f9d804f5e2b0e`;
  let unit = "imperial";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

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
