import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Typography, Image, Spin, Card } from 'antd';
import { fetchUrlIcon } from '../../api/fetchWeather';

const CurrentWeather = ({ currentWeatherData, isLoading }) => {

  const { Title, Text } = Typography;

  return (
    <Card
      hoverable
      style={{ maxWidth: 1200, margin: '10px auto'}}
    >
      <Spin
        size="large"
        tip="Loading weather..."
        spinning={isLoading}
      >
        {
          currentWeatherData &&
          <>
            <Row justify="center">
              <Col xs={24} sm={24} md={12} lg={12}>
                <Row align="middle">
                  <Col>
                    <Image
                      width={100}
                      src={fetchUrlIcon(currentWeatherData.weather[0].icon)}
                      preview={false}
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
                    <Title level={5}>Temp Max: <b>{parseInt(currentWeatherData?.main?.temp_max)} °C</b></Title>
                  </Col>

                  <Col style={{ marginLeft: '5%' }}>
                    <Title level={5}>Temp Min: <b>{parseInt(currentWeatherData?.main?.temp_min)} °C</b></Title>
                  </Col>
                </Row>

                <Row>
                  <Col style={{ marginRight: '10%' }}>
                    <Text style={{ color: '#8c8c8c' }}>Feels Like: <b>{parseInt(currentWeatherData?.main?.feels_like)} °C</b></Text> <br />
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
                <Title style={{ marginBottom: 0 }}>{currentWeatherData?.name}, {currentWeatherData?.sys?.country}</Title>
                <Text level={3} style={{ color: '#8c8c8c', fontSize: 30, margin: 0 }}>{new Date().toDateString()}</Text>
                <Title level={3} style={{ margin: 0 }}>{currentWeatherData?.weather[0]?.main}</Title>
                <Text level={5} style={{ color: '#8c8c8c', fontSize: 20, marginTop: 0 }}>{currentWeatherData?.weather[0]?.description}</Text>
              </Col>

            </Row>
          </>
        }
      </Spin>
    </Card>
  );
};

CurrentWeather.propTypes = {
  currentWeatherData: PropTypes.any.isRequired
};

export default CurrentWeather;
