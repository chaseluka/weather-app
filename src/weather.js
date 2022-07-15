import { mainWeather, displayHourlyForecast, displayWeeklyForecast, displayEnvironmentInfo } from './dom';
// Pass in openweathermap data and create an object for the specified location obtaining desired data for the current weather, the daily weather forecast, and the weekly weather forcast.
const weather = (() => {
  const currentWeather = (
    temp,
    feelsLike,
    humidity,
    windSpeed,
    windDeg,
    weatherType,
    visibility,
    lat,
    lon,
    location,
    high,
    low,
    dt,
    tz,
  ) => ({
    temp,
    feelsLike,
    humidity,
    windSpeed,
    windDeg,
    weatherType,
    visibility,
    lat,
    lon,
    location,
    high,
    low,
    dt,
    tz,
  });

  const getCurrentWeather = (weatherData) => {
    const location = currentWeather(
      weatherData.main.temp,
      weatherData.main.feels_like,
      weatherData.main.humidity,
      weatherData.wind.speed,
      weatherData.wind.deg,
      weatherData.weather[0].description,
      weatherData.visibility,
      weatherData.coord.lat,
      weatherData.coord.lon,
      weatherData.name,
      weatherData.main.temp_max,
      weatherData.main.temp_min,
      weatherData.dt,
      weatherData.timezone,
    );
    // call neccessary DOM info
    mainWeather(location).loadPage();
    displayEnvironmentInfo(location).setupEnvironmentInfo()
    return { location };
  };

  const hourlyForecast = (dt, tz, temp, weatherType, weatherMain) => ({ dt, tz, temp, weatherType, weatherMain });

  const getHourlyForecast = (forecastData) => {
    const forecast24Hours = [];
    for (let i = 0; i < 25; i += 1) {
      const hour = hourlyForecast(
        forecastData.hourly[i].dt,
        forecastData.timezone_offset,
        forecastData.hourly[i].temp,
        forecastData.hourly[i].weather[0].description,
        forecastData.hourly[i].weather[0].main,
      );
      forecast24Hours.push(hour);
    }
    // call neccessary DOM info
    displayHourlyForecast(forecast24Hours).setupHourlyForecast();
    return forecast24Hours;
  };

  const weeklyForecast = (dt, tz, temp, weatherType, weatherMain) => ({
    dt,
    tz,
    temp,
    weatherType,
    weatherMain,
  });

  const getWeeklyForecast = (forecastData) => {
    const forecast8Days = [];
    for (let i = 0; i < 8; i += 1) {
      const day = weeklyForecast(
        forecastData.daily[i].dt,
        forecastData.timezone_offset,
        forecastData.daily[i].temp.day,
        forecastData.daily[i].weather[0].description,
        forecastData.daily[i].weather[0].main,
      );
      forecast8Days.push(day);
    }
    // call neccessary DOM info
    displayWeeklyForecast(forecast8Days).setupWeeklyForecast();
    return forecast8Days;
  };
  return { getCurrentWeather, getHourlyForecast, getWeeklyForecast };
})();


// eslint-disable-next-line import/prefer-default-export
export { weather }