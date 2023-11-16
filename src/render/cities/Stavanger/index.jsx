import React from "react";
import { CurrentWeather } from "../../../components/CurrentWeather";

export function Stavanger() {
  const latitude = 58.9701;
  const longitude = 5.7333;
  const stavangerCurrent = CurrentWeather(latitude, longitude);

  return (
    <div>
      <h1>Stavanger</h1>
      {stavangerCurrent}
    </div>
  );
}
