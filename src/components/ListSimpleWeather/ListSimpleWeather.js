import React from 'react'
import { Col, Row } from 'antd';

import SimpleWeather from '../SimpleWeather/SimpleWeather';

const ListSimpleWeather = ({ forecastWeatherData }) => {
  return (
    <>
      {
        forecastWeatherData &&
        <>
          <Row justify="space-around">
            {
              forecastWeatherData.list.map(weather => {
                if (weather.dt_txt.includes('12:00:00')) {
                  return (
                    <Col>
                      <SimpleWeather weather={weather} />
                    </Col>
                  )
                }
              })
            }
          </Row>
        </>

      }
    </>
  );
};

export default ListSimpleWeather;
