import React, { useState } from "react";
import "./App.css";
import { getIcon } from "./weatherObjects";

function App() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState("");

  console.log(getIcon(data.weather ? data.weather[0].main : null));

  async function searchLocation(event) {
    if (event.key === "Enter") {
      try {
        const response = await fetch(url);
        if (response.status === 404) {
          console.log("Erro! Cidade não encontrada.");
        }
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.error(e);
      }

      setLocation("");
    }
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4fa09df681bddf81bcb02aeb61fc9952`;

  return (
    <div className="background">
      <div className="app">
        <div className="search">
          <input
            type="text"
            value={location}
            placeholder="Enter location"
            onKeyDown={searchLocation}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>

        {Object.keys(data).length !== 0 && (
          <div className="container">
            <div className="top">
              <div className="city">
                <p>{data.name}</p>
              </div>
              <div className="image-and-temp">
                <div className="description">
                  <img
                    className="weather-icon"
                    src={getIcon(data.weather ? data.weather[0].main : null)}
                  />
                  <p className="weather-condition">
                    {data.weather ? data.weather[0].main : null}
                  </p>
                </div>
                <div className="temperature">
                  <h1>{data.main?.temp} °C</h1>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="feels">
                <p className="bold">{data.main?.feels_like} °C</p>
                <p>Feels like</p>
              </div>
              <div className="humidity">
                <p className="bold">{data.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p className="bold">{data.wind?.speed}km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
