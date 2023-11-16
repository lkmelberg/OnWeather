import React, { useRef } from "react";
import { FetchWeatherData } from "../FetchWeatherData";
import Highcharts from "highcharts";

export function TodaysWeather({ lat, long }) {
  const chartRef = useRef(null);

  // Fetch weather data using the provided function
  const weatherData = FetchWeatherData(lat, long);
  if (weatherData) {
    // Extract time and temperature data from the weatherData object
    const timeData = weatherData.hourly.time.slice(0, 24); // Limit to 24 hours
    const temperatureData = weatherData.hourly.temperature2m.slice(0, 24); // Limit to 24 hours

    // Create an array of [time, temperature] pairs

    const chartData = timeData.map((time, index) => [
      new Date(time).getTime(),
      Math.round(temperatureData[index]),
    ]);

    // Create the Highcharts chart
    Highcharts.chart(chartRef.current, {
      chart: {
        type: "line",
      },
      title: {
        text: "Temperatures today",
        style: {
          color: "#012a4c",
        },
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
      },
      series: [
        {
          name: "Temperature",
          data: chartData,
          color: "#005b91",
        },
      ],
    });
  }
  return <div ref={chartRef}></div>;
}
