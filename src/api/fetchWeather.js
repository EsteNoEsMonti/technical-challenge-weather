import axios from 'axios';

const appid = '3dcb61320c458d6472d47373d1562059';
const urlCurrentWeatherData = `https://api.openweathermap.org/data/2.5/weather`;

export const fetchCurrentWeatherData = async (query) => {
  const { data, error } = await axios.get(urlCurrentWeatherData, {
    params: {
      q: query,
      appid: appid
    }
  });

  return (data, error);
};