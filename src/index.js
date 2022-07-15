import { getWeather } from './api'
import { tempConversion } from './convert';


const form = document.getElementById('location');
const search = document.getElementById('search')
const fahrenheitBtn = document.querySelector('.f')
const celsiusBtn = document.querySelector('.c');

// Allow input of a location and return the weather
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather(`${search.value}`)
});

fahrenheitBtn.addEventListener('click', () => {
  console.log(tempConversion.values().fahr);
  if (tempConversion.values().cels === true){
    tempConversion.switchMetric();
    console.log('hello');
    getWeather(`${search.value}`);
  }
})

celsiusBtn.addEventListener('click', () => {
  console.log(tempConversion.values().fahr);
  if (tempConversion.values().fahr === true) {
    tempConversion.switchMetric();
    console.log('hi');
    getWeather(`${search.value}`);
  }
});

// https://openweathermap.org/current#current_JSON