import React from "react";
import { CurrentWeather } from "../../../components/CurrentWeather";

export function Trondheim() {
  const latitude = 63.4305;
  const longitude = 10.3951;
  const trondheimCurrent = CurrentWeather(latitude, longitude);

  return (
    <div>
      <h1>Trondheim</h1>
      {trondheimCurrent}
    </div>
  );
}
