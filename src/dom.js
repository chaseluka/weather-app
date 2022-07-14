import { tempConversion, timeConversion } from './convert'


const mainWeather = (weatherData) => {
  const changeLocation = () => {
    const location = document.querySelector('.weather-location')
    location.textContent = `${weatherData.location}`
  }
  const changeMainTemp = () => {
    const tempDiv = document.querySelector('.temp')
    const temp = tempConversion.toFahrenheit(weatherData.temp)
    tempDiv.textContent = `${temp}°`;
  }

  const changeDescription = () => {
    const description = document.querySelector('.weather-description');
    description.textContent = `${weatherData.weatherType}`;
  }

  const changeHighTemp = () => {
    const tempDiv = document.querySelector('.high-temp-temp');
    const temp = tempConversion.toFahrenheit(weatherData.high);
    tempDiv.textContent = `${temp}°`;
  }

  const changeLowTemp = () => {
    const tempDiv = document.querySelector('.low-temp-temp');
    const temp = tempConversion.toFahrenheit(weatherData.low);
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

const displayHourlyForecast = (forecast) => {
  const DOMElements = (() => {
    const hourlyForecastContainer = document.querySelector('.hourly-forecast');

    for (let i = 0; i < 25; i += 1) {
      const hourlyForecastItem = document.createElement('div');
      hourlyForecastItem.classList.add('hourly-forecast-item');
      hourlyForecastContainer.appendChild(hourlyForecastItem);

      const timeDiv = document.createElement('div');
      timeDiv.classList.add('time');

      const img = document.createElement('img');
      
      const tempDiv = document.createElement('div');
      tempDiv.classList.add('hourly-temp')

      hourlyForecastItem.appendChild(timeDiv)
      hourlyForecastItem.appendChild(img)
      hourlyForecastItem.appendChild(tempDiv)
    }
    const forecastItems = document.querySelectorAll('.hourly-forecast-item')
    return forecastItems
  })();

  const addTime = (forecastData, item) => {
    const time = timeConversion(forecastData.dt, forecastData.tz).getHour();
    const period = timeConversion(forecastData.dt, forecastData.tz).timeIsAMOrPM();

    const timeDiv = item.children[0];
    
    timeDiv.textContent = time + period;
  };

  const addHourlyTemp = (forecastData, item) => {
    const temp = tempConversion.toFahrenheit(forecastData.temp)

    const tempdiv = item.children[2];
    tempdiv.textContent = `${temp}°`
  }

  const setupHourlyForecast = () => {
    console.log(DOMElements.forecastItems);
    for (let i = 0; i < 25; i += 1){
      addTime(forecast[i], DOMElements[i])
      addHourlyTemp(forecast[i], DOMElements[i]);
    }
  }

  return { setupHourlyForecast }
}

export { mainWeather, displayHourlyForecast }