import { tempConversion } from './convert'


const mainWeather = (weather) => {
  const changeLocation = () => {
    const location = document.querySelector('.weather-location')
    location.textContent = `${weather.location}`
  }
  const changeMainTemp = () => {
    const tempDiv = document.querySelector('.temp')
    const temp = tempConversion.toFahrenheit(weather.temp)
    tempDiv.textContent = `${temp}°`;
  }

  const changeDescription = () => {
    const description = document.querySelector('.weather-description');
    description.textContent = `${weather.weatherType}`;
  }

  const changeHighTemp = () => {
    const tempDiv = document.querySelector('.high-temp-temp');
    const temp = tempConversion.toFahrenheit(weather.high);
    tempDiv.textContent = `${temp}°`;
  }

  const changeLowTemp = () => {
    const tempDiv = document.querySelector('.low-temp-temp');
    const temp = tempConversion.toFahrenheit(weather.low);
    tempDiv.textContent = `${temp}°`;
  };

  const loadPage = () => {
    changeLocation()
    changeMainTemp()
    changeDescription()
    changeHighTemp()
    changeLowTemp()
  }
  return{ loadPage }
}

// eslint-disable-next-line import/prefer-default-export
export { dom }