import { timeConversion } from './convert';
import { getWeather } from './api'

const form = document.getElementById('location');


// Allow input of a location and return the weather
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather()
  console.log(timeConversion(1657659600, -21600).getDay());
  console.log(timeConversion(1657659600, -21600).getHour());
  console.log(timeConversion(1657659600, -21600).getHourAndMinute());
});

// https://openweathermap.org/current#current_JSON


