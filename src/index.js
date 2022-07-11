const search = document.getElementById('search');
const form = document.getElementById('location');


// Pass in openweathermap data and create an object for the specified location obtaining desired data

const weather = (weatherData) => {
  const currentWeather = (temp, feelsLike, humidity, windSpeed, windDeg, weatherType, visibility, sunrise, sunset, lat, lon) => 
  ({ temp, feelsLike, humidity, windSpeed, windDeg, weatherType, visibility, sunrise, sunset, lat, lon })
  
  const getCurrentWeather = () => {
    const location = currentWeather(
      weatherData.main.temp,
      weatherData.main.feels_like,
      weatherData.main.humidity,
      weatherData.wind.speed,
      weatherData.wind.deg,
      weatherData.weather[0].main,
      weatherData.visibility,
      weatherData.sys.sunrise,
      weatherData.sys.sunset,
      weatherData.coord.lat,
      weatherData.coord.lon,
    );
    return { location }
  }
  return { getCurrentWeather }
}

async function getHourlyForecast (lat, lon) {
  const data = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=a7f58f1e1cb17ffc0eec81a814f77ec2`,
        { mode: 'cors' },
      )
  const forecast = await data.json()
  console.log(forecast);
}

async function getWeather () {
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=a7f58f1e1cb17ffc0eec81a814f77ec2`,
    { mode: 'cors' },
  );
  const weatherData = await data.json();
  console.log(weatherData);
  console.log(weather(weatherData).getCurrentWeather().location);
  getHourlyForecast(
    weather(weatherData).getCurrentWeather().location.lat,
    weather(weatherData).getCurrentWeather().location.lon,
  );
}

// Allow input of a location and return the weather
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather()
});

// https://openweathermap.org/current#current_JSON

