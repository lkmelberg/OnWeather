import React from "react";
import { FetchWeatherData } from "../FetchWeatherData";
import { Text, Flex } from "@chakra-ui/react";
import { emoji } from "../Emoji";

export function CurrentWeather({ lat, long }) {
  const currentWeatherData = FetchWeatherData(lat, long);

  return (
    <div>
      {currentWeatherData ? (
        <div>
          <Flex justifyContent="center" gap=".5rem" alignItems="center">
            <Text fontWeight="500" color="#012a4c">
              Temperature:{" "}
            </Text>
            <Text color="#005b91" fontSize="1.5em">
              {" "}
              {currentWeatherData.current.temperature2m.toFixed(0)}°C
            </Text>
          </Flex>
          <div>{emoji(currentWeatherData.current.temperature2m)}</div>
          <Flex justifyContent="center" gap=".5rem" alignItems="center">
            <Text fontWeight="500" color="#012a4c">
              Feels Like:
            </Text>
            <Text color="#005b91" fontSize="1.5em">
              {currentWeatherData.current.apparentTemperature.toFixed(0)}°C
            </Text>
          </Flex>
          <div>{emoji(currentWeatherData.current.apparentTemperature)}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
