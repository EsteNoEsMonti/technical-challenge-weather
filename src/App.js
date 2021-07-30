import React, { useState, useEffect } from 'react';
import { fetchCurrentWeatherData  } from './api/fetchWeather';

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
      tech challenge weather
    </>
  );
}

export default App;
