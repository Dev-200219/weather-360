import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import AQIChart from './Components/AQIChart/AQIChart';
import AstroData from './Components/AstroData/AstroData';
import { Grid } from '@mui/material';
import Forecast from './Components/Forecast/Forecast';

function App() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [unit, setUnit] = useState('celsius');
  const [AQIData, setAQIData] = useState({});
  const [astroData, setAstroData] = useState({})
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocation({ lat: coords.latitude, lng: coords.longitude });
    })
  }, [])

  return (
    <>
      <Header setLocation={setLocation} unit={unit} setUnit={setUnit} />
      <Grid container>
        <Grid item md={8}>
          <WeatherCard location={location} unit={unit} setAQIData={setAQIData} setAstroData={setAstroData} setForecastData={setForecastData} />
        </Grid>
        <Grid item md={4}>
          <AstroData astroData={astroData} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={8}>
          <AQIChart AQIData={AQIData} />
        </Grid>
        <Grid item md={4}>
          <Forecast forecastData={forecastData} unit={unit}/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
