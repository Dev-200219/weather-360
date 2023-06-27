import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import AQIChart from './Components/AQIChart/AQIChart';

function App() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [unit, setUnit] = useState('celsius');
  const [AQIData, setAQIData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocation({ lat: coords.latitude, lng: coords.longitude });
    })
  }, [])

  return (
    <>
      <Header setLocation={setLocation} unit={unit} setUnit={setUnit} />
      <WeatherCard location={location} unit={unit} setAQIData={setAQIData}/>
      <AQIChart AQIData={AQIData}/>
    </>
  );
}

export default App;
