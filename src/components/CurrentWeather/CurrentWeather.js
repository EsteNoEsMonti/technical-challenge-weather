import React from 'react'
import PropTypes from 'prop-types'

const CurrentWeather = ({ currentWeatherData }) => {
  console.log(currentWeatherData);

  return (
    <>
      {
        currentWeatherData &&
        <>
          CurrentWeather Component
          || {currentWeatherData?.city?.name} - {currentWeatherData?.list[0]?.main.temp}

        </>
      }

    </>
  )
}

CurrentWeather.propTypes = {
  currentWeatherData: PropTypes.any.isRequired
}

export default CurrentWeather;
