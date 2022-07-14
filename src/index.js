import { windConversion } from './convert';
import { getWeather } from './api'

const form = document.getElementById('location');
const search = document.getElementById('search')


// Allow input of a location and return the weather
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather(`${search.value}`)
  console.log(windConversion.speed(3.13));
  console.log(windConversion.direction(277));
});

// https://openweathermap.org/current#current_JSON


