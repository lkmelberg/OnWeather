import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { CurrentWeather } from "../CurrentWeather";
import { TodaysWeather } from "../TodaysWeather";

export function SwitchTabs() {
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
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab color="#005b91" fontWeight="bold">
            Currently
          </Tab>
          <Tab color="#005b91" fontWeight="bold">
            Today
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CurrentWeather lat={latitude} long={longitude} />
          </TabPanel>
          <TabPanel>
            <TodaysWeather lat={latitude} long={longitude} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
