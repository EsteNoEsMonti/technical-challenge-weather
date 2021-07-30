import axios from 'axios';

const appid = '3dcb61320c458d6472d47373d1562059';
const urlCurrentWeatherData = `https://api.openweathermap.org/data/2.5/weather`;
const currentCity = 'cordoba';

export const fetchCurrentWeatherData = async () => {
  const { data, error } = await axios.get(urlCurrentWeatherData, {
    params: {
      q: currentCity,
      appid: appid
    }
  });

  if (error) {
    return error;
  } else {
    return data;
  }

};