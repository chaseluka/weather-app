import { getWeather } from './api';
import { tempConversion } from './convert';
import './style.css';

const form = document.getElementById('location');
const search = document.getElementById('search');
const fahrenheitBtn = document.querySelector('.f');
const celsiusBtn = document.querySelector('.c');

getWeather('New York');

// Allow input of a location and return the weather
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather(`${search.value}`);
});

// Remove error sign on focus of input
search.addEventListener('focus', () => {
  const errorMessage = document.querySelector('.error');
  errorMessage.style.display = 'none';
});

// Recall the weather info based off users selection of fahr or cels
fahrenheitBtn.addEventListener('click', () => {
  console.log(tempConversion.values().fahr);
  if (tempConversion.values().cels === true) {
    tempConversion.switchMetric();
    console.log('hello');
    getWeather(`${search.value}`);
  }
});

celsiusBtn.addEventListener('click', () => {
  console.log(tempConversion.values().fahr);
  if (tempConversion.values().fahr === true) {
    tempConversion.switchMetric();
    console.log('hi');
    getWeather(`${search.value}`);
  }
});

// https://openweathermap.org/current#current_JSON
