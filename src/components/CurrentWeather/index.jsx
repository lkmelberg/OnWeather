import React from "react";
import { FetchWeatherData } from "../FetchWeatherData";

export function CurrentWeather({ lat, long }) {
  const currentWeatherData = FetchWeatherData(lat, long);

  const formatTo24Hour = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return new Date(date).toLocaleTimeString(undefined, options);
  };

  return (
    <div>
      <h2>Current Weather</h2>
      {currentWeatherData ? (
        <div>
          <p>
            Temperature: {currentWeatherData.current.temperature2m.toFixed(0)}C
          </p>
          <p>
            Feels Like:{" "}
            {currentWeatherData.current.apparentTemperature.toFixed(0)}C
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
