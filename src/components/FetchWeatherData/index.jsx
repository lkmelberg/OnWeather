import { useState, useEffect } from "react";
import { WeatherInfo } from "../WeatherInfo";

export function FetchWeatherData(lat, long) {
  const [WeatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await WeatherInfo(lat, long);
        setWeatherData(data);
      } catch (error) {
        // Handle error if weather data fetching fails
        console.error("Error fetching current weather data:", error);
      }
    }

    fetchData();
  }, [lat, long]);

  return WeatherData;
}
