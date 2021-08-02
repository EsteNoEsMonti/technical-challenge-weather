import React, { useState, useEffect } from 'react';
import { fetchCurrentWeatherData, fetchForecastWeatherData } from '../../api/fetchWeather';
import WeatherPage from './WeatherPage';

const Weather = () => {

  const [query, setQuery] = useState('cordoba')
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [currentIsLoading, setCurrentIsLoading] = useState(true);
  const [forecastWeatherData, setForecastWeatherData] = useState();
  const [forecastIsLoading, setForecastIsLoading] = useState(true);

  const onChange = (value) => {
    setQuery(value);
    setCurrentIsLoading(true);
    setForecastIsLoading(true);
  };

  const getCurrentWeatherData = async (query) => {
    const data = await fetchCurrentWeatherData(query);
    setCurrentWeatherData(data);
    setCurrentIsLoading(false);
  };

  const getForecastWeatherData = async (query) => {
    const data = await fetchForecastWeatherData(query);
    setForecastWeatherData(data);
    setForecastIsLoading(false);
  };

  useEffect(() => {
    getCurrentWeatherData(query);
    getForecastWeatherData(query);
  }, [query]);

  return (
    <WeatherPage
      onChange={onChange}
      currentWeatherData={currentWeatherData}
      currentIsLoading={currentIsLoading}
      forecastWeatherData={forecastWeatherData}
      forecastIsLoading={forecastIsLoading}
    />
  );
};

export default Weather;
