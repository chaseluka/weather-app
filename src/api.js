import { weather } from './weather';

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
  getForecast( // After retrieving locational data, find the forecasted weather at said location.
    weather.getCurrentWeather(weatherData).location.lat,
    weather.getCurrentWeather(weatherData).location.lon,
  );
}

export { getForecast, getWeather} 