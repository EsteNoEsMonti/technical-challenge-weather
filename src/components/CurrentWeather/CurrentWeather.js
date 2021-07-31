import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Typography, Image } from 'antd';

import { fetchUrlIcon } from '../../api/fetchWeather';

const CurrentWeather = ({ currentWeatherData }) => {
  console.log(currentWeatherData);

  const { Title, Text } = Typography;

  return (
    <>

      {
        currentWeatherData &&
        <>
          {
            console.log(currentWeatherData.weather[0].icon)
          }
          <Row justify="center">
            <Col xs={24} sm={24} md={12} lg={12}>

              <Row align="middle">
                <Col>
                  <Image
                    width={100}
                    src={fetchUrlIcon(currentWeatherData.weather[0].icon)}
                  />
                </Col>
                <Col style={{ verticalAlign: 'middle' }}>
                  <Title style={{ margin: 'auto' }}>{currentWeatherData?.main.temp}</Title>
                </Col>
                <Col style={{ verticalAlign: 'middle' }}>
                  <Title level={4} style={{ color: '#8c8c8c', marginLeft: 10 }}>°C</Title>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Title level={5}>Temp Max: <b>{currentWeatherData?.main?.temp_max} °C</b></Title>

                </Col>

                <Col style={{ marginLeft: '5%' }}>
                  <Title level={5}>Temp Min: <b>{currentWeatherData?.main?.temp_min} °C</b></Title>

                </Col>
              </Row>



              <Row>
                <Col style={{ marginRight: '10%' }}>
                  <Text style={{ color: '#8c8c8c' }}>Feels Like: <b>{currentWeatherData?.main?.feels_like} °C</b></Text> <br />
                  <Text style={{ color: '#8c8c8c' }}>Humidity: <b>{currentWeatherData?.main?.humidity}%</b></Text> <br />
                  <Text style={{ color: '#8c8c8c' }}>Pressure: <b>{currentWeatherData?.main?.pressure} hPa</b></Text> <br />
                  <Text style={{ color: '#8c8c8c' }}>Cloudiness: <b>{currentWeatherData?.clouds.all}%</b></Text> <br />
                </Col>
                <Col>
                  <Text style={{ color: '#8c8c8c' }}>Wind Deg: <b>{currentWeatherData?.wind?.deg}°</b></Text> <br />
                  <Text style={{ color: '#8c8c8c' }}>Wind Speed: <b>{currentWeatherData?.wind?.speed} m/s</b></Text> <br />
                  <Text style={{ color: '#8c8c8c' }}>Wind gust: <b>{currentWeatherData?.wind?.gust} m/s</b></Text> <br />
                </Col>
              </Row>



            </Col>

            <Col xs={24} sm={24} md={12} lg={12} style={{ textAlign: 'right' }}>
              <Title>{currentWeatherData?.name}, {currentWeatherData?.sys?.country}</Title>
              <Title level={3} style={{ color: '#8c8c8c' }}>{new Date().toDateString()}</Title>
              <Title level={3}>{currentWeatherData?.weather[0]?.main}</Title>
              <Title level={5}>{currentWeatherData?.weather[0]?.description}</Title>
            </Col>

          </Row>
        </>
      }

    </>
  )
}

CurrentWeather.propTypes = {
  currentWeatherData: PropTypes.any.isRequired
}

export default CurrentWeather;
