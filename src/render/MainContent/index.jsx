import React from "react";
import { SwitchTabs } from "../../components/SwitchTabs";

export const MainContent = () => {
  const path = window.location.pathname;
  let latitude, longitude, city;

  if (path === "/Trondheim") {
    city = "Trondheim";
  } else if (path === "/Stavanger") {
    city = "Stavanger";
  } else if (path === "/Oslo") {
    city = "Oslo";
  } else {
    city = "Trondheim";
  }

  return (
    <div>
      <h1>{city}</h1>
      <SwitchTabs></SwitchTabs>
    </div>
  );
};

export default MainContent;
