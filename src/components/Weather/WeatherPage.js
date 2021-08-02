import React from 'react';
import { Select, Typography } from 'antd';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ListSimpleWeather from '../ListSimpleWeather/ListSimpleWeather';


const WeatherPage = ({
  onChange,
  currentWeatherData,
  currentIsLoading,
  forecastWeatherData,
  forecastIsLoading
}) => {
  const { Option } = Select;
  const { Title } = Typography;
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Title>Technical Challenge - Weather</Title>

        <Select
          showSearch
          style={{ width: 280, marginLeft: 'auto', marginRight: 'auto' }}
          optionFilterProp="children"
          onChange={onChange}
          defaultValue="cordoba"
          help="asdasdasdas"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
        >
          <Option value="cordoba">Córdoba</Option>
          <Option value="catamarca">San Fernando del Valle de Catamarca</Option>
          <Option value="tucuman">San Miguel de Tucumán</Option>
          <Option value="salta">Salta</Option>
          <Option value="rosario">Rosario</Option>
        </Select>
      </div>

      <CurrentWeather
        currentWeatherData={currentWeatherData}
        isLoading={currentIsLoading}
      />

      <ListSimpleWeather
        forecastWeatherData={forecastWeatherData}
        isLoading={forecastIsLoading}
      />

    </>
  );
};

export default WeatherPage;
