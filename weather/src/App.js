
import { useState } from 'react';
import './components/WeatherAPI'
import WeatherAPI from './components/WeatherAPI';
import WeatherList from './components/WeatherList';
import './app.css'
import WeatherDetails from './components/WeatherDetails';

function App() {

  const [data, setData] = useState();
  const [detail , setDetail] = useState();


  return (
    <div className="App">
      <WeatherAPI setData={setData} />
      <WeatherList data={data} setDetail = {setDetail} />
      <WeatherDetails detail = {detail} />
    </div>
  );
}

export default App;
