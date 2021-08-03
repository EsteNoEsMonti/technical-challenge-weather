import React from 'react';
import { Typography, Image, Card } from 'antd';
import { fetchUrlIcon } from '../../api/fetchWeather';
import { dateTransform } from '../../api/dateTransform';
import styles from './SimpleWeather.module.css';

const SimpleWeather = ({ weather, isLoading }) => {

  const { Text } = Typography;
  
  return (
    <Card
      hoverable
      loading={isLoading}
      className={styles.cardContainer}
    >
      <Text className={styles.textDate}>
        {dateTransform(weather.dt_txt)}
      </Text> <br />

      <Image
        width={100}
        src={fetchUrlIcon(weather.weather[0].icon)}
        preview={false}
      /> <br />

      <Text>{parseInt(weather?.main?.temp_max)}°C</Text>
      <Text style={{ color: '#8c8c8c', marginLeft: 10 }}>{parseInt(weather?.main?.temp_min)}°C</Text>
    </Card>
  );
};

export default SimpleWeather;
