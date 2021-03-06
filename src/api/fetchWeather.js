import axios from 'axios';

const appid = ''; // Between the quotes my friend
const units = 'metric';
const urlCurrentWeatherData = 'https://api.openweathermap.org/data/2.5/weather';
const urlForecastWeatherData = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchCurrentWeatherData = async (query = 'cordoba') => {
  const { data, error } = await axios.get(urlCurrentWeatherData, {
    params: {
      q: query,
      units: units,
      appid: appid
    }
  });

  if (error) {
    return error;
  } else {
    return data;
  }
};

export const fetchForecastWeatherData = async (query = 'cordoba') => {
  const { data, error } = await axios.get(urlForecastWeatherData, {
    params: {
      q: query,
      units: units,
      appid: appid
    }
  });

  if (error) {
    return error;
  } else {
    return data;
  }
};

export const fetchUrlIcon = (icon) => {
  const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return url;
};