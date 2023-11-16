import React from "react";
import { useState, useEffect } from "react";
import { WeatherInfo } from "../../api";

export function CurrentWeather(lat, long) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await WeatherInfo(lat, long);
      setWeatherData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Current Weather: </h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.current.temperature2m.toFixed(0)}C</p>
          <p>
            Feels Like: {weatherData.current.apparentTemperature.toFixed(0)}C
          </p>
          <p></p>
        </div>
      )}
    </div>
  );
}
