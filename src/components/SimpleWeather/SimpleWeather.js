import React from 'react';
import { Typography, Image, Card } from 'antd';
import { fetchUrlIcon } from '../../api/fetchWeather';
import { dateTransform } from '../../api/dateTransform';

const SimpleWeather = ({ weather, isLoading }) => {

  const { Text } = Typography;
  return (
    <Card
      hoverable
      loading={isLoading}
      style={{
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10,
        minWidth: 148,
        minHeight: 208
      }}
    >
      <Text
        style={{
          fontSize: 20
        }}
      >
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
