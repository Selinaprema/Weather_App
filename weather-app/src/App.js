import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const API_KEY = "a876efed2277492783e182108242912";

function WeatherApp() {
  const [city, setCity] = useState(""); // Stores the city entered by the user
  const [weather, setWeather] = useState(null); // Stores the weather data

  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );
    const data = await response.json();
    setWeather(data); //stores data into the weather state variable
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <h2>{weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
