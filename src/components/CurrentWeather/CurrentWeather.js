import React from 'react'
import PropTypes from 'prop-types'

const CurrentWeather = ({ currentWeatherData }) => {
  return (
    <>
      {
        currentWeatherData &&
        <>
          CurrentWeather Component
          || {currentWeatherData?.name} - {currentWeatherData?.main.temp}
        </>
      }

    </>
  )
}

CurrentWeather.propTypes = {
  currentWeatherData: PropTypes.any.isRequired
}

export default CurrentWeather;
