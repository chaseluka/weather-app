import { getWeather } from './api'


const form = document.getElementById('location');
const search = document.getElementById('search')
const fahrenheitBtn = document.querySelector('.f')
const celsiusBtn = document.querySelector('.c');

let fahr = true;
let celc = false;

const toggleDegrees = (() => {
  const fBtn = document.querySelector('.f');
  const cBtn = document.querySelector('.c');

  const switchMetric = () => {
    if (fahr === true && celc === false) {
      fahr = false;
      celc = true;
      cBtn.classList.add('selected');
      fBtn.classList.remove('selected');
    } else {
      fahr = true;
      celc = false;
      fBtn.classList.add('selected');
      cBtn.classList.remove('selected');
    }
  };

  return { switchMetric };
})();


// Allow input of a location and return the weather
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather(`${search.value}`)
});

fahrenheitBtn.addEventListener('click', () => {
  if (celc === true){
    toggleDegrees.switchMetric();
    console.log('hello');
    getWeather(`${search.value}`);
  }
})

celsiusBtn.addEventListener('click', () => {
  if (fahr === true) {
    toggleDegrees.switchMetric()
    console.log('hi');
    getWeather(`${search.value}`);
  }
});

// https://openweathermap.org/current#current_JSON


