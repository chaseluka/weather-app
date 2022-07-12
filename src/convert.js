import { fromUnixTime } from 'date-fns';

const timeConversion = (dt, tz) => {
  const date = fromUnixTime(dt + tz).toUTCString();
  
  const getHour = () => {
    let hour = parseInt(date.slice(17, 20), 10);

    if (hour > 12) {
      hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }
    return { hour }
  }
  
  const getHourAndMinute = () => {
    const minute = date.slice(21, 24)
    const hourAndMinute = `${getHour().hour  }:${  minute}`;

    return { hourAndMinute }
  }

  const getDay = () => {
    const day = date.slice(4, 7)
    return { day}
  }
  return { getHour, getHourAndMinute, getDay}
}

const tempConversion = () => {

}

export { timeConversion, tempConversion}
