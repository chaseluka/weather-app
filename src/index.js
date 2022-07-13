import { tempConversion } from './convert';
import { getWeather } from './api'

const form = document.getElementById('location');


// Allow input of a location and return the weather
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather()
  console.log(tempConversion.toCelcius(301.32));
  console.log(tempConversion.toFahrenheit(301.32));
});

// https://openweathermap.org/current#current_JSON


