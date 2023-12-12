import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return Math.round(((props.fahrenheit - 32) * 5) / 9);
  }

  if (unit === "fahrenheit") {
    return (
      <span>
        <h1 className="d-inline-block "> {props.fahrenheit}°F</h1>
        <a href="/" className="temperature-btn" onClick={showCelsius}>
          °C
        </a>
      </span>
    );
  }

  if (unit === "celsius") {
    return (
      <span>
        <h1 className="d-inline-block "> {celsius()}°C</h1>
        <a href="/" className="temperature-btn" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    );
  }
}
