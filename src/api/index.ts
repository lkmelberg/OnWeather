import { fetchWeatherApi } from "openmeteo";

const params = {
  latitude: 63.4305,
  longitude: 10.3951,
  current: [
    "temperature_2m",
    "apparent_temperature",
    "is_day",
    "weather_code",
    "cloud_cover",
  ],
  hourly: [
    "temperature_2m",
    "apparent_temperature",
    "precipitation",
    "rain",
    "weather_code",
    "cloud_cover",
    "cloud_cover_low",
    "cloud_cover_mid",
    "cloud_cover_high",
    "visibility",
  ],
  daily: [
    "weather_code",
    "temperature_2m_max",
    "temperature_2m_min",
    "sunrise",
    "sunset",
    "daylight_duration",
    "sunshine_duration",
    "uv_index_max",
  ],
  timezone: "Europe/Berlin",
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const current = response.current()!;
const hourly = response.hourly()!;
const daily = response.daily()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
export const weatherData = {
  current: {
    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
    temperature2m: current.variables(0)!.value(),
    apparentTemperature: current.variables(1)!.value(),
    isDay: current.variables(2)!.value(),
    weatherCode: current.variables(3)!.value(),
    cloudCover: current.variables(4)!.value(),
  },
  hourly: {
    time: range(
      Number(hourly.time()),
      Number(hourly.timeEnd()),
      hourly.interval()
    ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
    temperature2m: hourly.variables(0)!.valuesArray()!,
    apparentTemperature: hourly.variables(1)!.valuesArray()!,
    precipitation: hourly.variables(2)!.valuesArray()!,
    rain: hourly.variables(3)!.valuesArray()!,
    weatherCode: hourly.variables(4)!.valuesArray()!,
    cloudCover: hourly.variables(5)!.valuesArray()!,
    cloudCoverLow: hourly.variables(6)!.valuesArray()!,
    cloudCoverMid: hourly.variables(7)!.valuesArray()!,
    cloudCoverHigh: hourly.variables(8)!.valuesArray()!,
    visibility: hourly.variables(9)!.valuesArray()!,
  },
  daily: {
    time: range(
      Number(daily.time()),
      Number(daily.timeEnd()),
      daily.interval()
    ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
    weatherCode: daily.variables(0)!.valuesArray()!,
    temperature2mMax: daily.variables(1)!.valuesArray()!,
    temperature2mMin: daily.variables(2)!.valuesArray()!,
    sunrise: daily.variables(3)!.valuesArray()!,
    sunset: daily.variables(4)!.valuesArray()!,
    daylightDuration: daily.variables(5)!.valuesArray()!,
    sunshineDuration: daily.variables(6)!.valuesArray()!,
    uvIndexMax: daily.variables(7)!.valuesArray()!,
  },
};

// `weatherData` now contains a simple structure with arrays for datetime and weather data
// for (let i = 0; i < weatherData.hourly.time.length; i++) {
//   console.log(
//     weatherData.hourly.time[i].toISOString(),
//     weatherData.hourly.temperature2m[i],
//     weatherData.hourly.apparentTemperature[i],
//     weatherData.hourly.precipitation[i],
//     weatherData.hourly.rain[i],
//     weatherData.hourly.weatherCode[i],
//     weatherData.hourly.cloudCover[i],
//     weatherData.hourly.cloudCoverLow[i],
//     weatherData.hourly.cloudCoverMid[i],
//     weatherData.hourly.cloudCoverHigh[i],
//     weatherData.hourly.visibility[i]
//   );
// }
// for (let i = 0; i < weatherData.daily.time.length; i++) {
//   console.log(
//     weatherData.daily.time[i].toISOString(),
//     weatherData.daily.weatherCode[i],
//     weatherData.daily.temperature2mMax[i],
//     weatherData.daily.temperature2mMin[i],
//     weatherData.daily.sunrise[i],
//     weatherData.daily.sunset[i],
//     weatherData.daily.daylightDuration[i],
//     weatherData.daily.sunshineDuration[i],
//     weatherData.daily.uvIndexMax[i]
//   );
// }
