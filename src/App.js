import React, { useState, useEffect } from 'react';
import { Select } from 'antd';

import { fetchCurrentWeatherData, fetchForecastWeatherData } from './api/fetchWeather';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ListSimpleWeather from './components/ListSimpleWeather/ListSimpleWeather';
import PublicLayout from './components/PublicLayout/PublicLayout';

function App() {
  const { Option } = Select;

  const [query, setQuery] = useState('cordoba')
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [forecastWeatherData, setForecastWeatherData] = useState();

  const onChange = (value) => {
    setQuery(value);
  };

  const getCurrentWeatherData = async () => {
    const data = await fetchCurrentWeatherData(query);
    setCurrentWeatherData(data);
  };

  const getForecastWeatherData = async () => {
    const data = await fetchForecastWeatherData(query);
    setForecastWeatherData(data);
  };

  useEffect(() => {
    getCurrentWeatherData();
    getForecastWeatherData();
  }, [query]);

  return (
    <PublicLayout>

      <Select
        showSearch
        style={{ width: 200 }}
        optionFilterProp="children"
        onChange={onChange}
        defaultValue="cordoba"
        help="asdasdasdas"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="cordoba">Córdoba</Option>
        <Option value="catamarca">San Fernando del Valle de Catamarca</Option>
        <Option value="tucuman">San Miguel de Tucumán</Option>
        <Option value="salta">Salta</Option>
        <Option value="rosario">Rosario</Option>
      </Select>
      <hr />
      <CurrentWeather currentWeatherData={currentWeatherData} />
      <hr />
      <ListSimpleWeather forecastWeatherData={forecastWeatherData} />
    
    </PublicLayout>
  );
}

export default App;
