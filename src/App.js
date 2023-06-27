import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import WeatherCard from './Components/WeatherCard/WeatherCard';

function App() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [unit, setUnit] = useState('celsius');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocation({ lat: coords.latitude, lng: coords.longitude });
    })
  }, [])

  return (
    <>
      <Header setLocation={setLocation} unit={unit} setUnit={setUnit} />
      <WeatherCard location={location} unit={unit}/>
    </>
  );
}

export default App;
