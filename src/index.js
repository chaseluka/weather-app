const search = document.getElementById('search');
const form = document.getElementById('location');

const weather = (weatherData) => {
  const currentWeather = (temp, feelsLike, humidity, windSpeed, windDeg, weatherType, visibility, sunrise, sunset) => 
  ({ temp, feelsLike, humidity, windSpeed, windDeg, weatherType, visibility, sunrise, sunset })
  
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
    );
    return { location }
  }
  return { getCurrentWeather }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=a7f58f1e1cb17ffc0eec81a814f77ec2`,
    { mode: 'cors' },
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log(weather(response).getCurrentWeather().location);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

// https://openweathermap.org/current#current_JSON

