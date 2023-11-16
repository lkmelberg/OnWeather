import React from "react";
import { SwitchTabs } from "../../components/SwitchTabs";

export const MainContent = () => {
  const path = window.location.pathname;
  let latitude, longitude, city;

  if (path === "/Trondheim") {
    city = "Trondheim";
    latitude = 63.4305;
    longitude = 10.3951;
  } else if (path === "/Stavanger") {
    city = "Stavanger";
    latitude = 58.9701;
    longitude = 5.7333;
  } else if (path === "/Oslo") {
    city = "Oslo";
    latitude = 59.9127;
    longitude = 10.7522;
  } else {
    city = "Trondheim";
    latitude = 63.4305;
    longitude = 10.7461;
  }

  return (
    <div>
      <h1>{city}</h1>
      <SwitchTabs />
    </div>
  );
};

export default MainContent;
