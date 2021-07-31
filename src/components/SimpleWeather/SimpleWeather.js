import React from 'react'
import PropTypes from 'prop-types'

const SimpleWeather = ({ weather }) => {
  return (
    <>
      <div style={{ backgroundColor: 'skyblue', margin: 10 }}>
        {weather?.main.temp}
        <br />
        temp_min: {weather?.main.temp_min} - temp_max: {weather?.main.temp_max}

      </div>
    </>
  )
}

SimpleWeather.propTypes = {

}

export default SimpleWeather
