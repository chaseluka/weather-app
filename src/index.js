import { fromUnixTime } from "date-fns";

const search = document.getElementById('search');
const form = document.getElementById('location');


function time(dt, tz) {
  const date = fromUnixTime((dt) + tz).toUTCString();
  let hour = parseInt(date.slice(17, 20), 10);
  if (hour > 12) {
    hour -= 12;
  }
  else if (hour === 0){
    hour = 12
  }
}

// Pass in openweathermap data and create an object for the specified location obtaining desired data for the current weather, the daily weather forecast, and the weekly weather forcast.
const weather = (() => {
  const currentWeather = (temp, feelsLike, humidity, windSpeed, windDeg, weatherType, visibility, sunrise, sunset, lat, lon) => 
  ({temp, feelsLike, humidity, windSpeed, windDeg, weatherType, visibility, sunrise, sunset, lat, lon});

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
    for (let i = 0; i < 25 ; i += 1){
      const hour = hourlyForecast(
        forecastData.hourly[i].dt,
        forecastData.hourly[i].temp,
        forecastData.hourly[i].weather[0].description,
      );
      forecast24Hours.push(hour)
      time(hour.dt, forecastData.timezone_offset)
    }
    return { forecast24Hours }
  };

  const weeklyForecast = (mintemp, maxtemp, weatherType) => ({ mintemp, maxtemp, weatherType})

  const getWeeklyForecast = (forecastData) => {
    const forecast8Days = [];
    for (let i = 0; i < 8; i += 1){
      const day = weeklyForecast(
        forecastData.daily[i].temp.min,
        forecastData.daily[i].temp.max,
        forecastData.daily[i].weather[0].description,
      );
      forecast8Days.push(day)
    }
    return { forecast8Days }
  }
  return { getCurrentWeather, getHourlyForecast, getWeeklyForecast };
})();

// Wait for getWeather() and then find forecast data at location. Convert required data into objects.
async function getForecast(lat, lon) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=a7f58f1e1cb17ffc0eec81a814f77ec2`,
    { mode: 'cors' },
  );
  const forecastData = await data.json();
  weather.getHourlyForecast(forecastData)
}

// Search for weather at a specific location. Then convert required data in an object.
async function getWeather() {
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=a7f58f1e1cb17ffc0eec81a814f77ec2`,
    { mode: 'cors' },
  );
  const weatherData = await data.json();
  getForecast(
    weather.getCurrentWeather(weatherData).location.lat,
    weather.getCurrentWeather(weatherData).location.lon,
  );
}

// Allow input of a location and return the weather
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather();
});

// https://openweathermap.org/current#current_JSON


