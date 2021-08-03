import React from 'react';
import { Row, Col, Typography, Image, Spin, Card } from 'antd';
import { fetchUrlIcon } from '../../api/fetchWeather';
import styles from './CurrentWeather.module.css'

const CurrentWeather = ({ currentWeatherData, isLoading }) => {
  const { Title, Text } = Typography;
  const textMuted = '#8c8c8c';

  return (
    <Card
      hoverable
      className={styles.cardConteiner}
      style={{ margin: '10px auto' }}
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
                  <Col>
                    <Title style={{ margin: 'auto' }} className={styles.marginTitle}>{currentWeatherData?.main.temp}</Title>
                  </Col>
                  <Col>
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
                    <Text style={{ color: textMuted }}>Feels Like: <b>{parseInt(currentWeatherData?.main?.feels_like)} °C</b></Text> <br />
                    <Text style={{ color: textMuted }}>Humidity: <b>{currentWeatherData?.main?.humidity}%</b></Text> <br />
                    <Text style={{ color: textMuted }}>Pressure: <b>{currentWeatherData?.main?.pressure} hPa</b></Text> <br />
                    <Text style={{ color: textMuted }}>Cloudiness: <b>{currentWeatherData?.clouds.all}%</b></Text> <br />
                  </Col>
                  <Col>
                    <Text style={{ color: textMuted }}>Wind Deg: <b>{currentWeatherData?.wind?.deg}°</b></Text> <br />
                    <Text style={{ color: textMuted }}>Wind Speed: <b>{currentWeatherData?.wind?.speed} m/s</b></Text> <br />
                    <Text style={{ color: textMuted }}>Wind gust: <b>{currentWeatherData?.wind?.gust} m/s</b></Text> <br />
                  </Col>
                </Row>
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} style={{ textAlign: 'right' }}>
                <Title
                  style={{ marginBottom: 0 }}
                >
                  {currentWeatherData?.name}, {currentWeatherData?.sys?.country}
                </Title>
                <Text
                  level={3}
                  className={styles.textDate}
                  style={{ color: textMuted }}
                >
                  {new Date().toDateString()}
                </Text>
                <Title
                  level={3}
                  style={{ margin: 0 }}
                >
                  {currentWeatherData?.weather[0]?.main}
                </Title>
                <Text
                  level={5}
                  className={styles.textDescriptionWeather}
                  style={{ color: textMuted }}
                >
                  {currentWeatherData?.weather[0]?.description}
                </Text>
              </Col>
            </Row>
          </>
        }
      </Spin>
    </Card>
  );
};

export default CurrentWeather;
