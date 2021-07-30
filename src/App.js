import React, { useState, useEffect } from 'react';
import { fetchCurrentWeatherData, fetchForecastWeatherData } from './api/fetchWeather';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {

  const [currentWeatherData, setCurrentWeatherData] = useState();
  console.log(currentWeatherData);

  const getCurrentWeatherData = async () => {
    const data = await fetchCurrentWeatherData();
    setCurrentWeatherData(data);
  }

  useEffect(() => {
    getCurrentWeatherData();
  }, []);

  return (
    <>
      <CurrentWeather currentWeatherData={currentWeatherData} />
    </>
  );
}

export default App;
