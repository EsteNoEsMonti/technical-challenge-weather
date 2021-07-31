import React, { useState, useEffect } from 'react';
import { Select, Typography } from 'antd';

import { fetchCurrentWeatherData, fetchForecastWeatherData } from './api/fetchWeather';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ListSimpleWeather from './components/ListSimpleWeather/ListSimpleWeather';
import PublicLayout from './components/PublicLayout/PublicLayout';

function App() {
  const { Option } = Select;
  const { Title } = Typography;

  const [query, setQuery] = useState('cordoba')
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [currentIsLoading, setCurrentIsLoading] = useState(true);
  const [forecastWeatherData, setForecastWeatherData] = useState();
  const [forecastIsLoading, setForecastIsLoading] = useState(true);

  const onChange = (value) => {
    setQuery(value);
    setCurrentIsLoading(true);
    setForecastIsLoading(true);
  };

  const getCurrentWeatherData = async () => {
    const data = await fetchCurrentWeatherData(query);
    setCurrentWeatherData(data);
    setCurrentIsLoading(false);
  };

  const getForecastWeatherData = async () => {
    const data = await fetchForecastWeatherData(query);
    setForecastWeatherData(data);
    setForecastIsLoading(false);
  };

  useEffect(() => {
    getCurrentWeatherData();
    getForecastWeatherData();
  }, [query]);

  return (
    <PublicLayout>

      <div >
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
    </PublicLayout>
  );
}

export default App;
