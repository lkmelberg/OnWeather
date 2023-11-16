import React, { useState, useEffect } from "react";
import { WeatherInfo } from "../../api";

export function TwodaysWeather({ lat, long }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await WeatherInfo(lat, long);
      setWeatherData(data);
    }

    fetchData();
  }, [lat, long]);

  return (
    <div>
      <h2>Current Weather: </h2>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.current.temperature2m.toFixed(0)}C</p>
          <p>
            Feels Like: {weatherData.current.apparentTemperature.toFixed(0)}C
          </p>
        </div>
      )}
    </div>
  );
}
