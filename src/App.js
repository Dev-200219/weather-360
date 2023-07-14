import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import AQIChart from './Components/AQIChart/AQIChart';
import AstroData from './Components/AstroData/AstroData';
import { Grid } from '@mui/material';
import Forecast from './Components/Forecast/Forecast';
import NewsCard from './Components/NewsCard/NewsCard';

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
      <Grid container spacing={2}>
        <Grid item lg={8} xs={12}>
          <WeatherCard location={location} unit={unit} setAQIData={setAQIData} setAstroData={setAstroData} setForecastData={setForecastData} />
        </Grid>
        <Grid item lg={4} xs={12}>
          <AstroData astroData={astroData} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={8} xs={12}>
          <AQIChart AQIData={AQIData} />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Forecast forecastData={forecastData} unit={unit}/>
          <NewsCard/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
