import { tempConversion, timeConversion, windConversion } from './convert'

// Change DOM items for  main weather
const mainWeather = (weatherData) => {
  const changeLocation = () => {
    const location = document.querySelector('.weather-location')
    location.textContent = `${weatherData.location}`
  }
  const changeMainTemp = () => {
    const tempDiv = document.querySelector('.temp')
    const temp = tempConversion.selectedMetric(weatherData.temp)
    tempDiv.textContent = `${temp}°`;
  }

  const changeDescription = () => {
    const description = document.querySelector('.weather-description');
    description.textContent = `${weatherData.weatherType}`;
  }

  const changeHighTemp = () => {
    const tempDiv = document.querySelector('.high-temp-temp');
    const temp = tempConversion.selectedMetric(weatherData.high);
    tempDiv.textContent = `${temp}°`;
  }

  const changeLowTemp = () => {
    const tempDiv = document.querySelector('.low-temp-temp');
    const temp = tempConversion.selectedMetric(weatherData.low);
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

// Create DOM elements for hourly forecast items, to recycle.
const createDOMElements = (() => {
  const hourlyForecastDOMElements = (() => {
    const hourlyForecastContainer = document.querySelector('.hourly-forecast');

    for (let i = 0; i < 25; i += 1) {
      const hourlyForecastItem = document.createElement('div');
      hourlyForecastItem.classList.add('hourly-forecast-item');
      hourlyForecastContainer.appendChild(hourlyForecastItem);

      const timeDiv = document.createElement('div');
      timeDiv.classList.add('time');

      const img = document.createElement('img');

      const tempDiv = document.createElement('div');
      tempDiv.classList.add('hourly-temp');

      hourlyForecastItem.appendChild(timeDiv);
      hourlyForecastItem.appendChild(img);
      hourlyForecastItem.appendChild(tempDiv);
    }
    const forecastItems = document.querySelectorAll('.hourly-forecast-item');
    return forecastItems;
  })();
 
  const weeklyForecastDOMElements = (() => {
    const weeklyForecastContainer = document.querySelector('.weekly-forecast');
    for (let i = 0; i < 8; i += 1) {
      const weeklyForecastItem = document.createElement('div');
      weeklyForecastItem.classList.add('weekly-forecast-item');
      weeklyForecastContainer.appendChild(weeklyForecastItem);

      const timeDiv = document.createElement('div');
      timeDiv.classList.add('time');

      const img = document.createElement('img');

      const tempDiv = document.createElement('div');
      tempDiv.classList.add('weekly-temp');

      weeklyForecastItem.appendChild(timeDiv);
      weeklyForecastItem.appendChild(img);
      weeklyForecastItem.appendChild(tempDiv);
    }
    const forecastItems = document.querySelectorAll('.weekly-forecast-item');
    return forecastItems;
  })();

  return { hourlyForecastDOMElements, weeklyForecastDOMElements }

})(); 

// Change DOM items for hourly forecast
const displayHourlyForecast = (forecast) => {
  const addTime = (forecastData, item) => {
    const time = timeConversion(forecastData.dt, forecastData.tz).getHour();
    const period = timeConversion(forecastData.dt, forecastData.tz).timeIsAMOrPM();

    const timeDiv = item.children[0];
    
    timeDiv.textContent = time + period;
  };

  const addWeatherTypeImages = (forecastData, item) => {
    const img = item.children[1]
    const type = forecastData.weatherMain;
    if (type === 'Clouds' || type === 'Rain' || type === 'Drizzle' || type === 'Thunderstorm' ||
    type === 'Snow' || type === 'Clear'){
      if (type === 'Clouds' && forecastData.weatherType !== 'overcast clouds') {
        img.src = `../src/images/${forecastData.weatherType}.svg`;
      } else if (forecastData.weatherType === 'overcast clouds') {
        img.src = `../src/images/broken clouds.svg`;
      } else img.src = `../src/images/${type}.svg`;
    } else img.src = `../src/images/weather-tornado.svg`;
  };

  const addHourlyTemp = (forecastData, item) => {
    const temp = tempConversion.selectedMetric(forecastData.temp)

    const tempdiv = item.children[2];
    tempdiv.textContent = `${temp}°`
  }

  const setupHourlyForecast = () => {
    for (let i = 0; i < 25; i += 1){
      addTime(forecast[i], createDOMElements.hourlyForecastDOMElements[i]);
      addWeatherTypeImages(forecast[i], createDOMElements.hourlyForecastDOMElements[i]);
      addHourlyTemp(forecast[i], createDOMElements.hourlyForecastDOMElements[i]);
    }
  }

  return { setupHourlyForecast }
}
// Change DOM items for weekly forecast
const displayWeeklyForecast = (forecast) => {
  const addTime = (forecastData, item) => {
    const time = timeConversion(forecastData.dt, forecastData.tz).getDay();
    const timeDiv = item.children[0];
    timeDiv.textContent = time
  };

  const addWeatherTypeImages = (forecastData, item) => {
    const img = item.children[1];
    const type = forecastData.weatherMain;
    if (
      type === 'Clouds' ||
      type === 'Rain' ||
      type === 'Drizzle' ||
      type === 'Thunderstorm' ||
      type === 'Snow' ||
      type === 'Clear'
    ) {
      if (type === 'Clouds' && forecastData.weatherType !== 'overcast clouds') {
        img.src = `../src/images/${forecastData.weatherType}.svg`;
      } else if (forecastData.weatherType === 'overcast clouds') {
        img.src = `../src/images/broken clouds.svg`;
      } else img.src = `../src/images/${type}.svg`;
    } else img.src = `../src/images/weather-tornado.svg`;
  };

  const addWeeklyTemp = (forecastData, item) => {
    const temp = tempConversion.selectedMetric(forecastData.temp);

    const tempdiv = item.children[2];
    tempdiv.textContent = `${temp}°`;
  };

  const setupWeeklyForecast = () => {
    for (let i = 0; i < 8; i += 1) {
      addTime(forecast[i], createDOMElements.weeklyForecastDOMElements[i]);
      addWeatherTypeImages(forecast[i], createDOMElements.weeklyForecastDOMElements[i]);
      addWeeklyTemp(forecast[i], createDOMElements.weeklyForecastDOMElements[i]);
    }
  };
  return { setupWeeklyForecast };
};

// Change DOM items for environmental information
const displayEnvironmentInfo = (weatherData) => {
  const feelsLike = () => {
    const temp = document.querySelector('.feels-like')
    const thisTemp = tempConversion.selectedMetric(weatherData.feelsLike);
    temp.textContent = `${thisTemp}°`
  }
  
  const humidity = () => {
    const humd = document.querySelector('.humididty');
    humd.textContent = `${weatherData.humidity}%`;
  };

  const wind = () => {
    const windInfo = document.querySelector('.wind');
    windInfo.textContent = `${windConversion.speed(weatherData.windSpeed)}mph/${windConversion.direction(weatherData.windDeg)}`;
  };

  const visibility = () => {
    const vis = document.querySelector('.visibility');
    const text = Math.round(weatherData.visibility / 1000)
    vis.textContent = `${text}mi`;
  }

  const setupEnvironmentInfo = () => {
    feelsLike()
    humidity()
    visibility()
    wind()
  }
  return { setupEnvironmentInfo }
}

export { mainWeather, displayHourlyForecast, displayWeeklyForecast, displayEnvironmentInfo }