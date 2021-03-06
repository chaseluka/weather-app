import { fromUnixTime } from 'date-fns';

// Convert time from UTC to Hour, Hour and Minute, and Day.
const timeConversion = (dt, tz) => {
  const date = fromUnixTime(dt + tz).toUTCString();
  
  const getHour = () => {
    let hour = parseInt(date.slice(17, 20), 10);

    if (hour > 12) {
      hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }
    return hour
  }

  const getHourAndMinute = () => {
    const minute = date.slice(20, 22)
    const hourAndMinute = `${getHour()  }:${  minute}`;
    return hourAndMinute
  }

  const getDay = () => {
    const day = date.slice(0, 3)
    return day
  }

  const timeIsAMOrPM = () => {
    let period = '';
    const hour = parseInt(date.slice(17, 20), 10)

    if (hour > 11 && hour <= 23){
      period = 'PM'
    } else period = 'AM'
    return period
  }
  return { getHour, getHourAndMinute, getDay, timeIsAMOrPM}
}

let fahr = true; // global values for changing which metric is selected
let cels = false 

// Convert from Kelvins to either Celcius or Fahrenheit
const tempConversion = (() => {
  const fBtn = document.querySelector('.f');
  const cBtn = document.querySelector('.c');
  
  const toCelcius = (thisTemp) => {
    const temp = Math.round(thisTemp - 273.15);
    return temp 
  }

  const toFahrenheit = (thisTemp) => {
    const temp = Math.round((9 / 5) * (thisTemp - 273.15) + 32);
    return temp
  };

  const values = () => ({ fahr, cels }) // to use for referencing which metric is selected

  const switchMetric = () => { // Allow toggling of metric
    if (fahr === true && cels === false) {
      fahr = false;
      cels = true;
      cBtn.classList.add('selected');
      fBtn.classList.remove('selected');
    } else {
      fahr = true;
      cels = false;
      fBtn.classList.add('selected');
      cBtn.classList.remove('selected');
    }
  };

  const selectedMetric = (thisTemp) => { // return the temp according to the seleceted metric
    if (fahr === true){
      return toFahrenheit(thisTemp)
    } return toCelcius(thisTemp)
  }

  return { toCelcius, toFahrenheit, values, switchMetric, selectedMetric }
})()

// Convert wind speed to mph and convert direction to cardinal direction.
const windConversion = (() => {
  const speed = (windSpeed) => {
    const mph = Math.round(windSpeed * 2.236936);
    return mph
  }

  const direction = (windDeg) => {
    let thisDirection = '';
    if (windDeg > 11.25 && windDeg < 56.25) {
      thisDirection = 'NE';
    } else if (windDeg > 56.25 && windDeg < 101.25) {
      thisDirection = 'E';
    } else if (windDeg > 101.25 && windDeg < 146.25) {
      thisDirection = 'SE';
    } else if (windDeg > 146.25 && windDeg < 191.25) {
      thisDirection = 'S';
    } else if (windDeg > 191.25 && windDeg < 236.25) {
      thisDirection = 'SW';
    } else if (windDeg > 236.25 && windDeg < 281.25) {
      thisDirection = 'W';
    } else if (windDeg > 281.25 && windDeg < 326.25) {
      thisDirection = 'NW';
    } else thisDirection = 'N'
    return thisDirection
  }
  return { speed, direction }
})()

export { timeConversion, tempConversion, windConversion}
