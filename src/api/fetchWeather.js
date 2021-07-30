import axios from 'axios';

const appid = '3dcb61320c458d6472d47373d1562059';
const units = 'metric';
const urlCurrentWeatherData = 'https://api.openweathermap.org/data/2.5/weather';
const urlForecastWeatherData = 'https://api.openweathermap.org/data/2.5/forecast';
const currentCity = 'cordoba';

export const fetchCurrentWeatherData = async (query) => {
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

export const fetchForecastWeatherData = async (query) => {
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