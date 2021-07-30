import React from 'react'
import SimpleWeather from '../SimpleWeather/SimpleWeather';

const ListSimpleWeather = ({ forecastWeatherData }) => {
  console.log(forecastWeatherData);
  return (
    <>
      Forecast List Component ||
      {
        forecastWeatherData &&
        <>
          {
            forecastWeatherData.list.map(weather => {
              if (weather.dt_txt.includes('12:00:00')) {
                return <SimpleWeather weather={weather} />
              }
            })

          }
        </>

      }
    </>
  );
};

export default ListSimpleWeather;
