import React from 'react'
import { Col, Row } from 'antd';
import SimpleWeather from '../SimpleWeather/SimpleWeather';

const ListSimpleWeather = ({ forecastWeatherData, isLoading }) => {
  return (
    <>
      {
        forecastWeatherData &&
        <Row justify="space-around">
          {
            forecastWeatherData.list.map((weather, index) => {
              if (weather.dt_txt.includes('12:00:00')) {
                return (
                  <Col key={index}>
                    <SimpleWeather weather={weather} isLoading={isLoading} />
                  </Col>
                )
              } else {
                return null;
              }
            })
          }
        </Row>
      }
    </>
  );
};

export default ListSimpleWeather;
