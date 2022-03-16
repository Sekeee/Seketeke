
import { useState } from 'react';
import './components/WeatherAPI'
import WeatherAPI from './components/WeatherAPI';
import WeatherList from './components/WeatherList';

function App() {

  const [data, setData] = useState();

  return (
    <div className="App">
      <WeatherAPI setData={setData} />
      <WeatherList data={data} />
    </div>
  );
}

export default App;
