import React, { useState, useEffect } from 'react';
import { fetchCurrentWeatherData, fetchForecastWeatherData } from './api/fetchWeather';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ListSimpleWeather from './components/ListSimpleWeather/ListSimpleWeather';

function App() {

  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [forecastWeatherData, setForecastWeatherData] = useState();
  console.log(forecastWeatherData);

  const getCurrentWeatherData = async () => {
    const data = await fetchCurrentWeatherData();
    setCurrentWeatherData(data);
  }

  const getForecastWeatherData = async () => {
    const data = await fetchForecastWeatherData();
    setForecastWeatherData(data);
  }

  useEffect(() => {
    getCurrentWeatherData();
    getForecastWeatherData();
  }, []);

  return (
    <>
      <CurrentWeather currentWeatherData={currentWeatherData} />
      <hr />
      <ListSimpleWeather forecastWeatherData={forecastWeatherData}/>


    </>
  );
}

export default App;
