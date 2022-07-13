

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
    sunrise,
    sunset,
    lat,
    lon,
  ) => ({
    temp,
    feelsLike,
    humidity,
    windSpeed,
    windDeg,
    weatherType,
    visibility,
    sunrise,
    sunset,
    lat,
    lon,
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
      weatherData.sys.sunrise,
      weatherData.sys.sunset,
      weatherData.coord.lat,
      weatherData.coord.lon,
    );
    return { location };
  };

  const hourlyForecast = (dt, temp, weatherType) => ({ dt, temp, weatherType });

  const getHourlyForecast = (forecastData) => {
    const forecast24Hours = [];
    for (let i = 0; i < 25; i += 1) {
      const hour = hourlyForecast(
        forecastData.hourly[i].dt,
        forecastData.hourly[i].temp,
        forecastData.hourly[i].weather[0].description,
      );
      forecast24Hours.push(hour);
      // time(hour.dt, forecastData.timezone_offset);
    }
    return { forecast24Hours };
  };

  const weeklyForecast = (mintemp, maxtemp, weatherType) => ({
    mintemp,
    maxtemp,
    weatherType,
  });

  const getWeeklyForecast = (forecastData) => {
    const forecast8Days = [];
    for (let i = 0; i < 8; i += 1) {
      const day = weeklyForecast(
        forecastData.daily[i].temp.min,
        forecastData.daily[i].temp.max,
        forecastData.daily[i].weather[0].description,
      );
      forecast8Days.push(day);
    }
    return { forecast8Days };
  };
  return { getCurrentWeather, getHourlyForecast, getWeeklyForecast };
})();

// eslint-disable-next-line import/prefer-default-export
export { weather }